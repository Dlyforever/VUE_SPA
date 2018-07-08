<template>
    <div>
         <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="名称">
          </div>
          <div class="form-group">
            <label for="gender">Password</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="性别">
          </div>
         
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>



<script>
// 1 绑定文本框
// 2 添加按钮注册事件
// 3 发送请求 -- 导入axios
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""

      }
    }
  },
  methods: {
    handleAdd () {
      axios
          .post('http://localhost:3000/users',this.formData)
          .then((res)=>{
            const {status,data} =res;
            if (status === 201) {
              // 判断是否成功
              // 添加成功  跳转到英雄列表
             this.$router.push({name: "hero"});
            } else {
              alert('添加失败')
            }
          })
    }
  }
}
</script>

<style>

</style>
