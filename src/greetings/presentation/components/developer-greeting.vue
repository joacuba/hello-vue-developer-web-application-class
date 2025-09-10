<script setup lang="js">

import {Developer} from "../../domain/model/developer.entity.js";

const props = defineProps(["firstName", "lastName"]);
const greeting = computed(() => {
  if (!props.firstName?.trim() || !props.lastName?.trim()) {
    return "Welcome anonymous developer!";
  } else {
    const developer = new Developer(props.firstName, props.lastName);
    return `Congrats ${developer.firstName} ${developer.lastName}!`;
  }
});
</script>

<template>

</template>

<style scoped>

</style>