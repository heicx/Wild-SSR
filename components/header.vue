<template>
	<div class="header-topbar">
		<div class="container clearfix">
      <router-link class="topbar-logo" to='/' tag='a'></router-link>
			<div class="topbar-tabs">
        <div class="item-name text-hidden">
          <a href="/cn/news">新闻动态</a>
        </div>
        <a href="https://xiaoyeyanju.tmall.com" target="_blank" class="buy-btn"></a>
				<router-link
          v-for='(item, index) in list'
          :key='index'
          :to='item.link'
          class="item-name"
          :class='{"active": item.alias.path.indexOf($route.name) > -1 }'
          @mouseenter.native="onMouseEnterItem(item.alias.path)"
          @mouseleave.native="onMouseLeaveItem($event)"
          tag='div'
        >
          {{item.name}}
          <div
            v-if="!!item.alias.subItems"
            class="sub-items"
            :class="{'active': item.alias.path.indexOf(subItemName) > -1}"
          >
            <div class="item-wrap">
              <router-link
                v-for="(subItem, index) in item.alias.subItems"
                :key="index"
                class="item"
                :class='{"active": subItem.path.indexOf($route.name) > -1 }'
                :to='subItem.link'
                @click.native="closeMenu()"
                tag="span"
              >
                {{subItem.name}}
              </router-link>
            </div>
          </div>
        </router-link>
      </div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
      subItemName: '',
			list: [
				{
					name: '首页',
					alias: {
            path: 'index',
          },
					link: '/'
				},
				{
					name: '产品',
					alias: {
            path: ['product-v0', 'product-v1'],
            subItems: [
              {
                name: '雾化电子烟 V1',
                link: '/product-v1',
                path: 'product-v1',
              },
              {
                name: '雾化电子烟 V0',
                link: '/product-v0',
                path: 'product-v0',
              },
            ],
          },
					link: '/product-v1'
        },
        {
					name: '视频中心',
					alias: {
            path: 'media',
          },
					link: '/media'
				},
				{
					name: '关于我们',
					alias: {
            path: ['aboutus', 'joinus'],
            subItems: [
              {
                name: '品牌介绍',
                link: '/aboutus',
                path: 'aboutus',
              },
              {
                name: '加入我们',
                link: '/joinus',
                path: 'joinus',
              },
            ],
          },
					link: '/aboutus'
        },
        {
					name: '招商加盟',
					alias: {
            path: ['entityshop', 'investment'],
            subItems: [
              {
                name: '专卖店计划',
                link: '/entityshop',
                path: 'entityshop'
              },
              {
                name: '招商加盟',
                link: '/investment',
                path: 'investment',
              }
            ]
          },
					link: '/entityshop'
        },
        // {
				// 	name: '新闻动态',
				// 	alias: {
        //     path: ['news', 'news-id']
        //   },
				// 	link: '/news'
        // },
        {
					name: '帮助与支持',
					alias: {
            path: ['help-knowledge', 'help-question', 'help-service'],
          },
					link: '/help/question'
				},
			]
		}
  },
  methods: {
    closeMenu () {
      // this.showMenu = false;
    },
    onMouseEnterItem (items) {
      if (items) {
        this.subItemName = items[0];
      }
    },
    onMouseLeaveItem (e) {
      this.subItemName = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar-tabs .text-hidden {
  opacity: 0;
  width: 1px;
  height: 1px;
}
</style>