<template>
  <div class="overflow-auto mt-3">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3"> {{ $t('currentPage') }}</p>

    <b-table 
      id="my-table" 
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >

  </b-table>
  </div>
</template>

<script>
   import axios from 'axios'
  export default {
    data() {
      return {
        perPage: 20,
        currentPage: 1,
        items: []
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    created() {
      try {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
          this.items = res.data
        })

      } catch {
        
      }
    }
  }
</script>