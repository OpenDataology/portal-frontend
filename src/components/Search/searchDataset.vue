<template>
  <div class="search-box">
    <el-row class="demo-autocomplete">
      <el-col :span="12">
        <div class="sub-title"></div>
        <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="Search"
          :trigger-on-focus="false"
          @select="handleSelect"
          value-key="dataset_name"
        >
        <i
          class="el-icon-search el-input__icon"
          slot="suffix"
          @click="handleIconClick"
        >
        </i
      >
        </el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      restaurants: [],
      state1: "",
      state2: "",
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          // this.fuzzyMatch(restaurant.license_name.toLowerCase(),queryString.toLowerCase())
          restaurant.dataset_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) !== -1 //从头
        );
      };
    },
    loadAll() {
      // 请求所有的 liense
      //要求提供模糊查询的接口
      //{id name}
      let that = this;
      axios
        .get("http://140.83.83.152:30900/api/v1/dataset", {
          params: {
            pageNum: 1,
            pageSize: 20,
            // status: this.numLicenseData.status,
            // totalNum: this.numLicenseData.totalNum,
          },
        })
        .then(function (response) {
          that.restaurants = response.data.data;
        });
    },
    handleSelect(item) {
       this.$router.push({
        path: "/licenseInfo",
        query: { id: item.id },
      });
    },
    handleIconClick(item) {
      this.$router.push({
        path: "/licenseInfo",
        query: { id: item.id },
      });
    }
  },
  mounted() {
    this.loadAll();
  },
};
</script>
<style>
.search-box {
  height: 50px;
  /* width: 105px; */
  margin-top: 7px;
  /* float: left; */
  margin-left: 10px;
}
.search-box .el-input {
  width: 250% !important;
}
.el-input__icon {
  color: #ffffff !important;
}
</style>