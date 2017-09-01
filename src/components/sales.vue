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
      <img src="../assets/Innerbanner.png" style="width:100%;height:auto;" class="JobsBanner">
      <div class="Job">
         <div class="FirstTitle">
            <p>营业员<img src="../assets/ho-t.png" class="hotPic">
            <img :src="button1" class="backPic" @mouseover="mouseOn" @mouseout="mouseOut" @click="onclick"></p>
         </div>
         <div class="p1" style="top: 122px;">
            <h4>职位描述</h4>
            <p>1、接待顾客的咨询，了解顾客的需求并达成销售；<br>

                2、负责做好货品销售记录、盘点、账目核对等工作，按规定完成各项销售统计工作；<br>

                3、完成商品的来货验收、上架陈列摆放、补货、退货、防损等日常营业工作；<br>

                4、做好所负责区域的卫生清洁工作；<br>

                5、完成上级领导交办的其他任务。</p>
         </div>
         <div class="p1 p2">
            <h4>任职要求：</h4>
            <p>1、具有较强的沟通能力及服务意识，吃苦耐劳；<br>

                2、年龄18-35岁，身体健康。</p>
         </div>
         <div class="p1 p3">
            <h4>薪酬福利：</h4>
            <p>1、各类假期：带薪年假、带薪病假、婚假、产假、国家法定假期，一样都不能少；<br>
              2、完善的福利：五险一金、股权激励、免费班车；<br>
              3、薪酬待遇：有竞争力的薪酬福利待遇体系，丰厚的年终奖金等着你来拿；<br>
              4、公司活动：不定期举办各类员工活动，月度生日会、节日活动、图书分享会，每周花样文体活动等着你来参加；<br>
              5、工作环境：公司提供优美的办公环境，提供优质资源；<br>
              6、吃货福利：蛋糕、甜点、水果、饮料等其他小零食。</p>
         </div>
          <div class="p1 p4">
            <h4>工作地址：</h4>
            <p>广州 - 番禺区 - 南村镇天汇百货二楼&nbsp&nbsp&nbsp<span style="color: #0099cc;  font-family: FZLTXHK-GBK1-0;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.8px;">查看地图 ></span></p>
         </div>
         <img :src="Buttonn" class="handle" @mouseover="mouseOnn" @mouseout="mouseOutt" @click="onclickk">
      </div>
    </div>
    <div class="pagebottom">
      <div style="width:832px;height:auto;margin:0 auto;position:relative;">
       <img src="../assets/logo2.png" class="bussinessLogo" style="float: left;">
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
            title: '商务合作'
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
      document.querySelector(".JobsBanner").offsetHeight;
      setTimeout(function(){
      console.log(document.querySelector(".Job").offsetTop);
      document.querySelector(".Joinbanner").style.height = 1297+ document.querySelector(".JobsBanner").offsetHeight-document.querySelector(".Job").offsetTop+"px"},1000);
      document.querySelector(".Joinbanner").style.height = 1297+ document.querySelector(".JobsBanner").offsetHeight +"px"
    }, 
    methods: {
     navMenu(index){
      if(index==5){
        this.$router.push("/join") 
      }
      if(index==1){
        this.$router.push("/product") 
      }
      if(index==2){
        this.$router.push("/example") 
      }
      if(index==3){
        this.$router.push("/methods") 
      }
      if(index==4){
        this.$router.push("/about") 
      }
      if(index==0){
        this.$router.push("/") 
      }
     },
     mouseOn(){
       this.button1 = button2;
     },
      mouseOut(){
       this.button1 = button1;
     },
     onclick(){
       this.button1 = button3;
       this.$router.push("/join")
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
@media (min-width: 1490px){
.p3 {
    top: 490px;
}
}
@media (min-width: 1490px){
.p4 {
    top: 770px;
}
}
@media (min-width: 1260px){
.p3 {
    top: 490px;
}
}
@media (min-width: 1260px){
.p4 {
    top: 770px;
}
}
@media (min-width: 1150px){
.p3 {
    top: 520px;
}
}
@media (min-width: 1150px){
.p4 {
    top: 830px;
}
}
@media (max-width: 1150px){
.p3 {
    top: 540px;
}
}
@media (max-width: 1150px){
.p4 {
    top: 880px;
}
}
@media (min-width: 1260px){
.p2 {
    top: 360px;
}
}
.handle {
    width: 140px;
    height: 40px;
    position: absolute;
    bottom: 220px;
    left: 15.5%;
}
</style>
