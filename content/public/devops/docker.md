---
title: Docker Essencial
description: Comandos essenciais do Docker
visibility: public
template: cheatsheet
category: devops
---

# Docker Cheatsheet

## Containers

```bash
# Listar containers
docker ps
docker ps -a

# Iniciar container
docker start container_id

# Parar container
docker stop container_id

# Remover container
docker rm container_id

# Logs
docker logs -f container_id

# Executar comando
docker exec -it container_id bash
```

## Imagens

```bash
# Listar imagens
docker images

# Baixar imagem
docker pull nginx:latest

# Remover imagem
docker rmi image_id

# Build
docker build -t myapp:1.0 .
```

## Networks

```bash
# Listar networks
docker network ls

# Criar network
docker network create mynetwork

# Conectar container
docker network connect mynetwork container_id
```
