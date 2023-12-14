<template>
  <div class="page">
    <div class="top">
      <!-- <div class="title">
        【{{ options1.find((item) => item.value === value1).name }}】-【{{
          options3.find((item) => item.value === value3).name
        }}-{{ options2.find((item) => item.value === value2).name }}】
      </div> -->
      <el-select v-model="value3" placeholder="请选择">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-cascader
        style="width: 50%"
        v-model="value"
        :options="options4"
        :props="{ checkStrictly: true, label: 'name' }"
        @change="handleChange"
      ></el-cascader>
    </div>
    <div class="content">
      <div class="box" v-for="(item, index) in options" :key="index">
        <div class="title">
          {{ item.name }}
        </div>
        <div class="view">
          <div
            class="img"
            v-for="(img, index) in item.images || []"
            :key="index"
          >
            <img :src="img" alt="" />
          </div>
          <div>{{ item.descript }}</div>
          <div>{{ item.detail }}</div>
        </div>
        <div class="type" v-for="(type, index) in item.children" :key="index">
          <div class="title">{{ item.name }} / {{ type.name }}</div>
          <div class="view">
            <div
              class="img"
              v-for="(img, index) in type.images || []"
              :key="index"
            >
              <img :src="img" alt="" />
            </div>
            <div>{{ type.descript }}</div>
            <div>{{ type.detail }}</div>
          </div>
          <div
            class="detail"
            v-for="(detail, index) in type.children"
            :key="index"
          >
            <div class="title">
              {{ item.name }} / {{ type.name }} / {{ detail.name }}
            </div>

            <div class="view">
              <div
                class="img"
                v-for="(img, index) in detail.images || []"
                :key="index"
              >
                <img :src="img" alt="" />
                <div>{{ detail.descript }}</div>
                <div>{{ detail.detail }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data () {
    return {
      options3: [],
      value3: '1',
      options2: [],
      value2: '3',
      options1: [],
      value1: '3',
      value: ['1'],
      options: [],
      options4: []
    }
  },
  mounted () {
    this.getList(1)
    // this.getList(2);
    // this.getList(3);
    this.getList2(4)
  },
  methods: {
    async getList (key) {
      let types = await this.$api.getTypeEnum({})
      let fields = await this.$api.getFieldEnum({})
      let datas = await this.$api.getDataEnum({})
      if (types) {
        this.options4 = this.options = types.data.map((t) => {
          t.children = fields.data.filter((f) => {
            if (f.type === t.value) {
              f.children = datas.data.filter((d) => d.type === f.value)
              return true
            }
            return false
          })
          return t
        })
        console.log(this.options)
      }
    },
    async getList2 (key) {
      let res = await this.$api.getTypeEnum({
        key: 2,
        type: ['student', 'studentType', 'studentCode', 'stage'][key - 1]
      })
      if (res) {
        this['options' + key] = res.data
      }
    },
    handleChange (value) {
      let data = null
      _.cloneDeep(options).forEach((item) => {
        if (item.value === value[0]) {
          data = [JSON.parse(JSON.stringify(item))]
        }
      })
      if (value.length === 2) {
        data[0].children = data[0].children.filter(
          (item) => item.value === value[1]
        )
      } else if (value.length === 3) {
        data[0].children = data[0].children.filter(
          (item) => item.value === value[1]
        )
        data[0].children[0].children = data[0].children[0].children.filter(
          (item) => item.value === value[2]
        )
      }
      this.options.splice(0, this.options.length, ...data)
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  .top {
    display: flex;
    align-items: center;
    .title {
      font-weight: bold;
      font-size: 20px;
      width: 50%;
    }
  }
  .content {
    max-height: calc(100% - 50px);
    overflow: hidden auto;
    .title {
      &::before {
        content: "";
        width: 10px;
        height: 10px;
        background: pink;
        border-radius: 5px;
        display: inline-block;
      }
      padding: 6px 0;
      font-weight: bold;
    }
    .view {
      display: flex;
      .img {
        width: calc(20% - 10px);
        padding: 0 5px;
        img {
          width: 100%;
        }
      }
    }
    .box {
      .type {
        .detail {
        }
      }
    }
  }
}
</style>