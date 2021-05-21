<template>
  <div class="archive">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16">
        <el-row class="archive-title">文章归档</el-row>
        <el-row class="block animate">
          <div>
            <el-timeline>
              <el-timeline-item
                  v-for="archive in archives"
                  v-bind:key="archive.blog_id"
                  size="large"
                  type="primary"
                  class="timeItem"
              >
                <el-tag class="date-tag" type="success"> {{ archive.blog_id }}</el-tag>
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
export default {
  name: "archive",
  components: {},
  data() {
    return {
      archives: {},
      currentPage: 1,
      pageSize: 999,
      total: 0,
      blogcount: 0
    };
  },
  methods: {
    getArchive(currentPage) {
      const _this = this;
      this.$axios
          .get("/blogArchive", {
            params: {
              currentPage: currentPage
            }
          })
          .then(res => {
            // console.log(res.data.data)
            _this.archives = res.data.data;
            _this.currentPage = res.data.currentPage;
            _this.total = res.data.totalPage;
          });
    },
    getBlogCnt() {
      const _this = this;
      this.$axios.get("/blogsCount").then(res => {
        // console.log(res.data.data)
        _this.blogcount = res.data.data;
      });
    }
  },
  mounted() {
    this.getArchive(1)
    this.getBlogCnt()
  }
};
</script>

<style lang="less">

.date-tag {
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
