<template>
	<div class="header-topbar">
		<div class="container clearfix">
      <router-link class="topbar-logo" to='/' tag='a'></router-link>
			<div class="topbar-tabs">
        <!-- <div class="item-name hidden">
          <a href="/news">媒体中心</a>
        </div> -->
				<router-link
          v-for='(item, index) in list'
          :key='index'
          :to='item.link'
          class="item-name"
          :class='{"active": item.alias.path.indexOf($route.name) > -1 }'
          @mouseenter.native="onMouseEnterItem(item.link)"
          @mouseleave.native="onMouseLeaveItem($event)"
          tag='div'
        >
          {{item.name}}
          <div
            v-if="!!item.alias.subItems"
            class="sub-items"
            :class="{'active': showMenu}"
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
      showMenu: false,
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
            path: 'product'
          },
					link: '/product'
				},
				{
					name: '关于我们',
					alias: {
            path: ['aboutus', 'joinus'],
            subItems: [
              {
                name: '公司介绍',
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
					name: '专卖店计划',
					alias: {
            path: 'entityshop'
          },
					link: '/entityshop'
        },
        {
					name: '招商加盟',
					alias: {
            path: 'investment'
          },
					link: '/investment'
        },
        {
					name: '新闻动态',
					alias: {
            path: ['news', 'news-id']
          },
					link: '/news'
        },
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
      this.showMenu = false;
    },
    onMouseEnterItem (name) {
      console.log(this.$route.name)
      if (name.indexOf('aboutus') > -1) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    },
    onMouseLeaveItem (e) {
      this.showMenu = false;
    }
  }
}
</script>
