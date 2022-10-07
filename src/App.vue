<template>
  <b-row class="gx-0">
      <div class="all-sec">
            <b-col   sm="2"  md="2" lg="2" class="x ml-0">
          <!--  الجزء االاول  -->
          <div class="onesec p-2" >
            <div class="DS text-center">
            {{$t('DSPanel')}}
            </div>
                <div class="mt-4">
                  <div class="onl mt-3"><router-link class="linkhome p-3"  to="/" >{{$t('Home')}}</router-link></div>
                  <div class="onl mt-3"><router-link class="linkabout p-3" :to="{name:'about',params:{id:1}}">{{$t('About')}}</router-link></div>
                  <div class="onl mt-3"><router-link class="linktables p-3" to="/table">{{$t('Table')}}</router-link></div>
                </div>
              </div>
         </b-col>
          <!-- قسم الجدول  -->
        <b-col  sm="10" md="10" lg="10" class="z" >
          <div class="d-flex justify-content-between ms-3 mt-3">
            <div>
              <span ><i class="fa-solid  fa-bell"></i></span>
            </div>

            <div class="ml-5">
              <select class="form-select" v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                  {{ lang }}
                </option>
              </select>
            </div>
          </div>
          <!-- الجزء الثاني -->
          <div class="twosec pt-2 p-2">
            <b-row>
              <b-col lg="3" md="6" sm="12" class="mt-2"  v-for="(item, index) in items" :key="index">
                <HelloWorld  :item="item"/>
              </b-col>
            </b-row>
            <b-row>
              <router-view />
            </b-row>
          </div>
        </b-col>

      </div>
  </b-row>
</template>

<style lang="scss">
  @import "@/scss/style.scss";
</style>
  
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 25, height: 25, class: 'm1' },
      items: [
        {
          title: "USAGES",
          src: require("@/assets/oneshap.png"),
          num: "90%"
        },
        {
          title: "IMPRESSION",
          src: require("@/assets/twoshap.png"),
          num: "10002"
        },
        {
          title: "TOTAL SALE",
          src: require("@/assets/threeshap.png"),
          num: "1200"
        },
        {
          title: "TOTAL PROFIT",
          src: require("@/assets/fourshap.png"),
          num: "$8000"
        }
      ],
      langs: ['ar', 'en']
    }
  }
}
</script>
