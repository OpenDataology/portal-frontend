<template>
  <div class="box">
    <div class="header-box">SPDX-like Template</div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      default-expand-all="true"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span v-if="data.craft_code != null">({{ data.craft_code }}) </span>
      </span>
      <template slot-scope="{ node, data }">
        <el-tooltip effect="dark" placement="right-start">
          <!--      tip    change line-->
          <div slot="content" v-html="data.tip"></div>
          <span>
            <!--            key-->
            <a style="color: #22ff0a">{{ data.key }}：</a>
            <!--            value-->
            <a style="font-family: monaco, monospace">{{ data.value }}</a>
          </span>
        </el-tooltip>
      </template>
    </el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          key: "root",
          tip: "Root node",
          children: [
            {
              key: '"name"',
              value: '"CIFAR-10"',
              tip:
                "Dataset name</br>" +
                "Description: The name of dataset.</br> " +
                "Format: Single line of text.</br> " +
                "More details: Please refer to 1.1.Dataset name field in Dataset Metadata Schema.pdf.",
            },
            {
              key: '"versionInfo"',
              value: '"0.1"',
              tip:
                "Dataset version</br>" +
                "Description: The version of dataset.</br>" +
                "Format: Single line of text here, but should be converted into float in program.</br>" +
                "More details: Please refer to 1.2 Dataset version field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: ' "license"',
              // value: '"0.1"',
              tip: "License",
              children: [
                {
                  key: '"SPDXID"',
                  value: '"CC0-1.0"',
                  tip:
                    "License identifier</br>" +
                    "Description: The identification of a license.</br>" +
                    'Format: "SPDXRef-"[idstring], where [idstring] is a unique stringc ontaining letters, numbers, "." and/or "-".</br>' +
                    "More details: Please refer to 2.1 License identifier field in Dataset Metadata Schema.pdf.</br>",
                },
                {
                  key: '"name"',
                  value: '"SPDXRef-License1"',
                  tip:
                    "License name</br>" +
                    "Description: The name of a license.</br>" +
                    "Format: Single line of text.</br>" +
                    "More details: Please refer to 2.2 License name field in Dataset Metadata Schema.pdf.</br>",
                },
                {
                  key: '"licensors"',
                  // value:'"Present on the official dataset website"',
                  children: [
                    {
                      key: 0,
                      value: '"Organization: ExampleCodeInspect ()"',
                      tip: "Array",
                    },
                    {
                      key: 1,
                      value: '"Person: Jane Doe ()"',
                      tip: "Array",
                    },
                  ],
                  tip:
                    "License licensor</br>" +
                    "Description: The licensors in a license.</br>" +
                    'Format: Single line of text with the following keywords: "Person: person name" and optional "(email)", "Organization: organization" and optional "(email)"</br>' +
                    "More details: Please refer to 2.3 License licensor field in Dataset Metadata Schema.pdf.</br>",
                },
                {
                  key: '"sourceInfo"',
                  value: '"Present on the official dataset website"',
                  tip:
                    "License source information</br>" +
                    "Description: Provide a place to record any relevant background information or additional comments about the origin of this license.</br>" +
                    "Format: Single line of text.</br>" +
                    "More details: Please refer to xxx field in Dataset Metadata Schema.pdf.</br>",
                },
                {
                  key: '"homepage"',
                  value: '"https://www.cs.toronto.edu/~kriz/cifar.html"',
                  tip:
                    "License homepage</br>" +
                    "Description: Provide a place to record a web site that serves as the license's home page.</br>" +
                    "Format: Uniform resource locator | NONE | NOASSERTION</br>" +
                    "More details: Please refer to 2.5 License homepage field in Dataset Metadata Schema.pdf.</br>",
                },
                {
                  key: '"content"',
                  // value:'"Present on the official dataset website"',
                  children: [
                    {
                      key: 0,
                      value: '"Iname: imagenet Terms of Access"',
                      tip: "Array",
                    },
                    {
                      key: 1,
                      value: '"hash: 55EB32BC75A822E4522317F4545A426B"',
                      tip: "Array",
                    },
                  ],
                  tip:
                    "License Content</br>" +
                    "Description: ???</br>" +
                    'Format: Single line of text with the following keywords: "Iname: name", "hash: hashValue"</br>' +
                    "More details: Please refer to 2.6 License Content field in Dataset Metadata Schema.pdf.</br>",
                },
              ],
            },
            {
              key: '"originator"',
              value:
                ' "Organization: ExampleCodeInspect (contact@example.com)"',
              tip:
                "Dataset originator</br>" +
                "Description: The originator of this dataset, may be different from the outlet.</br>" +
                "Format: Single line of text with one of the following keywords (Person | Organization | NOASSERTION).</br>" +
                "More details: Please refer to 1.4 Dataset originator field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"downloadable"',
              value: "true",
              tip:
                "Dataset downloadable</br>" +
                "Description: Is the dataset downloadable or not.</br>" +
                "Format: Boolean | NOASSERTION when omitted.</br>" +
                "More details: Please refer to 1.5 Dataset downloadable field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"outlet"',
              // value: '"0.1"',
              children: [
                {
                  key: 0,
                  value: '"type: paper"',
                  tip: "Array",
                },
                {
                  key: 1,
                  value: '"reference: ref-style: ref-content"',
                  tip: "Array",
                },
              ],
              tip:
                "Dataset outlet</br>" +
                "Description: Identify the actual distribution source. This might or might not be different from the originating distribution source.</br>" +
                "Format: Single line of text with one of the following keywords (Type | Reference | NOASSERTION).</br>" +
                "More details: Please refer to 1.6 Dataset outlet field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: ' "size"',
              // value: '"0.1"',
              children: [
                {
                  key: 0,
                  value: '"languageVersion: python"',
                  tip: "Array",
                },
                {
                  key: 1,
                  value: '"unit: MB"',
                  tip: "Array",
                },
                {
                  key: 2,
                  value: '"large: 163"',
                  tip: "Array",
                },
              ],
              tip:
                "Dataset size</br>" +
                "Description: The size of dataset.</br>" +
                "Format: Single line of text with the keywords (LanguageVersion, Unit, Large).</br>" +
                "More details: Please refer to 1.7 Dataset size field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: ' "archiveType"',
              value: '".tar.gz"',
              tip:
                "Dataset archive type</br>" +
                "Description: The archive type of this dataset.</br>" +
                "Format: A single text of any archive type from [https://en.wikipedia.org/wiki/List_of_archive_formats#Compression_only].</br>" +
                "More details: Please refer to 1.8 Dataset archive type field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: ' "personalInfoAppeared"',
              value: "true",
              tip:
                "Dataset personal information appeared</br>" +
                "Description: Is there any personal information appeared in this dataset?</br>" +
                "Format: Boolean | NOASSERTION when omitted.</br>" +
                "More details: Please refer to 1.9 Dataset personal information appeared field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"addition"',
              value: '"NOASSERTION"',
              tip:
                "Dataset addition</br>" +
                "Description: Additional information.</br>" +
                "Format: NOASSERTION | Free form text taht can span multiple lines.</br>" +
                "More details: Please refer to 1.10 Dataset addition field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"offensive"',
              value: "true",
              tip:
                "Dataset offensive</br>" +
                "Description: Is there any offensive items in this dataset?</br>" +
                "Format: Boolean | NOASSERTION when omitted.</br>" +
                "More details: Please refer to 1.11 Dataset offensive field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"sourceInfo"',
              value: '"Several image search engines (details unknown)"',
              tip:
                "Dataset source information</br>" +
                "Description: Provide a place to record any relevant background information or additional comments about the origin of this dataset.</br>" +
                "Format: Free form text that can span multiple lines.</br>" +
                "More details: Please refer to 1.12 Dataset source information field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"licenseAvailable"',
              value: "true",
              tip:
                "Dataset license available</br>" +
                "Description: Is there license available on the website?</br>" +
                "Format: Boolean</br>" +
                "More details: Please refer to 1.13 Dataset license available field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"description"',
              value:
                '"ImageNet is an image database organized according to the WordNet hierarchy (currently only the nouns), in which each node of the hierarchy is depicted by hundreds and thousands of images [...] The data is available for free to researchers for non-commercial use."',
              tip:
                "Dataset description</br>" +
                "Description: This field is a more detailed description of the dataset.</br>" +
                "Format: Free form text that can span multiple lines.</br>" +
                "More details: Please refer to 1.14 Dataset description field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"checksums"',
              // value: '"0.1"',
              children: [
                {
                  key: 0,
                  tip: "Array",
                  children: [
                    {
                      key: '"algorithm"',
                      value: '"MD5"',
                      tip: "algorithm",
                    },
                    {
                      key: '"checksumValue"',
                      value: '"c58f30108f718f92721af3b95e74349a"',
                      tip: "checksumValue",
                    },
                    {
                      key: '"version"',
                      value: '"python"',
                      tip: "version",
                    },
                  ],
                },
                {
                  key: 1,
                  tip: "Array",
                  children: [
                    {
                      key: '"algorithm"',
                      value: '"MD5"',
                      tip: "algorithm",
                    },
                    {
                      key: '"checksumValue"',
                      value: '"70270af85842c9e89bb428ec9976c926"',
                      tip: "checksumValue",
                    },
                    {
                      key: '"version"',
                      value: '"Matlab"',
                      tip: "version",
                    },
                  ],
                },
                {
                  key: 2,
                  tip: "Array",
                  children: [
                    {
                      key: '"algorithm"',
                      value: '"MD5"',
                      tip: "algorithm",
                    },
                    {
                      key: '"checksumValue"',
                      value: '"c32a1d4ab5d03f1284b67883e8d87530"',
                      tip: "checksumValue",
                    },
                    {
                      key: '"version"',
                      value: '"binary"',
                      tip: "version",
                    },
                  ],
                },
              ],
              tip:
                "Dataset checksum</br>" +
                "Description: Provide an independently reproducible mechanism that permits unique identification of a specific dataset that </br>" +
                " correlates to the data. This identifier enables a recipient to determine if any data in the original dataset has been changed.</br>" +
                'Format: There are five components, an algorithm identifier (e.g. MD5), a colon separator ":",a bit value represented as lowercase</br>' +
                ' hexadecimal digits (appropriate as output to the algorithm), a colon separator ":", and a language version.</br>' +
                "More details: Please refer to 1.15 Dataset checksum field in Dataset Metadata Schema.pdf.</br>",
            },
            {
              key: '"collectionProcess"',
              value:
                '"We collect candidate images from the Internet by querying several image search engines."',
              tip:
                "Dataset collection process</br>" +
                "Description: An optional field to provide the process of collection.</br>" +
                "Format: Free form text that can span multiple lines.</br>" +
                "More details: Please refer to 1.16 Dataset collection process field in Dataset Metadata Schema.pdf.</br>",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        key: "key",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data);
    },
  },
};
</script>
<style>
.box {
  color: #ffffff;
  /*overflow-x: hidden;*/
  /*overflow-y: scroll;*/
  width: 80%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  background-color: #3d7adf;
  margin: 0 auto;
}

.el-tree {
  background: #192947 !important;
  color: #ffffff !important;
}

/*click*/
.el-tree-node.is-current > .el-tree-node__content {
  background-color: #314e6a !important;
}

/*hover*/
.el-tree-node__content:hover {
  background: #314e6a !important;
}

.box .el-tree-node {
  /*white-space: normal;*/
  white-space: normal !important;
  word-break: break-all !important;
  overflow: hidden !important;
  text-align: left !important;
}

.box .el-tree-node__content {
  height: 100% !important;
  align-items: normal !important;
}
.header-box {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #3d7adf;
}
</style>
