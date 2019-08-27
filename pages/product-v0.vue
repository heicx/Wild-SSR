<template>
    <ul class="product-wrap">
      <li class="product-img-1">
        <a href="https://mall.jd.com/index-1000187701.html" target="_blank" class="official-btn"></a>
        <h3 class="text-opc">vvild 小野雾化电子烟 V0</h3>
        <h5 class="text-opc">“不要那么野，小野一下就好”</h5>
        <ul class="text-opc">
          <li>
            <h3>强效减害</h3>
            <h5>减少燃烧产生的有毒物</h5>
          </li>
          <li>
            <h3>雾量澎湃</h3>
            <h5>6.5W 大功率输出</h5>
          </li>
          <li>
            <h3>多种口味</h3>
            <h5>精心调制</h5>
          </li>
          <li>
            <h3>真烟口感</h3>
            <h5>尼古丁盐有效解瘾</h5>
          </li>
          <li>
            <h3>严防漏油</h3>
            <h5>五合一强力防漏</h5>
          </li>
          <li>
            <h3>长效续航</h3>
            <h5>350mAh 电池</h5>
          </li>
        </ul>
      </li>
      <li class="product-img-2">
        <h3>一击即入魂</h3>
        <h5>烟油采用有机尼古丁盐，强效解瘾，直逼真烟每种口味的尼古丁含量为 3% 或 5%，与真烟相当体验酷似传统香烟，让你找到熟悉的感觉</h5>
      </li>
      <li class="product-img-3">
        <ul class="text-opc">
          <li>
            <h3>原味烤烟</h3>
            <h5>尼古丁含量 5%</h5>
          </li>
          <li>
            <h3>冰爽薄荷</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
          <li>
            <h3>热带芒果</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
          <li>
            <h3>绿豆冰沙</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
          <li>
            <h3>清甜荔枝</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
          <li>
            <h3>能量牛</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
          <li>
            <h3>冰甜西柚</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
          <li>
            <h3>蜂蜜绿茶</h3>
            <h5>尼古丁含量 3%</h5>
          </li>
        </ul>
      </li>
      <li class="product-img-4">
        <h3 class="text-opc">严防死守，拒绝漏油</h3>
        <h5 class="text-opc">油气分离设计，三重硅胶密封，冷凝槽独立防漏技术，五合一强力防漏，更大程度降低漏油风险</h5>
      </li>
      <li class="product-img-5">
        <h3 class="text-opc">充电一次，享受一天</h3>
        <h5 class="text-opc">350mAh 锂电池，Type-C 充电口，面对四种常见问题，均有安全保护机制，续航更持久，使用更安全</h5>
      </li>
      <li class="product-img-6">
        <h3 class="text-opc">vvild 小野雾化电子烟 V0 已经过严格的检测工序</h3>
        <ul class="text-opc">
          <li>符合欧盟电子烟设备要求 CE-RoHS 认证</li>
          <li>符合国家标准家用和类似用途电器安全要求</li>
          <li>符合国家香料香精《烟用香精标准》</li>
          <li>符合国家食品安全标准 “急性毒性试验”</li>
          <li>符合国家食品安全标准的 “食品添加剂中重金属试验”</li>
          <li>符合国家食品安全标准 “食品中邻苯二甲酸酯的测定”</li>
          <li>符合国家食品安全标准 “食品微生物学检验 菌落总数测定”</li>
          <li>符合国家食品安全标准 “食品微生物学检验 霉菌和酵母计数”</li>
          <li>符合国家食品安全标准 “食品卫生微生物学检验 大肠菌群测定”</li>
          <li>符合国家食品安全标准 “食品中总砷及无机砷试验”</li>
        </ul>
      </li>
    </ul>
</template>

<script>
export default {
  layout: 'common',
  head () {
    return {
      title: '雾化电子烟 V0 - 小野官方网站'
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

.product-img-1 {
  position: relative;
  width: 100%;
  height: 901px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-1.jpg) 1x,url(~assets/images/product/product-img-1@2x.jpg) 2x);
  .official-btn {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    display: block;
    width: 160px;
    height: 45px;
    transform: translate(84%, 44%);
  }
}
.product-img-2 {
  width: 100%;
  height: 901px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-2.jpg) 1x,url(~assets/images/product/product-img-2@2x.jpg) 2x);
}
.product-img-3 {
  width: 100%;
  height: 684px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-3.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-3.jpg) 1x,url(~assets/images/product/product-img-3@2x.jpg) 2x);
}
.product-img-4 {
  width: 100%;
  height: 967px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-4.jpg) 1x,url(~assets/images/product/product-img-4@2x.jpg) 2x);
}
.product-img-5 {
  width: 100%;
  height: 886px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-5.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-5.jpg) 1x,url(~assets/images/product/product-img-5@2x.jpg) 2x);
}
.product-img-6 {
  width: 100%;
  height: 2116px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-6.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-6.jpg) 1x,url(~assets/images/product/product-img-6@2x.jpg) 2x);
}
</style>
