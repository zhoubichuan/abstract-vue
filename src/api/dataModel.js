import request from '@/util/request'
// 数据实体列表查询
export function getDataEntityList (data) {
  return request({
    url: '/dataModel/getDataEntityList',
    method: 'post',
    data
  })
}
// 获取数据实体详情
export function getDataEntityDetail (id) {
  return request({
    url: '/dataModel/getDataEntityDetail',
    method: 'post',
    data: {id}
  })
}
// 创建数据实体
export function createDataEntity (data) {
  return request({
    url: '/dataModel/createDataEntity',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateDataEntity (data) {
  return request({
    url: '/dataModel/updateDataEntity',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteDataEntity (data) {
  return request({
    url: '/dataModel/deleteDataEntity',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getDataEntityBaseAttrList (id) {
  return request({
    url: '/dataModel/getDataEntityBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getDataEntityBaseAttrDetail (id) {
  return request({
    url: '/dataModel/getDataEntityBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createDataEntityBaseAttr (data) {
  return request({
    url: '/dataModel/createDataEntityBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateDataEntityBaseAttr (data) {
  return request({
    url: '/dataModel/updateDataEntityBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateDataEntityBaseAttrDelete (data) {
  return request({
    url: '/dataModel/updateDataEntityBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getDataEntityExtendAttrList (id) {
  return request({
    url: '/dataModel/getDataEntityExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getDataEntityExtendAttrDetail (id) {
  return request({
    url: '/dataModel/getDataEntityExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createDataEntityExtendAttr (data) {
  return request({
    url: '/dataModel/createDataEntityExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateDataEntityExtendAttr (data) {
  return request({
    url: '/dataModel/updateDataEntityExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateDataEntityExtendAttrDelete (data) {
  return request({
    url: '/dataModel/updateDataEntityExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getDataEntityParentAttrList (id) {
  return request({
    url: '/dataModel/getDataEntityParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getDataEntityParentAttrDetail (id) {
  return request({
    url: '/dataModel/getDataEntityParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
