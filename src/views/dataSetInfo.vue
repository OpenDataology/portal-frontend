<template>
  <div class="boby_box">
    <!--  头部-->
    <div class="header_box">
      <el-row class="el-row">
        <el-col class="el-col" :span="24">
          <div class="grid-content bg-purple-dark">
            <!--          logo部分-->
            <div class="logo_box flaot_box">
              <img src="../assets/images/login.png" alt="" @click="toHome()" />
            </div>
            <!--          <div class="title_box flaot">
            <span>data.LISENCE</span>
            </div>-->
            <!--          下拉框部分-->
            <div class="dropdown_box flaot_box">
              <el-select
                class="license_color"
                v-model="value"
                placeholder="Dataset"
              >
                <el-option
                  v-for="item in vague"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  @click.native="toLicenseInfo(dataSetBasicInfo.id)"
                >
                </el-option>
              </el-select>
            </div>
            <!--          搜索条部分-->
            <div class="search_box flaot_box">
              <el-select
                class="search_box_len"
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <!--          搜索按钮放大镜部分-->
            <div class="search_button_box flaot_box">
              <el-button
                class="search_button"
                type="primary"
                icon="el-icon-search"
                >搜索</el-button
              >
            </div>
            <!--          登录部分-->
            <div class="login_box">
              <el-row>
                <el-button type="primary">Login</el-button>
              </el-row>
            </div>
            <!--          清除浮动部分-->
            <div class="clear_box"></div>
          </div>
        </el-col>
      </el-row>
      <!--    基本信息部分-->
      <div class="license_info_box">
        <div v-for="">
          <div class="basic_info_box license_name" style="font-size: 20px">
            Name:{{ dataSetBasicInfo.dataset_name }}
          </div>
          <div class="basic_info_box license_type" style="font-size: 13px">
            version:{{ dataSetBasicInfo.dataset_version }}
          </div>
          <div class="basic_info_box osi_approved" style="font-size: 13px">
            license_id:{{ dataSetBasicInfo.license_id }}
          </div>
          <div class="basic_info_box short_identifier" style="font-size: 13px">
            license_name:{{ dataSetBasicInfo.license_name }}
          </div>
        </div>
      </div>
    </div>
    <!--  中部-->
    <div class="basic_tabs_box">
      <div class="matedata_box">MateData</div>
      <div>
        <el-descriptions
          class="margin-top"
          title=""
          :column="3"
          :size="size"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              用户名
            </template>
            {{ dataSetBasicInfo.dataset_name }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            {{ dataSetBasicInfo.dataset_version }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            {{ dataSetBasicInfo.license_id }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets"></i>
              备注
            </template>
            {{ dataSetBasicInfo.license_name }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.licensor }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.license_from }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.license_location }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.origin }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.downloaded_outlet }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.outlet_licensed }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.data_size }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.format }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.is_personal_data }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.is_additional_verify }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.is_offensive_content }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.is_comply }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.dataset_collect_method }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              联系地址
            </template>
            {{ dataSetBasicInfo.available }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          class="margin-top"
          title=""
          :column="1"
          :size="size"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              用户名
            </template>
            {{ dataSetBasicInfo.license_content }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          class="margin-top"
          title=""
          :column="1"
          :size="size"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              手机号
            </template>
            {{ dataSetBasicInfo.description }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          class="margin-top"
          title=""
          :column="1"
          :size="size"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            {{ dataSetBasicInfo.collection_process }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          class="margin-top"
          title=""
          :column="1"
          :size="size"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              居住地
            </template>
            {{ dataSetBasicInfo.collection_process }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <!--尾部-->
    <div class="tail_box">
      <p>* 以上license的分析尚未得到律师review</p>
      <p>* 该网站所有内容不构成任何法律上的建议和保证</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "license_Info",
  props: ["id"],
  data() {
    return {
      size: "",
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "MIT",
        "MITEE",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      vague: [
        {
          value: "选项1",
          label: "License",
        },
      ],
      dataSetBasicInfo: [],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  created: function () {
    this.getDataSetBasicInfo();
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    toLicenseInfo(id) {
      this.$router.push({
        path: "/licenseInfo",
        query: { id },
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
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    getDataSetBasicInfo() {
      const that = this;
      axios
        .get("http://140.83.83.152:30900/api/v1/get_dataset_by_id", {
          params: {
            //  id: 1,
            id: that.id,
          },
        })
        .then(function (response) {
          // console.log(response.data.data);
          that.dataSetBasicInfo = response.data.data;
          // console.log(that.licenseInfo);
        });
      // console.log(that.$router.query.goodsid);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
<style>
.basic_tabs_box {
  width: 1200px;
  margin: 0 auto;
}
.matedata_box {
  width: 1200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid #3f51b5;
  background-color: #ececec;
}
.el-table .warning-row {
  background: oldlace;
}
.el-tabs__active-bar {
  background-color: #3f51b5;
}
.el-tabs__item.is-active {
  color: #3f51b5;
}
.el-tabs__item:hover {
  color: #3f51b5;
}
.el-table .success-row {
  background: #f0f9eb;
}
/* .el-tabs__nav is-top {
  margin: 0 auto;
} */
.el-tabs__nav {
  width: 1000px;
  height: 60px;
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
/* .info_tab_box {
  width: 300px;
  height: 100%;
  border: 2px solid rgb(34 139 34);
  border-radius: 5px;
  margin-left: 65px;
  margin-top: 10px;
  margin-bottom: 15px;
  box-shadow: 7px 4px 11px #232636;
} */
.el-collapse-item__wrap {
  border-radius: 10px;
}
.el-collapse-item__header {
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  background-color: #ffffff;
  /* background-color: rgb(234 237 235); */
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
.basic_info_box {
  width: 500px;
  /* text-align: center;
  line-height: 100px; */
  color: #ffffffff;
}
/*欢迎语部分*/
.license_info_box {
  margin-top: 35px;
  margin-left: 30px;
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
  width: 65px;
  border: #ffffff;
}

/*登陆部分*/
.login_box {
  margin-right: 30px;
  float: right;
}

.license_type_clo {
  font-size: 10px;
  color: #a8a4a4;
}

/* .license_name_clo a {
  color: #4598f1;
  text-decoration: none;
  font: 600 14px/20px Roboto, Helvetica Neue, sans-serif;
  letter-spacing: normal;
} */

.paging_box {
  margin: 0 auto;
  padding-top: 20px;
  width: 500px;
  height: 35px;
}

.middle_box {
  width: 1050px;
  height: 400px;
  margin: 0 auto;
}

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

.tail_box {
  width: 100%;
  height: 100%;
  background-color: #3f51b5;
  color: #ffffff;
  font-size: 1px;
  margin-top: 132px;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3f51b5;
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

.boby_box {
  height: 100%;
  width: 100%;
}

/*头部整体紫色部分*/
.header_box {
  width: 100%;
  height: 200px;
  background-color: #3f51b5;
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

.el-icon-search {
  margin-left: -15px;
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
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: #3f51b5;
  color: #ffffff;
}

.el-button {
  border-radius: 15px;
  border: 2px solid #fff;
}

.el-button--primary:focus,
.el-button--primary:hover {
  background: #3f51b5;
  border-color: #fff;
  color: #fff;
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
  background-color: #3f51b5;
  border-color: #fff;
}

.el-dropdown {
  width: 100px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #3f51b5;
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