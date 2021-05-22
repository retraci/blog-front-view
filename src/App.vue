<template>
  <div id="app">
    <layout-header :site-info="siteInfo"></layout-header>
    <layout-body :site-info="siteInfo" :minHeight="minHeight"></layout-body>
  </div>
</template>

<script>
import LayoutBody from "@/components/layout/layout-body"
import LayoutHeader from "@/components/layout/layout-header"
import {fetchBlogList, fetchSiteInfo} from "@/api"

export default {
  name: "app",
  data() {
    return {
      minHeight: 0,
      badges: [],
      siteInfo: {
        blogName: '',
        backgroundImage: '',
        loginUrl: '',
        headAvatar: '',
        headInfo: ''
      },
      newBlogs: [],
      hitokoto: '',

      particlesShow: false,
    };
  },
  components: {
    LayoutHeader,
    LayoutBody,
  },
  methods: {
    getSiteSetting() {
      const that = this
      fetchSiteInfo().then(res => {
        that.siteInfo = res.data.data.siteInfo
        that.badges = res.data.data.badges
        this.$store.dispatch('saveSiteInfo', that.siteInfo)
        this.$store.dispatch('saveIntroduction', res.data.data.introduction)
        document.title = this.$route.meta.title + that.siteInfo.webTitleSuffix
        //document.title = this.siteInfo.webTitleSuffix
        // console.log(this.siteInfo)
        //console.log(this.musicId)
      })

    },
    getNewBlog() {
      const that = this
      let data = {
        params: {
          currentPage: 1
        }
      }
      fetchBlogList(data).then(res => {
        that.newBlogs = res.data.data
      })
    }
  },
  created() {
    this.getSiteSetting()
    this.getNewBlog()
  },
  mounted() {
    const that = this

    that.minHeight = document.documentElement.clientHeight
    window.addEventListener("scroll", that.watchScroll)
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight
    }

    // this.$nextTick(() => {
    //   let body = document.body
    //   console.log(body)
    //   const cn = new CanvasNest(body, that.config)
    // })
  },
  watch: {
    '$route': function (to, from) {
      if (to.name === 'article' || to.name === 'archive') {
        this.$store.dispatch('setIsHome', false)
      } else {
        this.$store.dispatch('setIsHome', true)
      }

      if (to.name === 'archive') {
        this.$store.dispatch('setIsNotArchive', false)
      } else {
        this.$store.dispatch('setIsNotArchive', true)
      }

      if (from.name !== 'article') document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "microsoft yahei";
  background-color: var(--bg-color);
}

</style>

