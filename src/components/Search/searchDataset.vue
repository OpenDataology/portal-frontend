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
          :debounce=200
        >
          <i
            class="el-icon-search el-input__icon"
            slot="suffix"
          >
          </i>
        </el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
// import { getResultByDataset_name } from "../../../config/api.env";
import { getResultDatasetIndex } from "../../../config/api.env";

export default {
  data() {
    return {
      restaurants: [],
      state2: "",
    };
  },
  mounted(){
    this.getDatasetIndex()
  },
  // created(){
  //   this.getDatasetIndex()
  // },
  methods: {
    async querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.dataset_name
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) !== -1 //从头
        );
      };
    },
    async getDatasetIndex() {
      const { data } = await getResultDatasetIndex();
      this.restaurants = data;
      // console.log(this.restaurants);
    },
  // methods: {
  //   async querySearch(queryString, cb) {
  //     const { data } = await getResultByDataset_name(queryString);
  //     this.restaurants = data;
  //     var restaurants = this.restaurants;
  //     var results = queryString
  //       ? restaurants.filter(this.createFilter(queryString))
  //       : restaurants;
  //     // 调用 callback 返回建议列表的数据
  //     cb(results);
  //   },
  //   createFilter(queryString) {
  //     return (restaurant) => {
  //       return (
  //         // this.fuzzyMatch(restaurant.license_name.toLowerCase(),queryString.toLowerCase())
  //         restaurant.dataset_name
  //           .toLowerCase()
  //           .indexOf(queryString.toLowerCase()) !== -1 //从头
  //       );
  //     };
  //   },
    handleSelect(item) {
      this.$router.push({
        path: "/dataSetInfo",
        query: { id: item.id },
      });
    },
    // handleIconClick(item) {
    //   this.$router.push({
    //     path: "/dataSetInfo",
    //     query: { id: item.id },
    //   });
    // },
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