<template>
  <div class="wrapper">Rental № {{ $route.params.id }}</div>
</template>

<script>
export default {
  name: "RentalItem",
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  text-align: center;
  font-size: 30px;
}
</style>
