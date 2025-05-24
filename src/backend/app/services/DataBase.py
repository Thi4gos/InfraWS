from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import boto3
import uuid

app = FastAPI()

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')  # ajuste sua região
table = dynamodb.Table('tasks')  # nome da sua tabela

class Task(BaseModel):
    id: str = None
    title: str
    description: str

@app.get("/tasks")
def get_tasks():
    response = table.scan()
    return response.get('Items', [])

@app.post("/tasks")
def create_task(task: Task):
    task.id = str(uuid.uuid4())
    table.put_item(Item=task.dict())
    return task

@app.put("/tasks/{task_id}")
def update_task(task_id: str, task: Task):
    response = table.update_item(
        Key={'id': task_id},
        UpdateExpression="set title=:t, description=:d",
        ExpressionAttributeValues={
            ':t': task.title,
            ':d': task.description
        },
        ReturnValues="ALL_NEW"
    )
    return response['Attributes']

@app.delete("/tasks/{task_id}")
def delete_task(task_id: str):
    table.delete_item(Key={'id': task_id})
    return {"ok": True}