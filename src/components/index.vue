<template>
  <div class="hello">
    <el-button @click="_test">test</el-button>
    <div>
      <!--<el-select v-model="value" :placeholder="themes[0]" @change="changeTheme" value="">-->
      <el-select v-model="value" value="">
        <el-option
          v-for="item in themes"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      value: '',
      themes: [
        'red-theme',
        '$default-theme'
      ]
    }
  },
  computed: {
    // ...this.$store.getters.Themes.mapState(['nowThemeInfo'])
  },
  methods: {
    // changeTheme (value) {
    //   this.SET_THEMEINFO(value)
    // },
    _test () {
      this.$axios.get('/test', {params: {hello: 'world'}}).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello {
    color: #ffffff;
    /*width: 100vw;*/
    /*height: 100vh;*/
  }
</style>
