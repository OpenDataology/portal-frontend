<template>
  <div class="search-box">
    <el-row class="demo-autocomplete">
      <el-col :span="12">
        <div class="sub-title"></div>
        <el-autocomplete
          class="inline-input"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="Search"
          :trigger-on-focus="false"
          @select="handleSelect"
          value-key="license_name"
        >
        <i
          class="el-icon-search el-input__icon"
          slot="suffix"
        >
        </i
      >
        </el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
// import {getResultByLicense_name} from '../../../config/api.env'
import {getResultLicenseIndex} from '../../../config/api.env'

export default {
  data() {
    return {
      restaurants: [],
      state: "",
    };
  },
    mounted(){
    this.getLicenseIndex()
  },
  methods: {
    async querySearch(queryString, cb) {
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
          restaurant.license_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) !== -1 //从头
        );
      };
    },
    async getLicenseIndex() {
      const { data } = await getResultLicenseIndex();
      this.restaurants = data;
    },
    handleSelect(item) {
       this.$router.push({
        path: "/licenseInfo",
        query: { id: item.id },
      });
    },
    // handleIconClick(item) {
    //   this.$router.push({
    //     path: "/licenseInfo",
    //     query: { id: item.id },
    //   });
    // }
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
.el-input__inner {
    border-radius: 10px !important;
    border: 2px solid #fff !important;
    background-color: #4c8efc !important;
    color: #ffffff !important;
}
</style>