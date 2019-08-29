<template>
  <div class="meida-wrap">
    <div class="meida-img-1"></div>
    <ul class="media-content">
      <li class="media-1" @click="playVideo('media-1')"></li>
      <li class="media-2" @click="playVideo('media-2')"></li>
      <li class="media-3" @click="playVideo('media-3')"></li>
      <li class="media-4" @click="playVideo('media-4')"></li>
      <li class="media-5" @click="playVideo('media-5')"></li>
      <li class="media-6" @click="playVideo('media-6')"></li>
      <li class="media-7" @click="playVideo('media-7')"></li>
      <li class="media-8" @click="playVideo('media-8')"></li>
      <li class="media-9" @click="playVideo('media-9')"></li>
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
        'media-1': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-60.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMTk3NzQ4OA=='
        },
        'media-2': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-15D.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMTk2NjY0MA=='
        },
        'media-3': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-15F.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMjAxNTEyMA=='
        },
        'media-4': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-5B.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMTk0NjQ1Mg=='
        },
        'media-5': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-5A.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMTk0NDM0OA=='
        },
        'media-6': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-5C.mov',
          youkuUrl: 'hhttp://player.youku.com/embed/XNDMzMTk0OTk3Mg=='
        },
        'media-7': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-5D.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMTk1MDg4MA=='
        },
        'media-8': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-30.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMTk2OTg2NA=='
        },
        'media-9': {
          cdnUrl: 'https://static.vvild.cn/resources/media/vvild-15B.mov',
          youkuUrl: 'http://player.youku.com/embed/XNDMzMjAxMzg5Mg=='
        }
      },
      videoShowStatus: false
    }
  },
  methods: {
    playVideo (name) {
      // 1566878399000
      const timestamp = (new Date()).valueOf();

      if (timestamp > 1566878399000) {
        this.isCDN = true;
        this.videoUrl = this.videos[name].cdnUrl || this.videos['media-4'].cdnUrl;
      } else {
        this.isCDN = false;
        this.videoUrl = this.videos[name].youkuUrl || this.videos['media-4'].cdnUrl;
      }

      setTimeout(_ => {
        this.$refs.videoEle.play();
      });
      
      this.videoShowStatus = !this.videoShowStatus;
    },
    closeVideo () {
      this.videoUrl = '';
      this.videoShowStatus = !this.videoShowStatus;
    }
  },
  mounted () {
  },
  head () {
    return {
      title: '视频中心 - 小野官方网站'
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

.meida-img-1 {
  position: relative;
  width: 100%;
  height: 648px;
  margin-bottom: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-img-1@2x.jpg) 1x,url(~assets/images/media/media-img-1@2x.jpg) 2x);
}

.media-content {
  width: 1220px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 40px;
  li {
    float: left;
    width: 400px;
    height: 225px;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &:nth-child(3n+1) {
      margin-left: 0;
    }
  }
}

.media-1 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-1@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-1@2x.jpg) 1x,url(~assets/images/media/media-cover-1@2x.jpg) 2x);
}

.media-2 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-2@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-2@2x.jpg) 1x,url(~assets/images/media/media-cover-2@2x.jpg) 2x);
}

.media-3 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-3@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-3@2x.jpg) 1x,url(~assets/images/media/media-cover-3@2x.jpg) 2x);
}

.media-4 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-4@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-4@2x.jpg) 1x,url(~assets/images/media/media-cover-4@2x.jpg) 2x);
}

.media-5 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-5@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-5@2x.jpg) 1x,url(~assets/images/media/media-cover-5@2x.jpg) 2x);
}

.media-6 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-6@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-6@2x.jpg) 1x,url(~assets/images/media/media-cover-6@2x.jpg) 2x);
}

.media-7 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-7@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-7@2x.jpg) 1x,url(~assets/images/media/media-cover-7@2x.jpg) 2x);
}

.media-8 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-8@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-8@2x.jpg) 1x,url(~assets/images/media/media-cover-8@2x.jpg) 2x);
}

.media-8 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-8@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-8@2x.jpg) 1x,url(~assets/images/media/media-cover-8@2x.jpg) 2x);
}

.media-9 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/media/media-cover-9@2x.jpg);
  background-image: -webkit-image-set(url(~assets/images/media/media-cover-9@2x.jpg) 1x,url(~assets/images/media/media-cover-9@2x.jpg) 2x);
}
</style>
