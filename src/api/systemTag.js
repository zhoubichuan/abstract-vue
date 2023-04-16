import request from '@/util/request'
// 数据实体列表查询
export function getTagList (data) {
  return request({
    url: '/api/systemBaseInfo/getTagList',
    method: 'post',
    data
  })
}
// 获取数据实体详情
export function getTagDetail (id) {
  return request({
    url: '/api/systemBaseInfo/getTagDetail',
    method: 'post',
    data: {id}
  })
}
// 创建数据实体
export function createTag (data) {
  return request({
    url: '/api/systemBaseInfo/createTag',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateTag (data) {
  return request({
    url: '/api/systemBaseInfo/updateTag',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteTag (data) {
  return request({
    url: '/api/systemBaseInfo/deleteTag',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getTagBaseAttrList (id) {
  return request({
    url: '/api/systemBaseInfo/getTagBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getTagBaseAttrDetail (id) {
  return request({
    url: '/api/systemBaseInfo/getTagBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createTagBaseAttr (data) {
  return request({
    url: '/api/systemBaseInfo/createTagBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateTagBaseAttr (data) {
  return request({
    url: '/api/systemBaseInfo/updateTagBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateTagBaseAttrDelete (data) {
  return request({
    url: '/api/systemBaseInfo/updateTagBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getTagExtendAttrList (id) {
  return request({
    url: '/api/systemBaseInfo/getTagExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getTagExtendAttrDetail (id) {
  return request({
    url: '/api/systemBaseInfo/getTagExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createTagExtendAttr (data) {
  return request({
    url: '/api/systemBaseInfo/createTagExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateTagExtendAttr (data) {
  return request({
    url: '/api/systemBaseInfo/updateTagExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateTagExtendAttrDelete (data) {
  return request({
    url: '/api/systemBaseInfo/updateTagExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getTagParentAttrList (id) {
  return request({
    url: '/api/systemBaseInfo/getTagParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getTagParentAttrDetail (id) {
  return request({
    url: '/api/systemBaseInfo/getTagParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
