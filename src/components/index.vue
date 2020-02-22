<template>
  <div class="hello">
    <h1 style="margin: 0; padding: 10px">胡言乱语生成器0.2.13</h1>
    <el-row>
      <!--编码 START-->
      <el-col>
        <el-col :offset="1" :span="22">
          <el-alert
            style="margin: 0 0 10px 0"
            title="编码"
            :closable="false"
            type="warning">
          </el-alert>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
            v-model="codingIn">
          </el-input>
        </el-col>
        <el-col :offset="2" :span="10">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="结果显示"
            v-model="codingOut">
          </el-input>
          <div style="float: right; margin: 10px 0 10px 0">
            <el-button type="primary" @click="coding(codingIn)">编码生成</el-button>
          </div>
        </el-col>
      </el-col>
      <!--编码 END-->
      <!--解码 START-->
      <el-col>
        <el-col :offset="1" :span="22">
          <el-alert
            style="margin: 0 0 10px 0"
            title="解码 (功能未实现)"
            :closable="false"
            type="success">
          </el-alert>
        </el-col>
        <el-col :offset="1" :span="10">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
            v-model="decodingIn">
          </el-input>
        </el-col>
        <el-col :offset="2" :span="10">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="结果显示"
            v-model="decodingOut">
          </el-input>
        </el-col>
        <el-col :span="23">
          <div style="float: right; margin: 10px 0 10px 0">
            <el-button type="primary" @click="decoding(decodingIn)">解码生成</el-button>
          </div>
        </el-col>
      </el-col>
      <!--解码 END-->
      <el-col style="text-align: left" :offset="1" :span="22">
        <el-alert
          style="margin: 0 0 10px 0"
          title="代码"
          :closable="false"
          type="success">
        </el-alert>
        <codemirror ref="myCm" v-model="code" :options="cmOptions"></codemirror>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/base16-dark.css'

export default {
  name: 'index',
  components: { codemirror },
  data () {
    return {
      codingIn: '',
      codingOut: '',
      decodingIn: '',
      decodingOut: '',
      code: `         // 代码如下
        const coding = (val) => {
          let buffer = ''
          let textArray = val.split(/[ !\\\\?',;\\\\.，。；、\\\\！]+/)
          let symbol = val.match(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g).join('')
          let symbolArray = symbol.split('')
          let i = 0
          textArray.forEach(item => {
            let shuffle = this.shuffleString(item.split(''))
            if (symbolArray[i] === undefined) buffer += shuffle.join('')
            else buffer += shuffle.join('') + symbolArray[i]
            ++i
          })
          this.codingOut = buffer
        }

        const shuffleString = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          return array
        }

        export default {
          coding,
          shuffleString
        }
      `,
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        smartIndent: true// 自动缩进是否开启
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    onCmReady (cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus (cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange (newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    },
    coding (val) {
      let buffer = ''
      let textArray = val.split(/[ !\\?',;\\.，。；、\\！]+/)
      if (textArray.length === 1) {
        this.$message.warning('请输入超过一句的内容!')
        return
      }
      let symbol = val.match(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g).join('')
      let symbolArray = symbol.split('')
      let i = 0
      textArray.forEach(item => {
        let shuffle = this.shuffleString(item.split(''))
        if (symbolArray[i] === undefined) buffer += shuffle.join('')
        else buffer += shuffle.join('') + symbolArray[i]
        ++i
      })
      this.codingOut = buffer
    },
    shuffleString (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    decoding () {
    }
  },
  computed: {
    count: {
      get () {
        return this.$store.getters.Search.count
      }
    },
    codemirror () {
      return this.$refs.myCm.codemirror
    }
  },
  mounted () {
    // 初始化
    console.log('this is current codemirror object', this.codemirror)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello {
    width: 100vw;
    height: 100vh;
  }
</style>
