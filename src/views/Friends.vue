<!--<template>-->
<!--  <el-row :gutter="20">-->
<!--    <el-col :span="screenWidth>750?20:24" :offset="screenWidth>750?2:0">-->
<!--      <el-card class="friends">-->
<!--        <div align="center">-->
<!--          <span class="effect">🎉友链</span>-->
<!--        </div>-->
<!--        <div class="friends-group">-->
<!--          <h2 class="friend-header">技术大佬</h2>-->
<!--          <div class="friend-content">-->
<!--            <a-->
<!--              class="friend-card"-->
<!--              v-for="friend in friends"-->
<!--              :key="friend.link_id"-->
<!--              :href="friend.link_url"-->
<!--            >-->
<!--              <div class="friend-left">-->
<!--                <img class="avatar" :src="friend.avatar" />-->
<!--              </div>-->
<!--              <div class="friend-right">-->
<!--                <p class="friend-name">{{friend.link_name}}</p>-->
<!--                <div class="friend-tags-wrapper">-->
<!--                  <p class="tags">{{friend.link_info}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="container">-->
<!--          <h1 class="fwarning" align="center">友人入帐须知</h1>-->
<!--          <ul class="list">-->
<!--            <div-->
<!--              class="f-margin-left-mini f-margin-tb-tiny"-->
<!--              style="font-size: large;font-weight: bold"-->
<!--            >网站要求</div>-->
<!--            <br />-->
<!--            <li-->
<!--              class="f-margin-left-big f-margin-tb-tiny"-->
<!--              style="font-size: medium"-->
<!--            >无色情内容，无政治敏感内容，网站要能长期正常访问</li>-->
<!--            <li-->
<!--              class="f-margin-left-big f-margin-tb-tiny"-->
<!--              style="font-size: medium"-->
<!--            >十篇以上个人原创文章，两个月内有新文章更新</li>-->
<!--            <li class="f-margin-left-big f-margin-tb-tiny" style="font-size: medium">原创博客、技术博客优先</li>-->
<!--            <li-->
<!--              class="f-margin-left-big f-margin-tb-tiny"-->
<!--              style="font-size: medium"-->
<!--            >需要交换友链，先把本站添加到你的网站中，然后根据下面的格式，给我发email或在留言板给我留言~</li>-->
<!--            <br />-->
<!--            <div-->
<!--              class="f-margin-left-mini f-margin-tb-tiny"-->
<!--              style="font-size: large;font-weight: bold"-->
<!--            >申请格式</div>-->
<!--            <br />-->
<!--            <li class="f-margin-left-big f-margin-tb-tiny" style="font-size: medium">博客标题：{{siteInfo.blogName}}</li>-->
<!--            <li-->
<!--              class="f-margin-left-big f-margin-tb-tiny"-->
<!--              style="font-size: medium"-->
<!--            >博客地址：本博客地址</li>-->
<!--            <li class="f-margin-left-big f-margin-tb-tiny" style="font-size: medium">头像地址：{{siteInfo.headAvatar}}</li>-->
<!--            <li class="f-margin-left-big f-margin-tb-tiny" style="font-size: medium">站点描述：{{siteInfo.headInfo}}</li>-->
<!--            <div-->
<!--              class="f-margin-left-mini f-margin-tb-tiny"-->
<!--              style="font-size: large;font-weight: bold"-->
<!--            >开始申请</div>-->
<!--            <br />-->
<!--            <li class="f-margin-left-big f-margin-tb-tiny" style="font-size: medium">方式一：在下方留言申请</li>-->
<!--            <li class="f-margin-left-big f-margin-tb-tiny" style="font-size: medium">方式二：首页侧边栏点击交换友链</li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <commentList :objectData="{...propsData}" />-->
<!--      </el-card>-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--</template>-->
<!--<script>-->
<!--import { mapState } from "vuex";-->
<!--export default {-->
<!--  name: "friends",-->
<!--      computed: {-->
<!--    ...mapState(["siteInfo"])-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      propsData: {-->
<!--        blog_id: 0,-->
<!--        page: 1-->
<!--      },-->
<!--      friends: {},-->
<!--      screenWidth: document.body.clientWidth-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    getFriends() {-->
<!--      const _this = this;-->
<!--      this.$axios.get("/allFriends").then(res => {-->
<!--        //  console.log(res.data.data);-->
<!--        _this.friends = res.data.data;-->
<!--      });-->
<!--    }-->
<!--  },-->
<!--    mounted() {-->
<!--    const that = this-->
<!--    that.getFriends();-->
<!--     window.onresize = () => {-->
<!--        return (() => {-->
<!--            window.screenWidth = document.body.clientWidth-->
<!--            that.screenWidth = window.screenWidth-->
<!--        })()-->
<!--    }-->
<!--  },-->
<!--  watch:{-->
<!--    screenWidth(val){-->
<!--        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器-->
<!--        if(!this.timer){-->
<!--            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth-->
<!--            this.screenWidth = val-->
<!--            this.timer = true-->
<!--            let that = this-->
<!--            setTimeout(function(){-->
<!--                // 打印screenWidth变化的值-->
<!--               // console.log(that.screenWidth)-->
<!--                that.timer = false-->
<!--            },400)-->
<!--        }-->
<!--    }-->
<!--}-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.el-row {-->
<!--  margin-bottom: 20px;-->
<!--}-->
<!--.el-col {-->
<!--  border-radius: 4px;-->
<!--}-->
<!--.container {-->
<!--  display: block;-->
<!--  max-width: 100% !important;-->
<!--}-->
<!--.f-margin-left-big {-->
<!--  margin-left: 8em !important;-->
<!--}-->
<!--.fwarning {-->
<!--  margin-top: 100px;-->
<!--}-->
<!--.f-margin-tb-tiny {-->
<!--  margin-top: 0.3em !important;-->
<!--  margin-bottom: 0.3em !important;-->
<!--}-->
<!--.effect {-->
<!--  display: inline;-->
<!--  padding: 10px 20px;-->
<!--  border-radius: 20px;-->
<!--  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;-->
<!--  font-size: 2em;-->
<!--  letter-spacing: 0.2em;-->
<!--  color: #fff;-->
<!--  font-weight: 700;-->
<!--  background: linear-gradient(to bottom, #49b1f5 0, #49b1f5 100%);-->
<!--}-->
<!--.friends .friends-group .friend-content {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--  margin: -8px;-->
<!--  border-radius: 8px;-->
<!--  align-items: flex-start;-->
<!--  line-height: 1.3;-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card {-->
<!--  display: flex;-->
<!--  border-radius: 4px;-->
<!--  padding: 8px 0px;-->
<!--  margin: calc(68px) 8px 8px;-->
<!--  color: #fff;-->
<!--  background: #49b1f5;-->
<!--  box-shadow: 0 2px 20px #49b1f5;-->
<!--  place-content: flex-start;-->
<!--  flex-direction: column;-->
<!--  width: calc(25% - 16px);-->
<!--}-->
<!--@media screen and (max-width: 1024px) {-->
<!--  .friends {-->
<!--    margin-top: 50px;-->
<!--  }-->
<!--  .friends .friends-group .friend-content .friend-card {-->
<!--    width: calc(25% - 16px);-->
<!--  }-->
<!--}-->
<!--@media screen and (max-width: 768px) {-->
<!--  .friends .friends-group .friend-content .friend-card {-->
<!--    width: calc(33.3333% - 16px);-->
<!--  }-->
<!--}-->
<!--@media screen and (max-width: 500px) {-->
<!--  .friends .friends-group .friend-content .friend-card {-->
<!--    width: calc(50% - 16px);-->
<!--  }-->
<!--}-->
<!--.friends-->
<!--  .friends-group-->
<!--  .friend-content-->
<!--  .friend-card:hover-->
<!--  .friend-left-->
<!--  .avatar {-->
<!--  transform: scale(1.2) rotate(12deg);-->
<!--  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,-->
<!--    rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card .friend-left {-->
<!--  display: flex;-->
<!--  align-self: center;-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card .friend-left .avatar {-->
<!--  width: 64px;-->
<!--  height: 64px;-->
<!--  transition: all 0.28s ease 0s;-->
<!--  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;-->
<!--  margin: calc(-52px) 8px 4px;-->
<!--  border-radius: 100%;-->
<!--  border: 2px solid rgb(255, 255, 255);-->
<!--  background: rgb(255, 255, 255);-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card .friend-right {-->
<!--  margin: 4px 8px;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  text-align: center;-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card .friend-right p {-->
<!--  text-align: center;-->
<!--}-->
<!--.friends-->
<!--  .friends-group-->
<!--  .friend-content-->
<!--  .friend-card-->
<!--  .friend-right-->
<!--  .friend-tags-wrapper {-->
<!--  display: -webkit-box;-->
<!--  transition: all 0.28s ease 0s;-->
<!--  margin-left: -2px;-->
<!--  word-break: break-all;-->
<!--  -webkit-line-clamp: 1;-->
<!--  -webkit-box-orient: vertical;-->
<!--  overflow: hidden;-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card .friend-right p {-->
<!--  margin: 0px;-->
<!--}-->
<!--.friends-->
<!--  .friends-group-->
<!--  .friend-content-->
<!--  .friend-card-->
<!--  .friend-right-->
<!--  p.friend-name {-->
<!--  font-size: 0.8125rem;-->
<!--  padding-top: 4px;-->
<!--  font-weight: 700;-->
<!--}-->
<!--.friends .friends-group .friend-content .friend-card .friend-right p.tags {-->
<!--  font-size: 0.78125rem;-->
<!--  display: inline;-->
<!--  background: 0px 0px;-->
<!--  overflow-wrap: break-word;-->
<!--  padding-right: 4px;-->
<!--}-->
<!--</style>-->
