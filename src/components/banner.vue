<template>
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
</template>

<script>

export default {
  name: "banner",
  props: {
    siteInfo: {
      type: Object
    },
  },
  data() {
  },
};
</script>

<style lang="less">
#banner {
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

</style>
