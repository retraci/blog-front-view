<template>
  <div id="layout-body">
    <banner :site-info="siteInfo" v-if="true"></banner>

    <el-row type="flex" justify="center" id="content">
      <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}">
        <router-view :site-info="siteInfo"></router-view>
      </el-col>
    </el-row>

    <el-backtop style="box-shadow: none;background: none;">
      <img src="@/assets/totop.png" style="width: 40px;height: 40px;">
    </el-backtop>
  </div>
</template>

<script>
import Banner from "@/components/banner";

export default {
  name: "layout-body",
  components: {
    Banner,
  },
  props: {
    siteInfo: {
      type: Object
    },
    minHeight: Number
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>

<style scoped>
#layout-body {
  background-color: #f9f9f9;
}

#content {
  padding: 100px 0;
}
</style>
