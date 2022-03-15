<template>
  <div class="license-info-boby">
    <!--  头部-->
    <div class="header_box">
      <el-row class="el-row">
        <el-col class="el-col" :span="24">
          <div class="grid-content bg-purple-dark">
            <!--          logo部分-->
            <div class="logo_box flaot_box">
              <img src="../assets/images/logo11.png" alt="" @click="toHome()" />
            </div>
            <!--          下拉框部分-->
            <div class="dropdown_box flaot_box">
              <el-select
                class="license_color"
                v-model="value"
                placeholder="License"
              >
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
            <!--          搜索条部分-->
            <div class="search_box flaot_box">
              <search-license-info/>
            </div>
            <!--          登录部分-->
            <!-- <button class="login_box">Login</button> -->

            <!--          清除浮动部分-->
            <div class="clear_box"></div>
          </div>
        </el-col>
      </el-row>
      <!--    基本信息部分-->
      <div class="license_info_box flaot_box">
        <div v-for="">
          <div class="basic-info-box license-name" style="font-size: 20px">
            Name:{{ licenseInfo.license_name }}
          </div>
          <div class="basic-info-box license-type" style="font-size: 13px">
            type:{{ licenseInfo.license_type }}
          </div>
          <div class="basic-info-box osi-approved" style="font-size: 13px">
            approved:{{ licenseInfo.osi_approved }}
          </div>
          <div class="basic-info-box short-identifier" style="font-size: 13px">
            identifier:{{ licenseInfo.short_identifier }}
          </div>
        </div>
      </div>
      <!-- 导出 -->
      <!-- <div class="Export-box">
        <export />
      </div> -->
      <div class="clear_box"></div>
    </div>
    <!--  中部-->
    <div class="basic_tabs_box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Data" name="first">
          <div class="info_tab_box_can flaot_box">
            <div class="tab_can_box">Can</div>
            <el-collapse
              accordion
              v-for="(item, index) in licenseDataTabCan"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <!-- <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div> -->
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="info_tab_box_cannot flaot_box">
            <div class="tab_cannot_box">Cannot</div>
            <el-collapse
              accordion
              v-for="item in licenseDataTabCannot"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="info_tab_box_obligation flaot_box">
            <div class="tab_obligation_box">Obligation</div>
            <el-collapse
              accordion
              v-for="item in licenseDataTabObligation"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="info_tab_box_limitation flaot_box">
            <div class="tab_limitation_box">Limitation</div>
            <el-collapse
              accordion
              v-for="item in licenseDataTabLimitation"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="clear_box"></div>
        </el-tab-pane>
        <el-tab-pane label="Model" name="second">
          <div class="info_tab_box_can flaot_box">
            <div class="tab_can_box">Can</div>
            <el-collapse
              accordion
              v-for="item in licenseModleTabCan"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <!-- <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div> -->
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="info_tab_box_cannot flaot_box">
            <div class="tab_cannot_box">Cannot</div>
            <el-collapse
              accordion
              v-for="item in licenseModleTabCannot"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <!-- <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div> -->
              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="info_tab_box_obligation flaot_box">
            <div class="tab_obligation_box">Obligation</div>
            <el-collapse
              accordion
              v-for="item in licenseModleTabObligation"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <!-- <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div> -->
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="info_tab_box_limitation flaot_box">
            <div class="tab_limitation_box">Limitation</div>
            <el-collapse
              accordion
              v-for="item in licenseModleTabLimitation"
              :key="item.id"
            >
              <el-collapse-item>
                <template slot="title">
                  {{ item.property }}
                </template>
                <!-- <div>
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                </div> -->
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="clear_box"></div>
        </el-tab-pane>
        <el-tab-pane label="Others" name="third">
          <el-table
            :data="licenseOthersTab"
            style="width: 60%; margin: 0 auto"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="id" label="id" width="450">
            </el-table-column>
            <el-table-column prop="property" label="property" width="450">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--尾部-->
    <div class="license-info-tail">
      <p>* The above license analysis has not been reviewed by lawyers</p>
      <p>
        * All contents of the portal do not constitute any legal advice and
        guarantee
      </p>
    </div>
  </div>
</template>
<script>
// import Export from "../components/Export/Export.vue";
import { getLicenseBasicInfo } from "../../config/api.env.js";
import { getLicenseBasicDataTab } from "../../config/api.env.js";
import { getLicenseBasicModleTab } from "../../config/api.env.js";
import { getLicenseBasicOtherTab } from "../../config/api.env.js";
import SearchLicenseInfo from '../components/Search/searchLicenseInfo.vue';
import event from "../assets/js/instance";


export default {
  // components: {Export, SearchLicenseInfo },
  components: { SearchLicenseInfo },
  name: "license_Info",
  props: ["id"],
  data() {
    return {
      activeName: "second",
      options: [],
      value: [],
      vague: [
        {
          value: "选项1",
          label: "Dataset",
        },
      ],
      licenseInfo: [],
      licenseDataTabCan: [],
      licenseDataTabCannot: [],
      licenseDataTabObligation: [],
      licenseDataTabLimitation: [],
      licenseModleTabCan: [],
      licenseModleTabCannot: [],
      licenseModleTabObligation: [],
      licenseModleTabLimitation: [],
      licenseOthersTab: [],
    };
  },
  mounted() {},
  created: function () {
    this.getLicenseInfo();
    this.getLicenseDataTab();
    this.getLicenseModleTab();
    this.getLicenseOtherTab();
    event.$on("updateLicenseData", (id) => {
      this.getLicenseInfo(id);
    });
    event.$on("updateLicenseData", (id) => {
      this.getLicenseDataTab(id);
    });
    event.$on("updateLicenseData", (id) => {
      this.getLicenseModleTab(id);
    });
    event.$on("updateLicenseData", (id) => {
       this.getLicenseOtherTab(id);
    });
    
      
     
  },
  beforeDestroy() {
    event.$off("updateLicenseData");
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    toDataSetALL() {
      this.$router.push({
        path: "/dataSetAll",
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    async getLicenseInfo(id) {
      // const { data } = await getLicenseBasicInfo({ id: this.id });
      let data
      if(!id){
        data = await getLicenseBasicInfo({ id: this.id});
      }else{
        data = await getLicenseBasicInfo({ id });
      }
      // console.log(data);
      this.licenseInfo = data.data;
      // console.log(this.licenseInfo);
    },
    async getLicenseDataTab(id) {
      // const { data } = await getLicenseBasicDataTab({ id: this.id });
      let data
      if(!id){
        data = await getLicenseBasicDataTab({ id: this.id});
      }else{
        data = await getLicenseBasicDataTab({ id });
      }
      // console.log(data);
      this.licenseDataTabCan = data.data.can;
      this.licenseDataTabCannot = data.data.cannot;
      this.licenseDataTabObligation = data.data.obligation;
      this.licenseDataTabLimitation = data.data.limitation;
    },
    async getLicenseModleTab(id) {
      // const { data } = await getLicenseBasicModleTab({ id: this.id });
      let data
      if(!id){
        data = await getLicenseBasicModleTab({ id: this.id});
      }else{
        data = await getLicenseBasicModleTab({ id });
      }
      this.licenseModleTabCan = data.data.can;
      this.licenseModleTabCannot = data.data.cannot;
      this.licenseModleTabObligation = data.data.obligation;
      this.licenseModleTabLimitation = data.data.limitation;
    },
    async getLicenseOtherTab(id) {
      // const { data } = await getLicenseBasicOtherTab({ id: this.id });
      let data
      if(!id){
        data = await getLicenseBasicOtherTab({ id: this.id});
      }else{
        data = await getLicenseBasicOtherTab({ id });
      }
      this.licenseOthersTab = data.data;
    },

    handleClick(tab, event) {},
    handleChange(val) {},
  },
};
</script>
<style >
.Export-box {
  margin-left: 50px;
}
.tab_obligation_box {
  width: 299.7px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  color: #ffff;
  border-color: #4197de;
  border-radius: 5px 5px 0 0;
  font-size: 1.3em;
  background-color: #4197de;
}
.tab_limitation_box {
  width: 299.7px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  color: #ffff;
  border-color: #6364e2;
  border-radius: 5px 5px 0 0;
  font-size: 1.3em;
  background-color: #6364e2;
}
.tab_cannot_box {
  width: 299.7px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  color: #ffff;
  border-color: #e6717d;
  border-radius: 5px 5px 0 0;
  font-size: 1.3em;
  background-color: #e6717d;
}
.tab_can_box {
  width: 299.7px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  color: #ffff;
  border-color: #4db24b;
  border-radius: 5px 5px 0 0;
  font-size: 1.3em;
  background-color: #4db24b;
}
.el-tabs__item {
  width: 505px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.el-tabs__item a:hover {
  color: #f00;
}
.el-table .warning-row {
  background: oldlace;
}
.el-tabs__active-bar {
  background-color: #4c8efc !important;
}
.el-tabs__item.is-active {
  color: #4c8efc !important;
}
.el-tabs__item:hover {
  color: #4c8efc !important;
}
.el-table .success-row {
  background: #f0f9eb;
}
.el-tabs__nav is-top {
  margin: 0 auto;
}
.info_tab_box_can {
  width: 300px;
  height: 100%;
  border: 2px solid rgb(34 139 34);
  /* border-radius: 10px; */
  border-radius: 5px 5px 0 0;
  margin-left: 65px;
  margin-top: 10px;
  margin-bottom: 15px;
  box-shadow: 7px 4px 11px #232636;
}
.info_tab_box_cannot {
  width: 300px;
  height: 100%;
  border: 2px solid #9b3535;
  border-radius: 5px 5px 0 0;
  padding-left: 1px;
  margin-left: 65px;
  margin-top: 10px;
  margin-bottom: 15px;
  box-shadow: 7px 4px 11px #232636;
}
.info_tab_box_obligation {
  width: 300px;
  height: 100%;
  border: 2px solid #015478;
  border-radius: 5px 5px 0 0;
  margin-left: 65px;
  margin-top: 10px;
  margin-bottom: 15px;
  box-shadow: 7px 4px 11px #232636;
}
.info_tab_box_limitation {
  width: 300px;
  height: 100%;
  border: 2px solid #015478;
  border-radius: 5px 5px 0 0;
  margin-left: 65px;
  margin-top: 10px;
  margin-bottom: 15px;
  box-shadow: 7px 4px 11px #232636;
}

.el-collapse-item__wrap {
  border-radius: 10px;
}
.el-collapse-item__header {
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  background-color: #ffffff;
}
.el-collapse {
  border: 0;
}
.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 0px;
}
/* .el-tabs__content {
  height: 390px;
} */
.basic-info-box {
  width: 500px;
  /* text-align: center;
  line-height: 100px; */
  color: #ffffffff;
}
/*欢迎语部分*/
.license_info_box {
  margin-top: 35px;
  margin-left: 70px;
  height: 100px;
  width: 300px;
  font-size: 17px;
  color: #ffffffff;
}

/*}*/
/*下拉框部分*/
.dropdown_box {
  height: 50px;
  width: 105px;
  margin-top: 7px;
  /*float: left;*/
  margin-left: 50px;
}

.dropdown_box .el-input {
  width: 100px;
}

/*搜索框部分*/
.search_box {
  width: 350px;
}

/*搜索框长度*/
.search_box_len {
  margin-top: 7px;
  width: 350px;
}

/*搜索按钮*/
.search_button {
  width: 80px;
  border: #ffffff;
}

/*登陆部分*/
.login_box {
  margin-right: 30px;
  margin-top: 7px;
  float: right;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #4c8efc;
  line-height: 35px;
  text-align: center;
  border: 2px solid #ffffff;
}

/* .license_type_clo {
  font-size: 10px;
  color: #a8a4a4;
} */
.like_box {
  border-radius: 10px;
  height: 80px;
  width: 320px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #efeff5;
  box-shadow: 5px 5px 10px #232636;
}

.el-descriptions :not(.is-bordered) .el-descriptions-item__cell {
  padding-bottom: 9px;
}

.el-descriptions {
  font-size: 11px;
}

.my-label {
  background: #e1f3d8;
}

.my-content {
  background: #fde2e2;
}

.license-info-tail {
  width: 100%;
  height: 100%;
  background-color: #4c8efc;
  color: #ffffff;
  font-size: 1px;
  margin-top: 132px;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #4c8efc !important;
}
.el-pagination .el-select .el-input .el-input__inner {
  border-radius: 10px;
}

.margin_box {
  margin-left: 60px;
}

.margin_box_top {
  margin-top: 25px;
}

/*顶部浮动*/
.flaot_box {
  float: left;
}

/*清除浮动*/
.clear_box {
  float: none;
}

.license-info-boby {
  height: 100%;
  width: 100%;
}

/*头部整体紫色部分*/
.header_box {
  width: 100%;
  height: 200px;
  background-color: #4c8efc;
}

/*logo部分*/
.logo_box {
  height: 55px;
  width: 80px;
  margin-left: 30px;
  /*float: left;*/
}

.logo_box img {
  height: 50px;
  width: 80px;
}

/*标题部分*/
/*.title_box {*/
/*  width: 100px;*/
/*  height: 50px;*/
/*  color: #FFFFFF;*/
/*  text-align: center;*/
/*  line-height :50px;*/
/*  font-family:"Arial Black";*/

.el-button::before {
  background-color: #fff;
}

.el-select__tags {
  width: 300px;
}

/* 谷歌下拉框placeholder提示字颜色 */
.el-input__inner::-webkit-input-placeholder {
  color: #fff;
  text-align: center;
}

.el-input__inner {
  border-radius: 10px !important;
  border: 2px solid #fff !important;
  background-color: #4c8efc !important;
  color: #ffffff !important;
}

.el-button {
  border-radius: 10px !important;
  border: 2px solid #fff !important;
}

.el-button--primary:focus,
.el-button--primary:hover {
  background: #4c8efc !important;
  border-color: #fff !important;
  color: #fff !important;
}

.el-select .el-input__inner:focus {
  border-color: #ffffff;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: #ffffff;
}

.el-button--primary {
  margin-top: 7px;
  color: #fff;
  background-color: #4c8efc !important;
  border-color: #fff;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #4c8efc !important;
}

.grid-content {
  border-radius: 4px;
  min-height: 55px;
  /*box-shadow: 0px 4px 6px 2px #787272;*/
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
}

/*.header_box span{*/
/*  line-height :200px*/
/*}*/
</style>