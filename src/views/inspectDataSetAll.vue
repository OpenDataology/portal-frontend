<template>
  <div class="body-box">
    <!--Navigation bar-->
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
                @click="toHome()"
              />
            </div>
          </el-col>
          <el-col :span="2">
            <div style="width: 100px">
              <el-select class="license_color" v-model="value" placeholder="AIBOM">
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
          </el-col>
          <el-col :span="8">
            <div>
              <searchDataset />
            </div>
          </el-col>
<!--          <el-col :span="12">-->
<!--            <template>-->
<!--              <div style="width: 100px">-->
<!--                <el-select class="license_color" v-model="value" placeholder="Menu">-->
<!--                  <el-option-->
<!--                    v-for="items in options"-->
<!--                    :key="items.values"-->
<!--                    :label="items.label"-->
<!--                    :value="items.values"-->
<!--                    @click.native="changenewClass"-->
<!--                  >-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--              </div>-->
<!--            </template>-->
<!--          </el-col>-->
        </el-row>
      </template>
      <!--  Welcome  -->
      <template>
        <el-row>
          <el-col :span="24">
            <p class="licenseWelcome-box">Welcome to inspectDataSet</p>
          </el-col>
        </el-row>
      </template>
    </div>
    <!-- Middle part-->
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Data Review" name="first"><inspect-data-set @number="getReviewDataNumber"></inspect-data-set></el-tab-pane>
        <el-tab-pane label="Audited Dataset" name="second"><inspected-data-set @number="getResultDataNumber"></inspected-data-set></el-tab-pane>
      </el-tabs>
      <div>
        <h5 style="text-align: center; color: #003261">Total : {{ totalNum }}</h5>
      </div>

    </template>
    <!--尾部-->
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
import searchDataset from "../components/Search/searchDataset.vue";
import inspectDataSet from "../components/Inspect/inspectDataSet"
import InspectedDataSet from "../components/Inspect/inspectedDataSet";

export default {
  components: {InspectedDataSet, searchDataset, inspectDataSet },
  name: "Welcome",
  data() {
    return {
      activeName: 'first',
      value: [],
      vague: [
        {
          value: "1",
          label: "License",
        },
      ],
      options: [
        {
          values: "Template",
          label: "Template",
        },
        {
          values: "Badges",
          label: "Badges",
        },
      ],
      dataSetData: [],
      totalNum: 0,
      reviewTotalNum: 0,
      resultTotalNum: 0,
      numDatasetData: {
        pageSize: 12,
        pageNum: 1,
      },
      basicInfoId: {},
    };
  },
  mounted() {},
  created: function () {

  },
  methods: {
    handleClick(tab, event) {
      if (tab.index == 0){
        this.totalNum = this.reviewTotalNum
      }else {
        this.totalNum = this.resultTotalNum
      }
    },
    changenewClass() {
      console.log(this.value);
      if (this.value === "Template") {
        // 另外添加一个跳转页面
        this.$router.push({
          path: "/dataSetFormat",
        });
      } else if (this.value === "Badges") {
        // 另外添加跳转页面
        this.$router.push({
          path: "/dataSetSymbol",
        });
      }
      this.$forceUpdate();
    },
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    // getDataNumber(num){
    //   this.totalNum = num
    // },
    getReviewDataNumber(num){
      this.reviewTotalNum = num
      this.totalNum = num
    },
    getResultDataNumber(num){
      this.resultTotalNum=num
      this.totalNum = num
    }
  },
};
</script>
<style scoped>
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
  height: 217px;
}

/*Welcome*/
.licenseWelcome-box {
  text-align: center;
  font-size: 27px;
  color: #ffffffff;
  margin-top: 50px;
}

/*Middle part*/
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}

/*Pagination 分页*/
.Dataset-paging {
  margin-top: 30px;
  text-align: center;
}
/* license -> dataset select tip text placeholder color*/
.license_color >>> input::-webkit-input-placeholder {
  color: #fff !important;
  text-align: center !important;
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
