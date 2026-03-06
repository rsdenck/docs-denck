---
title: Bash Scripting
description: Scripts em Bash
visibility: public
template: cheatsheet
category: linux
---

# Bash Cheatsheet

## Variáveis

```bash
# Definir variável
NAME="John"
echo $NAME

# Variáveis de ambiente
export PATH=$PATH:/new/path

# Argumentos
$0  # Nome do script
$1  # Primeiro argumento
$#  # Número de argumentos
$@  # Todos os argumentos
```

## Condicionais

```bash
if [ "$VAR" = "value" ]; then
  echo "Match"
elif [ "$VAR" = "other" ]; then
  echo "Other"
else
  echo "No match"
fi
```

## Loops

```bash
# For loop
for i in {1..5}; do
  echo $i
done

# While loop
while [ $count -lt 10 ]; do
  echo $count
  ((count++))
done
```

## Funções

```bash
function greet() {
  echo "Hello $1"
}

greet "World"
```

## Operadores de arquivo

```bash
-f  # Arquivo existe
-d  # Diretório existe
-r  # Arquivo legível
-w  # Arquivo gravável
-x  # Arquivo executável
```
