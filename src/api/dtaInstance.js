import request from '@/util/request'
// 数据实体列表查询
export function getDataInstanceList (data) {
  return request({
    url: '/dataInstance/getDataInstanceList',
    method: 'post',
    data
  })
}
// 获取数据实体详情
export function getDataInstanceDetail (id) {
  return request({
    url: '/dataInstance/getDataInstanceDetail',
    method: 'post',
    data: {id}
  })
}
// 创建数据实体
export function createDataInstance (data) {
  return request({
    url: '/dataInstance/createDataInstance',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateDataInstance (data) {
  return request({
    url: '/dataInstance/updateDataInstance',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteDataInstance (data) {
  return request({
    url: '/dataInstance/deleteDataInstance',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getDataInstanceBaseAttrList (id) {
  return request({
    url: '/dataInstance/getDataInstanceBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getDataInstanceBaseAttrDetail (id) {
  return request({
    url: '/dataInstance/getDataInstanceBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createDataInstanceBaseAttr (data) {
  return request({
    url: '/dataInstance/createDataInstanceBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateDataInstanceBaseAttr (data) {
  return request({
    url: '/dataInstance/updateDataInstanceBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateDataInstanceBaseAttrDelete (data) {
  return request({
    url: '/dataInstance/updateDataInstanceBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getDataInstanceExtendAttrList (id) {
  return request({
    url: '/dataInstance/getDataInstanceExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getDataInstanceExtendAttrDetail (id) {
  return request({
    url: '/dataInstance/getDataInstanceExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createDataInstanceExtendAttr (data) {
  return request({
    url: '/dataInstance/createDataInstanceExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateDataInstanceExtendAttr (data) {
  return request({
    url: '/dataInstance/updateDataInstanceExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateDataInstanceExtendAttrDelete (data) {
  return request({
    url: '/dataInstance/updateDataInstanceExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getDataInstanceParentAttrList (id) {
  return request({
    url: '/dataInstance/getDataInstanceParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getDataInstanceParentAttrDetail (id) {
  return request({
    url: '/dataInstance/getDataInstanceParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
