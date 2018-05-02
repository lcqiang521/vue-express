<template>
  <el-form ref="form" :model="form" label-width="80px" style="width:400px;margin:0 auto;">
    <el-form-item label="账号">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
  
</template>

<script>
export default {
  name: 'Login',
  data:function(){
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        if(this.form.username && this.form.password ){
            //this.$router.push({ path: '/settings', query: { id: 'private' }})
            // var user = this.jquery.ajax({
            //   url:"/api/v1/user/login",
            //   async:false,
            //   dataType:'json',
            //   data:{'handle': this.form.username,'password':this.form.password }
            //   });
            // var userd = user.responseJSON;

            //if(userd.status == 0){
            if(this.form.username != 'admin' || this.form.password != 111111){
              this.$message.error('账号或密码错误!');
            }else{
              //浏览器本地缓存
              //localStorage.setItem('User', JSON.stringify(userd.data));
              //this.store.commit('updateUser',JSON.stringify(userd.data));
              this.util.setCookie('UID',11111,2);
              this.$router.push('/index/teacher')
            }
        }else{
            this.$message.error('账号密码不能为空!');
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
