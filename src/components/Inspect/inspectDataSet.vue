<template>
  <div class="table">
    <el-row >
      <el-input maxlength="20" class="reviewForm searchContent" v-model="userIdParam" placeholder="user id"></el-input>
      <el-button type="primary" plain @click="search">search</el-button>
    </el-row>

    <el-table
      max-height="600"
      :data="tableData"
      border
      :key="reloadTable"
      style="width: 100%"
      stripe>
      <el-table-column
        prop="name"
        label="name"
        width="150">
      </el-table-column>
      <el-table-column
        prop="location"
        label="location"
        width="150">
      </el-table-column>
      <el-table-column
        prop="originator"
        label="originator"
        width="150">
      </el-table-column>
      <el-table-column
        prop="license_location"
        label="license location"
        width="150">
      </el-table-column>
      <el-table-column
        prop="concluded_license"
        label="concluded license"
        width="120">
      </el-table-column>
      <el-table-column
        prop="declared_license"
        label="declared license"
        width="120">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type"
        width="300">
        <template slot-scope="scope" v-if="scope.row.type !== null && scope.row.type !== ''">
          <el-tag type="success">{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="size"
        label="size"
        width="120">
        <template slot-scope="scope" v-if="scope.row.size !== null && scope.row.size !== ''">
          <el-tag type="info">{{ scope.row.size }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="intended_use"
        label="intended use"
        width="120">
      </el-table-column>
      <el-table-column
        prop="checksum"
        label="checksum"
        width="120">
      </el-table-column>
      <el-table-column
        prop="data_collection_process"
        label="data collection process"
        width="120">
      </el-table-column>
      <el-table-column
        prop="known_biases"
        label="known biases"
        width="120">
        <template slot-scope="scope" v-if="scope.row.known_biases !== null">
          <el-tag :type="scope.row.known_biases ? 'success' : 'error'">{{ scope.row.known_biases }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="sensitive_personal_information"
        label="sensitive personal information"
        width="120">
        <template slot-scope="scope" v-if="scope.row.sensitive_personal_information !== null">
          <el-tag :type="scope.row.sensitive_personal_information ? 'success' : 'error'">{{ scope.row.sensitive_personal_information }}</el-tag>
        </template>
      </el-table-column> <el-table-column
      prop="offensive_content"
      label="offensive content"
      width="120">
      <template slot-scope="scope" v-if="scope.row.offensive_content !== null">
        <el-tag :type="scope.row.offensive_content ? 'success' : 'error'">{{ scope.row.offensive_content }}</el-tag>
      </template>
    </el-table-column>
      <el-table-column
        fixed="right"
        label="operation"
        width="228">
        <template slot-scope="scope">
          <el-button size="mini" @click="updateData(scope.row,scope.$index,tableData)">edit</el-button>
          <el-button type="primary" size="mini" @click="inspect(scope.row,scope.$index,tableData)">audit</el-button>
          <el-button type="danger" size="mini" @click="rejectData(scope.row,scope.$index,tableData)">reject</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog  title="Data Review Page" :visible.sync="dialogFormVisible">
      <div slot="footer" class="dialog-footer">
        <el-form class="reviewForm" :label-position="labelPosition" label-width="80px">
          <el-form :model="currentData" :rules="rules" ref="currentData" label-width="100px" class="demo-ruleForm">
            <el-form-item :label-width="inspectLabelWidth" label="review result initial" prop="review_result_initial">
              <el-input v-model="currentData.review_result_initial"></el-input>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="dataset commercially used initial" prop="is_dataset_commercially_used_initial">
              <div style="float: left">
                <el-radio v-model="currentData.is_dataset_commercially_used_initial" :label="true" border>true</el-radio>
                <el-radio v-model="currentData.is_dataset_commercially_used_initial" :label="false" border>false</el-radio>
              </div>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="dataset commercially distributed initial" prop="is_dataset_commercially_distributed_initial">
              <div style="float: left">
              <el-radio v-model="currentData.is_dataset_commercially_distributed_initial" :label="true" border>true</el-radio>
              <el-radio v-model="currentData.is_dataset_commercially_distributed_initial" :label="false" border>false</el-radio>
              </div>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="product commercially published initial" prop="is_product_commercially_published_initial">
              <div style="float: left">
              <el-radio v-model="currentData.is_product_commercially_published_initial" :label="true" border>true</el-radio>
              <el-radio v-model="currentData.is_product_commercially_published_initial" :label="false" border>false</el-radio>
              </div>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="right initial" prop="right_initial">
              <el-input v-model="currentData.right_initial"></el-input>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="obligation initial" prop="obligation_initial">
              <el-input v-model="currentData.obligation_initial"></el-input>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="limitation initial" prop="limitation_initial">
              <el-input v-model="currentData.limitation_initial"></el-input>
            </el-form-item>
            <el-form-item :label-width="inspectLabelWidth" label="notes initial" prop="notes_initial">
              <el-input v-model="currentData.notes_initial"></el-input>
            </el-form-item>
          </el-form>
        </el-form>
        <el-button @click="dialogFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="uploadToTemp">staging</el-button>
        <el-button type="primary" @click="uploadToDataset">pass</el-button>
      </div>
    </el-dialog>
    <el-dialog  title="Dataset Information Editing Page" :visible.sync="updateFormVisible">
      <div slot="footer" class="dialog-footer">
        <el-form class="reviewForm" :rules="rules" ref="currentData" :model="currentData" :label-position="labelPosition" label-width="80px">
          <el-form-item :label-width="labelWidth" label="name" prop="name">
            <el-input v-model="currentData.name"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="location" prop="location">
            <el-input v-model="currentData.location"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="originator" prop="originator">
            <el-input v-model="currentData.originator"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="license location" prop="license_location">
            <el-input v-model="currentData.license_location"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="concluded license" >
            <el-input v-model="currentData.concluded_license"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="declared license">
            <el-input v-model="currentData.declared_license"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="type" prop="type">
<!--            <el-input v-model="currentData.type"></el-input>-->
            <el-select v-model="currentData.type" placeholder="please select type" style="width: 100%">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="size" prop="size">
            <el-input-number style="float: left" v-model="currentData.size" controls-position="right" :min="0" :max="100000">
            </el-input-number>
            <el-select v-model="sizeOptionsValue" placeholder="unit" style="float: left">
              <el-option
                v-for="item in sizeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value" >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="intended use" prop="intended_use">
            <el-input v-model="currentData.intended_use"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="checksum">
            <el-input v-model="currentData.checksum"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="data collection process">
            <el-input v-model="currentData.data_collection_process"></el-input>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="known biases" prop="known_biases">
            <div style="float: left">
              <el-radio v-model="currentData.known_biases" :label="true" border>true</el-radio>
              <el-radio v-model="currentData.known_biases" :label="false" border>false</el-radio>
            </div>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="sensitive personal information" prop="sensitive_personal_information">
            <div style="float: left">
              <el-radio v-model="currentData.sensitive_personal_information" :label="true" border>true</el-radio>
              <el-radio v-model="currentData.sensitive_personal_information" :label="false" border>false</el-radio>
            </div>
          </el-form-item>
          <el-form-item :label-width="labelWidth" label="offensive content" prop="offensive_content">
            <div style="float: left">
              <el-radio v-model="currentData.offensive_content" :label="true" border>true</el-radio>
              <el-radio v-model="currentData.offensive_content" :label="false" border>false</el-radio>
            </div>
          </el-form-item>
        </el-form>
        <el-button @click="backUpdateData">cancel</el-button>
        <el-button type="primary" @click="saveUpdateData">confirm</el-button>
      </div>
    </el-dialog>
    <el-dialog  title="Data Reject Page" :visible.sync="rejectFormVisible">
      <div slot="footer" class="dialog-footer">
        <el-form class="reviewForm" :label-position="labelPosition" label-width="80px">
          <el-form-item label-width="120px" label="rejection note">
            <el-input v-model="rejection_note"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="rejectFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="rejectDataToDataset">confirm</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import requestService from "../../../config/api";
export default {
  name: "inspectDataSet",
  methods: {
    rejectData(row, index, rows){
      this.rejectFormVisible = true
      this.currentData = row
      this.index = index
      this.tableAllData = rows
    },
    updateData(row, index, rows){
      this.updateFormVisible = true
      // this.currentData = JSON.parse(JSON.stringify(row))
      let newObject = JSON.parse(JSON.stringify(row))
      // 转换
      if(row.size !== null && row.size !== ""){
        const pattern = /[0-9]+/;
        const pattern_str = /[A-Z]+/;
        this.sizeOptionsValue = newObject.size.match(pattern_str).toString();
        newObject.size = newObject.size.match(pattern)
      }
      this.currentData=newObject;
      this.index = index
      this.tableAllData = rows
    },
    inspect(row, index, rows){
      this.dialogFormVisible = true
      let newObject = JSON.parse(JSON.stringify(row))
      // 转换
      if(row.size !== null && row.size !== ""){
        const pattern = /[0-9]+/;
        const pattern_str = /[A-Z]+/;
        this.sizeOptionsValue = newObject.size.match(pattern_str).toString();
        newObject.size = newObject.size.match(pattern)
      }
      this.currentData = newObject
      this.index = index
      this.tableAllData = rows
    },
    saveUpdateData(){
      if ((this.currentData.concluded_license == '' || this.currentData.concluded_license ==null) &&
        (this.currentData.declared_license == null || this.currentData.declared_license == '')){
        this.errorMess("declared_license  and  concluded_license cannot be empty at the same time")
        return
      }
      this.$refs['currentData'].validate((valid) => {
        if (valid){
          this.currentData.size=this.currentData.size+""+this.sizeOptionsValue;
          this.tableData[this.index] = this.currentData
          this.reloadTable = !this.reloadTable
          this.successMess("save success")
          this.updateFormVisible = false

        }else {
          this.errorMess("Confirm whether the required items have blank values")
          return
        }
      });
    },
    backUpdateData(){
      this.updateFormVisible = false
    },
    uploadToTemp(){
      if ((this.currentData.is_dataset_commercially_distributed_initial === null || this.currentData.is_dataset_commercially_distributed_initial === '') ||
        (this.currentData.is_dataset_commercially_used_initial === null || this.currentData.is_dataset_commercially_used_initial === '') ||
        (this.currentData.is_product_commercially_published_initial === null || this.currentData.is_product_commercially_published_initial === '') ||
        (this.currentData.review_result_initial == null || this.currentData.review_result_initial == '')){
        this.errorMess('Error, please check whether the required item is empty')
        return
      }
      const data = {
        pending_review_list:[
          this.currentData
        ]
      }
      data.pending_review_list[0].size = data.pending_review_list[0].size +this.sizeOptionsValue
      requestService.saveTempReviewData(data).then(param => {
        // this.currentData.size=this.currentData.size+""+this.sizeOptionsValue;
        this.tableData[this.index] = this.currentData
        this.reloadTable = !this.reloadTable
        this.successMess('Staging succeeded')
        this.dialogFormVisible = false
      }).catch(param => {
        this.errorMess('Error:'+param.notification)
      })
    },
    uploadToDataset(){
      if ((this.currentData.is_dataset_commercially_distributed_initial === null || this.currentData.is_dataset_commercially_distributed_initial === '') ||
        (this.currentData.is_dataset_commercially_used_initial === null || this.currentData.is_dataset_commercially_used_initial === '') ||
        (this.currentData.is_product_commercially_published_initial === null || this.currentData.is_product_commercially_published_initial === '') ||
        (this.currentData.review_result_initial == null || this.currentData.review_result_initial == '')){
        this.errorMess('Error, please check whether the required item is empty')
        return
      }
      const data = {
        pending_review_list:[
          this.currentData
        ]
      }
      data.pending_review_list[0].size = data.pending_review_list[0].size +this.sizeOptionsValue
      requestService.submitReviewData(data).then(param => {
        this.successMess('submit success')
        this.tableAllData.splice(this.index, 1)
        this.$emit("number",this.tableData.length)
        this.dialogFormVisible = false
      }).catch(param => {
        this.errorMess('submit failed:'+param.notification)
      })
      // requestService.resultBack(this.currentData)
    },
    rejectDataToDataset(){
      const data = {
        "user_id":this.currentData.user_id,
        "pending_aibom_review_ids":[this.currentData.id],
        "rejection_notes":[this.rejection_note]
      }
      requestService.rejectReviewData(data).then(param => {
        this.successMess('reject success')
        this.tableAllData.splice(this.index, 1)
        this.rejection_note = ''
        this.rejectFormVisible = false
        this.$emit("number",this.tableData.length)
      }).catch(param => {
        this.errorMess('reject failed:'+param.notification)
      })
    },
    search(){
      if (this.userIdParam == ''){
        this.userIdParam = null
      }

      requestService.getReviewData(this.userIdParam).then(res =>{
        const allReviewData = res.pending_review_list
        // console.log(allReviewData)
        // allReviewData.known_biases = null ? null : allReviewData.known_biases = allReviewData.known_biases ? 'true':'false'
        // allReviewData.sensitive_personal_information = null ? null : allReviewData.sensitive_personal_information = allReviewData.sensitive_personal_information ? 'true':'false'
        // allReviewData.offensive_content = null ? null : allReviewData.offensive_content = allReviewData.offensive_content ? 'true':'false'
        this.tableData = allReviewData;
        this.$emit("number",this.tableData.length)
      })
    },
    errorMess(mess){
      this.$message.error(mess);
    },
    successMess(mess){
      this.$message({
        message: mess,
        type: 'success'
      });
    }
  },
  data() {
    return {
      reloadTable:false,
      labelWidth:'220PX',
      inspectLabelWidth:'300PX',
      userIdParam: '',
      tableAllData:"",
      index:"",
      currentData: '',
      currentDataCopy:"",
      rejection_note:"",
      tableData: [
      ],
      dialogFormVisible: false,
      updateFormVisible: false,
      rejectFormVisible:false,
      formLabelWidth: '120px',
      labelPosition: 'right',
      comments: '',
      ruleForm: {
        review_result_initial: null,
        is_dataset_commercially_used_initial: null,
        is_dataset_commercially_distributed_initial: null,
        is_product_commercially_published_initial: null,
        right_initial:'',
        obligation_initial:'',
        limitation_initial:'',
        notes_initial:''
      },
      typeOptions:[
        {
          value: 'image',
          label: 'image'
        }, {
          value: 'radio',
          label: 'radio'
        }, {
          value: 'video',
          label: 'video'
        }, {
          value: 'binary',
          label: 'binary'
        }, {
          value: 'others',
          label: 'others'
        }
      ],
      sizeOptions: [{
        value: 'B',
        label: 'B'
      }, {
        value: 'KB',
        label: 'KB'
      }, {
        value: 'MB',
        label: 'MB'
      }, {
        value: 'GB',
        label: 'GB'
      }, {
        value: 'TB',
        label: 'TB'
      }],
      sizeOptionsValue: 'MB',
      rules: {
        review_result_initial: [
          { required: true, message: 'Please enter preliminary comments on the audit results', trigger: 'blur' },
        ],
        is_dataset_commercially_used_initial: [
          { required: true, message: 'Please enter preliminary comments on whether the dataset is commercially available', trigger: 'blur' },
        ],
        is_dataset_commercially_distributed_initial: [
          { required: true, message: 'Please enter the preliminary opinion on whether the dataset can be commercially released', trigger: 'blur' },
        ],
        is_product_commercially_published_initial: [
          { required: true, message: 'Please enter your preliminary opinion on whether the dataset can be commercially published', trigger: 'blur' },
        ],
        name: [
          {  required: true, message: 'Dataset name cannot be empty', trigger: 'blur' }
        ],
        location: [
          {  required: true, message: 'The dataset official website cannot be empty', trigger: 'blur' }
        ],
        originator: [
          {  required: true, message: 'Dataset contributor cannot be empty', trigger: 'blur' }
        ],
        license_location: [
          {  required: true, message: 'Dataset license address cannot be empty', trigger: 'blur' }
        ],
        type: [
          {  required: true, message: 'Dataset format cannot be empty', trigger: 'blur' }
        ],
        size: [
          {  required: true, message: 'Dataset size cannot be empty', trigger: 'blur' }
        ],
        intended_use: [
          {  required: true, message: 'Data set usage purpose cannot be empty', trigger: 'blur' }
        ],
      }
    };
    },
  created() {
    requestService.getReviewData(null).then(res =>{
      const allReviewData = res.pending_review_list
      this.tableData = allReviewData;
      this.$emit("number",this.tableData.length)
    })
  }
}
</script>

<style >
 .table {
  margin: 0 auto;
  width: 70%;
}
 .table .el-row {
   margin-bottom: 10px;
 }
 .reviewForm .el-input__inner {
  -webkit-appearance: none !important;
  background-color: #fff !important;
  background-image: none !important;
  border-radius: 4px !important;
  border: 1px solid #dcdfe6 !important;
  box-sizing: border-box !important;
  color: #606266 !important;
  display: inline-block !important;
  font-size: inherit !important;
  height: 40px !important;
  line-height: 40px !important;
  outline: none !important;
  padding: 0 15px !important;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1) !important;
  width: 100%;
}
 .searchContent {
  width: 500px !important;
}
</style>
