<template>
  <div class="boby_box">
    <!--  头部-->
    <div class="header_box">
      <el-row class="el-row">
        <el-col class="el-col" :span="24">
          <div class="grid-content bg-purple-dark">
            <!--          logo部分-->
            <div class="logo_box daset-flaot-box">
              <img src="../assets/images/11.png" alt="" @click="toHome()" />
            </div>
            <!--          <div class="title_box flaot">
            <span>data.LISENCE</span>
            </div>-->
            <!--          下拉框部分-->
            <div class="dropdown_box daset-flaot-box">
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
                  @click.native="toHome()"
                >
                </el-option>
              </el-select>
            </div>
            <!--          搜索条部分-->
            <div class="search_box daset-flaot-box">
              <searchDataset />
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
      <!--    欢迎语部分-->
      <div class="welcome">Welcome to Dataset Metadata Portal</div>
    </div>
    <!--  中部-->

    <div class="middle_box">
      <div
        class="dataset-like-box daset-flaot-box "
        v-for="item in dataSetData"
        @click="toDataSetInfo(item.id)"
      >
        <!-- <div class="license_id_clo">{{ item.license_id }}</div> -->

        <div class="dataset-name-clo dataset-clo">{{ item.dataset_name }}</div>
        <div class="license_type_clo dataset-clo">{{ item.dataset_version }}</div>
      </div>
    </div>

    <!--  分页-->
    <!-- <button @click="toLicenseInfo()"></button> -->
    <div class="paging-box">
      <div class="dataset-total-box daset-flaot-box">Total:{{ numDatasetData.totalNum }}</div>

      <div class="block daset-flaot-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="dataSetData.pageNum"
          :page-size="numDatasetData.pageSize"
          layout=" prev, pager, next, jumper"
          :total="numDatasetData.totalNum"
        >
        </el-pagination>
      </div>
    </div>

    <!--尾部-->
    <div class="dataset-tail-box">
      <el-row>
        <el-col :span="24">
          <div class="bg-purple-dark tail_box_len">
            <p>* The above license analysis has not been reviewed by lawyers</p>
            <p>
              * All contents of the portal do not constitute any legal advice
              and guarantee
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import searchDataset from "../components/Search/searchDataset.vue";

export default {
  components: { searchDataset },
  name: "Welcome",
  data() {
    return {
      value: [],
      vague: [
        {
          value: "选项1",
          label: "License",
        },
      ],
      dataSetData: [],
      numDatasetData: {
        totalNum: 20,
        pageSize: 12,
        pageNum: 1,
        status: "success",
      },
      basicInfoId: {},
    };
  },
  mounted() {
    document.getElementsByClassName(
      "el-pagination__jump"
    )[0].childNodes[0].nodeValue = "Go";
    document.getElementsByClassName(
      "el-pagination__jump"
    )[0].childNodes[2].nodeValue = "";
  },
  created: function () {
    this.getDataSetData();
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    toDataSetInfo(id) {
      this.$router.push({
        path: "/dataSetInfo",
        query: { id },
      });
    },

    getDataSetData() {
      let that = this;
      axios
        .get("http://140.83.83.152:30900/api/v1/dataset", {
          params: {
            pageNum: this.numDatasetData.pageNum,
            pageSize: this.numDatasetData.pageSize,
            status: this.numDatasetData.status,
            totalNum: this.numDatasetData.totalNum,
          },
        })
        .then(function (response) {
          that.dataSetData = response.data.data;
          // console.log(that.dataSetData);
          that.numDatasetData = response.data;
          // console.log(that.numDatasetData);
        });
    },

    //分页监听 监听尺寸改变
    handleSizeChange(newSize) {
      this.numDatasetData.pageSize = newSize;
      this.getLicenseData();
    },
    //监听页码改变
    handleCurrentChange(newPage) {
      this.numDatasetData.pageNum = newPage;
      this.getLicenseData();
      // console.log(newPage)
    },
  },
};
</script>

<style>
.dataset-total-box{
  line-height: 32px;
  text-align: center;
  font-size: 13px;
  color: rgb(126, 123, 123);
}
.dataset-clo{
  margin-left: 5px;
  margin-top: 3px;
}
.license_type_clo {
  font-size: 10px;
  color: #a8a4a4;
}

.dataset-name-clo {
  color: #4598f1;
  text-decoration: none;
  font: 600 13px/20px Roboto, Helvetica Neue, sans-serif;
  letter-spacing: normal;
}

.paging-box {
  margin: 0 auto;
  margin-top: 20px;
  width: 300px;
  height: 35px;
}

.middle_box {
  width: 1120px;
  height: 400px;
  margin: 0 auto;
}

.dataset-like-box {
  border-radius: 5px;
  height: 80px;
  width: 330px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #ffffff;
  box-shadow: 3px 2px 10px #232636;
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

.tail_box_len {
  width: 100%;
  height: 40px;
}

.dataset-tail-box {
  color: #ffffff;
  font-size: 1px;
  margin-top: 17px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #4c8efc;
}
.el-pagination .el-select .el-input .el-input__inner {
  border-radius: 8px;
  height: 22px;
}

.margin_box {
  margin-left: 60px;
}

.margin_box_top {
  margin-top: 25px;
}

/*顶部浮动*/
.daset-flaot-box {
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
  float: right;
}

/*欢迎语部分*/
.welcome {
  height: 100px;
  width: 1400px;
  text-align: center;
  font-size: 27px;
  color: #ffffffff;
  margin: 0 auto;
  margin-top: 40px;
}

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
  background-color: #4c8efc;
  color: #ffffff;
}

.el-button {
  border-radius: 15px;
  border: 2px solid #fff;
}

.el-button--primary:focus,
.el-button--primary:hover {
  background: #4c8efc;
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
  background-color: #4c8efc;
  border-color: #fff;
}

/* .el-dropdown {
  width: 100px;
} */

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #4c8efc;
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
