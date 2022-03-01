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
          value-key="license_name"
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
          restaurant.license_name
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
        .get("http://10.233.58.26:9000/api/v1/data-license", {
          params: {
            pageNum: 1,
            pageSize: 20,
            // status: this.numLicenseData.status,
            // totalNum: this.numLicenseData.totalNum,
          },
        })
        .then(function (response) {
          that.restaurants = response.data.data;
          // console.log(that.tableData);
          // that.restaurants = response.data;
          // console.log(that.numData);
        });
    },
    fuzzyMatch(str, key) {
      let index = -1,
        flag = false;
      for (var i = 0, arr = key.split(""); i < arr.length; i++) {
        //有一个关键字都没匹配到，则没有匹配到数据
        if (str.indexOf(arr[i]) < 0) {
          break;
        } else {
          let match = str.matchAll(arr[i]);
          let next = match.next();
          while (!next.done) {
            if (next.value.index > index) {
              index = next.value.index;
              if (i === arr.length - 1) {
                flag = true;
              }
              break;
            }
            next = match.next();
          }
        }
      }
      return flag;
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