<template>
  <div class="hello" data-theme="light">
    <!--<el-button @click="_test">test</el-button>-->
    <!--<div>-->
      <!--&lt;!&ndash;<el-select v-model="value" :placeholder="themes[0]" @change="changeTheme" value="">&ndash;&gt;-->
      <!--<el-select v-model="value" value="">-->
        <!--<el-option-->
          <!--v-for="item in themes"-->
          <!--:key="item"-->
          <!--:label="item"-->
          <!--:value="item">-->
        <!--</el-option>-->
      <!--</el-select>-->
    <!--</div>-->
    <p class="list-title">
      你好
    </p>
    <el-button @click="changeTheme('dark')">
      CHANGE
    </el-button>
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
      ],
      theme: 'light'
    }
  },
  computed: {
    // ...this.$store.getters.Themes.mapState(['nowThemeInfo'])
  },
  methods: {
    changeTheme (type) {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      // this.$store.commit('upDate', {themeType: type})
      window.document.documentElement.setAttribute('data-theme', this.theme)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.hello {
  .list-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    @include text-color(text-1);
    @include bg-color(text-2);
  }
}
</style>
