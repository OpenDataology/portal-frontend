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
import {getLoadDatasetAll} from '../../../config/api.env'

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
    async loadAll() {
      const  {data}  = await getLoadDatasetAll();
      this.restaurants = data;
      console.log(this.restaurants);
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