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
    </div>
    <div class="Job">
       <img src="../assets/title8.png" class="title8">
       <div class="example">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;margin-top:45px;padding-bottom: 57px ">
          <el-col :span="3" v-for="(bottleneck,index) in bottleNeck" style="width: 146px;height: 171px">
            <div :body-style="{ padding: '0px' }" style="height: auto">
              <img :src="bottleneck.pic" class="image">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="search">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0;margin-top: 0;padding-bottom:0">
          <el-col :span="3" style="width:856px;height:85px">
          </el-col>
        </el-row>
      </div>
      <div class="searchContent">
        <input autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner" style="border: 1px solid #fff;width: 268px;height: 40px;border-radius: 0;position: absolute;left: 13px;top: 21px;" v-model="searchContent">
        <img src="../assets/searchButton.png" class="searchImg" @click="search">
        <img src="../assets/ho-t.png" class="searchHot">
        <p class="hotContent">热招岗位：Java高级工程师&nbsp&nbsp商务经理&nbsp&nbsp运维员</p>
      </div>
      <div class="searchContent2">
        <h4 class="Jobtitle">急招职位</h4>
        <ul class="Joblist">
          <li v-for="(job,index) in Jobs" :class="{color:job.color}">
            <p class="JobName">{{job.name}}</p>
            <img :src="job.button" class="LearnMoreButton" @mouseover="mouseOn(index)" @mouseout="mouseOut(index)" @click="onclick(index)">
          </li>
        </ul>
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
import button1 from "../assets/More.png"
import button2 from "../assets/Moremouse.png"
import button3 from "../assets/Moreclick.png"
  export default {
    name: 'hello',
    data() {
      return {
        activePic:[{show:true},{show:true},{show:true},{show:true},{show:true},{show:true}],
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
        bottleNeck:[{
          id:0,
          pic:pic1
        },{
          id:1,
          pic:pic2
        },{
          id:2,
          pic:pic3
        },{
          id:3,
          pic:pic4
        },{
          id:4,
          pic:pic5
        },{
          id:5,
          pic:pic6
        }],
        Jobs:[{
          id:0,
          name:'Java高级开发工程师',
          button:button1,
          color:false,
        },{
          id:1,
          name:'Java中级开发工程师',
          button:button1,
          color:true,
        },{
          id:2,
          name:'商务经理',
          button:button1,
          color:false,
        },{
          id:3,
          name:'商务助理',
          button:button1,
          color:true,
        },{
          id:4,
          name:'运维员',
          button:button1,
          color:false,
        },{
          id:5,
          name:'Java中级开发工程师',
          button:button1,
          color:true,
        }],
        searchContent:'',
        Jobbb:[],

      }
    },
    created(){
        this.fuzhi();
    },
    methods: {
     navMenu(index){
      this.activeName1=index;
      if(index==5){
        this.$router.push("/join") 
      }
      if(index==1){
        this.$router.push("/product") 
      }
     },
     mouseOn:function(index){
       this.Jobs[index].button = button2;
     },
      mouseOut:function(index){
       this.Jobs[index].button = button1;
     },
     onclick(index){
       this.Jobs[index].button = button3;
     },
     fuzhi(){
       this.Jobbb = this.Jobs;
     },
     search(){
       this.Jobs=[];
       console.log(this.searchContent);
       for(let i=0;i<this.Jobbb.length;i++){
          for(let a=0;a<this.Jobbb[i].name.length;a++){
            for(let m=a;m<this.Jobbb[i].name.length;m++){
                  if(this.searchContent==this.Jobbb[i].name.slice(a,m+1)){
                  console.log(this.Jobbb[i]);
                  this.Jobs.push(this.Jobbb[i]);
                  }
            }
          }
       }
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
    background-image: url('../assets/Joinbanner.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    /* Firefox */
    -webkit-box-sizing: border-box;
    /* Safari */
    padding-top: 10%;
    clear: both;
}
.Job{
    position: relative;
    width: 100%;
    padding-top: 3.6rem;
    height: auto;
}
.InternPosition{
  width: 100%;
  height: auto;
  margin-top: 37px;
  position: relative;
}
.Jobtitle{
  width: 100px;
  height: 19px;
  font-family: FZZZHONGJW-GB1-0;
  font-size: 20px;
  line-height: 3.6;
  letter-spacing: 1px;
  color: #000000;
  margin-left: 19px;
}
.searchContent2 ul{
  width:  856px;
  height:auto;
  position: relative;
  margin-top: 30px;
  margin-bottom:54px; 
}
.searchContent2 ul li{
  width: 856px;
  height: 38px;
  list-style:none;
  position: relative;
  top: 14px
}
.title8{
    width: 100%;
    height:100%;
  }
.search{
    position: absolute;
    width: auto;
    background-color: #eee;
    opacity: 0.7;
    /* margin: 2rem auto; */
    display: inline-block;
    /* left: 25%; */
    height: auto;
}
.searchContent{
    position: relative;
    width: 856px;
    height: 85px;
    /* padding: 2rem; */
    box-sizing: border-box;
    display: inline-block;
    /* top: -9rem; */
    /* left: -25%; */
    /* top: 1rem; */
}
.searchContent2{
    position: relative;
    width: 856px;
    height:auto;
    /* padding: 2rem; */
    box-sizing: border-box;
    /* top: -9rem; */
    /* left: -25%; */
    /* top: 1rem; */
    margin: 0 auto;
}
.color{
  background-color: #f8f8f8
}

.searchImg{
  width:127px;
  height:40px;
  position: absolute;
  left: 279px;
  top: 21px;
}
.searchHot{
  width:40px;
  height: 16px;
  position: absolute;
  left: 430px;
  top: 34px;
}
.hotContent{
  width:327px;
  height:14px;
  font-family: FZLTHK-GBK1-0;
  font-size: 14px;
  line-height: 5.14;
  letter-spacing: 0.7px;
  text-align: left;
  color: #333333;
  position: absolute;
  left: 481px;
  top:5px;
}
.JobName{
    width: 200px;
    height: 16px;
    font-family: FZLTXHK-GBK1-0;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.8px;
    text-align: left;
    color: #333333;
    position: absolute;
    left: 16px;
    top: 10px;
}
.LearnMoreButton{
  width: 89px;
  height: 25px;
  position:absolute;
  left: 724px;
  top: 7px;
}

</style>
