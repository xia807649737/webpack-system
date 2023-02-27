//CommonJS规范 在浏览器中不支持
// let a = require('./a.js');

//es6导入规范
import a from './a.js';
console.log(a);
// console.log('今天晚上早点睡觉啦');
// console.log('测试一下会不会显示main.js的内容');
// console.log('测试一下watch');
// console.log('昨天真的早睡觉去了，可以');
console.log('今天也一样的早点睡觉就行了!!');

// 引入css样式文件
import './css/index.css';
import './css/b.css';

// 引入less样式文件
import './less/index.less';

// 引入scss样式文件
import './scss/index.scss';

window.onload = function () {
    document.querySelector('ul').style.listStyle = 'none';
    document.querySelector('li').style.backgroundColor = 'yellow';
    document.querySelector('li').style.color = '#ff0000';
}