<template>
  <div>
    <el-table :data="tableData" stripe border style="width: 98%" max-height="600" :key="tableKey">
      <el-table-column prop="name" label="name" width="120" fixed>
      </el-table-column>
      <el-table-column prop="location" label="location" width="120">
      </el-table-column>
      <el-table-column prop="originator" label="originator" width="120">
      </el-table-column>
      <el-table-column prop="license_location" label="license location" width="140">
      </el-table-column>
      <el-table-column prop="concluded_license" label="concluded license" width="150">
      </el-table-column>
      <el-table-column prop="declared_license" label="declared license" width="150">
      </el-table-column>
      <el-table-column prop="type" label="type" width="120">
        <template slot-scope="scope" v-if="scope.row.type !== null && scope.row.type !== ''">
          <el-tag type="success">{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="size" label="size" width="120">
        <template slot-scope="scope" v-if="scope.row.size !== null && scope.row.size !== ''">
          <el-tag type="info">{{ scope.row.size }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="intended_use" label="intended use" width="140">
      </el-table-column>
      <el-table-column prop="checksum" label="checksum" width="120">
      </el-table-column>
      <el-table-column prop="data_collection_process" label="data collection process" width="200">
      </el-table-column>
      <el-table-column align="center" prop="known_biases" label="known biases" width="140">
        <template slot-scope="scope" v-if="scope.row.known_biases !== null">
          <el-tag :type="scope.row.known_biases ? 'success' : 'error'">{{ scope.row.known_biases }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="sensitive_personal_information" label="sensitive personal information"
                       width="250">
        <template slot-scope="scope" v-if="scope.row.sensitive_personal_information !== null">
          <el-tag :type="scope.row.sensitive_personal_information ? 'success' : 'error'">{{
            scope.row.sensitive_personal_information }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="offensive_content" label="offensive content" width="150">
        <template slot-scope="scope" v-if="scope.row.offensive_content !== null">
          <el-tag :type="scope.row.offensive_content ? 'success' : 'error'">{{ scope.row.offensive_content }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="rejection_notes" label="rejection notes" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="operation" width="250">
        <template slot-scope="scope">

          <!--          <el-button-group>-->
          <el-tooltip effect="dark" content="edit" placement="top">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="submint" placement="top">
            <el-button size="small" type="primary" @click="submitCurrentData(scope.$index, scope.row)"
                       icon="el-icon-check"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="similar report" placement="top">
            <el-button size="small" type="success" @click="similarReportData(scope.$index, scope.row)"
                       icon="el-icon-data-analysis"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="delete" placement="top">
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                       icon="el-icon-delete"></el-button>
          </el-tooltip>

          <!--          </el-button-group>-->

        </template>
      </el-table-column>
    </el-table>
    <h5 style="text-align: center; color: #003261">Total : {{ totalNum }}</h5>
    <!-- 对话框-->
    <el-dialog title="填写AIBOM" :visible.sync="dialogFormVisible">
      <div class="button-container">
        <div class="custom-button">
          <el-button type="primary" display="flex" justify-content="flex-end" @click="AIBOMFormVisible = true">AIBOM
            generator
          </el-button>
        </div>
        <el-dropdown size="medium" split-button type="primary" @command="matchMetadataSelect">
          match metadata

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in dropdownOptions" :key="item.id" :command="item">
              {{ item.dataset_name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-form :model="currentData" ref="ruleForm">
        <el-form-item label="name" :label-width="formLabelWidth" prop="name" required>
          <el-input v-model="currentData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="location" :label-width="formLabelWidth" prop="location" required>
          <el-input v-model="currentData.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="originator" :label-width="formLabelWidth" prop="originator" required>
          <el-input v-model="currentData.originator" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="license location" :label-width="formLabelWidth" prop="license_location" required>
          <el-input v-model="currentData.license_location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="concluded license" :label-width="formLabelWidth">
          <el-input v-model="currentData.concluded_license" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="declared license" :label-width="formLabelWidth">
          <el-input v-model="currentData.declared_license" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="type" :label-width="formLabelWidth" prop="type" required>
          <el-select v-model="currentData.type" placeholder="please select type" style="width: 100%">
            <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="size" :label-width="formLabelWidth" prop="size" required>
          <el-input-number v-model="currentData.currentDataSizeNum" controls-position="right" @change="sizeChange"
                           :min="0"
                           :max="1000000000000">
          </el-input-number>
          <el-select v-model="currentData.sizeOptionsValue" placeholder="unit">
            <el-option v-for="item in sizeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="intended use" :label-width="formLabelWidth" prop="intended_use" required>
          <el-input v-model="currentData.intended_use" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="checksum" :label-width="formLabelWidth">
          <el-input v-model="currentData.checksum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="data collection process" :label-width="formLabelWidth">
          <el-input v-model="currentData.data_collection_process" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="known biases" :label-width="formLabelWidth">
          <!--          <el-select v-model="currentData.known_biases" placeholder="please select true or false" style="width: 100%">-->
          <!--            <el-option label="true" :value="true"></el-option>-->
          <!--            <el-option label="false" :value="false"></el-option>-->
          <!--          </el-select>-->
          <el-radio-group v-model="currentData.known_biases">
            <el-radio :label="true" border></el-radio>
            <el-radio :label="false" border></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="sensitive personal information" :label-width="formLabelWidth">
          <!--          <el-select v-model="currentData.sensitive_personal_information" placeholder="please select true or false" style="width: 100%">-->
          <!--            <el-option label="true" :value="true"></el-option>-->
          <!--            <el-option label="false" :value="false"></el-option>-->
          <!--          </el-select>-->
          <el-radio-group v-model="currentData.sensitive_personal_information">
            <el-radio :label="true" border></el-radio>
            <el-radio :label="false" border></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="offensive content" :label-width="formLabelWidth">
          <!--          <el-select v-model="" placeholder="please select true or false" style="width: 100%">-->
          <!--            <el-option label="true" :value="true"></el-option>-->
          <!--            <el-option label="false" :value="false"></el-option>-->
          <!--          </el-select>-->
          <el-radio-group v-model="currentData.offensive_content">
            <el-radio :label="true" border></el-radio>
            <el-radio :label="false" border></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="saveAIbom('ruleForm')">save</el-button>
      </div>
    </el-dialog>

    <el-dialog title="填写Huggingface或Kaggle的链接，将自动为其生成AIBOM初稿" :visible.sync="AIBOMFormVisible">
      <el-form :model="AIBOMtData" ref="ruleAIBOMForm">
        <el-form-item label="source" prop="source" :label-width="formLabelWidth">
          <el-radio-group v-model="AIBOMtData.source">
            <el-radio label="HuggingFace"></el-radio>
            <el-radio label="Kaggle"></el-radio>
            <el-radio label="Auto"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="link" :label-width="formLabelWidth" prop="link" required>
          <el-input v-model="AIBOMtData.link" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AIBOMFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="generateAIbom('ruleAIBOMForm')">generate</el-button>
      </div>
    </el-dialog>

    <el-dialog title="reviewReport Search" :visible.sync="similarReportDialog" :fullscreen=true>

      <el-row>
        <el-col :span="12">
          <el-input maxlength="10" class="reviewForm searchContent" v-model="searchReviewedDataSetName"
                    placeholder="dataset name"></el-input>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" plain @click="searchReviewedDataSet">search</el-button>
        </el-col>
      </el-row>
      <div>
      </div>

      <el-table
        :data="reviewResultTableData" class="consistent-row-height" stripe border style="width: 98%"
        max-height="1000px">
        <el-table-column
          prop="name"
          label="name"
          width="200"
          fixed>
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.name }}</div>
              <div slot="content">{{ scope.row.name }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="location"
          label="location"
          width="100">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.location }}</div>
              <div slot="content">{{ scope.row.location }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="originator"
          label="originator"
          width="200">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.originator }}</div>
              <div slot="content">{{ scope.row.originator }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="license_location"
          label="license location"
          width="200">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.license_location }}</div>
              <div slot="content">{{ scope.row.license_location }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="concluded_license"
          label="concluded license"
          width="200">
        </el-table-column>
        <el-table-column
          prop="declared_license"
          label="declared license"
          width="200">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.declared_license }}</div>
              <div slot="content">{{ scope.row.declared_license }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="type"
          width="100">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.type }}</div>
              <div slot="content">{{ scope.row.type }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="size"
          label="size"
          width="100">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.size }}</div>
              <div slot="content">{{ scope.row.size }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="intended_use"
          label="intended use"
          width="180">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.intended_use }}</div>
              <div slot="content">{{ scope.row.intended_use }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="checksum"
          label="checksum"
          width="100">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.checksum }}</div>
              <div slot="content">{{ scope.row.checksum }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="data_collection_process"
          label="data collection process"
          width="220">
          <template slot-scope="scope">
            <el-tooltip placement="top">
              <div>{{ scope.row.data_collection_process }}</div>
              <div slot="content">{{ scope.row.data_collection_process }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="known_biases"
          label="known biases"
          width="200">
          <template slot-scope="scope" v-if="scope.row.known_biases !== null">
            <el-tag :type="scope.row.known_biases ? 'success' : 'error'">{{ scope.row.known_biases }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="sensitive_personal_information"
          label="sensitive personal information"
          width="250">
          <template slot-scope="scope" v-if="scope.row.sensitive_personal_information !== null">
            <el-tag :type="scope.row.sensitive_personal_information ? 'success' : 'error'">{{
              scope.row.sensitive_personal_information }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="offensive_content"
          label="offensive content"
          width="200">
          <template slot-scope="scope" v-if="scope.row.offensive_content !== null">
            <el-tag :type="scope.row.offensive_content ? 'success' : 'error'">{{ scope.row.offensive_content }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="review_result_initial"
          label="review result initial"
          width="220">
        </el-table-column>
        <el-table-column
          prop="is_dataset_commercially_used_initial"
          label="dataset commercially used initial"
          width="260">
          <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_used_initial !== null">
            <el-tag :type="scope.row.is_dataset_commercially_used_initial ? 'success' : 'error'">{{
              scope.row.is_dataset_commercially_used_initial }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="is_dataset_commercially_distributed_initial"
          label="dataset commercially distributed initial"
          width="300">
          <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_distributed_initial !== null">
            <el-tag :type="scope.row.is_dataset_commercially_distributed_initial ? 'success' : 'error'">{{
              scope.row.is_dataset_commercially_distributed_initial }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="is_product_commercially_published_initial"
          label="product commercially published initial"
          width="300">
          <template slot-scope="scope" v-if="scope.row.is_product_commercially_published_initial !== null">
            <el-tag :type="scope.row.is_product_commercially_published_initial ? 'success' : 'error'">{{
              scope.row.is_product_commercially_published_initial }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="right_initial"
          label="right initial"
          width="200">
        </el-table-column>
        <el-table-column
          prop="obligation_initial"
          label="obligation initial"
          width="200">
        </el-table-column>
        <el-table-column
          prop="limitation_initial"
          label="limitation initial"
          width="200">
        </el-table-column>
        <el-table-column
          prop="notes_initial"
          label="notes initial"
          width="200">
        </el-table-column>
        <el-table-column
          prop="review_result_final"
          label="review result final"
          width="200">
        </el-table-column>
        <el-table-column
          prop="is_dataset_commercially_used_final"
          label="dataset commercially used final"
          width="260">
          <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_used_final !== null">
            <el-tag :type="scope.row.is_dataset_commercially_used_final ? 'success' : 'error'">{{
              scope.row.is_dataset_commercially_used_final }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="is_dataset_commercially_distributed_final"
          label="dataset commercially distributed final"
          width="300">
          <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_distributed_final !== null">
            <el-tag :type="scope.row.is_dataset_commercially_distributed_final ? 'success' : 'error'">{{
              scope.row.is_dataset_commercially_distributed_final }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="is_product_commercially_published_final"
          label="product commercially published final"
          width="300">
          <template slot-scope="scope" v-if="scope.row.is_product_commercially_published_final !== null">
            <el-tag :type="scope.row.is_product_commercially_published_final ? 'success' : 'error'">{{
              scope.row.is_product_commercially_published_final }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="right_final"
          label="right final"
          width="180">
        </el-table-column>
        <el-table-column
          prop="obligation_final"
          label="obligation final"
          width="200">
        </el-table-column>
        <el-table-column
          prop="limitation_final"
          label="limitation final"
          width="200">
        </el-table-column>
        <el-table-column
          prop="notes_final"
          label="notes final"
          width="180">
        </el-table-column>

        <el-table-column fixed="right" label="operation" width="100">
          <template slot-scope="scope">

            <!--            <el-button-group>-->
            <el-tooltip effect="dark" content="download current row" placement="top">
              <el-button size="small" @click="reviewResultCurRowDownLoad(scope.$index, scope.row)"
                         icon="el-icon-download"></el-button>
            </el-tooltip>

            <!--            </el-button-group>-->

          </template>
        </el-table-column>
      </el-table>

      <!--      </el-form>-->
      <div slot="footer" class="dialog-footer">
        <el-button @click="similarReportDialog = false">cancel</el-button>
        <el-button type="primary" @click="reviewResultCurSearchDownLoad()">download</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    import requestService from '../../../config/api'
    import {loadDatasetByName} from '../../../config/api.env.js'
    import {Message} from "element-ui";
    import {getAIBOM, getNewAIBOM} from "../../../config/api_aibom_generator"

    export default {
        name: "apendingAIBOM-table",
        data() {
            return {
                typeOptions: [
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
                typeOptionsValue: '',
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
                dropdownOptions: [{
                    id: 1,
                    name: "oscar"
                }, {
                    id: 2,
                    name: "pile"
                }],
                currentData: {
                    id: null,
                    name: "",
                    location: "",
                    originator: "",
                    license_location: "",
                    concluded_license: "",
                    declared_license: "",
                    type: "",
                    size: "",
                    intended_use: "",
                    checksum: "",
                    data_collection_process: "",
                    known_biases: true,
                    sensitive_personal_information: true,
                    offensive_content: true,
                    user_id: null,
                    rejection_notes: "",
                    sizeOptionsValue: 'B',
                    currentDataSizeNum: 0,
                },
                ruleForm: {
                    name: "",
                    location: "",
                    originator: "",
                    license_location: "",
                    type: "",
                    intended_use: "",
                },
                AIBOMtData: {
                    source: "",
                    link: "",
                    name: ""
                },
                ruleAIBOMForm: {
                    source: "",
                    link: ""
                },
                tableData: [],
                metadataMatchList: [],
                reviewResultTableData: [],
                dialogFormVisible: false,
                similarReportDialog: false,
                AIBOMFormVisible: false,
                MetadataMatchFormVisible: false,
                formLabelWidth: '220px',
                curIndex: null,
                tableKey: false,
                totalNum: '',
                searchReviewedDataSetName: ""
            }
        },
        created() {
            this.getAIBOMData();
        },
        methods: {
            getAIBOMData() {
                const params = {
                    user_id: this.$route.params.user_id,
                }
                console.log("params", params)
                requestService.pendingAIBOM(params).then(res => {
                    console.log(res)
                    this.tableData = res.pending_aibom_list;
                    this.totalNum = this.tableData.length;
                })
            },
            MetadataMatch() {
                this.MetadataMatchFormVisible = true

                requestService.metadataMatch(params).then(res => {
                    this.metadataMatchList = res;
                })
            },
            handleClick(row) {
                console.log(row);
            },
            handleEdit(index, row) {
                console.log(index, row);
                let newObject = JSON.parse(JSON.stringify(row))
                // 转换
                if (row.size !== null && row.size !== "") {
                    const pattern = /[0-9]+/;
                    const pattern_str = /[A-Z]+/;
                    newObject.sizeOptionsValue = newObject.size.match(pattern_str).toString();
                    newObject.currentDataSizeNum = newObject.size.match(pattern);
                }
                this.currentData = newObject;
                this.curIndex = index;
                this.dialogFormVisible = true;

                this.loadMatchMetadata(newObject);
            },

            // 删除该项
            handleDelete(index, row) {
                console.log(index, row);
                const data = {
                    user_id: row.user_id,
                    pending_aibom_review_ids: [
                        row.id
                    ],
                    rejection_notes: [""]
                }
                requestService.deleteAIBOM(data).then(res => {
                    console.log(res);
                    this.tableData.splice(index, 1)
                    this.tipMessage("delete success", "success")
                })
            },
            loadMatchMetadata(curBasicData) {
                loadDatasetByName(curBasicData.name).then(res => {
                    this.dropdownOptions = res.data
                })
            },
            // // 显示生成AIBOM表单
            // handleGenerateAIBOM(){
            //   this.AIBOMFormVisible = true
            // },
            // 在edit的表单中临时保存当前版本的AIBOM
            saveAIbom(formRule) {
                if ((this.currentData.declared_license === null || this.currentData.declared_license.length === 0) &&
                    (this.currentData.concluded_license === null || this.currentData.concluded_license.length === 0)) {
                    this.tipMessage("declared_license  and  concluded_license cannot be empty at the same time", "warning");
                    return false;
                }
                this.$refs[formRule].validate((valid) => {
                    if (valid) {
                        const data = {
                            pending_aibom_list: [],
                        }
                        // this.currentData.size=this.currentData.size+""+this.sizeOptionsValue;
                        const currentDataDeepCopy = this.currentData;
                        data.pending_aibom_list.push(currentDataDeepCopy)
                        const newDataSize = currentDataDeepCopy.currentDataSizeNum + "" + currentDataDeepCopy.sizeOptionsValue;
                        data.pending_aibom_list[0].size = newDataSize
                        currentDataDeepCopy.size = newDataSize
                        requestService.saveAIBOM(data).then(res => {
                            console.log(res)
                            this.tipMessage(res.message, "success")
                            this.tableData[this.curIndex] = this.currentData
                            this.tableKey = !this.tableKey
                            this.dialogFormVisible = false;
                        })
                    } else {
                        console.log('error submit!!');
                        this.tipMessage("Some required information is not filled", "warning")
                        return false;
                    }
                });
            },
            // 通过Huggingface或Kaggle自动生成AIBOM
            generateAIbom(ruleAIBOMForm) {
                this.$refs[ruleAIBOMForm].validate(async (valid) => {
                    if (valid) {
                        console.log(this.AIBOMtData.source.toLowerCase());
                        console.log(this.AIBOMtData.link);

                        const data = await getNewAIBOM(this.AIBOMtData.source.toLowerCase(), this.AIBOMtData.link);
                        console.log(data)
                        // console.log(data.size.totalAmountOfDiskUsed)
                        // console.log(data.size.totalAmountOfDiskUsed.split(" "))
                        // console.log(data.size.totalAmountOfDiskUsed.split(" ")[0])
                        if (data.name !== "") {
                            this.currentData.name = data.name
                        }

                        if (data.location !== "") {
                            this.currentData.location = data.location
                        }
                        if (data.originator !== "") {
                            this.currentData.originator = data.originator
                        }

                        this.currentData.license_location = ""
                        this.currentData.concluded_license = ""
                        this.currentData.declared_license = data.declaredLicense
                        this.currentData.type = data.type
                        if (Array.isArray(data.size) && data.size.length != 0) {
                            this.currentData.size = data.size[0]
                        }
                        this.currentData.intended_use = ""
                        this.currentData.checksum = ""
                        this.currentData.data_collection_process = ""
                        // this.currentData.known_biases = true
                        // this.currentData.sensitive_personal_information = false
                        // this.currentData.offensive_content = false

                        // if (data.data !== null) {
                        //   const userName = data.data.account;
                        //   sessionStorage.setItem("userName", userName); //保存用户信息
                        //   sessionStorage.setItem("userId", data.data.id); //保存用户Id
                        //   this.$emit("success", userName);

                        //   /* this.$router.push("/");
                        //    alert("Login success");
                        //    location.reload();*/
                        // } else {
                        //   alert("Login failed");//登陆失败
                        //   return false;
                        // }
                        this.AIBOMtData.source = "";
                        this.AIBOMtData.link = "";
                        this.AIBOMFormVisible = false;
                    } else {
                        console.log('error submit!');
                        this.tipMessage("Some required information is not filled", "warning")
                        return false;
                    }
                });
            },
            matchMetadataSelect(match_metadata) {
                // console.log("当前数据集大小", match_metadata)
                //默认是 other
                this.currentData.type = "others";
                this.currentData.license_location = match_metadata.declaredLicense;
                this.currentData.size = match_metadata.data_size;
                this.currentData.license_location = match_metadata.license_location;
                this.currentData.concluded_license = match_metadata.license_name;
                this.currentData.checksum = match_metadata.hash_code;
                this.currentData.data_collection_process = match_metadata.data_collection_process;
                this.currentData.known_biases = false;
                this.currentData.sensitive_personal_information = this.commonInfoCheck(match_metadata.is_personal_data);
                this.currentData.offensive_content = this.commonInfoCheck(match_metadata.is_offensive_content);
            },
            similarReportData(index, row) {
                // 查看相似的报告

                // if ((row.declared_license === null || row.declared_license.length === 0) &&
                //     (row.concluded_license === null || row.concluded_license.length === 0)) {
                //     this.tipMessage("declared_license and  concluded_license Cannot be empty at the same time", "warning");
                //     return false;
                // }
                //
                // let valid = true;
                // if (row.name === null || row.name.length === 0) valid = false;
                // if (row.location === null || row.location.length === 0) valid = false;
                // if (row.originator === null || row.originator.length === 0) valid = false;
                // if (row.type === null || row.type.length === 0) valid = false;
                // if (row.license_location === null || row.license_location.length === 0) valid = false;
                // if (row.intended_use === null || row.intended_use.length === 0) valid = false;
                // if (valid) {
                //     const data = {
                //         pending_aibom_list: [],
                //     }
                //     data.pending_aibom_list.push(row);
                //     requestService.submitAIBOM(data).then(res => {
                //         // submit
                //         this.tableData.splice(index, 1)
                //         this.tipMessage("submit success", "success")
                //     }).catch(err => {
                //         this.tipMessage("error", "error")
                //     });
                // } else {
                //     console.log('error submit!!');
                //     this.tipMessage("Some required information is not filled in, please click the fill button to fill in", "warning")
                //     return false;
                // }
                this.searchReviewedDataSetName = row.name;
                this.searchReviewedDataSet();

                this.similarReportDialog = true;
            },
            // 提交已经填好的AIBOM
            submitCurrentData(index, row) {
                if ((row.declared_license === null || row.declared_license.length === 0) &&
                    (row.concluded_license === null || row.concluded_license.length === 0)) {
                    this.tipMessage("declared_license and  concluded_license Cannot be empty at the same time", "warning");
                    return false;
                }
                let valid = true;
                if (row.name === null || row.name.length === 0) valid = false;
                if (row.location === null || row.location.length === 0) valid = false;
                if (row.originator === null || row.originator.length === 0) valid = false;
                if (row.type === null || row.type.length === 0) valid = false;
                if (row.license_location === null || row.license_location.length === 0) valid = false;
                if (row.intended_use === null || row.intended_use.length === 0) valid = false;
                if (valid) {
                    const data = {
                        pending_aibom_list: [],
                    }
                    data.pending_aibom_list.push(row);
                    requestService.submitAIBOM(data).then(res => {
                        // submit
                        this.tableData.splice(index, 1)
                        this.tipMessage("submit success", "success")
                    }).catch(err => {
                        this.tipMessage("error", "error")
                    });
                } else {
                    console.log('error submit!!');
                    this.tipMessage("Some required information is not filled in, please click the fill button to fill in", "warning")
                    return false;
                }
            },
            tipMessage(message, type) {
                Message({
                    message: message,
                    type: type
                })
            },
            commonInfoCheck(infoValue) {
                // return infoValue === null ?
                //     false : infoValue === '' ?
                //         false : infoValue.toLowerCase() === 'unknown' ?
                //             false : infoValue.toLowerCase() === 'no' ?
                //                 false : infoValue.toLowerCase() === 'yes' ?
                //                     true : false;
                return infoValue === null ?
                    false : infoValue.toLowerCase() === 'yes';
            },
            sizeChange(value) {
                // console.log(value)
            },
            searchReviewedDataSet() {
                const params = {
                    "dataset_name": this.searchReviewedDataSetName
                };
                requestService.getReviewDataForDatasetName(params).then(res => {
                    console.log(res);
                    this.reviewResultTableData = res.review_result_list
                })
            },
            reviewResultCurRowDownLoad(index, row) {
                const params = {
                    'result_id': row.id
                };
                requestService.reviewResultCurRowDownLoad(params).then(res => {
                    const link = document.createElement('a');  // 创建a标签
                    let resdata = "\ufeff" + res; // 解决乱码 https://www.cnblogs.com/gunelark/p/13491985.html
                    let blob = new Blob([resdata], {type: 'text/csv,charset=UTF-8'});
                    link.href = URL.createObjectURL(blob);   // 创建下载的链接
                    //num++
                    link.setAttribute('download', row.name + 'reviewedDataset.csv');  // 给下载后的文件命名
                    document.body.appendChild(link);
                    link.click();  // 点击下载
                    document.body.removeChild(link);  //  下载完成移除元素
                    window.URL.revokeObjectURL(link.href);  // 释放掉blob对象
                    // this.tableData = param.review_result_list
                })
            },
            reviewResultCurSearchDownLoad() {

                if (this.reviewResultTableData === null || this.reviewResultTableData.length === 0) {
                    return;
                }

                const params = {
                    "dataset_name": this.searchReviewedDataSetName
                };
                requestService.reviewResultCurSearchDownLoad(params).then(res => {
                    const link = document.createElement('a');  // 创建a标签
                    let resdata = "\ufeff" + res; // 解决乱码 https://www.cnblogs.com/gunelark/p/13491985.html
                    let blob = new Blob([resdata], {type: 'text/csv,charset=UTF-8'});
                    link.href = URL.createObjectURL(blob);   // 创建下载的链接
                    //num++
                    link.setAttribute('download', 'reviewedDataset.csv');  // 给下载后的文件命名
                    document.body.appendChild(link);
                    link.click();  // 点击下载
                    document.body.removeChild(link);  //  下载完成移除元素
                    window.URL.revokeObjectURL(link.href);  // 释放掉blob对象
                    // this.tableData = param.review_result_list
                })
            }
        },
    }
</script>

<style>
  .aiBom-dataList .el-input__icon {
    color: #c0c4cc !important;
  }

  /deep/ .aiBom-dataList input {
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
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1) !important;
    width: 100% !important;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px; /* 添加上下间隔 */
  }

  .custom-button {
    flex: 1; /* 让按钮平分父容器的宽度 */
    margin: 0 5px; /* 添加左右间隔 */
  }

  .consistent-row-height .cell {
    display: flex;
    align-items: center;
    min-height: 100px; /* 设置你想要的行高 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
