<template>
	<div class="footer">
		<div class="container clearfix">
			<div class="footer-share">
				<a class="share-icons wechat" :class="{ active: shareLinkName == 'wechat'}" @mouseover="mouseover('wechat', $event)" @mouseout="mouseout('wechat')">
				</a>
				<a class="share-icons weibo" :class="{ active: shareLinkName == 'weibo'}" @mouseover="mouseover('weibo', $event)" @mouseout="mouseout('weibo')" target="_blank" href="https://weibo.com/u/6875249519">
				</a>
			</div>
			<div class="footer-qrcode" :class="{'footer-qrcode-anim': shareLinkName == 'wechat'}"></div>
      <router-link class="footer-title" to='/' tag='a'>北京大稳科技有限公司</router-link>
			<ul class="footer-info">
				<li class="address">地址：北京市北京经济技术开发区科创十三街 29 号院一区 2 号楼</li>
				<li class="email">
					<a href="mailto:bd@vvild.cn">商务合作：bd@vvild.cn</a>
				</li>
				<!-- <li class="tel">客服电话：400-086-3666</li> -->
			</ul>
			<ul class="copyright">
				<li>Copyright © 2019, Beijing Dawen Technology Co., Ltd. All Rights Reserved.</li>
				<li>
					<a href="http://www.miibeian.gov.cn/" target="_blank">京 ICP 备 19018410 号 - 1	</a>
				</li>
				<!-- <li>
					<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037227" target="_blank">京公网安备 11010502037227 号</a>
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
    return {
      shareLinkName: ""
    }
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
