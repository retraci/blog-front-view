<template>
  <div id="article-page">
    <el-row id="artList" class="animate" type="flex" justify="space-around">
      <!--文章-->
      <el-col :span="16">
        <el-row class="art-item">
          <el-card>
            <div id="artcle-info">
              <h1 class="title">{{ blog.blog_title }}</h1>
              <hr class="horizontal-rule"/>
              <!-- 描述：文章信息 -->
              <div class="article-meta-wrap">
                <span class="article-author article-meta-wrap-item">
                  <i class="el-icon-user article-meta-wrap-item-icon"></i>
                  <span>root</span>
                </span>
                <span class="article-time article-meta-wrap-item">
                  <i class="el-icon-time article-meta-wrap-item-icon"></i>
                  <span>{{ blog.create_time }}</span>
                </span>
                <span class="article-tag article-meta-wrap-item">
                  <i class="el-icon-price-tag article-meta-wrap-item-icon"></i>
                  <span>JavaScript</span>
                </span>
              </div>
            </div>
            <!--内容-->
            <div
                id="artcle-content"
                class="typo js-toc-content m-padded-tb-small line-numbers match-braces rainbow-braces"
                v-html="blog.blog_content"
            ></div>
          </el-card>
        </el-row>
      </el-col>
      <!--目录-->
      <el-col :span="6" id="side">
        <div class="side-item is-position-fixed">
          <!--只在文章页面显示目录-->
          <Tocbot/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Tocbot from "@/components/Tocbot";
import {fetchBlog} from "@/api";

export default {
  name: "articledetail",
  data() {
    return {
      propsData: {
        blog_id: 0,
        page: 0
      },
      blog: {},
      // screenWidth: document.body.clientWidth,
      url: window.location.href
    };
  },
  components: {
    Tocbot
  },
  computed: {
    blogId() {
      return parseInt(this.$route.params.blogId)
    },
    ...mapState(['siteInfo'])
  },
  beforeRouteEnter(to, from, next) {
    //路由到博客文章页面之前，应将文章的渲染完成状态置为 false
    next(vm => {
      // 当 beforeRouteEnter 钩子执行前，组件实例尚未创建
      // vm 就是当前组件的实例，可以在 next 方法中把 vm 当做 this用
      vm.$store.dispatch('setIsBlogRenderComplete', false)
    })
  },
  beforeRouteLeave(to, from, next) {
    // 从文章页面路由到其它页面时，销毁当前组件的同时，要销毁tocbot实例
    // 否则tocbot一直在监听页面滚动事件，而文章页面的锚点已经不存在了，会报"Uncaught TypeError: Cannot read property 'className' of null"
    tocbot.destroy()
    next()
  },
  beforeRouteUpdate(to, from, next) {
    // 一般有两种情况会触发这个钩子
    // ①当前文章页面跳转到其它文章页面
    // ②点击目录跳转锚点时，路由hash值会改变，导致当前页面会重新加载，这种情况是不希望出现的
    // 在路由 beforeRouteUpdate 中判断路径是否改变
    // 如果跳转到其它页面，to.path!==from.path 就放行 next()
    // 如果是跳转锚点，path不会改变，hash会改变，to.path===from.path, to.hash!==from.path 不放行路由跳转，就能让锚点正常跳转
    if (to.path !== from.path) {
      this.getBlog(to.params.blogId)
      // console.log(to.params.blogId)
      //只要路由路径有改变，且停留在当前Blog组件内，就把文章的渲染完成状态置为 false
      this.$store.dispatch('setIsBlogRenderComplete', false)
      next()
    }
  },
  methods: {
    getBlog(blogId = this.blogId) {
      const that = this

      fetchBlog(blogId).then(res => {
        // console.log(JSON.stringify(res))

        // console.log(res.data.data)
        if (res.data.code === 200) {
          that.blog = res.data.data
          that.propsData.blog_id = res.data.data.blog_id
          that.$nextTick(() => {
            Prism.highlightAll()
            this.$store.dispatch('setIsBlogRenderComplete', true)
          });
          document.title = that.blog.blog_title + that.siteInfo.webTitleSuffix
        }

      });
      this.scrollToTop();
      // console.log(blogId);
    },
  },
  created() {
    this.getBlog();
  },
  mounted() {
  },
  watch: {}
};
</script>

<style lang="less">
#article-page {
  /*===========文章信息===========*/
  & .art-item {
    z-index: 2;
  }

  & #artcle-info {
    //padding: 20px;
    background-size: cover;
    background-repeat: no-repeat;

    & > .title {
      font-size: 23px;
      font-weight: 600;
      color: var(--typo-title-color);
      margin: 0.67em 0;

      &:before {
        content: "#";
        margin-right: 6px;
        color: #d82e16;
        font-size: 20px;
        font-weight: 600;
      }
    }

    & > .horizontal-rule {
      height: 1px;
      border: 0;
      background: var(--typo-hr-color);
      margin: 15px 0;
    }

    /*=============文章状态信息=============*/

    & > .article-meta-wrap {
      font-size: 14px;
      text-decoration: none;
      margin-bottom: 30px;
      //line-height: 30px;
      //font-weight: 600;

      & > .article-meta-wrap-item {
        margin-right: 1rem;

        & > span {
          color: var(--typo-meta-color);
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }

        .article-meta-wrap-item-icon {
          margin-right: 5px;
        }
      }
    }
  }

  /*===========content===========*/

  & #artcle-content > :nth-child(1) {
    display: none;
  }

  & #artcle-content > :nth-child(2) {
    margin-top: 0;
  }

  /*===========side===========*/

  & #side .side-item {
    margin-bottom: 30px;
    z-index: 2;
  }

  & .is-position-fixed {
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 60px;
  }

  /*===========other===========*/

  //@media screen and (min-width: 320px) and (max-width: 750px) {
  //}

  /*======================================*/

  & .article-views {
    padding-right: 10px;
  }

  & #articlebtn {
    text-align: center;
    margin-bottom: 40px;
  }

  & pre.has {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
  }

  & img.has {
    width: 100%;
  }

  & .icon {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    font-size: 18px;
    width: 40px;
    height: 40.4px;
    line-height: 42px;
    border-radius: 42px;
    color: rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin: 0 3.2px;
  }

  & #statement {
    border-left: 3px solid #f56c6c;
    padding: 20px;
    background-color: #ebeef5;
  }
}

</style>
