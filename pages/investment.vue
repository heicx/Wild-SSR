<template>
    <ul class="investment-wrap">
      <li class="investment-img-1"></li>
      <li class="investment-img-2"></li>
      <li class="investment-img-3"></li>
      <li class="investment-img-4"></li>
    </ul>
</template>

<script>
export default {
  layout: 'common'
}
</script>

<style lang="scss" scoped>
.investment-wrap {
  background: #fff;
}

.investment-img-1 {
  width: 100%;
  height: 779px;
  margin-top: -1px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment/investment-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment/investment-img-1.jpg) 1x,url(~assets/images/investment/investment-img-1@2x.jpg) 2x);
}
.investment-img-2 {
  width: 100%;
  height: 608px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment/investment-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment/investment-img-2.jpg) 1x,url(~assets/images/investment/investment-img-2@2x.jpg) 2x);
}
.investment-img-3 {
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment/investment-img-3.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment/investment-img-3.jpg) 1x,url(~assets/images/investment/investment-img-3@2x.jpg) 2x);
}
.investment-img-4 {
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment/investment-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment/investment-img-4.jpg) 1x,url(~assets/images/investment/investment-img-4@2x.jpg) 2x);
}
</style>
