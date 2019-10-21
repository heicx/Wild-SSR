<template>
  <div class="card-wrap" :style="{'width': `${width}px`}">
    <h2 class="card-title">{{title}}</h2>
    <slot name='card-list'></slot>
  </div>
</template>

<script>
export default {
	data() {
    return {}
  },
  props: {
    width: {
      type: Number,
      default: 1220,
    },
    title: String
  },
  computed: {
    style: function () {
      return {
        width: `${this.width}px`
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
  margin: 0 auto;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  .card-title {
    font-size: 18px;
    font-weight: bold;
    color: #7f7f7f;
    text-align: left;
    padding-left: 30px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    border-bottom: 1px solid #dcdcdc;
    border-radius: 6px 6px 0 0;
    background: #f3f3f3;
    background: linear-gradient(#fff, #fbfbfb);
    line-height: 60px;
    height: 60px;
  }
  .card .card-list {
    overflow: hidden;
    padding: 20px 30px;
  }
}

.card .card-list li {
    list-style: none;
    float: left;
    width: 280px;
    height: 189px;
    border: 1px solid #e5e5e5;
    margin: 0 10px 10px 0;
    text-align: center;
    overflow: hidden;
}
</style>

