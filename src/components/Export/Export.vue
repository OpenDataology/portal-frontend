<template>
  <el-button class="ExportType-box">
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
  </el-button>
</template>

<style>
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.ExportType-box {
  margin-top: 20px;
  margin-right: 30px;
  width: 80px;
  background-color: #4c8efc;
  color: #ffffff;
  float: right;
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
  margin-left: -5px;
}

.el-button:hover {
  background: #4c8efc;
}
</style>
