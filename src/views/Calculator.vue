<template>
    <div class="welcome-container">
      <div class="welcome-box">
        <h1>欢迎使用平衡位计算器</h1>
        <div>请在输入框里面输入一个数组(逗号隔开):</div>
        <div class="text-box">
          <input type="text" class="input-box" v-model="arrayStr" @blur="checkInput">
          <div class="warning">{{warnStr}}</div>
        </div>

        <div class="btn-box">
          <div class="computed-btn" @click="getBalanceOne">计算</div>
          <div class="clickWarn">{{clickWarn}}</div>
        </div>

        <div class="res-container">
          <div style="color: deepskyblue">平衡位是(不存在显示-1)</div>
          <div class="res-box">{{balanceNum}}</div>
        </div>
        <router-link to="/resize">
          <button>去看看rezie监听</button>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      arrayStr: '',
      warnStr: '',
      clickWarn: '',
      balanceNum: null
    }
  },
  methods: {
    // 离焦检验输入是否合法
    checkInput () {
      const regStr = /^[0-9,]*$/
      if (!regStr.test(this.arrayStr)) {
        this.warnStr = '输入不合法,请重新输入'
      } else {
        this.warnStr = ''
      }
    },
    getBalanceOne () {
      const regStr = /^[0-9,]*$/
      if (!regStr.test(this.arrayStr)) {
        this.clickWarn = '输入不合法,无法计算'
      } else {
        this.clickWarn = ''
        let numArray = this.arrayStr.split(',')
        // 将字符串转成int数组
        numArray = numArray.map(item => {
          return parseInt(item)
        })

        let leftSum = 0
        let rightSum = 0
        for (let i = 1; i < numArray.length; i++) {
          rightSum += numArray[i]
        }
        for (let i = 1; i < numArray.length; i++) {
          leftSum += numArray[i - 1]
          rightSum -= numArray[i]
          if (leftSum === rightSum) {
            this.balanceNum = i
            return
          }
        }
        this.balanceNum = -1
      }
    }

  }
}
</script>

<style scoped lang="scss">
  .welcome-container{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("./../assets/bj.jpg") no-repeat;
    background-size: cover;

    .welcome-box{
      width:400px;
      height: 500px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      padding: 20px;
      border:  #dcdfe6 2px solid;
      border-radius: 10px;
      box-shadow: 0 0 30px #dcdfe6;
      color: orangered;
      h1{
        text-align: center;
        color:deepskyblue;
        margin: 0 0 20px 0;
        padding: 0;
        /*font-family:STKaiti;*/
      }
      .text-box{
        height: 80px;
        .input-box{
          margin-top: 10px;
          width: 300px;
          background: none;
          height: 40px;
          font-size: larger;
          color: orangered;
        }
        .warning{
          color: red;
        }

      }
      .btn-box{
        height: 80px;
        .computed-btn{
          width: 150px;
          height: 40px;
          border-radius: 5px;
          background: green;
          margin: 20px 0 0 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }
        .clickWarn{
          color: deepskyblue;
        }
      }
      .res-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .res-box{
          width: 200px;
          height: 40px;
          border: 1px solid #ccc;
          line-height: 40px;
          font-size: 40px;
          font-weight: bolder;
          color: orangered;
        }
      }
      button{
        display: block;
        margin: 50px auto;
        background: #3361D8;
        width: 200px;
        height: 40px;
        font-size: 20px;
        color: orangered;
        text-decoration: none;
        border-radius: 20px;
      }
    }
  }

</style>
