const ROLE_MAP = {
  0: '普通用户',
  1: '邮件激活后的用户',
  2: '会计',
  3: '采购',
  6: '国内销售',
  8: '国外销售',
  10: '管理',
  50: '超级管理员'
}

const getters = {
  formatRole: state => ROLE_MAP[state.role] || ''
}

export default getters
