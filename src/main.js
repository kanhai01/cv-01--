let html = document.querySelector("#html"); //通过css选择器找到‘demo’
let style = document.querySelector("#style");

let string = `/*你好，我是看海
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先 把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5); 
    border: none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(54,54,54,1) 50%, rgba(0,0,0,1) 50%);
}
/*加两个神秘的小球
*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(54,54,54,1) 15%, rgba(0,0,0,1) 15%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 15%);
`;

let string2 = "";
// string = string.replace(/\n/g, "<br>"); //正则表达式，把所有的回车都变成<br>
let n = -1;

let step = () => {
  setTimeout(() => {
    n = n + 1;
    if (string[n] === "\n") {
      string2 += "<br>"; //如果是回车，就不照搬
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n]; //如果不是回车，就照搬
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //js滚动条
    html.scrollTo(0, 99999); //js滚动条
    if (n < string.length - 1) {
      step();
    }
  }, 50);
};

step(); //1=>2
