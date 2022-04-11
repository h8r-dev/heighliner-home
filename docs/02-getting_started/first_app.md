---
title: Your First App
sidebar_position: 2
---

:::info

Make sure you have followed the [Installation guide](installation.md) before you run this example.

:::

## Choose a stack

List all heighliner stacks:

```shell
hln list stacks
```

Output:

```shell
NAME          VERSION  DESCRIPTION
gin-vue       latest
...
```

You can choose the stack that fits your language and framework.
In the following example, we will use `gin-vue`.

## Create your application

Create your application interactively:

```shell
hln up -s gin-vue -i
```

Input the values one by one according to the promt and your application will be set up automatically.

> If the progress of spinning up your application failed accidentally, feel free to **rerun** the `hln up -i` command and input the same values again. `hln` has the ability of caching.
![hln CLI failure](/img/docs/hln_cli_failure.png)

The output will look like the following:

```shell
application:
  domain: production.xxxxx.go-gin.h8r.app
  ingress: 101.32.16.242
repository:
  backend: |
    https://github.com/h8r-dev/docs2.git
  frontend: |
    https://github.com/h8r-dev/docs2-front.git
  deploy: |
    https://github.com/h8r-dev/docs2.git
infra:
  - type: prometheus
    url: xxxxx.prom.stack.h8r.io
  - type: grafana
    url: xxxxx.grafana.stack.h8r.io
    username: admin
    password: |
      prom-operator
  - type: alertManager
    url: xxxxx.alert.stack.h8r.io
  - type: argoCD
    url: xxxxx.argocd.stack.h8r.io
    username: admin
    password: |
      LTXbYLAVFkPQ-Z9o
  - type: nocalhost
    url: xxxxx.nocalhost.stack.h8r.io
    username: admin@admin.com
    password: "123456"

```

Congrats! You have initialized your application with `hln` successfully. Click the github url to start developing your new application. All of the Cloud-Native infrastructure and CI/CD pipelines have been set up properly. Feel free to click these links and input the account and password of each component to see its dashboard.

## Clean up
