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
              <h3 class="text gap-50">vvild 小野由顶尖团队打造，研发团队由来自华为、锤子科技等多名资深技术专家组成，具备硬件领域最前沿的技术实力。vvild 小野对产品设置了极端严格的检测标准：符合欧盟电子烟 CE-RoHS 认证、符合国家香料香精《烟用香精标准》、符合多项国家食品安全标准。检测结果有据可查，让消费者的卫生安全得到可靠保障。其次，vvild 小野是行业内唯一有潮流明星做背书的电子烟品牌。邀请到拥有江湖传说、CLOT 潮牌主理人、演员、歌手、rap star、AJ1 白丝绸联名设计师等多重身份的流量大 V - 陈冠希，作为 vvild 小野的特邀创意官。有他在，vvild 小野产品必定为潮流硬通货。另外，中国初代网红、脱口秀鼻祖、流量大 V、带货主播、拥有电子产品设计美学家之称的罗永浩老师是 vvild 小野品牌的创始人之一，并全程参与把控产品的设计、外观等细节，在罗老师的监督下，小野的产品颜值自然逆天。</h3>
              <div class="title">
                我们的使命与愿景
              </div>
              <h3 class="text">企业使命：让生活更健康、更自由</h3>
              <h3 class="text">企业愿景：做深受消费者喜爱的品牌</h3>
              <h3 class="text">企业价值观：以用户为中心，以结果为导向</h3>
              <h3 class="text">品牌关键：新贵品牌、有态度也有度、不随波逐流、阳光朝气、高品质高格调</h3>
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
