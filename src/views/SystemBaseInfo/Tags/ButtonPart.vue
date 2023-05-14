<template>
  <web-button-group class="button-part" justify="start">
    <web-button @click="handleCreate" type="primary">创建</web-button>
    <web-button @click="handleDelete">删除</web-button>
  </web-button-group>
</template>
<script>
export default {
    data () {
      return {
      }
    },
    watch: {

    },
    methods: {
      handleCreate () {
        this.$emit('handleCreate')
      },
      handleDelete () {
        this.$emit('handleDelete')
      },
      handlePreRelease () {
        this.$emit('handlePreRelease')
      },
      handleRelease () {
        this.$emit('handleRelease')
      },
      handleRevise () {
        this.$emit('handleRevise')
      },
      handleToVoid () {
        this.$emit('handleToVoid')
      },
      handleInvalid () {
        this.$emit('handleInvalid')
      }
    }
}
</script>

<style scoped lang="scss">
.content {
  height:100%;
  display:flex;
  flex-direction: column;
}
.search-part{
  flex-basis: 20px;
}
.button-part{
  flex-basis: 20px;
}
.table-part{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>