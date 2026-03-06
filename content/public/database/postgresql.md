---
title: PostgreSQL
description: Banco de dados PostgreSQL
visibility: public
template: docs
category: database
---

# PostgreSQL

Sistema de gerenciamento de banco de dados relacional.

## Instalação

```bash
# Ubuntu/Debian
apt install postgresql postgresql-contrib

# RHEL/Rocky
dnf install postgresql-server postgresql-contrib
postgresql-setup --initdb
systemctl start postgresql
```

## Acessar console

```bash
sudo -u postgres psql
```

## Comandos básicos

```sql
-- Listar databases
\l

-- Conectar database
\c mydb

-- Listar tabelas
\dt

-- Descrever tabela
\d users

-- Sair
\q
```

## Criar database e usuário

```sql
CREATE DATABASE myapp;
CREATE USER myuser WITH PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE myapp TO myuser;
```

## Backup e restore

```bash
# Backup
pg_dump mydb > backup.sql

# Restore
psql mydb < backup.sql
```
