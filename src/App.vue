<template>
  <div id="app">
    <router-view></router-view>
    <!-- <welcome />-->
    <!-- <license-info/> -->
    <!-- <license-all/> -->
     <!-- <data-set-all/> 
    <!--<data-set-info/> -->

  </div>
</template>

<script>
import DataSetAll from './views/dataSetAll.vue';
import DataSetInfo from './views/dataSetInfo.vue';
import LicenseAll from './views/licenseAll.vue';
import LicenseInfo from './views/licenseInfo.vue';

export default {
  components: {LicenseInfo, LicenseAll, DataSetAll, DataSetInfo},
  name: "App",
   };
</script>

<style>
</style>
