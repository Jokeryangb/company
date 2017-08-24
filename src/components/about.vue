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
       <div class="MethodsBanner"><img src="../assets/aboutbanner.png" class="MethodsPic"></div>
       <div style="width: 100%;height: 50px;position: relative;margin-top:34px ">
          <h4 class="titleC">关于我们</h4>
          <p class="titleEnglish">About us</p>
          <div class="blueLine"></div>
          <div class="greyLine"></div>
      </div>
    <div class="AboutUs">
      <div class="BannerPic">
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7)"></div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1);margin-right:6px "></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2);margin-right:6px "></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3);margin-right:6px "></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4);margin-right:6px "></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5);margin-right:6px "></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6);margin-right:6px "></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7);margin-right:6px "></div>
        </div>
    </div>
      </div>
      <div class="BusinessInformation">
           <p class="Iconn">< 展会现场</p>
           <h4 class="businessTitle">广州好酷信息科技有限公司</h4>
           <p class="BusinessContent">是游戏游艺行业的一站式服务平台，包括运营管理、销售推广、供应链服务等。我司研发的“酷酷宝线上综合管理系统”精准解决行业全流程痛点，帮助经营者轻松实现了“互联网+”、 建立生态圈、模式转型升级和盈利倍增。<br><br>

2016年9月，广州好酷信息科技有限公司成立，获得1200万天使轮融资，股东方代表：腾讯讯加微公司、行业合伙人、佶星雨团队等。16年11月，酷酷宝系统总粉丝数量超过200万；酷酷宝设备接入数超过3万+；酷酷宝系统总粉丝数超过500万+；酷酷宝线上营收超2000w+。<br><br>

公司创始人伍玉民先生，有着二十多年的行业经验，带领着一群来自“YY”、“金蝶”的IT精英，致力于游戏游艺这个细分领域的深耕，同时引入了行业合伙人和x腾讯公司等各方的资金资源支持，秉承“开放合作、连接共赢”的企业精神，与各届同仁共同打造游戏游艺产业生态系统！</p>
      </div>
      <div class="greyBox">
          <div class="GreyBoxx JoinUs"><h4>加入我们</h4><p>我们正在寻找才华横溢，怀揣梦想的小伙伴，和我们一起做充满挑战的事业</p><span>前往加入我们  ></span></div>
          <div class="GreyBoxx BusinessCooper"><h4>商务合作</h4><p>输出整场运营方案，快速吸粉、多店智能管理、利润翻翻</p><span>前往商务合作  ></span></div>
          <div class="GreyBoxx communicate"><h4>联系我们</h4><p>地址：广州市番禺区东环街555号番禺节能科技园内科技创新大厦618</p><span id="telephone">联系电话：020-12345678</span></div>
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
     huadong(){
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            loop:true,
            loopedSlides: 5, //looped slides should be the same     
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            touchRatio: 0.2,
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
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
.Joinbanner{
  width: 100%;
  position: relative;
  height: auto;
}
.AboutUs{
  width: 836px;
  position: relative;
  margin: 34px auto 0;
  height:702px;
}
.BannerPic{
  width: 373px;
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0
}
.BusinessInformation{
  width: 436px;
  height:  347px;
  position: absolute;
  display: inline-block;
  top: 0;right: 0

}
.Iconn{
  width:65px;
  height: 12px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #666666;
  position: absolute;
  top: 0;left: 0
}
.businessTitle{
  width: 240px;
  height: 18px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 18px;
  line-height:18px;
  letter-spacing: 0.9px;
  text-align: left;
  color: #333333;
  position: absolute;
  top:41px;left: 0
}
.BusinessContent{
  width: 436px;
  height: 252px;
  font-family: FZLTHJW-GB1-0;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.6px;
  text-align: justify;
  color: #666666;
  position: absolute;
  top: 88px;
}
    .swiper-container {
        width:373px;
        height: 347px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        background-size: cover;
        background-position: center;
    }
    .gallery-top {
        height:279px;
        width:373px;
    }
    .gallery-thumbs {
        height:65px;
        box-sizing: border-box;
        padding: 9px 0 0;
    }
    .gallery-thumbs .swiper-slide {
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
    .greyBox{
      width: 100%;
      height: 181px;
      position: absolute;
      top: 451px;
    }
    .GreyBoxx{
  width: 269px;
  height: 181px;
  background-color: #e8e8e8;
  position: absolute;
    }
    .BusinessCooper{
      left: 284px; 
    }
    .communicate{
      right:0 
    }
.GreyBoxx h4{
  width:80px;
  height: 18px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 18px;
  line-height:18px;
  text-align: center;
  color: #333333;
  position: absolute;
  top: 24px;
  left: 99px;
}
.GreyBoxx p{
  width: 216px;
  height: 30px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #999999;
  position: absolute;
  top: 78px;
  left: 27px;
}
.GreyBoxx span{
  width: 90px;
  height: 10px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 10px;
  line-height:10px;
  display: inline-block;
  text-align: center;
  color: #00aeef;
  position: absolute;
  bottom:34px;
  left: 98px;
}
#telephone{
  width: 154px;
  height: 12px;
  font-family: FZLTZHK-GBK1-0;
  font-size: 12px;
  line-height:12px;
  text-align: center;
  color: #999999;
  display: inline-block;
  left: 58px
}
</style>
