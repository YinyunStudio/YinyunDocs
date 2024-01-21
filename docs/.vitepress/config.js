import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
    
    lang: 'zh-CN',
    title: '阴云文档',
    description: '阴云相关项目与工程的文档说明',

    head: [
        ['link', {rel: 'icon', href: '/icon.png'}],
        ['meta', {name: 'keywords', content: 'Yinyun, 阴云, Documentation, 文档, 阴云文档, 帮助, 说明, 教程, 介绍, 阴云皮肤, 渐蓝方块, VitePress'}],
        ['meta', {name: 'author', content: 'Yinyun Studio'}],
    ],

    cleanUrls: true,

    
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

        search: {
            provider: 'local',
            options: {
                 locales: {
                    zh_CN: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            }
                        },
                        modal: {
                            noResultsText: '无法找到相关结果',
                            resetButtonTitle: '清除查询条件',
                            footer: {
                                selectText: '选择',
                                navigateText: '切换'
                            }
                        }
                    }
                }
            }
        },

        editLink: {
            pattern:'https://github.com/YinyunStudio/YinyunDocs/edit/main/docs/:path',
            text:'编辑此页'
        },

        
        lastUpdatedText: "更新于",

        
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },

        footer: {
            copyright: '© 2024 YinyunStudio, CC BY-NC-SA 4.0 license.'
        }
    }
})