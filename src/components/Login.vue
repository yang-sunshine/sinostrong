<!--  -->
<template>
  <div class="bg">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" class="login-style">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="login-style">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="记住密码" class="login-style">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                password: "",
                delivery: false
            }
        };
    },
    mounted (){


       this.$axios.post("publicNumber/getToken",{params:{companyCode:'ruixue_dev',certificate:"sinoStrong"}}).then(res=>{
        // this.$axios.get("ruixue_dev/channel/config/isActive",{params:{certificate:"sinoStrong"}}).then(res=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        })
    },
    methods: {
        onSubmit() {
            if (this.form.name == "" || this.form.password == "") {
                this.$message({
                    message: "必填项没有填写",
                    type: "warning"
                });
            } else {
                this.$router.push({ path: "/Navigation" });
            }
        }
    }
};
</script>

<style lang='stylus' scoped>
.bg {
  background: url('../assets/login/bnar.jpg') center #22781A;
  height: 400px;
  background-size: cover;
}

form {
  position: absolute;
  right: 20%;
  top: 15%;
}

.login-style {
  font-size: 20px;
  font-weight: bolder;
  color: #fff !important;
}
</style>

