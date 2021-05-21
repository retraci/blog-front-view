<template>
  <div id="layout-header" :class="{'fixed':fixed,'hidden':hidden}">
    <el-menu
        class="d-flex nav-menu"
        mode="horizontal"
        :router="true"
        type="flex"
        active-text-color="fff"
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
</template>

<script>
import HeaderSearch from '@/components/header-search'
import {fetchAllCategory} from "@/api";

export default {
  name: "layout-header",
  props: {
    siteInfo: {
      type: Object
    },
  },
  components: {HeaderSearch},
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
      const that = this
      fetchAllCategory().then(res => {
        //  console.log(res.data.data)
        that.categorys = res.data.data
      })
    },
    watchScroll() {
      // 获取距离顶部的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
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
}
</script>

<style lang="less">
#layout-header {
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

  background: var(--bg-color);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  &.hidden {
    top: -100px;
  }

  &.fixed {
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

</style>
