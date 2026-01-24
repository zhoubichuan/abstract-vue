<template>
  <div class="wrap">
    <div class="box-images">
      <div
        class="item"
        v-for="item in items.fileName"
        :draggable="true"
        @dragstart="dragstart(item)"
        @drop="drop(item)"
        @dragover="dragover"
        :key="item.name"
      >
        {{ item.name }}
        <img
          :src="
            link + items.foldName[0] + '/' + item.name + '.' + items.fileType[0]
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Child',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      link: '',
      items: {
        path: '',
        foldName: [],
        fileType: [],
        type: 'edit',
        fileName: []
      },
      preIndex: 0
    }
  },
  methods: {
    async handleList () {
      const files = await this.$api.file({
        ...this.items,
        type: 'read',
        fileName: undefined
      })
      this.items.fileName = files.map((item, index) => {
        return {
          name: item.split('.')[0],
          rename: index + 1,
          index: index + 1
        }
      })
    },
    dragstart (item) {
      this.preIndex = item
    },
    async drop (item) {
      this.items.fileName.splice(this.preIndex.index - 1, 1, {
        ...item,
        index: this.preIndex.index,
        rename: this.preIndex.index
      })
      this.items.fileName.splice(item.index - 1, 1, {
        ...this.preIndex,
        index: item.index,
        rename: item.index
      })
      this.preIndex.index = 0
      await this.$api.file(JSON.parse(JSON.stringify(this.items)))
      await this.handleList()
    },
    dragover (e) {
      e.preventDefault()
    }
  },
  mounted () {
    this.link = localStorage.getItem('link')
    this.items.path = localStorage.getItem('path')
    localStorage.getItem('foldName') &&
      this.items.foldName.splice(0, this.items.foldName.length, this.name)
    localStorage.getItem('fileType') &&
      this.items.fileType.splice(
        0,
        this.items.fileType.length,
        ...localStorage.getItem('fileType').split(',')
      )
  }
}
</script>

<style>
.wrap {
  width: 500px;
  height: 800px;
}

.wrap .box-images {
  width: 500px;
  height: 500px;
}

.wrap .box-images .item:nth-child(2n) {
  width: 33.33%;
  height: 33.33%;
  background-color: lightblue;
  float: left;
}

.wrap .box-images .item:nth-child(2n + 1) {
  width: 33.33%;
  height: 33.33%;
  background-color: lightcyan;
  float: left;
}
.wrap img {
  max-height: 100%;
  max-width: 100%;
}
</style>