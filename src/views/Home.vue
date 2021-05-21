<template>
  <div id="home-page" :class="animateShow ? 'animate' : ''">

    <el-row type="flex" justify="space-around">
      <el-col :span="16">
        <!--通知栏-->
        <el-card id="notify" v-if="showNotify">
          <span v-if="searchWords">搜索结果: "{{ searchWords }}" 相关文章</span>
          <span v-else-if="category">分类: "{{ cateName }}" 相关文章</span>
        </el-card>

        <el-row
            class="recent-posts"
            id="recent-posts"
            v-for="(blog, index) in blogs"
            v-bind:key="index"
        >
          <div class="recent-post-item">
            <div class="recent-post-header">
              <div class="article-title">
                <keep-alive>
                  <router-link
                      :to="{name: 'article', params: {blogId: blog.blog_id}}"
                      tag="span"
                      class="article-title"
                  >
                    <span style="cursor: pointer;">{{ blog.blog_title }}</span>
                  </router-link>
                </keep-alive>
              </div>
            </div>
            <div class="recent-post-center">
              <div class="content">{{ blog.blog_summary }}</div>
            </div>
            <div class="recent-post-footer">
              <div class="article-meta-wrap">

                <div class="article-meta-wrap-item" v-if="blog.is_top == '1'">
                  <i class="el-icon-upload2"></i>
                  <span id="top-context">置顶</span>
                </div>

                <div class="article-meta-wrap-item">
                  <i class="el-icon-date"></i>
                  <span>发表于</span>
                  <span>{{ blog.create_time }}</span>
                </div>

                <div class="article-meta-wrap-item">
                  <i class="el-icon-time"></i>
                  <span>更新于</span>
                  <span>{{ blog.update_time }}</span>
                </div>

                <div class="article-meta-wrap-item">
                  <i class="el-icon-folder-opened"></i>
                  <span href class="article-meta__categories">{{ blog.cateGory.category_name }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-row>
        <div class="pagination">
          <el-pagination
              @current-change="page"
              :current-page="currentPage"
              :page-count="total"
              layout="prev, pager, next"
              background
              hide-on-single-page
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Banner from "@/components/banner"
import {fetchBlogList, fetchBlogListByCategory, fetchBlogListByWords} from "@/api";
import Element from "element-ui";

export default {
  name: "Home",
  components: {
    Banner,
  },
  props: {
    siteInfo: {
      type: Object
    }
  },
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5,
      // screenWidth: document.body.clientWidth,

      animateShow: true,
      cateName: '',
    }
  },
  computed: {
    searchWords() {
      return this.$route.params.words
    },
    category() {
      return this.$route.params.cateId
    },
    showNotify() {
      return this.category || this.searchWords
    },
    notice() {
      return this.$store.getters.notice
    }
  },
  methods: {
    showAnimation() {
      this.animateShow = true
    },
    getBlogList(data) {
      const that = this

      console.log(data)

      if (data.params.cateId) {
        fetchBlogListByCategory(data).then(res => {
          console.log(res.data)

          that.blogs = res.data.data
          that.cateName = res.data.category_name
          that.currentPage = res.data.currentPage
          that.total = res.data.totalPage

          this.showAnimation()
        })
      } else if (data.params.word) {
        fetchBlogListByWords(data).then(res => {
          that.blogs = res.data.data
          // console.log(res.data.data)
          that.currentPage = res.data.currentPage
          that.total = res.data.totalPage

          this.showAnimation()
        }).catch(err => {
          Element.Message({
            message: err,
            type: 'error',
            duration: 2 * 1000
          })
        })
      } else {
        fetchBlogList(data).then(res => {
          that.blogs = res.data.data
          // console.log(res.data.data)
          that.currentPage = res.data.currentPage
          that.total = res.data.totalPage

          this.showAnimation()
        })
      }
    },
    page(currentPage) {
      let data = {
        params: {
          currentPage: currentPage,
          word: this.searchWords,
          cateId: this.category
        }
      }
      this.getBlogList(data)
      this.scrollToTop()
    }
  },
  mounted() {
    const that = this
    that.page(1)
  },
  watch: {
    $route(e) {
      console.log(e)
      this.animateShow = false

      let data = {
        params: {
          currentPage: 1,
          word: this.searchWords,
          cateId: this.category
        }
      }
      this.getBlogList(data)
    },
  }
}
</script>

<style lang="less">
#home-page {
  /*=============通知=============*/

  #notify {
    margin-bottom: 50px;
    text-align: center;
  }

  /*=============多个卡片=============*/

  & #recent-posts {
    &:not(:first-child) {
      margin-top: 1.5rem;
    }
    z-index: 2;

    /*=============卡片=============*/

    & > .recent-post-item {
      border-radius: 12px 8px 8px 12px;
      background: var(--card-bg);
      -webkit-box-shadow: var(--card-box-shadow);
      box-shadow: var(--card-box-shadow);
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      -ms-transition: all 0.3s;
      transition: all 0.3s;

      &:hover {
        -webkit-box-shadow: var(--card-hover-box-shadow);
        box-shadow: var(--card-hover-box-shadow);
      }

      /*=============卡片头=============*/

      & > .recent-post-header {
        border-left: 5px solid #4d4d4d;
        padding: 30px 0 15px 25px;
        padding-left: 7.6923%;

        & > .article-title {
          color: var(--title-font-color);
          margin-left: 0;
          font-weight: 300;
          line-height: 35px;
          margin-bottom: 20px;
          font-size: 26px;
          -webkit-transition: all 0.2s ease-in-out;
          -moz-transition: all 0.2s ease-in-out;
          -o-transition: all 0.2s ease-in-out;
          -ms-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          -webkit-line-clamp: 2;

          &:hover {
            color: var(--text-bg-hover);
          }
        }
      }

      /*=============卡片中=============*/

      & > .recent-post-center {
        line-height: 1.8em;
        padding-right: 7.6923%;
        padding-left: 7.6923%;

        & > .content {
          border-left: 3.5px solid #ccc;
          padding: 15px 20px;
          background: var(--content-bg);
        }
      }

      /*=============卡片尾=============*/

      & > .recent-post-footer {
        padding-top: 15px;
        margin: 30px 7.6923% 0;
        min-height: 72px;
        border-top: 1px solid #ddd;

        & > .article-meta-wrap {
          margin-top: 10px;
          padding-bottom: 20px;

          & > .article-meta-wrap-item {
            font-size: 13px;
            display: inline-block;
            padding-right: 15px;
            padding-left: 5px;

            i {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }

            span {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

  /*=============置顶=============*/

  & #top-context {
    color: rgb(var(--top-color));
  }

  /*=============分页=============*/

  & .pagination {
    margin-top: 30px;
    background-color: #f9f9f9;
  }
}

</style>
