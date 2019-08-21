<template>
    <div class="knowledege-wrap">
      <div class="knowledege-container">
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
            <ul class="card-content">
              <li>
                <h2 class="item-title">1. 什么是 vvild 小野电子烟？</h2>
                <h4 class="item-text">小野电子烟包括烟杆和烟弹两部分，烟杆是一种以可充电锂聚合物电池供电驱动雾化器，透过雾化器加热烟弹中的烟油，不需燃烧产生微量蒸汽。因电子烟不会产生焦油，相对于传统香烟，可减少 95% 的有害物质。</h4>
              </li>
              <li>
                <h2 class="item-title">2. vvild 小野电子烟的烟弹中烟油的成分都是哪些？</h2>
                <h4 class="item-text">VG（植物甘油）、PG（丙二醇）、尼古丁盐、食用级香料。</h4>
              </li>
              <li>
                <h2 class="item-title">3. 什么是尼古丁盐？</h2>
                <h4 class="item-text">尼古丁盐是一种白色结晶或粉末，可溶于 VG 和 PG 中，同时含有尼古丁盐的烟油能够使电子烟的口感更接近香烟。</h4>
              </li>
              <li>
                <h2 class="item-title">4. 什么是击喉感？</h2>
                <h4 class="item-text">击喉感是指烟雾吸入口中后对喉咙的刺激，击喉感强就代表刺激性较大，更接近传统香烟的体验。</h4>
              </li>
              <li>
                <h2 class="item-title">5. 吸进去是热烟还是冷烟？</h2>
                <h4 class="item-text">vvild 小野电子烟吸入的是冷烟。</h4>
              </li>
              <li>
                <h2 class="item-title">6. 吸入有阻尼感吗？</h2>
                <h4 class="item-text">经过多次实验我们将 vvild 小野电子烟的吸入阻尼感设计的与真烟尽量接近，但实际情况，与跟个人感受有关。</h4>
              </li>
              <li>
                <h2 class="item-title">7. vvild 小野电子烟抽的时间长了会把牙齿熏黄吗？</h2>
                <h4 class="item-text">传统香烟因为含有焦油成分，所以长时间吸取会堆积到牙齿表面，导致牙齿泛黄，而电子烟烟油中不含有焦油成分，在吸烟过程中，烟油会被加热产生蒸汽，所以理论情况下不会出现牙齿熏黄的现象。</h4>
              </li>
              <li>
                <h2 class="item-title">8. 可以在公共场合抽 vvild 小野电子烟吗？</h2>
                <h4 class="item-text">请勿在公共场合及明确标明禁止吸烟的场所使用电子烟。</h4>
              </li>
              <li>
                <h2 class="item-title">9. 什么情况的人群，不能使用 vvild 小野电子烟？</h2>
                <h4 class="item-text">对醇类（PG）过敏者，心脏病、高血压、有呼吸道疾病、孕期和哺乳期妇女、未成年人禁止使用。</h4>
              </li>
              <li>
                <h2 class="item-title">10. vvild 小野电子烟可以带上飞机吗？</h2>
                <h4 class="item-text">电子烟可以带上飞机。根据《中华人民共和国民用航空行业标准》规定，单个电池电量小于 100Wh 可以带上飞机。我们的烟杆电池容量为 1.295Wh，远低于该民航要求，符合带上飞机的条件。开封的电子烟可能存在轻微漏油的风险，建议您将烟弹和烟杆分开，烟弹提前单独做好密封。</h4>
              </li>
              <li>
                <h2 class="item-title">11. 用完的 vvild 小野电子烟的烟弹属于可回收垃圾吗？</h2>
                <h4 class="item-text">烟弹属于可回收垃圾，建议您在丢弃时先进行包裹。</h4>
              </li>
            </ul>
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
          name: '常见问题',
          path: '/help/knowledge',
          active: true,
        },
        {
          name: 'V0 产品答疑',
          path: '/help/question',
        },
        {
          name: '客服中心',
          path: '/help/service'
        }
      ],
      title: '常见问题',
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
.knowledege-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  padding: 20px 0;
  width: 100%;

  .knowledege-container {
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
      padding: 25px 30px;
      li {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .item-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .item-text {
        font-size: 14px;
        color: #7f7f7f;
      }
    }
  }
}
</style>
