<template>
  <!-- <el-button class="ExportType-box">
    <el-row class="block-col-2">
      <el-col>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            Export <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Excel</el-dropdown-item>
            <el-dropdown-item>Json</el-dropdown-item>
            <el-dropdown-item>Yaml</el-dropdown-item>
            <el-dropdown-item>MD</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-button> -->
  <!-- <!-- <el-button class="ExportType-box"> -->
<div class="ExportType-box">
  <el-select v-model="value" placeholder="Export" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
  
</template>

<style>
.el-input el-input--suffix{
  color: #FFFFFF;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #4c8efc;
  font-size: 14px;
  margin-bottom: 20px;
}
.ExportType-box {
  margin-top: 40px;
  margin-right: 30px;
  width: 90px;
  background-color: #4c8efc;
  color: #ffffff;
  float: right;
  text-align: center;
}
.el-button--primary:focus{
    background-color: #4c8efc;
    color: #FFFFFF;
  
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
  margin-left: -5px;
}

.el-button:hover {
  background: #4c8efc;
}
.el-button--primary {
    color: #FFFFFF;
    background-color: #4c8efc;
    border-color: #4c8efc;
    border-radius: 10px;
    border: 2px solid #FFFFFF;

}

input::-webkit-input-placeholder {
    color: #FFFFFF !important;
  }
  input::-moz-input-placeholder {
    color: #FFFFFF !important;
  }
  input::-ms-input-placeholder {
    color: #FFFFFF !important;
  }

</style>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: 'Excel'
        }, {
          value: '2',
          label: 'Json'
        }, {
          value: '3',
          label: 'Yaml'
        }, {
          value: '4',
          label: 'MD'
        }],
        value: ''
      }
    }
  }
</script>
