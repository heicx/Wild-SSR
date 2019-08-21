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
              <h3 class="title">如果您在选购、使用小野电子烟过程中，遇到任何问题，欢迎您通过以下方式联系我们：</h3>
              <ul class="text">
                <li>客服电话：400-028-8560</li>
                <li>工作时间：周一至周日 9：00 ~ 18：00</li>
              </ul>
              <ul class="qrcode">
                <li class="weibo">
                  <span>官方微博：@vvild 小野</span>
                </li>
                <li class="wechat">
                  <span>官方微信：vvild 小野（微信号 vvildtech）</span>
                </li>
              </ul>
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
        // {
        //   name: '常见问题',
        //   path: '/help/knowledge',
        // },
        {
          name: 'V0 产品答疑',
          path: '/help/question'
        },
        {
          name: '客服中心',
          path: '/help/service',
          active: true,
        }
      ],
      title: '客服中心',
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
      .qrcode {
        padding: 42px 0 30px 24px;
        overflow: hidden;
        font-size: 12px;
        color: #7f7f7f;
      }
      .qrcode li {
        position: relative;
        float: left;
        &:first-child {
          margin-right: 150px;
        }
      }
      .weibo {
        position: absolute;
        content: '';
        width: 82px;
        height: 82px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #fff;
        background-image: url(~assets/images/help/weibo-qrcode.png);
        background-image: -webkit-image-set(url(~assets/images/help/weibo-qrcode.png) 1x,url(~assets/images/help/weibo-qrcode@2x.png) 2x);
        span {
          position: absolute;
          content: '';
          text-align: center;
          left: -30px;
          bottom: -30px;
          width: 140px;
        }
      }
      .wechat {
        position: absolute;
        content: '';
        width: 82px;
        height: 82px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #fff;
        background-image: url(~assets/images/help/wechat-qrcode.png);
        background-image: -webkit-image-set(url(~assets/images/help/wechat-qrcode.png) 1x,url(~assets/images/help/wechat-qrcode@2x.png) 2x);
        span {
          position: absolute;
          content: '';
          text-align: center;
          left: -66px;
          bottom: -30px;
          width: 230px;
        }
      }
    }
  }
}
</style>
