<!--<template>-->
<!--  <div id="layout-header" :class="{'fixed':fixed,'hidden':hidden}">-->
<!--    <el-menu-->
<!--        :default-active="activeIndex"-->
<!--        class="d-flex nav-menu"-->
<!--        mode="horizontal"-->
<!--        :router="true"-->
<!--        type="flex"-->
<!--    >-->
<!--      <el-menu-item index="/home" class="mr-auto hidden-sm-and-down" style="color:#409EFF;font-size:25px;">-->
<!--        {{ siteInfo.blogName }}-->
<!--      </el-menu-item>-->
<!--      <el-menu-item>-->
<!--        <header-search/>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="/home">首页</el-menu-item>-->
<!--      <el-submenu index class="hidden-sm-and-down">-->
<!--        <template slot="title">分类</template>-->
<!--        <el-menu-item-->
<!--            v-for="category in categorys"-->
<!--            :key="category.category_id"-->
<!--        >-->
<!--          <router-link-->
<!--              :to="{name: 'list', params: {type:'category',id: category.category_id}}"-->
<!--              tag="span"-->
<!--          >{{ category.category_name }}-->
<!--          </router-link>-->
<!--        </el-menu-item>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="/archive">归档</el-menu-item>-->
<!--    </el-menu>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import HeaderSearch from '@/components/header-search'-->

<!--export default {-->
<!--  name: "layout-header",-->
<!--  props: {-->
<!--    siteInfo: {-->
<!--      type: Object-->
<!--    },-->
<!--  },-->
<!--  components: {HeaderSearch},-->
<!--  data() {-->
<!--    return {-->
<!--      activeIndex: "/home",-->
<!--      categorys: [],-->
<!--      restaurants: [],-->
<!--      state: "",-->
<!--      timeout: null,-->

<!--      fixed: false,-->
<!--      hidden: false,-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    window.addEventListener('scroll', this.watchScroll)-->
<!--    this.getCategoryIdAndTitle()-->
<!--  },-->
<!--  beforeDestroy() {-->
<!--    window.removeEventListener("scroll", this.watchScroll)-->
<!--  },-->
<!--  methods: {-->
<!--    getCategoryIdAndTitle() {-->
<!--      const _this = this;-->
<!--      this.$axios-->
<!--          .get("/getAllCategory")-->
<!--          .then(res => {-->
<!--            //  console.log(res.data.data);-->
<!--            _this.categorys = res.data.data;-->
<!--            //console.log(res.data.data);-->
<!--          });-->
<!--    },-->
<!--    watchScroll() {-->
<!--      // 获取距离顶部的距离-->
<!--      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop-->
<!--      if (scrollTop === 0) {-->
<!--        this.fixed = false;-->
<!--      } else if (scrollTop >= this.lastScrollTop) {-->
<!--        this.fixed = false;-->
<!--        this.hidden = true;-->
<!--      } else {-->
<!--        this.fixed = true-->
<!--        this.hidden = false-->
<!--      }-->
<!--      this.lastScrollTop = scrollTop-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--#layout-header {-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  z-index: 9;-->
<!--  width: 100%;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  transition: .3s all ease;-->
<!--  -webkit-transition: .3s all ease;-->
<!--  -moz-transition: .3s all linear;-->
<!--  -o-transition: .3s all ease;-->
<!--  -ms-transition: .3s all ease;-->

<!--  background: #FFF;-->
<!--  /*margin-bottom:30px;*/-->
<!--  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);-->
<!--  position: fixed;-->
<!--  left: 0;-->
<!--  top: 0;-->
<!--  right: 0;-->

<!--  &.hidden {-->
<!--    top: -100px;-->
<!--  }-->

<!--  &.fixed {-->
<!--    background-color: #FFFFFF;-->
<!--    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);-->
<!--  }-->
<!--}-->
<!--</style>-->
