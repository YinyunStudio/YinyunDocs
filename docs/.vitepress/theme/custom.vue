<style scoped>
    .NotFound {
        padding: 64px 24px 96px;
        text-align: center;
    }

    @media (min-width: 768px) {
        .NotFound {
            padding: 96px 32px 168px;
        }
    }

    .code {
        line-height: 64px;
        font-size: 64px;
        font-weight: 600;
    }

    .title {
        padding-top: 12px;
        letter-spacing: 2px;
        line-height: 20px;
        font-size: 20px;
        font-weight: 700;
    }

    .divider {
        margin: 24px auto 18px;
        width: 64px;
        height: 1px;
        background-color: var(--vp-c-divider);
    }

    .quote {
        margin: 0 auto;
        max-width: 270px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-2);
        position: relative;
        transition: margin 200ms;
    }

    .quote:hover {
        margin-bottom: 2rem;
    }

    .quote:hover .original {
        opacity: 1;
        height: unset;
    }

    .original {
        opacity: 0;
        font-size: 10px;
        position: absolute;
        top: 0;
        height: 100%;
        overflow: hidden;
        background-color: var(--vp-c-bg);
        transition: opacity 200ms;
    }

    .original span {
        display: block;
        padding: 0;
        margin: 0 0 0.5rem 0;
        line-height: 12px;
    }

    .action {
        padding-top: 20px;
    }

    .link {
        display: inline-block;
        border: 1px solid var(--vp-c-brand);
        border-radius: 16px;
        padding: 3px 16px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-brand);
        transition: border-color 0.25s, color 0.25s;
    }

    .link:hover {
        border-color: var(--vp-c-brand-dark);
        color: var(--vp-c-brand-dark);
    }
</style>


<template>
    <Layout>
        <template #not-found>
            <div class="NotFound">
                <p class="code">404</p>
                <h1 class="title">该页面不存在</h1>
                <div class="divider"></div>
                <blockquote class="quote">
                    但如果你迷失了方向，只要不停下脚步，<br>道路就会不断延伸。所以不要停下来啊——
                    <blockquote class="original">
                        <span>原文</span>
                        But if you don't change your direction, and if you keep looking, you may end up where you are heading.
                    </blockquote>
                </blockquote>
                <div class="action">
                    <a class="link" href="/" aria-label="go to home">回到首页</a>
                </div>
            </div>
        </template>
    </Layout>
</template>


<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>