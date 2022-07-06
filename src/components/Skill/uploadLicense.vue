<template>
  <div class="uploadLicense-box">
    <div class="upload-header-box">Upload About License</div>
    <el-form>
      <el-row :gutter="10">
        <el-col :span="16" :offset="4">
          <div>
            <el-row>
              <el-col :span="4">
                <div>
                  <el-col>
                    <img
                      src="../../assets/images/upldTip.png"
                      alt=""
                      style="height: 80%; width: 80%; color: #003261"
                    />
                  </el-col>
                </div>
              </el-col>
              <el-col :span="20" :gutter="20">
                <div>
                  <p class="tip-box"></p>
                  <p class="tip-info" style="margin-top: 50px">
                    In order to create your information better and faster, please fill in
                    the information below carefully.
                  </p>

                  <p class="tip-info">
                    When you encounter no, yes and input box behind the label, please note
                    that the function of the input box is to explain the specific
                    limitations and obligations. If you choose no, you don't have to care.
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
              <el-collapse v-model="activeNames" class="collapse-box">
                <el-collapse-item title="Basics" name="1">
                  <el-form
                    :model="licenseBasics"
                    :rules="basicsRules1"
                    ref="licenseBasics"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="margin-top: 10px"
                  >
                    <el-form-item label="License Name：" prop="license_name">
                      <el-input v-model="licenseBasics.license_name"></el-input>
                    </el-form-item>
                    <el-form-item label="License Type：" prop="license_type">
                      <el-input v-model="licenseBasics.license_type"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="licenseBasics"
                    :rules="basicsRules2"
                    ref="licenseBasics2"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                  >
                    <el-form-item label="Short Identifier：" prop="short_identifier">
                      <el-input v-model="licenseBasics.short_identifier"></el-input>
                    </el-form-item>
                    <el-form-item label="Osi Approved：" prop="osi_approved">
                      <el-radio-group
                        v-model="licenseBasics.osi_approved"
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
                          <el-col :span="12" :offset="6">
                            <div>
                              <el-form
                                :model="item"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                :rules="DataRules"
                                ref="licenseDataRef"
                                style="text-align: left"
                              >
                                <el-form-item label="Rights：" prop="rights">
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
                              </template>
                            </div>
                          </el-col>
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
                          <el-col :span="12" :offset="6">
                            <div>
                              <el-form
                                :model="item"
                                class="demo-ruleForm fontUpdate"
                                :rules="ModelRules"
                                ref="licenseModelRef"
                                :inline="true"
                                style="text-align: left"
                              >
                                <el-form-item label="Rights：" prop="rights">
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
                              </template>
                            </div>
                          </el-col>
                        </el-row>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-collapse-item>

                <el-collapse-item title="Others" name="4">
                  <el-form
                    :model="licenseOthers"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    ref="others1"
                    :rules="othersRules1"
                    :inline="true"
                    style="margin-top: 10px"
                  >
                    <el-form-item label="Credit：" prop="credit">
                      <el-input v-model="licenseOthers.credit"></el-input>
                    </el-form-item>
                    <el-form-item label="ValidityPeriod：" prop="validityPeriod">
                      <el-date-picker
                        v-model="licenseOthers.validityPeriod"
                        type="date"
                        placeholder="Select date"
                      >
                      </el-date-picker>
                      <!-- <el-input
                        v-model="licenseOthers.validityPeriod"
                      ></el-input> -->
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="licenseOthers"
                    label-width="144px"
                    ref="others2"
                    :rules="othersRules2"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                  >
                    <el-form-item label="Liability：" prop="liability">
                      <el-input v-model="licenseOthers.liability"></el-input>
                    </el-form-item>
                    <el-form-item label="Designated：" prop="designated">
                      <el-input v-model="licenseOthers.designated"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="licenseOthers"
                    ref="others3"
                    :rules="othersRules3"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                  >
                    <el-form-item label="Additional：" prop="additional">
                      <el-input v-model="licenseOthers.additional"></el-input>
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
        <!-- <el-button type="primary" @click="open">Create</el-button> -->
        <!-- <el-button type="primary" @click="dialog = true" style=" color: #ffffff !important;
  background-color: #003261 !important;">Create</el-button> -->
        <el-button
          type="primary"
          @click="submitForm"
          style="color: #ffffff !important; background-color: #003261 !important"
          >Create</el-button
        >
        <el-button @click="toHome">Cancel</el-button>
      </el-form-item>
      <template>
        <el-drawer
          title="Please select an approver,If Auto assign is selected, the approver will be assigned by the system!"
          :before-close="handleClose"
          :visible.sync="dialog"
          direction="ttb"
          size="60%"
          custom-class="demo-drawer"
          ref="drawer"
          style="text-align: center; width: 30%; margin: 0 auto"
        >
          <div class="demo-drawer__content">
            <el-form :model="usertip">
              <el-form-item>
                <el-select
                  v-model="usertip.region"
                  placeholder="Automatic allocation"
                  style="color: rgb(7, 64, 114) !important"
                >
                  <el-option label="Clement Li" value="Clement Li"></el-option>
                  <el-option label="Gopi" value="Gopi"></el-option>
                  <el-option label="Zicheng Qu" value="Zicheng Qu"></el-option>
                  <el-option label="Zhengcai You" value="Zhengcai You"></el-option>
                  <el-option
                    label="Automatic allocation"
                    value="Automatic allocation"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="demo-drawer__footer">
              <el-button @click="cancelForm">Cancel</el-button>
              <el-button
                type="primary"
                @click="$refs.drawer.closeDrawer(), submitForm()"
                :loading="loading"
                >{{ loading ? "Submitting ..." : "O K" }}</el-button
              >
            </div>
          </div>
        </el-drawer>
      </template>

      <!-- <el-button type="primary" @click="submitForm">Create</el-button> -->
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      usertip: {
        name: "",
        region: "",
      },
      formLabelWidth: "80px",
      timer: null,
      activeNames: ["1", "2", "3", "4"],
      licenseDataAll: {},
      licenseBasics: {
        license_name: "",
        license_type: "",
        osi_approved: "",
        short_identifier: "",
      },
      licenseOthers: {
        liability: "",
        designated: "",
        additional: "",
        credit: "",
        validityPeriod: "",
        text: "",
      },
      data: {
        basics: {
          name: "",
          "...": "",
        },
        data: {
          access: {
            Right: "",
          },
          tagging: {
            Right: "",
          },
          distribute: {
            Right: "",
          },
        },
      },
      basicsRules1: {
        license_name: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
        license_type: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
      },
      basicsRules2: {
        short_identifier: [
          { required: true, message: "Cannot be empty", trigger: "blur" },
        ],
        osi_approved: [{ required: true, message: "Cannot be empty", trigger: "change" }],
      },
      DataRules: {
        rights: [{ required: true, message: "Cannot be empty", trigger: "change" }],
      },
      ModelRules: {
        rights: [{ required: true, message: "Cannot be empty", trigger: "change" }],
      },
      othersRules1: {
        credit: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
        validityPeriod: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
      },
      othersRules2: {
        liability: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
        designated: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
      },
      othersRules3: {
        additional: [{ required: true, message: "Cannot be empty", trigger: "blur" }],
      },
      licenseDataList: [],
      licenseModelList: [],
      arrayData: [
        "Access",
        "Tagging",
        "Represent",
        "Distribute",
        "Network",
        "Modification",
      ],
      arrayModel: [
        "Benchmark",
        "Research",
        "Publish",
        "interN/Al",
        "Output_com",
        "Com",
        "Rev",
      ],
      BigObject: {},
      queryData: "",
    };
  },
  mounted() {
    // this.queryData = this.getQueryVariable("data");
    this.loadData("Data", "Model");
    this.queryData = this.GetQueryString("data");
  },
  methods: {
    GetQueryString(name) {
      // 未传参，返回空
      if (!name) return null;
      // 查询参数：先通过search取值，如果取不到就通过hash来取
      var after = window.location.search;
      after = after.substr(1) || window.location.hash.split("?")[1];
      // 地址栏URL没有查询参数，返回空
      if (!after) return null;
      // 如果查询参数中没有"name"，返回空
      if (after.indexOf(name) === -1) return null;

      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      // 当地址栏参数存在中文时，需要解码，不然会乱码
      var r = decodeURI(after).match(reg);
      // 如果url中"name"没有值，返回空
      if (!r) return null;

      return r[2];
    },
    // 加载数据
    loadData() {
      let data = this.GetQueryString("data");
      console.log(data);
      for (let index = 0; index < arguments.length; index++) {
        const arg = arguments[index];
        this.BigObject[arg] = {};
        this[`array${arg}`].forEach((item, itemIndex) => {
          const licenseData = {
            name: item,
            rights: "",
            limitations: "",
            limitations_text: "",
            obligations: "",
            obligations_text: "",
          };
          // console.log(arg);
          // console.log(itemIndex);
          if (data != null && data.length == 9) {
            if (index === 0 && itemIndex < 3) {
              // Data
              let c_value = data.charAt(itemIndex);
              licenseData.rights = c_value == 1 ? "Can" : "Cannot";
            }
            if (index === 1 && itemIndex < 6) {
              //Model
              licenseData.rights = data.charAt(itemIndex + 3) == 1 ? "Can" : "Cannot";
            }
          }
          this[`license${arg}List`].push(licenseData);
          this.BigObject[`${arg}`][item] = licenseData;
        });
      }
    },
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    submitForm() {
      let formValidates = [
        this.$refs["licenseBasics"].validate(),
        this.$refs["licenseBasics2"].validate(),
        this.$refs["others1"].validate(),
        this.$refs["others2"].validate(),
        this.$refs["others3"].validate(),
        this.$refs.licenseDataRef[0].validate(),
        this.$refs.licenseDataRef[1].validate(),
        this.$refs.licenseDataRef[2].validate(),
        this.$refs.licenseDataRef[3].validate(),
        this.$refs.licenseDataRef[4].validate(),
        this.$refs.licenseDataRef[5].validate(),

        this.$refs.licenseModelRef[0].validate(),
        this.$refs.licenseModelRef[1].validate(),
        this.$refs.licenseModelRef[2].validate(),
        this.$refs.licenseModelRef[3].validate(),
        this.$refs.licenseModelRef[4].validate(),
        this.$refs.licenseModelRef[5].validate(),
        this.$refs.licenseModelRef[6].validate(),
      ];
      this.BigObject["Basics"] = this.licenseBasics;
      this.BigObject["Others"] = this.licenseOthers;
      console.log("^-^", this.BigObject);
      Promise.all(formValidates)
        .then(() => {
          // TODO
          // 校验通过后的逻辑
          // alert("success")
          this.dialog = true;
          this.loadData();
        })
        .catch((error) => {
          console.log("error", error); //这里会打印捕获的异常是什么，我这里是false
        });
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("Confirm submission")
        .then((_) => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
              this.toHome();
              this.open();
            }, 400);
          }, 1000);
        })
        .catch((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    open() {
      this.$notify({
        title: "Success",
        message: "License uploaded successfully!",
        type: "success",
      });
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
  background-color: #003261 !important;
  border-radius: 5px;
}

.upload-header-box {
  color: #ffffff;
  font-size: 18px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #003261;
}

.uploadLicense-box {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border: 2px #162031 solid;
}
>>> .el-date-editor.el-input {
  width: 210px !important;
}
>>> .el-input__inner {
  border-radius: 10px !important;
  border: 2px solid #bebebe !important;
  background-color: #ffffff !important;
  color: rgb(7, 64, 114) !important;
}
>>> .el-button--primary:focus,
.el-button--primary:hover {
  background: #003261;
  border-color: #ffffff;
  color: #ffffff;
}
>>> .el-button--primary {
  background: #003261;
  border-color: #ffffff;
  color: #ffffff;
}
.fontUpdate /deep/ .el-form-item__label {
  font-size: 15px !important;
  color: #003261;
}

/*.fontUpdate{*/
/*   margin-left: 20px*/
/*}*/
>>> .el-radio__input.is-checked .el-radio__inner {
  border-color: #003261;
  background: #003261;
}
>>> .el-radio__input.is-checked + .el-radio__label {
  color: #003261;
}
</style>
