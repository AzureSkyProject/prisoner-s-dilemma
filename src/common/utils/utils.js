export const utils = {
  // 根据页数，单页数获取序号
  getIndexByPage(pageNum, pageSize) {
    return [(pageNum - 1) * pageSize + 1, pageNum * pageSize];
  },
  //格式化一个日期
  formatDate: function (mydate) {
    let yearNow = mydate.getFullYear();
    let monthNow = addLeadingZero(mydate.getMonth() + 1);
    let dayNow = addLeadingZero(mydate.getDate());
    let hoursNow = addLeadingZero(mydate.getHours());
    let minutesNow = addLeadingZero(mydate.getMinutes());
    let secondsNow = addLeadingZero(mydate.getSeconds());
    return yearNow + '-' + monthNow + '-' + dayNow + ' ' + hoursNow + ':' + minutesNow + ':' + secondsNow;

    function addLeadingZero(num) {
      //为一个小于10的数字添加前导零
      return num < 10 ? '0' + num : num;
    }
  },
  //获取几天前的时间点
  dateSomeDaysAgo: function (day, ms) {
    return new Date(new Date(new Date().toDateString()).getTime() - day * 1440 * 60 * 1000 - ms);
  },
  //获取某个dom元素的实际尺寸
  getDOMTrueSize: function (element, property) {
    let proValue = null;
    if (!document.defaultView) {
      proValue = element.currentStyle[property];
    } else {
      proValue = document.defaultView.getComputedStyle(element)[property];
    }
    return parseInt(proValue);
  },
  // 简单的深度拷贝
  simpleDeepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
  },
  // 等待数秒
  sleep(waitTime) {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(true)
      }, waitTime)
    })
  },
  // 同步的nextTick
  asyncNextTick(that){
    return new Promise((resolve) => {
      that.$nextTick(() => {
        resolve(true);
      })
    })
  },
};