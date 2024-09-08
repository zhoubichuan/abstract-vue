import request from '@/utils/request'

// 列表查询
export function getUserListApi (data) {
  return request({
    url: '/api/user/list',
    method: 'get',
    params: data
  })
}
// 查询详情
export function getUserDetailApi (id) {
  return request({
    url: '/api/user/' + id,
    method: 'get'
  })
}
// 创建数据
export function createUserApi (data) {
  return request({
    url: '/api/user/create',
    method: 'post',
    data
  })
}
// 更新数据
export function updateUserApi (id, data) {
  return request({
    url: '/api/user/' + id,
    method: 'put',
    data
  })
}
// 删除数据
export function deleteUserApi (id) {
  return request({
    url: '/api/user/' + id,
    method: 'delete',
    data: {}
  })
}
// 批量删除
export function pathDeleteUserApi (data) {
  return request({
    url: '/api/user/pathdelete',
    method: 'delete',
    data
  })
}
