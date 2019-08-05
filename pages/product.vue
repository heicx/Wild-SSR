<template>
    <ul class="product-wrap">
      <li class="product-img-1">
        <a href="https://mall.jd.com/index-1000187701.html" target="_blank" class="official-btn"></a>
      </li>
      <li class="product-img-2"></li>
      <li class="product-img-3"></li>
      <li class="product-img-4"></li>
      <li class="product-img-5"></li>
      <li class="product-img-6"></li>
    </ul>
</template>

<script>
export default {
  layout: 'common'
}
</script>

<style lang="scss" scoped>
.product-wrap {
  background: #fff;
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
