<template>
  <div class="container-fluid" :class="containerClasses">
  <div class="row" :class="rowClasses">
  <div :class="leftColumnClasses">
      <slot name="leftCol">leftCol</slot>
  </div>
  <div :class="rightColumnClasses">
    <slot name="rightCol">rightCol</slot>
  </div>
  </div>
  </div>
</template>
<script>
  export default {
    name: "TheTwoColumnsLayout",
    props:{
      leftColumnClass:{
        type:String,
        default: "col-md-8"
      },
      rightColumnClass:{
        type:String,
        default: "col-md-4"
      },
      fullSize:{
        type:Boolean,
        default:false,
      }
    },
    computed:{
      leftColumnClasses(){
        return [this.leftColumnClass, this.fullSize? "h-100":""];
      },
      rightColumnClasses(){
        return [this.rightColumnClass, this.fullSize? "h-100":""];
      },
      rowClasses(){
        return [this.fullSize? "h-100":""];
      },
      containerClasses(){
        return [this.fullSize? "vh-100":""];
      }
    }
  }
</script>
<style scoped>
</style>
