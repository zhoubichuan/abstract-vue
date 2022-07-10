export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    mixinInput(formItem) {
      return (
        <el-input
          value={this[formItem.formKey][formItem.prop]}
          disabled={formItem.disabled}
          onInput={val => { this.$set(this[formItem.formKey], formItem.prop, val) }}
          placeholder={formItem.placeholder}>
        </el-input>
      )
    },
    mixinTextarea(formItem) {
      return (
        <el-input
          type="textarea"
          rows="2"
          maxlength="1024"
          value={this[formItem.formKey][formItem.prop]}
          disabled={formItem.disabled}
          onInput={val => { this.$set(this[formItem.formKey], formItem.prop, val) }}
          placeholder={formItem.placeholder}>
        </el-input>
      )
    },
    mixinSelect(formItem) {
      !formItem.options && (
        formItem.options = [
          { label: '是', value: true },
          { label: '否', value: false }
        ]
      )
      return (
        <el-select
          value={this[formItem.formKey][formItem.prop]}
          disabled={formItem.disabled}
          onInput={val => { this.$set(this[formItem.formKey], formItem.prop, val) }}
          placeholder={formItem.placeholder}>
          {
            formItem.options.map(item => (
              <el-option key={item.value} label={item.label} value={item.value}>{item.label}</el-option>
            ))
          }
        </el-select>
      )
    },
    mixinRadio(formItem) {
      !formItem.options && (
        formItem.options = [
          { label: '是', value: true },
          { label: '否', value: false }
        ]
      )
      return (
        <el-radio-group
          value={this[formItem.formKey][formItem.prop]}
          disabled={formItem.disabled}
          onInput={val => { this.$set(this[formItem.formKey], formItem.prop, val) }}
          placeholder={formItem.placeholder}>
          {
            formItem.options.map(item => (
              <el-radio key={item.value} label={item.value} value={item.value}>{item.label}</el-radio>
            ))
          }
        </el-radio-group>
      )
    },
    mixinUpload(formItem) {
      !formItem.onPreview && (
        formItem.onPreview = (file) => {
          this[formItem.formKey][formItem.prop] = file.url
          this.dialogVisible = true
        }
      )
      !formItem.onRemove && (
        formItem.onPreview = (file, fileList) => {
          console.log(file, fileList)
        }
      )
      return (
        <div>
          <el-upload
            action={'/attribute/' + formItem.prop}
            list-type={'picture-card'}
            data={{name: 'imgfile'}}
            onPreview={formItem.onPreview}
            onRemove={formItem.onRemove}>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog visible={this.dialogVisible} >
            <img width={'100%'} src={this[formItem.formKey][formItem.prop]} alt="" />
          </el-dialog>
        </div >
      )
    }
  },
  component: {

  }
}
