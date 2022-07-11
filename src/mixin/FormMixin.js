export default {
  data() {
    return {
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
          this.$set(this[formItem.formKey], formItem.prop, file.url)
          this.dialogVisible = true
        }
      )
      !formItem.success && (
        formItem.success = (file, fileList) => {
          console.log('success', file, fileList)
          this.$set(this[formItem.formKey], formItem.prop, file.url)
        }
      )
      (formItem.showImage === undefined) && this.$set(formItem, 'showImage', false)
      return (
        <div>
          <el-upload
            action={'/attribute/' + formItem.prop}
            list-type={'picture-card'}
            data={{ name: 'imgfile' }}
            onPreview={
              (file) => {
                console.log('onPreview', file)
                this.$set(this[formItem.formKey], formItem.prop, file.url)
                formItem.showImage = true
              }}
            onSuccess={
              (response, file, fileList) => {
                console.log('success', file, fileList)
                this.$set(this[formItem.formKey], formItem.prop, file.url)
                console.log(file, fileList)
              }}>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog visible={formItem.showImage} >
            <img width={'100%'} src={this[formItem.formKey][formItem.prop]} alt="" />
          </el-dialog>
        </div >
      )
    }
  },
  component: {

  }
}
