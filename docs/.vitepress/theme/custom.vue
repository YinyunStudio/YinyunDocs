<template>
    <Layout>
        <template #not-found>
            <PageNotFound />
        </template>
        <template #aside-bottom>
            <Copyright />
        </template>
    </Layout>
</template>


<script setup>
import PageNotFound from './E404.vue'
import Copyright from './Copyright.vue'

import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<style>
</style>