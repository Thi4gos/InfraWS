import requests

url = "https://fg4rbnmcz1.execute-api.us-east-1.amazonaws.com/"
data = {"title": "Nova tarefa", "description": "Descrição"}
response = requests.post(url, json=data)
print(response.json())