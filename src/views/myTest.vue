<template>
    <div class="div">
      <table border="1" cellspacing="0">
        <caption>用户列表</caption>
        <tbody>
     <tr v-for="user in userList" :key="user.id">
       <td>{{user.id}}</td>
       <td>{{user.name}}</td>
       <td>{{user.age}}</td>
       <td>{{user.gender}}</td>
     </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
// import { AxiosInstance as axios } from 'axios'

export default {
  name: 'myTest',
  data: function () {
    return {
      userList: [
        {
          id: 1,
          name: 'Tom',
          age: 12,
          gender: '男'
        },
        {
          id: 2,
          name: 'Jerry',
          age: 14,
          gender: '女'
        }
      ]
    }
  },
  methods: {},
  created () {
    console.log('created')
    this.$axios.get('http://localhost:8081/getUserList').then(d => {
      console.log(d.data.code)
      console.log(d.data.data)
      this.userList = d.data.data
    })
  }
}
</script>
<style scoped>
  .div{
    margin: 0 auto;
    width: 300px;
    height: 200px;
  }
</style>
