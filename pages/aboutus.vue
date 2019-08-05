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
                <p>成都小野未来科技有限公司是一家雾化电子烟制造与销售公司。创始团队来自华为、锤子科技等知名品牌，团队具有丰富的电子消费品设计、生产、营销及销售经验。</p>
                <p>未来，我们有信心在在全球 5600 亿美金的烟草市场中，凭借自身优越的产品设计、生产研发、市场营销等能力，在巨大的行业内掀起风浪，成为电子烟领域的行业佼佼者。</p>
              </div>
              <h4 class="subtitle">我们的使命和愿景</h4>
              <div class="introduce">
                <p>电子烟作为香烟的替代品，并不是完全无害的，但尼古丁盐和雾化烟技术的应用，使得消灭焦油和有害二手烟成为可能。</p>
                <p>这样的技术进步本身就有其意义，不容忽视。</p>
                <p>作为一个有社会责任感的科技公司，我们也致力于运用更先进的技术，为烟民提供危害性更小、体验更优异的产品，从而为他们的生活带来改变。</p>
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
      title: '公司介绍',
      sidebarList: [
        {
          name: '公司介绍',
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
