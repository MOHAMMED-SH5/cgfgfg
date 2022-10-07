<template>
  <b-row>
    <b-col lg="12">
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
          :items="getdata"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
          small
        >
          <template #cell(actions)="data">
            <b-button variant="success"  size="sm" class="me-3"  @click="$router.push({name: 'about', params: {index: data.index}})">
              <i class="fa-solid fa-pen-to-square"></i>
            </b-button>
            
            <b-button @click="openDeletionModal(data.index)" size="sm" variant="danger"><i class="fa-solid fa-trash"></i></b-button>
          </template>
        </b-table>
      </div>
    </b-col>

    <b-modal v-model="isModalOpen" @ok="deleteperson(deletionIndex)"  id="modal-1" title="warning !!!">
      <p class="my-4">Are You Sure Delete!</p>
    </b-modal>

  </b-row>
</template>

<script>
  import { mapGetters } from "vuex";
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        isModalOpen: false,
        perPage: 3,
        currentPage: 1,
        deletionIndex: null,
        fields: ['firstName', 'lasttName', 'numberclass','finallmarks','email','password','confirmation','actions'],
      }
    },
    methods:{
      ...mapMutations(["deleteperson"]),
      openDeletionModal(index) {
        this.deletionIndex = index;
        this.isModalOpen = true;
      },
      // applyDeletion() {
      //   console.log("test")
      // }
    },  
    computed: {
      ...mapGetters(["getdata"]),
      rows() {
        return this.getdata.length
      },
    },

  }
</script>