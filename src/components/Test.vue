<template>
  <div class='Test'>
    {{msg}}
    <el-button type="primary" @click="arrow">arrow</el-button>
    <el-button type="primary" @click="notArrow">notArrow</el-button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Test'
    }
  },
  mounted: {},
  computed: {},
  methods: {
    arrow: () => {
      console.log(this)
    },
    notArrow () {
      console.log(this)
    }
  }
}
</script>

<style lang='less' scoped>
  .Test {

  }
</style>
