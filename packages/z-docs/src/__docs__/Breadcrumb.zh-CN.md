---
title: Breadcrumb
wrapperClass: md-breadcrumb
---

# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

适用广泛的基础用法。

在 Breadcrumb 中使用 BreadcrumbItem 标签表示从首页开始的每一级。Elenext 提供了一个 separator 属性，在 Breadcrumb 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠 / 。

```vue demo
<template>
  <e-breadcrumb separator="/">
    <e-breadcrumb-item path="/">首页</e-breadcrumb-item>
    <e-breadcrumb-item><a href="/">活动管理</a></e-breadcrumb-item>
    <e-breadcrumb-item>活动列表</e-breadcrumb-item>
    <e-breadcrumb-item>活动详情</e-breadcrumb-item>
  </e-breadcrumb>
</template>
```
