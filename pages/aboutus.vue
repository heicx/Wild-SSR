<template>
    <div class="aboutus-wrap">
      <card :title="title">
        <template v-slot:card-list>
          <div class="aboutus-container">
            <div class="introduce">
              <p>小野科技有限公司是一家雾化电子烟制造与销售公司。创始团队来自华为、锤子科技，花生好车，团队具有有丰富的电子消费品设计、生产、营销及销售经验。欢迎加入小野，和我们一起让这个世界变得更好。</p>
              <p>每一点技术的进步，都值得被看见、被鼓励。</p>
              <p>小野科技的使命是用精益求精的态度与完美主义的精神，打造用户体验一流的电子烟产品，并推动电子烟在广大烟民群体中的普及与整个行业的发展。改善我国，乃至全球吸烟人群及与他们相关人群的健康状况和生活质量。</p>
              <p>全球有约 10 亿烟民，其中我国就占了总量的近三分之一。我们的愿景，是为了能尽早让更多烟民摆脱传统卷烟的持续性伤害，也为了能让更多人早日过上更健康、更美好的生活，让电子烟成为吸烟人群的新选择。我们相信，电子烟不只是简单的“替烟”产品，它只是过程中的一步，是让这个世界能变得更好的推力之一。</p>
              <p>未来，我们有信心在在全球 5600 亿美金的烟草市场中，凭借自身优越的产品设计、生产研发、市场营销等能力，在巨大的行业内掀起风浪，成为电子烟领域的行业佼佼者。</p>
              <p>为了给未成年人营造一个良好健康的成长环境，小野科技坚持遵守《关于禁止向未成年人出售电子烟的通告》（国家市场监督管理总局 国家烟草专卖局通告），不会向未成年人推荐、出售电子烟及相关产品。</p>
            </div>

            <div class="ceo">
              <p>创始人 & CEO</p>
              <p>彭锦洲</p>
            </div>

            <div class="introduce">彭锦洲先生曾任华为荣耀副总裁、Fill 耳机 CEO、 锤子科技总裁。主导推出过荣耀手机、坚果手机等多个数码爆品，是国内硬件制造领域的领军人物，对硬件数码、消费电子行业有着深入的了解，拥有丰富的生产制造、销售管理、品牌营销经验。</div>
            <div class="honor"></div>
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
      title: '小野的故事',
    }
  },
  components: {
    Card
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
    color: #666;
    font-size: 14px;
    text-align: left;
    padding: 20px 30px;
  }
  .introduce p {
    margin-bottom: 10px;
  }
  .ceo {
    font-weight: bold;
  }
  .introduce, .ceo {
    font-size: 15px;
    line-height: 25px;
    color: #666;
    padding-bottom: 20px;
  }
  .honor {
    width: 100%;
    height: 425px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #fff;
    background-image: url(~assets/images/aboutus/aboutus-honor.png);
    background-image: -webkit-image-set(url(~assets/images/aboutus/aboutus-honor.png) 1x,url(~assets/images/aboutus/aboutus-honor@2x.png) 2x);
  }
}
</style>
