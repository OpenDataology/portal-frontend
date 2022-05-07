<template>
  <div class="uploadLicense-box">
    <div class="upload-header-box">Upload About License</div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="16" :offset="4">
          <div>
            <el-row>
              <el-col :span="4">
                <div>
                  <el-col>
                    <img
                      src="../../assets/images/tip_1.png"
                      alt=""
                      style="height: 100%; width: 100%"
                    />
                  </el-col>
                </div>
              </el-col>
              <el-col :span="20" :gutter="20">
                <div>
                  <p class="tip-box">Tips:</p>
                  <p class="tip-info">
                    In order to create your information better and faster,
                    please fill in the information below carefully.
                  </p>

                  <p class="tip-info">
                    When you encounter no, yes and input box behind the label,
                    please note that the function of the input box is to explain
                    the specific limitations and obligations. If you choose no,
                    you don't have to care.
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <template>
        <el-row>
          <el-col :span="16" :offset="4">
            <div>
              <el-collapse
                v-model="activeNames"
                @change="handleChange"
                class="collapse-box"
              >
                <el-collapse-item title="Bacis" name="1">
                  <el-form
                    :model="licenseBacis"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center; margin-top: 10px"
                  >
                    <el-form-item label="License Name：" prop="license_name">
                      <el-input v-model="licenseBacis.license_name"></el-input>
                    </el-form-item>
                    <el-form-item label="License Type：" prop="license_type">
                      <el-input v-model="licenseBacis.license_type"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="licenseBacis"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center"
                  >
                    <el-form-item
                      label="Short Identifier："
                      prop="short_identifier"
                    >
                      <el-input
                        v-model="licenseBacis.short_identifier"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="Osi Approved：" prop="osi_approved">
                      <el-radio-group
                        v-model="licenseBacis.osi_approved"
                        style="width: 210px"
                      >
                        <el-radio label="Yes"></el-radio>
                        <el-radio label="No"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                </el-collapse-item>

                <el-collapse-item title="Data" name="2">
                  <template v-for="(item, index) in licenseDataList">
                    <el-form
                      :model="item"
                      label-width="155px"
                      class="demo-ruleForm fontUpdate"
                      label-position="top"
                      style="text-align: left"
                    >
                      <el-form-item
                        :label="item.name + ':'"
                        style="
                          height: 100%;
                          width: 100%;
                          background-color: #f4f7fc;
                          border-radius: 10px;
                        "
                      >
                        <el-row :gutter="20">
                          <el-col :span="12" :offset="6"
                            ><div>
                              <el-form
                                :model="item"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                              >
                                <el-form-item label="Rights：">
                                  <el-radio-group v-model="item.rights">
                                    <el-radio
                                      label="Can"
                                      :name="`data_${item.name}`"
                                    ></el-radio>
                                    <el-radio
                                      label="Cannot"
                                      :name="`data_${item.name}`"
                                    ></el-radio>
                                    <el-radio
                                      label="Unknown"
                                      :name="`data_${item.name}`"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                              </el-form>
                              <template v-if="item.rights === 'Can'">
                                <el-form
                                  :model="item"
                                  class="demo-ruleForm fontUpdate"
                                  :inline="true"
                                  style="text-align: left"
                                  size="small"
                                >
                                  <el-form-item label="Limitations：">
                                    <el-radio-group v-model="item.limitations">
                                      <el-radio
                                        label="NO"
                                        :name="`data_${item.name}`"
                                      ></el-radio>
                                      <el-radio
                                        label="YES"
                                        :name="`data_${item.name}`"
                                      ></el-radio>
                                    </el-radio-group>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      v-if="item.limitations === 'YES'"
                                      type="textarea"
                                      autosize
                                      v-model="item.limitations_text"
                                      placeholder="Enter"
                                    ></el-input>
                                  </el-form-item>
                                </el-form>
                                <el-form
                                  :model="item"
                                  class="demo-ruleForm fontUpdate"
                                  :inline="true"
                                  style="text-align: left"
                                  size="small"
                                >
                                  <el-form-item label="Obligations：">
                                    <el-radio-group v-model="item.obligations">
                                      <el-radio
                                        label="NO"
                                        :name="`data_${item.name}`"
                                      ></el-radio>
                                      <el-radio
                                        label="YES"
                                        :name="`data_${item.name}`"
                                      ></el-radio>
                                    </el-radio-group>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      type="textarea"
                                      v-model="item.obligations_text"
                                      v-if="item.obligations === 'YES'"
                                      autosize
                                      placeholder="Enter"
                                    >
                                    </el-input>
                                  </el-form-item>
                                </el-form>
                              </template></div
                          ></el-col>
                        </el-row>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-collapse-item>

                <el-collapse-item title="Model" name="3">
                  <template v-for="item in licenseModelList">
                    <el-form
                      :model="item"
                      label-width="155px"
                      class="demo-ruleForm fontUpdate"
                      label-position="top"
                      style="text-align: left"
                    >
                      <el-form-item
                        :label="item.name + ':'"
                        style="
                          height: 100%;
                          width: 100%;
                          background-color: #f4f7fc;
                          border-radius: 10px;
                        "
                      >
                        <el-row :gutter="20">
                          <el-col :span="12" :offset="6"
                            ><div>
                              <el-form
                                :model="item"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                              >
                                <el-form-item
                                  label="Rights："
                                  prop="model_access_rights"
                                >
                                  <el-radio-group v-model="item.rights">
                                    <el-radio
                                      label="Can"
                                      :name="`model_${item.name}`"
                                    ></el-radio>
                                    <el-radio
                                      label="Cannot"
                                      :name="`model_${item.name}`"
                                    ></el-radio>
                                    <el-radio
                                      label="Unknown"
                                      :name="`model_${item.name}`"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                              </el-form>
                              <template v-if="item.rights === 'Can'">
                                <el-form
                                  :model="item"
                                  class="demo-ruleForm fontUpdate"
                                  :inline="true"
                                  style="text-align: left"
                                  size="small"
                                >
                                  <el-form-item label="Limitations：">
                                    <el-radio-group v-model="item.limitations">
                                      <el-radio
                                        label="NO"
                                        :name="`model_${item.name}`"
                                      ></el-radio>
                                      <el-radio
                                        label="YES"
                                        :name="`model_${item.name}`"
                                      ></el-radio>
                                    </el-radio-group>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      v-if="item.limitations === 'YES'"
                                      type="textarea"
                                      autosize
                                      v-model="item.limitations_text"
                                      placeholder="Enter"
                                    ></el-input>
                                  </el-form-item>
                                </el-form>
                                <el-form
                                  :model="item"
                                  class="demo-ruleForm fontUpdate"
                                  :inline="true"
                                  style="text-align: left"
                                  size="small"
                                >
                                  <el-form-item label="Obligations：">
                                    <el-radio-group v-model="item.obligations">
                                      <el-radio
                                        label="NO"
                                        :name="`model_${item.name}`"
                                      ></el-radio>
                                      <el-radio
                                        label="YES"
                                        :name="`model_${item.name}`"
                                      ></el-radio>
                                    </el-radio-group>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      type="textarea"
                                      v-model="item.obligations_text"
                                      v-if="item.obligations === 'YES'"
                                      autosize
                                      placeholder="Enter"
                                    >
                                    </el-input>
                                  </el-form-item>
                                </el-form>
                              </template></div
                          ></el-col>
                        </el-row>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-collapse-item>

                <el-collapse-item title="Others" name="4">
                  <el-form
                    :model="licenseOther"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center; margin-top: 10px"
                  >
                    <el-form-item label="Credit：" prop="data_credit">
                      <el-input v-model="licenseOther.credit"></el-input>
                    </el-form-item>
                    <el-form-item
                      label="ValidityPeriod："
                      prop="data_validityPeriod"
                    >
                      <el-input
                        v-model="licenseOther.validityPeriod"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="licenseOther"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center"
                  >
                    <el-form-item label="Liability：" prop="data_liability">
                      <el-input
                        v-model="licenseOther.liability"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="	Designated：" prop="data_designated">
                      <el-input
                        v-model="licenseOther.designated"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="licenseOther"
                    :rules="rules"
                    ref="others3"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center"
                  >
                    <el-form-item label="Additional：" prop="data_additional">
                      <el-input
                        v-model="licenseOther.additional"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label=" ">
                      <div style="width: 208px"></div>
                    </el-form-item>
                  </el-form>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-col>
        </el-row>
      </template>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Create
        </el-button>
        <el-button @click="toHome">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      licenseBacis: {
        license_name: "",
        license_type: "",
        osi_approved: "",
        short_identifier: "",
      },
      licenseOther: {
        liability: "",
        designated: "",
        additional: "",
        credit: "",
        validityPeriod: "",
        text: "",
      },
      rules: {},
      licenseDataList: [],
      licenseModelList: [],
      arrayData: ["access", "tagging", "distribute"],
      arrayModel: ["access", "tagging", "distribute"],
    };
  },
  mounted() {
    this.loadData("Data", "Model");
  },
  methods: {
    // 加载数据
    loadData() {
      for (let index = 0; index < arguments.length; index++) {
        const arg = arguments[index];
        this[`array${arg}`].forEach((item) => {
          const licenseData = {
            name: item,
            rights: [],
            limitations: [],
            limitations_text: "",
            obligations: [],
            obligations_text: "",
          };
          this[`license${arg}List`].push(licenseData);
        });
      }
    },
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    submitForm(formName) {
      console.log(this.licenseDataList);
      console.log(this.licenseModelList);
      console.log(this.licenseBacis);
      console.log(this.licenseOther);
     
    },
    
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.tip-box {
  font-size: 26px;
  color: rgb(7, 64, 114) !important;
}

.collapse-box /deep/ .el-collapse-item__header {
  font-size: 18px;
  color: #ffffff !important;
  background-color: #4c8efc !important;
  border-radius: 5px;
}

.upload-header-box {
  color: #ffffff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #4c8efc;
}

.uploadLicense-box {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border: 2px #162031 solid;
}

>>> .el-input__inner {
  border-radius: 10px !important;
  border: 2px solid #bebebe !important;
  background-color: #ffffff !important;
  color: rgb(7, 64, 114) !important;
}

.fontUpdate /deep/ .el-form-item__label {
  font-size: 15px !important;
  color: #4350b5;
}

/*.fontUpdate{*/
/*   margin-left: 20px*/
/*}*/
</style>
