import axios from '@/plugins/axios'
import {PageData} from '@/plugins/ax'

/*==============app==================*/
export function fetchSiteInfo(data) {
    // return axios.get("/siteInfo", data)

    return new Promise((resolve => {
        setTimeout(() => {
            return resolve(PageData().siteInfo)
        }, 100)
    }))
}

/*================layout-header================*/
export function fetchAllCategory(data) {
    // return axios.get("/getAllCategory", data)

    return new Promise((resolve => {
        setTimeout(() => {
            return resolve(PageData().allCategory)
        }, 100)
    }))
}

/*======================Archive======================*/
export function fetchBlogArchive(data) {
    return axios.get("/blogArchive", data)
}

export function fetchBlogsCount(data) {
    // return axios.get("/blogsCount", data)

    return new Promise(resolve => {
        setTimeout(() => {
            return resolve((PageData().blogsCount))
        }, 100)
    })
}

/*======================Article======================*/
export function fetchBlog(blogId) {
    // console.log(blogId)
    // return axios.get("/blog/" + blogId)

    return new Promise((resolve => {
        setTimeout(() => {
            return resolve(PageData().blogs[blogId])
        }, 100)
    }))
}

/*======================Home======================*/
export function fetchBlogList(data) {
    // return axios.get("/blogList", data)

    return new Promise((resolve => {
        setTimeout(() => {
            return resolve(PageData().homePageData[data.params.currentPage])
        }, 100)
    }))
}

export function fetchBlogListByCategory(data) {
    // return axios.get("/blogList", data)

    // console.log(PageData().allBlogs.data.data)
    return new Promise((resolve => {
        setTimeout(() => {
            return resolve(PageData().categorys[data.params.cateId][data.params.currentPage])
        }, 100)
    }))
}

export function fetchBlogListByWords(data) {
    // return axios.get("/blogList", data)

    if (data.params.word !== '123') return new Promise((resolve, reject) => {
        return reject('输入 123 试试?')
    })

    return new Promise((resolve => {
        setTimeout(() => {
            return resolve(PageData().queryByWords[data.params.word][data.params.currentPage])
        }, 100)
    }))
}
