<template>
  <div class="ctn">
    <div class="day-z">第&ensp;{{ dayNow + 1 }}&ensp;天</div>
    <!-- ({{ statesMap[nowState] }}) -->
    <div class="mans-zone" :style="{ width: 600 + 'px', height: 720 + 'px' }">
      <!-- :style="{ left: man.position[0] + 'px', top: man.position[1] + 'px' }" -->
      <!-- :style="{ left: man.margin[0] + 'px', top: man.margin[1] + 'px' }" -->
      <TransitionGroup tag="ul" :name="ifAnimation ? 'fade' : 'noanime'" class="container">
        <el-tooltip
          class="item" 
          effect="light" 
          :content="man.id" 
          placement="top"
          v-for="man in mans"
          :key="man.id"
        >
          <div class="out-z" :ref="'ref' + man.id">
            <!-- <Transition name="fade" mode="out-in"></Transition> -->
            <div class="blur-z" v-show="man.showblur"></div>
            <div class="ctn-z">
              <div 
                class="score-d"
                :style="{ backgroundColor: colorMap[man.mansType] }"
              >
                {{ man.score }}
              </div>
              <div :class="[man.mansType + '-manbox']"></div>
            </div>
          </div>
        </el-tooltip>
      </TransitionGroup>
    </div>
    <div class="param-z" v-show="showParams">
      <div class="param-d-left">
        <el-form label-width="100px" style="margin-top: 20px;">
          <el-form-item label="合作者数量" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="typeManNum.blue"></el-input-number>
          </el-form-item>
          <el-form-item label="背叛者数量" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="typeManNum.red"></el-input-number>
          </el-form-item>
          <el-form-item label="孤立者数量" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="typeManNum.black"></el-input-number>
          </el-form-item>
          <el-form-item label="模拟天数" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="simulationTime"></el-input-number>
          </el-form-item>
          <el-form-item label="淘汰间隔" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="checkStepDay"></el-input-number>
          </el-form-item>
          <el-form-item label="淘汰人数" style="margin-bottom: 0;">
            <el-checkbox :disabled="running" size="mini" v-model="ifDieOutHalf">淘汰一半</el-checkbox>
          </el-form-item>
          <el-form-item label="" style="margin-bottom: 0;">
            <el-input-number :disabled="ifDieOutHalf || running" size="mini" v-model="dieOutManNum"></el-input-number>
          </el-form-item>
          <el-form-item label="操作面板" style="margin-bottom: 0;">
            <el-button :disabled="running" type="primary" size="mini" @click="beginSimu()">开始模拟</el-button>
            <el-button type="primary" size="mini" @click="stopSimu()">重置模拟</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="param-d-right">
        <el-form label-width="100px" style="margin-top: 20px;">
          <el-form-item label="加分规则：" style="margin-bottom: 0;"></el-form-item>
          <el-form-item label="合作被合作" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="scoreMap.blue.blue"></el-input-number>
          </el-form-item>
          <el-form-item label="合作被背叛" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="scoreMap.blue.red"></el-input-number>
          </el-form-item>
          <el-form-item label="背叛被合作" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="scoreMap.red.blue"></el-input-number>
          </el-form-item>
          <el-form-item label="背叛被背叛" style="margin-bottom: 0;">
            <el-input-number :disabled="running" size="mini" v-model="scoreMap.red.red"></el-input-number>
          </el-form-item>
          <el-form-item label="开启动画" style="margin-bottom: 0;">
            <!-- <el-checkbox size="mini" v-model="ifAnimation">动画</el-checkbox> -->
            <el-switch :disabled="running" size="mini" v-model="ifAnimation"></el-switch>
          </el-form-item>
          <el-form-item label="交互间隔ms" style="margin-bottom: 0;">
            <el-input-number :disabled="!ifAnimation || running" size="mini" v-model="blurStepTime"></el-input-number>
          </el-form-item>
          <!-- <el-form-item label="重排间隔ms" style="margin-bottom: 0;">
            <el-input-number :disabled="!ifAnimation || running" size="mini" v-model="animateStep"></el-input-number>
          </el-form-item> -->
          <el-form-item label="移除间隔ms" style="margin-bottom: 0;">
            <el-input-number :disabled="!ifAnimation || running" size="mini" v-model="dieOuStep"></el-input-number>
          </el-form-item>
          <!-- <el-form-item label="" style="margin-bottom: 0;">
          </el-form-item> -->
        </el-form>
      </div>
      <div class="cancel-b" @click="closeParams()"></div>
    </div>
    <div class="chart-z" v-show="showChart">
      <div class="chart-d" id="chart-d"></div>
      <div class="cancel-b" @click="closeChart()"></div>
    </div>
    <div class="btn-zz">
      <el-row>
        <el-button type="primary" size="mini" @click="closeParams()">调节参数</el-button>
        <el-button style="margin-left: 20px;" type="primary" size="mini" @click="closeChart()">{{ showChart ? '关闭' : '显示' }}图表</el-button>
      </el-row>
    </div>
    <TlTiltLine v-show="showtiltline" :linesCoor="linesCoor"></TlTiltLine>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { utils } from '../../common/utils/utils'
import TlTiltLine from '../../components/TlTiltLine'

let theChart;

export default {
  name: 'Single',
  components: { TlTiltLine },
  data(){
    return {
      typeManNum: {
        blue: 30,
        red: 30,
        black: 30,
        white: 0
      },
      simulationTime: 50, // 模拟天数/天
      checkStepDay: 5, // 淘汰间隔/天
      dieOutManNum: 45, // 一次淘汰多少人
      ifDieOutHalf: true, // 一次淘汰一半
      ifAnimation: false, // 是否开启动画
      blurStepTime: 0, // 交互间隔/毫秒
      animateStep: 0, // 长动画间隔/毫秒
      dieOuStep: 0, // 长动画间隔/毫秒
      dayNow: 0, // 当前天数
      mansType: {
        blue: 'blue',
        red: 'red',
        black: 'black',
        white: 'white'
      },
      colorMap: {
        blue: '#4A96CF',
        red: '#c1380f',
        // red: '#FD8BA5',
        black: '#2c2c2c',
        white: '#f5f5f5'
      },
      scoreMap: {
        blue: {
          blue: 4,
          red: 0,
        },
        red: {
          blue: 8,
          red: 0,
        },
        black: 2
      },
      statesMap: {
        inting: '交互中...',
        dieing: '淘汰中...',
        copying: '复制中...',
      },
      nowState: 'inting',
      mans: [],
      windowData: {
        width: 1920,
        height: 1080,
        limit: 1080,
        center: [960, 540]
      },
      showtiltline: true,
      linesCoor: [],
      idstart: 0,
      showParams: true,
      showChart: false,
      totalScore: 0, // 集体总分
      totalScoreWithDayMark: [{
        dayNow: 0,
        value: [0, 0],
      }], // 作画数据
      running: false, // 是否正在模拟
    }
  },
  watch: {
    typeManNum: {
      handler(newval){
        if(newval.blue + newval.red + newval.black > 90){
          return;
        }
        if(this.ifDieOutHalf){
          this.dieOutManNum = Math.floor((newval.blue + newval.red + newval.black) / 2)
        }
        this.resetSimu();
      },
      deep: true,
      immediate: true
    },
    ifAnimation: {
      handler(newval){
        if(newval){
          this.blurStepTime = 50;
          this.animateStep = 500;
          this.dieOuStep = 100;
        } else {
          this.blurStepTime = 0;
          this.animateStep = 0;
          this.dieOuStep = 0;
        }
      },
      deep: true,
      immediate: true
    },
  },
  created(){
    this.refreshWindowData();
    this.resetSimu();
  },
  async mounted(){
    theChart = echarts.init(document.getElementById('chart-d'));
  },
  methods: {
    refreshWindowData(){
      this.windowData.width = window.innerWidth
      this.windowData.height = window.innerHeight
      this.windowData.limit = Math.min(window.innerWidth, window.innerHeight) * 0.5
      this.windowData.center = [window.innerWidth/2, window.innerHeight/2]
    },
    refreshMansArr(){
      this.mans = this.createMansArr(this.typeManNum)
    },
    createMansArr(typeManNum){
      let mans = [];
      for (let i = 0; i < typeManNum.blue; i++) {
        mans.push(this.createMan(this.getManUid(), true, this.mansType.blue, [this.limitRandom(this.windowData.limit), this.limitRandom(this.windowData.limit)]))
      }
      for (let i = 0; i < typeManNum.red; i++) {
        mans.push(this.createMan(this.getManUid(), true, this.mansType.red, [this.limitRandom(this.windowData.limit), this.limitRandom(this.windowData.limit)]))
      }
      for (let i = 0; i < typeManNum.black; i++) {
        mans.push(this.createMan(this.getManUid(), false, this.mansType.black, [this.limitRandom(this.windowData.limit), this.limitRandom(this.windowData.limit)]))
      }
      return mans;
    },
    createMan(id, interoperable, mansType, position, score){
      return {
        id: id,
        interoperable: interoperable,
        mansType: mansType,
        position: position || [0, 0],
        score: score || 0,
        showblur: false
      }
    },
    limitRandom(limit){
      return Math.floor(Math.random() * limit + 1)
    },
    async moveOneDay(){
      let blurStepTime = this.blurStepTime;
      let scoreMap = this.scoreMap;
      let mans = this.mans;
      for (let i = 0; i < mans.length; i++) {
        let man = mans[i];
        if(man.interoperable){
          let condi = true;
          while(condi){
            let other = mans[this.limitRandom(mans.length) - 1];
            if(other.interoperable){
              // console.log(this.$refs['ref' + man.id])
              let mandom = this.$refs['ref' + man.id][0].getBoundingClientRect()
              let otherdom = this.$refs['ref' + other.id][0].getBoundingClientRect()
              let coors = {
                start: {
                  x: mandom.left + mandom.width / 2, 
                  y: mandom.top + mandom.height / 2
                },
                end: {
                  x: otherdom.left + otherdom.width / 2, 
                  y: otherdom.top + otherdom.height / 2
                },
              }
              this.linesCoor = [coors];
              man.showblur = true;
              // other.showblur = true;
              man.score += scoreMap[man.mansType][other.mansType]
              other.score += scoreMap[other.mansType][man.mansType]

              this.totalScore += scoreMap[man.mansType][other.mansType]
              this.totalScore += scoreMap[other.mansType][man.mansType]
              await utils.sleep(blurStepTime);
              man.showblur = false;
              // other.showblur = false;
              this.linesCoor = [];
              break;
            }
          }
        } else {
          man.showblur = true;
          man.score += scoreMap[man.mansType]
          this.totalScore += scoreMap[man.mansType]
          await utils.sleep(blurStepTime);
          man.showblur = false;
        }
      }
      mans.sort((a, b) => {
        return b.score - a.score;
      })
      this.dayNow++;
      this.totalScoreWithDayMark.push({
        dayNow: this.dayNow,
        value: [this.dayNow, this.totalScore],
      });
      this.darwChart();
      await utils.sleep(this.animateStep);
      await this.checkDieOut();
    },
    async checkDieOut(){
      let isCheckpoint = this.dayNow % this.checkStepDay == 0;
      if(isCheckpoint){
        let mans = this.mans;
        let dieOutManNum = this.dieOutManNum;
        for (let i = 0; i < dieOutManNum; i++) {
          mans.pop();
          await utils.sleep(this.dieOuStep);
        }
        for (let i = 0; i < dieOutManNum; i++) {
          let man = mans[i]
          let childScore = Math.round(man.score / 2)
          man.score -= childScore
          let newman = this.createMan(this.getManUid(), man.interoperable, man.mansType, [this.limitRandom(this.windowData.limit), this.limitRandom(this.windowData.limit)], childScore);
          newman.showblur = true;
          mans.push(newman)
          await utils.sleep(this.dieOuStep);
          newman.showblur = false;
        }
        // for (let i = 0; i < dieOutManNum; i++) {
        //   let man = mans[2 * i]
        //   // let childScore = man.score
        //   let childScore = Math.round(man.score / 2)
        //   man.score -= childScore
        //   let newman = this.createMan(this.getManUid(), man.interoperable, man.mansType, [this.limitRandom(this.windowData.limit), this.limitRandom(this.windowData.limit)], childScore);
        //   newman.showblur = true;
        //   mans.splice(2 * i + 1, 0, newman)
        //   await utils.sleep(this.dieOuStep);
        //   newman.showblur = false;
        // }
      }
    },
    getManUid(){
      return 'man' + (this.idstart++);
    },
    closeParams(){
      this.showParams = !this.showParams;
    },
    closeChart(){
      this.showChart = !this.showChart;
      theChart && theChart.resize();
    },
    darwChart(){
      theChart && theChart.resize();
      theChart.setOption({
        title: {
          text: '团体总得分'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            // console.log(params);
            return `第${params.data.dayNow + 1}天总分: ${params.value[1]}分`;
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'value',
          minInterval: 1,
          axisLabel: {
            fontSize: 18,
            formatter: function (value, index) {
              // console.log(value);
              return `第${value + 1}天`;
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 18
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '总分曲线',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: this.totalScoreWithDayMark
          }
        ]
      });
    },
    stopSimu(){
      this.running = false;
      this.resetSimu();
    },
    resetSimu(){
      this.dayNow = 0;
      this.linesCoor = [];
      this.idstart = 0;
      this.totalScore = 0;
      this.totalScoreWithDayMark = [{
        dayNow: 0,
        value: [0, 0],
      }];
      // theChart && theChart.dispose();
      this.mans = [];
      this.refreshMansArr();
    },
    async beginSimu(){
      this.running = true;
      for (let i = 0; i < this.simulationTime; i++) {
        if(!this.running) {
          this.resetSimu();
          break;
        };
        await this.moveOneDay();
      }
    },
  }
}
</script>

<style lang="less" scoped>
@toRoot: "../..";
@import "@{toRoot}/common/less/common.less";

.ctn{
  position: relative;
  .wh;
  color: #4A96CF;
  .day-z{
    @h: 60px;
    .absolute(40px, 0, '', 0);
    width: 200px;
    height: @h;
    line-height: @h;
    text-align: center;
    // background-color: whitesmoke;
    font-size: 40px;
    color: whitesmoke;
  }
  .mans-zone{
    .absolute(0, 0, 0, 0);
  }
}

.container{
  .wh;
}

@manboxsize: 40px;
@manbox-scoresize: @manboxsize / 2;
@bot-border: 0 0 8px 8px;
.out-z{
  position: relative;
  float: left;
  margin: @manboxsize / 4;
  // margin-top: @manboxsize / 2;
  width: @manboxsize;
  height: @manboxsize + @manboxsize / 2;
  // border-radius: 0 0 10px 10px;
  // border: 1px solid black;
  // background-color: rgb(241, 241, 241);
  cursor: pointer;
}

.blur-z{
  position: absolute;
  left: 0;
  top: 0;
  .wh;
  border-radius: @bot-border;
  box-shadow: 0 0 30px 5px white;
}

.ctn-z{
  position: absolute;
  left: 0;
  top: 0;
  .wh;
  // border-radius: @bot-border;
  // box-shadow: 0 0 8px whitesmoke;
}

.score-d{
  @h: @manbox-scoresize;
  position: relative;
  // top: -@h;
  width: @manboxsize;
  height: @h;
  background-color: #4A96CF;
  border-radius: 4px 4px 0 0;
  text-align: center;
  line-height: @h;
  color: whitesmoke;
  box-sizing: border-box;
  border: 1px solid whitesmoke;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}

.the-manbox{
  position: relative;
  float: left;
  // margin: @manboxsize / 4;
  // margin-top: @manboxsize / 2;
  width: @manboxsize;
  height: @manboxsize;
  border-radius: @bot-border;
  // border: 1px solid black;
  border-top: 0;
  background-color: rgb(241, 241, 241);
  cursor: pointer;
  box-sizing: border-box;
}

.blue-manbox{
  background: url('./imgs/blueman.png') no-repeat center center;
  background-size: @manboxsize - 10px;
  .the-manbox;
}

.red-manbox{
  background: url('./imgs/redman.png') no-repeat center center;
  background-size: @manboxsize - 10px;
  .the-manbox;
}

.white-manbox{
  background: url('./imgs/whiteman.png') no-repeat center center;
  background-size: @manboxsize - 10px;
  .the-manbox;
}

.black-manbox{
  background: url('./imgs/blackman.png') no-repeat center center;
  background-size: @manboxsize - 10px;
  .the-manbox;
}

.chart-z{
  .absolute(80px, '', '', 20px);
  width: 600px;  
  height: 400px;
  // background: url('./imgs/paper.jpeg') no-repeat center center;
  background-color: rgb(230, 230, 230);
  border: 2px solid black;
  border-radius: 4px;
  // box-shadow: 0px 0px 10px 0px white;
  z-index: 999;
}

.chart-d{
  .absolute(0, 0, 0, 0);
}

.cancel-b{
  .absolute(0, 0, '', '');
  width: 26px;
  height: 26px;
  background: url('../../assets/COMMON/img/cancel.png') no-repeat center center;
  background-size: cover;
  cursor: pointer;
}

.btn-zz{
  .absolute(20px, '', '', 20px);
  width: 200px;
  height: 40px;
  // background-color: rgb(230, 230, 230);
}

.param-z{
  .absolute(80px, '', '', 20px);
  width: 600px;  
  height: 400px;
  background-color: rgb(230, 230, 230);
  border: 2px solid black;
  border-radius: 4px;
  // box-shadow: 0px 0px 10px 0px white;
  z-index: 999;
}

.param-d-left{
  .absolute(0, 50%, 0, 20px);
}

.param-d-right{
  .absolute(0, 20px, 0, 50%);
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(800px, 70000px);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>

