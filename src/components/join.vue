<template>
  <div class="hello">
    <ul>
      <li class="businessLogo"><img src="../assets/haokuLogo.png" class="businessLogo"></li>
      <li v-for="(menu,index) in NavMenu" class="menuItem" @click="navMenu(index)" v-bind:class="{active: activeName1 == index}" >{{menu.title}}</li>
      <li class="qqLogo"><img src="../assets/qq.png" class="qqLogo"></li>
    </ul>
    <div class="Joinbanner">
    </div>
    <div class="bottleNeck">
       <img src="../assets/title8.png" class="title7">
       <div class="example">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center" style="margin-right: 0;margin-left: 0">
          <el-col :span="3" v-for="(bottleneck,index) in bottleNeck">
            <el-card :body-style="{ padding: '0px' }" style="height: auto" v-bind:class="{moveChange: activeName2 == index}">
              <img :src="bottleneck.pic" class="image">
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="search">
    
      </div>
      <div class="searchContent">
        <el-input v-model="input" placeholder="请输入内容" class="searchInput"></el-input>
        <img src="../assets/searchButton.png" class="searchImg">
        <img src="../assets/ho-t.png" class="searchHot">
        <p class="hotContent">热招岗位：Java高级工程师&nbsp&nbsp商务经理&nbsp&nbsp运维员</p>
      </div>
    </div>

    <div class="bottleNeck">
    <div class="pagebottom">
      <div style="width:70%;height:auto;margin:0 auto;position:relative;">
       <img src="../assets/m.png" class="bussinessLogo" style="width: 10rem;height: auto;float: left;">
       <p style="float: left;display: inline-block;color: white;width:60%">首页&nbsp&nbsp|&nbsp&nbsp产品&nbsp&nbsp|&nbsp&nbsp案例&nbsp&nbsp|&nbsp&nbsp商务方式&nbsp&nbsp|&nbsp&nbsp关于我们&nbsp&nbsp|&nbsp&nbsp加入我们</br></br>广州好酷科技有限公司&nbsp&nbsp联系电话：020-39106900&nbsp&nbsp联系地址：广州番禺区番禺大道北555号番禺节能科技园创新大厦618&nbsp&nbsp展厅地址：广州番禺迎新东路星力动漫游戏产业园J128&nbsp&nbsp版权所有：Copyright@好酷科技&nbsp&nbsp粤ICP备16091001号-1</p>
       <img src="../assets/n.png" class="Code" style="width: 7rem;height:auto;float: right;">
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
  export default {
    name: 'hello',
    data() {
      return {
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
        }]

      }
    },
    methods: {
     navMenu(index){
      this.activeName1=index;
     },
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
.search{
  position: relative;
  width: 75%;
  height: 9rem;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #eee;
  opacity: 0.7;
  margin: 2rem auto;
  display: inline-block;
}
.searchContent{
  position: relative;
  width: 75%;
  height: 9rem;
  padding: 2rem;
  box-sizing: border-box;
  display: inline-block;
  top: -11rem;
}
.searchInput{
  width: 20rem;
  height:6rem;
  float: left;
}
.searchImg{
  width: 9.5rem;
  height: auto;
  float: left;
}
.searchHot{
  width: 4rem;
  height: auto;
  float: left;
  margin-left: 1.5rem;
}
.hotContent{
  float: right;
  width: 40%;
  font-size: 1.2rem;
}
</style>
