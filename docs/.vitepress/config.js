import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
    
    lang: 'zh-CN',
    title: '阴云文档',
    description: '阴云相关项目与工程的文档说明',

    head: [
        ['link', {rel: 'icon', href: '/icon.png'}],
        ['meta', {name: 'keywords', content: '阴云,文档,帮助,说明,教程,介绍,阴云皮肤,渐蓝方块,vuepress'}],
        ['meta', {name: 'author', content: '阴云工作室,YinyunStudio'}],
    ],

    
    lastUpdated: true,

    themeConfig: {

        siteTitle: '阴云文档',
        logo: '/logo.png',

        
        outlineTitle: '本页目录',

        
        nav: [
            { text: '阴云皮肤', link: '/yinyunskin/' },
            { text: '渐蓝方块', link: '/twobluecube/' },
            { text: '关于', link: '/about/' }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/YinyunStudio/YinyunDocs/' }
        ],

        sidebar: sidebar,

        editLink: {
            pattern:'https://github.com/YinyunStudio/YinyunDocs/edit/main/docs/:path',
            text:'在GitHub上编辑此页'
        },

        
        lastUpdatedText: '最后更新于',

        
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },

        footer: {
            // Thanks The Docs Team, All Document Writer and VitePress, Netlify, Gethub
            message: '本文档内容采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 进行许可',
            copyright: 'Copyright © 2022-2023 YinyunStudio'
        }
    }
})