import request from '@/util/request'
// 模型属性列表查询
export function getAttributeList (data) {
  return request({
    url: '/api/attribute',
    method: 'get',
    params: data
  })
}
// 获取模型属性详情
export function getAttributeDetail (id) {
  return request({
    url: '/api/attribute/' + id,
    method: 'post',
    data: { id }
  })
}
// 创建模型属性
export function createAttribute (data) {
  return request({
    url: '/api/attribute',
    method: 'post',
    data
  })
}
// 更新模型属性
export function updateAttribute (data) {
  return request({
    url: '/api/attribute',
    method: 'put',
    data
  })
}
// 删除模型属性
export function deleteAttribute (data) {
  return request({
    url: '/api/attribute',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getAttributeBaseAttrList (id) {
  return request({
    url: '/api/attribute/getAttributeBaseAttrList',
    method: 'get',
    params: { id }
  })
}

// 数据实体基本属性详情查询
export function getAttributeBaseAttrDetail (id) {
  return request({
    url: '/api/attribute/getAttributeBaseAttrDetail',
    method: 'get',
    params: { id }
  })
}

// 数据实体基本属性创建
export function createAttributeBaseAttr (data) {
  return request({
    url: '/api/attribute/createAttributeBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateAttributeBaseAttr (data) {
  return request({
    url: '/api/attribute/updateAttributeBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateAttributeBaseAttrDelete (data) {
  return request({
    url: '/api/attribute/updateAttributeBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getAttributeExtendAttrList (id) {
  return request({
    url: '/api/attribute/getAttributeExtendAttrList',
    method: 'get',
    params: { id }
  })
}

// 数据实体扩展属性详情查询
export function getAttributeExtendAttrDetail (id) {
  return request({
    url: '/api/attribute/getAttributeExtendAttrDetail',
    method: 'get',
    params: { id }
  })
}

// 数据实体扩展属性创建
export function createAttributeExtendAttr (data) {
  return request({
    url: '/api/attribute/createAttributeExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateAttributeExtendAttr (data) {
  return request({
    url: '/api/attribute/updateAttributeExtendAttr',
    method: 'update',
    data
  })
}

// 数据实体基本属性删除
export function updateAttributeExtendAttrDelete (data) {
  return request({
    url: '/api/attribute/updateAttributeExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getAttributeParentAttrList (id) {
  return request({
    url: '/api/attribute/getAttributeParentAttrList',
    method: 'get',
    params: { id }
  })
}

// 数据实体父模型属性列表查询
export function getAttributeParentAttrDetail (id) {
  return request({
    url: '/api/attribute/getAttributeParentAttrDetail',
    method: 'get',
    params: { id }
  })
}
// 模型属性列表查询
export function getTypeEnum ({ key, ...rest }) {
  return request({
    url: '/api/list/type/1',
    method: 'get',
    params: {
      ...rest
    }
  })
}
// 模型属性列表查询
export function getFieldEnum ({ key, ...rest }) {
  return request({
    url: '/api/list/field/1',
    method: 'get',
    params: {
      ...rest
    }
  })
}
// 模型属性列表查询
export function getDataEnum ({ key, ...rest }) {
  return request({
    url: '/api/list/data/1',
    method: 'get',
    params: {
      ...rest
    }
  })
}
