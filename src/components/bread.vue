<template>
  <div class="bread">
    <a-breadcrumb separator='>'>
      <a-breadcrumb-item v-for="(item,index) of $route.matched" :key="index" style="padding:5px">
        <router-link :to="item.path" style="font-size:18px">{{item.meta.title}}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
    watch :{
        '$route':'init'
    },
    mounted(){
        console.log(this.$route)
    },
    methods:{
        init(){
            console.log(this.$route)
        }
    }
    
};
</script>

<style scoped>
.bread{
   background-color: #fff;
   padding: 5px 0px;
   margin-bottom: 20px;
   border:1px solid #dddddd;
   padding-left: 10px;
   border-radius: 10px;
}
</style>