<template>
  <div class="body-box">
    <!--Navigation bar-->
    <div class="licenseHeader-box">
      <!--  Top Bar    -->
      <template>
        <el-row :gutter="20" class="licenseHeader-top" style="padding-bottom: 10px">
          <el-col :span="2">
            <div>
              <img
                src="../assets/images/logo.png"
                alt=""
                style="width: 80px; height: 50px"
                @click="toHome()"
              />
            </div>
          </el-col>
          <el-col :span="2">
            <div style="width: 100px">
              <el-select class="license_color" v-model="value" placeholder="Dataset">
                <el-option
                  v-for="item in vague"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  @click.native="toHome()"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <searchDataset />
            </div>
          </el-col>
          <el-col :span="12">
            <template>
              <div style="width: 100px">
                <el-select class="license_color" v-model="value" placeholder="Menu">
                  <el-option
                    v-for="items in options"
                    :key="items.values"
                    :label="items.label"
                    :value="items.values"
                    @click.native="changenewClass"
                  >
                  </el-option>
                </el-select>
              </div>
            </template>
          </el-col>
        </el-row>
      </template>
      <!--  Welcome  -->
      <template>
        <el-row>
          <el-col :span="24">
            <p class="licenseWelcome-box">Welcome to Dataset Metadata Portal</p>
          </el-col>
        </el-row>
      </template>
    </div>
    <!-- Middle part-->
    <template>
      <div>
        <h5 style="text-align: center; color: #003261">Total : {{ totalNum }}</h5>
        <el-empty
          v-if="dataSetData.length === 0"
          description="No Data ..."
          v-show="false"
        >
        </el-empty>
        <div v-if="dataSetData.length !== 0">
          <!-- 总长度/列数  = 行数 -->
          <div class="list">
            <div v-for="o in dataSetData" :key="o.id">
              <el-card style="height: 120px">
                <!-- operate -->
                <div
                  slot="header"
                  class="clearfix"
                  style="height: 40px; color: #003261; font-size: 15px"
                  @click="toDataSetInfo(o.id)"
                >
                  {{ o["dataset_name"] }}
                </div>
                <div style="color: #a8a4a4; font-size: 10px">
                  {{ o["license_name"] }}
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!--  分页-->
    <div class="Dataset-paging">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="dataSetData.pageNum"
          :page-size="numDatasetData.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalNum"
        >
        </el-pagination>
      </div>
    </div>
    <!--尾部-->
    <template>
      <div class="license-tail-box">
        <el-row>
          <el-col :span="24">
            <div class="bg-purple-dark tail_box_len">
              <p>* The above license analysis has not been reviewed by lawyers</p>
              <p>
                * All contents of the portal do not constitute any legal advice and
                guarantee
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>

    <el-dialog title="AI Open Dataset Metadata Uploader" :visible.sync="dialogFormVisible">
      <el-form :model="datasetMetadataForm" ref="datasetMetadataForm">
        <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
          <el-input v-model="datasetMetadataForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Version" :label-width="formLabelWidth" prop="Version">
          <el-input v-model="datasetMetadataForm.version" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="License ID" :label-width="formLabelWidth" prop="License ID">
          <el-input v-model="datasetMetadataForm.licenseId" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="License Name" :label-width="formLabelWidth" prop="License Name">
          <el-input v-model="datasetMetadataForm.licenseName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Licensor" :label-width="formLabelWidth" prop="Licensor">
          <el-input v-model="datasetMetadataForm.licensor" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="License From" :label-width="formLabelWidth" prop="License From">
          <el-input v-model="datasetMetadataForm.licenseFrom" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="License Location" :label-width="formLabelWidth" prop="License Location">
          <el-input v-model="datasetMetadataForm.licenseLocation" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Origin" :label-width="formLabelWidth" prop="Origin">
          <el-input v-model="datasetMetadataForm.origin" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Downloaded" :label-width="formLabelWidth" prop="Downloaded">
          <el-input v-model="datasetMetadataForm.downloaded" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="Outlet" :label-width="formLabelWidth" prop="Outlet">
          <el-input v-model="datasetMetadataForm.outlet" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Size" :label-width="formLabelWidth" prop="Size">
          <el-input v-model="datasetMetadataForm.size" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Format" :label-width="formLabelWidth" prop="Format">
          <el-input v-model="datasetMetadataForm.format" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="Personal" :label-width="formLabelWidth" prop="Personal">
          <el-input v-model="datasetMetadataForm.personal" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Additional" :label-width="formLabelWidth" prop="Additional">
          <el-input v-model="datasetMetadataForm.additional" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Offensive" :label-width="formLabelWidth" prop="Offensive">
          <el-input v-model="datasetMetadataForm.offensive" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="Comply" :label-width="formLabelWidth" prop="Comply">
          <el-input v-model="datasetMetadataForm.comply" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Collect" :label-width="formLabelWidth" prop="Collect">
          <el-input v-model="datasetMetadataForm.collect" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Available" :label-width="formLabelWidth" prop="Available">
          <el-input v-model="datasetMetadataForm.available" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item label="License content" :label-width="formLabelWidth" prop="License content">
          <el-input v-model="datasetMetadataForm.licenseContent" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth" prop="Description">
          <el-input v-model="datasetMetadataForm.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Hashcode" :label-width="formLabelWidth" prop="Hashcode">
          <el-input v-model="datasetMetadataForm.hashcode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Collection process" :label-width="formLabelWidth" prop="Collection process">
          <el-input v-model="datasetMetadataForm.collectionProcess" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="clearDatasetMetadata('datasetMetadataForm')">clear</el-button>
        <el-button type="primary" @click="uploadDatasetMetadata('datasetMetadataForm')">upload</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import searchDataset from "../components/Search/searchDataset.vue";
import { getDatasetDataAll } from "../../config/api.env.js";
import { Message } from "element-ui";

export default {
  components: { searchDataset },
  name: "Welcome",
  data() {
    return {
      value: [],
      vague: [
        {
          value: "1",
          label: "License",
        },
        {
          value:"2",
          label:"Review",
        }
      ],
      options: [
        {
          values: "Template",
          label: "Template",
        },
        {
          values: "Badges",
          label: "Badges",
        },
        {
          values: "upload_dataset_metadata",
          label: "Upload dataset metadata",
        }
      ],
      dataSetData: [],
      dialogFormVisible: false,
      datasetMetadataForm: {
        name: "",
        version: "",
        licenseId:"",
        licenseName:"",
        licensor:"",
        licenseFrom:"",
        licenseLocation:"",
        origin:"",
        downloaded:"",
        outlet:"",
        size:"",
        format:"",
        personal:"",
        additional:"",
        offensive:"",
        comply:"",
        collect:"",
        available:"",
        licenseContent:"",
        description:"",
        hashcode:"",
        collectionProcess:""
      },
      totalNum: 0,
      numDatasetData: {
        pageSize: 12,
        pageNum: 1,
      },
      basicInfoId: {},
    };
  },
  mounted() {},
  created: function () {
    this.getDatasetData();
  },
  methods: {
    changenewClass() {
      console.log(this.value);
      if (this.value === "Template") {
        // 另外添加一个跳转页面
        this.$router.push({
          path: "/dataSetFormat",
        });
      } else if (this.value === "Badges") {
        // 另外添加跳转页面
        this.$router.push({
          path: "/dataSetSymbol",
        });
      } else if (this.value === "upload_dataset_metadata") {
        // // 打开填写表单
        this.dialogFormVisible = true;
      }
      this.$forceUpdate();
    },
    toHome() {
      if(this.value == 1){
        this.$router.push({
          path: "/licenseAll",
        });
      }else if(this.value == 2){
        this.$router.push({
          path: "/review",
        });
        if(this.$route.path === '/dataSetAll' || this.$route.path === '/' ){
          this.value = 'DataSet';
        }
      }
    },
    toDataSetInfo(id) {
      this.$router.push({
        path: "/dataSetInfo",
        query: { id },
      });
    },
    async getDatasetData() {
      const { data, totalNum } = await getDatasetDataAll(this.numDatasetData);
      this.dataSetData = data;
      this.totalNum = totalNum;
    },
    //分页监听 监听尺寸改变
    handleSizeChange(newSize) {
      this.numDatasetData.pageSize = newSize;
      this.getDatasetData();
    },
    //监听页码改变
    handleCurrentChange(newPage) {
      this.numDatasetData.pageNum = newPage;
      this.getDatasetData();
      // console.log(newPage)
    },
    tipMessage(message, type) {
      Message({
        message: message,
        type: type
      })
    },
    // 通过表单获取数据集元数据信息
    uploadDatasetMetadata(datasetMetadataForm) {
      this.$refs[datasetMetadataForm].validate(async(valid) => {
        if (valid) {
          console.log(this.datasetMetadataForm.name);
          console.log(this.datasetMetadataForm.version);
          console.log(this.datasetMetadataForm.licenseId);

          console.log(this.datasetMetadataForm.licenseName);
          console.log(this.datasetMetadataForm.licensor);
          console.log(this.datasetMetadataForm.licenseFrom);

          console.log(this.datasetMetadataForm.licenseLocation);
          console.log(this.datasetMetadataForm.origin);
          console.log(this.datasetMetadataForm.downloaded);

          console.log(this.datasetMetadataForm.outlet);
          console.log(this.datasetMetadataForm.size);
          console.log(this.datasetMetadataForm.format);

          console.log(this.datasetMetadataForm.personal);
          console.log(this.datasetMetadataForm.additional);
          console.log(this.datasetMetadataForm.offensive);

          console.log(this.datasetMetadataForm.comply);
          console.log(this.datasetMetadataForm.collect);
          console.log(this.datasetMetadataForm.available);

          console.log(this.datasetMetadataForm.licenseContent);
          console.log(this.datasetMetadataForm.description);
          console.log(this.datasetMetadataForm.hashcode);
          console.log(this.datasetMetadataForm.collectionProcess);

          this.dialogFormVisible = false;
          this.clearDatasetMetadata(datasetMetadataForm);
          this.tipMessage("Submitted successfully, please wait for review!", "success")
        } else {
          console.log('error submit!');
          alert("Some required information is not filled, please try again!")
          this.tipMessage("Some required information is not filled", "warning")
          return false;
        }
      });
    },
    // 清空数据集元数据表单
    clearDatasetMetadata(datasetMetadataForm) {
      this.$refs[datasetMetadataForm].validate(async(valid) => {
        if (valid) {
          for(var key in this.datasetMetadataForm){
            this.datasetMetadataForm[key] = "";
          }
        } 
      });
    },
  },
};
</script>
<style scoped>
/*Header-top Part*/
.licenseHeader-top {
  margin: 0 !important;
  padding-bottom: 10px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 50%);
}

/*Header Part*/
.licenseHeader-box {
  padding-top: 20px;
  background-color: #003261;
  padding-bottom: 30px;
  height: 217px;
}

/*Welcome*/
.licenseWelcome-box {
  text-align: center;
  font-size: 27px;
  color: #ffffffff;
  margin-top: 50px;
}

/*Middle part*/
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}

/*Pagination 分页*/
.Dataset-paging {
  margin-top: 30px;
  text-align: center;
}
/* license -> dataset select tip text placeholder color*/
.license_color >>> input::-webkit-input-placeholder {
  color: #fff !important;
  text-align: center !important;
}
/*Tail-box*/
.tail_box_len {
  width: 100%;
  height: 40px;
}

.license-tail-box {
  color: #ffffff;
  font-size: 1px;
  margin-top: 9px;
}

.license-tail-box .bg-purple-dark {
  background: #003261 !important;
}
</style>
