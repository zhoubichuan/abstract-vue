<template>
  <el-row>
    <template v-if="layout === 'single'">
      <el-col :span="10">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        &nbsp;
      </el-col>
      <el-col :span="10">
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </template>
    <template v-else-if="layout==='double'">
      <el-col :span="24">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </template>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
  
      }
    },
    props: {
      layout: {
        type: String,
        default: 'single'
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
    }
    }
  }
</script>