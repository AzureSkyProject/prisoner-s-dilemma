<template>
  <div class="TlTiltLine-ctn">
    <div 
      class="tilt-line"
      v-for="(item, index) in lines"
      :key="index"
      :style="{
        width: `${item.width}px`,
        transform: `rotate(${item.transform}deg)`,
        left: `${item.left}px`,
        top: `${item.top}px`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'TlTiltLine',
  props: {
    linesCoor: {
      type: Array,
      default(){
        return [];
      },
    }
  },
  data(){
    return {
      lines: [],
    }
  },
  watch: {
    linesCoor: {
      handler(val){

        // console.log(val)
        let lines = [];

        for(let i in val){

          let item = val[i];
          let width = Math.abs(item.start.x - item.end.x);
          let height = Math.abs(item.start.y - item.end.y);
          let lineLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

          let [minX, minY] = [Math.min(item.start.x, item.end.x), Math.min(item.start.y, item.end.y)];

          // 斜线旋转方向 1为顺时针 -1为逆时针
          let tiltLineClockDirection = 1;
          if((item.start.x - item.end.x) * (item.start.y - item.end.y) < 0){
            tiltLineClockDirection = -1;
          }

          lines[i] = {
            width: lineLength,
            transform: tiltLineClockDirection * Math.atan(height / width) * 180 / Math.PI,
            left: -lineLength / 2 + width / 2 + minX,
            top: minY + height / 2,
          };
        }

        this.lines = lines;
      },
      immediate: true
    },
  }
}
</script>

<style lang="less" scoped>
// @toRoot: "../..";
// @import "@{toRoot}/common/less/common.less";

.TlTiltLine-ctn{
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: 99;
  .tilt-line{
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    border-radius: 2px;
    // background-color: #00b4ff;
    background-color: red;
    box-shadow: 0 0 10px 4px white;
    // opacity: 0.5;
  }
}
</style>
