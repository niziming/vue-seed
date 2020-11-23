// 定义配置变量
let config

// 定义同步获取json文件数据方法
let syncGetJsonData = function (url) {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
}

config = syncGetJsonData('static/config.json?r=' + Math.random()) // 随机参数用于防止取缓存

export default config
