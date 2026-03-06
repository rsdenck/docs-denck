---
title: AWS CLI
description: Comandos essenciais da AWS CLI
visibility: public
template: cheatsheet
category: cloud
---

# AWS CLI Cheatsheet

## EC2

```bash
# Listar instâncias
aws ec2 describe-instances

# Iniciar instância
aws ec2 start-instances --instance-ids i-1234567890abcdef0

# Parar instância
aws ec2 stop-instances --instance-ids i-1234567890abcdef0

# Criar instância
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t2.micro \
  --key-name MyKeyPair
```

## S3

```bash
# Listar buckets
aws s3 ls

# Criar bucket
aws s3 mb s3://my-bucket

# Upload arquivo
aws s3 cp file.txt s3://my-bucket/

# Download arquivo
aws s3 cp s3://my-bucket/file.txt .

# Sync diretório
aws s3 sync ./local s3://my-bucket/
```

## IAM

```bash
# Listar usuários
aws iam list-users

# Criar usuário
aws iam create-user --user-name john

# Listar roles
aws iam list-roles
```
