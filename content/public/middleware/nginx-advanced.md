---
title: Nginx Avançado
description: Configurações avançadas do Nginx
visibility: public
template: docs
category: middleware
---

# Nginx Avançado

Configurações avançadas e otimizações.

## Load Balancing

```nginx
upstream backend {
    least_conn;
    server backend1.example.com:8080 weight=3;
    server backend2.example.com:8080;
    server backend3.example.com:8080 backup;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
```

## Rate Limiting

```nginx
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    location /api/ {
        limit_req zone=mylimit burst=20 nodelay;
        proxy_pass http://backend;
    }
}
```

## Caching

```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g;

server {
    location / {
        proxy_cache my_cache;
        proxy_cache_valid 200 60m;
        proxy_cache_use_stale error timeout http_500 http_502 http_503;
        proxy_pass http://backend;
    }
}
```

## SSL Optimization

```nginx
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
ssl_stapling on;
ssl_stapling_verify on;
```
