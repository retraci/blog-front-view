<template>
  <div class="header-search">
    <i class="iconfont el-icon-search"></i>
    <input ref="searchInput" id="searchInput" :class="{'show':show}"
           v-model="searchValue" type="text" @keyup.enter ="search"/>
  </div>
</template>

<script>
export default {
  name: "header-search",
  data() {
    return {
      searchValue: '',
      show: false
    }
  },
  methods: {
    search() {
      console.log("in->search")
      console.log(this.searchValue)
      this.$router.push({name: 'search', params: {words: this.searchValue}});
      this.close()
    },
    showInput() {
      console.log('in->show')
      this.searchValue = ''
      this.show = !this.show
      if (this.show) {
        this.$refs.searchInput && this.$refs.searchInput.focus()
      }
    },
    close() {
      console.log('in->close')
      this.$refs.searchInput && this.$refs.searchInput.blur()
      this.show = false
    }
  }
}
</script>

<style scoped lang="less">
.header-search {
  display: inline-block;
  position: relative;

  i {
    font-size: 18px;
    position: relative;
  }

  input {
    border: none;
    outline: none;
    overflow: hidden;
    background: transparent;
    height: 30px;
    width: 0;
    transition: .2s all;

    border-bottom: 1px solid #8fd0cc;

    &.show {
      width: 200px;
      margin-left: 10px;
    }

    //&:focus {
    //  border-bottom: 1px solid #8fd0cc;
    //}
  }
}
</style>
