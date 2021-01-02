<template>
  <div>
    <Head/>
    <router-view/>
    <Main/>
  </div>
</template>

<script>

import Main from '../components/main/Foot'
import Head from "@/components/main/Head";

export default {
  name: "Index",
  components: {
    Head,
    Main
  }
}
</script>

<style scoped>

</style>