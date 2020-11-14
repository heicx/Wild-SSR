<template>
  <div class="product-v1-wrap">
    <ul>
      <li class="product-v1-img-2" @click="playVideo()"></li>
      <li class="product-card-container">
        <div class="product-card-items">
          <router-link class="item-1" tag='a' to='/entityshop' />
          <router-link class="item-2" tag='a' to='/praises' />
          <router-link class="item-3" tag='a' to='/stories' />
        </div>
      </li>
      <li class="product-v1-img-7">
        <h3 class="title">更多选择，众口不再难调</h3>
        <h4 class="sub-title">新增四种口味，每种都经过精心调制，不容错过</h4>
      </li>
      <li class="product-v1-img-12"></li>
      <li class="product-v1-img-13"></li>
    </ul>
    <div class="video-wrap" :class="{'active': videoShowStatus}">
      <div class="video-content">
        <video
          v-if="isCDN"
          :src="videoUrl"
          ref="videoEle"
          controls
        ></video>
        <iframe v-if="!isCDN" height='100%' width='100%' :src='videoUrl' frameborder=0></iframe>
      </div>
      <div class="btn-close" @click="closeVideo()"></div>
      <div class="video-cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'common',
  data () {
    return {
      colorBtnClass: ['red-btn', 'green-btn', 'black-btn', 'redline-btn'],
      colorId: 'carbon-black',
      isCDN: false,
      videoUrl: '',
      videos: {
        cdnUrl: 'https://static.vvild.cn/resources/media/vvild-60.mov',
        youkuUrl: 'http://player.youku.com/embed/XNDMzMTk3NzQ4OA=='
      },
      videoShowStatus: false
    }
  },
  methods: {
    playVideo () {
      // 1566878399000
      const timestamp = (new Date()).valueOf();

      if (timestamp > 1566878399000) {
        this.isCDN = true;
        this.videoUrl = this.videos.cdnUrl;
      } else {
        this.isCDN = false;
        this.videoUrl = this.videos.youkuUrl;
      }

      setTimeout(_ => {
        this.$refs.videoEle.play();
      });
      
      this.videoShowStatus = !this.videoShowStatus;
    },
    closeVideo () {
      this.videoUrl = '';
      this.videoShowStatus = !this.videoShowStatus;
    },
    changeColors (name) {
      if (name === 'black-btn') {
        this.colorId = 'carbon-black';
      } else if (name === 'redline-btn') {
        this.colorId = 'the-thin-red-line';
      } else if (name === 'red-btn') {
        this.colorId = 'bright-red';
      } else if (name === 'green-btn') {
        this.colorId = 'blackish-green';
      }
    },
  },
  mounted () {
  },
  head () {
    return {
      title: 'vvild 小野雾化电子烟 - 小野官方网站'
    }
  },
}
</script>

<style lang="scss" scoped>
.product-wrap {
  background: #fff;
}

.text-opc {
  opacity: 0;
}

.video-wrap {
  position: fixed;
  opacity: 0;
  transition: all .3s ease-out;
  z-index: -1;
  &.active {
    opacity: 1;
    z-index: 50;
  }
  .video-content {
    position: fixed;
    width: 90%;
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    z-index: 50;
  }
  .video-cover {
    background: #000;
    opacity: .6;
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 35;
  }
  .btn-close {
    position: fixed;
    top: 20px;
    right: 40px;
    width: 30px;
    height: 30px;
    z-index: 40;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~assets/images/common/close_btn@2x.png);
    background-image: -webkit-image-set(url(~assets/images/common/close_btn.png) 1x,url(~assets/images/common/close_btn@2x.png) 2x);
  }
  video {
    width: 100%;
    height: 100%;
  }
}

.product-v1-img-1 {
  position: relative;
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-1@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-1@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-1@2x.jpg) 2x);
}

.product-card-container {
  width: 100%;
  text-align: center;
  padding: 100px 0;
  .product-card-items {
    position: relative;
    display: inline-block;
    width: 1220px;
    height: 450px;
    border: 1px solid #e4e6ea;
    border-radius: 12px;
    background: #fff;
    .item-1 {
      position: absolute;
      bottom: 0;
      display: block;
      width: 406px;
      height: 450px;
      border-right: 1px solid #e4e6ea;
      border-radius: 12px 0 0 12px;
      &:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 406px;
        height: 400px;
        border-radius: 12px 0 0 12px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/product-v1/item-1.jpg);
        background-image: -webkit-image-set(url(~assets/images/product-v1/item-1.jpg) 1x,url(~assets/images/product-v1/item-1@2x.jpg) 2x);
      }
    }
    .item-2 {
      position: absolute;
      left: 407px;
      bottom: 0;
      display: block;
      width: 404px;
      height: 450px;
      border-right: 1px solid #e4e6ea;
      &:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 404px;
        height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/product-v1/item-2.jpg);
        background-image: -webkit-image-set(url(~assets/images/product-v1/item-2.jpg) 1x,url(~assets/images/product-v1/item-2@2x.jpg) 2x);
      }
    }
    .item-3 {
     position: absolute;
      left: 812px;
      bottom: 0;
      display: block;
      width: 406px;
      height: 450px;
      border-radius: 0 12px 12px 0;
      &:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 406px;
        height: 400px;
        border-radius: 0 12px 12px 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/product-v1/item-3.jpg);
        background-image: -webkit-image-set(url(~assets/images/product-v1/item-3.jpg) 1x,url(~assets/images/product-v1/item-3@2x.jpg) 2x);
      }
    }
  }
}

.product-v1-img-2 {
  position: relative;
  opacity: .98;
  transition: all .3s ease-in-out;
  cursor: pointer;
  width: 100%;
  height: 720px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-2@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-2@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-2@2x.jpg) 2x);
  &:hover {
    opacity: 1;
  }
}

.product-v1-img-3-wrap {
  position: relative;
  height: 2902px;

  .product-honor-img {
    position: absolute;
    width: 1220px;
    height: 723px;
    top: 0;
    left: 50%;
    z-index: 20;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~assets/images/product-v1/product-v1-img-3-logo@2x.png);
    background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-logo@2x.png) 1x,url(~assets/images/product-v1/product-v1-img-3-logo@2x.png) 2x);
  }

  .product-colorful {
    position: absolute;
    width: 1220px;
    height: 1279px;
    bottom: 0;
    left: 50%;
    z-index: 20;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~assets/images/product-v1/product-v1-img-3-colorful@2x.png);
    background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-colorful@2x.png) 1x,url(~assets/images/product-v1/product-v1-img-3-colorful@2x.png) 2x);
    .title-1, .title-2, .sub-title {
      text-align: center;
    }
    .title-1, .title-2 {
      font-size: 54px;
      color: #474748;
      font-weight: bolder;
      margin-top: 21%;
    }
    .title-2 {
      margin-top: 0%;
    }
    .sub-title {
      font-size: 23px;
      color: #a3a3a3;
      margin-top: 3%;
    }
  }
}

.product-v1-img-3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 2902px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0;
  transition: opacity .1s linear .35s;
  &.active {
    opacity: 1;
    transition: opacity .4s cubic-bezier(.165,.84,.44,1);
  }
  &.carbon-black {
    background-image: url(~assets/images/product-v1/product-v1-img-3-black-bg@2x.jpg);
    background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-black-bg@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-3-black-bg@2x.jpg) 2x);
    .product-colors {
      position: relative;
      width: 1220px;
      height: 900px;
      top: 25%;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(~assets/images/product-v1/product-v1-img-3-black@2x.png);
      background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-black@2x.png) 1x,url(~assets/images/product-v1/product-v1-img-3-black@2x.png) 2x);
      .introduce-1, .introduce-2 {
        position: absolute;
        font-size: 22px;
        color: #828282;
        z-index: 10;
      }
    }
  }
  &.the-thin-red-line {
    background-image: url(~assets/images/product-v1/product-v1-img-3-redline-bg@2x.jpg);
    background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-redline-bg@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-3-redline-bg@2x.jpg) 2x);
    .product-colors {
      position: relative;
      width: 1220px;
      height: 900px;
      top: 25%;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(~assets/images/product-v1/product-v1-img-3-redline@2x.png);
      background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-redline@2x.png) 1x,url(~assets/images/product-v1/product-v1-img-3-redline@2x.png) 2x);
      .introduce-1, .introduce-2 {
        position: absolute;
        font-size: 22px;
        color: #707070;
        z-index: 10;
      }
    }
  }
  &.bright-red {
    background-image: url(~assets/images/product-v1/product-v1-img-3-red-bg@2x.jpg);
    background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-red-bg@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-3-red-bg@2x.jpg) 2x);
    .product-colors {
      position: relative;
      width: 1220px;
      height: 900px;
      top: 25%;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(~assets/images/product-v1/product-v1-img-3-red@2x.png);
      background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-red@2x.png) 1x,url(~assets/images/product-v1/product-v1-img-3-red@2x.png) 2x);
      .introduce-1, .introduce-2 {
        position: absolute;
        font-size: 22px;
        color: #dca09d;
        z-index: 10;
      }
    }
  }
  &.blackish-green {
    background-image: url(~assets/images/product-v1/product-v1-img-3-green-bg@2x.jpg);
    background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-green-bg@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-3-green-bg@2x.jpg) 2x);
    .product-colors {
      position: relative;
      width: 1220px;
      height: 900px;
      top: 25%;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(~assets/images/product-v1/product-v1-img-3-green@2x.png);
      background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-3-green@2x.png) 1x,url(~assets/images/product-v1/product-v1-img-3-green@2x.png) 2x);
      .introduce-1, .introduce-2 {
        position: absolute;
        font-size: 22px;
        color: #aeb5a8;
        z-index: 10;
      }
    }
  }
  .product-colors {
    
    .introduce-1 {
      top: 37%;
    }
    .introduce-2 {
      top: 42.5%;
    }
  }

  .black-btn {
    position: absolute;
    width: 150px;
    height: 38px;
    top: 64.5%;
    cursor: pointer;
  }
  .redline-btn {
    position: absolute;
    width: 150px;
    height: 38px;
    top: 71%;
    cursor: pointer;
  }
  .red-btn {
    position: absolute;
    width: 150px;
    height: 38px;
    top: 51.5%;
    cursor: pointer;
  }
  .green-btn {
    position: absolute;
    width: 150px;
    height: 38px;
    top: 58%;
    cursor: pointer;
  }
}

.product-v1-img-4 {
  position: relative;
  width: 100%;
  height: 1200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-4@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-4@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-4@2x.jpg) 2x);
  .sub-title {
    position: relative;
    top: 21.5%;
    font-size: 20px;
    color: #676767;
    text-align: center;
  }
}

.product-v1-img-5 {
  position: relative;
  width: 100%;
  height: 1600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-5@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-5@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-5@2x.jpg) 2x);
  .title, .sub-title {
    text-align: center;
    color: #737373;
    font-weight: 300;
  }
  .title {
    font-size: 19px;
    padding-top: 240px;
  }
  .sub-title {
    font-size: 14px;
    padding-top: 1.5%;
  }
}

.product-v1-img-6 {
  position: relative;
  width: 100%;
  height: 1000px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-6@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-6@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-6@2x.jpg) 2x);
}

.product-v1-img-7 {
  position: relative;
  width: 100%;
  height: 1200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-7.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-7.jpg) 1x,url(~assets/images/product-v1/product-v1-img-7@2x.jpg) 2x);
  .title, .sub-title {
    text-align: center;
    visibility: hidden;
  }
  .title {
    font-size: 54px;
    color: #474748;
    font-weight: bolder;
    padding-top: 190px;
  }
  .sub-title {
    font-size: 23px;
    color: #abb4b7;
    padding-top: 2.5%;
  }
}

.product-v1-img-8 {
  position: relative;
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-8@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-8@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-8@2x.jpg) 2x);
  .text {
    position: absolute;
    right: 35%;
    transform: translate(50%);
  }
  .title {
    font-size: 54px;
    color: #474748;
    text-align: center;
    font-weight: bolder;
    padding-top: 270px;
    &:nth-child(1) {
      text-indent: -50px;
    }
    &:nth-child(2) {
      padding-top: 0;
    }
  }
  .sub-title {
    font-size: 23px;
    color: #9c9c9c;
    text-align: left;
    padding-top: 2.5%;
    &:nth-child(3) {
      padding-top: 5%;
    }
  }
}

.product-v1-img-9 {
  position: relative;
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-9@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-9@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-9@2x.jpg) 2x);
  .text {
    text-align: center;
  }
  .title {
    font-size: 54px;
    color: #999da2;
    text-align: center;
    font-weight: bolder;
    padding-top: 470px;
  }
  .sub-title-1, .sub-title-2 {
    color: #50575e;
  }
  .sub-title-1 {
    font-size: 23px;
    color: #50575e;
    padding-top: 2.5%;
  }
  .sub-title-2 {
    font-size: 18px;
    color: #50575e;
    padding-top: 1%;
  }
}

.product-v1-img-10 {
  position: relative;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-10@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-10@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-10@2x.jpg) 2x);
  .text {
    position: absolute;
    left: 34%;
    transform: translate(-50%);
  }
  .title {
    font-size: 54px;
    color: #fff;
    text-align: center;
    font-weight: bolder;
    padding-top: 370px;
    opacity: .8;
  }
}

.product-v1-img-11 {
  position: relative;
  width: 100%;
  height: 1500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-11@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-11@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-11@2x.jpg) 2x);
  .text {
    text-align: center;
  }
  .title {
    font-size: 52px;
    color: #353d50;
    text-align: center;
    font-weight: bolder;
    padding-top: 170px;
  }
  .sub-title {
    font-size: 22px;
    color: #9d9fab;
    text-align: center;
    padding-top: .8%;
    opacity: .85;
    letter-spacing: .5px;
    &:nth-child(2) {
      padding-top: 2%;
    }
  }
}

.product-v1-img-12 {
  position: relative;
  width: 100%;
  height: 850px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-12.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-12.jpg) 1x,url(~assets/images/product-v1/product-v1-img-12@2x.jpg) 2x);
}

.product-v1-img-13 {
  position: relative;
  width: 100%;
  height: 640px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-13@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-13@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-13@2x.jpg) 2x);
}
</style>
