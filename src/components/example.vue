<template>
  <div class="hello">
   <div style="width: 100%;height: 5.6rem;  background-color: #ffffff;
  box-shadow: 0px 2px 0 0 rgba(0, 0, 0, 0.3);">
    <ul>
      <li class="businessLogo"><img src="../assets/haokuLogo.png" class="businessLogo"></li>
      <li v-for="(menu,index) in NavMenu" class="menuItem" @click="navMenu(index)" v-bind:class="{active: activeName1 == index}" >{{menu.title}}</li>
      <li class="qqLogo2"><img src="../assets/qq.png" class="qqLogo"></li>
    </ul>
   </div>
    <div class="Joinbanner">
       <div class="MethodsBanner"><img src="../assets/examplee.png" class="MethodsPic">
       <!-- <img src="../assets/exampleWord.png" class="exampleWordPic"> -->
       </div>
       <div style="width: 100%;height: 50px;position: relative;margin-top:34px ">
          <h4 class="titleC">最新案例</h4>
          <p class="titleEnglish">New Cases</p>
          <div class="blueLine"></div>
          <div class="greyLine"></div>
      </div>
      <div class="product">
          <div class="example1">
              <div class="exampleTop">
               <img src="../assets/x.jpg" class="example1Pic">
               <div class="example1Word"><h4 @click="showmodal(true)"><a href="#example">吉林省游戏游艺设备认证系统</a></h4><p>面积1700平方，辐射周边人口20万人。主要问题：新开业，希望快速发展用户。客户对接好酷酷宝系统后，首先发挥开业期间都是爆满的。总结：酷酷宝的自bb ...</p><span>2016-11-17</span></div>
              </div>
              <div class="exampleBottom">
                <ul>
                    <li><a href="#example">吉林省游戏游艺设备认证系统解决方案啦啦...</a><span class="date">2016-11-17</span></li>
                    <li><a href="#example">吉林省游戏游艺设备认证系统解决方案啦啦...</a><span class="date">2016-11-17</span></li>
                </ul>
              </div>
          </div>
          <div class="example2">
              <div class="exampleTop">
               <img src="../assets/x.jpg" class="example1Pic">
               <div class="example1Word"><h4><a href="#example">吉林省游戏游艺设备认证系统</a></h4><p>面积1700平方，辐射周边人口20万人。主要问题：新开业，希望快速发展用户。客户对接好酷酷宝系统后，首先发挥开业期间都是爆满的。总结：酷酷宝的自bb ...</p><span>2016-11-17</span></div>
              </div>
              <div class="exampleBottom">
                <ul>
                    <li><a href="#example">吉林省游戏游艺设备认证系统解决方案啦啦..</a><span class="date">2016-11-17</span></li>
                    <li><a href="#example">吉林省游戏游艺设备认证系统解决方案啦啦...</a><span class="date">2016-11-17</span></li>
                </ul>
              </div>
          </div>
      </div>
    </div>
<div data-v-bbbaf6fe="" class="el-dialog__wrapper" style="z-index: 2013;" v-show="this.showModals">
  <div class="el-dialog el-dialog--tiny" style="top: 15%;">
    <div class="el-dialog__header">
      <span class="el-dialog__title"></span>
       <button type="button" aria-label="Close" class="el-dialog__headerbtn">
         <i class="el-dialog__close el-icon el-icon-close" @click="showmodal(false)"></i>
       </button>
    </div>
    <div class="el-dialog__body">
      <img src="../assets/x.jpg" class="modalPic">
      <div class="ModallTiTle">
        <p class="modalTitle">吉林省游戏游艺设备认证系统解决方案啦啦啦啦啦</p>
        <img src="../assets/button3.png">
      </div>
      <div class="ModalDate">
        <p>2016-11-17</p>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet dolor lectus eu libero. Vestibulum venenatis eget turpis sed faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean tristique nisl tellus, sit amet fringilla nisl volutpat cursus. Quisque dignissim lectus ac nunc consectetur mattis. Proin vel hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et tincidunt tristique, nisl risus facilisis lectus, ut interdum orci nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit sodales posuere eget non est. Fusce convallis vestibulum dolor non volutpat. Vivamus vestibulum quam ut ultricies pretium.</p>
                <p>Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.</p>
                <p>Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit. Integer tincidunt finibus metus vel porta. Mauris sed mauris congue, pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.</p>
                <p>Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi id tempor vulputate, nisi justo cursus justo, pellentesque condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In placerat tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet pellentesque orci aliquam. Vestibulum elementum posuere vehicula.</p>
                <p>Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum id arcu nec fringilla. Maecenas faucibus, ante et venenatis interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare libero. Aliquam auctor erat enim, a semper risus semper at. In ut dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna, sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh in massa pretium scelerisque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet dolor lectus eu libero. Vestibulum venenatis eget turpis sed faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean tristique nisl tellus, sit amet fringilla nisl volutpat cursus. Quisque dignissim lectus ac nunc consectetur mattis. Proin vel hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et tincidunt tristique, nisl risus facilisis lectus, ut interdum orci nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit sodales posuere eget non est. Fusce convallis vestibulum dolor non volutpat. Vivamus vestibulum quam ut ultricies pretium.</p>
                <p>Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.</p>
                <p>Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit. Integer tincidunt finibus metus vel porta. Mauris sed mauris congue, pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.</p>
                <p>Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi id tempor vulputate, nisi justo cursus justo, pellentesque condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In placerat tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet pellentesque orci aliquam. Vestibulum elementum posuere vehicula.</p>
                <p>Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum id arcu nec fringilla. Maecenas faucibus, ante et venenatis interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare libero. Aliquam auctor erat enim, a semper risus semper at. In ut dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna, sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh in massa pretium scelerisque.</p>
            </div>
        </div>
        <!-- Add Scroll Bar -->
      </div>
    </div>
  </div>
</div>
    <div class="pagebottom">
      <div style="width:832px;height:auto;margin:0 auto;position:relative;">
       <img src="../assets/m.png" class="bussinessLogo" style="width: 10rem;height: auto;float: left;">
       <div style="width: 520px;height: auto;float: left;position: absolute;left:196px;margin-top: 36px">
       <div style="width: 325px;height: 13px ;font-family: FZLTXHK-GBK1-0;font-size: 12px;line-height: 1.5;letter-spacing: 0.3px;text-align: left;color: #ffffff">首页&nbsp&nbsp|&nbsp&nbsp产品&nbsp&nbsp|&nbsp&nbsp案例&nbsp&nbsp|&nbsp&nbsp商务方式&nbsp&nbsp|&nbsp&nbsp关于我们&nbsp&nbsp|&nbsp&nbsp加入我们</div>
       <p style="width: 514px;height: 49px;  width: 514px;height: 49px;font-family: FZLTXHK-GBK1-0;font-size: 12px;line-height: 1.5;letter-spacing: 0.3px;text-align: left;color: #ababab;margin-top: 10px">广州好酷科技有限公司&nbsp&nbsp联系电话：020-39106900&nbsp&nbsp联系地址：广州番禺区番禺大道北555号番禺节能科技园创新大厦618&nbsp&nbsp展厅地址：广州番禺迎新东路星力动漫游戏产业园J128&nbsp&nbsp版权所有：Copyright@好酷科技&nbsp&nbsp粤ICP备16091001号-1
       </p>
       </div>
       <div style="width:82px;height: 101px;float: left;position: absolute;left:760px;margin-top: 26px">
       <img src="../assets/n.png" class="Code" style="width: 7rem;height:auto;float: right;">
       <div style="width:82px;height: 11px;font-family: FZLTXHK-GBK1-0;font-size: 12px;line-height: 1.5;letter-spacing: 0.3px;text-align:center;color: #ffffff;position: relative;top: 8px;">微信公众号</div>
       </div>
       </div>
    </div>
    <div class="v-modal" style="z-index: 2012;"  v-show="this.showModals"></div>
  </div>
</template>

<script>
import Swiper from '../js/swiper.min.js';
import pic1 from "../assets/a1.png"
import pic2 from "../assets/a2.png"
import pic3 from "../assets/a3.png"
import pic4 from "../assets/a4.png"
import pic5 from "../assets/a5.png"
import pic6 from "../assets/a6.png"
import button1 from "../assets/back.png"
import button2 from "../assets/backmouse.png"
import button3 from "../assets/backclick.png"
import button4 from "../assets/handle.png"
import button5 from "../assets/handlemouse.png"
import button6 from "../assets/handleclick.png"

  export default {
    name: 'hello',
    data() {
      return {
        dialogVisible: false,
        button1:button1,
        Buttonn:button4,
        activeName1:'',
        showModals:false,
        NavMenu: [{
            id: 0,
            title: '首页'
          },
          {
            id: 1,
            title: '产品'
          },
          {
            id: 2,
            title: '案例'
          },
          {
            id: 3,
            title: '商务方式'
          },
          {
            id: 4,
            title: '关于我们'
          },
          {
            id: 5,
            title: '加入我们'
          },
        ],
      }
    },
    mounted () {  
    this.huadong()  
    }, 
    methods: {
     navMenu(index){
      this.activeName1=index;
     },
     mouseOn(){
       this.button1 = button2;
     },
      mouseOut(){
       this.button1 = button1;
     },
     onclick(){
       this.button1 = button3;
     },
     mouseOnn(){
       this.Buttonn = button5;
     },
      mouseOutt(){
       this.Buttonn = button4;
     },
     onclickk(){
       this.Buttonn = button6;
     },
     showmodal(a){
      console.log("aaaa");
      this.showModals=a;
     },
     huadong(){
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            onScroll: function(swiper){
                console.log(swiper.translate);
                console.log(document.querySelector(".swiper-slide").offsetHeight-300);
                if(swiper.translate<-document.querySelector(".swiper-slide").offsetHeight+300){
                  swiper.setWrapperTranslate(-document.querySelector(".swiper-slide").offsetHeight+300);
                }if(swiper.translate>0){
                  swiper.setWrapperTranslate(0);
                }
            }
        });
     }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped media="all" type="text/css">
@import url("../css/swiper.min.css");
@import url("../css/index.css") screen;
@import url("../css/Job.css") screen;
.MethodsBanner{
  width: 100%;
  position: relative;
}
.MethodsPic{
  width: 100%;
  height: auto;
}
.product{
  width:735px;
  position: relative;
    margin: 43px auto 0;
    height: 210px;
    padding-bottom: 66px;
}
.example1{
  width: 345px;
  height: 210px;
  position: absolute;
  left: 0;
  display: inline;
}
.example2{
  width: 345px;
  height: 210px;
  position: absolute;
  right: 0;
  display: inline;  
}
.exampleTop{
  border-bottom: 1px solid #cccccc; 
  height: 156px;
}
.exampleTop img{
  width: 140px;
  height: 140px;
  display: inline;
  position: absolute;
  left: 0;
}
.example1Word{
  width:186px;
  height: 140px;
  position: absolute;
  right:0;
  display: inline;
}
.exampleWordPic{
  position: absolute;
  width: 465px;
  height: auto;
  margin: 96px auto 68px;
}
.example1Word h4{
  width: 190px;
  height: 14px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.4px;
  text-align: left;
  color: #333333;
  overflow: hidden;
}
.example1Word p{
  width: 190px;
  height: 77px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.6px;
  text-align: justify;
  color: #999999;
  margin-top: 19px;
  margin-bottom: 18px;
  overflow: hidden;
}
.example1Word span{
  width: 73px;
  height: 11px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.33;
  text-align:left;
  color: #999999;
  position: absolute;
  left: 0
}
.exampleBottom{
  height: 51px;

}
.exampleBottom ul{
  height: 37px;
  margin-top:14px;
  list-style-type:disc;
position: absolute;
    left: 15px;
    width: 344px;
}
.exampleBottom ul li{
  height: 13px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 12px;
  line-height:13px;
  letter-spacing: 0.3px;
  text-align: left;
  color: #333333;
  margin-bottom: 11px; 
}
.date{
    width: 70px;
    height: 9px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 10px;
    line-height: px;
    text-align: right;
    color: #999999;
    position: absolute;
    /* margin-left: 15px; */
    right: 15px;
}
.exampleBottom ul li a{
    width: 246px;
    overflow: hidden;
    display: inline-block;
    height: 13px;
}
a:link{
text-decoration:none;
color: #333333;
overflow: hidden;
}
a:visited{
text-decoration:none;
color: #333333;
}
a:hover{
text-decoration:none;
color:  #00aeef;
}
a:active{
text-decoration:none;
color: #333333;
}
.el-dialog__headerbtn {
    float: right;
    background: 0 0;
    border: none;
    outline: 0;
    padding: 0;
    cursor: pointer;
    /* right: 0; */
    position: relative;
    left: 0;
    width: 80px;
}
.el-dialog__header{
  width: auto;
  height: auto;
}
.el-dialog--tiny{
  width: 948px;
}
.modalPic{
  width: 833px;
  height: auto;
}
.el-dialog__headerbtn .el-dialog__close {
    color: #000000;
    width: 20px;
    height: 50px;
    font-size: 20px;
}
.el-dialog__headerbtn[data-v-bbbaf6fe] {
    float: right;
    background: 0 0;
    border: none;
    outline: 0;
    padding: 0;
    cursor: pointer;
    /* right: 0; */
    position: relative;
    left: 0;
    width: 15px;
    height: 40px;
    line-height: 40px;
}
.ModallTiTle{
  width: 833px;
  position: relative;height: 32px;
  top: 25px;
  margin: 0 auto
}
.ModallTiTle p{
  width: 590px;
  height: 32px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 26px;
  line-height:32px;
  letter-spacing: 0.7px;
  text-align: left;
  color: #333333;
  display: inline-block;
    position: absolute;
    left: 0;
}
.ModallTiTle img{
  width: 144px;
  height: 32px;
  position: absolute;
  display: inline-block;
  right:0
}
.ModalDate{
  width: 833px;
  height: 12px;
  position: relative;
  margin: 0 auto;
  top: 46px;
}
.ModalDate p{
  width: 88px;
  height: 12px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 14px;
  line-height:12px;
  letter-spacing: 0.4px;
  text-align: left;
  color: #666666;
 display: inline-block;
    position: absolute;
    left: 0;
}
.el-dialog__body {
    padding: 30px 20px;
    color: #48576a;
    font-size: 14px;
    height: 1300px;
}

.swiper-container {
  width: 834px;
  height:300px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.4px;
  text-align:left;
  color: #333333;
  position:relative;
  top: 78px;
  margin: 0 auto
}
.swiper-slide p{
  font-family: FZLTXHK-GBK1-0;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.4px;
  text-align:left;
  color: #333333;
}
.swiper-slide {
        font-size: 18px;
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-right:15px; 
}
</style>
