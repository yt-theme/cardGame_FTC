<template>
    <div class="login_container">
        <!-- 登录框 -->
        <div class="login_box">
            <!-- 上部文字框 -->
            <div class="login_box_top">
                <span>Join Game</span>
                <span>Are You Ready?</span>
            </div>
            <div class="login_box_inner">
                <div class="login_box_inner_input_outer">
                    <p>Your name?</p>
                    <input v-model="name" class="login_box_inner_input"/>
                    <p style="font-size: 20px">Click to join ↓</p>
                </div>
            </div>
            <!-- 下部文字框 -->
            <div class="login_box_bottom">
                <span> </span>
                <button @click="login">Go</button>
            </div>
        </div>
    </div>
</template>

<script>
import { updateSession, querySession } from '@/lib/utils'
export default {
    data () {
        return {
            name: ''
        }
    },
    methods: {
        // 登录方法
        login () {
            if (this.name) {
                // 将 name 存入 sessionStorage
                updateSession('userName', this.name)
                if (querySession('userName')) {
                    // 如果有值则跳转路由
                    this.$router.replace('/home')
                }
            }
        }
    }
}
</script>

<style scoped>
.login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: #f1f2f1;
    background-color: #0b3469;
}
.login_box {
    position: relative;
    width: 70vh;
    min-width: 400px;
    max-width: 750px;
    height: 70vh;
    min-height: 400px;
    max-height: 799px;
    box-shadow: 3px 3px 6.1px rgb(2, 14, 31);
    border: 3px solid rgb(50, 96, 165);
    background-color: rgb(8, 38, 84);
    border-radius: 30px;
    padding: 80px 0;
}
.login_box_top *, .login_box_bottom * {
    color: rgb(92, 132, 192);
    font-size: 40px;
}
.login_box_top {
    position: absolute;
    top: 19px;
    left: 30px;
    width: 100%;
    font-weight: bolder;
}
.login_box_top> span:nth-child(2) {
    position: absolute;
    right: 55px;
    bottom: 3px;
    font-size: 20px;
}
.login_box_inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 3px solid rgb(50, 96, 165);
    border-left: 0;
    border-right: 0;
}
.login_box_inner_input_outer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 60px;
}
.login_box_inner_input_outer> p {
    font-size: 30px;
    color: rgb(92, 132, 192);
}
.login_box_inner_input {
    background-color: rgba(0, 0, 0, 0);
    width: 69%;
    height: 60px;
    border: 0;
    font-size: 60px;
    color: rgb(92, 132, 192);
    text-shadow: 0 0 4px rgb(2, 14, 31);
    border-bottom: 3px solid rgb(50, 96, 165);
    text-align: center;
    outline: none;
    margin-top: 5%;
    margin-bottom: 10%;
}
.login_box_bottom {
    position: relative;
    bottom: 0;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login_box_bottom button {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    border: 0;
    font-weight: bolder;
    padding-bottom: 5px;
    outline: none;
}
.login_box_bottom button:hover {
    padding-bottom: 5px;
    text-shadow: 0 0 30px rgb(92, 132, 192);
    transition: all 0.5s;
    cursor: pointer;
}
</style>
