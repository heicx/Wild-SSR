<template>
    <div class="joinus-wrap">
      <div class="joinus-container">
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
              <h5 class="introduce">小野科技有限公司是一家雾化电子烟制造与销售公司。创始团队来自华为、锤子科技，花生好车，团队具有有丰富的电子消费品设计、生产、营销及销售经验。欢迎加入小野，和我们一起让这个世界变得更好。</h5>
              <h2>招聘职位：</h2>
              <ul>
                <li class="jd-item">
                  <div class="jd-name">1. 平面设计师（营销中心）</div>
                  <div class="jd-info">
                    <h4 class="title">岗位职责：</h4>
                    <h4 class="text">负责线上、线下主要宣传物料的设计，包括海报、宣传册、传单、易拉宝等；能够在线下物料的印刷制作过程中，完成追色等工作，保证线下产品宣传物料的质量。</h4>
                    <h4 class="title">任职要求：</h4>
                    <ul class="info">
                      <li>1、3 年以上平面设计相关经验，优秀的平面排版功底，能够独立完成宣传物料的设计；</li>
                      <li>2、有成熟和完整的设计方法体系，可以快速地分析设计需求，并给出解决方案；</li>
                      <li>3、在设计中注重画面的整体感，也注重像素级的设计细节；</li>
                      <li>4、善于创新，对视觉构成、排版、色彩有敏锐的观察力及把控能力；</li>
                      <li>5、具有良好的沟通能力和团队合作能力，能够与需求部门高效沟通。</li>
                    </ul>
                    <h4 class="text">工作地点：北京望京 / 深圳南山区</h4>
                    <h4 class="text">请将简历和作品集发送至：<a href="mailto:mkt@vvild.cn">mkt@vvild.cn</a></h4>
                  </div>
                </li>
                <li class="jd-item">
                  <div class="jd-name">2. 文案创意实习生（营销中心）</div>
                  <div class="jd-info">
                    <h4 class="title">岗位职责：</h4>
                    <h4 class="text">参与线上及线下活动文案编写；配合新媒体运营工作。</h4>
                    <h4 class="title">任职要求：</h4>
                    <ul class="info">
                      <li>1、广告、营销、艺术等相关专业在校大学生；</li>
                      <li>2、每周保证至少 4 天到岗。</li>
                    </ul>
                    <h4 class="text">工作地点：北京望京</h4>
                    <h4 class="text">请将简历和作品集发送至：<a href="mailto:mkt@vvild.cn">mkt@vvild.cn</a></h4>
                  </div>
                </li>
                <li class="jd-item">
                  <div class="jd-name">3. 高级项目经理（产品研发中心）</div>
                  <div class="jd-info">
                    <h4 class="title">岗位职责：</h4>
                    <h4 class="text">负责项目开发计划制定，管理和冻结需求；项目进度，风险管理，主导和完成项目系统性的验证，保障项目的按时高质量交付。</h4>
                    <h4 class="title">任职要求：</h4>
                    <ul class="info">
                      <li>1、机械、电信、电工、等理工科背景的本科，要求熟悉手机产品以及电子产品开发流程、设计和交付；</li>
                      <li>2、对接项目，了解项目需求，安排项目计划，跟进项目进度，控制项目风险，直至项目交付；</li>
                      <li>3、10年以上工作经验，要有很强的实际问题分析解决能力；</li>
                      <li>4、具备成功项目交付经验，有冲劲儿，沟通、协调能力佳；</li>
                      <li>5、具备跨团队、跨地域等项目交付经验者佳；</li>
                      <li>6、有较强的系统思考和总结能力，推动性强。</li>
                    </ul>
                    <h4 class="text">工作地点：深圳南山区</h4>
                    <h4 class="text">请将简历和作品集发送至：<a href="mailto:mkt@vvild.cn">mkt@vvild.cn</a></h4>
                  </div>
                </li>
                <li class="jd-item">
                  <div class="jd-name">4. 高级结构经理（产品研发中心）</div>
                  <div class="jd-info">
                    <h4 class="title">岗位职责：</h4>
                    <ul class="info">
                      <li>1、负责整机堆叠设计，确定整机方案设计；</li>
                      <li>2、负责产品开发的结构电子器件的选型和结构设计；</li>
                      <li>3、负责项目关键技术难点评估和跟踪；</li>
                      <li>4、结构设计过程中，结合工艺同事，充分考虑 DFX；</li>
                      <li>5、完成新产品开发过程每次量试的问题改善的分析和讨论、指导、制定 DOE，并成功导入量产；</li>
                      <li>6、负责产品结构件的材料选型，加工工艺选型，成本分析，方案确定及优化；</li>
                      <li>7、参与部门的技术管理，负责讨论新材料、新工艺、新器件的导入；</li>
                      <li>8、负责主导编制有关设计技术文档。</li>
                    </ul>
                    <h4 class="title">任职要求：</h4>
                    <ul class="info">
                      <li>1、10 年以上工作经验，要有很强的实际问题分析解决能力；</li>
                      <li>2、熟悉机械加工工艺和产品结构设计，熟悉机械结构、机械传动相关知识；了解液压、气动和机电一体化基础知识；</li>
                      <li>3、具有良好的系统设计能力，产品内部架构解决方案设计和具体结构设计工作，具有对产品结构强度、完整性、可靠性的分析判断能力；</li>
                      <li>4、有良好组织管理能力，具备考核人员与培养人员能力；有良好的团队合作和敬业精神，责任心强；勇于挑战，良好的学习能力，沟通能力，思维能力，独立并积极主动，有一定领导力。</li>
                    </ul>
                    <h4 class="text">工作地点：深圳南山区</h4>
                    <h4 class="text">请将简历发送至：<a href="mailto:jobs@vvild.cn">jobs@vvild.cn</a></h4>
                  </div>
                </li>
              </ul>
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
      title: '加入我们',
      sidebarList: [
        {
          name: '公司介绍',
          path: '/aboutus',
        },
        {
          name: '加入我们',
          path: '/joinus',
          active: true,
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
.joinus-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  padding: 20px 0;
  .joinus-container {
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
    color: #666;
    font-size: 14px;
    text-align: left;
    padding: 20px 30px;
  }
  .introduce {
    font-size: 15px;
    line-height: 26px;
    color: #666;
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 1px dashed #dcdcdc;
  }
  .jd-item {
    margin-bottom: 30px;
  }
  h2 {
    padding-top: 20px;
    font-size: 18px;
    line-height: 32px;
    color: #666;
    font-weight: bold;
  }
  .jd-name {
    font-weight: bold;
    margin: 8px 0;
  }
  .jd-info {
    .title {
      margin: 8px 0;
    }
    .info {
      line-height: 24px;
    }
    .text {
      margin: 6px 0;
      a:hover {
        color: #ea3323;
      }
    }
  }
}
</style>
