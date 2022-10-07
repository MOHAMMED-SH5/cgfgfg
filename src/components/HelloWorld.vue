<template>
  <div class="hello">
    <div class="fourbox p-2">
    <div class="tiitle">{{ item?.title }}</div>
    <div class="line mt-2"></div>
    <div class="d-flex justify-content-between">
      <div><img :src="item?.src"></div>
      <div class="num">{{ item?.num }}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ["item"]
}
</script>

<style scoped>
  
  @media (max-width: 576px) {
    .num
    {
      font-size: 30px;
    }
   }

   @media (min-width: 576px) {
    .num
    {
      font-size: 40px;
    }
   }


    @media (min-width: 768px) {
      .num
      {
        font-size: 50px;
      }
    }

    @media (min-width: 992px) { 
      .num
      {
        font-size: 55px;
      }
    }

    @media (min-width: 1200px) {

      }

    @media (min-width: 1400px) {  

    }

</style>