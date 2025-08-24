import request from '@/utils/request'
// 获取菜单
export async function getMeuns () {
  let { time, data } = require('./menus.json')
  if (localStorage.getItem('menus-time') !== time) {
    localStorage.setItem('menus', JSON.stringify(data))
    localStorage.setItem('menus-time', time)
  }
}
