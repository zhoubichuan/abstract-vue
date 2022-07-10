import request from '@/util/request'
// 数据实体列表查询
export function getAttributeList (data) {
  return request({
    url: '/attribute/getAttributeList',
    method: 'post',
    data
  })
}
// 获取数据实体详情
export function getAttributeDetail (id) {
  return request({
    url: '/attribute/getAttributeDetail',
    method: 'post',
    data: {id}
  })
}
// 创建数据实体
export function createAttribute (data) {
  return request({
    url: '/attribute/createAttribute',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateAttribute (data) {
  return request({
    url: '/attribute/updateAttribute',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteAttribute (data) {
  return request({
    url: '/attribute/deleteAttribute',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getAttributeBaseAttrList (id) {
  return request({
    url: '/attribute/getAttributeBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getAttributeBaseAttrDetail (id) {
  return request({
    url: '/attribute/getAttributeBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createAttributeBaseAttr (data) {
  return request({
    url: '/attribute/createAttributeBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateAttributeBaseAttr (data) {
  return request({
    url: '/attribute/updateAttributeBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateAttributeBaseAttrDelete (data) {
  return request({
    url: '/attribute/updateAttributeBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getAttributeExtendAttrList (id) {
  return request({
    url: '/attribute/getAttributeExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getAttributeExtendAttrDetail (id) {
  return request({
    url: '/attribute/getAttributeExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createAttributeExtendAttr (data) {
  return request({
    url: '/attribute/createAttributeExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateAttributeExtendAttr (data) {
  return request({
    url: '/attribute/updateAttributeExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateAttributeExtendAttrDelete (data) {
  return request({
    url: '/attribute/updateAttributeExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getAttributeParentAttrList (id) {
  return request({
    url: '/attribute/getAttributeParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getAttributeParentAttrDetail (id) {
  return request({
    url: '/attribute/getAttributeParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
