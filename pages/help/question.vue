<template>
    <div class="question-wrap">
      <div class="question-container">
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
                <h2 class="item-title">1. vvild 小野 · 雾化电子烟 V0 的烟弹中烟油的成分都是哪些？</h2>
                <h4 class="item-text">VG（植物甘油）、PG（丙二醇）、有机尼古丁盐、香料。</h4>
              </li>
              <li>
                <h2 class="item-title">2. 可以在公共场合抽 vvild 小野 · 雾化电子烟 V0 吗？</h2>
                <h4 class="item-text">请勿在公共场合及明确标明禁止吸烟的场所使用电子烟。</h4>
              </li>
              <li>
                <h2 class="item-title">3. vvild 小野 · 雾化电子烟 V0 电子烟可以带上飞机吗？</h2>
                <h4 class="item-text">电子烟可以带上飞机。根据《中华人民共和国民用航空行业标准》规定，单个电池电量小于 100Wh 可以带上飞机。我们的烟杆电池容量为 1.295Wh，远低于该民航要求，符合带上飞机的条件。高空气压变化可能导致烟弹中渗漏出少许烟油，建议您在乘坐飞机时，将烟弹用塑料袋或专用器具包裹携带。</h4>
              </li>
              <li>
                <h2 class="item-title">4. vvild 小野 · 雾化电子烟 V0 套装里都有什么？分别是什么口味的烟弹？</h2>
                <h4 class="item-text">套装包含一支烟杆、三颗烟弹、一根 Type-C 充电线、一份使用说明书。套装内包含三颗烟弹：原味烟草、冰霜薄荷、热带芒果，或原味烟草、能量牛、绿豆冰沙，两种套装，随机发货。</h4>
              </li>
              <li>
                <h2 class="item-title">5. vvild 小野 · 雾化电子烟 V0 烟弹的容量是多少？</h2>
                <h4 class="item-text">单颗烟弹的烟油容量约为 2ml。</h4>
              </li>
              <li>
                <h2 class="item-title">6. vvild 小野 V0 烟弹的尼古丁含量是多少？</h2>
                <h4 class="item-text">烟弹尼古丁含量分别有 3% 和 5% 两种比例，比例严格按照 30mg/ml 和 50mg/ml 的标准。</h4>
              </li>
              <li>
                <h2 class="item-title">7. vvild 小野 V0 烟杆是什么材质的？</h2>
                <h4 class="item-text">烟杆材质为铝合金。</h4>
              </li>
              <li>
                <h2 class="item-title">8. vvild 小野 V0 烟弹是什么材质的？</h2>
                <h4 class="item-text">烟弹是医疗级的 PCTG 材料。</h4>
              </li>
              <li>
                <h2 class="item-title">9. vvild 小野 V0 烟杆电池容量是多少？</h2>
                <h4 class="item-text">电池容量为 350 mAh。</h4>
              </li>
              <li>
                <h2 class="item-title">10. vvild 小野 V0 烟杆充满电需要多久？</h2>
                <h4 class="item-text">充满电所需时间大约为 60 分钟左右。</h4>
              </li>
              <li>
                <h2 class="item-title">11. vvild 小野 V0 烟杆是否可以使用非原装充电线进行充电？</h2>
                <h4 class="item-text">建议您尽量使用原装数据线进行充电。如遇其他情况也可使用 Type-C 数据线进行充电。</h4>
              </li>
              <li>
                <h2 class="item-title">12. vvild 小野 V0 烟杆是否可以用快充？</h2>
                <h4 class="item-text">不支持使用快充。</h4>
              </li>
              <li>
                <h2 class="item-title">13. vvild 小野 V0 烟杆指示灯说明：</h2>
                <h4 class="item-text subtitle">吸入时：</h4>
                <h4 class="item-text">指示灯随吸入渐亮渐灭（暗红色）- 产品正常工作</h4>
                <h4 class="item-text">指示灯快速闪烁 3 次（暗红色）- 电量较低，建议充电</h4>
                <h4 class="item-text subtitle">插入烟弹时：</h4>
                <h4 class="item-text">闪烁 1 次（白色）</h4>
                <h4 class="item-text subtitle">充电时：</h4>
                <h4 class="item-text">指示灯缓慢闪烁（暗红色）- 正常充电</h4>
                <h4 class="item-text">指示灯常亮（白色）- 充满电</h4>
              </li>
              <li>
                <h2 class="item-title">14. vvild 小野 V0 的烟弹最高使用温度和最低温度是多少？</h2>
                <h4 class="item-text">极限温度是 -20 ~ 60 度，建议在 0 ~ 40 度下使用。</h4>
              </li>
              <li>
                <h2 class="item-title">15. vvild 小野 V0 烟弹储存保质期有多长？</h2>
                <h4 class="item-text">未开封的验单储存保质期一年，建议开封后尽快使用，以保证口感。</h4>
              </li>
              <li>
                <h2 class="item-title">16. 一颗 vvild 小野 V0 烟弹相当于几包烟？一颗烟弹能抽多少口？</h2>
                <h4 class="item-text">一颗烟弹的容量约为 2 ml ≈ 2 到 3 包香烟，一个烟弹能抽约 450-600 口左右，每个人吸入的力度不同，口数会存在一定差异。</h4>
              </li>
              <li>
                <h2 class="item-title">17. vvild 小野 V0 经过了哪些安全认证和测试？</h2>
                <h4 class="item-text ok">符合欧盟电子烟设备要求 CE-RoHS 认证</h4>
                <h4 class="item-text ok">符合国家标准家用和类似用途电器安全要求</h4>
                <h4 class="item-text ok">符合国家香料香精《烟用香精标准》</h4>
                <h4 class="item-text ok">符合国家食品安全标准 “急性毒性试验”</h4>
                <h4 class="item-text ok">符合国家食品安全标准的 “食品添加剂中重金属试验”</h4>
                <h4 class="item-text ok">符合国家食品安全标准 “视频中邻苯二甲酸酯的测定”</h4>
                <h4 class="item-text ok">符合国家食品安全标准 “食品微生物学检验 菌落总数测定”</h4>
                <h4 class="item-text ok">符合国家食品安全标准 “食品微生物学检验 霉菌和酵母计数”</h4>
                <h4 class="item-text ok">符合国家食品安全标准 “食品卫生微生物学检验 大肠菌群测定”</h4>
                <h4 class="item-text ok">符合国家食品安全标准 “食品中总砷及无机砷试验”</h4>
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
        // {
        //   name: '常见问题',
        //   path: '/help/knowledge',
        // },
        {
          name: 'V0 产品答疑',
          path: '/help/question',
          active: true,
        },
        {
          name: '客服中心',
          path: '/help/service'
        }
      ],
      title: 'vvild 小野 · 雾化电子烟 V0 产品相关答疑',
    }
  },
  components: {
    SideBar,
    Card,
  }
}
</script>

<style lang="scss" scoped>
.question-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  .question-container {
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
        position: relative;
        font-size: 14px;
        color: #7f7f7f;
        &.subtitle {
          margin: 4px 0;
          font-weight: bold;
        }
        &.ok {
          padding-left: 20px;
          line-height: 1.5;
        }
        &.ok:before {
          position: absolute;
          content: '';
          width: 8px;
          height: 6px;
          top: 6px;
          left: 6px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-color: #fff;
          background-image: url(~assets/images/help/icon-ok.png);
          background-image: -webkit-image-set(url(~assets/images/help/icon-ok.png) 1x,url(~assets/images/help/icon-ok@2x.png) 2x);
        }
      }
    }
  }
}
</style>
