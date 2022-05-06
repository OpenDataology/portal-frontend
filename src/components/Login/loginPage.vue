<template>
  <div class="login">
    <div class="login_form">
      <p style="color: #074072">Dataset Metadata Portal</p>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="Sign in" name="first" style="font-weight: bold">
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item label="" prop="account" class="elItem">
              <el-input
                class="login-input-box"
                type="text"
                autocomplete="off"
                v-model="loginForm.account"
                prefix-icon="el-icon-user-solid"
                placeholder="Account"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                type="password"
                autocomplete="off"
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                placeholder="Password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item class="btns">
              <el-button
                type="primary"
                @click="goToLogin"
                style="font-weight: bold !important"
                >Sign in</el-button
              >
              <el-button
                @click="resetLoginForm"
                style="font-weight: bold !important"
                >Reset</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="Sign up"
          name="second"
          style="font-weight: bold !important"
        >
          <!--          //注册组件-->
          <register></register>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
//引入注册组件
import register from "./registerPage";
import { loginData } from "../../../config/api.env";

export default {
  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("Cannot be empty")); //不可为空
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input a password")); //请输入密码
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        account: "",
        password: "",
      },
      signInData: {},
      activeName: "first", //默认显示登录页面
      rules: {
        account: [
          {
            validator: validateAccount,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    goToLogin() {
      this.$refs["loginForm"].validate(async (valid) => {
        console.log(valid);
        if (valid) {
          const data = await loginData(this.loginForm);
          console.log(data.data);
          if (data.data !== null) {
            const userName = data.data.account;
            sessionStorage.setItem("userName", userName); //保存用户信息
            this.$emit("success", userName);
          } else {
            alert("Login failed"); //登陆失败
            return false;
          }
        }
      });
    },
    resetLoginForm() {
      this.$refs["loginForm"].resetFields();
    },
    handleClick() {},
  },
  components: {
    register,
  },
};
</script>

<style  scoped>
.login {
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  position: relative;
  /*background-image: url("../assets/images/login-img.jpg");*/
}

.login .login_form {
  width: 400px;
  height: 400px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 10px;
  background: #fff !important;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login .login_form p {
  font-size: 24px;
  text-align: center;
  font-weight: 600;
}

>>> .el-tabs__item {
  font-size: 16px !important;
  font-weight: bold !important;
}

>>> .el-input__inner {
  border-radius: 10px !important;
  border: 2px solid #bebebe !important;
  background-color: #ffffff !important;
  color: rgb(7, 64, 114) !important;
}

>>> .el-input__icon {
  color: rgb(7, 64, 114) !important;
}

>>> .verification-box {
  width: 50% !important;
}

>>> .el-button {
  border-radius: 10px;
  border: 2px solid #c6e2ff;
}

>>> .el-tabs__item {
  font-weight: bold !important;
  color: rgb(7, 64, 114);
}

>>> input::-webkit-input-placeholder {
  -webkit-text-fill-color: #b7b7b7 !important;
  text-align: left !important;
  font-size: 14px !important;
}
</style>


// .login {
//   width: 100%;
//   height: 100vh;
//   background-size: 100% 100%;
//   background-position: center center;
//   overflow: auto;
//   position: relative;
//   /*background-image: url("../assets/images/login-img.jpg");*/
// }

// .login .login_form {
//   width: 400px;
//   height: 400px;
//   position: absolute;
//   margin: auto;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   padding: 10px;
//   background: #fff !important;
//   border-radius: 10px;
//   box-shadow: 0 0 10px #ddd;
// }

// .btns {
//   display: flex;
//   justify-content: flex-end;
// }

// .login  .login_form p {
//   font-size: 24px !important;
//   text-align: center;
//   font-weight: 600;
// }

//   .el-tabs__item {
//   font-size: 16px !important;
//   font-weight: bold !important;
// }

// ::v-deep .el-input__inner {
//   border-radius: 10px !important;
//   border: 2px solid #bebebe !important;
//   background-color: #ffffff !important;
//   color: rgb(7, 64, 114) !important;
// }

// ::v-deep .el-input__icon {
//   color: rgb(7, 64, 114) !important;
// }

// ::v-deep .verification-box {
//   width: 50% !important;
// }

// ::v-deep .el-button {
//   border-radius: 10px;
//   border: 2px solid #c6e2ff;
// }

// ::v-deep .el-tabs__item {
//   font-weight: bold !important;
//   color: rgb(7, 64, 114);
// }

// ::v-deep  input::-webkit-input-placeholder {
//   -webkit-text-fill-color: #b7b7b7 !important;
//   text-align: left !important;
//   font-size: 14px !important;
// }

// </style>