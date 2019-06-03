<template>
  <div id="app" class="app-wrap">
    <component v-bind:is="currentTabHeader"></component>
    <app-navigation :isHide='isHide'></app-navigation>
    <router-view :isLangCN="isLangCN" />
    <component v-bind:is="currentTabFooter"></component>
	</div>
</template>

<script>
import appHeaderCN from '../components/headerCN.vue';
import appHeaderEN from '../components/headerEN.vue';
import appNavigation from '../components/navigation.vue';
import appFooterCN from '../components/footerCN.vue';
import appFooterEN from '../components/footerEN.vue';
import Bus from '../assets/bus';

export default {
  data() {
    return {
      isHide: true,
      isLangCN: true,
      currentTabHeader: 'header-cn',
      currentTabFooter: 'footer-cn'
    }
  },
  mounted () {
    this.isHide = !(this.$route.name == 'tech' || this.$route.name == 'spec');
  },
  created() {

    var lang = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
    var lang = lang.substr(0, 2);
  　　if(lang == 'zh'){
        this.currentTabHeader = 'header-en';
        this.currentTabFooter = 'footer-en'
        this.isLangCN = false
  　　}else{
        this.currentTabHeader = 'header-en';
        this.currentTabFooter = 'footer-en'
        this.isLangCN = false
  　　};
    Bus.$on('showNav', (status)=> {
      this.isHide = !status;
    });
  },
  components: {
   'header-cn': appHeaderCN,
   'header-en': appHeaderEN,
    appNavigation,
    'footer-cn': appFooterCN,
    'footer-en': appFooterEN
  },
}
</script>

<style src='../assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  min-width: 1280px;
}
</style>
