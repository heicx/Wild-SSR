<template>
  <div id="app" class="app-wrap">
    <app-header></app-header>
    <nuxt />
		<app-footer :isHomePage="isHomePage"></app-footer>
	</div>
</template>

<script>
import appHeader from '../components/header.vue';
import appFooter from '../components/footer.vue';
import Bus from '../assets/bus';

export default {
  data() {
    return {}
  },
  computed: {
    isHomePage () {
      return this.$route.name === 'index'
    }
  },
  created() {
  },
  components: {
    appHeader,
    appFooter
  },
}
</script>

<style src='../assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  min-width: 1280px;
}
</style>
