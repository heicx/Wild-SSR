<template>
  <div class="product-v1-wrap">
    <ul>
      <li class="product-v1-img-1"></li>
      <li class="product-v1-img-2" @click="playVideo()"></li>
      <div class="product-v1-img-3-wrap">
        <div class="product-honor-img"></div>
        <div class="product-colorful"></div>
        <div
          class="product-v1-img-3 carbon-black"
          :class="{'active': colorId === 'carbon-black'}"
        >
          <ul class="product-colors">
            <li
              v-for='(name, index) in colorBtnClass'
              :key='index'
              :class="name"
              @click="changeColors(name)"
            >
            </li>
          </ul>
        </div>
        <div
          class="product-v1-img-3 the-thin-red-line"
          :class="{'active': colorId === 'the-thin-red-line'}"
        >
          <ul class="product-colors">
            <li
              v-for='(name, index) in colorBtnClass'
              :key='index'
              :class="name"
              @click="changeColors(name)"
            >
            </li>
          </ul>
        </div>
        <div
          class="product-v1-img-3 bright-red"
          :class="{'active': colorId === 'bright-red'}"
        >
          <ul class="product-colors">
            <li
              v-for='(name, index) in colorBtnClass'
              :key='index'
              :class="name"
              @click="changeColors(name)"
            >
            </li>
          </ul>
        </div>
        <div
          class="product-v1-img-3 blackish-green"
          :class="{'active': colorId === 'blackish-green'}"
        >
          <ul class="product-colors">
            <li
              v-for='(name, index) in colorBtnClass'
              :key='index'
              :class="name"
              @click="changeColors(name)"
            >
            </li>
          </ul>
        </div>
      </div>
      <li class="product-v1-img-4"></li>
      <li class="product-v1-img-5"></li>
      <li class="product-v1-img-6"></li>
      <li class="product-v1-img-7"></li>
      <li class="product-v1-img-8"></li>
      <li class="product-v1-img-9"></li>
      <li class="product-v1-img-10"></li>
      <li class="product-v1-img-11"></li>
      <li class="product-v1-img-12"></li>
      <li class="product-v1-img-13"></li>
    </ul>
    <div class="video-wrap" :class="{'active': videoShowStatus}">
      <div class="video-content">
        <video v-if="isCDN" :src="videoUrl" controls></video>
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
      title: '雾化电子烟 V1 - 小野官方网站'
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
  background-image: url(~assets/images/product-v1/product-v1-img-7@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-7@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-7@2x.jpg) 2x);
}

.product-v1-img-8 {
  position: relative;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-8@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-8@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-8@2x.jpg) 2x);
}

.product-v1-img-9 {
  position: relative;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-9@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-9@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-9@2x.jpg) 2x);
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
}

.product-v1-img-12 {
  position: relative;
  width: 100%;
  height: 850px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-12@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-12@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-12@2x.jpg) 2x);
}

.product-v1-img-13 {
  position: relative;
  width: 100%;
  height: 640px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product-v1/product-v1-img-1@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/product-v1/product-v1-img-13@2x.jpg) 1x,url(~assets/images/product-v1/product-v1-img-13@2x.jpg) 2x);
}
</style>
