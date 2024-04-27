import request from '@/utils/request'
// 列表查询
export function getTemplateList (data) {
  return request({
    url: '/api/template/list',
    method: 'post',
    data
  })
}
// 实体详情
export function getTemplateDetail (id) {
  return request({
    url: '/api/template/' + id,
    method: 'get'
  })
}
// 创建数据
export function createTemplate (data) {
  return request({
    url: '/api/template/create',
    method: 'post',
    data
  })
}
// 更新数据
export function updateTemplate (id, data) {
  return request({
    url: '/api/template/' + id,
    method: 'put',
    data
  })
}
// 删除数据
export function deleteTemplate (id) {
  return request({
    url: '/api/template/' + id,
    method: 'delete',
    data: {}
  })
}
// 批量删除
export function pathDelete (data) {
  return request({
    url: '/api/template/pathdelete',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getTemplateBaseAttrList (id) {
  return request({
    url: '/api/template/getTemplateBaseAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性详情查询
export function getTemplateBaseAttrDetail (id) {
  return request({
    url: '/api/template/getTemplateBaseAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体基本属性创建
export function createTemplateBaseAttr (data) {
  return request({
    url: '/api/template/createTemplateBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateTemplateBaseAttr (data) {
  return request({
    url: '/api/template/updateTemplateBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateTemplateBaseAttrDelete (data) {
  return request({
    url: '/api/template/updateTemplateBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getTemplateExtendAttrList (id) {
  return request({
    url: '/api/template/getTemplateExtendAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性详情查询
export function getTemplateExtendAttrDetail (id) {
  return request({
    url: '/api/template/getTemplateExtendAttrDetail',
    method: 'get',
    params: {id}
  })
}

// 数据实体扩展属性创建
export function createTemplateExtendAttr (data) {
  return request({
    url: '/api/template/createTemplateExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateTemplateExtendAttr (data) {
  return request({
    url: '/api/template/updateTemplateExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateTemplateExtendAttrDelete (data) {
  return request({
    url: '/api/template/updateTemplateExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getTemplateParentAttrList (id) {
  return request({
    url: '/api/template/getTemplateParentAttrList',
    method: 'get',
    params: {id}
  })
}

// 数据实体父模型属性列表查询
export function getTemplateParentAttrDetail (id) {
  return request({
    url: '/api/template/getTemplateParentAttrDetail',
    method: 'get',
    params: {id}
  })
}
