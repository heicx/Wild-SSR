<template>
<div id="app" class="app-wrap">
  <component  v-bind:is="currentHome"></component>
</div>
</template>

<script>
import { setTimeout } from 'timers';
import appHomeCN from '../components/homeCN.vue';
import appHomeEN from '../components/homeEN.vue';
export default {
  layout: 'common',
  props: ['isLangCN'],
  data() {
    return {
      isShowTips: !localStorage.getItem('_tips'),
      videoStatus: "",
      currentHome: 'home-cn'
    }
  },
  mounted() {
    this.currentHome = this.isLangCN ? 'home-cn' : 'home-en'
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
  },
  components: {
   'home-cn': appHomeCN,
   'home-en': appHomeEN
  },
}
</script>
