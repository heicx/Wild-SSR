<template>
    <div class="service-wrap">
      <div class="service-container">
        <side-bar
          class="sidebar"
          :title="'小野店主故事'"
          :supportList="sidebarList"
        ></side-bar>
        <card
          class="card"
          :title="title"
          :width="984"
        >
          <template v-slot:card-list>
            <ul class="card-content">
              <li v-for="(item, index) in storiesList" :key="index" :class="[item.theme]">
                <router-link :to='"/stories/" + item.id' tag='a'>
                  <span class="summary">{{item.summary}}</span>
                </router-link>
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
      sidebarList: [
        {
          name: '小野店主故事',
          path: '/stories',
          active: true,
        },
      ],
      storiesList: [
        {
          id: 1001,
          theme: 'story-1',
          summary: '成都店主故事特辑'
        },
        {
          id: 1002,
          theme: 'story-2',
          summary: '转变角色，遇见更好的自己'
        },
        {
          id: 1003,
          theme: 'story-3',
          summary: '“斜杠奶爸”的创业史'
        },
        {
          id: 1004,
          theme: 'story-4',
          summary: '如何在半年内连开两家店？'
        },
        {
          id: 1005,
          theme: 'story-5',
          summary: '从 0 开始，一往无前的创业'
        },
      ],
      title: '小野店主故事',
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
      text-align: center;
      li {
        margin-bottom: 69px;
        &:last-child {
          margin-bottom: 0;
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .summary {
        visibility: hidden;
        width: 1px;
        height: 1px;
      }
      .story-1 {
        width: 796px;
        height: 287px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/stories/img-1.jpg);
        background-image: -webkit-image-set(url(~assets/images/stories/img-1.jpg) 1x,url(~assets/images/stories/img-1@2x.jpg) 2x);
      }
      .story-2 {
        width: 796px;
        height: 287px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/stories/img-2.jpg);
        background-image: -webkit-image-set(url(~assets/images/stories/img-2.jpg) 1x,url(~assets/images/stories/img-2@2x.jpg) 2x);
      }
      .story-3 {
        width: 796px;
        height: 287px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/stories/img-3.jpg);
        background-image: -webkit-image-set(url(~assets/images/stories/img-3.jpg) 1x,url(~assets/images/stories/img-3@2x.jpg) 2x);
      }
      .story-4 {
        width: 796px;
        height: 287px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/stories/img-4.jpg);
        background-image: -webkit-image-set(url(~assets/images/stories/img-4.jpg) 1x,url(~assets/images/stories/img-4@2x.jpg) 2x);
      }
      .story-5 {
        width: 796px;
        height: 287px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(~assets/images/stories/img-5.jpg);
        background-image: -webkit-image-set(url(~assets/images/stories/img-5.jpg) 1x,url(~assets/images/stories/img-5@2x.jpg) 2x);
      }
    }
  }
}
</style>
