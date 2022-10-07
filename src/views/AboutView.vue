<template>
  <b-row>
    <b-col class="d-md-none d-lg-block" sm="12"   lg="6">
      <div class="d-flex justify-content-center mt-5">
        <img class="img-fluid" src="@/assets/formimg.png" alt="">        
      </div>
    </b-col>

    <b-col sm="12" md="12"  lg="6">
      <ValidationObserver v-slot="{ handleSubmit }">
      <form class="mt-4" @submit.prevent="handleSubmit(onSubmit)">

      <div class="mt-2">
          <label  class="form-label">{{$t('firstName')}}</label>
          <ValidationProvider name="first Name" rules="required" v-slot="{ errors }">
          <input class="form-control" v-model="person.firstName" type="text">
          <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
      </div>

      <div class="mt-2">
        <label  class="form-label">{{$t('lastName')}}</label>
          <ValidationProvider name="last Name" rules="required" v-slot="{ errors }">
          <input class="form-control" v-model="person.lasttName" type="text">
          <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
      </div>

      <div class="mt-2">
        <label  class="form-label">{{$t('numberclass')}}</label>
          <ValidationProvider name="numberclass" rules="required|min_value:0|max_value:60" v-slot="{ errors }">
          <input class="form-control" v-model="person.numberclass" type="text">
          <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
      </div>

      <div class="mt-2">
        <label  class="form-label">{{$t('finallmarks')}}</label>
          <ValidationProvider name="finall marks" rules="required|min_value:0|max_value:100" v-slot="{ errors }">
          <input class="form-control" v-model="person.finallmarks" type="text">
          <div class="error">{{ errors[0] }}</div>
          </ValidationProvider>
      </div>

        <div class="mt-2">
          <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
            <label  class="form-label">{{$t('emailaddress')}}</label>
          <input class="form-control" v-model="person.email" type="email">
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
        </div>

        <ValidationProvider name="password" rules="required|password:@confirm" v-slot="{ errors }">
          <label  class="form-label">{{$t('password')}}</label>
        <input class="form-control" type="password" v-model="person.password" />
        <div class="error">{{ errors[0] }}</div>
      </ValidationProvider>

      <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
        <label  class="form-label">{{$t('confirmpassword')}}</label>
        <input   class="form-control" type="password" v-model="person.confirmation" />
        <div class="error">{{ errors[0] }}</div>
      </ValidationProvider>

      <button class="btn btn-primary mt-5 w-100 "    type="submit">Submit</button>
      


      </form>
    </ValidationObserver>
    </b-col>
  </b-row>
</template>

<style>
  .error
  {
    color: red;
  }
</style>

<script>  
  import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
  import { mapMutations, mapGetters } from 'vuex';
  extend('password', {
    params: ['target'],
    validate(value, { target }) {
      return value === target;
    },
    message: 'Password confirmation does not match'
  });
  export default {
    data() {
      return {
        person: {
          firstName: null,
          lasttName: null,
          numberclass: null,
          finallmarks: null,
          email: null,
          password: null,
          confirmation: null,
        },
        index: parseInt(this.$route.params.index),
      }
    },
    components: {
      ValidationProvider,
      ValidationObserver
    },
    computed: {
      ...mapGetters(["getdata"])
    }, 
    created() {
      if (this.index >= 0) this.person = this.getdata[this.index];
    },
    methods: { 
      ...mapMutations(["addperson"]),
      onSubmit () {
        alert('Form has been succses!');
        this.person.index = this.index;
        this.addperson(this.person);
        this.$router.push('/'); 
      } 
    }
  }
  </script>
  


