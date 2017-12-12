import {Tapul} from "./TapEvents.js";

export function my_scroll() {
  // 目标元素
  var ul = document.querySelector(".left_menu");

  // 手指按下的y坐标
  var startY;

  // 已经移动了的距离
  var preDistance = 0;
  // 弹簧
  var springs = 50;
  console.log(123);
   console.log(ul.offsetHeight);
  // 往上拖动最大的距离 (没有包括弹簧) 往上滑动的距离是负数
  var maxUp = -(ul.offsetHeight - ul.parentNode.offsetHeight);
  // console.log(maxUp);
  ul.addEventListener("touchstart", function (e) {
    // 判断手指的个数
    if (e.targetTouches.length > 1) {
      return;
    }
    // 记录坐标
    startY = e.targetTouches[0].clientY;

    // 清除过渡
    ul.style.transition = "none";

  });

  // 手指移动事件
  ul.addEventListener("touchmove", function (e) {
    // 判断手指的个数
    if (e.targetTouches.length > 1) {
      return;
    }

    // 记录坐标
    var moveY = e.targetTouches[0].clientY;

    // console.log(moveY,e.changedTouches[0].clientY);

    // 移动的距离 加上之前已经移动了的距离
    var distance = moveY - startY + preDistance;

    // 判断下拉的最大距离
    if (distance > springs) {
      distance = springs;
    } else if (distance < maxUp - springs) {
      // 谁的值越小 谁就越在上面 
      distance = maxUp - springs;
    }
    // 设置位移
    ul.style.transform = "translateY(" + distance + "px)";
  });

  // 手指松开
  ul.addEventListener("touchend", function (e) {
    // 判断手指的个数
    if (e.changedTouches.length > 1) {
      return;
    }

    // 记录手指松开的坐标
    var endY = e.changedTouches[0].clientY;

    // 记录这一次移动了的距离 需要加上之前已经移动了的距离 所以是+=
    preDistance += endY - startY;
    // console.log(preDistance);
    // 判断下拉是否超出界限
    if (preDistance > 0) {
      preDistance = 0;
      // 设置ul的位移- 添加过渡
      ul.style.transition = "transform .5s";
      ul.style.transform = "translateY(" + preDistance + "px)";
    } else if (preDistance < maxUp) {
      preDistance = maxUp;
      ul.style.transition = "transform .5s";
      ul.style.transform = "translateY(" + preDistance + "px)";
    }
  });

  // ul绑定tap点击事件
  Tapul(ul).tap(function (e) {
    // console.log(e); a or li
    var targetLi = e.target;
    if (targetLi.nodeName == "A") {
      targetLi = targetLi.parentNode;
    }
    // li标签的索引
    var index = -1;
    var lis = document.querySelectorAll(".left_menu>li");
    for (var i = 0; i < lis.length; i++) {
      var element = lis[i];
      element.classList.remove("cur");
      if (element === targetLi) {
        index = i;
        element.classList.add("cur");
      }
    }

    // 获取要往上移动的总距离
    var totalUp = -(index * targetLi.offsetHeight);

    //  添加上滚动的限制 maxup
    if(totalUp<maxUp){
      totalUp=maxUp;
    }
    // 为了点击置顶之后  再手动拖动  
    preDistance=totalUp;
    // 设置ul的位移 要添加过渡
    ul.style.transition = "transform .5s";
    ul.style.transform = "translateY(" + totalUp + "px)";
  });
}