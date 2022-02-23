<template>
  <div id="app">
    <router-view></router-view>
    <!-- <welcome />
    <hello-world /> -->
    <!-- <license-info/> -->
    <!-- <license-all/> -->
    <!-- <data-set-all/> -->
    <!-- <data-set-info/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DataSetAll from './views/dataSetAll.vue';
import DataSetInfo from './views/dataSetInfo.vue';
import LicenseAll from './views/licenseAll.vue';
import LicenseInfo from './views/licenseInfo.vue';

export default {
  components: {HelloWorld, LicenseInfo, LicenseAll, DataSetAll, DataSetInfo },
  name: "App",
   };
</script>

<style>
</style>
