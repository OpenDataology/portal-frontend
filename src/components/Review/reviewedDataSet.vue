<template>
  <div class="table">
<!--    <el-row >-->
<!--      <el-input maxlength="20" class="reviewForm searchContent" v-model="userIdParam" placeholder="用户id"></el-input>-->
<!--&lt;!&ndash;      <el-button type="primary" plain @click="search">搜索</el-button>&ndash;&gt;-->
<!--    </el-row>-->


    <el-row style="margin-bottom: 10px">

      <el-button type="primary" @click="downloadReviewedData">download all reviewed dataset <i class="el-icon-download"></i></el-button>
    </el-row>
    <el-table
      max-height="600"
      border
      :data="tableData"
      stripe
      >
      <el-table-column
        prop="name"
        label="name"
        width="120">
      </el-table-column>
      <el-table-column
        prop="location"
        label="location"
        width="120">
      </el-table-column>
      <el-table-column
        prop="originator"
        label="originator"
        width="120"
      >
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
        label="declared license"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="type"
        label="type"
        width="120">
        <template slot-scope="scope" v-if="scope.row.type !== null && scope.row.type !== ''">
          <el-tag type="success">{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="size"
        label="size"
        width="120">
        <template slot-scope="scope" v-if="scope.row.size !== null && scope.row.size !== ''">
          <el-tag type="info">{{ scope.row.size }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="intended_use"
        label="intended use"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="checksum"
        label="checksum"
        width="180">
      </el-table-column>
      <el-table-column
        prop="data_collection_process"
        label="data collection process"
        width="200">
      </el-table-column>
      <el-table-column
        prop="known_biases"
        label="known biases"
        width="200"
      >
        <template slot-scope="scope" v-if="scope.row.known_biases !== null">
          <el-tag :type="scope.row.known_biases ? 'success' : 'error'">{{ scope.row.known_biases }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="sensitive_personal_information"
        label="sensitive personal information"
        width="240">
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
        label="review result initial"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_used_initial"
        label="dataset commercially used initial"
        width="300"
      >
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_used_initial !== null">
          <el-tag :type="scope.row.is_dataset_commercially_used_initial ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_used_initial }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_distributed_initial"
        label="dataset commercially distributed initial"
        width="300">
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_distributed_initial !== null">
          <el-tag :type="scope.row.is_dataset_commercially_distributed_initial ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_distributed_initial }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_product_commercially_published_initial"
        label="product commercially published initial"
        width="300">
        <template slot-scope="scope" v-if="scope.row.is_product_commercially_published_initial !== null">
          <el-tag :type="scope.row.is_product_commercially_published_initial ? 'success' : 'error'">{{ scope.row.is_product_commercially_published_initial }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="right_initial"
        label="right initial"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="obligation_initial"
        label="obligation initial"
        width="150"
      >
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
        label="review result final"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_used_final"
        label="dataset commercially used final"
        width="260"
      >
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_used_final !== null">
          <el-tag :type="scope.row.is_dataset_commercially_used_final ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_used_final }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_dataset_commercially_distributed_final"
        label="dataset commercially distributed final"
        width="300">
        <template slot-scope="scope" v-if="scope.row.is_dataset_commercially_distributed_final !== null">
          <el-tag :type="scope.row.is_dataset_commercially_distributed_final ? 'success' : 'error'">{{ scope.row.is_dataset_commercially_distributed_final }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="is_product_commercially_published_final"
        label="product commercially published final"
        width="300">
        <template slot-scope="scope" v-if="scope.row.is_product_commercially_published_final !== null">
          <el-tag :type="scope.row.is_product_commercially_published_final ? 'success' : 'error'">{{ scope.row.is_product_commercially_published_final }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="right_final"
        label="right final"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="obligation_final"
        label="obligation final"
        width="180">
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
  name: "reviewedDataSet",
  data() {
    return {
      userIdParam:this.$route.params.user_id,
      tableData: []
    };
  },
  created() {
    this.search()
  },
  methods: {
    search(){
      const params = {
        user_id:this.userIdParam
      }
      requestService.getReviewedData(params).then(param => {
        this.tableData = param.review_result_list
      })
    },
    downloadReviewedData(){
      const params = {
        user_id:this.userIdParam
      }
      requestService.downloadReviewedData(params).then( res => {
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
        // this.tableData = param.review_result_list
      })
    }
  },
}
</script>
<style scoped>
.table {
  margin: 0 auto;
  width: 100%;
}
</style>
