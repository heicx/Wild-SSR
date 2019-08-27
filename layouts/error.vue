<template>
  <div class="not-found">
    不要那么野，小野一下就好 ...
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'common'
}
</script>

<style lang="scss" scoped>
.app-wrap .not-found {
    min-height: 680px;
    line-height: 680px;
    text-align: center;
    font-size: 30px;
    color: #ff0400;
    opacity: .3;
}
</style>
