<template>
  <div class="home" id="homeArticle">
    <el-row type="flex" justify="space-around">
      <el-col :span="screenWidth>750?16:24">
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
                    <span style="cursor: pointer;">{{blog.blog_title}}</span>
                  </router-link>
                </keep-alive>
              </div>
            </div>
            <div class="recent-post-center">
              <div class="content">{{blog.blog_summary}}</div>
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
                  <span>{{blog.create_time}}</span>
                </div>

                <div class="article-meta-wrap-item">
                  <i class="el-icon-time"></i>
                  <span>更新于</span>
                  <span>{{blog.update_time}}</span>
                </div>

                <div class="article-meta-wrap-item">
                  <i class="el-icon-folder-opened"></i>
                  <span href class="article-meta__categories">{{blog.cateGory.category_name}}</span>
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
export default {
  name: "Home",
  components: {},
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5,
      screenWidth: document.body.clientWidth
    };
  },
  methods: {
    page(currentPage) {
      const _this = this;
      this.$axios
        .get("/blogList", {
          params: {
            currentPage: currentPage
          }
        })
        .then(res => {
          _this.blogs = res.data.data;
          // console.log(res.data.data)
          _this.currentPage = res.data.currentPage;
          _this.total = res.data.totalPage;
        });
       this.scrollToTop()
    }
  },
  mounted() {
    const that = this
    that.page(1);
     window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
    }
  },
  watch:{
    screenWidth(val) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
               // console.log(that.screenWidth)
                that.timer = false
            },400)
        }
    }
}
};
</script>

<style lang="less">
:root {
  --top-color: 255, 109, 109;
  --content-bg: #f6f6f6;
  --title-font-color: #696969;
  --text-bg-hover: #49b1f5;

  --card-box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
  --card-hover-box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15);

  /*---------------------*/

  --global-font-size: 14px;
  --global-bg: #fff;
  --font-color: #4c4948;
  --hr-border: #a4d8fa;
  --hr-before-color: #80c8f8;
  --search-bg: #f6f8fa;
  --search-input-color: #4c4948;
  --search-result-title: #4c4948;
  --preloader-bg: #37474f;
  --preloader-color: #fff;
  --tab-border-color: #f0f0f0;
  --tab-botton-bg: #f0f0f0;
  --tab-botton-color: #1f2d3d;
  --tab-button-hover-bg: #dcdcdc;
  --tab-button-active-bg: #fff;
  --card-bg: #fff;
  --sidebar-bg: #f6f8fa;
  --btn-hover-color: #ff7242;
  --btn-color: #fff;
  --btn-bg: #49b1f5;
  --light-grey: #eee;
  --white: #fff;
  --text-highlight-color: #1f2d3d;
  --blockquote-color: #6a737d;
  --blockquote-bg: rgba(73, 177, 245, 0.1);
  --reward-pop: #f5f5f5;
  --toc-link-color: #666261;
}

// 响应式布局
//@media screen and (max-width: 768px) {
//  #recent-posts > .recent-post-item {
//    border-radius: 12px 12px 8px 8px;
//  }
//  #recent-posts .recent-post-item {
//    height: auto !important;
//  }
//  #recent-posts .recent-post-item {
//    -webkit-box-ordinal-group: 2 !important;
//    -moz-box-ordinal-group: 2 !important;
//    -o-box-ordinal-group: 2 !important;
//
//    -ms-flex-order: 2 !important;
//    -webkit-order: 2 !important;
//    order: 2 !important;
//    padding: 1rem 1rem 1.5rem;
//    width: 100%;
//  }
//  #recent-posts .recent-post-item .recent-post-header .article-title {
//    font-size: 1.43em;
//  }
//  #recent-posts .recent-post-item .recent-post-center .content {
//    height: auto;
//  }
//}

#recent-posts {
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

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

#top-context {
  color: rgb(var(--top-color));
}

.pagination {
  margin-top: 30px;
  background-color: #f9f9f9;
}

</style>
