<template>
	<div class="footer">
		<div class="container clearfix" :class="{'footer-reducer': !isHomePage}">
			<div class="footer-qrcode" :class="{'footer-qrcode-anim': shareLinkName == 'wechat'}"></div>
      <router-link class="footer-title" to='/' tag='a'>深圳小野科技有限公司</router-link>
			<ul class="footer-info">
				<li class="address">地址：深圳市南山区粤海街道滨海社区科园路 1002 号 A8 音乐大厦</li>
				<li class="email">
					<a href="mailto:bd@vvild.cn">商务合作：bd@vvild.cn</a>
				</li>
			</ul>
			<ul class="copyright">
				<li>Copyright © 2021, Shenzhen vvild Technology Co., Ltd. All Rights Reserved.</li>
				<li>
					<a href="http://www.miibeian.gov.cn/" target="_blank">京 ICP 备 19018410 号 - 1	</a>
				</li>
				<li>
					<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038671" target="_blank">京公网安备 11010502038671 号</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
    return {
      shareLinkName: ""
    }
  },
  props: {
    isHomePage: Boolean
  },
  methods: {
    mouseover(name, event) {
      this.shareLinkName = name;
    },
    mouseout(name) {
      this.shareLinkName = '';
    }
  }
}
</script>
