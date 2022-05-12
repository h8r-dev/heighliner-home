---
title: Your First App
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info

Make sure you have followed [the installation guide](/docs/getting_started/installation) before continuing.

:::

<div
  style={{
    marginBottom: 50,
    marginTop: 50,
  }}
>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Kat7GEfWXwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Ever want to have a Vercel-style experience when creating your nextjs app?
But without the limitation to a specific vendor?
In this doc, we will show you how to create a nextjs app in Vercel style with an open source, cloud native stack.

## List all stacks

List all default stacks:

```shell
hln list stacks
```

Output:

```shell
NAME        VERSION
sample      0.0.1
gin-next    0.0.1
spring-vue  0.0.1
gin-vue     0.0.1
```

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 50,
    marginTop: 50
  }}
>
  <Video
    poster="/img/homepage/video-poster.png"
    src="https://dl.h8r.io/Heighliner-Introduction-English.mp4"
  ></Video>
</div>

## Create your application

Create your application interactively:

```shell
hln up hello-world -s sample -i
```

> Note: `hello-world` is what we call application name.It should obey the rules in [DNS1123](https://datatracker.ietf.org/doc/html/rfc1123)

Input the values one by one according to the promt:

```shell
Path to your kubeconfig file (required):

> ~/.kube/config

Which github organization do you want to use(Can be set as personal github id)? (required):

> [organization name or github id]

Which domain do you want to use?:

> h8r.site
```

Then it will start executing the setup instructions. Output looks like:

![alt](/img/docs/getting-started/stack_output.png)

:::tip

If `hln up` command failed due to unexpected network problems, feel free to **rerun** it again.

:::

Get application status:

```shell
hln status hello-world
```

Output looks like:

```shell
Heighliner application hello-world is ready!
You can access argocd on argocd.h8r.site [Username: admin Password: vGByPtC9gsTdZogT]

There are 1 services deployed by argocd:
1: hello-world-frontend
   hello-world-frontend has been deployed to k8s cluster, you can access it by k8s Service url: hello-world-frontend.h8r.site
   hello-world-frontend's source code resides on github repository: https://github.com/hongchao-org/hello-world-frontend
```

Congrats! You have created your first application with `hln` successfully. All of the cloud-native architecture have been set up properly.
Click the GitHub url and dashboard links to see the effects.

## Set Domain Routing

:::info

Below is assuming you don't own a real domain name and use `h8r.site` as your domain name.
In production, we recommend setting your DNS record to the public ingress IP.

:::

Get your ingress IP:

<Tabs
className="unique-tabs"
defaultValue="local"
values={[
{label: 'Kind/Minikube', value: 'local'},
{label: 'Cloud', value: 'cloud'},
]}>

<TabItem value="local">

```shell
127.0.0.1
```

</TabItem>

<TabItem value="cloud">

```shell
kubectl -n ingress-nginx get svc ingress-nginx-controller -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

</TabItem>

</Tabs>

Put the following lines into your `/etc/hosts` (replace <ingress-ip\> with above result):

```txt
<ingress-ip> argocd.h8r.site
<ingress-ip> hello-world-frontend.h8r.site
```

## ArgoCD

Check your **ArgoCD** dashboard at [argocd.h8r.site](http://argocd.h8r.site):
> Note: get argocd credentials with `hln status` command

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
  <img src={useBaseUrl('/img/docs/getting-started/argocd-home.png')} />
</div>

You can check the k8s resources for the application:

![alt](/img/docs/getting-started/argocd-details.png)

## Nextjs app

View you nextjs app at [hello-world-frontend.h8r.site](http://hello-world-frontend.h8r.site):

![alt](/img/docs/getting-started/sample-application.png)

## GitHub repos

You can also check your repos on **GitHub**:

<div
  style={{
    maxWidth: 800,
    height: 'auto',
    marginBottom: 30,
    marginTop: 30,
  }}
>
  <img src={useBaseUrl('/img/docs/getting-started/github_repos.png')} />
</div>

## Clean up

```shell
hln down hello-world
```
