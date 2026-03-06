---
title: Ansible
description: Automação com Ansible
visibility: public
template: docs
category: devops
---

# Ansible

Ferramenta de automação de infraestrutura.

## Instalação

```bash
# Ubuntu/Debian
apt install ansible

# RHEL/Rocky
dnf install ansible
```

## Inventory

Criar arquivo `inventory.ini`:

```ini
[webservers]
web1 ansible_host=192.168.1.10
web2 ansible_host=192.168.1.11

[databases]
db1 ansible_host=192.168.1.20
```

## Playbook básico

```yaml
---
- name: Configurar webservers
  hosts: webservers
  become: yes
  
  tasks:
    - name: Instalar nginx
      apt:
        name: nginx
        state: present
        
    - name: Iniciar nginx
      service:
        name: nginx
        state: started
        enabled: yes
```

## Executar playbook

```bash
ansible-playbook -i inventory.ini playbook.yml
```

## Comandos ad-hoc

```bash
# Ping todos os hosts
ansible all -i inventory.ini -m ping

# Executar comando
ansible webservers -i inventory.ini -a "uptime"

# Copiar arquivo
ansible all -i inventory.ini -m copy -a "src=/local/file dest=/remote/file"
```
