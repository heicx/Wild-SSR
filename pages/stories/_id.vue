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
            <div class="card-content">
              <ul>
                <li
                  v-for="(item, index) in stories.detail"
                  :key="index"
                  class="stories-item"
                >
                  <template v-if="item.indexOf('IMG_') > -1 || item.indexOf('IMG_SUB_TITLE_') > -1">
                    <template v-if="item.indexOf('IMG_') > -1">
                      <img :src="item.split('IMG_')[1]" alt="">
                    </template>
                    <template v-if="item.indexOf('IMG_SUB_TITLE_') > -1">
                      <span class="sub-title">
                        {{item.split('IMG_SUB_TITLE_')[1]}}
                      </span>
                    </template>
                  </template>
                  
                  <template v-else>
                    {{item}}
                  </template>
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
import STORIES from '../../static/stories.js';

export default {
  layout: 'common',
  data () {
    return {
      sidebarList: [
        {
          name: '小野店主故事',
          path: '/stories'
        },
      ],
      title: '',
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
  computed: {
    stories () {
      let title = '';
      let detail = '';
      const { id } = this.$route.params;

      for (let item of STORIES.list) {
        if (item.id == id) {
          title = item.title;
          this.title = title;
          detail = item.detail;
          break;
        }
      }

      return {
        title,
        detail
      }
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
      .stories-item {
        font-size: 16px;
        line-height: 1.8;
        word-break: break-all;
        text-align: left;
        color: #666;
        margin-top: 15px;
        word-break: break-word;
        img {
          display: block;
          margin: 30px auto;
        }
        .sub-title {
          display: block;
          font-size: 12px;
          margin-top: -40px;
          text-align: center;
        }
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
