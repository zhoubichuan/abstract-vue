<template>
  <el-container class="admin">
    <el-aside width="auto">
      <el-row>
        <el-col :span="24">
          <el-menu
            :collapse="isCollapse"
            :default-active="navActive"
            :default-openeds="openeds"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2f4050"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu
              v-for="item in menus"
              :key="item.index"
              :index="item.index"
            >
              <template slot="title">
                <i :class="item.ico"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <template v-for="childItem in item.childrens">
                  <!--  v-if="childItem.authority && childItem.authority.includes($store.state.role)" -->
                  <el-menu-item
                    :key="childItem.index"
                    :index="childItem.index"
                    :route="childItem.route"
                  >
                    {{ childItem.title }}
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <transition name="fade" mode="out-in" appear>
      <el-container>
        <el-header>
          <el-row type="flex" justify="space-between">
            <el-col :span="6">
              <el-radio-group
                v-model="isCollapse"
                style="margin: 10px 0"
                size="mini"
              >
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
              </el-radio-group>
            </el-col>
            <el-col :sm="{ span: 5, offset: 13 }" :lg="{ span: 4, offset: 15 }">
              <div class="profile">
                <img
                  :src="avatarUrl"
                  alt="logo"
                  width="42"
                  height="42"
                  v-if="avatarUrl"
                />
                <img
                  src="./../assets/img/a1.jpg"
                  alt="logo"
                  width="42"
                  height="42"
                  v-else
                />
              </div>
              <el-dropdown @command="loginOut">
                <span class="el-dropdown-link">
                  {{ formatRole
                  }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <!-- <el-dropdown-item command="1">基本资料</el-dropdown-item>
                    <el-dropdown-item command="2">修改密码</el-dropdown-item> -->
                  <el-dropdown-item command="3">退出</el-dropdown-item>
                </el-dropdown-menu>
                <h4 class="login-name">{{ username }}</h4>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </transition>
  </el-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { delCookie } from '../util/cookies'
export default {
  data () {
    return {
      menus: [
        {
          index: 'user',
          ico: 'el-icon-info',
          title: '用户空间',
          childrens: [
            {
              index: 'downLoad',
              route: '/admin/downLoad',
              title: '下载管理'
            },
            {
              index: 'UserLists',
              route: '/admin/UserLists',
              title: '用户列表'
            },
            {
              index: 'UserDetail',
              route: '/admin/UserDetail',
              title: '用户详情'
            }
          ]
        },
        {
          index: 'dataModel',
          ico: 'el-icon-s-opportunity',
          title: '数据模型管理',
          childrens: [
            {
              index: 'dataEntity',
              route: '/admin/dataEntity',
              authority: [50],
              title: '数据实体'
            },
            {
              index: 'relationEntity',
              route: '/admin/relationEntity',
              authority: [50],
              title: '关系实体'
            },
            {
              index: 'dataInstance',
              route: '/admin/dataInstance',
              authority: [50],
              title: '数据实例'
            },
            {
              index: 'dataGraph',
              route: '/admin/dataGraph',
              authority: [50],
              title: '数据图谱'
            }
          ]
        },
        {
          index: 'systemBaseInfo',
          ico: 'el-icon-menu',
          title: '系统基本信息',
          childrens: [
            {
              index: 'tags',
              route: '/admin/tags',
              authority: [50],
              title: '标签管理'
            },
            {
              index: 'enumManager',
              route: '/admin/enumManager',
              authority: [50],
              title: '枚举管理'
            },
            {
              index: 'jurisManager',
              route: '/admin/jurisManager',
              authority: [50],
              title: '权限管理'
            },
            {
              index: 'authManager',
              route: '/admin/authManager',
              authority: [50],
              title: '授权管理'
            }
          ]
        },
        {
          index: '1',
          ico: 'el-icon-info',
          title: '搜索服务',
          childrens: [
            {
              index: '1-1',
              route: '/admin/userList',
              title: '员工管理',
              authority: [50]
            }
          ]
        },
        {
          index: '2',
          ico: 'el-icon-share',
          title: '订单管理',
          childrens: [
            {
              index: '2-1',
              route: '/order/list',
              title: '订单列表',
              authority: [50]
            },
            {
              index: '2-2',
              route: '/order/tag',
              title: '订单标签',
              authority: [50]
            },
            {
              index: '2-3',
              route: '/product/list',
              title: '产品列表',
              authority: [50]
            }
          ]
        },
        {
          index: '3',
          ico: 'el-icon-star-on',
          title: '客户管理',
          childrens: [
            {
              index: '3-1',
              route: '/client/list',
              title: '客户列表',
              authority: [50]
            },
            {
              index: '3-2',
              route: '/client/type',
              title: '客户类型',
              authority: [50]
            },
            {
              index: '3-3',
              route: '/client/pay',
              title: '汇款方式',
              authority: [50]
            }
          ]
        }
      ],
      isCollapse: false,
      openeds: [1],
      navActive: 'dataEntity'
    }
  },
  computed: {
    ...mapState(['username', 'avatarUrl', 'infoId']),
    ...mapGetters(['formatRole'])
  },
  methods: {
    loginOut (command) {
      console.log('command  ' + command)
      if (command === '3') {
        this.$ajax.get('/users/logout').then((res) => {
          if (res.data.status === '1') {
            console.log(res.data.status)
            this.$store.commit('SET_USERID', '')
            this.$store.commit('SET_USERNAME', '')
            this.$store.commit('SET_AVATAR', '')
            this.$store.commit('SET_INFOID', '')
            this.$store.commit('SET_ROLE', '')
            delCookie('sessionId')
            this.$router.push('/')
          }
        })
      }
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleCommand (command) {
      if (command === '1') {
        this.$router.push(`/admin/userInfo/${this.infoId}`)
      } else if (command === '3') {
        this.$ajax.get('/users/logout').then((res) => {
          console.log(res)
          if (res.data.status === '1') {
            console.log(res.data.status)
            this.$store.commit('SET_USERID', '')
            this.$store.commit('SET_USERNAME', '')
            this.$store.commit('SET_AVATAR', '')
            this.$store.commit('SET_INFOID', '')
            this.$store.commit('SET_ROLE', '')
            delCookie('sessionId')
            this.$router.push('/')
          }
        })
      }
    }
  },
  watch: {
    $route (to, from) {
      switch (to.path.slice(7)) {
        case 'userList':
          this.navActive = '1-1'
          break
        case '/order/add':
          this.navActive = '2-1'
          break
        case '/order/list':
          this.navActive = '2-2'
          break

        case '':
          this.navActive = ''
          break
        default:
          this.navActive = '1-1'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.el-dropdown {
  line-height: 0;
  padding-top: 30px;
}

.login-name {
  position: absolute;
  top: 20px;
  left: 0;
  line-height: 0;
}

.el-dropdown-link {
  line-height: 0;
}

.profile {
  display: inline-block;
  height: 50px;
  margin-top: 10px;
  vertical-align: top;
}
.profile img {
  border-radius: 50%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: 100vh;
  border: none;
}
.el-header {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #f3f3f4;
  color: #333;
  overflow: hidden;
  padding: 0;
  margin: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

.backToIndex {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  a: {
    color: #909399;
  }
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
} */
</style>
