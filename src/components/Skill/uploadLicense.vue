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
                    :model="ruleForm"
                    :rules="rules"
                    ref="input1"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center; margin-top: 10px"
                  >
                    <el-form-item label="License Name：" prop="license_name">
                      <el-input v-model="ruleForm.license_name"></el-input>
                    </el-form-item>
                    <el-form-item label="License Type：" prop="license_type">
                      <el-input v-model="ruleForm.license_type"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="input2"
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
                      <el-input v-model="ruleForm.short_identifier"></el-input>
                    </el-form-item>
                    <el-form-item label="Osi Approved：" prop="osi_approved">
                      <el-radio-group
                        v-model="ruleForm.osi_approved"
                        style="width: 210px"
                      >
                        <el-radio label="Yes"></el-radio>
                        <el-radio label="No"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                </el-collapse-item>

                <el-collapse-item title="Data" name="2">
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Access："
                      prop="data_access_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_access_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_access_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_access_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_access_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_access_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.data_access_limitations === 'YES'
                                    "
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.data_access_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_access_obligations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_access_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="
                                      ruleForm.data_access_obligations_text
                                    "
                                    v-if="
                                      ruleForm.data_access_obligations === 'YES'
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Tagging："
                      prop=" data_tagging_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop=" data_tagging_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_tagging_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_tagging_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_tagging_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_tagging_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_tagging_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_tagging_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_tagging_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_tagging_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_tagging_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.data_tagging_limitations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.data_tagging_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_tagging_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_tagging_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_tagging_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.data_tagging_obligations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    v-model="
                                      ruleForm.data_tagging_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Distribute："
                      prop="data_distribute_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_distribute_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_distribute_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_distribute_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_distribute_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_distribute_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_distribute_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_access"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_distribute_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_distribute_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_distribute_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.data_distribute_limitations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.data_distribute_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_distribute_obligations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_distribute_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_distribute_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_distribute_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.data_distribute_obligations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    v-model="
                                      ruleForm.data_distribute_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Network："
                      prop="data_network_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_network_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_network_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_network_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_network_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_network_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_network_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_network_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_network_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_network_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_network_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.data_network_limitations_text
                                    "
                                    v-if="
                                      ruleForm.data_network_limitations ===
                                      'YES'
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_network_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.data_network_obligations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    v-model="
                                      ruleForm.data_network_obligations_text
                                    "
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

                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Represent："
                      prop="data_represent_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_represent_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_represent_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_represent_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_represent_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_represent_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_represent_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_represent_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_represent_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_represent_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_represent_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.data_represent_limitations_text
                                    "
                                    v-if="
                                      ruleForm.data_represent_limitations ===
                                      'YES'
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_represent_obligations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_represent_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_represent_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_represent_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="
                                      ruleForm.data_represent_obligations_text
                                    "
                                    v-if="
                                      ruleForm.data_represent_obligations ===
                                      'YES'
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Modification："
                      prop="data_modification_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_modification_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_modification_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_modification_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_modification_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_modification_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_modification_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_modification_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_modification_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_modification_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_modification_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_modification_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_modification_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_access"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_modification_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_modification_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_modification_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_modification_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_modification_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Benchmark："
                      prop="data_benchmark_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_benchmark_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_benchmark_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_benchmark_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_benchmark_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_benchmark_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_benchmark_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_benchmark_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_benchmark_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_benchmark_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_benchmark_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_benchmark_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_benchmark_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_access"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_benchmark_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_benchmark_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_benchmark_obligations_text
                                    "
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

                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Research："
                      prop="data_research_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_research_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_research_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_research_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_research_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_research_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_research_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_research_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_research_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_research_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_research_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_research_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_research_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_research_obligations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_research_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_research_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_research_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_research_obligations_text ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_research_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Publish："
                      prop="data_publish_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_publish_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_publish_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_publish_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_publish_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_publish_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_publish_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_publish_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_publish_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_publish_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_publish_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_publish_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_publish_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_publish_obligations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_publish_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_publish_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_publish_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_publish_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_publish_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="data_interN_Al_rights："
                      prop="data_interN_Al_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item label="Rights：" prop="data_access">
                                <el-radio-group
                                  v-model="ruleForm.data_interN_Al_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_interN_Al_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_interN_Al_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_interN_Al_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_interN_Al_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_interN_Al_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_interN_Al_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_interN_Al_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_interN_Al_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_interN_Al_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_interN_Al_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_interN_Al_obligations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_interN_Al_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_interN_Al_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_interN_Al_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_interN_Al_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_interN_Al_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Output com："
                      prop="data_output_com_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_output_com_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_output_com_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_output_com_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_output_com_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_output_com_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.data_output_com_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_output_com_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_output_com_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_output_com_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_output_com_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_output_com_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_output_com_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_output_com_obligations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.data_output_com_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_output_com_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_output_com_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_output_com_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.data_output_com_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Com："
                      prop="data_com_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_com_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_com_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_com_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_com_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_com_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.data_com_rights === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_com_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_com_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_com_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_com_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_com_limitations === 'YES'
                                    "
                                    autosize
                                    v-model="ruleForm.data_com_limitations_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_com_obligations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_com_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_com_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_com_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_com_obligations === 'YES'
                                    "
                                    v-model="ruleForm.data_com_obligations_text"
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Rev："
                      prop="data_rev_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="data_rev_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.data_rev_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="data_rev_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="data_rev_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="data_rev_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.data_rev_rights === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="data_rev_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_rev_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_rev_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_rev_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.data_rev_limitations === 'YES'
                                    "
                                    v-model="ruleForm.data_rev_limitations_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="data_rev_obligations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.data_rev_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="data_rev_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="data_rev_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.data_rev_obligations === 'YES'
                                    "
                                    v-model="ruleForm.data_rev_obligations_text"
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
                </el-collapse-item>

                <el-collapse-item title="Model" name="3">
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Access："
                      prop="model_access_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_access_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.model_access_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.model_access_limitations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.model_access_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access_obligations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="
                                      ruleForm.model_access_obligations_text
                                    "
                                    v-if="
                                      ruleForm.model_access_obligations ===
                                      'YES'
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Tagging："
                      prop=" model_tagging_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop=" model_tagging_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_tagging_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_tagging_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_tagging_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_tagging_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.model_tagging_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_tagging_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_tagging_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_tagging_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_tagging_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.model_tagging_limitations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.model_tagging_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_tagging_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_tagging_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_tagging_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.model_tagging_obligations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    v-model="
                                      ruleForm.model_tagging_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Distribute："
                      prop="model_distribute_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_distribute_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_distribute_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_distribute_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_distribute_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_distribute_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.model_distribute_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_distribute_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_distribute_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_distribute_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.model_distribute_limitations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.model_distribute_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_distribute_obligations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_distribute_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_distribute_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_distribute_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.model_distribute_obligations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    v-model="
                                      ruleForm.model_distribute_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Network："
                      prop="model_network_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_network_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_network_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_network_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_network_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_network_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.model_network_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_network_limitations"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_network_limitations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_network_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_network_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.model_network_limitations_text
                                    "
                                    v-if="
                                      ruleForm.model_network_limitations ===
                                      'YES'
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_network_obligations"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    v-if="
                                      ruleForm.model_network_obligations ===
                                      'YES'
                                    "
                                    type="textarea"
                                    v-model="
                                      ruleForm.model_network_obligations_text
                                    "
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

                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Represent："
                      prop="model_represent_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_represent_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_represent_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_represent_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_represent_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_represent_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.model_represent_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_represent_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_represent_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_represent_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_represent_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="
                                      ruleForm.model_represent_limitations_text
                                    "
                                    v-if="
                                      ruleForm.model_represent_limitations ===
                                      'YES'
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_represent_obligations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_represent_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_represent_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_represent_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="
                                      ruleForm.model_represent_obligations_text
                                    "
                                    v-if="
                                      ruleForm.model_represent_obligations ===
                                      'YES'
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Modification："
                      prop="model_modification_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_modification_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_modification_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_modification_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_modification_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_modification_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="
                                ruleForm.model_modification_rights === 'Can'
                              "
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_modification_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_modification_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_modification_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_modification_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.model_modification_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.model_modification_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_modification_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_modification_obligations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_modification_obligations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.model_modification_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.model_modification_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Benchmark："
                      prop="model_benchmark_rights"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_benchmark_rights"
                              >
                                <el-radio-group
                                  v-model="ruleForm.model_benchmark_rights"
                                >
                                  <el-radio
                                    label="Can"
                                    name="model_benchmark_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_benchmark_rights"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_benchmark_rights"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template
                              v-if="ruleForm.model_benchmark_rights === 'Can'"
                            >
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_benchmark_limitations"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_benchmark_limitations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_benchmark_limitations"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_benchmark_limitations"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-if="
                                      ruleForm.model_benchmark_limitations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.model_benchmark_limitations_text
                                    "
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="
                                      ruleForm.model_benchmark_obligations
                                    "
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-if="
                                      ruleForm.model_benchmark_obligations ===
                                      'YES'
                                    "
                                    v-model="
                                      ruleForm.model_benchmark_obligations_text
                                    "
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Research："
                      prop="model_access"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access"
                              >
                                <el-radio-group v-model="ruleForm.model_access">
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.model_access === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="ruleForm.model_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="ruleForm.model_text"
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Publish："
                      prop="model_access"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access"
                              >
                                <el-radio-group v-model="ruleForm.model_access">
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.model_access === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="ruleForm.model_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="ruleForm.model_text"
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="InterN/Al："
                      prop="model_access"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access"
                              >
                                <el-radio-group v-model="ruleForm.model_access">
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.model_access === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="ruleForm.model_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="ruleForm.model_text"
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Output com："
                      prop="model_access"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access"
                              >
                                <el-radio-group v-model="ruleForm.model_access">
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.model_access === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="ruleForm.model_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="ruleForm.model_text"
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Com："
                      prop="model_access"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access"
                              >
                                <el-radio-group v-model="ruleForm.model_access">
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.model_access === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="ruleForm.model_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="ruleForm.model_text"
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
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="155px"
                    class="demo-ruleForm fontUpdate"
                    label-position="top"
                    style="text-align: left"
                  >
                    <el-form-item
                      label="Rev："
                      prop="model_access"
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
                              :model="ruleForm"
                              :rules="rules"
                              ref="ruleForm"
                              class="demo-ruleForm fontUpdate"
                              :inline="true"
                              style="text-align: left"
                            >
                              <el-form-item
                                label="Rights："
                                prop="model_access"
                              >
                                <el-radio-group v-model="ruleForm.model_access">
                                  <el-radio
                                    label="Can"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Cannot"
                                    name="model_access"
                                  ></el-radio>
                                  <el-radio
                                    label="Unknown"
                                    name="model_access"
                                  ></el-radio>
                                </el-radio-group>
                              </el-form-item>
                            </el-form>
                            <template v-if="ruleForm.model_access === 'Can'">
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Limitations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    autosize
                                    v-model="ruleForm.model_text"
                                    placeholder="Enter"
                                  ></el-input>
                                </el-form-item>
                              </el-form>
                              <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                                class="demo-ruleForm fontUpdate"
                                :inline="true"
                                style="text-align: left"
                                size="small"
                              >
                                <el-form-item
                                  label="Obligations："
                                  prop="model_access"
                                >
                                  <el-radio-group
                                    v-model="ruleForm.model_access"
                                  >
                                    <el-radio
                                      label="NO"
                                      name="model_access"
                                    ></el-radio>
                                    <el-radio
                                      label="YES"
                                      name="model_access"
                                    ></el-radio>
                                  </el-radio-group>
                                </el-form-item>
                                <el-form-item>
                                  <el-input
                                    type="textarea"
                                    v-model="ruleForm.model_text"
                                    autosize
                                    placeholder="Enter"
                                  >
                                  </el-input>
                                </el-form-item>
                              </el-form>
                            </template></div
                        ></el-col>
                      </el-row>
                    </el-form-item> </el-form
                ></el-collapse-item>
                <el-collapse-item title="Others" name="4">
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="others1"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center; margin-top: 10px"
                  >
                    <el-form-item label="Credit：" prop="data_credit">
                      <el-input v-model="ruleForm.data_credit"></el-input>
                    </el-form-item>
                    <el-form-item
                      label="ValidityPeriod："
                      prop="data_validityPeriod"
                    >
                      <el-input
                        v-model="ruleForm.data_validityPeriod"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="others2"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center"
                  >
                    <el-form-item label="Liability：" prop="data_liability">
                      <el-input v-model="ruleForm.data_liability"></el-input>
                    </el-form-item>
                    <el-form-item label="	Designated：" prop="data_designated">
                      <el-input v-model="ruleForm.data_designated"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="others3"
                    label-width="144px"
                    class="demo-ruleForm fontUpdate"
                    label-position="left"
                    :inline="true"
                    style="text-align: center"
                  >
                    <el-form-item label="Additional：" prop="data_additional">
                      <el-input v-model="ruleForm.data_additional"></el-input>
                    </el-form-item>
                    <el-form-item label=" ">
                      <!--                  <el-input v-model="ruleForm.osi_approved" ></el-input>-->
                      <div style="width: 208px"></div>
                    </el-form-item>
                  </el-form>
                </el-collapse-item>
                <el-form></el-form>
              </el-collapse>
            </div>
          </el-col>
        </el-row>
      </template>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Create
        </el-button>
        <!-- <el-button
          @click="
            resetForm(
              'ruleForm',
              'ruleForm1',
              'others1',
              'others2',
              'others3',
              'input1',
              'input2'
            )
          "
          >Reset
        </el-button> -->
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
      ruleForm: {
        license_name: "",
        license_type: "",
        osi_approved: "",
        short_identifier: "",

        //data_access
        data_access_rights: [],
        data_access_limitations: [],
        data_access_limitations_text: "",
        data_access_obligations: [],
        data_access_obligations_text: "",

        //data_tagging
        data_tagging_rights: [],
        data_tagging_limitations: [],
        data_tagging_limitations_text: "",
        data_tagging_obligations: [],
        data_tagging_obligations_text: "",

        //data_distribute
        data_distribute_rights: [],
        data_distribute_limitations: [],
        data_distribute_limitations_text: "",
        data_distribute_obligations: [],
        data_distribute_obligations_text: "",

        //data_network
        data_network_rights: [],
        data_network_limitations: [],
        data_network_limitations_text: "",
        data_network_obligations: [],
        data_network_obligations_text: "",

        //data_represent
        data_represent_rights: [],
        data_represent_limitations: [],
        data_represent_limitations_text: "",
        data_represent_obligations: [],
        data_represent_obligations_text: "",

        //data_modification
        data_modification_rights: [],
        data_modification_limitations: [],
        data_modification_limitations_text: "",
        data_modification_obligations: [],
        data_modification_obligations_text: "",

        //v-if="ruleForm.data_modification_limitations === 'YES'"

        //data_benchmark
        data_benchmark_rights: [],
        data_benchmark_limitations: [],
        data_benchmark_limitations_text: "",
        data_benchmark_obligations: [],
        data_benchmark_obligations_text: "",

        //data_research
        data_research_rights: [],
        data_research_limitations: [],
        data_research_limitations_text: "",
        data_research_obligations: [],
        data_research_obligations_text: "",
        //data_publish
        data_publish_rights: [],
        data_publish_limitations: [],
        data_publish_limitations_text: "",
        data_publish_obligations: [],
        data_publish_obligations_text: "",
        //data_interN_Al
        data_interN_Al_rights: [],
        data_interN_Al_limitations: [],
        data_interN_Al_limitations_text: "",
        data_interN_Al_obligations: [],
        data_interN_Al_obligations_text: "",
        //data_output_com
        data_output_com_rights: [],
        data_output_com_limitations: [],
        data_output_com_limitations_text: "",
        data_output_com_obligations: [],
        data_output_com_obligations_text: "",
        //data_com
        data_com_rights: [],
        data_com_limitations: [],
        data_com_limitations_text: "",
        data_com_obligations: [],
        data_com_obligations_text: "",
        //data_rev
        data_rev_rights: [],
        data_rev_limitations: [],
        data_rev_limitations_text: "",
        data_rev_obligations: [],
        data_rev_obligations_text: "",

        //model_access
        model_access_rights: [],
        model_access_limitations: [],
        model_access_limitations_text: "",
        model_access_obligations: [],
        model_access_obligations_text: "",

        //model_tagging
        model_tagging_rights: [],
        model_tagging_limitations: [],
        model_tagging_limitations_text: "",
        model_tagging_obligations: [],
        model_tagging_obligations_text: "",

        //model_distribute
        model_distribute_rights: [],
        model_distribute_limitations: [],
        model_distribute_limitations_text: "",
        model_distribute_obligations: [],
        model_distribute_obligations_text: "",

        //model_network
        model_network_rights: [],
        model_network_limitations: [],
        model_network_limitations_text: "",
        model_network_obligations: [],
        model_network_obligations_text: "",

        //model_represent
        model_represent_rights: [],
        model_represent_limitations: [],
        model_represent_limitations_text: "",
        model_represent_obligations: [],
        model_represent_obligations_text: "",

        //model_modification
        model_modification_rights: [],
        model_modification_limitations: [],
        model_modification_limitations_text: "",
        model_modification_obligations: [],
        model_modification_obligations_text: "",

        //v-if="ruleForm.model_modification_limitations === 'YES'"

        //model_benchmark
        model_benchmark_rights: [],
        model_benchmark_limitations: [],
        model_benchmark_limitations_text: "",
        model_benchmark_obligations: [],
        model_benchmark_obligations_text: "",

        //model_research
        model_research_rights: [],
        model_research_limitations: [],
        model_research_limitations_text: "",
        model_research_obligations: [],
        model_research_obligations_text: "",
        //model_publish
        model_publish_rights: [],
        model_publish_limitations: [],
        model_publish_limitations_text: "",
        model_publish_obligations: [],
        model_publish_obligations_text: "",
        //model_interN_Al
        model_interN_Al_rights: [],
        model_interN_Al_limitations: [],
        model_interN_Al_limitations_text: "",
        model_interN_Al_obligations: [],
        model_interN_Al_obligations_text: "",
        //model_output_com
        model_output_com_rights: [],
        model_output_com_limitations: [],
        model_output_com_limitations_text: "",
        model_output_com_obligations: [],
        model_output_com_obligations_text: "",
        //model_com
        model_com_rights: [],
        model_com_limitations: [],
        model_com_limitations_text: "",
        model_com_obligations: [],
        model_com_obligations_text: "",
        //model_rev
        model_rev_rights: [],
        model_rev_limitations: [],
        model_rev_limitations_text: "",
        model_rev_obligations: [],
        model_rev_obligations_text: "",

        data_liability: "",
        data_designated: "",
        data_additional: "",
        data_credit: "",
        data_validityPeriod: "",
        data_text: "",
      },
      rules: {},
    };
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
          alert("submit!");
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(
    //   formName,
    //   formName1,
    //   formName2,
    //   formName3,
    //   formName4,
    //   formName5,
    //   formName6
    // ) {
    //   this.$refs[formName].resetFields();
    //   this.$refs[formName1].resetFields();
    //   this.$refs[formName2].resetFields();
    //   this.$refs[formName3].resetFields();
    //   this.$refs[formName4].resetFields();
    //   this.$refs[formName5].resetFields();
    //   this.$refs[formName6].resetFields();
    //   console.log(formName);
    // },
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

/*.tip-box {*/
/*  font-size: 20px;*/
/*  color: rgb(7, 64, 114) !important;*/
/*}*/

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
