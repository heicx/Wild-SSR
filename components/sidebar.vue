<template>
  <div class='sidebar-wrap'>
    <h3 class="title">{{title}}</h3>
    <ul class="sidebar-list">
      <li v-for='(item, key) in supportList' :key='key'>
        <router-link :to='item.path' :class="{'active': item.active}">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    supportList: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: #7f7f7f;
    text-align: left;
    padding-left: 30px;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    border-radius: 6px 6px 0 0;
    background: #f3f3f3;
    background: linear-gradient(#fff, #fbfbfb);
    line-height: 60px;
    height: 60px;
  }
  li {
    position: relative;
    line-height: 50px;
    list-style: none;
    width: 218px;
    font-size: 16px;
    color: #666;
  }
  li:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
    &:hover:before {
      border-bottom: 1px solid rgba(0,0,0,.1);
      z-index: 2;
    }
    &:first-child:before {
      border-bottom: 0;
    }
  }
  a:hover,
  a.active {
    background: #eee;
  }
  a.active {
    font-weight: bold;
  }
  a {
    color: #666;
    display: block;
    padding-left: 30px;
  }
}
</style>
