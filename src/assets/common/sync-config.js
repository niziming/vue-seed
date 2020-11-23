// 定义配置变量
let config

// 定义同步获取json文件数据方法
let syncGetJsonData = function (url) {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
  // 读取完成
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4) {
  //     // http状态码,用来判断是否成功接受并返回文件
  //     if (xhr.status === 200) {
  //       console.log(JSON.parse(xhr.responseText))
  //       return JSON.parse(xhr.responseText)
  //     } else {
  //       alert('Json get error')
  //     }
  //   }
  // }
}

config = syncGetJsonData('static/config.json?r=' + Math.random()) // 随机参数用于防止取缓存

export default config
