<template>
  <div class="page-detail">
    <van-nav-bar
      title="解答"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <p class="content">答：目前广州市旧楼加装电梯主要依据的规范性文件有：《广州市既有住宅增设电梯办法》（穗府办规〔2016〕11号）和《广州市既有住宅增设电梯技术规程》（穗国土规划规字〔2016〕1号）。</p>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    console.log('created')
  },
  activated() {
    console.log('activated')
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.page-detail {
  .content {
    margin: 16px;
  }
}
</style>

