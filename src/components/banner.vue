<template>
  <div id="banner" class="home-banner">
    <div
        class="banner-img"
        v-bind:style="{backgroundImage:'url(' +siteInfo.backgroundImage + ')'}"
    >
      <template>
        <div class="focusinfo">
          <!-- 简介 -->
          <div class="header-info">
            <div class="type-animation no-select">Be hungry,be foolish.</div>
          </div>
        </div>
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
    }
  },
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
    this.showTyping()
  },
  beforeDestroy() {
  },
  methods: {
    showTyping() {
      const element = document.getElementsByClassName('type-animation')[0]
      element.innerHTML = element.textContent
          .replace(/\S/g, "<type-animation-item>$&</type-animation-item>")
          .replace(/\s/g, "<type-animation-item>&nbsp;</type-animation-item>")

      let delay = 0
      document.querySelectorAll('type-animation-item').forEach((item, idx) => {
        delay += 0.1
        if (idx === 2 || idx === 9 || idx === 12) delay += 0.2
        item.style.setProperty('--delay', `${delay}s`)
      })
    }
  },
}
</script>

<style lang="less">
#banner {
  z-index: 2;
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
    .focusinfo {
      position: relative;
      max-width: 800px;
      padding: 0 10px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      text-align: center;

      & .header-info {
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
