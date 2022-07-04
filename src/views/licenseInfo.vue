<template>
  <div class="license-info-boby">
    <!--  头部-->
    <div class="licenseInfoHeader-box">
      <el-row class="licenseInfoHeader-top" :gutter="20" style="padding-bottom: 10px">
        <el-col :span="2">
          <div style=" width: 80px">
            <img
              src="../assets/images/logo.png"
              alt=""
              style=" width: 80px;height: 50px"
              @click="toHome"
            />
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light" style=" width: 100px">
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
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <SearchLicenseInfo/>
          </div>
        </el-col>
        <el-col :span="12">
        </el-col>

      </el-row>
      <!--    基本信息部分-->
      <div class="license_info_box">
        <div>
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
    </div>

    <template>
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" stretch >
        <el-tab-pane label="Data" name="first">
          <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #4db24b">
                  <div slot="header" style="text-align: center;color: #4db24b">
                    <span>Can</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseDataTabCan"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #4db24b">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #9d0e0e">
                  <div slot="header" style="text-align: center;color: #9d0e0e">
                    <span>Cannot</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseDataTabCannot"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #9d0e0e">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #5473ea">
                  <div slot="header" style="text-align: center;color: #5473ea">
                    <span>Limitation</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseDataTabLimitation"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #5473ea">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #370186">
                  <div slot="header" style="text-align: center;color: #370186;">
                    <span>Obligation</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseDataTabObligation"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #370186">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Model" name="second">
          <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #4db24b">
                  <div slot="header" style="text-align: center;color: #4db24b">
                    <span>Can</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseModleTabCan"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #4db24b">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #9d0e0e">
                  <div slot="header" style="text-align: center;color: #9d0e0e">
                    <span>Cannot</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseModleTabCannot"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #9d0e0e">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #5473ea">
                  <div slot="header" style="text-align: center;color: #5473ea">
                    <span>Limitation</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseModleTabObligation"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #5473ea">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #370186">
                  <div slot="header" style="text-align: center;color: #370186;">
                    <span>Obligation</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseModleTabLimitation"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #370186">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Others" name="third">
          <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="15">
              <div>
                <el-card class="box-card" style="border: 1px  solid  #003261">
                  <div slot="header" style="text-align: center;color: #003261">
                    <span>Others</span>
                  </div>
                  <el-collapse
                    v-model="activeNames"
                    @change="handleChange"
                    accordion
                    v-for="(item, index) in licenseOthersTab"
                    :key="item.id">
                    <el-collapse-item>
                      <div slot="title" style="color: #4db24b">
                        {{ item.property }}
                      </div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </template>
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
import Export from "../components/Export/Export.vue";
import {getLicenseBasicInfo} from "../../config/api.env.js";
import {getLicenseBasicDataTab} from "../../config/api.env.js";
import {getLicenseBasicModleTab} from "../../config/api.env.js";
import {getLicenseBasicOtherTab} from "../../config/api.env.js";
import SearchLicenseInfo from '../components/Search/searchLicenseInfo.vue';
import event from "../assets/js/instance";


export default {
  components: {Export, SearchLicenseInfo},
  // components: { SearchLicenseInfo },
  name: "license_Info",
  props: ["id"],
  data() {
    return {
      activeName: "first",
      activeNames: ['1'],
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
  mounted() {
  },
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
    tableRowClassName({row, rowIndex}) {
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
      if (!id) {
        data = await getLicenseBasicInfo({id: this.id});
      } else {
        data = await getLicenseBasicInfo({id});
      }
      // console.log(data);
      this.licenseInfo = data.data;
      // console.log(this.licenseInfo);
    },
    async getLicenseDataTab(id) {
      // const { data } = await getLicenseBasicDataTab({ id: this.id });
      let data
      if (!id) {
        data = await getLicenseBasicDataTab({id: this.id});
      } else {
        data = await getLicenseBasicDataTab({id});
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
      if (!id) {
        data = await getLicenseBasicModleTab({id: this.id});
      } else {
        data = await getLicenseBasicModleTab({id});
      }
      this.licenseModleTabCan = data.data.can;
      this.licenseModleTabCannot = data.data.cannot;
      this.licenseModleTabObligation = data.data.obligation;
      this.licenseModleTabLimitation = data.data.limitation;
    },
    async getLicenseOtherTab(id) {
      // const { data } = await getLicenseBasicOtherTab({ id: this.id });
      let data
      if (!id) {
        data = await getLicenseBasicOtherTab({id: this.id});
      } else {
        data = await getLicenseBasicOtherTab({id});
      }
      this.licenseOthersTab = data.data;
    },

    handleClick(tab, event) {
    },
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped>
>>> .el-tabs__header {
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}
>>> .el-tabs__item {
  font-size: 20px !important;
  height: 60px;
  line-height: 60px;
}
.licenseInfoHeader-box {
  padding-top: 20px;
  background-color: #003261;
  padding-bottom: 50px;
}

.licenseInfoHeader-top {
  margin: 0 !important;
  padding-bottom: 10px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 50%);
}



>>> .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
  color: #003261 !important;
}

>>> .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #003261 !important;
}

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
.license-info-tail {
  width: 100%;
  height: 100%;
  background-color: #003261;
  color: #ffffff;
  font-size: 1px;
}

/* 谷歌下拉框placeholder提示字颜色 */
>>> .el-input__inner::-webkit-input-placeholder {
  color: #fff;
  text-align: center;
}

.el-input__inner {
  border-radius: 10px !important;
  border: 2px solid #fff !important;
  background-color: #003261 !important;
  color: #ffffff !important;
}


</style>
