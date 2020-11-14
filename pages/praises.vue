<template>
    <div class="service-wrap">
      <div class="service-container">
        <side-bar
          class="sidebar"
          :title="'用户口碑'"
          :supportList="sidebarList"
        ></side-bar>
        <card
          class="card"
          :title="title"
          :width="984"
        >
          <template v-slot:card-list>
            <div class="card-content">
              <ul>
                <li v-for="(item, index) in praisesList" :key="index">
                  <h3 class="title">口味推荐：{{item.title}}</h3>
                  <div class="koubei-wraper" :class="{'active': item.status}">
                    <span :class="['banner', item.theme]"></span>
                    <div class="koubei-author">
                      <span class="author">{{item.author}}</span>
                      <span class="time">{{item.updateTime}}</span>
                    </div>
                    <h5 class="koubei-text">{{item.text}}</h5>
                    <span class="more-btn" @click="openMore(item, item.status)">{{!item.status ? '查看全文' : '收起全文'}}</span>
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
      sidebarList: [
        {
          name: '用户口碑',
          path: '/praises',
          active: true,
        },
        // {
        //   name: '小野店主故事',
        //   path: '/stories'
        // },
      ],
      praisesList: [
        {
          title: '极寒刃',
          author: '@双鱼座',
          updateTime: '发表于 2020-9-24 21:34:06',
          status: false,
          theme: 'jihandao',
          text: '大学毕业后就开始创业，因为经常熬夜烟成了日常的必备品，平均一天就要抽三包，尝试过戒烟但最终都以失败告终。后来碰见了小野，明显对香烟的依赖性变弱，从 V0 开始到现在的 WOOD 流金岁月系列，都没有错过。最喜欢极寒刃的口感，一口上头，头脑清醒，灵感也都来了。'
        },
        {
          title: '冰镇西瓜',
          author: '@破头也想不明白',
          updateTime: '发表于 2020-8-28 12:23:32',
          status: false,
          theme: 'xigua',
          text: '小时候夏天最惬意的时光就是放学后打开家里的冰箱，拿出妈妈提前冰在里面的西瓜，打开电视吹着电风扇来上一口。长大后再也没有这样的悠闲时刻，偶然间试抽同事买的冰镇西瓜烟弹，高口味还原度每一口都是夏天的感觉，小时候的快乐好像又回来了。'
        },
        {
          title: '微醺森林',
          author: '@张小猫',
          updateTime: '发表于 2020-9-24 11:45:50',
          status: false,
          theme: 'senlin',
          text: '我喝酒很少能体验到微醺的柑橘，每次都是和朋友喝的伶仃大醉，知道小野出了微醺森林以后，马上入手，从包装到口感都是全新的体验。利口酒与杏的曼妙结合，口感醇厚，雾气香味十足，久久不散。'
        },
        {
          title: '绿豆冰沙',
          author: '@冲冲路',
          updateTime: '发表于 2020-7-23 17:08:59',
          status: false,
          theme: 'lvdou',
          text: '独在异乡为异客，每逢佳节倍思亲，想家时就会抽上一口排解思乡的情绪，烦闷随着烟雾一同袅袅升起，并归于无的感觉很棒。从小就喜欢吃一切绿豆系列的食品，自从小野出了绿豆冰沙味的烟弹马上就纳入麾下，每次抽完小姐妹都会问我是不是偷吃绿豆冰淇淋，生活虽然艰难，但有你很甜。'
        },
        {
          title: '冰摇提提',
          author: '@十七侠',
          updateTime: '发表于 2020-9-25 17:46:21',
          status: false,
          theme: 'qingti',
          text: '冰摇提提上市前就拿到了内测资格，抽了一口就爱上了。清甜可口的鲜榨提子汁再兑上冰爽清茶一吸入口，一缕青烟吹起十分享受。这款烟弹最大的特点就是烟雾入喉击喉感强，适合午休后的上班族懒懒洋洋提不起精神时来上一口，瞬间提神醒脑。'
        },
        {
          title: '冰可乐',
          author: '@一直在减肥',
          updateTime: '发表于 2020-10-10 10:03:42',
          status: false,
          theme: 'kele',
          text: '肥宅快乐水一直都是我的最爱，不管吃什么饭配上一杯冰可乐，那感觉简直了。但因为减肥不得不放弃了可乐。还好有小野冰可乐口味烟弹陪着我，一点点可乐的甜加上一丝丝冰块的冰甜而不腻，口腔内可乐感十足，减肥期的我找到了一丝慰藉。'
        },
        {
          title: '玉米冰淇淋',
          author: '@野生超人',
          updateTime: '发表于 2020-10-16 16:00:02',
          status: false,
          theme: 'yumi',
          text: '提起童年最喜欢的冰淇淋，一定离不开奶油味的。这次的玉米冰淇淋让我又重温了童年的味道，冰淇淋融化在舌尖的感觉让久不能忘，并且击喉感十足，在昏昏欲睡的午后瞬间唤醒疲劳的身体。'
        },
        {
          title: '茶香烟草',
          author: '@没有昵称',
          updateTime: '发表于 2020-10-23 22:09:53',
          status: false,
          theme: 'yancao',
          text: '初听见这个名字就激起了我的好奇心，茶跟烟融合在一起的口感是什么样？拿到手后闻起来有铁观音的兰花香与还有烟草醇香，入口后口腔内茶香回荡，生津回甘，茶的微苦碰撞上烟的微涩碰撞起来形成的是焦糖的甜，对我来说是种很奇特的感觉。'
        },
        // {
        //   title: '咖啡',
        //   author: '@破头也想不明白',
        //   updateTime: '发表于 2020-8-28 12:23:32',
        //   status: false,
        //   theme: 'kafei',
        //   text: '当初是被“外表纯白，内心火热”的纯白色 V1 Plus 吸引了，上市后马上入手。因为经常熬夜喜欢喝咖啡，而小野的咖啡烟弹深得我心，高度烘焙的咖啡香与焦糖甜味曼妙结合，入口顺滑。提神清爽，绝对是加班熬夜的第一选择。'
        // },
        {
          title: '冷萃凤梨',
          author: '@小小心月',
          updateTime: '发表于 2020-10-25 12:34:59',
          status: false,
          theme: 'fengli',
          text: '作为一名福建人，凤梨是从小吃到大，毕业后来到北京很少能买到对我口的凤梨。做为小野的忠实粉丝当它出了冷萃凤梨后我马上就去店里试抽，每一口的酸甜都恰到好处，口腔内冰爽酸甜的感觉让人欲罢不能，终于在北京也能品尝到家乡的味道。'
        },
        {
          title: '老冰棍',
          author: '@小夏和小冬',
          updateTime: '发表于 2020-10-28 11:55:50',
          status: false,
          theme: 'binggun',
          text: '老冰棍应该是每个人都吃过的一款经典雪糕吧。小野的老冰棍烟弹勾起的不仅仅是味蕾的记忆碎片，还有儿时的美好回忆。入口纯净的凉和烟雾到鼻腔时什锦水果味的体现，以及呼出后令人捉摸不透的味道，都是所有奶油冰棍都不及的感觉。'
        },
        {
          title: '冰糖雪梨',
          author: '@糖果暴风雨',
          updateTime: '发表于 2020-11-01 12:30:06',
          status: false,
          theme: 'xueli',
          text: '秋天最应该入手就是冰糖雪梨。工作后，离家奋斗，不能经常喝到妈妈熬的冰糖雪梨，心里总有些失落。但还好碰见了小野的冰糖雪梨，入口顺滑香甜，甜而不腻，吐出的香气久不消散，还原度满分，有给到我这个离乡游子一丝慰藉。'
        }
      ],
      title: '用户口碑',
    }
  },
  head () {
    return {
      title: `${this.title} - 小野官方网站`
    }
  },
  methods: {
    openMore (item, status) {
      item.status = !status;
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
      li {
        margin-bottom: 35px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .title {
        margin-bottom: 25px;
        margin-left: 2px;
      }
      .koubei-wraper {
        position: relative;
        &.active::after {
          height: 130px;
        }
        &.active {
          .koubei-author {
            bottom: 100px;
          }
          .koubei-text {
            top: 96px;
            width: 96%;
            white-space: initial;
            word-break: initial;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            height: 62px;
          }
        }
        &::after {
          position: absolute;
          content: '';
          height: 60px;
          background: rgba(0, 0, 0, 0.4);
          bottom: 0;
          border-radius: 0 0 8px 8px;
          width: 100%;
        }
        .more-btn {
          position: absolute;
          color: #fff;
          z-index: 5;
          bottom: 10px;
          right: 17px;
          cursor: pointer;
        }
      }
      .koubei-author {
        position: absolute;
        font-size: 12px;
        color: #fff;
        padding-left: 17px;
        bottom: 32px;
        z-index: 10;
        .author {
          position: relative;
          &::after {
            position: absolute;
            content: '';
            border-left: 1px solid #fff;
            right: -6px;
            top: 2px;
            height: 10px;
          }
        }
        .time {
          margin-left: 9px;
          vertical-align: middle;
        }
      }
      .koubei-text {
        margin-top: 8px;
        z-index: 5;
        position: absolute;
        bottom: 10px;
        color: #fff;
        left: 17px;
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis;
        width: 88%;
      }
      .banner {
        width: 100%;
        height: 201px;
        border-radius: 8px;
        display: block;
      }
      .xigua {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/xigua.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/xigua.jpg) 1x,url(~assets/images/praises/xigua@2x.jpg) 2x);
      }
      .binggun {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/binggun.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/binggun.jpg) 1x,url(~assets/images/praises/binggun@2x.jpg) 2x);
      }
      .fengli {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/fengli.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/fengli.jpg) 1x,url(~assets/images/praises/fengli@2x.jpg) 2x);
      }
      .jihandao {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/jihandao.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/jihandao.jpg) 1x,url(~assets/images/praises/jihandao@2x.jpg) 2x);
      }
      .kele {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/kele.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/kele.jpg) 1x,url(~assets/images/praises/kele@2x.jpg) 2x);
      }
      .lvdou {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/lvdou.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/lvdou.jpg) 1x,url(~assets/images/praises/lvdou@2x.jpg) 2x);
      }
      .qingti {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/qingti.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/qingti.jpg) 1x,url(~assets/images/praises/qingti@2x.jpg) 2x);
      }
      .yancao {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/yancao.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/yancao.jpg) 1x,url(~assets/images/praises/yancao@2x.jpg) 2x);
      }
      .yumi {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/yumi.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/yumi.jpg) 1x,url(~assets/images/praises/yumi@2x.jpg) 2x);
      }
      .senlin {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/senlin.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/senlin.jpg) 1x,url(~assets/images/praises/senlin@2x.jpg) 2x);
      }
      .xueli {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/praises/xueli.jpg);
        background-image: -webkit-image-set(url(~assets/images/praises/xueli.jpg) 1x,url(~assets/images/praises/xueli@2x.jpg) 2x);
      }
      // .kafei {
      //   background-repeat: no-repeat;
      //   background-position: center;
      //   background-size: cover;
      //   background-image: url(~assets/images/praises/kafei.jpg);
      //   background-image: -webkit-image-set(url(~assets/images/praises/kafei.jpg) 1x,url(~assets/images/praises/kafei@2x.jpg) 2x);
      // }
    }
  }
}
</style>
