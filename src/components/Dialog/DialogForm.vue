<template>
  <el-dialog
   center 
   title="收货地址"
   modal-append-to-body
   :append-to-body="true"
   :destroy-on-close="true"
   :close-on-press-escape="false"
   :close-on-click-modal="false"
    :visible.sync="dialogFormVisible">
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <me-button @click="dialogFormVisible = false">取 消</me-button>
      <me-button type="primary" @click="dialogFormVisible = false">确 定</me-button>
    </div>
  </el-dialog>
</template>
<script>

export default {
  name: 'DialogForm',
  props: {
    value: {
      tyep: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogFormVisible: false
    }
  },
  methods: {
    handleCreate () {
      this.dialogFormVisible = true
    }
  },
  install (Vue) {
    Vue.component('DialogForm', this)
  }
}
</script>