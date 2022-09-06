<template>
  <div class="home-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted(){
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
      this.$router.push({
        name: 'blank'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@toRoot: "../..";
@import "@{toRoot}/common/less/common.less";

.home-container{
  width: 100%;
  height: 100%;
  // background: url('./imgs/paper.jpeg') no-repeat center center;
  // /*可删除*/
  // background-color: whitesmoke;
  background-color: rgb(30, 30, 30);
  // color: rgb(210, 210, 210);
  // text-align: center;
  // font-size: 50px;
  // font-weight: 500;
  // line-height: 100px;
  // /*可删除*/
}
</style>
