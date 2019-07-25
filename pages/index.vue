<template>
<div id="app" class="app-wrap">
  <section class="home-wrap">
    <div class="home-img-1"></div>
    <div class="home-img-2"></div>
    <div class="home-img-3"></div>
    <div class="home-img-4"></div>
    <div class="home-img-5"></div>
    <div class="home-img-6"></div>
    <div class="home-img-7"></div>
    <!-- <div class="confirm-tips" v-if="isShowTips">
      <div class="confirm-text"></div>
      <div class="confirm-btn">
        <a class="btn-ok" @click="tipsConfirm(true)"></a>
        <a class="btn-no" @click="tipsConfirm()"></a>
      </div>
    </div> -->
    <!-- <div class="mask" v-if="isShowTips"></div> -->
  </section>
  <div class="footer-menu">
    <div class="content">
      <a href="https://mall.jd.com/index-1000187701.html" target="_blank" class="official-btn"></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  layout: 'common',
  data() {
    return {
      // isShowTips: !localStorage.getItem('_tips'),
    }
  },
  mounted() {
  },
  methods: {
    // tipsConfirm(status) {
    //   if (!!status) {
    //     this.isShowTips = false;
    //     localStorage.setItem('_tips', true);
    //   } else if (navigator.userAgent.indexOf("MSIE") > 0) {
    //     window.opener = null;
    //     window.close();
    //   } else if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {
    //     window.location.href = 'about:blank';
    //     window.close();
    //   } else {
    //     window.opener = null;
    //     window.open('', '_self', '');
    //     window.close();
    //   }
    // }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
.home-img-1 {
  height: 760px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-1.jpg) 1x,url(~assets/images/home/home-img-1@2x.jpg) 2x);
}

.home-img-2 {
  height: 850px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-2.jpg) 1x,url(~assets/images/home/home-img-2@2x.jpg) 2x);
}

.home-img-3 {
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-3.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-3.jpg) 1x,url(~assets/images/home/home-img-3@2x.jpg) 2x);
}

.home-img-4 {
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-4.jpg) 1x,url(~assets/images/home/home-img-4@2x.jpg) 2x);
}

.home-img-5 {
  height: 1400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-5.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-5.jpg) 1x,url(~assets/images/home/home-img-5@2x.jpg) 2x);
}

.home-img-6 {
  height: 723px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-6.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-6.jpg) 1x,url(~assets/images/home/home-img-6@2x.jpg) 2x);
}

.home-img-7 {
  height: 862px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/home/home-img-7.jpg);
  background-image: -webkit-image-set(url(~assets/images/home/home-img-7.jpg) 1x,url(~assets/images/home/home-img-7@2x.jpg) 2x);
}

.prohibit {
  width: 100%;
  height: 510px;
  margin: 0 auto;
  // background-image: url(~assets/images/prohibit.jpg);
  // background-image: -webkit-image-set(url(~assets/images/prohibit.jpg) 1x,url(~assets/images/prohibit@2x.jpg) 2x);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.confirm-tips {
  position: fixed;
  width: 1000px;
  height: 450px;
  background: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 35;
  .confirm-btn {
    position: absolute;
    width: 603px;
    height: 80px;
    left: 50%;
    bottom: 114px;
    transform: translateX(-50%);
    font-size: 0;
    // background-image: url(~assets/images/modal-btn.png);
    // background-image: -webkit-image-set(url(~assets/images/modal-btn.png) 1x,url(~assets/images/modal-btn@2x.png) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .btn-ok {
    width: 290px;
    height: 80px;
    display: inline-block;
  }
  .btn-no {
    width: 290px;
    height: 80px;
    display: inline-block;
    margin-left: 23px;
  }
  .confirm-text {
    position: absolute;
    width: 531px;
    height: 67px;
    left: 50%;
    bottom: 263px;
    transform: translateX(-50%);
    // background-image: url(~assets/images/modal-text@2x.png);
    // background-image: -webkit-image-set(url(~assets/images/modal-text@2x.png) 1x,url(~assets/images/modal-text@2x.png) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  background-color: rgb(0, 0, 0);
  filter: alpha(opacity=60);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 30;
}

.footer-menu {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
  z-index: 20;
  background: #fff;
  border-top: 1px solid #dfdfe2;
  .content {
    position: relative;
    width: 1220px;
    height: 140px;
    margin: 0 auto;
    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(~assets/images/home/home-footer-menu.jpg);
      background-image: -webkit-image-set(url(~assets/images/home/home-footer-menu.jpg) 1x,url(~assets/images/home/home-footer-menu@2x.jpg) 2x);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
  .official-btn {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 40px;
    display: block;
    width: 180px;
    height: 60px;
  }
}
</style>
