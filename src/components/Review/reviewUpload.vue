<template>
<div>
  <el-button @click="addDomain" style="margin-bottom: 20px;padding-left: 20px">Add a form</el-button>
  <el-collapse v-model="dataReviewActiveNames" @change="handleChange" >
    <el-collapse-item :name="index" v-for="(item,index) in dataReviewList"  :key="index" >
      <template slot="title" >
        <span :class="index % 2==0 ?'coll_item_span_odd' : 'coll_item_span'">dataset form:{{index}}
          <i class="header-icon el-icon-info" style="padding-left: 10px"></i>
        </span>
      </template>
      <el-form :label-position="labelPosition"   label-width="100px" :model="dataReviewList[index]" >
        <el-form-item label="name" prop="name" required>
          <el-input v-model="dataReviewList[index].name">{{item.name}}}</el-input>
        </el-form-item>
        <el-form-item label="location" prop="location" required>
          <el-input v-model="dataReviewList[index].location" >{{item.location}}}</el-input>
        </el-form-item>
        <el-form-item label="originator" prop="originator" required>
          <el-input v-model="dataReviewList[index].originator" >{{item.originator}}}</el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitReviewForm(index,dataReviewList[index])">submit</el-button>
<!--          <el-button type="info" @click="resetForm('formLabelAlign')">重置</el-button>-->
          <el-button type="info" @click.prevent="removeDomain(item)">delete form</el-button>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</div>

</template>

<script>
import RequestService from "../../../config/api";
import {Message} from "element-ui";

export default {
  name: "reviewUpload",
  data(){
    return{
      dataReviewActiveNames: ['1'],
      dataReviewList:[
        {
          name: null,
          location: null,
          originator: null
        },
      ],
      labelPosition: 'left', // 表单标签左对齐
      userId:sessionStorage.getItem("userId")
    }
  },
  methods:{
    // 新增表单
    addDomain(){
      this.dataReviewList.push({
        name: '',
        location: '',
        originator: ''
      });
    },
    // 暂存用户填写的AIBOM表单
    save_AIBOM(index){
      const data={
        "user_id": this.userId,
        "dataset_aibom_info_list": []
      }
      // 暂时保存一个
      data.dataset_aibom_info_list.push(this.formSelect[index]);
      RequestService.saveAIBOM(data).then( res =>{
        console.log(res)
        Message({
          message:'save success',
          type: 'success'
        });
      })
    },
    // 提交review表单
    submitReviewForm(index,formRule){
      console.log("list",this.dataReviewList)
      let valid = true;
      if(this.dataReviewList[index].name === null || this.dataReviewList[index].name.length === 0) valid = false;
      if(this.dataReviewList[index].location === null || this.dataReviewList[index].location.length === 0) valid = false;
      if(this.dataReviewList[index].originator === null || this.dataReviewList[index].originator.length === 0) valid = false;
      if (valid) {
        const data = {
          "user_id": this.userId,
          "dataset_review_list": []
        };
        data.dataset_review_list.push(this.dataReviewList[index]);
        RequestService.dataUpload(data).then( res =>{
          Message({
            message:'submit success',
            type: 'success'
          });
          // 提交成功之后，应该将提交的表单删除
          if(index !== -1){
            this.dataReviewList.splice(index,1);
          }
          console.log(this.dataReviewList);
        });
      } else {
        console.log('error submit!!');
        Message({
          message:"Some required information is not filled",
          type:"warning",
        })
        return false;
      }

    },
    // 删除表单
    removeDomain(item){
      const index = this.dataReviewList.indexOf(item);
      if(index !== -1){
        const  aa = this.dataReviewList.splice(index,1);
        Message({
          message:'delete form success',
          type: 'success'
        });
      }
    },
    // 重置表单内容
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleChange(val) {
      console.log(val);
    },
  }
}
</script>

<style scoped>
.aiBom-dataList .coll_item_span{
  width: 100%;
  background-color: rgba(73,204,144,.1);
  padding-left:10px;
}
.aiBom-dataList .coll_item_span_odd{
  width: 100%;
  background-color: #fff;
  padding-left:10px;
}
</style>
