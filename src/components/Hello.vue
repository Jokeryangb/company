<template>
  <div class="hello">
  
    <div style="width: 100%;height: 5.6rem;  background-color: #ffffff;
  
    box-shadow: 0px 2px 0 0 rgba(0, 0, 0, 0.3);">
  
      <ul>
  
        <li class="businessLogo"><img src="../assets/haokuLogo.png" class="businessLogo"></li>
  
        <li v-for="(menu,index) in NavMenu" class="menuItem" @click="navMenu(index)" v-bind:class="{active: activeName1 == index,onMouseActive:activeNamee==index}" @mouseover="active(index)" @mouseout="delectActive(index)">{{menu.title}}</li>
  
        <li class="qqLogo2"><img src="../assets/qq.png" class="qqLogo"></li>
  
      </ul>
  
    </div>
  
    <div class="banner">
  
      <img src="../assets/bannerWord.png" class="bannerWord"></br>
  
      <img src="../assets/bannerMore.png" class="bannerMore" @click="More">
  
    </div>
  
    <div class="bottleNeck">
  
      <div style="width: 100%;height: 50px;position: relative;">
  
        <h4 class="titleC">行业痛点</h4>
  
        <p class="titleEnglish">Bottleneck Of The Industry</p>
  
        <div class="blueLine"></div>
  
        <div class="greyLine"></div>
  
      </div>
  
      <img src="../assets/title3.png" class="title2">
  
      <div class="example">
  
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0">
  
          <el-col :span="4" v-for="(bottleneck,index) in bottleNeck" @mouseover.native="mouseon(index)" @mouseout.native="mouseout(index)" style="width: 19.9rem;
  
      height: 33.7rem;">
  
            <div :body-style="{ padding: '0px' }" style="height: auto;background-color: #fff" v-bind:class="{moveChange: activeName2 == index}">
  
              <img :src="bottleneck.picc" class="image" style="width: 100%">
  
              <div v-bind:class="{colorChange: activeName2 == index}" style="height:20.4rem;margin-top:-0.5rem">
  
                <div class="cardBox">
  
                  <h4 v-bind:class="{Number:activeName2 != index,NumberChange:activeName2 == index}">{{bottleneck.No}}</h4>
  
                  <h4 v-bind:class="{titles:activeName2 != index,titleChange:activeName2 == index}">{{bottleneck.title}}</h4>
  
                </div>
  
                <div class="bottom clearfix descriptionBottom" style="clear: both;padding:0 1rem;box-sizing:border-box;text-align: left">
  
                  <h4 v-bind:class="{description:activeName2 != index,descriptionChange:activeName2 == index}">{{bottleneck.content}}</h4>
  
                </div>
  
              </div>
  
            </div>
  
          </el-col>
  
        </el-row>
  
      </div>
  
      <img src="../assets/title2.png" class="title3">
  
      <div class="example">
  
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;padding: 0">
  
          <el-col :span="4" v-for="(bottleneck,index) in playerNeck1" @mouseover.native="mouseonn(index)" @mouseout.native="mouseoutt(index)" style="width: 19.9rem;height:28.5rem;">
  
            <div :body-style="{ padding: '0px' }" style="height: auto;background-color: #fff" v-bind:class="{moveChange: activeName2 == index-4}">
  
              <img :src="bottleneck.picc" class="image" style="width: 100%">
  
              <div v-bind:class="{colorChange: activeName2 == index-4}" style="height:15.2rem;margin-top:-0.5rem">
  
                <div class="cardBox">
  
                  <h4 v-bind:class="{Number:activeName2 != index-4,NumberChange:activeName2 == index-4}">{{bottleneck.No}}</h4>
  
                  <h4 v-bind:class="{titles:activeName2 != index-4,titleChange:activeName2 == index-4}">{{bottleneck.title}}</h4>
  
                </div>
  
                <div class="bottom clearfix descriptionBottom" style="clear: both;padding:0 1rem;box-sizing:border-box;text-align: left;">
  
                  <h4 v-bind:class="{description:activeName2 != index-4,descriptionChange:activeName2 == index-4}">{{bottleneck.content}}</h4>
  
                </div>
  
              </div>
  
            </div>
  
          </el-col>
  
        </el-row>
  
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;margin: 0">
  
          <el-col :span="4" v-for="(bottleneck,index) in playerNeck2" @mouseover.native="mouseOn(index)" @mouseout.native="mouseOut(index)" style="width: 19.9rem;height:28.5rem;">
  
            <div :body-style="{ padding: '0px' }" style="height: auto;background-color: #fff" v-show="bottleneck.opacity" v-bind:class="{moveChange: activeName2 == index+4}">
  
              <img :src="bottleneck.picc" class="image" style="width: 100%">
  
              <div v-bind:class="{colorChange: activeName2 == index+4}" style="height:15.2rem;margin-top:-0.5rem">
  
                <div class="cardBox">
  
                  <h4 v-bind:class="{Number:activeName2 != index+4,NumberChange:activeName2 == index+4}">{{bottleneck.No}}</h4>
  
                  <h4 v-bind:class="{titles:activeName2 != index+4,titleChange:activeName2 == index+4}">{{bottleneck.title}}</h4>
  
                </div>
  
                <div class="bottom clearfix descriptionBottom" style="clear: both;padding:0 1rem;box-sizing:border-box;text-align: left">
  
                  <h4 v-bind:class="{description:activeName2 != index+4,descriptionChange:activeName2 == index+4}">{{bottleneck.content}}</h4>
  
                </div>
  
              </div>
  
            </div>
  
          </el-col>
  
        </el-row>
  
      </div>
  
    </div>
  
    <div class="methods">
  
      <div style="width: 100%;height: 50px;position: relative;">
  
        <h4 class="titleC" style="color: #ffffff">如何突破</h4>
  
        <p class="titleEnglish" style=" color: #cccccc;">How to Break Through</p>
  
        <div class="blueLine" style="z-index: 3"></div>
  
        <div class="greyLine" style="background-color: #f0f0f0;top: 14px;z-index: 1"></div>
  
      </div>
  
      <img src="../assets/p12.png" class="p12">
  
    </div>
  
    <div class="service">
  
      <div style="width: 100%;height: 50px;position: relative;top: 48px;margin-bottom: 90px;">
  
        <h4 class="titleC" style="width: 190px; ">我们的产品与服务</h4>
  
        <p class="titleEnglish" style="width: 170px">Our Products And Services</p>
  
        <div class="blueLine"></div>
  
        <div class="greyLine"></div>
  
      </div>
  
      <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;padding-bottom: 5.9rem">
  
        <el-col :span="3" v-for="(bottleneck,index) in service" @mouseover.native="mouseOnn(index)" @mouseout.native="mouseOutt(index)" style="width: 12.8rem;height:206px;background-color: #fff;padding:0;margin-left:10px;margin-right: 10px" v-bind:class="{moveChange: activeName2 == index+8}">
  
          <div :body-style="{ padding: '0px' }" style="width: 12.8rem;height:206px;" v-bind:class="{colorChange: activeName2 == index+8}">
  
            <img :src="activePic4[index].show?bottleneck.pic:bottleneck.picc" class="serviceImage">
  
            <div style="height: auto;">
  
              <h5 v-bind:class="{Titlee:activeName2 != index+8,titleChange2:activeName2 == index+8}">{{bottleneck.title}}</h5>
  
              <img :src="activePic4[index].show?button1:button2" class="buttonPic" @click="LearnMore">
  
            </div>
  
          </div>
  
        </el-col>
  
      </el-row>
  
    </div>
  
    <div class="cooperationExa">
  
      <div style="width: 100%;height: 50px;position: relative;margin-bottom: 48px ">
  
        <h4 class="titleC" style="color: #ffffff">合作案例</h4>
  
        <p class="titleEnglish" style=" color: #cccccc;width:250px;">Successful Examples Of Cooperation</p>
  
        <div class="blueLine" style="z-index: 3"></div>
  
        <div class="greyLine" style="background-color: #f0f0f0;top: 14px;z-index: 1"></div>
  
      </div>
  
      <div class="swiper-container">
  
        <div class="swiper-button-prev" style="background:none"><img src="../assets/left.png" class="leftPic"></div>
  
        <div class="bannerPicture swiper-wrapper">
  
          <div class="swiper-slide">
  
            <img src="../assets/p23.jpg" style="width: 100%;height: auto;">
  
            <div class="grey">
  
              <p>1、客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包</p><img src="../assets/button3.png"></div>
  
          </div>
  
        </div>
  
        <div class="swiper-button-next" style="background:none"><img src="../assets/right.png" class="rightPic"></div>
  
      </div>
  
    </div>
  
    <div class="MerchantAlliance">
  
      <div style="width: 100%;height: 50px;position: relative;top: 48px;margin-bottom:87px ">
  
        <h4 class="titleC">商家联盟</h4>
  
        <p class="titleEnglish">Merchant Alliance</p>
  
        <div class="blueLine"></div>
  
        <div class="greyLine"></div>
  
      </div>
  
      <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;height: 80px;margin: 0;padding:0">
  
        <el-col :span="6" style="width: 222px;height: 80px;box-sizing: content-box;padding-left: 0 ">
  
          <img src="../assets/27.png">
  
        </el-col>
  
        <el-col :span="8" style="width: 307px;height: 80px;box-sizing: content-box;padding-left: 0">
  
          <img src="../assets/p24.png">
  
        </el-col>
  
        <el-col :span="6" style="width: 222px;height: 80px;box-sizing: content-box;padding-left: 0">
  
          <img src="../assets/26.png">
  
        </el-col>
  
      </el-row>
  
      <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-left: 0px;margin-right: 0px;margin-top: 8px;padding-bottom: 77px;">
  
        <el-col :span="6" style="width: 222px;height: 80px;box-sizing: content-box;padding-left: 0">
  
          <img src="../assets/25.png">
  
        </el-col>
  
        <el-col :span="8" style="width: 307px;height: 80px;box-sizing: content-box;padding-left: 0">
  
          <img src="../assets/tencent.png">
  
        </el-col>
  
        <el-col :span="6" style="width: 222px;height: 80px;box-sizing: content-box;padding-left: 0">
  
          <img src="../assets/28.png">
  
        </el-col>
  
      </el-row>
  
    </div>
  
    <div class="pagebottom">
  
      <div style="width:832px;height:auto;margin:0 auto;position:relative;">
  
        <img src="../assets/logo2.png" class="bussinessLogo" style="float: left;">
  
        <div style="width: 520px;height: auto;float: left;position: absolute;left:196px;margin-top: 36px">
  
          <div style="width:525px;height: 13px ;font-family: FZLTXHK-GBK1-0;font-size: 12px;line-height: 1.5;letter-spacing: 0.3px;text-align: left;color: #ffffff">首页&nbsp&nbsp|&nbsp&nbsp产品&nbsp&nbsp|&nbsp&nbsp案例&nbsp&nbsp|&nbsp&nbsp商务方式&nbsp&nbsp|&nbsp&nbsp关于我们&nbsp&nbsp|&nbsp&nbsp加入我们</div>
  
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
  
  import pic1 from '../assets/p1.png'
  
  import pic2 from '../assets/p2.png'
  
  import pic3 from '../assets/p3.png'
  
  import pic4 from '../assets/p4.png'
  
  import pic5 from '../assets/p5.png'
  
  import pic6 from '../assets/p6.png'
  
  import pic7 from '../assets/p7.png'
  
  import pic8 from '../assets/p8.png'
  
  import pic9 from '../assets/p9.png'
  
  import pic10 from '../assets/p10.png'
  
  import pic11 from '../assets/p11.png'
  
  import pic15 from '../assets/p15.png'
  
  import pic16 from '../assets/p16.png'
  
  import pic17 from '../assets/p17.png'
  
  import pic18 from '../assets/p18.png'
  
  import pic19 from '../assets/p19.png'
  
  import pic20 from '../assets/p20.png'
  
  import pic24 from '../assets/p24.png'
  
  import pic26 from '../assets/26.png'
  
  import pic27 from '../assets/27.png'
  
  import picc1 from '../assets/1.png'
  
  import picc2 from '../assets/2.png'
  
  import picc3 from '../assets/3.png'
  
  import picc4 from '../assets/4.png'
  
  import picc5 from '../assets/5.png'
  
  import picc6 from '../assets/6.png'
  
  import picc7 from '../assets/7.png'
  
  import picc8 from '../assets/8.png'
  
  import picc9 from '../assets/9.png'
  
  import picc10 from '../assets/10.png'
  
  import picc11 from '../assets/11.png'
  
  import picc15 from '../assets/15.png'
  
  import picc16 from '../assets/16.png'
  
  import picc17 from '../assets/17.png'
  
  import picc18 from '../assets/18.png'
  
  import picc19 from '../assets/19.png'
  
  import picc20 from '../assets/20.png'
  
  import button1 from '../assets/button2.png'
  
  import button2 from '../assets/buttom.png'
  
  export default {
  
    name: 'hello',
  
    data() {
  
      return {
  
        activeNamee: null,
  
        button1: button1,
  
        button2: button2,
  
        activeName1: '',
  
        activeName2: null,
  
        activePic: [{
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }],
  
        activePic2: [{
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }],
  
        activePic3: [{
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }],
  
        activePic4: [{
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }, {
  
          show: true
  
        }],
  
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
  
        bottleNeck: [{
  
            id: 0,
  
            pic: pic1,
  
            picc: picc1,
  
            No: '01',
  
            title: '支付麻烦，受到会员卡限制怎么办？',
  
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
  
          }, {
  
            id: 1,
  
            pic: pic2,
  
            picc: picc2,
  
            No: '02',
  
            title: '积分没用，不便储存，不便消费？',
  
            content: '玩游戏得的奖励积分（彩票）不再是鸡肋，可储在手机会员卡上，在积分商城兑换多彩多样的精美礼品，还有流量话费、旅游、数码、虚拟商品等。还可以在联盟商家兑换消费，用餐、购物、看电影等。'
  
          },
  
          {
  
            id: 2,
  
            pic: pic3,
  
            picc: picc3,
  
            No: '03',
  
            title: '不能互动，不能分享炫耀？',
  
            content: '玩家不再孤单、不再没有社交空间，抓到娃娃或者挑战的记录，可以和其他玩家在社区论坛分享，找到同道中人。还可以投票支持、签到领奖。'
  
          },
  
          {
  
            id: 3,
  
            pic: pic4,
  
            picc: picc4,
  
            No: '04',
  
            title: '场地限制，碎片化时间无法打发？',
  
            content: '随时随地想玩就玩，玩家还可以玩手游，看小说，直播等等。'
  
          },
  
        ],
  
        playerNeck1: [{
  
            id: 0,
  
            pic: pic5,
  
            picc: picc5,
  
            No: '01',
  
            title: '礼品库存压力大？',
  
            content: '建立积分商城，礼品的采购、库存、与兑换管理，全在线上及后台完成。'
  
          }, {
  
            id: 1,
  
            pic: pic6,
  
            picc: picc6,
  
            No: '02',
  
            title: '管理系统采购成本高？',
  
            content: '革命性降低了投入，运营维护成本，特别是连锁经营、一套多店。'
  
          },
  
          {
  
            id: 2,
  
            pic: pic7,
  
            picc: picc7,
  
            No: '03',
  
            title: '赚钱盈利模式单一？',
  
            content: '不再是只依赖游艺厅线下赚钱，用粉丝赚钱，把粉丝导流到公众平台可实现生态赢利不用冒法律风险干“擦边球”。'
  
          },
  
          {
  
            id: 3,
  
            pic: pic8,
  
            picc: picc8,
  
            No: '04',
  
            title: '外部资源匮乏？',
  
            content: '承接线上海量客户，打通线上线下游戏通道。'
  
          },
  
        ],
  
        playerNeck2: [{
  
            id: 0,
  
            pic: pic9,
  
            picc: picc9,
  
            No: '05',
  
            title: '营销功能薄弱？',
  
            content: '拥有八大营销功能，包括分享送币、投票、签到、三级分销等等。',
  
            opacity: 1
  
          }, {
  
            id: 1,
  
            pic: pic10,
  
            picc: picc10,
  
            No: '06',
  
            title: '管理漏洞难杜绝？',
  
            content: '支付可全部线上支付，游戏币、积分、机台投币数据等所有数据全部统计并实时查询。',
  
            opacity: 1
  
          },
  
          {
  
            id: 2,
  
            pic: pic11,
  
            picc: picc11,
  
            No: '07',
  
            title: '数据分析弱？',
  
            content: '拥有强大的数据分析报表，数据归纳整理，门店排行，统一视图等。',
  
            opacity: 1
  
          }, {
  
            id: 2,
  
            pic: '',
  
            picc: '',
  
            No: '',
  
            title: '',
  
            content: '',
  
            opacity: 0
  
          },
  
        ],
  
        service: [{
  
          id: 0,
  
          pic: pic15,
  
          picc: picc15,
  
          title: '积分商场'
  
        }, {
  
          id: 1,
  
          pic: pic16,
  
          picc: picc16,
  
          title: '游戏中心'
  
        }, {
  
          id: 2,
  
          pic: pic17,
  
          picc: picc17,
  
          title: '大数据分析'
  
        }, {
  
          id: 3,
  
          pic: pic18,
  
          picc: picc18,
  
          title: '跨业联盟'
  
        }, {
  
          id: 4,
  
          pic: pic19,
  
          picc: picc19,
  
          title: '聚合支付'
  
        }, {
  
          id: 5,
  
          pic: pic20,
  
          picc: picc20,
  
          title: '自动营销'
  
        }],
  
        shopLogo: [{
  
            id: 0,
  
            pic: pic24
  
          },
  
          {
  
            id: 1,
  
            pic: pic26
  
          },
  
          {
  
            id: 2,
  
            pic: pic27
  
          },
  
        ]
  
  
  
      }
  
    },
  
    mounted() {
  
      this.huadong()
  
    },
  
    methods: {
  
      delectActive(index) {
  
        this.activeNamee = null;
  
      },
  
      active(index) {
  
        console.log("aaa");
  
        this.activeNamee = index;
  
      },
  
      navMenu(index) {
  
        this.activeName1 = index;
  
        if (index == 5) {
  
          this.$router.push("/join")
  
        }
  
        if (index == 1) {
  
          this.$router.push("/product")
  
        }
  
        if (index == 2) {
  
          this.$router.push("/example")
  
        }
  
        if (index == 3) {
  
          this.$router.push("/methods")
  
        }
  
        if (index == 4) {
  
          this.$router.push("/about")
  
        }
  
        if (index == 0) {
  
          this.$router.push("/")
  
        }
  
      },
  
      mouseon(index) {
  
        this.activePic[index].show = false;
  
        this.activeName2 = index;
  
      },
  
      mouseout(index) {
  
        this.activePic[index].show = true;
  
        this.activeName2 = null
  
      },
  
      mouseonn(index) {
  
        this.activePic2[index].show = false;
  
        this.activeName2 = index - 4;
  
      },
  
      mouseoutt(index) {
  
        this.activePic2[index].show = true;
  
        this.activeName2 = null
  
      },
  
      mouseOn(index) {
  
        this.activePic3[index].show = false;
  
        this.activeName2 = index + 4;
  
      },
  
      mouseOut(index) {
  
        this.activePic3[index].show = true;
  
        this.activeName2 = null
  
      },
  
      mouseOnn(index) {
  
        this.activePic4[index].show = false;
  
        this.activeName2 = index + 8;
  
      },
  
      mouseOutt(index) {
  
        this.activePic4[index].show = true;
  
        this.activeName2 = null
  
      },
  
      huadong() {
  
        let swiperContainer = new Swiper('.swiper-container', {
  
          pagination: '.swiper-pagination',
  
          nextButton: '.swiper-button-next',
  
          prevButton: '.swiper-button-prev',
  
          slidesPerView: 1,
  
          paginationClickable: true,
  
          spaceBetween: 30,
  
          loop: true
  
        });
  
      },
  
      //铲平与服务部分了解更多的跳转
  
      LearnMore() {
  
        this.$router.push("/product")
  
      },
  
      //Banner了解更多的跳转
  
      More() {
  
        this.$router.push("/about")
  
      }
  
    }
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped media="all" type="text/css">
  @import url("../css/index.css") screen;
  
  @import url("../css/swiper.min.css");
  
  .swiper-container {
  
    width: 65%;
  
    height: auto;
  
    margin-left: auto;
  
    margin-right: auto;
  
  }
  
  
  
  .onMouseActive {
  
    color: #42a4fc
  
  }
</style>
