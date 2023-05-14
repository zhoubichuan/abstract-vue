<template>
  <div class="content">
    <!-- 右侧滑窗 -->
    <web-slider-right v-model="sliderPage">
      <template slot-scope="pageData">
        <slider-tabs :pageData="pageData.data"></slider-tabs>
      </template>
    </web-slider-right>
    <!-- 搜索 -->
    <search-part v-model="condition" @handleSearch="handleSearch">
    </search-part>
    <!-- 按钮 -->
    <button-part
      @handleCreate="handleCreate"
      @handleDelete="handleDelete"
      @handlePreRelease="handlePreRelease"
      @handleRelease="handleRelease"
      @handleRevise="handleRevise"
      @handleToVoid="handleToVoid"
      @handleInvalid="handleInvalid"
    >
    </button-part>
    <!-- 数据展示 -->
    <table-part
      ref="entityTable"
      v-model="selects"
      :searchConditon="condition"
      @showViewModal="showViewModal"
      @showEditModal="showEditModal"
      @pageChange="pageChange"
      @handleSearch="handleSearch"
    >
    </table-part>
  </div>
</template>
<script>
export default {
  name: "Tag",
  components: {
    SearchPart: () => import("./SearchPart"),
    ButtonPart: () => import("./ButtonPart"),
    TablePart: () => import("./TablePart"),
    SliderTabs: () => import("./SliderTabs"),
  },
  data() {
    return {
      condition: {},
      page: {},
      selects: [],
      sliderRightIndex: 0,
      sliderPage: [],
      loadingFlag: false,
      startLoad: true,
      addModalFlag: false,
    };
  },
  watch: {
    condition: {
      handler(newVal, oldVal) {
        if (this.startLoad) {
          this.handleSearch(this.condition);
          this.startLoad = false;
        }
      },
      deep: true,
    },
  },
  beforeCreate() {
    this.$on("handleSearch", () => {
      this.handleSearch();
    });
  },
  mounted() {
    setTimeout(() => {
      this.handleSearch(this.condition);
    }, 1000);
  },
  methods: {
    handleCreate() {
      if (!this.sliderPage.find((item) => item.state === "add")) {
        this.sliderPage.push({
          title: "创建页面",
          data: {
            storeType: false,
            inherit: false,
          },
          state: "add",
          getTableList: this.handleSearch,
        });
      }
    },
    showViewModal(row) {
      if (!this.sliderPage.find((item) => item.data.id === row.id)) {
        this.sliderPage.push({
          title: row.nameEn,
          data: row,
          state: "show",
          getTableList: this.handleSearch,
        });
      }
    },
    showEditModal(row) {
      if (!this.sliderPage.find((item) => item.data.id === row.id)) {
        this.sliderPage.push({
          title: row.nameEn,
          data: row,
          state: "edit",
          getTableList: this.handleSearch,
        });
      }
    },
    handleDelete() {
      let arr = this.selects.map((item) => item._id);
      this.$api.deleteTag(arr).then((req) => {
        this.handleSearch();
      });
    },
    handlePreRelease() {},
    handleRelease() {},
    handleRevise() {},
    handleToVoid() {},
    handleInvalid() {},
    pageChange(page) {
      this.page = page;
      let params = {
        ...page,
        ...this.condition,
      };
      this.handleSearch(params);
    },
    handleSearch(condition) {
      this.$refs.entityTable.queryTagList(condition);
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search-part {
  flex-basis: 20px;
}

.button-part {
  flex-basis: 20px;
}

.table-part {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>