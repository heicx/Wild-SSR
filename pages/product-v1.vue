<template>
  <div class="product-v1-wrap">
    <ul>
      <li class="product-v1-img-1">
        <ul class="text-opc">
          <li>不要那么野，”小野一下就好“</li>
          <li>vvild 小野雾化电子烟 V1/V1 Plus 去除焦油、多种口味、澎湃雾量、真烟口感</li>
          <li>套装售价：￥299 起</li>
          <li>特别提醒：本品含有尼古丁，未成年人禁止使用，非吸烟者请勿尝试</li>
        </ul>
      </li>
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

        <ul class="text-opc">
          <li>屡获殊荣的 Smartisan Design Studio 设计团队诚意打造</li>
          <li>电子烟告别 ”乡村风“ 时代</li>
          <li>让电子烟行业终于迎来了真正的工业设计</li>
          <li>航空级铝合金打造的极简主义形体</li>
          <li>三种颜色，一样出色</li>
          <li>优雅内敛，作风沉稳，电子烟设计上的 ”中国大队长“</li>
        </ul>
      </div>
      <li class="product-v1-img-4">
        <ul class="text-opc">
          <li>意味深长的禁忌符号光孔，随呼吸明灭之际，欲语还休</li>
          <li>压抑时不妨放肆小野一下，忘形时难免触目克制三分</li>
        </ul>
      </li>
      <li class="product-v1-img-5">
        <ul class="text-opc">
          <li>细细的红线，暖暖的保护</li>
          <li>目前 ”细红线“ 外观设计和 ”卫生烟嘴帽“ 功能设计，为 vvild 小野雾化电子烟 V1 Plus 型号所独有</li>
        </ul>
      </li>
      <li class="product-v1-img-6">
        <ul class="text-opc">
          <li>五重科技防护</li>
          <li>油气分离技术</li>
          <li>顶部密封圈</li>
          <li>雾化器密封圈</li>
          <li>独立冷凝槽结构</li>
          <li>底部密封圈</li>
          <li>体验拔群的超扁平人体工学烟嘴</li>
          <li>完美对应吸入时的口型</li>
          <li>最薄处仅 5.5 mm，嘴感更贴合，嘴型更优雅</li>
          <li>加长双气道设计和双管结构</li>
          <li>避免吸入时高温烫嘴</li>
          <li>创新的 35 mm 加长气道设计，充分雾化的烟油口感更温柔</li>
        </ul>
      </li>
      <li class="product-v1-img-7">
        <ul class="text-opc">
          <li>更多选择，重口不再难调</li>
          <li>新增四种口味，每种都经过精心调制，不容错过</li>
        </ul>
      </li>
      <li class="product-v1-img-8">
        <ul class="text-opc">
          <li>”防贪多“ 震动提醒设计</li>
          <li>让身体满足，让心里有数</li>
          <li>五分钟内吸到 15 口时，烟杆机身会轻微震动一下</li>
          <li>提醒用户摄入的尼古丁含量已经大致相当于一根香烟</li>
        </ul>
      </li>
      <li class="product-v1-img-9">
        <ul class="text-opc">
          <li>告别火机时代，体验防水纪元</li>
          <li>IPX4 级的防水功能，可以让你在淋雨设置淋浴时，都放心使用</li>
        </ul>
      </li>
      <li class="product-v1-img-10"></li>
      <li class="product-v1-img-11">
        <ul class="text-opc">
          <li>”替烟“ 利器，一举消灭数百种危害</li>
          <li>vvild 小野雾化电子烟 V1, V1 Plus 采用行业领先的低温雾化技术，不仅祛除了传统香烟在燃烧时产生的数百种有害、有毒和致癌物质，还几乎完美还原了传统香烟口感，在减少身体伤害的同时，也避免了口臭、牙黄、多痰烦恼</li>
        </ul>
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
