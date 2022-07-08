<template>
  <div class="body-box">
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
              />
            </div>
          </el-col>
          <el-col :span="2">
            <div style="width: 100px">
              <el-select class="license_color" v-model="value" placeholder="License">
                <el-option
                  v-for="item in vague"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  @click.native="toDataSetALL()"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <search-type-data-source-termsof-use />
            </div>
          </el-col>
          <el-col :span="12">
            <template>&emsp;</template>
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
      <!--  License Type    -->
      <template>
        <el-row justify="center" type="flex">
          <el-col :span="4">
            <div>
              <el-button class="licenseType-other" @click="toHome()">All</el-button>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button class="licenseType-other" @click="toTypeLicense()"
                >Data License</el-button
              >
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button class="licenseType-other" @click="toTypeDataSpecificLicense()"
                >Data-Specific License</el-button
              >
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button class="licenseType-box licenseType-other"
                >DataSource Terms of Use</el-button
              >
            </div>
          </el-col>
        </el-row>
      </template>
    </div>

    <!-- Middle part-->
    <template>
      <div>
        <h5 style="text-align: center">Total : {{ totalNum }}</h5>
        <el-empty
          v-if="licenseData.length === 0"
          description="No Data ..."
          v-show="false"
        >
        </el-empty>
        <div v-if="licenseData.length !== 0">
          <!-- 总长度/列数  = 行数 -->
          <div class="list">
            <div v-for="o in licenseData" :key="o.id">
              <el-card style="height: 120px">
                <!-- operate -->
                <div
                  slot="header"
                  class="clearfix"
                  style="height: 40px; color: #003261; font-size: 15px"
                  @click="toLicenseInfo(o.id)"
                >
                  {{ o["license_name"] }}
                </div>
                <div style="color: #a8a4a4; font-size: 10px">
                  {{ o["license_type"] }}
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- Pagination part-->
    <template>
      <div class="licenseAll-paging">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="licenseData.pageNum"
          :page-size="numLicenseData.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalNum"
        >
        </el-pagination>
      </div>
    </template>
    <!--     Tail part-->
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
  </div>
</template>
<script>
import { getTypeDataSourceTermsofUse } from "../../config/api.env.js";
import SearchTypeDataSourceTermsofUse from "../components/Search/searchTypeDataSourceTermsofUse.vue";

export default {
  components: { SearchTypeDataSourceTermsofUse },
  name: "Welcome",
  data() {
    return {
      value: [],
      vague: [
        {
          value: "1",
          label: "Dataset",
        },
      ],
      licenseData: [],
      totalNum: 0,
      numLicenseData: {
        pageSize: 12,
        pageNum: 1,
      },
      basicInfoId: {},
    };
  },
  mounted() {},
  created: function () {
    this.getLicenseData();
    // this.getLicenseForName();
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    toTypeDataSpecificLicense() {
      this.$router.push({
        path: "/typeDataSpecificLicense",
      });
    },
    toTypeLicense() {
      this.$router.push({
        path: "/typeLicense",
      });
    },

    toDataSetALL() {
      this.$router.push({
        path: "/dataSetAll",
      });
    },
    toLicenseInfo(id) {
      this.$router.push({
        path: "/licenseInfo",
        query: { id },
      });
    },
    async getLicenseData() {
      // let that = this;
      const { data, totalNum } = await getTypeDataSourceTermsofUse(this.numLicenseData);
      // const { data, totalNum } = await getLicenseDataAll();

      this.licenseData = data;
      // console.log(this.licenseData);
      this.totalNum = totalNum;
      // console.log(this.numLicenseData);
    },
    //分页监听 监听尺寸改变
    handleSizeChange(newSize) {
      this.numLicenseData.pageSize = newSize;
      this.getLicenseData();
      // console.log(newSize);
    },
    //监听页码改变
    handleCurrentChange(newPage) {
      this.numLicenseData.pageNum = newPage;
      this.getLicenseData();
      // console.log(newPage);
    },
  },
};
</script>
<style scoped>
.licenseType-box {
  background-color: #003261;
  color: #ffffff;
}
.licenseType-other {
  width: 250px;
}
/*媒体查询*/
/*@media only screen and(max-width: 720px){*/
/*  .list {*/
/*    display: grid;*/
/*    grid-template-columns: 1fr;*/
/*    height: 100px;*/
/*    gap: 10px;*/
/*    width: 80%;*/
/*    margin: 0 auto;*/
/*    margin-top: 30px;*/
/*  }*/
/*}*/

/*Pagination 分页*/
.licenseAll-paging {
  margin-top: 30px;
  text-align: center;
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}

/*登陆部分*/
.license-login-box {
  float: right;
  width: 100px;
  height: 40px;
  border-radius: 10px !important;
  color: #ffffff;
  background-color: #003261;
  border: 2px solid #ffffff;
  font-size: 15px;
}

.license-skill-box {
  width: 100px;
  height: 40px;
  border-radius: 10px !important;
  color: #ffffff;
  background-color: #003261;
  border: 2px solid #ffffff;
  font-size: 15px;
}

.license-login-success {
  float: right;
}

.license-login-box a {
  text-align: center;
}

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
}

.el-col {
  border-radius: 4px;
}

.el-select .el-input__inner:focus {
  border-color: #ffffff;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: #ffffff;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/* license -> dataset select tip text placeholder color*/
.license_color >>> input::-webkit-input-placeholder {
  color: #fff !important;
  text-align: center !important;
}

/*Welcome*/
.licenseWelcome-box {
  text-align: center;
  font-size: 27px;
  color: #ffffffff;
  margin-top: 50px;
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
