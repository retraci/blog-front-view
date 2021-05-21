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
                        "headInfo": "若似月轮终皎洁，不辞冰雪为卿热。",
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
                "data": [{"category_id": 4, "category_name": "前端"}, {
                    "category_id": 5,
                    "category_name": "后端"
                }, {"category_id": 2, "category_name": "学习"}, {
                    "category_id": 7,
                    "category_name": "未分类"
                }, {"category_id": 1, "category_name": "生活"}, {"category_id": 3, "category_name": "项目"}]
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
            '3': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":3,"blog_title":"springboot+vue博客项目上线啦","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705681435_a0dc601e-6791-4ba1-896a-a8f39e4296c4.jpg","blog_content":"<h1 id=\"hi-dream-blog\">Hi-Dream-Blog</h1>\\n<h1 id=\"springbootvue博客系统\">springboot+vue博客系统</h1>\\n<h4 id=\"项目前言\"><strong>项目前言</strong></h4>\\n<p>本项目目前还在完善中，功能也在不断优化中，前端页面编写花费时间较后端少，因为之前写了不少博客样式，有些拿来改改就行，<a href=\"https://github.com/dateolive/mdy-blog\" target=\"_blank\" rel=\"external nofollow noopener\">Semantic UI 博客样式</a> 这个是之前写的一个博客样式，本来想打算用springboot和thymeleaf开发博客的，后来想了想，前后端分离才是王道，所以采取了springboot和vue来开发，vue是我之前学的，所以容易上手。而springboot框架是我这阵子才刚刚起步，在b站学习完了狂神大大的视频后，趁热做的一个练手项目，可能会有很多bug，敬请原谅~~</p>\\n<p><a href=\"https://github.com/dateolive/halo-dream\" target=\"_blank\" rel=\"external nofollow noopener\">博客小程序</a></p>\\n<p>这是我之前开发的一款基于wordpress的博客微信小程序，后面会将本博客系统的接口迁移到这个微信小程序上，提供一个博客微信小程序。</p>\\n<p>如果你对这个博客系统感兴趣，或者想交pr的，可以联系我，加入到Organizations里。</p>\\n<h4 id=\"项目预览\"><strong>项目预览</strong></h4>\\n<ul>\\n<li>前台：https://blog.datealive.top/</li>\\n<li>后台：https://admin.datealive.top/     游客账户：<code>Vistortest</code> 密码：<code>Vistortest</code></li>\\n</ul>\\n<h4 id=\"项目描述\"><strong>项目描述</strong></h4>\\n<p>1.前端分为两个项目：一个是博客前台页面，一个是博客后台管理页面。</p>\\n<p>博客前台页面：前台页面采用elementUI框架和自己写的一些css样式实现，目前样式不太协调，敬请谅解。</p>\\n<p>博客后台页面：后台采取自定义修改GitHub开源后台管理项目<a href=\"vue-manage-system\" target=\"_blank\" rel=\"external nofollow noopener\">vue-manage-system</a></p>\\n<p>2.后端采用springboot实现，使用shiro和jwt做用户认证和授权，redis做nosql缓存，项目部署在宝塔面板上。</p>\\n<h4 id=\"技术栈\"><strong>技术栈</strong></h4>\\n<p><strong>前端</strong></p>\\n<table class=\"ui celled table\">\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>技术点</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>基础</td>\\n<td>vue</td>\\n</tr>\\n<tr>\\n<td>UI框架</td>\\n<td>elementUI</td>\\n</tr>\\n<tr>\\n<td>文本编辑器</td>\\n<td>MavonEditor</td>\\n</tr>\\n<tr>\\n<td>后台模板</td>\\n<td>vue-manage-system开源模板</td>\\n</tr>\\n</tbody>\\n</table>\\n<p><strong>后端</strong></p>\\n<table class=\"ui celled table\">\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>技术点</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>开发</td>\\n<td>Springboot+Mybatis</td>\\n</tr>\\n<tr>\\n<td>数据库</td>\\n<td>MySQL+Druid</td>\\n</tr>\\n<tr>\\n<td>缓存</td>\\n<td>redis</td>\\n</tr>\\n<tr>\\n<td>权限框架</td>\\n<td>shiro  ， jwt</td>\\n</tr>\\n<tr>\\n<td>其他</td>\\n<td>定时任务，Lombok，log4j ，分页插件：PageHelper，邮件任务.....</td>\\n</tr>\\n</tbody>\\n</table>\\n<h4 id=\"遇到的问题\"><strong>遇到的问题</strong></h4>\\n<p><strong>关于阅读次数</strong></p>\\n<p>刚开始是每次刷新就去请求数据库，后面实现了redis缓存阅读量，实现定时任务更新文章访问量</p>\\n<p><strong>更换数据库编码问题</strong>\\n将原来的项目的数据库更换成utf8mb4编码，需要将datasource的url中的<code>useUnicode=true&amp;characterEncoding=utf8</code>去除</p>\\n<p><strong>Safari 浏览器访问不了当前站点</strong>\\n昨晚，有个网友发来说iPad的Safari 浏览器访问不了当前站点，我仔细排查了下，发现可能是Safari 浏览器访问链接时http自动转换为https，但我这个二级域名还没部署ssl证书，导致访问站点链接时，未开启SSL的站点使用HTTPS会直接访问到已开启SSL的站点，所以就跳转到了我之前的wordpress博客地址，所以现在就在站点上部署了ssl证书，测试了下，发现已经能够正常访问了。</p>\\n<p><strong>前端前台页面使用mavonEditor导致tocbot目录插件失效</strong></p>\\n<p>后端返回博客详情内容时，使用commonmark将markdown转为html  解决p标签无class导致tocbot无法生成问题。</p>\\n<h4 id=\"关于开源\"><strong>关于开源</strong></h4>\\n<p>代码已上传GitHub，欢迎给个star~ ，有能力的朋友，可以请我喝一杯奶茶。</p>\\n<p><a href=\"https://github.com/dateolive/Hi-Dream-Blog\" target=\"_blank\" rel=\"external nofollow noopener\">Hi-Dream-Blog</a></p>\\n<img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210227173958.jpg\" alt=\"zansan\" style=\"zoom:25%;\" />\\n<h4 id=\"关于organizations\"><strong>关于Organizations</strong></h4>\\n<p>现在陆陆续续有人加入了这个博客的Organizations，给这个博客系统提供了很大的帮助，同时也给了很棒的建议，在此十分感谢他们。</p>\\n<p>这里只展示目前对项目有贡献的朋友。</p>\\n<ul>\\n<li><a href=\"https://github.com/lengyue1024\" target=\"_blank\" rel=\"external nofollow noopener\">lengyue1024</a></li>\\n</ul>\\n<p>感谢下面朋友的打赏：</p>\\n<table class=\"ui celled table\">\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>打赏内容</th>\\n<th>打赏金额</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>八十一</td>\\n<td>博客系统打赏</td>\\n<td>10.0</td>\\n</tr>\\n<tr>\\n<td>0X</td>\\n<td>宵夜</td>\\n<td>10.0</td>\\n</tr>\\n</tbody>\\n</table>\\n<h4 id=\"关于我\"><strong>关于我</strong></h4>\\n<p>由于我目前要开学了，后面可能没很大的精力投入这个博客系统开发了，更新迭代的速度也会变慢。敬请原谅。如果有什么bug或者建议，可以及时联系我。</p>\\n<p>qq:2448282543</p>\\n<h4 id=\"参考项目\"><strong>参考项目</strong></h4>\\n<ul>\\n<li><a href=\"https://github.com/MarkerHub/vueblog\" target=\"_blank\" rel=\"external nofollow noopener\">MarkerHub</a></li>\\n<li><a href=\"https://gitee.com/fengziy/Fblog\" target=\"_blank\" rel=\"external nofollow noopener\">Fblog</a></li>\\n<li><a href=\"https://github.com/Naccl/NBlog\" target=\"_blank\" rel=\"external nofollow noopener\">NBlog</a></li>\\n</ul>\\n<p><strong>十分感谢上面这些开源项目，感谢！！</strong></p>\\n","blog_summary":"耗时两个半星期的前后端分离的博客项目正式上线，欢迎大家来踩~","blog_status":0,"blog_visits":712,"create_time":"2021-02-13 06:50","update_time":"2021-05-05 16:12","is_top":1,"blog_like":13,"comment_cnt":11,"cateGory":[{"category_id":3,"category_name":"项目"}],"tags":[{"tag_id":2,"tag_name":"vue"},{"tag_id":3,"tag_name":"Java"},{"tag_id":4,"tag_name":"springboot"},{"tag_id":5,"tag_name":"项目"}]}},"status":200,"statusText":"","headers":{"content-length":"3082","content-type":"application/json"},"config":{"url":"/blog/3","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}',
            '28': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":28,"blog_title":"JVM性能分析器-JProfiler的使用","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg","blog_content":"<h2 id=\"jprofiler介绍\">JProfiler介绍</h2>\\n<p>JProfiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。</p>\\n<p>JProfiler界面UI美观，方便使用。</p>\\n<h2 id=\"下载安装\">下载安装</h2>\\n<p>我这边选择 JProfiler 11.0 版本，因为使用 JProfiler需要注册码，在网上能找到的，大多都是 11 版本下的注册码。</p>\\n<p>附上官网链接和注册码：<a href=\"https://www.ej-technologies.com/download/jprofiler/version_110\" target=\"_blank\" rel=\"external nofollow noopener\">jprofiler</a></p>\\n<p>注册码：L-J11-Everyone#speedzodiac-327a9wrs5dxvz#463a59</p>\\n<p>下载下来后直接安装即可，输入注册码等其他信息，其他信息可以随便填。</p>\\n<p>接着，在IDEA下载JProfiler插件</p>\\n<p>配置JProfiler插件的运行环境</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323161435.png\" alt=\"\" /></p>\\n<p>这样 ，你就完成安装了。</p>\\n<h2 id=\"如何使用\">如何使用</h2>\\n<p>示例：\\n编写一个Java文件</p>\\n<pre><code class=\"language-java\">package com.datealive.jvm;\\n\\nimport java.util.ArrayList;\\n\\n/**\\n * @ClassName: jprofiler\\n * @Description: TODO\\n * @author: datealive\\n * @date: 2021/3/21  20:46\\n */\\n\\npublic class jprofiler {\\n\\n    byte[] bytes = new byte[1*1024*1024];\\n\\n    public static void main(String[] args) {\\n\\n        ArrayList&lt;jprofiler&gt; list = new ArrayList&lt;&gt;();\\n        int count=0;\\n        try{\\n            while(true){\\n                list.add(new jprofiler());\\n                count++;\\n            }\\n        }catch (Error e){\\n            System.out.println(&quot;count:&quot;+count);\\n            e.printStackTrace();\\n        }\\n\\n    }\\n}\\n\\n\\n</code></pre>\\n<p>接着调节JVM参数</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323161803.jpg\" alt=\"\" /></p>\\n<p>调节的JVM参数如下</p>\\n<pre><code class=\"language-java\">-Xms2m -Xmx2m //堆内存最大最小值都是2m\\n-XX:NewSize=2m //新生代最小值为2m\\n-XX:MaxNewSize=2m //新生代最大值为2m\\n-XX:+HeapDumpOnOutOfMemoryError //：抛出内存溢出错误时导出堆信息到指定文件\\n-XX:+PrintGCDetails  //打印GC日志\\n</code></pre>\\n<p>点击JProfiler运行</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323162144.jpg\" alt=\"\" /></p>\\n<p>运行后，控制台会打印出相应的GC日志，还会生成一个hprof文件</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323162504.jpg\" alt=\"\" /></p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323162401.jpg\" alt=\"\" /></p>\\n<p>点击打开这个hprof文件</p>\\n<p>这样可以看到内存占比，从而分析出OOM等问题是如何产生的</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323162937.jpg\" alt=\"\" /></p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323163651.jpg\" alt=\"\" />\\n<img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323163731.jpg\" alt=\"\" /></p>\\n","blog_summary":"JProfiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。","blog_status":0,"blog_visits":100,"create_time":"2021-03-23 16:40","update_time":"2021-04-29 22:08","is_top":0,"blog_like":3,"comment_cnt":0,"cateGory":[{"category_id":2,"category_name":"学习"},{"category_id":5,"category_name":"后端"}],"tags":[{"tag_id":27,"tag_name":"JVM"},{"tag_id":24,"tag_name":"学习"},{"tag_id":3,"tag_name":"Java"}]}},"status":200,"statusText":"","headers":{"content-length":"1923","content-type":"application/json"},"config":{"url":"/blog/28","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}',
            '27': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":27,"blog_title":"JVM调优参数记录（持续更新）","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295952_b1f3ae4b-6e2f-432e-a2f5-5a1b3da871f4.jpg","blog_content":"<h1 id=\"jvm调优参数记录\">JVM调优参数记录</h1>\\n<h2 id=\"堆内存相关调优参数\">堆内存相关调优参数</h2>\\n<blockquote>\\n<p>堆是Java虚拟机所管理的内存中最大的一块，被所有线程共享，在虚拟机启动时创建。堆内存区域唯一目的就是存放对象实例，几乎所有的对象实例和数组都在这里分配内存。</p>\\n</blockquote>\\n<h3 id=\"11-修改堆内存大小参数\">1.1 修改堆内存大小参数</h3>\\n<pre><code class=\"language-java\">-Xms&lt;heap size&gt;[unit]  //指定最小堆大小\\n-Xmx&lt;heap size&gt;[unit]  //指定最大堆大小\\n</code></pre>\\n<ul>\\n<li>heap size 表示要初始化内存的具体大小</li>\\n<li>unit表示内存单位。比如  g，m，k分别代表GB，MB，KB</li>\\n</ul>\\n<pre><code class=\"language-java\">-Xms2G -Xmx5G  //表示为JVM分配最小2GB最大5GB的堆内存大小\\n</code></pre>\\n<h3 id=\"12修改堆内存中新生代内存大小\">1.2修改堆内存中新生代内存大小</h3>\\n<p>两种方法：</p>\\n<ul>\\n<li>使用<code>-XX:NewSize</code>和<code>-XX:MaxNewSize</code>指定：</li>\\n</ul>\\n<pre><code class=\"language-java\">-XX:NewSize=&lt;young size&gt;[unit]  //指定新生代最小内存\\n-XX:MaxNewSize=&lt;young size&gt;[unit] //指定新生代最大内存    \\n</code></pre>\\n<pre><code class=\"language-java\">-XX:NewSize=256m -XX:MaxNewSize=1024m //表示为jvm堆内存的新生代分配最小256m最大1024m的内存大小\\n</code></pre>\\n<ul>\\n<li>使用<code>-Xmn&lt;young size&gt;[unit]</code>指定</li>\\n</ul>\\n<pre><code class=\"language-java\">-Xmn256m  //指定新生代最小内存\\n</code></pre>\\n<p>修改新生代和老年代内存比值</p>\\n<pre><code class=\"language-java\">-XX:NewRatio=1 //新生代与老年代比值为1:1\\n</code></pre>\\n<h3 id=\"13-指定永久代元空间的大小\">1.3 指定永久代/元空间的大小</h3>\\n<p>JDK 1.8 之前永久代还没被彻底移除时，通过下面的参数调节方法区大小</p>\\n<pre><code class=\"language-java\">-XX:PermSize=N //方法区（永久代）初始大小\\n-XX:MaxPermSize=N//方法区（永久代）最大大小，超过这个值会抛出OOM异常\\n</code></pre>\\n<p>JDK 1.8之后，永久代（方法区）被彻底移除，取而代之的是元空间，元空间使用的是本地内存</p>\\n<pre><code class=\"language-java\">-XX:MetaspaceSize=N //设置元空间初始大小\\n-XX:MaxMetaspaceSize=N //设置元空间最大大小\\n</code></pre>\\n<h3 id=\"14-垃圾收集相关\">1.4 垃圾收集相关</h3>\\n<h4 id=\"141-垃圾回收器\">1.4.1 垃圾回收器</h4>\\n<pre><code class=\"language-java\">-XX:+UseSerialGC //串行垃圾收集器\\n-XX:+UseParallerGC //并行垃圾收集器\\n-XX:+USeParNewGC //CMS垃圾收集器\\n-XX:+UseG1GC //G1垃圾收集器\\n</code></pre>\\n<h4 id=\"142-gc记录\">1.4.2 GC记录</h4>\\n<pre><code class=\"language-java\">-XX:+UseGCLogFileRotation \\n-XX:NumberOfGCLogFiles=&lt; number of log files &gt; \\n-XX:GCLogFileSize=&lt; file size &gt;[ unit ]\\n-Xloggc:/path/to/gc.log\\n</code></pre>\\n","blog_summary":"记录个人使用过的JVM调优参数","blog_status":0,"blog_visits":25,"create_time":"2021-03-23 15:56","update_time":"2021-04-23 20:45","is_top":0,"blog_like":1,"comment_cnt":0,"cateGory":[{"category_id":2,"category_name":"学习"},{"category_id":5,"category_name":"后端"}],"tags":[{"tag_id":3,"tag_name":"Java"},{"tag_id":27,"tag_name":"JVM"},{"tag_id":24,"tag_name":"学习"}]}},"status":200,"statusText":"","headers":{"content-length":"1613","content-type":"application/json"},"config":{"url":"/blog/27","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}',
            '26': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":26,"blog_title":"JVM垃圾回收","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1618565295956_cac7c1a5-c455-4277-a844-8e2cb9108885.jpg","blog_content":"<h1 id=\"jvm垃圾回收\">JVM垃圾回收</h1>\\n<h2 id=\"jvm内存分配\">JVM内存分配</h2>\\n<p>Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配。同时，Java 自动内存管理最核心的功能是 <strong>堆</strong> 内存中对象的分配与回收。</p>\\n<p>Java堆是垃圾回收管理的主要区域，也被称为<strong>GC堆</strong>，现在大多JVM的垃圾回收机制，采用的是分代垃圾收集算法。</p>\\n<p>Java堆可以被细分成新生代，老年代，元空间（JDK 1.8 之前是永久代）。新生代又可以细分成 伊甸园区（Eden），幸存者区。幸存者区可以划分为From Survivor和To Survivor 区。</p>\\n<p>划分成多个区的目的是更好地回收内存，分配内存。</p>\\n<p>堆空间的基本结构（图示）：</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323135320.png\" alt=\"image-20210323135311211\" /></p>\\n<p>大部分情况下，对象首先会在Eden区分配，在一次新生代GC后，如果对象还存活，就会进入幸存者区，且对象年龄会加1，当它年龄达到一定的阈值时，就会被晋升到老年代，对象晋升到老年代的年龄阈值，可以通过<code>-XX:MaxTenuringThreshold</code>来设置，默认值是15。</p>\\n<p>关于这个年龄阈值，JVM实现了动态年龄计算算法，Hotspot遍历所有对象时，按照年龄从小到大对其所占用的大小进行累计，当累积的某个年龄大小超过survivor区的一半时，取这个值和MaxTenuringThreshold中更小的一个值，作为晋升的年龄阈值。</p>\\n<p>经过这次 GC 后，Eden 区和&quot;From&quot;区已经被清空。这个时候，&quot;From&quot;和&quot;To&quot;会交换他们的角色，也就是新的&quot;To&quot;就是上次 GC 前的“From”，新的&quot;From&quot;就是上次 GC 前的&quot;To&quot;。不管怎样，都会保证名为 To 的 Survivor 区域是空的。Minor GC 会一直重复这样的过程，直到“To”区被填满，&quot;To&quot;区被填满之后，会将所有对象移动到老年代中。</p>\\n<h2 id=\"对象已经死亡\">对象已经死亡？</h2>\\n<p>在进行垃圾回收机制前，需要判断哪些对象已经死亡</p>\\n<h3 id=\"1-引用计数算法\">1. 引用计数算法</h3>\\n<p>给对象添加一个引用计数器，每当有一个地方引用时，计数器+1，引用失效时；计数器-1；任何时候计数器为0的对象就是不可能再被使用的。</p>\\n<p>优点：简单，效率高</p>\\n<p>缺点：难以解决对象之间相互循环引用问题</p>\\n<p>比如a引用b，b引用a，a=null且b=null，但他们的引用计数器都不为0，所以GC无法回收他们</p>\\n<h3 id=\"2-可达性分析算法\">2. 可达性分析算法</h3>\\n<p>以“<strong>GC Roots</strong>”为根节点向下搜索，节点走过的路径称为引用链，当一个对象到<strong>GC Roots</strong>没有任何引用链相连的话，则说明这个对象是不可用的。</p>\\n<p>可作为<strong>GC Roots</strong>的对象有：</p>\\n<ul>\\n<li>虚拟机栈（栈帧中的本地变量表）中的引用对象</li>\\n<li>本地方法栈中引用的对象</li>\\n<li>方法区中类静态属性引用的对象</li>\\n<li>方法区中常量引用的对象</li>\\n<li>所有被同步锁持有的对象</li>\\n</ul>\\n<p><strong>不可达的对象并非“非死不可”</strong></p>\\n<p>即使在可达性分析法中不可达的对象，也并非是“非死不可”的，这时候它们暂时处于“缓刑阶段”，要真正宣告一个对象死亡，至少要经历两次标记过程；可达性分析法中不可达的对象被第一次标记并且进行一次筛选，筛选的条件是此对象是否有必要执行 finalize 方法。当对象没有覆盖 finalize 方法，或 finalize 方法已经被虚拟机调用过时，虚拟机将这两种情况视为没有必要执行。</p>\\n<p>被判定为需要执行的对象将会被放在一个队列中进行第二次标记，除非这个对象与引用链上的任何一个对象建立关联，否则就会被真的回收。</p>\\n<h4 id=\"3-理解四种引用\">3. 理解四种引用</h4>\\n<p><strong>3.1．强引用（StrongReference）</strong></p>\\n<p>以前我们使用的大部分引用实际上都是强引用，这是使用最普遍的引用。如果一个对象具有强引用，那就类似于<strong>必不可少的生活用品</strong>，垃圾回收器绝不会回收它。当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠随意回收具有强引用的对象来解决内存不足问题。</p>\\n<p><strong>3.2．软引用（SoftReference）</strong></p>\\n<p>如果一个对象只具有软引用，那就类似于<strong>可有可无的生活用品</strong>。如果内存空间足够，垃圾回收器就不会回收它，如果内存空间不足了，就会回收这些对象的内存。只要垃圾回收器没有回收它，该对象就可以被程序使用。软引用可用来实现内存敏感的高速缓存。</p>\\n<p>软引用可以和一个引用队列（ReferenceQueue）联合使用，如果软引用所引用的对象被垃圾回收，JAVA 虚拟机就会把这个软引用加入到与之关联的引用队列中。</p>\\n<p><strong>3.3．弱引用（WeakReference）</strong></p>\\n<p>如果一个对象只具有弱引用，那就类似于<strong>可有可无的生活用品</strong>。弱引用与软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存。不过，由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。</p>\\n<p>弱引用可以和一个引用队列（ReferenceQueue）联合使用，如果弱引用所引用的对象被垃圾回收，Java 虚拟机就会把这个弱引用加入到与之关联的引用队列中。</p>\\n<p><strong>3.4．虚引用（PhantomReference）</strong></p>\\n<p>&quot;虚引用&quot;顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。</p>\\n<p><strong>虚引用主要用来跟踪对象被垃圾回收的活动</strong>。</p>\\n<p><strong>虚引用与软引用和弱引用的一个区别在于：</strong> 虚引用必须和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。</p>\\n<p>特别注意，在程序设计中一般很少使用弱引用与虚引用，使用软引用的情况较多，这是因为<strong>软引用可以加速 JVM 对垃圾内存的回收速度，可以维护系统的运行安全，防止内存溢出（OutOfMemory）等问题的产生</strong>。</p>\\n<h4 id=\"4-常量是否是废弃常量和类是否是无用类\">4. 常量是否是废弃常量和类是否是无用类</h4>\\n<p><strong>废弃常量判断方法：</strong></p>\\n<blockquote>\\n<ol>\\n<li><strong>JDK1.7 之前运行时常量池逻辑包含字符串常量池存放在方法区, 此时 hotspot 虚拟机对方法区的实现为永久代</strong></li>\\n<li><strong>JDK1.7 字符串常量池被从方法区拿到了堆中, 这里没有提到运行时常量池,也就是说字符串常量池被单独拿到堆,运行时常量池剩下的东西还在方法区, 也就是 hotspot 中的永久代</strong> 。</li>\\n<li><strong>JDK1.8 hotspot 移除了永久代用元空间(Metaspace)取而代之, 这时候字符串常量池还在堆, 运行时常量池还在方法区, 只不过方法区的实现从永久代变成了元空间(Metaspace)</strong></li>\\n</ol>\\n</blockquote>\\n<p>如果字符串常量池中存在字符串&quot;adb&quot;，如果当前没有任何String对象引用该字符串的话，说明当前常量就是废弃常量，如果这时发生GC且有必要的话，这个废弃常量就会被清理掉。</p>\\n<p><strong>无用类判断条件：</strong></p>\\n<ul>\\n<li>该类所有实例都被回收，Java堆中不存在该类的任何实例</li>\\n<li>加载该类的<code>ClassLoader</code>已被回收</li>\\n<li>该类对应的<code>java.lang.Class</code>对象没有再任何地方被引用，无法在任何地方通过反射访问该类</li>\\n</ul>\\n<p>满足上面三个条件，无用类才可能会被回收</p>\\n<h2 id=\"垃圾收集算法\">垃圾收集算法</h2>\\n<h3 id=\"1标记-清除算法\">1.标记-清除算法</h3>\\n<p>首先遍历所有对象，对不需要回收的对象进行标记，在标记完后统一回收所有没被标记的对象。</p>\\n<ul>\\n<li>优点:不需要额外的空间</li>\\n<li>缺点:两次扫描,严重浪费时间,会产生内存碎片</li>\\n</ul>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323152028.png\" alt=\"image-20210323152027353\" /></p>\\n<h3 id=\"2标记-复制算法\">2.标记-复制算法</h3>\\n<p>将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。</p>\\n<ul>\\n<li>好处:没有内存的碎片</li>\\n<li>坏处:浪费了内存空间:多了一半空间永远是空 to.假设对象100%存活(极端情况)</li>\\n<li><strong>复制算法最佳使用场景</strong>:对象存活度较低的时候:新生区</li>\\n</ul>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323151511.png\" alt=\"image-20210323151510695\" /></p>\\n<h4 id=\"id\"></h4>\\n<h3 id=\"3-标记-压缩整理算法\">3. 标记-压缩（整理）算法</h3>\\n<p>标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是让所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323152523.png\" alt=\"image-20210323152521402\" /></p>\\n<p><em><strong>三种垃圾收集算法的比较：</strong></em></p>\\n<ul>\\n<li>\\n<p>内存效率（时间复杂度）：标记-复制算法 &gt; 标记-清除算法 &gt; 标记-压缩算法</p>\\n</li>\\n<li>\\n<p>内存整齐度：标记-复制算法 &gt; 标记-压缩算法 &gt; 标记-清除算法</p>\\n</li>\\n<li>\\n<p>内存利用率：标记-压缩算法 &gt; 标记-清除算法 &gt; 标记-复制算法</p>\\n</li>\\n</ul>\\n<h3 id=\"4-分代收集算法\">4. 分代收集算法</h3>\\n<p>对堆中各个年代的特点选择合适的垃圾收集算法，称为分代收集算法。</p>\\n<p>根据新生代中对象存活率低的特点，可以选择标记-复制算法，老年代中对象存活率高，而且没有额外的空间对它进行分配担保，可以选择标记-清除算法和标记-压缩算法混合实现。</p>\\n<h2 id=\"垃圾收集器\">垃圾收集器</h2>\\n<blockquote>\\n<p>垃圾回收器是内存回收的具体实现，没有最好的垃圾收集器，只有最适合的垃圾收集器。</p>\\n</blockquote>\\n<p>这里主要记录下四种常见的垃圾收集器</p>\\n<ul>\\n<li>\\n<p>串行垃圾收集器</p>\\n</li>\\n<li>\\n<p>并行垃圾收集器</p>\\n</li>\\n<li>\\n<p>CMS垃圾收集器</p>\\n</li>\\n<li>\\n<p>G1垃圾收集器</p>\\n</li>\\n</ul>\\n<h4 id=\"1-serial-串行收集器\">1. Serial 串行收集器</h4>\\n<p>Serial串行收集器是最基本，历史最悠久的垃圾收集器，是一个单线程的收集器。</p>\\n<p>它的 <strong>“单线程”</strong> 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程（ <strong>&quot;Stop The World&quot;</strong> ），直到它收集结束。</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323153920.png\" alt=\"image-20210323153919053\" /></p>\\n<p><strong>Serial串行收集器</strong></p>\\n<ul>\\n<li>\\n<p>优点：简单高效</p>\\n</li>\\n<li>\\n<p>缺点：工作时需要暂停其他的工作线程</p>\\n</li>\\n</ul>\\n<h3 id=\"2-parnew-并行收集器\">2. ParNew 并行收集器</h3>\\n<p>ParNew 收集器其实就是 Serial 收集器的多线程版本，除了使用多线程进行垃圾收集外，其余行为（控制参数、收集算法、回收策略等等）和 Serial 收集器完全一样。</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323154324.png\" alt=\"image-20210323154322431\" /></p>\\n<p>相较于串行收集器，并行收集器的优点就是，多个线程进行垃圾收集</p>\\n<h3 id=\"3-cms-收集器\">3. CMS 收集器</h3>\\n<p><strong>CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。它非常符合在注重用户体验的应用上使用。</strong></p>\\n<p><strong>CMS（Concurrent Mark Sweep）收集器是 HotSpot 虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作。</strong></p>\\n<p>从名字中的<strong>Mark Sweep</strong>这两个词可以看出，CMS 收集器是一种 <strong>“标记-清除”算法</strong>实现的，它的运作过程相比于前面几种垃圾收集器来说更加复杂一些。整个过程分为四个步骤：</p>\\n<ul>\\n<li><strong>初始标记：</strong> 暂停所有的其他线程，并记录下直接与 root 相连的对象，速度很快 ；</li>\\n<li><strong>并发标记：</strong> 同时开启 GC 和用户线程，用一个闭包结构去记录可达对象。但在这个阶段结束，这个闭包结构并不能保证包含当前所有的可达对象。因为用户线程可能会不断的更新引用域，所以 GC 线程无法保证可达性分析的实时性。所以这个算法里会跟踪记录这些发生引用更新的地方。</li>\\n<li><strong>重新标记：</strong> 重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短</li>\\n<li><strong>并发清除：</strong> 开启用户线程，同时 GC 线程开始对未标记的区域做清扫。</li>\\n</ul>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323154639.png\" alt=\"image-20210323154637667\" /></p>\\n<h3 id=\"4g1-收集器\">4.G1 收集器</h3>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210323154801.png\" alt=\"image-20210323154800284\" /></p>\\n","blog_summary":"Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配。同时，Java 自动内存管理最核心的功能是堆内存中对象的分配与回收。","blog_status":0,"blog_visits":92,"create_time":"2021-03-23 15:53","update_time":"2021-04-23 20:45","is_top":0,"blog_like":1,"comment_cnt":0,"cateGory":[{"category_id":2,"category_name":"学习"},{"category_id":5,"category_name":"后端"}],"tags":[{"tag_id":3,"tag_name":"Java"},{"tag_id":27,"tag_name":"JVM"},{"tag_id":24,"tag_name":"学习"}]}},"status":200,"statusText":"","headers":{"content-length":"6108","content-type":"application/json"},"config":{"url":"/blog/26","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}',
            '25': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":25,"blog_title":"JVM学习之双亲委派模型","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619705773753_e911c3c5-e7e1-4167-a431-127578bc021b.jpg","blog_content":"<h1 id=\"jvm类加载器\">JVM类加载器</h1>\\n<p>一个非数组类的加载过程是可控性最强的阶段，在这个阶段，我们还可以去完成自定义类加载器去控制字节流的获取方式（重写一个类加载器的<code>loadClass()</code>）。数组类型不通过类加器创建，由Java虚拟机直接创建。</p>\\n<p>所有的类需要通过类加载器加载，作用是将.class文件到内存上。</p>\\n<h2 id=\"java的三个类加载器\">Java的三个类加载器</h2>\\n<p>JVM内置了三个重要的类加器，分别是：</p>\\n<ul>\\n<li>BootstrapClassLoader（启动类加载器）：最顶层的类加载器，由c++实现，主要加载 <code>%JAVA_HOME%/lib</code>目录下的jar包和类或者被 <code>-Xbootclasspath</code>参数指定的路径中的所有类。</li>\\n<li>ExtensionClassLoader（扩展类加载器）：主要加载<code>%JAVA_HOME%/lib/etc</code>目录下的jar包和类，或被<code>java.etc.dirs</code>系统变量所指定的路径下的jar包。</li>\\n<li>AppClassLoader（应用程序类加载器）：负责加载当前Java应用下的<code>classpath</code>下的所有jar包和类。</li>\\n</ul>\\n<p>除了<code>BootstarpClassLoader</code>类加载器外，其他类加载由Java实现且继承<code>java.lang.ClassLoader</code>。</p>\\n<h2 id=\"类加载器工作模型双亲委派模型\">类加载器工作模型——双亲委派模型</h2>\\n<p>每个类都有对应自己的类加载器。系统中的类加载器在工作时默认使用双亲委派模型。</p>\\n<p>在进行类加载的时候，系统会首先判断，这个类是否被加载过，如果被类加载器加载过则直接返回，否则进行加载。加载的时候，首先会把类加载请求委托到其父类加载器的<code>loadClass()</code>处理，所以，所有的类加载请求都是先委托给最顶层的<code>BootstrapClassLoader</code>加载，当父类加载器无法加载时，才会交给自己加载。当父加载器为null时，会交给<code>BootstrapClassLoader</code>处理。</p>\\n<img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210320195153.png\" alt=\"image-20210320195146330\" style=\"zoom:70%;\" />\\n<pre><code class=\"language-java\">package com.datealive.jvm;\\n\\n/**\\n * @ClassName: classloaderDemo\\n * @Description: TODO\\n * @author: datealive\\n * @date: 2021/3/20  19:53\\n */\\npublic class classloaderDemo {\\n\\n    public static void main(String[] args) {\\n\\n        System.out.println(classloaderDemo.class.getClassLoader());  //AppClassLoader\\n        System.out.println(classloaderDemo.class.getClassLoader().getParent()); //ExtensionClassLoader\\n        System.out.println(classloaderDemo.class.getClassLoader().getParent().getParent()); //这里的null不代表ExtClassLoader没有父类加载器，而是BootstrapClassLoader\\n    }\\n}\\n</code></pre>\\n<p>输出：</p>\\n<pre><code class=\"language-java\">sun.misc.Launcher$AppClassLoader@b4aac2\\nsun.misc.Launcher$ExtClassLoader@17327b6\\nnull\\n</code></pre>\\n<h3 id=\"双亲委托模型实现源码分析\">双亲委托模型实现源码分析</h3>\\n<p>查看<code>java.lang,ClassLoader</code>的<code>loadClass</code>方法可以清晰了解双亲委托模型的实现原理。</p>\\n<p>在分析源码前，先看看类加载过程：</p>\\n<p>类加载过程：加载-&gt;连接-&gt;初始化。</p>\\n<p>加载：JVM将class文件字节码加载到内存，并将这些静态数据装换成运行时方法区的类型数据，在运行时堆生成一个代表整个类的<code>java.lang.Class</code>对象，作为方法区类数据的访问入口。</p>\\n<p>连接又包括：验证，准备，解析（可选）。</p>\\n<ul>\\n<li>验证：检查加载的class文件的正确性和安全性</li>\\n<li>准备：为类变量（static变量）分配存储空间并设置类变量初始值（类变量类型的默认值），类变量随类型信息存放在方法区中，生命周期长，使用不当容易造成内存泄露。</li>\\n<li>解析：JVM将常量池内的符号引用转换为直接引用</li>\\n</ul>\\n<p>初始化：执行类变量复制和静态代码块</p>\\n<p><img src=\"https://gitee.com/zhangrenfeng/images/raw/master/img/20210320202230.png\" alt=\"image-20210320202230868\" /></p>\\n<pre><code class=\"language-java\">/**\\n  -name ：表示全限定类名\\n  -resolve：表示是否解析，为true是解析该类\\n  当resolve为true时，保证类已经装载了，而且已经连接了。当resolve为false的时候，仅仅是去装载这个类，而不关系是否连接了，所以此时可能被连接了，也可能不被连接。\\n*/\\nprotected Class&lt;?&gt; loadClass(String name, boolean resolve)\\n        throws ClassNotFoundException\\n    {\\n        synchronized (getClassLoadingLock(name)) {\\n            // 首先，检查请求的类是否已经被加载过\\n            Class&lt;?&gt; c = findLoadedClass(name);\\n            //如果类没有被加载过\\n            if (c == null) {\\n                long t0 = System.nanoTime();\\n                try {\\n                    //父类加载器不为空，调用父类加载器的loadClass()方法处理，注意这里的resolve为false，说明不去关注该类是否已经被连接\\n                    if (parent != null) {\\n                        c = parent.loadClass(name, false);\\n                    } else {\\n                     //如果父类加载器为null   这里是使用BootstrapClassLoader启动类加载器加载\\n                        c = findBootstrapClassOrNull(name);\\n                    }\\n                } catch (ClassNotFoundException e) {\\n                    //抛出异常说明父类加载器无法完成加载请求\\n                }\\n\\t\\t\\t\\t//这里再次检验请求的类是否未被加载过且父类无法完成加载请求，则自己尝试加载\\n                if (c == null) {\\n                    long t1 = System.nanoTime();\\n                    //自己尝试加载\\n                    c = findClass(name);\\n\\n                    // this is the defining class loader; record the stats\\n                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);\\n                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);\\n                    sun.misc.PerfCounter.getFindClasses().increment();\\n                }\\n            }\\n            //如果resolve为true，则进行连接操作\\n            if (resolve) {\\n                resolveClass(c);\\n            }\\n            return c;\\n        }\\n    }\\n\\n</code></pre>\\n<h3 id=\"双亲委托模型的优点\">双亲委托模型的优点</h3>\\n<ul>\\n<li>避免了类的重复加载（JVM区分不同类的方式不仅仅根据类名，还根据类加载的不同），保证了Java程序的稳定运行</li>\\n<li>保证了Java核心的API不被篡改，因为如果没有双亲委托模型，每个类加载器加载自己时就会出现问题，比如编写一个<code>java.lang.String</code>类的话，程序运行时，系统就会出现多个不同的String类</li>\\n</ul>\\n<h3 id=\"双亲委托模型的缺点\">双亲委托模型的缺点</h3>\\n<ul>\\n<li>\\n<p>检查类是否被加载的委派过程是单向的，顶层的<code>ClassLoader</code>无法访问底层的<code>ClassLoader</code>所加载的类。</p>\\n</li>\\n<li>\\n<p>...</p>\\n</li>\\n</ul>\\n<h3 id=\"如何自定义类加载器\">如何自定义类加载器？</h3>\\n<p>自定义类加载器，需要继承<code>ClassLoader</code>。如果不想打破双亲委派模型，就重写<code>ClassLoader</code>类中的<code>findClass()</code>方法即可，无法被父类加载器加载的类最终会被整个方法所加载，但是，如果想打破双亲委派模型则需要重写<code>loadClass()</code>方法或者使用线程上下文类加载器。</p>\\n<p>关于双亲委托模型的破坏，我查阅了一些资料，发现要学习的还挺多的，比如SPI机制破坏双亲委派模型，典型案例就是JDBC的驱动包等等。</p>\\n<p>这里附上查阅到的一些关于双亲委托模型破坏的资料，方便后期继续学习。</p>\\n<ul>\\n<li>https://www.freesion.com/article/65101372836/</li>\\n<li>https://www.pianshen.com/article/28171263783/</li>\\n<li>https://www.jianshu.com/p/09f73af48a98</li>\\n</ul>\\n","blog_summary":"JVM类加载器和双亲委派模型详解，个人学习分享。","blog_status":0,"blog_visits":24,"create_time":"2021-03-20 21:11","update_time":"2021-04-29 22:16","is_top":0,"blog_like":2,"comment_cnt":0,"cateGory":[{"category_id":2,"category_name":"学习"},{"category_id":5,"category_name":"后端"}],"tags":[{"tag_id":3,"tag_name":"Java"},{"tag_id":24,"tag_name":"学习"},{"tag_id":25,"tag_name":"后端"},{"tag_id":27,"tag_name":"JVM"}]}},"status":200,"statusText":"","headers":{"content-length":"3724","content-type":"application/json"},"config":{"url":"/blog/25","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}',
            '8': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":8,"blog_title":"Linux基础命令笔记","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182092389_d006a21a-69b9-4ac5-a79b-970bfa3e04aa.jpg","blog_content":"<h3 id=\"记录下上一年学的linux基础命令笔记\">记录下上一年学的Linux基础命令笔记~</h3>\\n<pre><code class=\"language-Linux\">根目录 / 是linux中所有文件的存放顶点\\n\\ncrtl shift +\\n\\n基础操作命令\\n1.列出目录中的文件列表\\nls 目录路径\\n2.切换工作目录\\ncd 目录路径\\n3.查看当前工作目录\\npwd\\n4.创建文件\\ntouch 文件路径\\n5.创建目录\\nmkdir 目录路径\\n6.复制文件\\ncp 原文件路径 目的路径\\n7.复制目录\\ncp -r 原目录路径 目的路径\\n8.移动文件或者目录\\nmv 原路径 目的路径\\n9.删除（不建议使用，因为没有回收站机制）\\nrm 文件路径\\nrm -rf 目录路径\\n\\n用户管理\\n用户的配置文件\\n/etc/passwd\\n该文件以行为单位，每行一个用户\\n以冒号隔开为一列，每列代表该用户的不同配置\\n第一列：用户名\\n第二列：原本用于存放用户的密码，目前停用，目前用户的密码存放于文件/etc/shadow\\n第三列：用户的编号，UID\\n第四列：组编号，GID\\n第五列：描述，用于描述用户的作用，可以不写\\n第六列：用户的家目录，该目录用于存放用户在使用中产生的各类数据，以及用户的个人文件\\n第七列：用户的shell\\nshell：外壳，一种命令解释器，用于将人类识别的高级语言翻译为机器识别的机械语言，或将机器的机械语言翻译为高级语言的一种程序。shell经常被人们称作人与计算机之前的翻译官\\n常见shell\\n/bin/sh 最原始的shell\\n/bin/bash 目前使用范围最广的shell\\n/sbin/nologin 用于设置用户禁止交互式登录系统使用的shell\\n\\n用户组的配置文件\\n/etc/group\\n第一列：用户组名称\\n第二列：曾经用于存放用户组的密码\\n第三列：用户组的编号\\n第四列：组内用户列表，该组为该列表中用户的副组。\\n\\n用户组的分类：\\n与用户的关系不同可以分为2类：\\n1.主组，又名首选组，主要的组\\n是用户配置文件/etc/passwd中GID所记录的组\\n主组的作用：是用户在系统中执行任务的组身份代表。\\n2.副组，又名从属组，额外的组\\n用户除了其首选组以外，还可以加入若干个用户组里，这些额外加入的用户组，被成为用户的副组\\n副组的作用：用于变更用户在系统中的访问范围\\n\\n当系统创建一个用户的时候，系统会自动创建一个与用户同名、同id的用户组，并将该组设置为用户的首选组\\n\\n创建用户\\nuseradd 用户名\\n创建用户并设置其用户编号\\nuseradd -u 编号 用户名\\n创建用户并设置其主组\\nuseradd -g 组名或者GID 用户名\\n创建用户并设置其副组\\nuseradd -G 组名,组名,组名 用户名\\n创建用户并禁止其交互式登录\\nuseradd -s /sbin/nologin 用户名\\n\\n修改用户设定\\nusermod 选项 用户名\\n修改用户编号\\nusermod -u 编号 用户名\\n修改用户主组\\nusermod -g 组名或者GID 用户名\\n替换用户的副组\\nusermod -G 组名,组名,组名 用户名\\n增加用户的副组\\nusermod -G 组名,组名,组名 -a 用户名\\n禁止用户交互式登录\\nusermod -s /sbin/nologin 用户名\\n\\n删除用户并删除其家目录\\nuserdel -r 用户名\\n\\n创建用户组\\ngroupadd 组名\\n创建用户组并指定其组编号\\ngroupadd -g 编号 组名\\n\\n修改用户组的编号\\ngroupmod -g 编号 组名\\n\\n删除用户组\\ngroupdel 组名\\n注意：被删除的组，不能作为任何一个用户的主组使用\\n\\n修改用户的密码\\npasswd 用户名\\n\\n切换当前工作用户\\nsu - 用户名\\nexit 退出用户\\n\\n查看用户的相关信息\\nid 用户名\\n\\n以管理员身份执行命令（提权）\\nsudo 命令\\n如何让用户能够使用sudo命令？\\n将该用户加入到用户组wheel中即可（副组加入）\\n\\n查看网络配置的命令\\nifconfig\\n\\n测试网络联通性的\\nping 域名或者ip地址(关闭时ctrl c)\\nping -c 次数 域名或者ip地址\\n\\n网络追踪\\ntracepath 域名或者ip地址\\ntraceroute -n -I -q 5 域名或者ip地址\\n\\n方法一：\\n配置网卡的命令\\nnmcli\\n用于查看网卡配置文件的状态\\nnmcli connection show\\n用于查看网卡的硬件状态\\nnmcli device status\\n用于修改网卡的ip地址及其网关\\nnmcli connection modify eno16777736 ipv4.addresses \'192.168.191.50/24 192.168.191.2\'\\n配置网卡使用的dns地址\\nnmcli connection modify eno16777736 ipv4.dns 114.114.114.114\\n用于修改网卡的地址获取模式为手动(静态地址)\\nnmcli connection modify eno16777736 ipv4.method manual\\n停用配置文件\\nnmcli connection down eno16777736\\n启动配置文件\\nnmcli connection up eno16777736\\n\\n方法二：\\n直接修改网卡的配置文件\\n/etc/sysconfig/network-scripts/ifcfg-eno16777736\\n需要修改行：\\nHWADDR=值来自于命令ifconfig\\nBOOTPROTO=&quot;none&quot;\\nONBOOT=&quot;yes&quot;\\nIPADDR0=192.168.191.150\\nPREFIX0=24\\nGATEWAY0=192.168.191.2\\nDNS1=114.114.114.114\\n\\n保存配置后，重启网络(针对于克隆的主机)\\nsystemctl restart network\\n\\n硬盘管理三步操作\\n第一步：分区\\n查看当前系统的分区状态\\nlsblk\\n分区的命令\\nfdisk 硬盘的路径（例如：/dev/sdb）\\np 显示当前分区状态\\nn 分区(p主分区 e扩展分区 l逻辑分区)\\nd 删除分区\\nw 保存并退出\\nq 不保存退出\\n\\n专业英语单词：partition 分区\\nsector 扇区\\n扇区：是硬盘容量的最基本单位，默认情况下1扇区=512字节\\n\\n第二步：制作文件系统(格式化)\\n查看分区的格式化状态\\nblkid\\n制作文件系统\\nmkfs.文件系统类型(tab补齐） 分区路径\\n常见类型\\nxfs RHEL7操作系统的默认文件系统\\next4 多数linux的默认文件系统\\nvfat 兼容性较好的文件系统，一般用于U盘\\nntfs windows的默认文件系统\\n\\n第三步：挂载(指定驱动器号)\\n查看当前系统的硬盘挂载状态\\ndf -Th\\n挂载的操作\\n第一步：创建一个挂载点（目录）\\nmkdir 目录路径 （例如 /mnt/parta）\\n第二步：进行挂载的操作\\n编辑文件/etc/fstab，在尾部追加如下内容\\n示例：\\n/dev/sdb1 /mnt/parta ext4 defaults 0 0\\n第三步：生效\\nmount -a\\n\\n软件安装\\n\\n版本 软件包扩展名 安装的命令 自动解决软件依赖性关系\\nredhat .rpm rpm yum（RHEL8:dnf）\\ndebian .deb dpkg apt-get\\n\\nrpm命令的使用\\n1.安装软件\\nrpm -ivh 软件包路径\\n2.查看一个软件是否安装\\nrpm -qa 软件名\\n3.卸载软件\\nrpm -e 软件名\\n\\nyum命令的使用\\nyum软件仓库的配置(又名yum源)\\n仓库的作用就是告诉yum命令应该在系统的哪一个目录下进行软件包的搜索工作\\n仓库配置文件的路径为：\\n/etc/yum.repos.d/任意命名.repo\\n[abc]\\n//repo id用于区别不同的仓库\\nname=redhat linux 7 iso\\n//repo name用于描述仓库的来历等等，可以不写\\nenabled=1\\n//是否启动该仓库\\nbaseurl=file:///run/media/root/RHEL-7.0\\\\ Server.x86_64\\n//仓库的访问路径\\ngpgcheck=0\\n//是否开启软件校验功能\\n\\nyum命令的常用指令\\n1.查看当前软件仓库的状态\\nyum repolist\\n2.安装软件\\nyum install 软件名\\n3.查看当前软件仓库中的软件列表\\nyum list all | grep 模糊软件名\\n4.查看软件是否安装成功\\nyum list installed | grep 模糊软件名\\n5.卸载软件\\nyum remove 软件名\\n\\n部署服务之前需要检查的内容\\n1.网络连接\\n2.防火墙\\nsystemctl status firewalld\\n关闭防火墙\\nsystemctl stop firewalld\\nsystemctl disable firewalld\\n3.SELinux\\ngetenforce\\n关闭selinux\\nsetenforce 0\\n编辑文件vim /etc/selinux/config 将其中SELINUX=的值修改为permissive或者disabled\\n\\n部署ftp服务器\\n第一步：安装服务器程序\\nyum install vsftpd\\n\\n第二步：启动ftp服务器\\nsystemctl enable vsftpd\\nsystemctl start vsftpd\\n\\n第三步：根据需求调整ftp的配置文件\\nftp的主配置文件路径为/etc/vsftpd/vsftpd.conf\\n\\nanonymous_enable=YES 启动匿名用户\\nlocal_enable=YES 启动本地用户\\n\\n对于匿名用户而言，客户端访问时所对应的目录为/var/ftp\\n对于普通用户而言，客户端访问时所对应的目录为该用户的家目录\\n\\n权限管理部分知识在教材的P56\\n\\n其他常用选项：\\nwrite_enable=YES 允许写操作\\nanon_upload_enable=YES 允许匿名用户上传文件\\nanon_mkdir_write_enable=YES 允许匿名用户创建目录\\nftp_username=ftp 用于设置匿名用户在系统中的映射用户\\nanon_root=/var/ftp 用于设置匿名用户访问的默认目录\\nuserlist_enable=yes 启动用户限制机制\\nuserlist_deny=yes 值为yes，userlist为黑名单\\n值为no，userlist为白名单\\nuserlist_file=/etc/vsftpd/user_list 用户列表\\n\\n查看配置文件的帮助手册的命令\\nman vsftpd.conf\\n\\n注意：修改过ftp的配置文件，需要重启服务才能生效\\nsystemctl restart vsftpd\\n\\nA=b\\n\\n$A\\nb\\n\\nfor循环语句的语法结构\\n\\nlinux原版的for循环\\nfor 字符串(大写) in 字符串1 字符串2 字符串3 ...... ; do\\n命令1\\n命令2\\n命令3\\n......\\ndone\\n\\n类似c语言结构的for循环\\nfor ((i=起始数字;i&lt;=峰值;i++)) ; do\\n命令1\\n命令2\\n。。。。。。\\ndone\\n\\n命令嵌套\\n$(命令)\\n\\nif条件语句的语法结构\\n结构1：\\nif [ 条件 ] ; then\\n命令1\\n命令2\\n........\\nfi\\n\\n结构2：\\nif [ 条件 ] ; then\\n命令1\\n命令2\\n........\\nelse\\n命令1\\n命令2\\n........\\nfi\\n\\n结构3：\\nif [ 条件1 ] ; then\\n命令1\\n命令2\\n........\\nelif [ 条件2 ] ; then\\n命令1\\n命令2\\n........\\nelif [ 条件3 ] ; then\\n命令1\\n命令2\\n........\\nelse\\n命令1\\n命令2\\n........\\nfi\\n\\n参数赋值法\\n$1 表示运行脚本时跟随在脚本后面的第一个参数\\n\\nif的常用条件设置\\n第一种：等值判断\\n[ 字符串 = 字符串 ]\\n第二种：数字判断\\n[ 数字 符号 数字 ]\\n符号：-eq 等于 -ge 大于等于 -gt 大于 -le 小于等于 -lt 小于\\n例如：[ 1 -ge 100 ]\\n第三种：文件判断\\n[ 符号 文件或者目录路径 ]\\n符号：\\n-f 存在且是文件\\n-d 存在且是目录\\n-e 存在\\n-s 存在且大小为0(用于判断一个文件是否为空)\\n-r 当前用户是否允许读取该文件\\n-w 当前用户是否允许写入该文件\\n-x 当前用户是否允许运行该文件\\n第四种：逻辑判断\\n[ 条件1 ]&amp;&amp;[ 条件2 ] 与判断\\n[ 条件1 ]||[ 条件2 ] 或判断\\n\\n[ 601 -ge $(date) ]&amp;&amp;[ 1200 -le $(date) ]\\n\\ncase判断语句\\n语法结构如下：\\n\\ncase 字符串 in\\n字符串1)\\n命令1\\n命令2\\n;;\\n字符串2)\\n命令1\\n命令2\\n;;\\n字符串3)\\n命令1\\n命令2\\n;;\\n......\\n*)\\n命令1\\n命令2\\n;;\\nesac\\n</code></pre>\\n","blog_summary":"记录下上一年学的Linux基础命令笔记~","blog_status":0,"blog_visits":51,"create_time":"2021-02-13 11:42","update_time":"2021-04-23 20:48","is_top":0,"blog_like":1,"comment_cnt":0,"cateGory":[{"category_id":2,"category_name":"学习"}],"tags":[{"tag_id":10,"tag_name":"Linux"}]}},"status":200,"statusText":"","headers":{"content-length":"4832","content-type":"application/json"},"config":{"url":"/blog/8","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}',
            '7': '{"data":{"code":200,"msg":"请求成功","data":{"blog_id":7,"blog_title":"Python3爬虫实战【点触验证码】 — 模拟登陆bilibili","blog_cover_image":"https://gitee.com/zhangrenfeng/images/raw/master/blogImg/1619182023003_6b56e72b-bf37-4cc8-9e71-0db302e4c61f.jpg","blog_content":"<h2 id=\"python3爬虫实战点触验证码--模拟登陆bilibili\">Python3爬虫实战【点触验证码】 — 模拟登陆bilibili</h2>\\n<blockquote>\\n<p>爬虫时间：2020-08-30 请求链接：https://passport.bilibili.com/login 实现目标：模拟登陆哔哩哔哩\\n涉及知识：点触验证码的攻克、自动化测试工具 Selenium 的使用，超级鹰打码平台的使用\\n完整代码：https://github.com/dateolive/python-/tree/master/bilibili\\n学习过程中的爬虫GitHub库：https://github.com/dateolive/python-</p>\\n</blockquote>\\n<p><strong>爬虫思路如下：</strong></p>\\n<ul>\\n<li>利用自动化爬虫工具 Selenium 模拟点击输入等操作来进行登录</li>\\n<li>分析页面，获取点触验证码的点触图片，通过将图片发送给超级鹰打码平台识别后获取坐标信息</li>\\n<li>根据超级鹰返回的数据，模拟坐标的点选，即可实现登录</li>\\n</ul>\\n<p><strong>一.准备工作</strong></p>\\n<p>在开始之前，需要先注册一个超级鹰账号并申请一个软件ID，注册页面链接为：https://www.chaojiying.com/user/reg/，注册完成后需要在后台添加一个软件ID，进行充值获得积分，一般充一块钱就可以了。</p>\\n<p><strong>二.爬虫构建</strong></p>\\n<p>1.首先我可以到官方网站下载对应的 Python API，链接为：https://www.chaojiying.com/api-14.html ，我这里使用了崔庆才大大修改后的超级鹰api</p>\\n<p>代码如下：</p>\\n<pre><code class=\"language-python\">import requests\\nfrom hashlib import md5\\n\\n\\nclass Chaojiying(object):\\n\\n    def __init__(self, username, password, soft_id):\\n        self.username = username\\n        self.password = md5(password.encode(\'utf-8\')).hexdigest()\\n        self.soft_id = soft_id\\n        self.base_params = {\\n            \'user\': self.username,\\n            \'pass2\': self.password,\\n            \'softid\': self.soft_id,\\n        }\\n        self.headers = {\\n            \'Connection\': \'Keep-Alive\',\\n            \'User-Agent\': \'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)\',\\n        }\\n\\n    def post_pic(self, im, codetype):\\n        &quot;&quot;&quot;\\n        im: 图片字节\\n        codetype: 题目类型 参考 http://www.chaojiying.com/price.html\\n        &quot;&quot;&quot;\\n        params = {\\n            \'codetype\': codetype,\\n        }\\n        params.update(self.base_params)\\n        files = {\'userfile\': (\'ccc.jpg\', im)}\\n        r = requests.post(\'http://upload.chaojiying.net/Upload/Processing.php\', data=params, files=files,\\n                          headers=self.headers)\\n        return r.json()\\n\\n    def report_error(self, im_id):\\n        &quot;&quot;&quot;\\n        im_id:报错题目的图片ID\\n        &quot;&quot;&quot;\\n        params = {\\n            \'id\': im_id,\\n        }\\n        params.update(self.base_params)\\n        r = requests.post(\'http://upload.chaojiying.net/Upload/ReportError.php\', data=params, headers=self.headers)\\n        return r.json()\\n</code></pre>\\n<p><strong>2.初始化函数</strong></p>\\n<pre><code class=\"language-python\">def __init__(self):\\n    self.url = \'https://passport.bilibili.com/login\'\\n    self.browser = webdriver.Chrome()\\n    self.browser.maximize_window()\\n    self.wait = WebDriverWait(self.browser, 20)\\n    self.username = USERNAME\\n    self.password = PASSWORD\\n</code></pre>\\n<blockquote>\\n<p>这里定义了发起请求的url、用户名、密码等全局变量，实例化 Chrome 浏览器、设置浏览器分辨率最大化、用户名、密码、同时也设置等待超时</p>\\n</blockquote>\\n<p><strong>3.登录函数</strong></p>\\n<pre><code class=\"language-python\">def open(self):\\n    &quot;&quot;&quot;\\n    打开网页输入用户名密码\\n    :return: None\\n    &quot;&quot;&quot;\\n    self.browser.get(self.url)\\n    user = self.wait.until(EC.presence_of_element_located((By.ID, \'login-username\')))\\n    password = self.wait.until(EC.presence_of_element_located((By.ID, \'login-passwd\')))\\n    user.send_keys(self.username)\\n    password.send_keys(self.password)\\n    login_btn = self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, \'a.btn.btn-login\')))\\n    # 随机暂停几秒\\n    time.sleep(random.random() * 3)\\n    # 点击登陆按钮\\n    login_btn.click()\\n</code></pre>\\n<blockquote>\\n<p>等待账号输入框和密码输入框对应的 ID 节点加载出来，然后获取对应节点，其中账号输入框 id=&quot;login-username&quot;，密码输框\\nid=&quot;login-passwd&quot;，通过调用 send_keys() 方法输入账号和密码，接着获取登录按钮 class=&quot;btn\\nbtn-login&quot;，设置暂停时间，最后调用 click() 方法实现登录按钮的点击。</p>\\n</blockquote>\\n<p><strong>4.点触验证码的处理</strong></p>\\n<pre><code class=\"language-python\">def pick_code(self):\\n    time.sleep(3)\\n    pick_img_label = self.browser.find_element_by_css_selector(\'img.geetest_item_img\')  # 获取点触图片标签\\n    src = pick_img_label.get_attribute(\'src\')  # 获取点触图片链接\\n    img_content = requests.get(src).content  # 获取图片二进制内容\\n    f = BytesIO()\\n    f.write(img_content)\\n    img0 = Image.open(f)  # 将图片以文件的形式打开，主要是为了获取图片的大小\\n    scale = [pick_img_label.size[\'width\'] / img0.size[0],\\n             pick_img_label.size[\'height\'] / img0.size[1]]  # 获取图片与浏览器该标签大小的比例\\n    cjy = Chaojiying(CHAOJIYING_USERNAME, CHAOJIYING_PASSWORD, CHAOJIYING_SOFT_ID)\\n    result = cjy.post_pic(img_content, \'9005\')  # 发送图片并获取结果\\n    if result[\'err_no\'] == 0:  # 对结果进行分析\\n        position = result[\'pic_str\'].split(\'|\')  # position = [\'110,234\',\'145,247\',\'25,185\']\\n        position = [[int(j) for j in i.split(\',\')] for i in position]  # position = [[110,234],[145,247],[25,185]]\\n        for items in position:  # 模拟点击\\n            ActionChains(self.browser).move_to_element_with_offset(pick_img_label, items[0] * scale[0],\\n                                                                   items[1] * scale[1]).click().perform()\\n            time.sleep(1)\\n        time.sleep(2)\\n        # 点击登录\\n        certern_btn = self.browser.find_element_by_css_selector(\'div.geetest_commit_tip\')\\n        certern_btn.click()\\n    return cjy, result\\n</code></pre>\\n<blockquote>\\n<p>通过css选择器，找到点触图片的标签，获取图标的src链接，对图片处理发送给超级鹰后台并获取结果，对结果进行分析，模拟坐标的点选，即可实现登录。</p>\\n</blockquote>\\n<p><strong>三.爬虫完整代码</strong></p>\\n<pre><code class=\"language-python\">import random\\nimport time\\nfrom io import BytesIO\\nimport requests\\nfrom PIL import Image\\nfrom selenium import webdriver\\nfrom selenium.webdriver import ActionChains\\nfrom selenium.webdriver.common.by import By\\nfrom selenium.webdriver.support.ui import WebDriverWait\\nfrom selenium.webdriver.support import expected_conditions as EC\\nfrom chaojiying import Chaojiying\\n\\nUSERNAME = \'b站账号\'\\nPASSWORD = \'密码\'\\n\\nCHAOJIYING_USERNAME = \'超级鹰账号\'\\nCHAOJIYING_PASSWORD = \'密码\'\\nCHAOJIYING_SOFT_ID = 907581\\nCHAOJIYING_KIND = 9004\\n\\n\\nclass CrackTouClick():\\n    def __init__(self):\\n        self.url = \'https://passport.bilibili.com/login\'\\n        self.browser = webdriver.Chrome()\\n        self.browser.maximize_window()\\n        self.wait = WebDriverWait(self.browser, 20)\\n        self.username = USERNAME\\n        self.password = PASSWORD\\n\\n\\n    def open(self):\\n        &quot;&quot;&quot;\\n        打开网页输入用户名密码\\n        :return: None\\n        &quot;&quot;&quot;\\n        self.browser.get(self.url)\\n        user = self.wait.until(EC.presence_of_element_located((By.ID, \'login-username\')))\\n        password = self.wait.until(EC.presence_of_element_located((By.ID, \'login-passwd\')))\\n        user.send_keys(self.username)\\n        password.send_keys(self.password)\\n        login_btn = self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, \'a.btn.btn-login\')))\\n        # 随机暂停几秒\\n        time.sleep(random.random() * 3)\\n        # 点击登陆按钮\\n        login_btn.click()\\n\\n    def pick_code(self):\\n        time.sleep(3)\\n        pick_img_label = self.browser.find_element_by_css_selector(\'img.geetest_item_img\')  # 获取点触图片标签\\n        src = pick_img_label.get_attribute(\'src\')  # 获取点触图片链接\\n        img_content = requests.get(src).content  # 获取图片二进制内容\\n        f = BytesIO()\\n        f.write(img_content)\\n        img0 = Image.open(f)  # 将图片以文件的形式打开，主要是为了获取图片的大小\\n        scale = [pick_img_label.size[\'width\'] / img0.size[0],\\n                 pick_img_label.size[\'height\'] / img0.size[1]]  # 获取图片与浏览器该标签大小的比例\\n        cjy = Chaojiying(CHAOJIYING_USERNAME, CHAOJIYING_PASSWORD, CHAOJIYING_SOFT_ID)\\n        result = cjy.post_pic(img_content, \'9005\')  # 发送图片并获取结果\\n        if result[\'err_no\'] == 0:  # 对结果进行分析\\n            position = result[\'pic_str\'].split(\'|\')  # position = [\'110,234\',\'145,247\',\'25,185\']\\n            position = [[int(j) for j in i.split(\',\')] for i in position]  # position = [[110,234],[145,247],[25,185]]\\n            for items in position:  # 模拟点击\\n                ActionChains(self.browser).move_to_element_with_offset(pick_img_label, items[0] * scale[0],\\n                                                                       items[1] * scale[1]).click().perform()\\n                time.sleep(1)\\n            time.sleep(2)\\n            # 点击登录\\n            certern_btn = self.browser.find_element_by_css_selector(\'div.geetest_commit_tip\')\\n            certern_btn.click()\\n        return cjy, result\\n\\n    def crack(self):\\n        &quot;&quot;&quot;\\n        破解入口\\n        :return: None\\n        &quot;&quot;&quot;\\n        self.open()\\n        self.pick_code()\\nif __name__ == \'__main__\':\\n    crack = CrackTouClick()\\n    crack.crack()\\n</code></pre>\\n<p><strong>四.GIF登录图</strong>\\n<img src=\"https://img-blog.csdnimg.cn/20200830211319915.gif#pic_center\" alt=\"在这里插入图片描述\" /></p>\\n","blog_summary":"实现目标：模拟登陆哔哩哔哩，涉及知识：点触验证码的攻克、自动化测试工具 Selenium 的使用，超级鹰打码平台的使用","blog_status":0,"blog_visits":42,"create_time":"2021-02-13 11:35","update_time":"2021-04-23 20:47","is_top":0,"blog_like":2,"comment_cnt":0,"cateGory":[{"category_id":2,"category_name":"学习"}],"tags":[{"tag_id":9,"tag_name":"爬虫"},{"tag_id":8,"tag_name":"python"}]}},"status":200,"statusText":"","headers":{"content-length":"3732","content-type":"application/json"},"config":{"url":"/blog/7","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"https://api.datealive.top","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}'
        },
        categorys: {
            "4": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 2,
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
                        "totalPage": 2,
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
            },
            "5": {
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
            "2": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 1,
                        "currentPage": 1,
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
            "7": {
                "1": {
                    "data": {
                        "code": 200,
                        "totalPage": 1,
                        "currentPage": 1,
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
            "1": {
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
            "3": {
                "1": {
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
        }
    }
}
