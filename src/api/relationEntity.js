import request from '@/util/request'
// 数据实体列表查询
export function getRelationEntityList (data) {
  return request({
    url: '/api/relationEntity/getRelationEntityList',
    method: 'post',
    data
  })
}
// 获取数据实体详情
export function getRelationEntityDetail (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityDetail',
    method: 'post',
    data: {id}
  })
}
// 创建数据实体
export function createRelationEntity (data) {
  return request({
    url: '/api/relationEntity/createRelationEntity',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateRelationEntity (data) {
  return request({
    url: '/api/relationEntity/updateRelationEntity',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteRelationEntity (data) {
  return request({
    url: '/api/relationEntity/deleteRelationEntity',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getRelationEntityBaseAttrList (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getRelationEntityBaseAttrDetail (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createRelationEntityBaseAttr (data) {
  return request({
    url: '/api/relationEntity/createRelationEntityBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateRelationEntityBaseAttr (data) {
  return request({
    url: '/api/relationEntity/updateRelationEntityBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateRelationEntityBaseAttrDelete (data) {
  return request({
    url: '/api/relationEntity/updateRelationEntityBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getRelationEntityExtendAttrList (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getRelationEntityExtendAttrDetail (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createRelationEntityExtendAttr (data) {
  return request({
    url: '/api/relationEntity/createRelationEntityExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateRelationEntityExtendAttr (data) {
  return request({
    url: '/api/relationEntity/updateRelationEntityExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateRelationEntityExtendAttrDelete (data) {
  return request({
    url: '/api/relationEntity/updateRelationEntityExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getRelationEntityParentAttrList (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getRelationEntityParentAttrDetail (id) {
  return request({
    url: '/api/relationEntity/getRelationEntityParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
