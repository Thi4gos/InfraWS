import boto3
from app import config

def listar_arquivos():
    s3 = boto3.client(
        's3',
        aws_access_key_id=config.AWS_ACCESS_KEY,
        aws_secret_access_key=config.AWS_SECRET_KEY
    )
    objetos = s3.list_objects(Bucket='meu-bucket')
    return [obj['Key'] for obj in objetos.get('Contents', [])]
