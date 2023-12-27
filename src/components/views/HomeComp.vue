<template>
  <div class="home">

    <ProfileComp msg="Welcome to Your Vue.js App" />
  </div>
</template>
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import ProfileComp from "@/components/ProfileComp.vue";

export default {
  name: 'Home',
  components: {
    ProfileComp
  }
}
</script>