---
title: Instalar Terraform
description: Instalação do Terraform no Rocky Linux
visibility: public
template: docs
category: devops
---

# Instalar Terraform

Guia de instalação do Terraform em sistemas Linux.

## Instalação via DNF

```bash
sudo dnf install -y dnf-plugins-core
sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
sudo dnf install terraform
```

## Verificar instalação

```bash
terraform version
```

## Primeiro projeto

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

## Comandos básicos

```bash
terraform init
terraform plan
terraform apply
terraform destroy
```
