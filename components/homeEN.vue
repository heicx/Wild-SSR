<template>
    <section class="home-wrap">
    <div class="banner"></div>
    <div class="home-img-1"></div>
    <div class="home-img-2"></div>
    <div class="home-img-3"></div>
    <div class="home-img-4"></div>
    <div class="home-img-5"></div>
    <div class="home-img-6"></div>
    <div class="home-img-7"></div>
    <div class="home-img-8"></div>
    <div class="home-img-9"></div>
    <div class="home-img-10"></div>
  </section>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      isShowTips: !localStorage.getItem('_tips'),
      videoStatus: "",
    }
  },
  methods: {
    mouseover(name, event) {
      this.videoStatus = name;

      try {
        let video = document.getElementById(name);
        setTimeout(_ => {
          video && video.play();
        }, 150);
      } catch(e) {}
    },
    mouseout(name) {
      let video = document.getElementById(name);

      this.videoStatus = '';
      video.pause();
    },
    tipsConfirm(status) {
      if (!!status) {
        this.isShowTips = false;
        localStorage.setItem('_tips', true);
      } else if (navigator.userAgent.indexOf("MSIE") > 0) {
        window.opener = null;
        window.close();
      } else if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {
        window.location.href = 'about:blank';
        window.close();
      } else {
        window.opener = null;
        window.open('', '_self', '');
        window.close();
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-img-1, .banner-img-2 {
    position: relative;
}

.banner {
    /** 首屏 Banner **/
    height: 812px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url(~assets/images/en/banner.jpg);
    background-image: -webkit-image-set(url(~assets/images/en/banner.jpg) 1x,url(~assets/images/en/banner@2x.jpg) 2x);
}

.home-img-1 {
  height: 1548px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-1.jpg) 1x,url(~assets/images/en/home-img-1@2x.jpg) 2x);
}

.home-img-2 {
  height: 1367px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-2.jpg) 1x,url(~assets/images/en/home-img-2@2x.jpg) 2x);
}

.home-img-3 {
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-3.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-3.jpg) 1x,url(~assets/images/en/home-img-3@2x.jpg) 2x);
}

.home-img-4 {
  height: 901px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-4.jpg) 1x,url(~assets/images/en/home-img-4@2x.jpg) 2x);
}

.home-img-5 {
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-5.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-5.jpg) 1x,url(~assets/images/en/home-img-5@2x.jpg) 2x);
}

.home-img-6 {
  height: 943px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-6.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-6.jpg) 1x,url(~assets/images/en/home-img-6@2x.jpg) 2x);
}

.home-img-7 {
  height: 900px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-7.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-7.jpg) 1x,url(~assets/images/en/home-img-7@2x.jpg) 2x);
}

.home-img-8 {
  height: 804px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-8.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-8.jpg) 1x,url(~assets/images/en/home-img-8@2x.jpg) 2x);
}

.home-img-9 {
  height: 951px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-9.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-9.jpg) 1x,url(~assets/images/en/home-img-9@2x.jpg) 2x);
}

.home-img-10 {
  height: 1843px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(~assets/images/en/home-img-10.jpg);
  background-image: -webkit-image-set(url(~assets/images/en/home-img-10.jpg) 1x,url(~assets/images/en/home-img-10@2x.jpg) 2x);
}

.prohibit {
    width: 100%;
    height: 510px;
    margin: 0 auto;
    // background-image: url(~assets/images/en/prohibit.jpg);
    // background-image: -webkit-image-set(url(~assets/images/en/prohibit.jpg) 1x,url(~assets/images/en/prohibit@2x.jpg) 2x);
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
        // background-image: url(~assets/images/en/modal-btn.jpg);
        // background-image: -webkit-image-set(url(~assets/images/en/modal-btn.jpg) 1x,url(~assets/images/en/modal-btn@2x.jpg) 2x);
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
        // background-image: url(~assets/images/en/modal-text@2x.jpg);
        // background-image: -webkit-image-set(url(~assets/images/en/modal-text@2x.jpg) 1x,url(~assets/images/en/modal-text@2x.jpg) 2x);
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

@media screen and (max-width: 1414px) {
    .banner-img-1 {
        height: 615px;
    }
    .banner-img-2 {
        height: 885px;
        .img {
            height: 900px;
        }
        .text-container {
            padding-top: 238px;
            .text {
                width: 446px;
                height: 361px;
                left: 90px;
            }
            .banner-btn {
                bottom: -343px;
                height: 39px;
                left: 102px;
            }
            .btn-1 {
                width: 114px;
            }
            .btn-2 {
                margin-left: 18px;
                width: 116px;
            }
        }
    }
}

@media screen and (min-width: 1415px) and (max-width: 1600px) {
    .banner-img-1 {
        height: 650px;
    }
    .banner-img-2 {
        height: 960px;
        .img {
            height: 980px;
        }
        .text-container {
            padding-top: 256px;
            .text {
                width: 487px;
                height: 393px;
                left: 70px;
            }
            .banner-btn {
                bottom: -374px;
                height: 43px;
                left: 84px;
            }
            .btn-1 {
                width: 124px;
            }
            .btn-2 {
                margin-left: 18px;
                width: 128px;
            }
        }
    }
}


@media screen and (min-width: 1601px) and (max-width: 1919px){
    .banner-img-1 {
        height: 830px;
    }
    .banner-img-2 {
        height: 806px;
        .img {
            height: 820px;
        }
        .text-container {
            padding-top: 198px;
            .text {
                width: 491px;
                height: 397px;
                left: 50px;
            }
            .banner-btn {
                bottom: -378px;
                height: 44px;
                left: 64px;
            }
            .btn-1 {
                width: 126px;
            }
            .btn-2 {
                margin-left: 18px;
                width: 128px;
            }
        }
    }
}

@media screen and (min-width: 1920px) {
    .banner-img-1 {
        height: 850px;
    }
    .banner-img-2 {
        height: 963px;
        .img {
            height: 980px;
        }
        .text-container {
            padding-top: 260px;
            .text {
                width: 487px;
                height: 393px;
                left: 50px;
            }
            .banner-btn {
                bottom: -376px;
                height: 44px;
                left: 64px;
            }
            .btn-1 {
                width: 126px;
            }
            .btn-2 {
                margin-left: 18px;
                width: 128px;
            }
        }
    }
}

</style>