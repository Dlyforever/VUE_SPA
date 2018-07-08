<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
        <router-link class="btn btn-success" :to='{name: "heroadd"}'>Add</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="item.id"  v-for="(item,index) in list">
                    <td>{{ index +1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

// 组件里的data是函数

export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        // 调用加载数据的方法
        this.loadData();
    },
    methods: {
        loadData() {
           axios.get('http://localhost:3000/users')
                .then((res)=>{
                    const {status,data} = res;
                    if (status === 200) {
                        this.list= data;
                    }
                })     
        },
        handleDelete(id) {
            // 删除的提示  如果取消删除  则不再执行删除请求
            if( !confirm("确定删除吗") ) {
                return;
            }
            axios
                .delete(`http://localhost:3000/users/${id}`)
                .then((res)=>{
                    if (status === 200) {
                        // 删除成功  重新渲染
                        this.loadData();
                    } else {
                        alert('删除失败')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
}
</script>

<style>

</style>

