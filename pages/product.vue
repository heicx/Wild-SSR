<template>
    <ul class="product-wrap">
      <li class="product-img-1"></li>
      <li class="product-img-2"></li>
      <li class="product-img-3"></li>
      <li class="product-img-4"></li>
      <li class="product-img-5"></li>
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
  width: 100%;
  height: 719px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-1.jpg) 1x,url(~assets/images/product/product-img-1@2x.jpg) 2x);
}
.product-img-2 {
  width: 100%;
  height: 850px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-2.jpg) 1x,url(~assets/images/product/product-img-2@2x.jpg) 2x);
}
.product-img-3 {
  width: 100%;
  height: 943px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-3.png);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-3.png) 1x,url(~assets/images/product/product-img-3@2x.png) 2x);
}
.product-img-4 {
  width: 100%;
  height: 997px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-4.jpg) 1x,url(~assets/images/product/product-img-4@2x.jpg) 2x);
}
.product-img-5 {
  width: 100%;
  height: 853px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/product/product-img-5.jpg);
  background-image: -webkit-image-set(url(~assets/images/product/product-img-5.jpg) 1x,url(~assets/images/product/product-img-5@2x.jpg) 2x);
}
</style>
