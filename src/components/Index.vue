<template>
  <el-container style="border: 1px solid #eee;width:1100px;margin:0 auto; ">
    <!--左侧边栏-->
   <router-view name="LeftNav" class="us__content us__content--helper"/>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px;padding:0px;position: relative;">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>

        <el-dropdown @command="handleCommand" style="top:22px;right:44px;position:absolute;color:white">
          <i class="el-icon-setting" style="margin-right: 15px;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item command='logout'>登出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="position: absolute; top: 22px; right: 18px;color:white;">admin</span>

      </el-header>

      <router-view class ="us__content"/>
      
    </el-container>
  </el-container>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods:{
      handleCommand:function(command){
        if(command == 'logout'){
          this.util.delCookie('UID');
          this.$router.push("/login");
        }
      }
    }
  };
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>
