---
title: Prometheus
description: Monitoramento com Prometheus
visibility: public
template: docs
category: monitoring
---

# Prometheus

Sistema de monitoramento e alertas.

## Instalação

```bash
# Download
wget https://github.com/prometheus/prometheus/releases/download/v2.45.0/prometheus-2.45.0.linux-amd64.tar.gz
tar xvfz prometheus-*.tar.gz
cd prometheus-*

# Executar
./prometheus --config.file=prometheus.yml
```

## Configuração básica

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
      
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
```

## PromQL básico

```promql
# CPU usage
100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)

# Memory usage
node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100

# Disk usage
100 - ((node_filesystem_avail_bytes / node_filesystem_size_bytes) * 100)
```
