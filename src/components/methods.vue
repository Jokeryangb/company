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
       <div class="MethodsBanner"><img src="../assets/MethodsBanner.png" class="MethodsPic"></div>
       <div style="width: 100%;height: 50px;position: relative;margin-top:34px ">
          <h4 class="titleC">行业痛点</h4>
          <p class="titleEnglish">Bottleneck Of The Industry</p>
          <div class="blueLine"></div>
          <div class="greyLine"></div>
      </div>
      <div class="product">
          <div class="coffee"><img src="../assets/coffee.png" class="coffeePic"><div class="word coffeeWord"></div><p class="words">玛氏多功能咖啡机</p></div>
          <div class="chair"><img src="../assets/chair.png" class="chairPic"><div class="word chairWord"></div><p class="words">九点商用按摩椅</p></div>
<div class="machine"><img src="../assets/machine.png" class="machinePic"><div class="word machineWord"></div><p class="words">抢红包礼品机</p></div>
<div class="movie"><img src="../assets/movie.png" class="moviePic"><div class="word movieWord"></div><p class="words">录音棚</p></div>
      </div>
      <div class="equip">
          <div class="equipment"><p class="titlen">设备合作，免押金，入驻分成</p></div>
          <div class="equipmentPic">
               <div class="data"><img src="../assets/data.png"><p class="wordd dataWord">场地方递交资料</p></div>  
               <img src="../assets/goleft.png" class="goleftPic">
               <div class="examine"><img src="../assets/examine.png"><p class="wordd examineWord">公司审核</p></div>  
               <img src="../assets/goleft.png" class="goleftPic2">
               <div class="equipp"><img src="../assets/equipp.png"><p class="wordd equippWord">发放设备</p></div>  
               <img src="../assets/goleft.png" class="goleftPic3">
               <div class="install"><img src="../assets/install.png"><p class="wordd installWord">安装和售后服务</p></div>  
               <img src="../assets/goleft.png" class="goleftPic4">
               <div class="divided"><img src="../assets/divided.png"><p class="wordd dividedWord">月结分成</p></div>  
          </div>
          <img src="../assets/button3.png" class="cooperationButton">
      </div>
      <div>
        
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
  </div>
</template>

<script>
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
        button1:button1,
        Buttonn:button4,
        activeName1:'',
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
     }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped media="all" type="text/css">
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
  width:832px;
  position: relative;
  margin: 24px auto;
  height: 371px;
}
.equipmentPic{
  width: 831px;
  height: 151px;
  position: relative;
  margin:0 auto; 
}
.data{
  width: 110px;
  height: 141px;
  display: inline;
  position: absolute;
  left: 0
}
.data img{
  width: 110px;
  height: 110px;
}
.examine{
  width: 110px;
  height: 141px;
  display: inline;
  position: absolute;
  left: 182px;
}
.examine img{
  width: 110px;
  height: 110px;
}
.equipp{
  width: 110px;
  height: 141px;
  display: inline;
  position: absolute;
  left: 362px;
}
.equipp img{
  width: 110px;
  height: 110px;
}
.install{
  width: 110px;
  height: 141px;
  display: inline;
  position: absolute;
  left: 541px;
}
.install img{
  width: 110px;
  height: 110px;
}
.divided{
  width: 110px;
  height: 141px;
  display: inline;
  position: absolute;
  left: 721px;
}
.divided img{
  width: 110px;
  height: 110px;
}
.wordd{
  width: 110px;
  height: 14px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 14px;
  line-height:14px;
  letter-spacing: 0.4px;
  text-align: left;
  color: #333333;
  position: relative;
  display: inline;
  top: 16px;
}
.coffee{
  width: 346px;
  height: 372px;
  display: inline;
  position: absolute;
  left:0;
}
.chair{
  width: 305px;
  height: 372px;
  display: inline-block;
  position: absolute;
  left:350px;
}
.machine{
  width: 172px;
  height: 203px;
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0
}
.movie{
  width: 172px;
  height: 163px;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0 
}
.coffee img{
  width: 346px;
  height: 372px;
}
.chair img{
  width: 305px;
  height: 372px;
}
.machine img{
  width: 172px;
  height: 203px;
}
.word{
  width: 346px;
  display: inline-block;
  height: 40px;
  opacity: 0.8;
  background-color: #000000;
  position: relative;
  top: -41px;
}
.words{
  display: inline-block;
  left: 21px;
  height:40px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 14px;
  line-height:40px;
  letter-spacing: 0.7px;
  text-align: left;
  color: #ffffff;
  position: relative;
  top: -84px;
}
.coffeeWord{
  width: 346px;
}
.chairWord{
  width: 305px;
}
.machineWord{
  width: 172px;
}
.movieWord{
  width: 172px;
}
.titlen{
  width: 350px;
  height: 26px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 26px;
  line-height:26px;
  letter-spacing: 0.7px;
  text-align: left;
  color: #666666;
  margin:41px auto 50px;
}
.equipment{
  width: 100%;
  position: relative;
}
.equip{
  width: 100%;
  height: auto;
  position: relative;
}
.goleftPic{
  width:20px;
  height: 22px;
  display: inline;
    position: absolute;
    left: 137px;
    top: 45px;
}
.goleftPic2{
  width:20px;
  height: 22px;
  display: inline;
    position: absolute;
    left:317px;
    top: 45px;
}
.goleftPic3{
  width:20px;
  height: 22px;
  display: inline;
    position: absolute;
    left:494px;
    top: 45px;
}
.goleftPic4{
  width:20px;
  height: 22px;
  display: inline;
    position: absolute;
    left:677px;
    top: 45px;
}
.cooperationButton{
  width: 144px;
  height: 32px;
  margin: 56px auto 69px;
}
</style>
