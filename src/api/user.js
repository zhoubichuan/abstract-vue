import request from '@/utils/request'

// 列表查询
export function getUserListApi (data) {
  return request({
    url: '/api/user/list',
    method: 'get',
    data
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
export function pathDeleteApi (data) {
  return request({
    url: '/api/user/pathdelete',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getUserBaseAttrListApi (id) {
  return request({
    url: '/api/user/getUserBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getUserBaseAttrDetailApi (id) {
  return request({
    url: '/api/user/getUserBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createUserBaseAttrApi (data) {
  return request({
    url: '/api/user/createUserBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateUserBaseAttrApi (data) {
  return request({
    url: '/api/user/updateUserBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateUserBaseAttrDeleteApi (data) {
  return request({
    url: '/api/user/updateUserBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getUserExtendAttrListApi (id) {
  return request({
    url: '/api/user/getUserExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getUserExtendAttrDetailApi (id) {
  return request({
    url: '/api/user/getUserExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createUserExtendAttrApi (data) {
  return request({
    url: '/api/user/createUserExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateUserExtendAttrApi (data) {
  return request({
    url: '/api/user/updateUserExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateUserExtendAttrDeleteApi (data) {
  return request({
    url: '/api/user/updateUserExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getUserParentAttrListApi (id) {
  return request({
    url: '/api/user/getUserParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getUserParentAttrDetailApi (id) {
  return request({
    url: '/api/user/getUserParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
