<template>
  <div class="list-render">
    <ul class="list-sociall pl-0">
      <li v-for="listItem in content" class="ff-gravity fs-12 text-left list-item-soc" :class="colorBullet">{{listItem}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ListRender",
    props:{
      colorCLass:{
        type: String,
        default:''
      },
      content:{
        type:Array,
        default:[]
      },
      colorBullet:{
        type:String,
        default:'color-list-yellow'
      }
    }
  }
</script>

<style>

</style>
