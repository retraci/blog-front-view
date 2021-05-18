<template>
  <div class="home">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="screenWidth>750?16:24">
        <el-row class="art-item">
          <el-card>
            <div id="artcle-info">
              <h1 class="text-center">
                <strong style="font-size: 40px; color: #222;">{{blog.blog_title}}</strong>
              </h1>
              <!-- 描述：文章信息 -->
              <div class="text-center timeAndView">
                <span class="article-author article-property">
                  <i class="el-icon-user article-property-icon"></i>
                  <span>root</span>
                </span>
                <span class="article-time article-property">
                  <i class="el-icon-time article-property-icon"></i>
                  <span>{{blog.create_time}}</span>
                </span>
                <span class="article-tag article-property">
                  <i class="el-icon-price-tag article-property-icon"></i>
                  <span>JavaScript</span>
                </span>
              </div>
            </div>
            <div
              id="artcle-content"
              class="typo js-toc-content m-padded-tb-small line-numbers match-braces rainbow-braces"
              v-html="blog.blog_content"
            ></div>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down" id="side">
        <div class="item">
          <Introduction />
        </div>
        <div class="item">
          <categorys />
        </div>
        <div class="item">
          <tags />
        </div>
        <div class="item">
          <FriendSider />
        </div>
        <div class="item is-position-fixed">
          <!--只在文章页面显示目录-->
							<Tocbot />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Tocbot from "@/components/Tocbot";
export default {
  name: "articledetail",
  data() {
    return {
      propsData: {
        blog_id: 0,
        page: 0
      },
      blog: {},
      screenWidth: document.body.clientWidth,
      url: window.location.href
    };
  },
  components:{
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
      const _this = this;
      this.$axios.get("/blog/" + blogId).then(res => {
        // console.log(res.data.data)
        if(res.data.code===200){
                  _this.blog = res.data.data;
        _this.propsData.blog_id = res.data.data.blog_id;
        _this.$nextTick(() => {
          Prism.highlightAll();
          this.$store.dispatch('setIsBlogRenderComplete', true)
        });
          document.title = this.blog.blog_title+this.siteInfo.webTitleSuffix
        }

      });
      this.scrollToTop();
      // console.log(blogId);
    },
    setCookie(key, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        key +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    getCookie(key) {
      if (document.cookie.length) {
        var cookies = " " + document.cookie;
        var start = cookies.indexOf(" " + key + "=");
        if (start == -1) {
          return null;
        }
        var end = cookies.indexOf(";", start);
        if (end == -1) {
          end = cookies.length;
        }
        end -= start;
        var cookie = cookies.substr(start, end);
        return unescape(
          cookie.substr(
            cookie.indexOf("=") + 1,
            cookie.length - cookie.indexOf("=") + 1
          )
        );
      } else {
        return null;
      }
    },
    LikeBlog() {
      const blogId = this.$route.params.blogId;
      const _this = this;
      if (_this.getCookie("likeblog" + blogId) == null) {
        this.$axios.post("/likeBlog/" + blogId).then(res => {
          _this.$message.success(res.data.msg);
          _this.setCookie("likeblog" + blogId, blogId, 365);
        });
      } else {
        _this.$message.warning("你已经点赞了");
      }
    }
  },
  created(){
    this.getBlog();
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          // console.log(that.screenWidth)
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>

<style>

.article-property {
  margin-right: 1rem;
  color: #888;
}

.article-property-icon {
  margin-right: 5px;
}

/*--------------*/

.is-position-fixed {
    position: -webkit-sticky!important;
    position: sticky!important;
    top: 60px;
}
a {
  color: #3399ea;
}
#side .item {
  margin-bottom: 30px;
}
#artcle-info {
  padding: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 40px;
}
.article-views {
  padding-right: 10px;
}
#artcle-info .abstract {
  color: #ffffff;
  border-left: 3px solid #f56c6c;
  padding: 10px;
  background-color: rgba(126, 129, 135, 0.3);
}

#artcle-info .timeAndView {
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
}
#articlebtn {
  text-align: center;
  margin-bottom: 40px;
}
pre.has {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
}
img.has {
  width: 100%;
}
.icon {
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
#statement {
  border-left: 3px solid #f56c6c;
  padding: 20px;
  background-color: #ebeef5;
}
@media screen and (min-width: 320px) and (max-width: 750px) {
  .art-item {
    margin-top: 40px;
    position: relative;
    width: 312px;
  }
}
</style>
