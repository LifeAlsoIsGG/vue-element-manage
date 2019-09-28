//生成guid
export function guid() {
  let S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

/**
 * 滚动,先慢后快，缓动的效果比easeIn动画明显
 * @param {HTMLDOM} element  要滚动的元素
 * @param {Number} target    目标位置
 * @param {Number} duration  滚动所用的总时间
 * @param {Function} callback  滚动完成之后的回调
 */
export function scroll(element, target, duration = 500, callback = () => { }) {
  const startTime = Date.now();
  const move = () => {
    const passTime = Date.now() - startTime;
    const currentPosition = element.scrollTop;
    const residueDistance = target - currentPosition;
    const step = residueDistance / 10;
    element.scrollTop = currentPosition + step;
    if (passTime < duration) {
      window.requestAnimationFrame(move);
    } else {
      element.scrollTop = target;
      callback();
    }
  }
  move();
}


/**
 * 动画，可改变多个属性
 * @param {HTMLDOM} element  要发生动画的元素
 * @param {Object} properties    要改变的元素属性
 * @param {Number} interval  每次运动的时间间隔
 * @param {Function} callback  动画完成之后的回调
 */
export function animate(element, properties, interval = 20, callback = () => { }) {
  clearInterval(element.timer);
  element.timer = setInterval(() => {
    let flag = true;
    for (const property in properties) {
      const current = parseInt(window.getComputedStyle(element)[property]);
      const target = properties[property];
      let step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      element.style[property] = current + step + "px";
      if (current != target) {
        flag = false;
      }
    };
    if (flag) {
      clearInterval(element.timer);
      callback();
    }
  }, interval);
};


/**
 * 获取url中的查询字符串参数
 * @param {String} url  url字符串
 */
export function getURLParams(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"'
    + decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
    + '"}'
  )
}

// 深克隆
export function deepClone(source) {
  if (typeof source != 'object') {
    return source;
  }
  const target = Array.isArray(source) ? [] : {};
  for (const [key, value] of Object.entries(source)) {
    target[key] = deepClone(value);
  }
  return target;
}


// 计算模糊时间
// type默认为pass表示计算经过了多少时间
export function getSimpleTime(date, type = 'pass', simple = '') {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;
  const now = new Date();
  const target = new Date(date);
  let interval = 0;
  let simpleTime = '';
  if (type === 'pass') {
    interval = now - target;
  } else {
    interval = target - now;
  }
  if (interval < 0) {
    if (type === 'pass') {
      simpleTime = simple || '未开始';
    } else {
      simpleTime = simple || '已结束';
    }
  } else if (0 < interval && interval <= minute) {
    simpleTime = Math.floor(interval / second) + '秒';
  } else if (minute < interval && interval <= hour) {
    simpleTime = Math.floor(interval / minute) + '分钟';
  } else if (hour < interval && interval <= day) {
    simpleTime = Math.floor(interval / hour) + '小时';
  } else if (day < interval && interval <= month) {
    simpleTime = Math.floor(interval / day) + '天';
  } else if (month < interval && interval <= year) {
    simpleTime = Math.floor(interval / month) + '月';
  } else if (year < interval) {
    simpleTime = Math.floor(interval / year) + '年';
  } else {
    simpleTime = `${target.getFullYear()}-${target.getMonth()}-${target.getDate()}`;
  }
  if (interval > 0 && type === 'pass') {
    simpleTime = simpleTime + '前';
  }
  return simpleTime;
}

// 将数值使用逗号隔开，一般用于金额的输入
export function getCommaNumber(value) {
  const list = value.toString().split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}
