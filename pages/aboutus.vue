<template>
    <div class="aboutus-wrap">
      <div class="aboutus-container">
        <side-bar
          class="sidebar"
          :title="'关于我们'"
          :supportList="sidebarList"
        ></side-bar>
        <card
          class="card"
          :title="title"
          :width="984"
        >
          <template v-slot:card-list>
            <div class="card-content">
              <div class="introduce">
                <p>小野（vvild）隶属于深圳小野科技有限公司 ，小野创始团队均来自华为、锤子科技等知名品牌，团队具有丰富的电子消费品设计、生产、营销及销售经验。</p>
                <p>2019 年 4 月成功发布第一款产品 vvild 小野雾化电子烟 V0，2019 年 8 月 27 日同步发布新产品 vvild 小野雾化电子烟 V1 标准版和 V1 Plus 版换弹雾化电子烟，V1 标准版有暗红色、墨绿色和碳黑色三种颜色。V1 Plus 版具有二次阳极氧化处理过的碳黑色烟杆，同时在拥有“细红线”的外观设计并配有“卫生烟嘴帽”，同时具有 IPX4 级防水功能。</p>
                <p>未来，我们有信心在全球 5600 亿美金的烟草市场中，凭借自身优越的产品设计、生产研发、市场营销等能力，在巨大的行业内掀起风浪，成为电子烟领域的行业佼佼者。</p>
              </div>
              <h4 class="subtitle">我们的使命和愿景</h4>
              <div class="introduce">
                <p>致力于运用更先进的技术，为烟民们提供危害性更小、体验更优异的产品，从而为他们的生活带来改变。</p>
              </div>
              <h4 class="subtitle">品牌 Slogan</h4>
              <div class="introduce">
                <p>不要那么野，小野一下就好。</p>
              </div>
              <h4 class="subtitle">我们的历程</h4>
              <div class="introduce">
                <p>2019 年 1 月 ，vvild 小野品牌创立。</p>
                <p>2019 年 4 月，vvild 小野 V0 雾化电子烟上市。</p>
                <p>2019 年 8 月 27 日，vvild 小野科技正式宣布由陈冠希担任品牌特邀创意官，并同步发布新产品 vvild 小野雾化电子烟 V1 & V1 Plus。</p>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>
</template>

<script>
import SideBar from '../components/sidebar';
import Card from '../components/card';

export default {
  layout: 'common',
  data () {
    return {
      title: '品牌介绍',
      sidebarList: [
        {
          name: '品牌介绍',
          path: '/aboutus',
          active: true,
        },
        {
          name: '加入我们',
          path: '/joinus'
        }
      ]
    }
  },
  head () {
    return {
      title: `${this.title} - 小野官方网站`
    }
  },
  components: {
    Card,
    SideBar,
  }
}
</script>

<style lang="scss" scoped>
.aboutus-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  padding: 20px 0;

  .aboutus-container {
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
  }
  .card-content {
    color: #7f7f7f;
    font-size: 14px;
    text-align: left;
    padding: 20px 30px;
    .introduce {
      line-height: 1.8;
    }
    .subtitle {
      font-weight: bolder;
      margin: 20px 0 10px;
    }
  }
}
</style>
