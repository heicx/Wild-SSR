<template>
    <div class="service-wrap">
      <div class="service-container">
        <side-bar
          class="sidebar"
          :title="'帮助与支持'"
          :supportList="supportList"
        ></side-bar>
        <card
          class="card"
          :title="title"
          :width="984"
        >
          <template v-slot:card-list>
            <div class="card-content">
              <h3 class="text gap-50">vvild 小野品牌创始团队来自华为、锤子科技等知名品牌，团队具有丰富的电子消费品设计、生产、营销及销售经验。 我们致力于用更先进的技术，为用户带来体验更优的产品，从而改善其生活方式。</h3>
              <div class="title">
                我们的使命与愿景
              </div>
              <h3 class="text">vvild小野——有态度，也有度的雾化器品牌</h3>
              <h3 class="text">企业使命：引领健康生活新理念</h3>
              <h3 class="text">企业愿景：确立行业领先地位，创造合作伙伴价值，提升用户生活品质</h3>
              <h3 class="text">品牌关键：新贵品牌、有态也有度、不随波逐流、阳光朝气、高品质格调</h3>
              <h3 class="text">品牌 slogan：不要那么野，小野一下就好</h3>
            </div>
          </template>
        </card>
      </div>
    </div>
</template>

<script>
import SideBar from '../../components/sidebar';
import Card from '../../components/card';

export default {
  layout: 'common',
  data () {
    return {
      supportList: [
        {
          name: '公司介绍',
          path: '/help/aboutus',
          active: true,
        },
        {
          name: 'V1 产品答疑',
          path: '/help/question'
        },
        {
          name: '客服中心',
          path: '/help/service',
        }
      ],
      title: '公司介绍',
    }
  },
  head () {
    return {
      title: `${this.title} - 小野官方网站`
    }
  },
  components: {
    SideBar,
    Card,
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
  width: 100%;

  .service-container {
    width: 1220px;
    margin: 0 auto;
    overflow: hidden;
    color: #666;
    font-size: 14px;
    text-align: left;
    .sidebar {
      float: left;
    }
    .card {
      float: right;
    }
    .card-content {
      padding: 25px 30px 38px;
      background: #fafafa;
      border-radius: 6px;
      font-size: 14px;
      .title {
        font-weight: bold;
        line-height: 1;
        padding-bottom: 12px;
      }
      .text {
        color: #7f7f7f;
        line-height: 1.6;
      }
      .gap-50 {
        padding-bottom: 50px;
      }
    }
  }
}
</style>
