<template>
  <div class="archive" v-if="archivePageShow">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16">
        <el-row class="archive-title">文章归档</el-row>

        <el-row class="block animate">
          <div v-for="(item, idx) in archives">
            <el-timeline>
              <el-timeline-item
                  size="large"
                  :type="idx === 0 ? 'success' : idx === 1 ? 'warning' : 'danger'"
                  class="timeItem"
                  icon="el-icon-more"
              >
                <el-tag class="month-tag"
                        :type="idx === 0 ? 'success' : idx === 1 ? 'warning' : 'danger'">
                  {{ item.month }}
                </el-tag>
              </el-timeline-item>

              <el-timeline-item
                  v-for="archive in item.arr"
                  v-bind:key="archive.blog_id"
                  size="large"
                  :type="idx === 0 ? 'success' : idx === 1 ? 'warning' : 'danger'"
                  class="timeItem"
              >
                <el-tag class="day-tag"
                        :type="idx === 0 ? 'success' : idx === 1 ? 'warning' : 'danger'">
                  {{ archive.day }}
                </el-tag>
                <router-link
                    class="line-item"
                    :to="{name: 'article', params: {blogId: archive.blog_id}}"
                >
                  {{ archive.blog_title }}
                </router-link>
              </el-timeline-item>
            </el-timeline>
          </div>

        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {fetchBlogArchive, fetchBlogsCount} from "@/api";
import Element from "element-ui";

export default {
  name: "archive",
  components: {},
  data() {
    return {
      archives: [],
      currentPage: 1,
      pageSize: 999,
      total: 0,
      blogcount: 0,

      archivePageShow: false
    };
  },
  methods: {
    getArchive(currentPage) {
      const that = this

      currentPage = 1
      let date = {
        params: {
          currentPage: currentPage
        }
      }
      fetchBlogArchive(date).then(res => {
        that.archives = res.data.data
        that.currentPage = res.data.currentPage
        that.total = res.data.totalPage

        this.archivePageShow = true
      }).catch(err => {
        Element.Message({
          message: err,
          type: 'error',
          duration: 2 * 1000
        })
      })
    },
    getBlogCnt() {
      const that = this
      fetchBlogsCount().then(res => {
        // console.log(res.data.data)
        that.blogcount = res.data.data
      })
    }
  },
  mounted() {
    this.getArchive(1)
    this.getBlogCnt()
  }
};
</script>

<style lang="less">

.month-tag {
  margin-right: 15px;
  height: 22px;
  text-align: center;
  line-height: 22px;
}

.day-tag {
  margin-right: 15px;
  width: 35px;
  height: 22px;
  text-align: center;
  line-height: 22px;
}

#time-line-br {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 100px;
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, transparent, rgba(255, 109, 109, .75), transparent);
}

#side .item {
  margin-bottom: 30px;
}

.line-item {
  display: inline-block;
  color: #000;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
}

.line-item:hover {
  cursor: pointer;
  color: #409eff;
  transform: translateX(10px);
  transition: all 1s;
  -webkit-line-clamp: 2;
}

.count {
  margin-bottom: 20px;
  font-size: 20px;
  color: #e6a23c;
}

#artList .archive-title {
  font-size: 1.5em;
  font-weight: 400;
  color: #676767;
  padding-bottom: 15px;
  border-bottom: 1px dashed #F1F1F1;
  text-align: center;

  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0;
  margin-inline-end: 0;

  margin-bottom: 50px;
}

</style>
