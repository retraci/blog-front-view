<template>
  <div id="app">
    <div class="rg-table-box">
      <layout-header :site-info="siteInfo"></layout-header>
      <layout-body :site-info="siteInfo" :minHeight="minHeight"></layout-body>
    </div>
  </div>
</template>

<script>
import LayoutBody from "@/components/layout/layout-body";
import LayoutHeader from "@/components/layout/layout-header";

export default {
  name: "app",
  data() {
    return {
      minHeight: 0,
      navBarFixed: false,
      badges: [],
      siteInfo: {
        blogName: '',
        backgroundImage: '',
        loginUrl: '',
        headAvatar: '',
        headInfo: ''
      },
      musicId: 60198,
      newBlogs: [],
      hitokoto: ''
    };
  },
  components: {LayoutHeader, LayoutBody},
  methods: {
    watchScroll() {
      var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 50) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    getSiteSetting() {
      const _this = this;
      this.$axios
          .get("/siteInfo")
          .then(res => {
            // console.log(res.data.data.siteInfo)
            this.siteInfo = res.data.data.siteInfo
            this.badges = res.data.data.badges
            this.musicId = res.data.data.introduction.musicId
            this.$store.dispatch('saveSiteInfo', this.siteInfo)
            this.$store.dispatch('saveIntroduction', res.data.data.introduction)
            document.title = this.$route.meta.title + this.siteInfo.webTitleSuffix
            //document.title = this.siteInfo.webTitleSuffix
            // console.log(this.siteInfo)
            //console.log(this.musicId)
          });

    },
    getnewBlog() {
      const _this = this;
      this.$axios
          .get("/blogList", {
            params: {
              currentPage: 1
            }
          })
          .then(res => {
            _this.newBlogs = res.data.data;
          });
    }
  },
  created() {
    this.getSiteSetting();
    this.getnewBlog();
  },
  mounted() {
    let that = this;
    that.minHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", that.watchScroll);
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight;
    };
  },
  watch: {
    '$route': function (to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "microsoft yahei";
  background-color: var(--bg-color);
}

</style>

