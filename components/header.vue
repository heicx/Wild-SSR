<template>
	<div class="header-topbar">
		<div class="container clearfix">
      <router-link class="topbar-logo" to='/' tag='a'></router-link>
			<div class="topbar-tabs">
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
                name: '小野的故事',
                link: '/aboutus',
                path: 'aboutus',
              },
              {
                name: '加入小野',
                link: '/joinus',
                path: 'joinus',
              },
            ],
          },
					link: '/aboutus'
        },
        // {
				// 	name: '帮助中心',
				// 	alias: {
        //     path: 'help'
        //   },
				// 	link: '/help'
				// },
			]
		}
  },
  methods: {
    closeMenu () {
      this.showMenu = false;
    },
    onMouseEnterItem (name) {
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
