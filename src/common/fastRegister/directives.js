import { utils } from '../utils/utils';

// vue自定义指令集
export default (Vue) => {
  // 元素居中指令
  Vue.directive("centered",{
    inserted (el) {
      let winh = window.innerHeight
      let winw = window.innerWidth
      let elh = utils.getDOMTrueSize(el, 'height')
      let elw = utils.getDOMTrueSize(el, 'width')
      el.style.top = (winh - elh) / 2 + 'px'
      el.style.left = (winw - elw) / 2 + 'px'
    }
  });
  // 元素的父元素可拖动指令
  Vue.directive("drag",{
    inserted (el) {
      el.style.cursor = 'move';
      el.onmousedown = e => {
        let father = el.parentElement;
        let melX = e.clientX - father.offsetLeft;
        let melY = e.clientY - father.offsetTop;
        document.onmousemove = e => {
          let left = e.clientX - melX;
          let top = e.clientY - melY;
          father.style.left = left + "px";
          father.style.top = top + "px";
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    }
  });
  // 图片自适应指令
  Vue.directive("imgload",{
    inserted (el) {
      el.onload = e => {
        let parent = e.target.parentElement;
        let img = e.target;
        // parent.style.display = 'block';
        img.style.display = 'block';
        let parentW = $(parent).width();
        let parentH = $(parent).height();
        let imgW = $(img).width();
        let imgH = $(img).height();
        if (imgW / imgH > parentW / parentH) {
          img.style.width = '100%';
          img.style.height = 'auto';
          img.style.marginTop = (parentH - $(img).height()) / 2 + 'px';
        } else {
          img.style.width = 'auto';
          img.style.height = '100%';
          img.style.marginTop = 0;
          img.style.margin = '0 auto';
        }
      }
    }
  });
}