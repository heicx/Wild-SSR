<template>
    <div class="service-wrap">
      <card :title="title">
        <template v-slot:card-list>
          <div class="service-container">
            <p class="introduce">如果您在选购、使用小野电子烟过程中，遇到任何问题，欢迎您通过以下方式联系我们：</p>

            <div class="tel">
              <p>客服电话：400-028-8560</p>
              <p>工作时间：周一至周日 9:00 ~ 18:00</p>
            </div>

            <ul class="sns">
              <li>微博：@vvild小野</li>
              <li>微信：vvild小野（微信号：vvildtech）</li>
              <li>有赞：vvild小野商城</li>
              <li>天猫 小野烟具旗舰店：<a href="https://xiaoyeyanju.tmall.com" target="_blank">https://xiaoyeyanju.tmall.com</a></li>
              <li>京东 小野京东自营旗舰店：<a href="https://xiaoyeyanju.tmall.com" target="_blank">https://mall.jd.com/index-1000187701.html</a></li>
            </ul>
          </div>
        </template>
      </card>
    </div>
</template>

<script>
import Card from '../components/card';

export default {
  layout: 'common',
  data () {
    return {
      title: '客服中心',
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.service-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  padding: 20px 0;
  .service-container {
    color: #666;
    font-size: 14px;
    text-align: left;
    line-height: 26px;
    padding: 20px 30px;
  }
  .introduce {
    font-size: 15px;
    font-weight: bold;
    color: #666;
  }
  .tel {
    padding: 8px 0 20px;
    border-bottom: 1px dashed #dcdcdc;
  }
  .sns {
    padding-top: 20px;
    a:hover {
      color: #ea3323;
    }
  }
}
</style>
