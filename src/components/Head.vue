<template>
  <div id="head-component">
    <div id="layout-header" :class="{'fixed':fixed,'hidden':hidden}">
      <el-menu
          class="d-flex nav-menu"
          mode="horizontal"
          :router="true"
          type="flex"
          active-text-color="fff"
          text-color="409EFF"
      >
        <el-menu-item index="/home" class="mr-auto hidden-sm-and-down no-select"
                      style="color:var(--theme-color); font-size:25px;">
          {{ siteInfo.blogName }}
        </el-menu-item>
        <el-menu-item id="searchItem" class="no-select">
          <header-search ref="HeaderSearch"></header-search>
        </el-menu-item>
        <el-menu-item index="/home" class="no-select menu-item">首页</el-menu-item>
        <el-submenu :show-timeout="100" :hide-timeout="100" index
                    class="no-select">
          <template slot="title"><span class="menu-item">分类</span></template>
          <el-menu-item class="no-select menu-item"
                        v-for="category in categorys"
                        :key="category.category_id"
          >
            <router-link
                :to="{
              name: 'category',
              params: {cateId: category.category_id, cateName: category.category_name}}"
                tag="div"
            >{{ category.category_name }}
            </router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/archive" class="no-select menu-item">归档</el-menu-item>
      </el-menu>
    </div>
    <div id="banner" class="home-banner">
      <div
          class="banner-img"
          v-bind:style="{backgroundImage:'url(' +siteInfo.backgroundImage + ')'}"
      >
        <template>
          <!--左右倾斜-->
          <div class="slant-left"></div>
          <div class="slant-right"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import headerSearch from '@/components/header-search'

export default {
  name: "Head",
  props: {
    siteInfo: {
      type: Object
    },
  },
  components: {headerSearch},
  data() {
    return {
      activeIndex: "/home",
      categorys: [],
      restaurants: [],
      state: "",
      timeout: null,

      fixed: false,
      hidden: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.watchScroll)
    document.addEventListener('click', this.watchClick)
    this.getCategoryIdAndTitle()
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.watchScroll)
    window.removeEventListener("click", this.watchClick)
  },
  methods: {
    watchClick(e) {
      if (!e.isTrusted) return

      let element = document.querySelector('#searchItem')
      let text = document.querySelector('#searchInput')

      if (e.target === text) return
      if (element.contains(e.target)) {
        return this.$refs.HeaderSearch.showInput()
      } else {
        return this.$refs.HeaderSearch.close()
      }
    },
    getCategoryIdAndTitle() {
      const _this = this;
      this.$axios
          .get("/getAllCategory")
          .then(res => {
            //  console.log(res.data.data);
            _this.categorys = res.data.data;
            console.log(res.data.data);
          });
    },
    watchScroll() {
      // 获取距离顶部的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === 0) {
        this.fixed = false;
      } else if (scrollTop >= this.lastScrollTop) {
        this.fixed = false;
        this.hidden = true;
      } else {
        this.fixed = true
        this.hidden = false
      }
      this.lastScrollTop = scrollTop
    },
  },
};
</script>

<style lang="less">
#head-component {
  & #layout-header {
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    transition: .3s all ease;
    -webkit-transition: .3s all ease;
    -moz-transition: .3s all linear;
    -o-transition: .3s all ease;
    -ms-transition: .3s all ease;

    background: #FFF;
    /*margin-bottom:30px;*/
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    &.hidden {
      top: -100px;
    }

    &.fixed {
      background-color: #FFFFFF;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  & #banner {
    position: relative;
    width: 100%;
    height: 500px;

    .banner-img {
      width: inherit;
      height: inherit;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 0.2s linear;
      overflow: hidden;

      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }

    &.home-banner {
      height: 550px;

      .banner-img {
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        z-index: -1;
        transition: unset;

        &:hover {
          transform: unset;
          filter: unset;
        }
      }

      .slant-left {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 100px solid #f9f9f9;
        border-right: 800px solid transparent;
        left: 0;
        bottom: 0;
      }

      .slant-right {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 100px solid #f9f9f9;
        border-left: 800px solid transparent;
        right: 0;
        bottom: 0;
      }
    }
  }

  & .focusinfo {
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    text-align: center;

    img {
      width: 80px;
      height: auto;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }

    .header-info {
      width: 60%;
      font-size: 14px;
      color: #eaeadf;
      background: rgba(0, 0, 0, 0.4);
      padding: 20px 30px;
      margin: 30px auto 0 auto;
      font-family: miranafont, "Hiragino Sans GB", STXihei, "Microsoft YaHei",
      SimSun, sans-serif;
      letter-spacing: 1px;
      line-height: 30px;
    }

    .top-social {
      height: 32px;
      margin-top: 30px;
      margin-left: 10px;
      list-style: none;
      display: inline-block;
      font-family: miranafont, "Hiragino Sans GB", STXihei, "Microsoft YaHei",
      SimSun, sans-serif;

      div {
        float: left;
        margin-right: 10px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        width: 32px;

        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  & .header-tou {
    &:hover {
      transition: all 2s;
      transform: rotate(360deg);
    }
  }

  //@media (max-width: 960px) {
  //  #banner {
  //    height: 400px;
  //  }
  //}
  //@media (max-width: 800px) {
  //  #banner {
  //    display: none;
  //  }
  //}

}

//#banner {
//  position: relative;
//  width: 100%;
//  height: 500px;
//}
//#banner .banner-img {
//  width: inherit;
//  height: inherit;
//  background-position: center;
//  background-size: cover;
//  background-repeat: no-repeat;
//  transition: all 0.2s linear;
//  overflow: hidden;
//}
//#banner .banner-img:hover {
//  transform: scale(1.1, 1.1);
//  filter: contrast(130%);
//}
//#banner.home-banner {
//  height: 550px;
//}
//#banner.home-banner .banner-img {
//  background-position: center center;
//  background-repeat: no-repeat;
//  background-attachment: fixed;
//  background-size: cover;
//  z-index: -1;
//  transition: unset;
//}
//#banner.home-banner .banner-img:hover {
//  transform: unset;
//  filter: unset;
//}
//#banner.home-banner .slant-left {
//  content: "";
//  position: absolute;
//  width: 0;
//  height: 0;
//  border-bottom: 100px solid #f9f9f9;
//  border-right: 800px solid transparent;
//  left: 0;
//  bottom: 0;
//}
//#banner.home-banner .slant-right {
//  content: "";
//  position: absolute;
//  width: 0;
//  height: 0;
//  border-bottom: 100px solid #f9f9f9;
//  border-left: 800px solid transparent;
//  right: 0;
//  bottom: 0;
//}
//.focusinfo {
//  position: relative;
//  max-width: 800px;
//  padding: 0 10px;
//  top: 55%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//  -webkit-transform: translate(-50%, -50%);
//  text-align: center;
//}
//.focusinfo img {
//  width: 80px;
//  height: auto;
//  border-radius: 50%;
//  border: 3px solid rgba(255, 255, 255, 0.3);
//}
//.focusinfo .header-info {
//  width: 60%;
//  font-size: 14px;
//  color: #eaeadf;
//  background: rgba(0, 0, 0, 0.4);
//  padding: 20px 30px;
//  margin: 30px auto 0 auto;
//  font-family: miranafont, "Hiragino Sans GB", STXihei, "Microsoft YaHei",
//    SimSun, sans-serif;
//  letter-spacing: 1px;
//  line-height: 30px;
//}
//.focusinfo .top-social {
//  height: 32px;
//  margin-top: 30px;
//  margin-left: 10px;
//  list-style: none;
//  display: inline-block;
//  font-family: miranafont, "Hiragino Sans GB", STXihei, "Microsoft YaHei",
//    SimSun, sans-serif;
//}
//.focusinfo .top-social div {
//  float: left;
//  margin-right: 10px;
//  height: 32px;
//  line-height: 32px;
//  text-align: center;
//  width: 32px;
//
//}
//.focusinfo .top-social div img{
//  width: 32px;
//  height: 32px;
//}
//.header-tou:hover {
//  transition: all 2s;
//  transform: rotate(360deg);
//}

</style>
