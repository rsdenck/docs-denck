---
title: Kubernetes Básico
description: Comandos essenciais do Kubernetes
visibility: public
template: docs
category: cloud
---

# Kubernetes

Orquestração de containers em produção.

## Kubectl básico

```bash
# Listar pods
kubectl get pods

# Listar todos os recursos
kubectl get all

# Descrever pod
kubectl describe pod pod-name

# Logs
kubectl logs pod-name

# Executar comando
kubectl exec -it pod-name -- bash
```

## Deployments

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

## Aplicar configuração

```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl scale deployment nginx-deployment --replicas=5
```

## Services

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```
