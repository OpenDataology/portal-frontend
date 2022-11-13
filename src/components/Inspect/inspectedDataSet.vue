<template>
  <div class="table">
    <el-row >
      <el-input maxlength="20" class="reviewForm searchContent" v-model="userIdParam" placeholder="user id"></el-input>
      <el-button type="primary" plain @click="search">search</el-button>
      <el-button type="primary" plain @click="download">Download dataset information</el-button>
    </el-row>

    <el-table
      max-height="600"
      border
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="location"
        label="location"
        width="180">
      </el-table-column>
      <el-table-column
        prop="originator"
        label="originator">
      </el-table-column>
      <el-table-column
        prop="license_location"
        label="license location"
        width="180">
      </el-table-column>
      <el-table-column
        prop="concluded_license"
        label="concluded license"
        width="180">
      </el-table-column>
      <el-table-column
        prop="declared_license"
        label="declared license">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type"
        width="180">
      </el-table-column>
      <el-table-column
        prop="size"
        label="size"
        width="180">
      </el-table-column>
      <el-table-column
        prop="intended_use"
        label="intended use">
      </el-table-column>
      <el-table-column
        prop="checksum"
        label="checksum"
        width="180">
      </el-table-column>
      <el-table-column
        prop="data_collection_process"
        label="data collection process"
        width="180">
      </el-table-column>
      <el-table-column
        prop="known_biases"
        label="known biases">
        <template slot-scope="scope" v-if="scope.row.known_biases !== null">
          <el-tag :type="scope.row.known_biases ? 'success' : 'error'">{{ scope.row.known_biases }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="sensitive_personal_information"
        label="sensitive personal information"
        width="180">
        <template slot-scope="scope" v-if="scope.row.sensitive_personal_information !== null">
          <el-tag :type="scope.row.sensitive_personal_information ? 'success' : 'error'">{{ scope.row.sensitive_personal_information }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="offensive_content"
        label="offensive content"
        width="180">
        <template slot-scope="scope" v-if="scope.row.offensive_content !== null">
          <el-tag :type="scope.row.offensive_content ? 'success' : 'error'">{{ scope.row.offensive_content }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="review_result_initial"
        label="review result initial">
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_used_initial"
        label="dataset commercially used initial">
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_used_initial !== null">
          <el-tag :type="scope.row.is_dataset_commercially_used_initial ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_used_initial }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_distributed_initial"
        label="dataset commercially distributed initial"
        width="180">
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_distributed_initial !== null">
          <el-tag :type="scope.row.is_dataset_commercially_distributed_initial ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_distributed_initial }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_product_commercially_published_initial"
        label="product commercially published initial"
        width="180">
        <template slot-scope="scope" v-if="scope.row.is_product_commercially_published_initial !== null">
          <el-tag :type="scope.row.is_product_commercially_published_initial ? 'success' : 'error'">{{ scope.row.is_product_commercially_published_initial }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="right_initial"
        label="right initial">
      </el-table-column>
      <el-table-column
        prop="obligation_initial"
        label="obligation initial">
      </el-table-column>
      <el-table-column
        prop="limitation_initial"
        label="limitation initial"
        width="180">
      </el-table-column>
      <el-table-column
        prop="notes_initial"
        label="notes initial"
        width="180">
      </el-table-column>
      <el-table-column
        prop="review_result_final"
        label="review result final">
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_used_final"
        label="dataset commercially used final">
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_used_final !== null">
          <el-tag :type="scope.row.is_dataset_commercially_used_final ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_used_final }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_distributed_final"
        label="dataset commercially distributed final"
        width="180">
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_distributed_final !== null">
          <el-tag :type="scope.row.is_dataset_commercially_distributed_final ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_distributed_final }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_product_commercially_published_final"
        label="product commercially published final"
        width="180">
        <template slot-scope="scope" v-if="scope.row.is_product_commercially_published_final !== null">
          <el-tag :type="scope.row.is_product_commercially_published_final ? 'success' : 'error'">{{ scope.row.is_product_commercially_published_final }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="right_final"
        label="right final">
      </el-table-column>
      <el-table-column
        prop="obligation_final"
        label="obligation final">
      </el-table-column>
      <el-table-column
        prop="limitation_final"
        label="limitation final"
        width="180">
      </el-table-column>
      <el-table-column
        prop="notes_final"
        label="notes final"
        width="180">
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
import requestService from "../../../config/api";
export default {
  name: "inspectedDataSet",
  data() {
    return {
      userIdParam:'',
      tableData: []
    };
  },
  methods: {
    search(){
      if (this.userIdParam == ''){
        this.userIdParam = null
      }
      requestService.getOverReviewData(this.userIdParam).then(param => {
        this.tableData = param.review_result_list
        this.$emit("number",this.tableData.length)
      })
    },
    download(){
      if (this.userIdParam == ''){
        this.userIdParam = null
      }
      const data={
        user_id:this.userIdParam
      }
      requestService.downloadResultData(data).then( res => {

        const link = document.createElement('a');  // 创建a标签
        let  resdata = "\ufeff" + res; // 解决乱码 https://www.cnblogs.com/gunelark/p/13491985.html
        let blob = new Blob([resdata], { type: 'text/csv,charset=UTF-8' });
        link.href = URL.createObjectURL(blob);   // 创建下载的链接
        //num++
        link.setAttribute('download', 'reviewedDataset.csv');  // 给下载后的文件命名
        document.body.appendChild(link);
        link.click();  // 点击下载
        document.body.removeChild(link);  //  下载完成移除元素
        window.URL.revokeObjectURL(link.href);  // 释放掉blob对象
      })
    },
  },
  created() {
    requestService.getOverReviewData(null).then(param => {
      this.tableData = param.review_result_list
      this.$emit("number",this.tableData.length)
    })
  }
}
</script>
<style scoped>
.table {
  margin: 0 auto;
  width: 70%;
}
</style>
