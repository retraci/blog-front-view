export function PageData() {
    return {
        homePageData: {
            "1": {
                "data": {
                    "code": 200,
                    "totalPage": 4,
                    "currentPage": 1,
                    "data": [
                        {
                            "blog_id": 3,
                            "blog_title": "springboot+vue博客项目上线啦",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                            "blog_summary": "耗时两个半星期的前后端分离的博客项目正式上线，欢迎大家来踩~",
                            "blog_status": 0,
                            "blog_visits": 704,
                            "create_time": "2021-02-12 22:50",
                            "update_time": "2021-05-05 08:12",
                            "is_top": 1,
                            "blog_like": 13,
                            "comment_cnt": 11,
                            "cateGory": {
                                "category_id": 3,
                                "category_name": "项目"
                            }
                        },
                        {
                            "blog_id": 29,
                            "blog_title": "Redis学习总结",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                            "blog_summary": "Redis是一个使用c语音开发的数据库，不过与传统的数据库不同的是Redis的数据是存储在内存中的，也就是Redis是内存数据库，所以读写速度特别快，因此Redis被广泛应用于缓存方向。",
                            "blog_status": 0,
                            "blog_visits": 134,
                            "create_time": "2021-04-05 12:52",
                            "update_time": "2021-04-29 14:08",
                            "is_top": 0,
                            "blog_like": 2,
                            "comment_cnt": 1,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 28,
                            "blog_title": "JVM性能分析器-JProfiler的使用",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                            "blog_summary": "JProfiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。",
                            "blog_status": 0,
                            "blog_visits": 98,
                            "create_time": "2021-03-23 08:40",
                            "update_time": "2021-04-29 14:08",
                            "is_top": 0,
                            "blog_like": 3,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 27,
                            "blog_title": "JVM调优参数记录（持续更新）",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295952_b1f3ae4b-6e2f-432e-a2f5-5a1b3da871f4.jpg",
                            "blog_summary": "记录个人使用过的JVM调优参数",
                            "blog_status": 0,
                            "blog_visits": 23,
                            "create_time": "2021-03-23 07:56",
                            "update_time": "2021-04-23 12:45",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 26,
                            "blog_title": "JVM垃圾回收",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295956_cac7c1a5-c455-4277-a844-8e2cb9108885.jpg",
                            "blog_summary": "Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配。同时，Java 自动内存管理最核心的功能是堆内存中对象的分配与回收。",
                            "blog_status": 0,
                            "blog_visits": 90,
                            "create_time": "2021-03-23 07:53",
                            "update_time": "2021-04-23 12:45",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        }
                    ]
                },
                "status": 200,
                "statusText": "",
                "headers": {
                    "content-length": "1241",
                    "content-type": "application/json"
                },
                "config": {
                    "url": "/blogList",
                    "method": "get",
                    "headers": {
                        "Accept": "application/json, text/plain, */*"
                    },
                    "params": {
                        "currentPage": 1
                    },
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [
                        null
                    ],
                    "transformResponse": [
                        null
                    ],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "2": {
                "data": {
                    "code": 200,
                    "totalPage": 4,
                    "currentPage": 2,
                    "data": [
                        {
                            "blog_id": 25,
                            "blog_title": "JVM学习之双亲委派模型",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705773753_e911c3c5-e7e1-4167-a431-127578bc021b.jpg",
                            "blog_summary": "JVM类加载器和双亲委派模型详解，个人学习分享。",
                            "blog_status": 0,
                            "blog_visits": 22,
                            "create_time": "2021-03-20 13:11",
                            "update_time": "2021-04-29 14:16",
                            "is_top": 0,
                            "blog_like": 2,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 24,
                            "blog_title": "记spring读取properties文件username报错问题",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                            "blog_summary": "记一次spring读取properties文件username报错问题，来自一个朋友的报错。受益匪浅。",
                            "blog_status": 0,
                            "blog_visits": 44,
                            "create_time": "2021-03-07 05:44",
                            "update_time": "2021-04-29 14:15",
                            "is_top": 0,
                            "blog_like": 3,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 23,
                            "blog_title": "认证授权篇之JWT详解",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618929707504_096262d1-7821-4c47-b01d-47c25a91fe14.jpg",
                            "blog_summary": "JWT的原理是，服务器认证后，生成一个JSON对象，返回给用户，以后，用户与服务端通信的时候，都要发送这个JSON对象，服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器生成这个对象的时候，会加上签名。这样，服务器就不需要保存Session数据了，这体现了JWT的无状态特性。",
                            "blog_status": 0,
                            "blog_visits": 39,
                            "create_time": "2021-03-06 08:48",
                            "update_time": "2021-04-23 12:46",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 22,
                            "blog_title": "学习笔记——认证授权基础篇",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                            "blog_summary": "学习笔记——认证授权基础篇，了解相关概念。",
                            "blog_status": 0,
                            "blog_visits": 23,
                            "create_time": "2021-03-03 08:44",
                            "update_time": "2021-04-23 12:47",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 21,
                            "blog_title": "学习笔记——数据脱敏",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182064979_f57d1d10-ae63-4005-b8d5-e48109ea0dbe.jpg",
                            "blog_summary": "数据脱敏就是在给定的脱敏规则和策略下，对敏感数据如手机号,银行卡号等信息，进行转化或修改的手段，防止敏感数据泄露。\\n\\n生活中有许多数据脱敏的例子，比如淘宝订单详情，京东匿名评论，有一些信息会被用*代替，保障了隐私不被泄露，也能防止一些爬虫对有效信息的爬取。",
                            "blog_status": 0,
                            "blog_visits": 22,
                            "create_time": "2021-02-28 15:39",
                            "update_time": "2021-04-23 12:47",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 5,
                                "category_name": "后端"
                            }
                        }
                    ]
                },
                "status": 200,
                "statusText": "",
                "headers": {
                    "content-length": "1294",
                    "content-type": "application/json"
                },
                "config": {
                    "url": "/blogList",
                    "method": "get",
                    "headers": {
                        "Accept": "application/json, text/plain, */*"
                    },
                    "params": {
                        "currentPage": 2
                    },
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [
                        null
                    ],
                    "transformResponse": [
                        null
                    ],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "3": {
                "data": {
                    "code": 200,
                    "totalPage": 4,
                    "currentPage": 3,
                    "data": [
                        {
                            "blog_id": 8,
                            "blog_title": "Linux基础命令笔记",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182092389_d006a21a-69b9-4ac5-a79b-970bfa3e04aa.jpg",
                            "blog_summary": "记录下上一年学的Linux基础命令笔记~",
                            "blog_status": 0,
                            "blog_visits": 50,
                            "create_time": "2021-02-13 03:42",
                            "update_time": "2021-04-23 12:48",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 7,
                            "blog_title": "Python3爬虫实战【点触验证码】 — 模拟登陆bilibili",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                            "blog_summary": "实现目标：模拟登陆哔哩哔哩，涉及知识：点触验证码的攻克、自动化测试工具 Selenium 的使用，超级鹰打码平台的使用",
                            "blog_status": 0,
                            "blog_visits": 41,
                            "create_time": "2021-02-13 03:35",
                            "update_time": "2021-04-23 12:47",
                            "is_top": 0,
                            "blog_like": 2,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 6,
                            "blog_title": "设计模式之单例模式",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                            "blog_summary": "单例模式是设计模式中最简单的一个设计模式，属于创建型模式，其定义是保证一个类仅有一个实例，并且提供一个访问它的全局访问点。",
                            "blog_status": 0,
                            "blog_visits": 22,
                            "create_time": "2021-02-13 03:33",
                            "update_time": "2021-04-29 14:15",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 5,
                            "blog_title": "神秘国度的爱情故事（树剖+lca）",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                            "blog_summary": "数据结构课设之神秘国度的爱情故事（树剖+lca）",
                            "blog_status": 0,
                            "blog_visits": 21,
                            "create_time": "2021-02-13 03:19",
                            "update_time": "2021-04-23 12:48",
                            "is_top": 0,
                            "blog_like": 1,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        },
                        {
                            "blog_id": 4,
                            "blog_title": "JVM——Java内存区域",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                            "blog_summary": "深入了解java虚拟机笔记",
                            "blog_status": 0,
                            "blog_visits": 31,
                            "create_time": "2021-02-13 03:11",
                            "update_time": "2021-04-23 12:49",
                            "is_top": 0,
                            "blog_like": 4,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 2,
                                "category_name": "学习"
                            }
                        }
                    ]
                },
                "status": 200,
                "statusText": "",
                "headers": {
                    "content-length": "996",
                    "content-type": "application/json"
                },
                "config": {
                    "url": "/blogList",
                    "method": "get",
                    "headers": {
                        "Accept": "application/json, text/plain, */*"
                    },
                    "params": {
                        "currentPage": 3
                    },
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [
                        null
                    ],
                    "transformResponse": [
                        null
                    ],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "4": {
                "data": {
                    "code": 200,
                    "totalPage": 4,
                    "currentPage": 4,
                    "data": [
                        {
                            "blog_id": 2,
                            "blog_title": "冰雪林中著此身，不同桃李混芳尘",
                            "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                            "blog_summary": "冰雪林中著此身，不同桃李混芳尘。博主的个人简介~~",
                            "blog_status": 0,
                            "blog_visits": 73,
                            "create_time": "2021-02-12 22:46",
                            "update_time": "2021-05-05 08:05",
                            "is_top": 0,
                            "blog_like": 4,
                            "comment_cnt": 0,
                            "cateGory": {
                                "category_id": 1,
                                "category_name": "生活"
                            }
                        }
                    ]
                },
                "status": 200,
                "statusText": "",
                "headers": {
                    "content-length": "398",
                    "content-type": "application/json"
                },
                "config": {
                    "url": "/blogList",
                    "method": "get",
                    "headers": {
                        "Accept": "application/json, text/plain, */*"
                    },
                    "params": {
                        "currentPage": 4
                    },
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [
                        null
                    ],
                    "transformResponse": [
                        null
                    ],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            }
        },
        siteInfo: {
            "data": {
                "code": 200, "msg": "请求成功", "data": {
                    "badges": [{
                        "title": "由 Spring Boot 强力驱动",
                        "url": "https://spring.io/projects/spring-boot/",
                        "subject": "Powered",
                        "value": "Spring Boot",
                        "color": "blue"
                    }, {
                        "title": "Vue.js 客户端渲染",
                        "url": "https://cn.vuejs.org/",
                        "subject": "SPA",
                        "value": "Vue.js",
                        "color": "brightgreen"
                    }, {
                        "title": "博客系统由datealive开发",
                        "url": "https://blog.datealive.top/",
                        "subject": "BLOG",
                        "value": "datealive",
                        "color": "yellow"
                    }, {
                        "title": "粤公网备案",
                        "url": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44051302000138",
                        "subject": "粤公网安备 ",
                        "value": "44051302000138号 ",
                        "color": "red"
                    }, {
                        "title": "萌国备案",
                        "url": "https://icp.gov.moe/",
                        "subject": "萌ICP备",
                        "value": "202002000号",
                        "color": "orange"
                    }],
                    "siteInfo": {
                        "reward": "https://cdn.jsdelivr.net/gh/dateolive/Hi-Dream-BlogReSource@main/img/zansan.jpg",
                        "copyright": {"title": "Copyright © 2021 - 2022", "siteName": "Hi-Dream\'s Blog"},
                        "blogName": "Hi-Dream\'s Blog",
                        "backgroundImage": "https://cdn.jsdelivr.net/gh/dateolive/Hi-Dream-BlogReSource@main/img/backgroundimg.jpg",
                        "loginUrl": "https://admin.datealive.top/",
                        "beian": "粤ICP备20036790号-1 ",
                        "headAvatar": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618568996679_5b9c0dca-61c0-405b-973a-adcdc698e058.jpg",
                        "headInfo": "Coding",
                        "webTitleSuffix": " - Hi-Dream\'s Blog",
                        "footerImgTitle": "博客交流群",
                        "footerImgUrl": "https://gitee.com/zhangrenfeng/images/raw/master/img/20210228135547.jpg"
                    },
                    "introduction": {
                        "avatar": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618568996679_5b9c0dca-61c0-405b-973a-adcdc698e058.jpg",
                        "name": "梦独吟",
                        "github": "https://github.com/dateolive",
                        "qq": "http://sighttp.qq.com/authd?IDKEY=2448282543",
                        "bilibili": "https://space.bilibili.com/100669401",
                        "netease": "https://music.163.com/#/user/home?id=550677583",
                        "email": "mailto:2448282543@qq.com",
                        "musicId": "2825591801",
                        "backGroundImage": "https://cdn.kaiming66.com/http-8c4ea3c0a1a65d1118594854ca5b9b1b4dcfeed7.jpg",
                        "rollText": ["若似月轮终皎洁，不辞冰雪为卿热。", "唱罢秋坟愁未歇，春丛认取双栖蝶。"],
                        "favorites": [{
                            "title": "公告栏🤤",
                            "content": "目前博客系统还在开发中~并不是稳定版本，还希望大家积极反馈bug！开源不易，请大家star支持一下！"
                        }, {"title": "博客更新内容😄", "content": "2021-2-27 博客上线更新版本"}, {
                            "title": "博主身份👀️",
                            "content": "一个大二学生 Java/c++/py/web 选手"
                        }]
                    }
                }
            },
            "status": 200,
            "statusText": "",
            "headers": {"content-length": "1336", "content-type": "application/json"},
            "config": {
                "url": "/siteInfo",
                "method": "get",
                "headers": {"Accept": "application/json, text/plain, */*"},
                "baseURL": "https://api.datealive.top",
                "transformRequest": [null],
                "transformResponse": [null],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1,
                "maxBodyLength": -1
            },
            "request": {}
        },
        blogsCount: {
            "data": {"code": 200, "msg": "请求成功", "data": 16},
            "status": 200,
            "statusText": "",
            "headers": {"content-length": "64", "content-type": "application/json"},
            "config": {
                "url": "/blogsCount",
                "method": "get",
                "headers": {"Accept": "application/json, text/plain, */*"},
                "baseURL": "https://api.datealive.top",
                "transformRequest": [null],
                "transformResponse": [null],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1,
                "maxBodyLength": -1
            },
            "request": {}
        },
        allCategory: {
            "data": {
                "code": 200,
                "msg": "请求成功",
                "data": [
                    {"category_id": 1, "category_name": "生活"},
                    {"category_id": 2, "category_name": "学习"},
                    {"category_id": 3, "category_name": "项目"},
                    {"category_id": 4, "category_name": "前端"},
                    {
                        "category_id": 5,
                        "category_name": "后端"
                    },
                    {
                        "category_id": 7,
                        "category_name": "未分类"
                    },
                ],
            },
            "status": 200,
            "statusText": "",
            "headers": {"content-length": "157", "content-type": "application/json"},
            "config": {
                "url": "/getAllCategory",
                "method": "get",
                "headers": {"Accept": "application/json, text/plain, */*"},
                "baseURL": "https://api.datealive.top",
                "transformRequest": [null],
                "transformResponse": [null],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1,
                "maxBodyLength": -1
            },
            "request": {}
        },
        blogs: {
            "3": {
                "data": {
                    "code": 200, "msg": "请求成功", "data": {
                        "blog_id": 3,
                        "blog_title": "springboot+vue博客项目上线啦",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                        "blog_content": "<h1 id=\"hi-dream-blog\">Hi-Dream-Blog</h1>\n<h1 id=\"springbootvue博客系统\">springboot+vue博客系统</h1>\n<h4 id=\"项目前言\"><strong>项目前言</strong></h4>\n<p>本项目目前还在完善中，功能也在不断优化中，前端页面编写花费时间较后端少，因为之前写了不少博客样式，有些拿来改改就行，<a href=\"https://github.com/dateolive/mdy-blog\" target=\"_blank\" rel=\"external nofollow noopener\">Semantic UI 博客样式</a> 这个是之前写的一个博客样式，本来想打算用springboot和thymeleaf开发博客的，后来想了想，前后端分离才是王道，所以采取了springboot和vue来开发，vue是我之前学的，所以容易上手。而springboot框架是我这阵子才刚刚起步，在b站学习完了狂神大大的视频后，趁热做的一个练手项目，可能会有很多bug，敬请原谅~~</p>\n<p><a href=\"https://github.com/dateolive/halo-dream\" target=\"_blank\" rel=\"external nofollow noopener\">博客小程序</a></p>\n<p>这是我之前开发的一款基于wordpress的博客微信小程序，后面会将本博客系统的接口迁移到这个微信小程序上，提供一个博客微信小程序。</p>\n<p>如果你对这个博客系统感兴趣，或者想交pr的，可以联系我，加入到Organizations里。</p>\n<h4 id=\"项目预览\"><strong>项目预览</strong></h4>\n<ul>\n<li>前台：https://blog.datealive.top/</li>\n<li>后台：https://admin.datealive.top/     游客账户：<code>Vistortest</code> 密码：<code>Vistortest</code></li>\n</ul>\n<h4 id=\"项目描述\"><strong>项目描述</strong></h4>\n<p>1.前端分为两个项目：一个是博客前台页面，一个是博客后台管理页面。</p>\n<p>博客前台页面：前台页面采用elementUI框架和自己写的一些css样式实现，目前样式不太协调，敬请谅解。</p>\n<p>博客后台页面：后台采取自定义修改GitHub开源后台管理项目<a href=\"vue-manage-system\" target=\"_blank\" rel=\"external nofollow noopener\">vue-manage-system</a></p>\n<p>2.后端采用springboot实现，使用shiro和jwt做用户认证和授权，redis做nosql缓存，项目部署在宝塔面板上。</p>\n<h4 id=\"技术栈\"><strong>技术栈</strong></h4>\n<p><strong>前端</strong></p>\n<table class=\"ui celled table\">\n<thead>\n<tr>\n<th>名称</th>\n<th>技术点</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>基础</td>\n<td>vue</td>\n</tr>\n<tr>\n<td>UI框架</td>\n<td>elementUI</td>\n</tr>\n<tr>\n<td>文本编辑器</td>\n<td>MavonEditor</td>\n</tr>\n<tr>\n<td>后台模板</td>\n<td>vue-manage-system开源模板</td>\n</tr>\n</tbody>\n</table>\n<p><strong>后端</strong></p>\n<table class=\"ui celled table\">\n<thead>\n<tr>\n<th>名称</th>\n<th>技术点</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>开发</td>\n<td>Springboot+Mybatis</td>\n</tr>\n<tr>\n<td>数据库</td>\n<td>MySQL+Druid</td>\n</tr>\n<tr>\n<td>缓存</td>\n<td>redis</td>\n</tr>\n<tr>\n<td>权限框架</td>\n<td>shiro  ， jwt</td>\n</tr>\n<tr>\n<td>其他</td>\n<td>定时任务，Lombok，log4j ，分页插件：PageHelper，邮件任务.....</td>\n</tr>\n</tbody>\n</table>\n<h4 id=\"遇到的问题\"><strong>遇到的问题</strong></h4>\n<p><strong>关于阅读次数</strong></p>\n<p>刚开始是每次刷新就去请求数据库，后面实现了redis缓存阅读量，实现定时任务更新文章访问量</p>\n<p><strong>更换数据库编码问题</strong>\n将原来的项目的数据库更换成utf8mb4编码，需要将datasource的url中的<code>useUnicode=true&amp;characterEncoding=utf8</code>去除</p>\n<p><strong>Safari 浏览器访问不了当前站点</strong>\n昨晚，有个网友发来说iPad的Safari 浏览器访问不了当前站点，我仔细排查了下，发现可能是Safari 浏览器访问链接时http自动转换为https，但我这个二级域名还没部署ssl证书，导致访问站点链接时，未开启SSL的站点使用HTTPS会直接访问到已开启SSL的站点，所以就跳转到了我之前的wordpress博客地址，所以现在就在站点上部署了ssl证书，测试了下，发现已经能够正常访问了。</p>\n<p><strong>前端前台页面使用mavonEditor导致tocbot目录插件失效</strong></p>\n<p>后端返回博客详情内容时，使用commonmark将markdown转为html  解决p标签无class导致tocbot无法生成问题。</p>\n<h4 id=\"关于开源\"><strong>关于开源</strong></h4>\n<p>代码已上传GitHub，欢迎给个star~ ，有能力的朋友，可以请我喝一杯奶茶。</p>\n<p><a href=\"https://github.com/dateolive/Hi-Dream-Blog\" target=\"_blank\" rel=\"external nofollow noopener\">Hi-Dream-Blog</a></p>\n<img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210227173958.jpg\" alt=\"zansan\" style=\"zoom:25%;\" />\n<h4 id=\"关于organizations\"><strong>关于Organizations</strong></h4>\n<p>现在陆陆续续有人加入了这个博客的Organizations，给这个博客系统提供了很大的帮助，同时也给了很棒的建议，在此十分感谢他们。</p>\n<p>这里只展示目前对项目有贡献的朋友。</p>\n<ul>\n<li><a href=\"https://github.com/lengyue1024\" target=\"_blank\" rel=\"external nofollow noopener\">lengyue1024</a></li>\n</ul>\n<p>感谢下面朋友的打赏：</p>\n<table class=\"ui celled table\">\n<thead>\n<tr>\n<th>名称</th>\n<th>打赏内容</th>\n<th>打赏金额</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>八十一</td>\n<td>博客系统打赏</td>\n<td>10.0</td>\n</tr>\n<tr>\n<td>0X</td>\n<td>宵夜</td>\n<td>10.0</td>\n</tr>\n</tbody>\n</table>\n<h4 id=\"关于我\"><strong>关于我</strong></h4>\n<p>由于我目前要开学了，后面可能没很大的精力投入这个博客系统开发了，更新迭代的速度也会变慢。敬请原谅。如果有什么bug或者建议，可以及时联系我。</p>\n<p>qq:2448282543</p>\n<h4 id=\"参考项目\"><strong>参考项目</strong></h4>\n<ul>\n<li><a href=\"https://github.com/MarkerHub/vueblog\" target=\"_blank\" rel=\"external nofollow noopener\">MarkerHub</a></li>\n<li><a href=\"https://gitee.com/fengziy/Fblog\" target=\"_blank\" rel=\"external nofollow noopener\">Fblog</a></li>\n<li><a href=\"https://github.com/Naccl/NBlog\" target=\"_blank\" rel=\"external nofollow noopener\">NBlog</a></li>\n</ul>\n<p><strong>十分感谢上面这些开源项目，感谢！！</strong></p>\n",
                        "blog_summary": "耗时两个半星期的前后端分离的博客项目正式上线，欢迎大家来踩~",
                        "blog_status": 0,
                        "blog_visits": 717,
                        "create_time": "2021-02-13 06:50",
                        "update_time": "2021-05-05 16:12",
                        "is_top": 1,
                        "blog_like": 13,
                        "comment_cnt": 11,
                        "cateGory": [{"category_id": 3, "category_name": "项目"}],
                        "tags": [{"tag_id": 2, "tag_name": "vue"}, {"tag_id": 3, "tag_name": "Java"}, {
                            "tag_id": 4,
                            "tag_name": "springboot"
                        }, {"tag_id": 5, "tag_name": "项目"}]
                    }
                },
                "status": 200,
                "statusText": "",
                "headers": {"content-length": "3081", "content-type": "application/json"},
                "config": {
                    "url": "/blog/3",
                    "method": "get",
                    "headers": {"Accept": "application/json, text/plain, */*"},
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [null],
                    "transformResponse": [null],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "25": {
                "data": {
                    "code": 200, "msg": "请求成功", "data": {
                        "blog_id": 25,
                        "blog_title": "JVM学习之双亲委派模型",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705773753_e911c3c5-e7e1-4167-a431-127578bc021b.jpg",
                        "blog_content": "<h1 id=\"jvm类加载器\">JVM类加载器</h1>\n<p>一个非数组类的加载过程是可控性最强的阶段，在这个阶段，我们还可以去完成自定义类加载器去控制字节流的获取方式（重写一个类加载器的<code>loadClass()</code>）。数组类型不通过类加器创建，由Java虚拟机直接创建。</p>\n<p>所有的类需要通过类加载器加载，作用是将.class文件到内存上。</p>\n<h2 id=\"java的三个类加载器\">Java的三个类加载器</h2>\n<p>JVM内置了三个重要的类加器，分别是：</p>\n<ul>\n<li>BootstrapClassLoader（启动类加载器）：最顶层的类加载器，由c++实现，主要加载 <code>%JAVA_HOME%/lib</code>目录下的jar包和类或者被 <code>-Xbootclasspath</code>参数指定的路径中的所有类。</li>\n<li>ExtensionClassLoader（扩展类加载器）：主要加载<code>%JAVA_HOME%/lib/etc</code>目录下的jar包和类，或被<code>java.etc.dirs</code>系统变量所指定的路径下的jar包。</li>\n<li>AppClassLoader（应用程序类加载器）：负责加载当前Java应用下的<code>classpath</code>下的所有jar包和类。</li>\n</ul>\n<p>除了<code>BootstarpClassLoader</code>类加载器外，其他类加载由Java实现且继承<code>java.lang.ClassLoader</code>。</p>\n<h2 id=\"类加载器工作模型双亲委派模型\">类加载器工作模型——双亲委派模型</h2>\n<p>每个类都有对应自己的类加载器。系统中的类加载器在工作时默认使用双亲委派模型。</p>\n<p>在进行类加载的时候，系统会首先判断，这个类是否被加载过，如果被类加载器加载过则直接返回，否则进行加载。加载的时候，首先会把类加载请求委托到其父类加载器的<code>loadClass()</code>处理，所以，所有的类加载请求都是先委托给最顶层的<code>BootstrapClassLoader</code>加载，当父类加载器无法加载时，才会交给自己加载。当父加载器为null时，会交给<code>BootstrapClassLoader</code>处理。</p>\n<img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210320195153.png\" alt=\"image-20210320195146330\" style=\"zoom:70%;\" />\n<pre><code class=\"language-java\">package com.datealive.jvm;\n\n/**\n * @ClassName: classloaderDemo\n * @Description: TODO\n * @author: datealive\n * @date: 2021/3/20  19:53\n */\npublic class classloaderDemo {\n\n    public static void main(String[] args) {\n\n        System.out.println(classloaderDemo.class.getClassLoader());  //AppClassLoader\n        System.out.println(classloaderDemo.class.getClassLoader().getParent()); //ExtensionClassLoader\n        System.out.println(classloaderDemo.class.getClassLoader().getParent().getParent()); //这里的null不代表ExtClassLoader没有父类加载器，而是BootstrapClassLoader\n    }\n}\n</code></pre>\n<p>输出：</p>\n<pre><code class=\"language-java\">sun.misc.Launcher$AppClassLoader@b4aac2\nsun.misc.Launcher$ExtClassLoader@17327b6\nnull\n</code></pre>\n<h3 id=\"双亲委托模型实现源码分析\">双亲委托模型实现源码分析</h3>\n<p>查看<code>java.lang,ClassLoader</code>的<code>loadClass</code>方法可以清晰了解双亲委托模型的实现原理。</p>\n<p>在分析源码前，先看看类加载过程：</p>\n<p>类加载过程：加载-&gt;连接-&gt;初始化。</p>\n<p>加载：JVM将class文件字节码加载到内存，并将这些静态数据装换成运行时方法区的类型数据，在运行时堆生成一个代表整个类的<code>java.lang.Class</code>对象，作为方法区类数据的访问入口。</p>\n<p>连接又包括：验证，准备，解析（可选）。</p>\n<ul>\n<li>验证：检查加载的class文件的正确性和安全性</li>\n<li>准备：为类变量（static变量）分配存储空间并设置类变量初始值（类变量类型的默认值），类变量随类型信息存放在方法区中，生命周期长，使用不当容易造成内存泄露。</li>\n<li>解析：JVM将常量池内的符号引用转换为直接引用</li>\n</ul>\n<p>初始化：执行类变量复制和静态代码块</p>\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210320202230.png\" alt=\"image-20210320202230868\" /></p>\n<pre><code class=\"language-java\">/**\n  -name ：表示全限定类名\n  -resolve：表示是否解析，为true是解析该类\n  当resolve为true时，保证类已经装载了，而且已经连接了。当resolve为false的时候，仅仅是去装载这个类，而不关系是否连接了，所以此时可能被连接了，也可能不被连接。\n*/\nprotected Class&lt;?&gt; loadClass(String name, boolean resolve)\n        throws ClassNotFoundException\n    {\n        synchronized (getClassLoadingLock(name)) {\n            // 首先，检查请求的类是否已经被加载过\n            Class&lt;?&gt; c = findLoadedClass(name);\n            //如果类没有被加载过\n            if (c == null) {\n                long t0 = System.nanoTime();\n                try {\n                    //父类加载器不为空，调用父类加载器的loadClass()方法处理，注意这里的resolve为false，说明不去关注该类是否已经被连接\n                    if (parent != null) {\n                        c = parent.loadClass(name, false);\n                    } else {\n                     //如果父类加载器为null   这里是使用BootstrapClassLoader启动类加载器加载\n                        c = findBootstrapClassOrNull(name);\n                    }\n                } catch (ClassNotFoundException e) {\n                    //抛出异常说明父类加载器无法完成加载请求\n                }\n\t\t\t\t//这里再次检验请求的类是否未被加载过且父类无法完成加载请求，则自己尝试加载\n                if (c == null) {\n                    long t1 = System.nanoTime();\n                    //自己尝试加载\n                    c = findClass(name);\n\n                    // this is the defining class loader; record the stats\n                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);\n                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);\n                    sun.misc.PerfCounter.getFindClasses().increment();\n                }\n            }\n            //如果resolve为true，则进行连接操作\n            if (resolve) {\n                resolveClass(c);\n            }\n            return c;\n        }\n    }\n\n</code></pre>\n<h3 id=\"双亲委托模型的优点\">双亲委托模型的优点</h3>\n<ul>\n<li>避免了类的重复加载（JVM区分不同类的方式不仅仅根据类名，还根据类加载的不同），保证了Java程序的稳定运行</li>\n<li>保证了Java核心的API不被篡改，因为如果没有双亲委托模型，每个类加载器加载自己时就会出现问题，比如编写一个<code>java.lang.String</code>类的话，程序运行时，系统就会出现多个不同的String类</li>\n</ul>\n<h3 id=\"双亲委托模型的缺点\">双亲委托模型的缺点</h3>\n<ul>\n<li>\n<p>检查类是否被加载的委派过程是单向的，顶层的<code>ClassLoader</code>无法访问底层的<code>ClassLoader</code>所加载的类。</p>\n</li>\n<li>\n<p>...</p>\n</li>\n</ul>\n<h3 id=\"如何自定义类加载器\">如何自定义类加载器？</h3>\n<p>自定义类加载器，需要继承<code>ClassLoader</code>。如果不想打破双亲委派模型，就重写<code>ClassLoader</code>类中的<code>findClass()</code>方法即可，无法被父类加载器加载的类最终会被整个方法所加载，但是，如果想打破双亲委派模型则需要重写<code>loadClass()</code>方法或者使用线程上下文类加载器。</p>\n<p>关于双亲委托模型的破坏，我查阅了一些资料，发现要学习的还挺多的，比如SPI机制破坏双亲委派模型，典型案例就是JDBC的驱动包等等。</p>\n<p>这里附上查阅到的一些关于双亲委托模型破坏的资料，方便后期继续学习。</p>\n<ul>\n<li>https://www.freesion.com/article/65101372836/</li>\n<li>https://www.pianshen.com/article/28171263783/</li>\n<li>https://www.jianshu.com/p/09f73af48a98</li>\n</ul>\n",
                        "blog_summary": "JVM类加载器和双亲委派模型详解，个人学习分享。",
                        "blog_status": 0,
                        "blog_visits": 26,
                        "create_time": "2021-03-20 21:11",
                        "update_time": "2021-04-29 22:16",
                        "is_top": 0,
                        "blog_like": 2,
                        "comment_cnt": 0,
                        "cateGory": [{"category_id": 2, "category_name": "学习"}, {
                            "category_id": 5,
                            "category_name": "后端"
                        }],
                        "tags": [{"tag_id": 3, "tag_name": "Java"}, {"tag_id": 24, "tag_name": "学习"}, {
                            "tag_id": 25,
                            "tag_name": "后端"
                        }, {"tag_id": 27, "tag_name": "JVM"}]
                    }
                },
                "status": 200,
                "statusText": "",
                "headers": {"content-length": "3724", "content-type": "application/json"},
                "config": {
                    "url": "/blog/25",
                    "method": "get",
                    "headers": {"Accept": "application/json, text/plain, */*"},
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [null],
                    "transformResponse": [null],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "8": {
                "data": {
                    "code": 200, "msg": "请求成功", "data": {
                        "blog_id": 8,
                        "blog_title": "Linux基础命令笔记",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182092389_d006a21a-69b9-4ac5-a79b-970bfa3e04aa.jpg",
                        "blog_content": "<h3 id=\"记录下上一年学的linux基础命令笔记\">记录下上一年学的Linux基础命令笔记~</h3>\n<pre><code class=\"language-Linux\">根目录 / 是linux中所有文件的存放顶点\n\ncrtl shift +\n\n基础操作命令\n1.列出目录中的文件列表\nls 目录路径\n2.切换工作目录\ncd 目录路径\n3.查看当前工作目录\npwd\n4.创建文件\ntouch 文件路径\n5.创建目录\nmkdir 目录路径\n6.复制文件\ncp 原文件路径 目的路径\n7.复制目录\ncp -r 原目录路径 目的路径\n8.移动文件或者目录\nmv 原路径 目的路径\n9.删除（不建议使用，因为没有回收站机制）\nrm 文件路径\nrm -rf 目录路径\n\n用户管理\n用户的配置文件\n/etc/passwd\n该文件以行为单位，每行一个用户\n以冒号隔开为一列，每列代表该用户的不同配置\n第一列：用户名\n第二列：原本用于存放用户的密码，目前停用，目前用户的密码存放于文件/etc/shadow\n第三列：用户的编号，UID\n第四列：组编号，GID\n第五列：描述，用于描述用户的作用，可以不写\n第六列：用户的家目录，该目录用于存放用户在使用中产生的各类数据，以及用户的个人文件\n第七列：用户的shell\nshell：外壳，一种命令解释器，用于将人类识别的高级语言翻译为机器识别的机械语言，或将机器的机械语言翻译为高级语言的一种程序。shell经常被人们称作人与计算机之前的翻译官\n常见shell\n/bin/sh 最原始的shell\n/bin/bash 目前使用范围最广的shell\n/sbin/nologin 用于设置用户禁止交互式登录系统使用的shell\n\n用户组的配置文件\n/etc/group\n第一列：用户组名称\n第二列：曾经用于存放用户组的密码\n第三列：用户组的编号\n第四列：组内用户列表，该组为该列表中用户的副组。\n\n用户组的分类：\n与用户的关系不同可以分为2类：\n1.主组，又名首选组，主要的组\n是用户配置文件/etc/passwd中GID所记录的组\n主组的作用：是用户在系统中执行任务的组身份代表。\n2.副组，又名从属组，额外的组\n用户除了其首选组以外，还可以加入若干个用户组里，这些额外加入的用户组，被成为用户的副组\n副组的作用：用于变更用户在系统中的访问范围\n\n当系统创建一个用户的时候，系统会自动创建一个与用户同名、同id的用户组，并将该组设置为用户的首选组\n\n创建用户\nuseradd 用户名\n创建用户并设置其用户编号\nuseradd -u 编号 用户名\n创建用户并设置其主组\nuseradd -g 组名或者GID 用户名\n创建用户并设置其副组\nuseradd -G 组名,组名,组名 用户名\n创建用户并禁止其交互式登录\nuseradd -s /sbin/nologin 用户名\n\n修改用户设定\nusermod 选项 用户名\n修改用户编号\nusermod -u 编号 用户名\n修改用户主组\nusermod -g 组名或者GID 用户名\n替换用户的副组\nusermod -G 组名,组名,组名 用户名\n增加用户的副组\nusermod -G 组名,组名,组名 -a 用户名\n禁止用户交互式登录\nusermod -s /sbin/nologin 用户名\n\n删除用户并删除其家目录\nuserdel -r 用户名\n\n创建用户组\ngroupadd 组名\n创建用户组并指定其组编号\ngroupadd -g 编号 组名\n\n修改用户组的编号\ngroupmod -g 编号 组名\n\n删除用户组\ngroupdel 组名\n注意：被删除的组，不能作为任何一个用户的主组使用\n\n修改用户的密码\npasswd 用户名\n\n切换当前工作用户\nsu - 用户名\nexit 退出用户\n\n查看用户的相关信息\nid 用户名\n\n以管理员身份执行命令（提权）\nsudo 命令\n如何让用户能够使用sudo命令？\n将该用户加入到用户组wheel中即可（副组加入）\n\n查看网络配置的命令\nifconfig\n\n测试网络联通性的\nping 域名或者ip地址(关闭时ctrl c)\nping -c 次数 域名或者ip地址\n\n网络追踪\ntracepath 域名或者ip地址\ntraceroute -n -I -q 5 域名或者ip地址\n\n方法一：\n配置网卡的命令\nnmcli\n用于查看网卡配置文件的状态\nnmcli connection show\n用于查看网卡的硬件状态\nnmcli device status\n用于修改网卡的ip地址及其网关\nnmcli connection modify eno16777736 ipv4.addresses '192.168.191.50/24 192.168.191.2'\n配置网卡使用的dns地址\nnmcli connection modify eno16777736 ipv4.dns 114.114.114.114\n用于修改网卡的地址获取模式为手动(静态地址)\nnmcli connection modify eno16777736 ipv4.method manual\n停用配置文件\nnmcli connection down eno16777736\n启动配置文件\nnmcli connection up eno16777736\n\n方法二：\n直接修改网卡的配置文件\n/etc/sysconfig/network-scripts/ifcfg-eno16777736\n需要修改行：\nHWADDR=值来自于命令ifconfig\nBOOTPROTO=&quot;none&quot;\nONBOOT=&quot;yes&quot;\nIPADDR0=192.168.191.150\nPREFIX0=24\nGATEWAY0=192.168.191.2\nDNS1=114.114.114.114\n\n保存配置后，重启网络(针对于克隆的主机)\nsystemctl restart network\n\n硬盘管理三步操作\n第一步：分区\n查看当前系统的分区状态\nlsblk\n分区的命令\nfdisk 硬盘的路径（例如：/dev/sdb）\np 显示当前分区状态\nn 分区(p主分区 e扩展分区 l逻辑分区)\nd 删除分区\nw 保存并退出\nq 不保存退出\n\n专业英语单词：partition 分区\nsector 扇区\n扇区：是硬盘容量的最基本单位，默认情况下1扇区=512字节\n\n第二步：制作文件系统(格式化)\n查看分区的格式化状态\nblkid\n制作文件系统\nmkfs.文件系统类型(tab补齐） 分区路径\n常见类型\nxfs RHEL7操作系统的默认文件系统\next4 多数linux的默认文件系统\nvfat 兼容性较好的文件系统，一般用于U盘\nntfs windows的默认文件系统\n\n第三步：挂载(指定驱动器号)\n查看当前系统的硬盘挂载状态\ndf -Th\n挂载的操作\n第一步：创建一个挂载点（目录）\nmkdir 目录路径 （例如 /mnt/parta）\n第二步：进行挂载的操作\n编辑文件/etc/fstab，在尾部追加如下内容\n示例：\n/dev/sdb1 /mnt/parta ext4 defaults 0 0\n第三步：生效\nmount -a\n\n软件安装\n\n版本 软件包扩展名 安装的命令 自动解决软件依赖性关系\nredhat .rpm rpm yum（RHEL8:dnf）\ndebian .deb dpkg apt-get\n\nrpm命令的使用\n1.安装软件\nrpm -ivh 软件包路径\n2.查看一个软件是否安装\nrpm -qa 软件名\n3.卸载软件\nrpm -e 软件名\n\nyum命令的使用\nyum软件仓库的配置(又名yum源)\n仓库的作用就是告诉yum命令应该在系统的哪一个目录下进行软件包的搜索工作\n仓库配置文件的路径为：\n/etc/yum.repos.d/任意命名.repo\n[abc]\n//repo id用于区别不同的仓库\nname=redhat linux 7 iso\n//repo name用于描述仓库的来历等等，可以不写\nenabled=1\n//是否启动该仓库\nbaseurl=file:///run/media/root/RHEL-7.0\\ Server.x86_64\n//仓库的访问路径\ngpgcheck=0\n//是否开启软件校验功能\n\nyum命令的常用指令\n1.查看当前软件仓库的状态\nyum repolist\n2.安装软件\nyum install 软件名\n3.查看当前软件仓库中的软件列表\nyum list all | grep 模糊软件名\n4.查看软件是否安装成功\nyum list installed | grep 模糊软件名\n5.卸载软件\nyum remove 软件名\n\n部署服务之前需要检查的内容\n1.网络连接\n2.防火墙\nsystemctl status firewalld\n关闭防火墙\nsystemctl stop firewalld\nsystemctl disable firewalld\n3.SELinux\ngetenforce\n关闭selinux\nsetenforce 0\n编辑文件vim /etc/selinux/config 将其中SELINUX=的值修改为permissive或者disabled\n\n部署ftp服务器\n第一步：安装服务器程序\nyum install vsftpd\n\n第二步：启动ftp服务器\nsystemctl enable vsftpd\nsystemctl start vsftpd\n\n第三步：根据需求调整ftp的配置文件\nftp的主配置文件路径为/etc/vsftpd/vsftpd.conf\n\nanonymous_enable=YES 启动匿名用户\nlocal_enable=YES 启动本地用户\n\n对于匿名用户而言，客户端访问时所对应的目录为/var/ftp\n对于普通用户而言，客户端访问时所对应的目录为该用户的家目录\n\n权限管理部分知识在教材的P56\n\n其他常用选项：\nwrite_enable=YES 允许写操作\nanon_upload_enable=YES 允许匿名用户上传文件\nanon_mkdir_write_enable=YES 允许匿名用户创建目录\nftp_username=ftp 用于设置匿名用户在系统中的映射用户\nanon_root=/var/ftp 用于设置匿名用户访问的默认目录\nuserlist_enable=yes 启动用户限制机制\nuserlist_deny=yes 值为yes，userlist为黑名单\n值为no，userlist为白名单\nuserlist_file=/etc/vsftpd/user_list 用户列表\n\n查看配置文件的帮助手册的命令\nman vsftpd.conf\n\n注意：修改过ftp的配置文件，需要重启服务才能生效\nsystemctl restart vsftpd\n\nA=b\n\n$A\nb\n\nfor循环语句的语法结构\n\nlinux原版的for循环\nfor 字符串(大写) in 字符串1 字符串2 字符串3 ...... ; do\n命令1\n命令2\n命令3\n......\ndone\n\n类似c语言结构的for循环\nfor ((i=起始数字;i&lt;=峰值;i++)) ; do\n命令1\n命令2\n。。。。。。\ndone\n\n命令嵌套\n$(命令)\n\nif条件语句的语法结构\n结构1：\nif [ 条件 ] ; then\n命令1\n命令2\n........\nfi\n\n结构2：\nif [ 条件 ] ; then\n命令1\n命令2\n........\nelse\n命令1\n命令2\n........\nfi\n\n结构3：\nif [ 条件1 ] ; then\n命令1\n命令2\n........\nelif [ 条件2 ] ; then\n命令1\n命令2\n........\nelif [ 条件3 ] ; then\n命令1\n命令2\n........\nelse\n命令1\n命令2\n........\nfi\n\n参数赋值法\n$1 表示运行脚本时跟随在脚本后面的第一个参数\n\nif的常用条件设置\n第一种：等值判断\n[ 字符串 = 字符串 ]\n第二种：数字判断\n[ 数字 符号 数字 ]\n符号：-eq 等于 -ge 大于等于 -gt 大于 -le 小于等于 -lt 小于\n例如：[ 1 -ge 100 ]\n第三种：文件判断\n[ 符号 文件或者目录路径 ]\n符号：\n-f 存在且是文件\n-d 存在且是目录\n-e 存在\n-s 存在且大小为0(用于判断一个文件是否为空)\n-r 当前用户是否允许读取该文件\n-w 当前用户是否允许写入该文件\n-x 当前用户是否允许运行该文件\n第四种：逻辑判断\n[ 条件1 ]&amp;&amp;[ 条件2 ] 与判断\n[ 条件1 ]||[ 条件2 ] 或判断\n\n[ 601 -ge $(date) ]&amp;&amp;[ 1200 -le $(date) ]\n\ncase判断语句\n语法结构如下：\n\ncase 字符串 in\n字符串1)\n命令1\n命令2\n;;\n字符串2)\n命令1\n命令2\n;;\n字符串3)\n命令1\n命令2\n;;\n......\n*)\n命令1\n命令2\n;;\nesac\n</code></pre>\n",
                        "blog_summary": "记录下上一年学的Linux基础命令笔记~",
                        "blog_status": 0,
                        "blog_visits": 57,
                        "create_time": "2021-02-13 11:42",
                        "update_time": "2021-04-23 20:48",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": [{"category_id": 2, "category_name": "学习"}],
                        "tags": [{"tag_id": 10, "tag_name": "Linux"}]
                    }
                },
                "status": 200,
                "statusText": "",
                "headers": {"content-length": "4833", "content-type": "application/json"},
                "config": {
                    "url": "/blog/8",
                    "method": "get",
                    "headers": {"Accept": "application/json, text/plain, */*"},
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [null],
                    "transformResponse": [null],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "2": {
                "data": {
                    "code": 200, "msg": "请求成功", "data": {
                        "blog_id": 2,
                        "blog_title": "冰雪林中著此身，不同桃李混芳尘",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                        "blog_content": "<h1 id=\"关于我\">关于我</h1>\n<h3 id=\"hi-there-im-dateolive-\">Hi there, I'm dateolive! 👋</h3>\n<ul>\n<li>🔭 I’m currently studying on GuangZhou University</li>\n<li>🌱 I’m currently learning c++&amp;&amp;python&amp;&amp;java&amp;&amp;web</li>\n<li>👯 I’m looking to collaborate on Github Readme Stats</li>\n<li>💬 Ask me about WeChat:balabala_zxx</li>\n<li>📫 How to reach me: Blog:www.datealive.top Email:2448282543@qq.com</li>\n<li>WechatBlog:\n<img src=\"https://www.datealive.top/wp-content/uploads/2020/10/16038062271-300x113.png\" alt=\"微信小程序\" /></li>\n</ul>\n<h1 id=\"关于本站\">关于本站</h1>\n<p>一个分享自己学习过程or一点点生活，分享自己的水文的博客~</p>\n<p>欢迎访问哈~~</p>\n<h1 id=\"目前个人学习路线\">目前个人学习路线</h1>\n<p>前端方面:简单学习过html、css、JavaScript，学习过jQuery，使用过bootstrap、element-ui、semantic-ui等前端css框架</p>\n<p>前端框架:学习过vue，nuxt前端js框架，同时目前还在学习uniapp跨端框架</p>\n<p>后端方面：简单学习过c，c++，php，python，c# 目前主攻Java</p>\n<p>后端框架：简单学习过thinkPHP，springboot</p>\n<p>软件开发：简单了解过Android开发，小程序开发，尝试做了一些小项目</p>\n<p>爬虫方面：简单学习过爬虫，目前正在进阶反反爬虫技术</p>\n<p>其他：使用过MySQL，MongoDB，Oracle，简单学习过Linux基础知识，算法能力提升中</p>\n<p>总结：现在没有什么特别擅长的技术，目前疯狂进阶Java中</p>\n<h1 id=\"个人项目\">个人项目</h1>\n<p>由于个人能力不足，目前没有拿得出手的个人项目，敬请期待~</p>\n",
                        "blog_summary": "冰雪林中著此身，不同桃李混芳尘。博主的个人简介~~",
                        "blog_status": 0,
                        "blog_visits": 75,
                        "create_time": "2021-02-13 06:46",
                        "update_time": "2021-05-05 16:05",
                        "is_top": 0,
                        "blog_like": 4,
                        "comment_cnt": 0,
                        "cateGory": [{"category_id": 1, "category_name": "生活"}],
                        "tags": [{"tag_id": 1, "tag_name": "生活"}]
                    }
                },
                "status": 200,
                "statusText": "",
                "headers": {"content-length": "1509", "content-type": "application/json"},
                "config": {
                    "url": "/blog/2",
                    "method": "get",
                    "headers": {"Accept": "application/json, text/plain, */*"},
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [null],
                    "transformResponse": [null],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
            "6": {
                "data": {
                    "code": 200, "msg": "请求成功", "data": {
                        "blog_id": 6,
                        "blog_title": "设计模式之单例模式",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                        "blog_content": "<h1 id=\"设计模式之单例模式\">设计模式之单例模式</h1>\n<h2 id=\"一什么是单例模式\">一.什么是单例模式？</h2>\n<p>单例模式是设计模式中最简单的一个设计模式，属于创建型模式，其定义是保证一个类<em><strong>仅有一个实例</strong></em>，并且提供一个访问它的全局访问点。</p>\n<p>单例模式一般体现在类声明中，单例的类负责创建自己的对象，同时保证只有单个对象被创建，并且提供一个访问它的全局访问点，可以直接访问，不需要实例化对象。</p>\n<h2 id=\"二为什么需要用到单例模式\">二.为什么需要用到单例模式？</h2>\n<ul>\n<li>由于单例模式只创建了一个实例，减少了内存的消耗，在一些频繁创建销毁实例的情景下可使用</li>\n<li>避免对资源的多重占用，比如文件写操作</li>\n<li>在一些特定的情境下必须使用单例，如一个国家只能有一个主席</li>\n</ul>\n<h2 id=\"三如何使用单例\">三.如何使用单例？</h2>\n<p>我们知道一个类的对象的产生是通过它的构造函数来实现的，如果一个类对外提供了一个<code> public</code>的构造方法，那么外界就可以任意创建这个类的对象。所以当你想限制类的产生时，就需要把构造函数设为私有的（至少也是受保护的），并且需要提供一个对象以及访问这个对象的静态方法。</p>\n<h3 id=\"1饿汉式单例模式\">1.饿汉式单例模式</h3>\n<pre><code class=\"language-java\">public class Test {\n    //在类的内部实例化一个实例\n    private static Test test=new Test();\n    //私有的构造函数，外界不能访问\n    private Test(){}\n    //对外提供的获取实例的静态方法\n    public static Test getTest(){\n        return test;\n    }\n}\n@Test\npublic static void main(String[] agrs){\n    Test test1=Test.getTest();\n    Test test2=Test.getTest();\n    System.out.println(test1==test2);//true\n}\n</code></pre>\n<p>什么是饿汉式？饿汉式就是对于一个饿汉来说，他想要获得这个实例时，就能够立即拿到这个实例，而不需要等待时间。所以这里通过<code> static</code>的静态初始化方式，在这个类被第一次加载出来的时候，就有一个<code>Test</code>的实例创建出来。这就保证了第一次想要这个实例时，他已经被初始化好了。</p>\n<p>同时，这个实例在类加载时就已经创建出来了，避免了线程安全问题。</p>\n<p>当然，还有一种饿汉式单例模式的变种。</p>\n<pre><code class=\"language-java\">public class Test{\n    private static Test test;\n    static{\n        test=new Test();\n    }\n    private Test(){}\n    public static Test getTest(){\n        return test;\n    }\n}\n</code></pre>\n<p>由于饿汉式单例模式是在类加载时就已经创建出来了，如果我们不需要这个实例，就会造成一个不必要的消耗。而且如果类被多次加载也会进行多次实例化。那如何在需要这个对象时，才进行实例化对象呢？这里有两个解决方式，一种是<strong>静态内部类式</strong> ，另外一种是<strong>懒汉式</strong>。</p>\n<h3 id=\"2静态内部类式\">2.静态内部类式</h3>\n<pre><code class=\"language-Java\">public class Test{\n    private\tstatic class TestHolder{\n        private static final Test Instance=new Test();\n    }\n    private Test(){}\n    public static final Test getInstance(){\n        return TestHolder.Instance;\n    } \n}\n</code></pre>\n<p>这里同样利用 <code>classloder</code> 加载机制保证了初始化时只有一个线程，它与饿汉式不同的是：静态内部类式实现了<code>lazy loading</code> ，因为<code>TestHolder</code>类没有主动被使用，只有显示的通过调用<code>getInstance</code>方法才能显示装载<code>TestHolder</code>，从而实例化Instance。这种方法的使用场景是：当实例化<code>Instance</code>很耗资源，想让它延迟加载，另外一方面，不希望再<code>Test</code>类加载的时候就实例化<code>Instance</code>，这个时候这种方式就比饿汉式合理的多。</p>\n<h3 id=\"3懒汉式\">3.懒汉式</h3>\n<pre><code class=\"language-Java\">public class Test{\n    private static Test instance;\n    private Test(){}\n    public static Test getInstance(){\n        if(instance==null){\n            instance=new Test();\n        }\n        return instance;\n    }\n}\n</code></pre>\n<p>上面这种方法叫做懒汉单例模式，这种模式不会提前将实例创建出来，而是将类对自己的实例化延迟到第一次调用 <code>getInstance</code>静态方法时。这种方法存在一个问题——线程安全，当多个线程同时进入<code>if</code>语句时，这样就可能创建了两个不同的对象。怎么解决呢？通过给对象加锁即可。</p>\n<h3 id=\"4线程安全的懒汉式\">4.线程安全的懒汉式</h3>\n<h4 id=\"41-synchronized同步方法\">4.1 synchronized同步方法</h4>\n<pre><code class=\"language-java\">public class Test{\n    private static Test instance;\n    private Test(){}\n    public static synchronized Test getInstance(){\n        if(instance==null){\n            instance=new Test();\n        }\n        return instance;\n    }\n}\n</code></pre>\n<p>这种方法实现线程安全，但是效率却非常低下，因为这里使用<code>synchronized</code>加锁的范围是整个方法，整个方法中的操作都是同步进行的，对<strong>非第一次</strong>进入这个静态方法时，不需要进入<code>if</code>语句中，根本不需要进行同步操作，所以就造成了效率低下。</p>\n<h4 id=\"42-synchronized同步代码块双重校验锁\">4.2 synchronized同步代码块(双重校验锁)</h4>\n<pre><code class=\"language-java\">public class Test{\n    private static Test instance;\n    private Test(){}\n    public static Test getInstance(){\n        if(instance==null){\n            synchronized(Test.class){\n                if(instance==null){\n                    instance=new Test();\n                }\n            }\n        }\n        return instance;\n    }\n}\n</code></pre>\n<p>这种实现方式缩小了锁的范围，大大提高了效率，但这种方法仍有一些隐患。</p>\n<p>隐患的主要原因如下：</p>\n<blockquote>\n<p>线程A发现变量没有被初始化, 然后它获取锁并开始变量的初始化。</p>\n<p>由于某些编程语言的语义，编译器生成的代码允许在线程A执行完变量的初始化之前，更新变量并将其指向部分初始化的对象。</p>\n<p>线程B发现共享变量已经被初始化，并返回变量。由于线程B确信变量已被初始化，它没有获取锁。如果在A完成初始化之前共享变量对B可见（这是由于A没有完成初始化或者因为一些初始化的值还没有穿过B使用的内存(缓存一致性)），程序很可能会崩溃。</p>\n</blockquote>\n<p>解决方法：</p>\n<p><strong>1.使用volatile</strong></p>\n<pre><code class=\"language-java\">public class Test{\n    private static volatile Test instance;\n    private Test(){}\n    public static Test getInstance(){\n        if(instance==null){\n            synchronized(Test.class){\n                if(instance==null){\n                    instance=new Test();\n                }\n            }\n        }\n        return instance;\n    }\n}\n</code></pre>\n<p>上面这种方法解决前面的问题，但这种方式还存在一些问题，就是在序列化的时候。</p>\n<p><strong>2.使用final</strong></p>\n<pre><code class=\"language-java\">class FinalWrapper&lt;T&gt; {\n    public final T value;\n\n    public FinalWrapper(T value) {\n        this.value = value;\n    }\n}\n\npublic class FinalSingleton {\n    private FinalWrapper&lt;FinalSingleton&gt; helperWrapper = null;\n\n    public FinalSingleton getHelper() {\n        FinalWrapper&lt;FinalSingleton&gt; wrapper = helperWrapper;\n\n        if (wrapper == null) {\n            synchronized (this) {\n                if (helperWrapper == null) {\n                    helperWrapper = new FinalWrapper&lt;FinalSingleton&gt;(new FinalSingleton());\n                }\n                wrapper = helperWrapper;\n            }\n        }\n        return wrapper.value;\n    }\n}\n</code></pre>\n<h3 id=\"5枚举式\">5.枚举式</h3>\n<p>在1.5之前，实现单例一般只有以上几种办法，在1.5之后，还有另外一种实现单例的方式，那就是使用枚举</p>\n<pre><code class=\"language-java\">public enum  Singleton {\n\n    INSTANCE;\n    Singleton() {\n    }\n}\n\n</code></pre>\n<p>这个实现方式既能解决多线程安全问题，还能防止反序列化重新创建新的对象。这种方法很少见。</p>\n<h2 id=\"四单例与序列化\">四.单例与序列化</h2>\n<p>序列化会破坏单例。要防止单例被序列化破坏，只要在单例类中定义<code>readResolve</code>即可。</p>\n<pre><code class=\"language-java\">public class Test{\n    private static volatile Test instance;\n    private Test(){}\n    public static Test getInstance(){\n        if(instance==null){\n            synchronized(Test.class){\n                if(instance==null){\n                    instance=new Test();\n                }\n            }\n        }\n        return instance;\n    }\n    private Object readResolve() {\n        return instance;\n    }\n}\n</code></pre>\n",
                        "blog_summary": "单例模式是设计模式中最简单的一个设计模式，属于创建型模式，其定义是保证一个类仅有一个实例，并且提供一个访问它的全局访问点。",
                        "blog_status": 0,
                        "blog_visits": 24,
                        "create_time": "2021-02-13 11:33",
                        "update_time": "2021-04-29 22:15",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": [{"category_id": 2, "category_name": "学习"}],
                        "tags": [{"tag_id": 3, "tag_name": "Java"}, {"tag_id": 7, "tag_name": "设计模式"}]
                    }
                },
                "status": 200,
                "statusText": "",
                "headers": {"content-length": "3501", "content-type": "application/json"},
                "config": {
                    "url": "/blog/6",
                    "method": "get",
                    "headers": {"Accept": "application/json, text/plain, */*"},
                    "baseURL": "https://api.datealive.top",
                    "transformRequest": [null],
                    "transformResponse": [null],
                    "timeout": 0,
                    "xsrfCookieName": "XSRF-TOKEN",
                    "xsrfHeaderName": "X-XSRF-TOKEN",
                    "maxContentLength": -1,
                    "maxBodyLength": -1
                },
                "request": {}
            },
        },
        categorys: {
            "1": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 1,
                        "currentPage": 1,
                        "category_id": 1,
                        "category_name": "生活",
                        "data": [
                            {
                                "blog_id": 2,
                                "blog_title": "冰雪林中著此身，不同桃李混芳尘",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                                "blog_summary": "冰雪林中著此身，不同桃李混芳尘。博主的个人简介~~",
                                "blog_status": 0,
                                "blog_visits": 73,
                                "create_time": "2021-02-12 22:46",
                                "update_time": "2021-05-05 08:05",
                                "is_top": 0,
                                "blog_like": 4,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 1,
                                    "category_name": "生活"
                                }
                            },
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "996",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 3
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
            },
            "2": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 3,
                        "currentPage": 1,
                        "category_id": 2,
                        "category_name": "学习",
                        "data": [
                            {
                                "blog_id": 25,
                                "blog_title": "JVM学习之双亲委派模型",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705773753_e911c3c5-e7e1-4167-a431-127578bc021b.jpg",
                                "blog_summary": "JVM类加载器和双亲委派模型详解，个人学习分享。",
                                "blog_status": 0,
                                "blog_visits": 22,
                                "create_time": "2021-03-20 13:11",
                                "update_time": "2021-04-29 14:16",
                                "is_top": 0,
                                "blog_like": 2,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 29,
                                "blog_title": "Redis学习总结",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "Redis是一个使用c语音开发的数据库，不过与传统的数据库不同的是Redis的数据是存储在内存中的，也就是Redis是内存数据库，所以读写速度特别快，因此Redis被广泛应用于缓存方向。",
                                "blog_status": 0,
                                "blog_visits": 134,
                                "create_time": "2021-04-05 12:52",
                                "update_time": "2021-04-29 14:08",
                                "is_top": 0,
                                "blog_like": 2,
                                "comment_cnt": 1,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 28,
                                "blog_title": "JVM性能分析器-JProfiler的使用",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                                "blog_summary": "JProfiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。",
                                "blog_status": 0,
                                "blog_visits": 98,
                                "create_time": "2021-03-23 08:40",
                                "update_time": "2021-04-29 14:08",
                                "is_top": 0,
                                "blog_like": 3,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 27,
                                "blog_title": "JVM调优参数记录（持续更新）",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295952_b1f3ae4b-6e2f-432e-a2f5-5a1b3da871f4.jpg",
                                "blog_summary": "记录个人使用过的JVM调优参数",
                                "blog_status": 0,
                                "blog_visits": 23,
                                "create_time": "2021-03-23 07:56",
                                "update_time": "2021-04-23 12:45",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 26,
                                "blog_title": "JVM垃圾回收",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295956_cac7c1a5-c455-4277-a844-8e2cb9108885.jpg",
                                "blog_summary": "Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配。同时，Java 自动内存管理最核心的功能是堆内存中对象的分配与回收。",
                                "blog_status": 0,
                                "blog_visits": 90,
                                "create_time": "2021-03-23 07:53",
                                "update_time": "2021-04-23 12:45",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "1294",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 2
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
                "2": {
                    "data": {
                        "code": 200,
                        "totalPage": 3,
                        "currentPage": 2,
                        "category_id": 2,
                        "category_name": "学习",
                        "data": [
                            {
                                "blog_id": 8,
                                "blog_title": "Linux基础命令笔记",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182092389_d006a21a-69b9-4ac5-a79b-970bfa3e04aa.jpg",
                                "blog_summary": "记录下上一年学的Linux基础命令笔记~",
                                "blog_status": 0,
                                "blog_visits": 50,
                                "create_time": "2021-02-13 03:42",
                                "update_time": "2021-04-23 12:48",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 24,
                                "blog_title": "记spring读取properties文件username报错问题",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "记一次spring读取properties文件username报错问题，来自一个朋友的报错。受益匪浅。",
                                "blog_status": 0,
                                "blog_visits": 44,
                                "create_time": "2021-03-07 05:44",
                                "update_time": "2021-04-29 14:15",
                                "is_top": 0,
                                "blog_like": 3,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 23,
                                "blog_title": "认证授权篇之JWT详解",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618929707504_096262d1-7821-4c47-b01d-47c25a91fe14.jpg",
                                "blog_summary": "JWT的原理是，服务器认证后，生成一个JSON对象，返回给用户，以后，用户与服务端通信的时候，都要发送这个JSON对象，服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器生成这个对象的时候，会加上签名。这样，服务器就不需要保存Session数据了，这体现了JWT的无状态特性。",
                                "blog_status": 0,
                                "blog_visits": 39,
                                "create_time": "2021-03-06 08:48",
                                "update_time": "2021-04-23 12:46",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 22,
                                "blog_title": "学习笔记——认证授权基础篇",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "学习笔记——认证授权基础篇，了解相关概念。",
                                "blog_status": 0,
                                "blog_visits": 23,
                                "create_time": "2021-03-03 08:44",
                                "update_time": "2021-04-23 12:47",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 7,
                                "blog_title": "Python3爬虫实战【点触验证码】 — 模拟登陆bilibili",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                                "blog_summary": "实现目标：模拟登陆哔哩哔哩，涉及知识：点触验证码的攻克、自动化测试工具 Selenium 的使用，超级鹰打码平台的使用",
                                "blog_status": 0,
                                "blog_visits": 41,
                                "create_time": "2021-02-13 03:35",
                                "update_time": "2021-04-23 12:47",
                                "is_top": 0,
                                "blog_like": 2,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "1294",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 2
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
                "3": {
                    "data": {
                        "code": 200,
                        "totalPage": 3,
                        "currentPage": 3,
                        "category_id": 2,
                        "category_name": "学习",
                        "data": [
                            {
                                "blog_id": 6,
                                "blog_title": "设计模式之单例模式",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                                "blog_summary": "单例模式是设计模式中最简单的一个设计模式，属于创建型模式，其定义是保证一个类仅有一个实例，并且提供一个访问它的全局访问点。",
                                "blog_status": 0,
                                "blog_visits": 22,
                                "create_time": "2021-02-13 03:33",
                                "update_time": "2021-04-29 14:15",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 5,
                                "blog_title": "神秘国度的爱情故事（树剖+lca）",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                                "blog_summary": "数据结构课设之神秘国度的爱情故事（树剖+lca）",
                                "blog_status": 0,
                                "blog_visits": 21,
                                "create_time": "2021-02-13 03:19",
                                "update_time": "2021-04-23 12:48",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 4,
                                "blog_title": "JVM——Java内存区域",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "深入了解java虚拟机笔记",
                                "blog_status": 0,
                                "blog_visits": 31,
                                "create_time": "2021-02-13 03:11",
                                "update_time": "2021-04-23 12:49",
                                "is_top": 0,
                                "blog_like": 4,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "1294",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 2
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
            },
            "3": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 1,
                        "currentPage": 1,
                        "category_id": 3,
                        "category_name": "项目",
                        "data": [
                            {
                                "blog_id": 3,
                                "blog_title": "springboot+vue博客项目上线啦",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                                "blog_summary": "耗时两个半星期的前后端分离的博客项目正式上线，欢迎大家来踩~",
                                "blog_status": 0,
                                "blog_visits": 704,
                                "create_time": "2021-02-12 22:50",
                                "update_time": "2021-05-05 08:12",
                                "is_top": 1,
                                "blog_like": 13,
                                "comment_cnt": 11,
                                "cateGory": {
                                    "category_id": 3,
                                    "category_name": "项目"
                                }
                            },
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "1241",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 1
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
            },
            "4": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 2,
                        "currentPage": 1,
                        "category_id": 4,
                        "category_name": "前端",
                        "data": [
                            {
                                "blog_id": 3,
                                "blog_title": "springboot+vue博客项目上线啦",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                                "blog_summary": "耗时两个半星期的前后端分离的博客项目正式上线，欢迎大家来踩~",
                                "blog_status": 0,
                                "blog_visits": 704,
                                "create_time": "2021-02-12 22:50",
                                "update_time": "2021-05-05 08:12",
                                "is_top": 1,
                                "blog_like": 13,
                                "comment_cnt": 11,
                                "cateGory": {
                                    "category_id": 3,
                                    "category_name": "项目"
                                }
                            },
                            {
                                "blog_id": 29,
                                "blog_title": "Redis学习总结",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "Redis是一个使用c语音开发的数据库，不过与传统的数据库不同的是Redis的数据是存储在内存中的，也就是Redis是内存数据库，所以读写速度特别快，因此Redis被广泛应用于缓存方向。",
                                "blog_status": 0,
                                "blog_visits": 134,
                                "create_time": "2021-04-05 12:52",
                                "update_time": "2021-04-29 14:08",
                                "is_top": 0,
                                "blog_like": 2,
                                "comment_cnt": 1,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 28,
                                "blog_title": "JVM性能分析器-JProfiler的使用",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                                "blog_summary": "JProfiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。",
                                "blog_status": 0,
                                "blog_visits": 98,
                                "create_time": "2021-03-23 08:40",
                                "update_time": "2021-04-29 14:08",
                                "is_top": 0,
                                "blog_like": 3,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 27,
                                "blog_title": "JVM调优参数记录（持续更新）",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295952_b1f3ae4b-6e2f-432e-a2f5-5a1b3da871f4.jpg",
                                "blog_summary": "记录个人使用过的JVM调优参数",
                                "blog_status": 0,
                                "blog_visits": 23,
                                "create_time": "2021-03-23 07:56",
                                "update_time": "2021-04-23 12:45",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 26,
                                "blog_title": "JVM垃圾回收",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295956_cac7c1a5-c455-4277-a844-8e2cb9108885.jpg",
                                "blog_summary": "Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配。同时，Java 自动内存管理最核心的功能是堆内存中对象的分配与回收。",
                                "blog_status": 0,
                                "blog_visits": 90,
                                "create_time": "2021-03-23 07:53",
                                "update_time": "2021-04-23 12:45",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            }
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "1241",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 1
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
                "2": {
                    "data": {
                        "code": 200,
                        "totalPage": 2,
                        "currentPage": 2,
                        "category_id": 4,
                        "category_name": "前端",
                        "data": [
                            {
                                "blog_id": 25,
                                "blog_title": "JVM学习之双亲委派模型",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705773753_e911c3c5-e7e1-4167-a431-127578bc021b.jpg",
                                "blog_summary": "JVM类加载器和双亲委派模型详解，个人学习分享。",
                                "blog_status": 0,
                                "blog_visits": 22,
                                "create_time": "2021-03-20 13:11",
                                "update_time": "2021-04-29 14:16",
                                "is_top": 0,
                                "blog_like": 2,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 24,
                                "blog_title": "记spring读取properties文件username报错问题",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "记一次spring读取properties文件username报错问题，来自一个朋友的报错。受益匪浅。",
                                "blog_status": 0,
                                "blog_visits": 44,
                                "create_time": "2021-03-07 05:44",
                                "update_time": "2021-04-29 14:15",
                                "is_top": 0,
                                "blog_like": 3,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 23,
                                "blog_title": "认证授权篇之JWT详解",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618929707504_096262d1-7821-4c47-b01d-47c25a91fe14.jpg",
                                "blog_summary": "JWT的原理是，服务器认证后，生成一个JSON对象，返回给用户，以后，用户与服务端通信的时候，都要发送这个JSON对象，服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器生成这个对象的时候，会加上签名。这样，服务器就不需要保存Session数据了，这体现了JWT的无状态特性。",
                                "blog_status": 0,
                                "blog_visits": 39,
                                "create_time": "2021-03-06 08:48",
                                "update_time": "2021-04-23 12:46",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 22,
                                "blog_title": "学习笔记——认证授权基础篇",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "学习笔记——认证授权基础篇，了解相关概念。",
                                "blog_status": 0,
                                "blog_visits": 23,
                                "create_time": "2021-03-03 08:44",
                                "update_time": "2021-04-23 12:47",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 21,
                                "blog_title": "学习笔记——数据脱敏",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182064979_f57d1d10-ae63-4005-b8d5-e48109ea0dbe.jpg",
                                "blog_summary": "数据脱敏就是在给定的脱敏规则和策略下，对敏感数据如手机号,银行卡号等信息，进行转化或修改的手段，防止敏感数据泄露。\\n\\n生活中有许多数据脱敏的例子，比如淘宝订单详情，京东匿名评论，有一些信息会被用*代替，保障了隐私不被泄露，也能防止一些爬虫对有效信息的爬取。",
                                "blog_status": 0,
                                "blog_visits": 22,
                                "create_time": "2021-02-28 15:39",
                                "update_time": "2021-04-23 12:47",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 5,
                                    "category_name": "后端"
                                }
                            }
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "1294",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 2
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
            },
            "5": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 1,
                        "currentPage": 1,
                        "category_id": 5,
                        "category_name": "后端",
                        "data": []
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "996",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 3
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
            },
            "7": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 1,
                        "currentPage": 1,
                        "category_id": 7,
                        "category_name": "未分类",
                        "data": []
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "398",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 4
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                }
            },
        },
        queryByWords: {
            "123": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 2,
                        "currentPage": 1,
                        "data": [
                            {
                                "blog_id": 8,
                                "blog_title": "Linux基础命令笔记",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182092389_d006a21a-69b9-4ac5-a79b-970bfa3e04aa.jpg",
                                "blog_summary": "记录下上一年学的Linux基础命令笔记~",
                                "blog_status": 0,
                                "blog_visits": 50,
                                "create_time": "2021-02-13 03:42",
                                "update_time": "2021-04-23 12:48",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 7,
                                "blog_title": "Python3爬虫实战【点触验证码】 — 模拟登陆bilibili",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                                "blog_summary": "实现目标：模拟登陆哔哩哔哩，涉及知识：点触验证码的攻克、自动化测试工具 Selenium 的使用，超级鹰打码平台的使用",
                                "blog_status": 0,
                                "blog_visits": 41,
                                "create_time": "2021-02-13 03:35",
                                "update_time": "2021-04-23 12:47",
                                "is_top": 0,
                                "blog_like": 2,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 6,
                                "blog_title": "设计模式之单例模式",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                                "blog_summary": "单例模式是设计模式中最简单的一个设计模式，属于创建型模式，其定义是保证一个类仅有一个实例，并且提供一个访问它的全局访问点。",
                                "blog_status": 0,
                                "blog_visits": 22,
                                "create_time": "2021-02-13 03:33",
                                "update_time": "2021-04-29 14:15",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 5,
                                "blog_title": "神秘国度的爱情故事（树剖+lca）",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                                "blog_summary": "数据结构课设之神秘国度的爱情故事（树剖+lca）",
                                "blog_status": 0,
                                "blog_visits": 21,
                                "create_time": "2021-02-13 03:19",
                                "update_time": "2021-04-23 12:48",
                                "is_top": 0,
                                "blog_like": 1,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            },
                            {
                                "blog_id": 4,
                                "blog_title": "JVM——Java内存区域",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                                "blog_summary": "深入了解java虚拟机笔记",
                                "blog_status": 0,
                                "blog_visits": 31,
                                "create_time": "2021-02-13 03:11",
                                "update_time": "2021-04-23 12:49",
                                "is_top": 0,
                                "blog_like": 4,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 2,
                                    "category_name": "学习"
                                }
                            }
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "996",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 3
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                },
                "2": {
                    "data": {
                        "code": 200,
                        "totalPage": 2,
                        "currentPage": 2,
                        "data": [
                            {
                                "blog_id": 2,
                                "blog_title": "冰雪林中著此身，不同桃李混芳尘",
                                "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                                "blog_summary": "冰雪林中著此身，不同桃李混芳尘。博主的个人简介~~",
                                "blog_status": 0,
                                "blog_visits": 73,
                                "create_time": "2021-02-12 22:46",
                                "update_time": "2021-05-05 08:05",
                                "is_top": 0,
                                "blog_like": 4,
                                "comment_cnt": 0,
                                "cateGory": {
                                    "category_id": 1,
                                    "category_name": "生活"
                                }
                            }
                        ]
                    },
                    "status": 200,
                    "statusText": "",
                    "headers": {
                        "content-length": "398",
                        "content-type": "application/json"
                    },
                    "config": {
                        "url": "/blogList",
                        "method": "get",
                        "headers": {
                            "Accept": "application/json, text/plain, */*"
                        },
                        "params": {
                            "currentPage": 4
                        },
                        "baseURL": "https://api.datealive.top",
                        "transformRequest": [
                            null
                        ],
                        "transformResponse": [
                            null
                        ],
                        "timeout": 0,
                        "xsrfCookieName": "XSRF-TOKEN",
                        "xsrfHeaderName": "X-XSRF-TOKEN",
                        "maxContentLength": -1,
                        "maxBodyLength": -1
                    },
                    "request": {}
                }
            },
        },
        bolgArchive: {
            "data": {
                "code": 200,
                "totalPage": 1,
                "currentPage": 1,
                "data": [
                    {
                        month: "2021-04",
                        arr: [
                            {
                                "blog_id": 29,
                                "blog_title": "Redis学习总结",
                                "create_time": "2021-04-05 12:52",
                                "day": "05"
                            },
                        ]
                    },
                    {
                        month: "2021-03",
                        arr: [
                            {
                                "blog_id": 28,
                                "blog_title": "JVM性能分析器-JProfiler的使用",
                                "create_time": "2021-03-23 08:40",
                                "day": "23"
                            },
                            {
                                "blog_id": 27,
                                "blog_title": "JVM调优参数记录（持续更新）",
                                "create_time": "2021-03-23 07:56",
                                "day": "23"
                            },
                            {
                                "blog_id": 26,
                                "blog_title": "JVM垃圾回收",
                                "create_time": "2021-03-23 07:53",
                                "day": "23"
                            },
                            {
                                "blog_id": 25,
                                "blog_title": "JVM学习之双亲委派模型",
                                "create_time": "2021-03-20 13:11",
                                "day": "20"
                            },
                            {
                                "blog_id": 24,
                                "blog_title": "记spring读取properties文件username报错问题",
                                "create_time": "2021-03-07 05:44",
                                "day": "07"
                            },
                            {
                                "blog_id": 23,
                                "blog_title": "认证授权篇之JWT详解",
                                "create_time": "2021-03-06 08:48",
                                "day": "06"
                            },
                            {
                                "blog_id": 22,
                                "blog_title": "学习笔记——认证授权基础篇",
                                "create_time": "2021-03-03 08:44",
                                "day": "03"
                            },

                        ]
                    },
                    {
                        month: "2021-02",
                        arr: [
                            {
                                "blog_id": 21,
                                "blog_title": "学习笔记——数据脱敏",
                                "create_time": "2021-02-28 15:39",
                                "day": "28"
                            },
                            {
                                "blog_id": 8,
                                "blog_title": "Linux基础命令笔记",
                                "create_time": "2021-02-13 03:42",
                                "day": "13"
                            },
                            {
                                "blog_id": 7,
                                "blog_title": "Python3爬虫实战【点触验证码】 — 模拟登陆bilibili",
                                "create_time": "2021-02-13 03:35",
                                "day": "13"
                            },
                            {
                                "blog_id": 6,
                                "blog_title": "设计模式之单例模式",
                                "create_time": "2021-02-13 03:33",
                                "day": "13"
                            },
                            {
                                "blog_id": 5,
                                "blog_title": "神秘国度的爱情故事（树剖+lca）",
                                "create_time": "2021-02-13 03:19",
                                "day": "13"
                            },
                            {
                                "blog_id": 4,
                                "blog_title": "JVM——Java内存区域",
                                "create_time": "2021-02-13 03:11",
                                "day": "13"
                            },
                            {
                                "blog_id": 3,
                                "blog_title": "springboot+vue博客项目上线啦",
                                "create_time": "2021-02-12 22:50",
                                "day": "12"
                            },
                            {
                                "blog_id": 2,
                                "blog_title": "冰雪林中著此身，不同桃李混芳尘",
                                "create_time": "2021-02-12 22:46",
                                "day": "12"
                            }
                        ]
                    },
                ]
            },
            "status": 200,
            "statusText": "",
            "headers": {"content-length": "309", "content-type": "application/json"},
            "config": {
                "url": "/blogArchive",
                "method": "get",
                "headers": {"Accept": "application/json, text/plain, */*"},
                "params": {"currentPage": 1},
                "baseURL": "https://api.datealive.top",
                "transformRequest": [null],
                "transformResponse": [null],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1,
                "maxBodyLength": -1
            },
            "request": {}
        },

        allBlogs: {
            "data": {
                "code": 200,
                "totalPage": 1,
                "currentPage": 1,
                "data": [
                    {
                        "blog_id": 3,
                        "blog_title": "springboot+vue博客项目上线啦",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                        "blog_summary": "耗时两个半星期的前后端分离的博客项目正式上线，欢迎大家来踩~",
                        "blog_status": 0,
                        "blog_visits": 704,
                        "create_time": "2021-02-12 22:50",
                        "update_time": "2021-05-05 08:12",
                        "is_top": 1,
                        "blog_like": 13,
                        "comment_cnt": 11,
                        "cateGory": {
                            "category_id": 3,
                            "category_name": "项目"
                        }
                    },
                    {
                        "blog_id": 29,
                        "blog_title": "Redis学习总结",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                        "blog_summary": "Redis是一个使用c语音开发的数据库，不过与传统的数据库不同的是Redis的数据是存储在内存中的，也就是Redis是内存数据库，所以读写速度特别快，因此Redis被广泛应用于缓存方向。",
                        "blog_status": 0,
                        "blog_visits": 134,
                        "create_time": "2021-04-05 12:52",
                        "update_time": "2021-04-29 14:08",
                        "is_top": 0,
                        "blog_like": 2,
                        "comment_cnt": 1,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 28,
                        "blog_title": "JVM性能分析器-JProfiler的使用",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                        "blog_summary": "JProfiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。",
                        "blog_status": 0,
                        "blog_visits": 98,
                        "create_time": "2021-03-23 08:40",
                        "update_time": "2021-04-29 14:08",
                        "is_top": 0,
                        "blog_like": 3,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 27,
                        "blog_title": "JVM调优参数记录（持续更新）",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295952_b1f3ae4b-6e2f-432e-a2f5-5a1b3da871f4.jpg",
                        "blog_summary": "记录个人使用过的JVM调优参数",
                        "blog_status": 0,
                        "blog_visits": 23,
                        "create_time": "2021-03-23 07:56",
                        "update_time": "2021-04-23 12:45",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 26,
                        "blog_title": "JVM垃圾回收",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295956_cac7c1a5-c455-4277-a844-8e2cb9108885.jpg",
                        "blog_summary": "Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配。同时，Java 自动内存管理最核心的功能是堆内存中对象的分配与回收。",
                        "blog_status": 0,
                        "blog_visits": 90,
                        "create_time": "2021-03-23 07:53",
                        "update_time": "2021-04-23 12:45",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 25,
                        "blog_title": "JVM学习之双亲委派模型",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705773753_e911c3c5-e7e1-4167-a431-127578bc021b.jpg",
                        "blog_summary": "JVM类加载器和双亲委派模型详解，个人学习分享。",
                        "blog_status": 0,
                        "blog_visits": 22,
                        "create_time": "2021-03-20 13:11",
                        "update_time": "2021-04-29 14:16",
                        "is_top": 0,
                        "blog_like": 2,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 24,
                        "blog_title": "记spring读取properties文件username报错问题",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                        "blog_summary": "记一次spring读取properties文件username报错问题，来自一个朋友的报错。受益匪浅。",
                        "blog_status": 0,
                        "blog_visits": 44,
                        "create_time": "2021-03-07 05:44",
                        "update_time": "2021-04-29 14:15",
                        "is_top": 0,
                        "blog_like": 3,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 23,
                        "blog_title": "认证授权篇之JWT详解",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618929707504_096262d1-7821-4c47-b01d-47c25a91fe14.jpg",
                        "blog_summary": "JWT的原理是，服务器认证后，生成一个JSON对象，返回给用户，以后，用户与服务端通信的时候，都要发送这个JSON对象，服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器生成这个对象的时候，会加上签名。这样，服务器就不需要保存Session数据了，这体现了JWT的无状态特性。",
                        "blog_status": 0,
                        "blog_visits": 39,
                        "create_time": "2021-03-06 08:48",
                        "update_time": "2021-04-23 12:46",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 22,
                        "blog_title": "学习笔记——认证授权基础篇",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                        "blog_summary": "学习笔记——认证授权基础篇，了解相关概念。",
                        "blog_status": 0,
                        "blog_visits": 23,
                        "create_time": "2021-03-03 08:44",
                        "update_time": "2021-04-23 12:47",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 21,
                        "blog_title": "学习笔记——数据脱敏",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182064979_f57d1d10-ae63-4005-b8d5-e48109ea0dbe.jpg",
                        "blog_summary": "数据脱敏就是在给定的脱敏规则和策略下，对敏感数据如手机号,银行卡号等信息，进行转化或修改的手段，防止敏感数据泄露。\\n\\n生活中有许多数据脱敏的例子，比如淘宝订单详情，京东匿名评论，有一些信息会被用*代替，保障了隐私不被泄露，也能防止一些爬虫对有效信息的爬取。",
                        "blog_status": 0,
                        "blog_visits": 22,
                        "create_time": "2021-02-28 15:39",
                        "update_time": "2021-04-23 12:47",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 5,
                            "category_name": "后端"
                        }
                    },
                    {
                        "blog_id": 8,
                        "blog_title": "Linux基础命令笔记",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182092389_d006a21a-69b9-4ac5-a79b-970bfa3e04aa.jpg",
                        "blog_summary": "记录下上一年学的Linux基础命令笔记~",
                        "blog_status": 0,
                        "blog_visits": 50,
                        "create_time": "2021-02-13 03:42",
                        "update_time": "2021-04-23 12:48",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 7,
                        "blog_title": "Python3爬虫实战【点触验证码】 — 模拟登陆bilibili",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                        "blog_summary": "实现目标：模拟登陆哔哩哔哩，涉及知识：点触验证码的攻克、自动化测试工具 Selenium 的使用，超级鹰打码平台的使用",
                        "blog_status": 0,
                        "blog_visits": 41,
                        "create_time": "2021-02-13 03:35",
                        "update_time": "2021-04-23 12:47",
                        "is_top": 0,
                        "blog_like": 2,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 6,
                        "blog_title": "设计模式之单例模式",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                        "blog_summary": "单例模式是设计模式中最简单的一个设计模式，属于创建型模式，其定义是保证一个类仅有一个实例，并且提供一个访问它的全局访问点。",
                        "blog_status": 0,
                        "blog_visits": 22,
                        "create_time": "2021-02-13 03:33",
                        "update_time": "2021-04-29 14:15",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 5,
                        "blog_title": "神秘国度的爱情故事（树剖+lca）",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg",
                        "blog_summary": "数据结构课设之神秘国度的爱情故事（树剖+lca）",
                        "blog_status": 0,
                        "blog_visits": 21,
                        "create_time": "2021-02-13 03:19",
                        "update_time": "2021-04-23 12:48",
                        "is_top": 0,
                        "blog_like": 1,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 4,
                        "blog_title": "JVM——Java内存区域",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182046950_bfa0cecc-4adc-4bca-b73c-fd609d25216f.jpg",
                        "blog_summary": "深入了解java虚拟机笔记",
                        "blog_status": 0,
                        "blog_visits": 31,
                        "create_time": "2021-02-13 03:11",
                        "update_time": "2021-04-23 12:49",
                        "is_top": 0,
                        "blog_like": 4,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 2,
                            "category_name": "学习"
                        }
                    },
                    {
                        "blog_id": 2,
                        "blog_title": "冰雪林中著此身，不同桃李混芳尘",
                        "blog_cover_image": "https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg",
                        "blog_summary": "冰雪林中著此身，不同桃李混芳尘。博主的个人简介~~",
                        "blog_status": 0,
                        "blog_visits": 73,
                        "create_time": "2021-02-12 22:46",
                        "update_time": "2021-05-05 08:05",
                        "is_top": 0,
                        "blog_like": 4,
                        "comment_cnt": 0,
                        "cateGory": {
                            "category_id": 1,
                            "category_name": "生活"
                        }
                    }
                ]
            },
            "status": 200,
            "statusText": "",
            "headers": {
                "content-length": "1241",
                "content-type": "application/json"
            },
            "config": {
                "url": "/blogList",
                "method": "get",
                "headers": {
                    "Accept": "application/json, text/plain, */*"
                },
                "params": {
                    "currentPage": 1
                },
                "baseURL": "https://api.datealive.top",
                "transformRequest": [
                    null
                ],
                "transformResponse": [
                    null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1,
                "maxBodyLength": -1
            },
            "request": {}
        }
    }
}
