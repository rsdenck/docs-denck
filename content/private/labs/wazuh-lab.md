---
title: Wazuh SIEM Lab
description: Laboratório de segurança com Wazuh
visibility: private
template: lab
category: labs
---

# Wazuh SIEM Lab

Implementação de SIEM com Wazuh para monitoramento de segurança.

## Step 1: Instalar Wazuh Manager

```bash
curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh
bash wazuh-install.sh -a
```

## Step 2: Acessar dashboard

```
URL: https://wazuh-server-ip
User: admin
Pass: (gerado na instalação)
```

## Step 3: Instalar agente Linux

```bash
curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | apt-key add -
echo "deb https://packages.wazuh.com/4.x/apt/ stable main" | tee /etc/apt/sources.list.d/wazuh.list
apt update
apt install wazuh-agent

# Configurar manager
echo "WAZUH_MANAGER='192.168.1.100'" >> /var/ossec/etc/ossec.conf
systemctl restart wazuh-agent
```

## Step 4: Configurar regras customizadas

Editar `/var/ossec/etc/rules/local_rules.xml`:

```xml
<group name="local,">
  <rule id="100001" level="10">
    <if_sid>5710</if_sid>
    <match>Failed password</match>
    <description>SSH brute force attempt</description>
  </rule>
</group>
```

## Step 5: Monitorar logs

```bash
tail -f /var/ossec/logs/alerts/alerts.log
```
