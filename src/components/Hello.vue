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
    <div class="banner">
      <img src="../assets/bannerWord.png" class="bannerWord"></br>
      <img src="../assets/bannerMore.png" class="bannerMore">
    </div>
    <div class="bottleNeck">
      <img src="../assets/title1.png" class="title1">
      <img src="../assets/title2.png" class="title2">
      <div class="example">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0">
          <el-col :span="4" v-for="(bottleneck,index) in bottleNeck" @mouseover.native="mouseon(index)" @mouseout.native="mouseout(index)" style="width: 19.9rem;
    height: 33.7rem;">
            <div :body-style="{ padding: '0px' }" style="height: auto;background-color: #fff" v-bind:class="{moveChange: activeName2 == index}">
              <img :src="activePic[index].show?bottleneck.pic:bottleneck.picc" class="image">
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
      <img src="../assets/title3.png" class="title3">
      <div class="example">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0">
          <el-col :span="4" v-for="(bottleneck,index) in playerNeck1"  @mouseover.native="mouseonn(index)" @mouseout.native="mouseoutt(index)" style="width: 19.9rem;height: 33.7rem;">
            <div :body-style="{ padding: '0px' }" style="height: auto;background-color: #fff" v-bind:class="{moveChange: activeName2 == index-4}">
              <img :src="activePic2[index].show?bottleneck.pic:bottleneck.picc" class="image">
              <div v-bind:class="{colorChange: activeName2 == index-4}" style="height:20.4rem;margin-top:-0.5rem">
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
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0">
          <el-col :span="4" v-for="(bottleneck,index) in playerNeck2"  @mouseover.native="mouseOn(index)" @mouseout.native="mouseOut(index)" style="width: 19.9rem;height: 33.7rem;">
            <el-card :body-style="{ padding: '0px' }" style="height: auto;background-color: #fff" v-show="bottleneck.opacity"  v-bind:class="{moveChange: activeName2 == index+4}">
              <img :src="activePic3[index].show?bottleneck.pic:bottleneck.picc" class="image">
              <div v-bind:class="{colorChange: activeName2 == index+4}" style="height:20.4rem;margin-top:-0.5rem">
              <div class="cardBox">
                    <h4 v-bind:class="{Number:activeName2 != index+4,NumberChange:activeName2 == index+4}">{{bottleneck.No}}</h4>
                    <h4 v-bind:class="{titles:activeName2 != index+4,titleChange:activeName2 == index+4}">{{bottleneck.title}}</h4>
              </div>
              <div class="bottom clearfix descriptionBottom" style="clear: both;padding:0 1rem;box-sizing:border-box;text-align: left">
                <h4 v-bind:class="{description:activeName2 != index+4,descriptionChange:activeName2 == index+4}">{{bottleneck.content}}</h4>
              </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="methods">
      <img src="../assets/title4.png" class="title4">
      <img src="../assets/p12.png" class="p12">
    </div>
    <div class="service">
      <img src="../assets/title5.png" class="title5">
      <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;padding-bottom: 3.5rem">
        <el-col :span="3" v-for="(bottleneck,index) in service" @mouseover.native="mouseOnn(index)" @mouseout.native="mouseOutt(index)">
          <el-card :body-style="{ padding: '0px' }" style="height: auto" v-bind:class="{moveChange: activeName2 == index+8,colorChange: activeName2 == index+8}">
            <img :src="activePic4[index].show?bottleneck.pic:bottleneck.picc" class="serviceImage" >
            <div style="height: auto;">
            <div>
              <el-row :gutter="1" class="serviceTitle">
                <h5 v-bind:class="{Titlee:activeName2 != index+4,titleChange:activeName2 == index+8}">{{bottleneck.title}}</h5>
              </el-row>
            </div>
            <div class="bottom clearfix buttonBottom">
              <img :src="activePic4[index].show?button1:button2" class="buttonPic">
            </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="cooperationExa">
      <img src="../assets/title6.png" class="title6">
      <div>
        <img src="../assets/left.png" class="leftPic">
        <div class="bannerPicture">
          <div style="width:">
          <img src="../assets/p23.jpg" style="width: 100%;height: auto;">
          <div class="grey"><p style="opacity:1;color:white;font-size:12px;text-align: left;width:80%;float:left">1、客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可客人无需在考虑没带会员卡能否去游乐园游乐厅玩</p><img src="../assets/button3.png" style="float: right;width: 15%;height: auto;opacity: 1;position:relative;top:3rem;"></div>
          </div>
        </div>
        <img src="../assets/right.png" class="rightPic">
      </div>
    </div>
    <div class="MerchantAlliance">
      <img src="../assets/title7.png" class="title7">
       <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;padding-bottom: 3.5rem;height: 13rem">
        <el-col :span="6">
            <img src="../assets/27.png">
        </el-col>
        <el-col :span="8">
            <img src="../assets/p24.png">
        </el-col>
        <el-col :span="6">
            <img src="../assets/26.png">
        </el-col>
      </el-row>
       <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;padding-bottom: 3.5rem;height: 13rem">
        <el-col :span="6">
            <img src="../assets/25.png">
        </el-col>

        <el-col :span="6">
            <img src="../assets/28.png">
        </el-col>
      </el-row>
      </div>
    <div class="pagebottom">
      <div style="width:70%;height:auto;margin:0 auto;position:relative;">
       <img src="../assets/m.png" class="bussinessLogo" style="width: 10rem;height: auto;float: left;">
       <p style="float: left;display: inline-block;color: white;width:60%">首页&nbsp&nbsp|&nbsp&nbsp产品&nbsp&nbsp|&nbsp&nbsp案例&nbsp&nbsp|&nbsp&nbsp商务方式&nbsp&nbsp|&nbsp&nbsp关于我们&nbsp&nbsp|&nbsp&nbsp加入我们</br></br>广州好酷科技有限公司&nbsp&nbsp联系电话：020-39106900&nbsp&nbsp联系地址：广州番禺区番禺大道北555号番禺节能科技园创新大厦618&nbsp&nbsp展厅地址：广州番禺迎新东路星力动漫游戏产业园J128&nbsp&nbsp版权所有：Copyright@好酷科技&nbsp&nbsp粤ICP备16091001号-1</p>
       <img src="../assets/n.png" class="Code" style="width: 7rem;height:auto;float: right;">
       </div>
    </div>
  </div>
</template>

<script>
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
        button1:button1,
        button2:button2,
        activeName1:'',
        activeName2:null,
        activePic:[{show:true},{show:true},{show:true},{show:true}],
        activePic2:[{show:true},{show:true},{show:true},{show:true}],
        activePic3:[{show:true},{show:true},{show:true},{show:true}],
        activePic4:[{show:true},{show:true},{show:true},{show:true},{show:true},{show:true}],
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
        bottleNeck: [{
            id: 0,
            pic: pic1,
            picc:picc1,
            No: '01',
            title: '支付麻烦，受到会员卡限制怎么办？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          }, {
            id: 1,
            pic: pic2,
            picc:picc2,
            No: '02',
            title: '支付麻烦，受到会员卡限制怎么办？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          },
          {
            id: 2,
            pic: pic3,
            picc:picc3,
            No: '03',
            title: '支付麻烦，受到会员卡限制怎么办？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          },
          {
            id: 3,
            pic: pic4,
            picc:picc4,
            No: '04',
            title: '支付麻烦，受到会员卡限制怎么办？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          },
        ],
        playerNeck1: [{
            id: 0,
            pic: pic5,
            picc: picc5,
            No: '01',
            title: '礼品库存压力大？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          }, {
            id: 1,
            pic: pic6,
            picc: picc6,
            No: '02',
            title: '管理系统采购成本高？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          },
          {
            id: 2,
            pic: pic7,
            picc: picc7,
            No: '03',
            title: '赚钱盈利模式单一？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          },
          {
            id: 3,
            pic: pic8,
            picc: picc8,
            No: '04',
            title: '外部资源匮乏？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可'
          },
        ],
        playerNeck2: [{
            id: 0,
            pic: pic9,
            picc: picc9,
            No: '05',
            title: '营销功能薄弱？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可',
            opacity: 1
          }, {
            id: 1,
            pic: pic10,
            picc: picc10,
            No: '06',
            title: '管理漏洞难杜绝？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可',
            opacity: 1
          },
          {
            id: 2,
            pic: pic11,
            picc: picc11,
            No: '07',
            title: '数据分析弱？',
            content: '客人无需在考虑没带会员卡能否去游乐园游乐厅玩，甚至不需要带钱包，只要带上手机即可',
            opacity: 1
          }, {
            id: 2,
            pic: '',
            picc:'',
            No: '',
            title: '',
            content: '',
            opacity: 0
          },
        ],
        service: [{
          id: 0,
          pic: pic15,
          picc:picc15,
          title: '积分商场'
        }, {
          id: 1,
          pic: pic16,
          picc:picc16,
          title: '游戏中心'
        }, {
          id: 2,
          pic: pic17,
          picc:picc17,
          title: '大数据分析'
        }, {
          id: 3,
          pic: pic18,
          picc:picc18,
          title: '跨业联盟'
        }, {
          id: 4,
          pic: pic19,
          picc:picc19,
          title: '聚合支付'
        }, {
          id: 5,
          pic: pic20,
          picc:picc20,
          title: '自动营销'
        }],
        shopLogo:[
          {id:0,pic:pic24},
          {id:1,pic:pic26},
          {id:2,pic:pic27},
        ]

      }
    },
    methods: {
     navMenu(index){
      this.activeName1=index;
     },
     mouseon(index){
      this.activePic[index].show=false;
      this.activeName2=index;
     },
     mouseout(index){
       this.activePic[index].show=true;
       this.activeName2=null
     },
     mouseonn(index){
      this.activePic2[index].show=false;
      this.activeName2=index-4;
     },
     mouseoutt(index){
       this.activePic2[index].show=true;
       this.activeName2=null
     },
     mouseOn(index){
      this.activePic3[index].show=false;
      this.activeName2=index+4;
     },
     mouseOut(index){
       this.activePic3[index].show=true;
       this.activeName2=null
     },
     mouseOnn(index){
      this.activePic4[index].show=false;
      this.activeName2=index+8;      
     },
     mouseOutt(index){
       this.activePic4[index].show=true;
       this.activeName2=null
     }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped media="all" type="text/css">
@import url("../css/index.css") screen;
</style>
