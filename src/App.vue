<script setup>

</script>

<template>
<router-view/>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
}

.tst{
  color: #27ba9b;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
