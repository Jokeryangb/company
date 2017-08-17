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
      <img src="../assets/product.png" style="width:100%;height:100%;">
    </div>
      <div class="Job">
         <div class="payy"><img src="../assets/pay.png" class="payPic"><div class="payContent"><h4>聚合支付</h4><p>微信支付、支付宝支付、QQ钱包刷卡支付等全面支持</p></div></div>
         <div class="selll"><img src="../assets/sell.png" class="sellPic"><div class="sellContent"><h4>自动营销</h4><p>七种武器:<br><br>1.吸星大法。凡关注游艺厅公众号皆可设置赠送游戏币，吸粉速度超级快<br><br>
2.移花接木。玩家转发推荐朋友关注公众号，可以获得游戏币奖励或者积分奖励<br><br>
3.大海无量。酷酷宝支持三级分销系统，玩家推荐朋友还可以获得三级分销佣金，玩游戏还可以赚钱<br><br>
4.金色梧桐。独特摇一摇功能，可以摇到游戏币、卡劵、积分等，提升玩家到店率，联合周边商家一起做导流<br><br>

5.不动如山。每日签到功能，玩家每天在公众号论坛签到，可以累积积分，或者额外惊喜，领取大量游戏币<br><br>
 
6.千环套月。套餐设置，支持游戏币、商城商品的套餐，优惠设置，牢牢锁住客户<br><br>

7.万法归宗。独有的竞技比赛模块，让玩家在玩游戏的时候，体验竞技的刺激，真人对抗，晋级飞升天降大奖，让玩家欲罢不能</p></div></div>
          <div class="shopp"><img src="../assets/shop.png" class="shopPic"><div class="shopContent"><h4>积分商城</h4><p>酷酷宝系统为每个游艺厅建立各自的积分商城系统<br><br>1.自由发布商品、编辑和美化，包括游戏币、玩具
日常用品等实物实物和虚拟商品<br><br>2.商城定价系统。完美匹配游艺厅经营，可以采用多种支付方式，包括积分兑换、酷币兑换、现金支付
以上各种组合支付<br><br>3.支持三级分销。游戏币、实物商品皆可采用三级分销系统，还可以设置购物送积分、返现、折扣等<br><br>4.提供专有虚拟商品。为游艺厅提供好酷专有的电话卡、流量卡、游戏点卡等虚拟商品，协助游艺厅丰富礼品库，提高积分价值</p></div></div>
         <div class="union"><img src="../assets/union.png" class="unionPic"><div class="unionContent"><h4>跨界联盟</h4><p>酷酷宝系统为游艺厅做异业联盟研发了便捷的积分支付、对账结算系统<br><br> 玩家只需使用微信扫一扫游艺厅为联盟商家提供的二维码，即可实现积分支付，全自动积分匹配消费金额，积分支付不限额度。<br><br>
         联盟商家管理员可以自助通过手机端，实时查询交易记录。<br><br></p></div></div>
          <div class="center"><img src="../assets/center.png" class="centerPic"><div class="centerContent"><h4>游戏中心</h4><p>1.为游艺厅提供海量的游戏供玩家选择，游戏的种类适合儿童、成人，为游艺厅创造二次盈利的能力，从周末生意变成全天侯的生意<br><br>2.线上游戏中心与线下游戏厅打通，利用积分可以通兑<br><br>3.提供游戏推广运营支持，帮助游艺厅在线上和线下落地，推广游戏事半功倍<br><br></p></div></div>
         <div class="bigData"><img src="../assets/bigData.png" class="bigDataPic"><div class="bigDataContent"><h4>大数据分析</h4><p>酷酷宝系统有着强大的报表系统。总体营收报表，总投币数、云投币数、实物投币数、购买游戏币数、赠送游戏币数、出彩积分数、兑换游戏币数，以及支持从客户维度、游乐设备维度、门店维度、区域维度进行数据统计和查询，并导出报表。账目清晰，财务人员省心，老板放心</p></div></div>
          <div class="profit"><img src="../assets/profit.png" class="profitPic"><div class="profitContent"><h4>生态盈利</h4><p>生态盈利包含两层意思，首先是，以每个单店为中心的小生态圈，其次是，以好酷好玩大联盟为中心的大生态圈<br><br>在小的生态圈中，咱们每个游乐园，通过经营自己的客户把线下的客户转为线上的粉丝，然后可以对接当地的广告商、手游商、经营自己的积分商城、周边的商家合作等，形成一个区域性的生态链，把粉丝变现<br><br>然而，一个游乐园所积累的粉丝有限，所能够整合的资源有限，所能承载的需求有限，甚至在整合合作中，还是相对弱势的，这时一个大的生态联盟，就很有必要。就会改变我们单打独斗的弱势局面，可以承载全国性的广告诉求，所以我们未来的生态盈利变现，必须依靠千万粉丝为基础，我们才有讨价还价的筹码<br><br>我们全国有四万多家游乐园，每家只有一万粉丝，那么整个盘子也有四亿粉丝，所以大联盟具有更大的商业价值</p></div></div>
      </div>
    <div class="pagebottom">
      <div style="width:70%;height:auto;margin:0 auto;position:relative;">
       <img src="../assets/m.png" class="bussinessLogo" style="width: 10rem;height: auto;float: left;">
       <div style="width: 520px;height: auto;float: left;position: absolute;left: 417px;margin-top: 36px">
       <div style="width: 325px;height: 13px ;font-family: FZLTXHK-GBK1-0;font-size: 12px;line-height: 1.5;letter-spacing: 0.3px;text-align: left;color: #ffffff">首页&nbsp&nbsp|&nbsp&nbsp产品&nbsp&nbsp|&nbsp&nbsp案例&nbsp&nbsp|&nbsp&nbsp商务方式&nbsp&nbsp|&nbsp&nbsp关于我们&nbsp&nbsp|&nbsp&nbsp加入我们</div>
       <p style="width: 514px;height: 49px;  width: 514px;height: 49px;font-family: FZLTXHK-GBK1-0;font-size: 12px;line-height: 1.5;letter-spacing: 0.3px;text-align: left;color: #ababab;margin-top: 10px">广州好酷科技有限公司&nbsp&nbsp联系电话：020-39106900&nbsp&nbsp联系地址：广州番禺区番禺大道北555号番禺节能科技园创新大厦618&nbsp&nbsp展厅地址：广州番禺迎新东路星力动漫游戏产业园J128&nbsp&nbsp版权所有：Copyright@好酷科技&nbsp&nbsp粤ICP备16091001号-1
       </p>
       </div>
       <div style="width:82px;height: 101px;float: left;position: absolute;left: 971px;margin-top: 26px">
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
.Joinbanner{
    position: relative;
    width: 100%;
    height: auto;
    clear: both;
    background-color:  #f9f9f9
}
.Job{
  position: relative;
  width: 100%;
  height:3000px;
  background-color: #f9f9f9;
}
.payy{
    width: 1277px;
    height: 186px;
    margin: 0 auto;
    position: relative;
    top: 65px;
    margin-bottom: 68px; 
}
.selll{
    width: 1277px;
    height:481px;
    margin: 0 auto;
    position: relative;
    top: 65px;
    margin-bottom: 112px; 
}
.shopp{
    width: 1277px;
    height:314px;
    margin: 0 auto;
    position: relative;
    top: 65px;
    margin-bottom:106px; 
}
.union{
    width: 1277px;
    height:225px;
    margin: 0 auto;
    position: relative;
    top: 65px;
    margin-bottom: 99px;  
}
.center{
    width: 1277px;
    height:331px;
    margin: 0 auto;
    position: relative;
    top: 65px;
    margin-bottom:106px;   
}
.bigData{
  width: 1277px;
  height: 192px;
  position: relative;
  margin: 0 auto;
  top: 65px;
  margin-bottom:103px;  
}
.profit{
  width: 1277px;
  height: 350px;
  position: relative;
  margin: 0 auto;
  top: 65px;
  margin-bottom:103px;    
}
.payPic{
    width: 240px;
    height: 186px;
    position: absolute;
    left: 350px;
    /* top: 65px; */
}
.shopPic{
    width: 244px;
    height: 244px;
    position: absolute;
    left: 307px;
    top: 49px;
    /* top: 65px; */
}
.sellPic{
    width: 261px;
    height: 223px;
    position: absolute;
    left: 700px;
    top: 160px;
    /* top: 65px; */
}
.unionPic{
    width: 287px;
    height: 138px;
    position: absolute;
    left: 741px;
    top: 51px;
    /* top: 65px; */
}
.centerPic{
    width: 185px;
    height: 331px;
    position: absolute;
    left: 335px;
    top: 0;
    /* top: 65px; */
}
.bigDataPic{
    width: 313px;
    height: 158px;
    position: absolute;
    left: 636px;
    top: 34px;
}
.profitPic{
    width: 222px;
    height: 240px;
    position: absolute;
    left:325px;
    top: 94px;
}
.payContent h4{
    width: 130px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 839px;
    top: 33px;
}
.payContent p {
    width: 181px;
    height: 30px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 0.3px;
    text-align: right;
    color: #666666;
    position: absolute;
    left: 781px;
    top: 91px;
}
.sellContent h4{
    width: 130px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 312px;
    top:0;
}
.sellContent p {
    width: 324px;
    height: 408px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: justify;
  color: #666666;
    position: absolute;
    left:310px;
    top:51px;
}
.shopContent h4{
    width: 130px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 839px;
    top: 0px;
}
.shopContent p {
  width: 289px;
  height: 265px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align:right;
  color: #666666;
    position: absolute;
    left: 671px;
    top: 49px;
}
.unionContent h4{
    width: 130px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 307px;
    top:0;
}
.unionContent p {
    width: 232px;
    height: 174px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: justify;
  color: #666666;
    position: absolute;
    left:308px;
    top:51px;
}
.centerContent h4{
    width: 130px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 837px;
    top:27px;
}
.centerContent p {
    width: 221px;
    height: 175px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: right;
  color: #666666;
    position: absolute;
    left:737px;
    top:76px;
}
.bigDataContent h4{
    width: 160px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 309px;
    top:0px;
}
.bigDataContent p {
    width: 232px;
    height: 120px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: left;
  color: #666666;
    position: absolute;
    left:309px;
    top:51px;
}
.profitContent h4{
    width: 130px;
    height: 29px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 30px;
    line-height: 29px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #00aeef;
    display: inline;
    position: absolute;
    left: 836px;
    top:0px;
}
.profitContent p {
    width:323px;
    height: 301px;
  font-family: FZLTXHK-GBK1-0;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: right;
  color: #666666;
    position: absolute;
    left:634px;
    top:49px;
}
.payContent{
    position: absolute;
    width: 181px;
}
</style>
