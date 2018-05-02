<template>
   <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div height="60"><h1>Vue+Express</h1></div>
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>控制面板</template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i>卡片消费</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">充值流水</el-menu-item>
            <el-menu-item index="2-2">消费流水</el-menu-item>
            <el-menu-item index="2-2">卡片异常</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-sold-out
"></i>订单管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">Pad订单管理</el-menu-item>
            <el-menu-item index="3-2">Pad学习班</el-menu-item>
            <el-menu-item index="3-2">Pad学习管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>


<script>
export default {
  name: 'Left',
  data:function() {
      return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
