<template>
  <div class="box">
    <div class="Symbol-header-box">Badges</div>
    <!-- <template>
      <el-row :gutter="20">
        <el-col :span="18" :offset="3">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="text-align: left"
                  >1. Concepts for the project logo</span
                >
              </div>
              <div v-for="o in text1" :key="o" class="text item">
                {{ o.value }}
              </div>
              <img
                src="../../assets/icons/1.1.png"
                alt=""
                style="height: 100%; width: 100%"
              />
            </el-card></div
        ></el-col>
      </el-row>
    </template> -->
    <template>
      <el-row :gutter="20">
        <el-col :span="18" :offset="3">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="text-align: left"
                  >1. Concepts for "Commercially distribute the dataset"</span
                >
              </div>
              <div v-for="(o,item) in text2" :key="item" class="text item">
                {{ o.value }}
              </div>
              <img
                src="../../assets/icons/2.1.png"
                alt=""
                class="img-size"
              />
            </el-card></div
        ></el-col>
      </el-row>
    </template>
    <template>
      <el-row :gutter="20">
        <el-col :span="18" :offset="3">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="text-align: left"
                  >2. Concepts for "Commercialize the model output"</span
                >
              </div>
              <div v-for="(o,item) in text3" :key="item" class="text item">
                {{ o.value }}
              </div>
              <img
                src="../../assets/icons/3.1.png"
                alt=""
                class="img-size"
              />
            </el-card></div
        ></el-col>
      </el-row>
    </template>
    <template>
      <el-row :gutter="20">
        <el-col :span="18" :offset="3">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="text-align: left"
                  >3. Concepts for "Release a product with AI model"</span
                >
              </div>
              <div v-for="(o,item) in text4" :key="item" class="text item">
                {{ o.value }}
              </div>
              <img
                src="../../assets/icons/4.1.png"
                alt=""
                class="img-size"
              />
            </el-card></div
        ></el-col>
      </el-row>
    </template>
    <!-- <template>
      <el-row :gutter="20">
        <el-col :span="18" :offset="3">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="text-align: left"
                  >5. Combination</span
                >
              </div>
              <div v-for="o in text5" :key="o" class="text item">
                {{ o.value }}
              </div>
              <img
                src="../../assets/icons/5.1.png"
                alt=""
                style="height: 100%; width: 100%"
              />
            </el-card></div
        ></el-col>
      </el-row>
    </template> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // text1: [
      //   {
      //     value:
      //       "1.1  Icons are mainly based on circles, square and balance, which can represent openness, security and trust, while also expressing the concept of data.",
      //   },
      //   {
      //     value:
      //       "1.2  Three concepts need to be expressed corresponding to three symbols, including the concepts related to data (dataset, datasource, data), compliance (balance), and the concept of open collaboration.",
      //   },
      //   {
      //     value:
      //       "1.3  It can be divided into three layers, with the data part at both ends of the balance and the outermost layer representing openness and collaboration.",
      //   },
      //   {
      //     value:
      //       "1.4  The reason is that data is measured at both ends of the balance, and only after compliance can it be safely opened. Otherwise, opening data without compliance may lead to illegal risks.",
      //   },
      // ],
      text2: [
        {
          value:
            "1.1  Icons are primarily based on multiple squares, representing data, datasources, or datasets.",
        },
        {
          value:
            "1.2  There is a $ symbol which points outward for commercial distribution.",
        },
        {
          value:
            '1.3  Small icons can be used in the first group with a red slash added directly on it to indicate disabled. Large icons can be used in the second group with green "Yes" or red "No" to represent whether it can be distributed commercially or not.',
        },
      ],
      text3: [
        {
          value: "2.1  The icons are mainly square, representing the AI model.",
        },
        {
          value:
            "2.2  There is a $ symbol which points outward for commercial distribution.",
        },
        {
          value:
            '2.3  Small icons can be used in the first group with a red slash added directly on it to indicate disabled. Large icons can be used in the second group with green  "Yes" or red "No" to represent whether it can be distributed commercially or not.',
        },
      ],
      text4: [
        {
          value:
            "3.1  A box can represent a product, imaging like a delivery box that can contain some product.",
        },
        {
          value: "3.2  The open state of the box can represent distribution.",
        },
        {
          value:
            "3.3  There are several small AI models at the top, representing that the products are derived from AI models.",
        },
        {
          value:
            '3.4  Small icons can be used in the first group with a red slash added directly on it to indicate disabled. Large icons can be used in the second group with green "Yes" or red "No" to represent whether it can be distributed commercially or not.',
        },
      ],
      // text5: [
      //   {
      //     value: "5.1  Two parts: the project icon and the license risk items.",
      //   },
      //   {
      //     value:
      //       "5.2  The project icon is on the left and the risk item icons are on the right.",
      //   },
      //   {
      //     value: "5.3  This combination needs a project name and a core aim.",
      //   },
      // ],
    };
  },
};
</script>

</script>
<style scoped>
.box {
  color: #ffffff;
  width: 80%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  border: 2px solid rgb(7, 64, 114);
}
/* .Symbol-context-box {
  color: #ffffff;
  font-size: 18px;
} */
.Symbol-header-box {
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  background-color: #003261;
}
.text {
  font-size: 15px;
  text-align: left;
}

/* .item {
  margin-bottom: 14px;
} */

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
/* .clearfix {
  width: 50%;
} */
/* .box-card {
  width: 80%;
} */
.Symbol-box-card {
  text-align: center !important;
}
.img-size{
  height: 50%; 
  width: 50%;

}
</style>
