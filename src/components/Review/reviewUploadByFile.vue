<template>
<div style="display: inline-block;width: 100%">
  <el-row>
    <el-col :span="6"> <el-upload
      class="upload-demo"
      ref="upload"
      drag
      :limit="1"
      :on-change="uploadChange"
      :file-list="fileList"
      :auto-upload="false"
      action
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text"><em>click upload</em></div>
      <div class="el-upload__tip" slot="tip" style="color: red">only support csv/xlsx file type</div>
    </el-upload></el-col>
    <el-col :span="4">
      <el-button  style="margin: 70px 0px 0px 50px;" size="big" type="success" @click="submitUpload">upload</el-button>
    </el-col>
  </el-row>

</div>
</template>

<script>
import requestService from "../../../config/api";
import {Message} from "element-ui";

export default {
  name: "apendingAIBOM",
  data(){
    return{
      fileList:[],
      userId:sessionStorage.getItem("userId")
    }
  },
  created() {
  },
  methods:{
    uploadChange(file,fileList){
      this.fileList = fileList.slice(-3)
      console.log("fileList",fileList)
    },
    handlePreview(file) {
      console.log(file);
    },
    Upload(){
      return 1;
    },
    submitUpload() {
      console.log("click：",this.$refs.upload)
      console.log("click fileList：",this.fileList)
      const data = {
        "user_id": this.userId,
        "dataset_review_list":this.fileList[0].raw
      }
      requestService.uploadFiles(data).then( res => {
        Message(
          {
            message:"upload success",
            type:"success"
          }
        );
        // this.$message.success("upload success");
        this.$refs.upload.clearFiles();
      }).catch( err =>{
        // this.$message.error(err.notification)
      })
    },
    handleChange(val) {
      console.log(val);
    },
  }
}
</script>

<style >
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
