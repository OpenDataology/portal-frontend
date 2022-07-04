<template>
  <div class="body-box">
    <!--  头部-->
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
              <el-select class="license_color" v-model="value" placeholder="Dataset">
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
              <search-dataset-info />
            </div>
          </el-col>
          <el-col :span="12">
            <template> &emsp; </template>
          </el-col>
        </el-row>
        <div class="licenseWelcome-box">
          <div>
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
      </template>
    </div>
    <!--  中部-->
    <div class="Middle-box">
      <div class="metadata-box">MetaData</div>
      <div>
        <el-descriptions class="margin-top" title="" :column="3" :size="size" border>
          <el-descriptions-item>
            <template slot="label"> Name </template>
            {{ dataSetBasicInfo.dataset_name }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Version </template>
            {{ dataSetBasicInfo.dataset_version }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> License ID </template>
            {{ dataSetBasicInfo.license_id }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> License Name </template>
            <!-- <a href="licenseInfo">{{ dataSetBasicInfo.license_name }}</a> -->
            <router-link
              :to="{
                path: '/licenseInfo',
                query: { id: dataSetBasicInfo.license_id },
              }"
              target="_blank"
            >
              {{ dataSetBasicInfo.license_name }}
            </router-link>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Licensor </template>
            {{ dataSetBasicInfo.licensor }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> License From </template>
            {{ dataSetBasicInfo.license_from }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> License Location </template>
            {{ dataSetBasicInfo.license_location }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Origin </template>
            {{ dataSetBasicInfo.origin }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Downloaded </template>
            {{ dataSetBasicInfo.downloaded_outlet }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Outlet </template>
            {{ dataSetBasicInfo.outlet_licensed }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Size </template>
            {{ dataSetBasicInfo.data_size }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Format </template>
            {{ dataSetBasicInfo.format }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Personal </template>
            {{ dataSetBasicInfo.is_personal_data }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Additional </template>
            {{ dataSetBasicInfo.is_additional_verify }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Offensive </template>
            {{ dataSetBasicInfo.is_offensive_content }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Comply </template>
            {{ dataSetBasicInfo.is_comply }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Collect </template>
            {{ dataSetBasicInfo.dataset_collect_method }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Available </template>
            {{ dataSetBasicInfo.available }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" title="" :column="1" :size="size" border>
          <el-descriptions-item>
            <template slot="label"> License content </template>
            {{ dataSetBasicInfo.license_content }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Description </template>
            {{ dataSetBasicInfo.description }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Hashcode </template>
            {{ dataSetBasicInfo.hash_code }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> Collection process </template>
            {{ dataSetBasicInfo.collection_process }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <!--尾部-->
    <div class="dataset-info-tail">
      <p>* The above license analysis has not been reviewed by lawyers</p>
      <p>* All contents of the portal do not constitute any legal advice and guarantee</p>
    </div>
  </div>
</template>
<script>
import { getDatasetMetaData } from "../../config/api.env.js";
import SearchDatasetInfo from "../components/Search/searchDatasetInfo.vue";
import event from "../assets/js/instance";

export default {
  // components: {Export, SearchDatasetInfo },
  components: { SearchDatasetInfo },
  name: "license_Info",
  props: ["id"],
  data() {
    return {
      size: "",
      value: [],
      vague: [
        {
          value: "选项1",
          label: "License",
        },
      ],
      dataSetBasicInfo: [],
    };
  },
  created: function () {
    this.getDataSetBasicInfo();
    event.$on("updateDataSet", (id) => {
      this.getDataSetBasicInfo(id);
    });
  },
  beforeDestroy() {
    event.$off("updateDataSet");
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
    async getDataSetBasicInfo(id) {
      // let that = this;
      let data;
      if (!id) {
        data = await getDatasetMetaData({ id: this.id });
      } else {
        data = await getDatasetMetaData({ id });
      }
      // console.log(data);
      this.dataSetBasicInfo = data.data;
      // console.log(this.dataSetBasicInfo);
    },

    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleChange(val) {
      // console.log(val);
    },
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
/*简介信息*/
.licenseWelcome-box {
  margin-top: 35px;
  margin-left: 70px;
  height: 100px;
  width: 300px;
  font-size: 17px;
  color: #ffffffff;
}
>>> .el-input__inner::-webkit-input-placeholder {
  color: #fff !important;
  text-align: center !important;
}
.Middle-box {
  width: 1200px;
  margin: 0 auto;
}
.metadata-box {
  width: 1200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid #003261;
  background-color: #ececec;
}

.basic_info_box {
  width: 500px;
  color: #fff;
}
.dataset-info-tail {
  width: 100%;
  height: 100%;
  background-color: #003261;
  color: #ffffff;
  font-size: 1px;
  margin-top: 132px;
}
</style>
