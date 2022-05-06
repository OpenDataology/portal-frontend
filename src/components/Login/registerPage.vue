<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
  >
    <el-form-item label="" prop="account"
    >
      <el-input
        type="text"
        autocomplete="off"
        v-model="ruleForm.account"
        prefix-icon="el-icon-user-solid"
        placeholder="Account"
      ></el-input
      >
    </el-form-item>
    <el-form-item label="" prop="password"
    >
      <el-input
        type="password"
        autocomplete="off"
        v-model="ruleForm.password"
        prefix-icon="el-icon-lock"
        placeholder="Password"
        show-password
      ></el-input
      >
    </el-form-item>
    <el-form-item label="" prop="checkPass"
    >
      <el-input
        type="password"
        autocomplete="off"
        v-model="ruleForm.checkPass"
        prefix-icon="el-icon-lock"
        placeholder="Enter again"
        show-password
      ></el-input
      >
    </el-form-item>
    <el-form-item class="btns">
      <el-button type="primary" @click="submitForm('ruleForm')" style="font-weight:bold !important;">Sign up</el-button>
      <el-button @click="resetForm('ruleForm')" style="font-weight:bold !important;">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {registerData} from "../../../config/api.env"

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input a password"));//请输入密码
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again"));//请再次输入密码
      } else if (value !== this.ruleForm.password) {
        callback(new Error("The two passwords are inconsistent!"));//两次输入密码不一致
      } else {
        callback();
      }
    };

    return {
      activeName: "second",
      ruleForm: {
        account: "",
        password: "",
        checkPass: "",
      },
      rules: {
        account: [
          {required: true, message: "Please enter your name", trigger: "blur"},//请输入您的名称
          {min: 6, max: 10, message: "The length is between 6 and 10 characters", trigger: "blur"},//长度在 2 到 5 个字符
        ],
        password: [{required: true, validator: validatePass, trigger: "blur"}],
        checkPass: [
          {required: true, validator: validatePass2, trigger: "blur"},
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = await registerData(this.ruleForm);
          console.log(data.status)
          if (data.status === "success") {
            alert("Login success");//登陆
          } else {
            alert("Login failed");
            return false;
          }
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>



<style>
.btns {
  display: flex;
  justify-content: flex-end;
}

::v-deep .el-tabs__item {
  font-size: 16px !important;
  font-weight: bold !important;
}

::v-deep::v-deep .el-input__inner {
  border-radius: 10px !important;
  border: 2px solid #bebebe !important;
  background-color: #ffffff !important;
  color: rgb(7, 64, 114) !important;
}

::v-deep .el-input__icon {
  color: rgb(7, 64, 114) !important;
}
 .verification-box {
  width: 50% !important;
}
::v-deep .el-button {
  border-radius: 10px;
  border: 2px solid #c6e2ff;
}
</style>


// .btns {
//   display: flex;
//   justify-content: flex-end;
// }

// >>> .el-tabs__item {
//   font-size: 16px !important;
//   font-weight: bold !important;
// }

// >>> .el-input__inner {
//   border-radius: 10px !important;
//   border: 2px solid #bebebe !important;
//   background-color: #ffffff !important;
//   color: rgb(7, 64, 114) !important;
// }

// >>> .el-input__icon {
//   color: rgb(7, 64, 114) !important;
// }

// >>> .verification-box {
//   width: 50% !important;
// }

// >>> .el-button {
//   border-radius: 10px;
//   border: 2px solid #c6e2ff;
// }
// </style>
