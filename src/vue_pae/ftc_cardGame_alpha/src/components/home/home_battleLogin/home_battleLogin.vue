<template>
    <div class="home_battleLogin_container">
        <ul class="home_battleLogin_invite_ul">
            <li>输入邀请码</li>
            <li>
                <input v-model="inviteCode" class="home_battleLogin_invite_input"/>
            </li>
            <li class="home_battleLogin_createCode">
                没有邀请码? <a href="javascript:void(0)" @click="queryCreateCode">现在创建</a> 开启约战
            </li>
        </ul>
        <!-- 匹配按钮 -->
        <div v-if="inviteCode" class="home_battleLogin_match">
            <button @click="battle">开战</button>
        </div>
        <!-- 为准备状态 匹配按钮 -->
        <div v-if="! inviteCode" class="home_battleLogin_match_not">
            <button>开战</button>
        </div>
    </div>
</template>

<script>
import { api_createInviteCode } from '@/lib/api.js'
import { querySession, updateSession } from '@/lib/utils.js'
export default {
    data () {
        return {
            inviteCode: ''
        }
    },
    watch: {
        '$route' () {
            
        }
    },
    methods: {
        // 创建随机数
        queryCreateCode () {
            // 请求邀请码
            api_createInviteCode({
                'user_name': querySession('userName') || ''
            }).then((v) => {
                console.log('v', v)
                if (v['status'] === 200 && v['data']['stat'] === 1 && v['data']['data']) {
                    this.inviteCode = v['data']['data']
                    // 邀请码存入本地
                    updateSession('inviteCode', v['data']['data'])
                }
            }).catch((err) => {

            })
        },
        // 战斗开始
        battle () {
            // 检查是否存在邀请码
            if (this.inviteCode) {

                this.$socket.emit('joinroom', { inviteCode: this.inviteCode })
                // // 连接 socket
                // this.$socket.emit('joinRoom', { "inviteCode": this.inviteCode }, (data) => {
                //     // console.log("加入房间回调 =>", data)

                //     setInterval(() => {
                //         this.$socket.emit('sendMsg', "client消息 =>" + this.inviteCode, (data) => {
                //             console.log('sendMsg 消息回调 =>', data)
                //         })
                //     }, 3000)
                // })
            }
        }
    },
    sockets: {
        // 接受信息
        connect () {
            console.log('socket server connected')
        },
        // 测试登录
        logins (value) {
            console.log('logins vue =>', value)
        },
        // 接受系统消息
        systemmsg (value) {
            console.log('system msg =>', value)
        }
        // // 系统消息
        // systemMsg: function (data) {
        //     console.log("systemMsg =>", data)
        // }
    }
}
</script>

<style scoped>
.home_battleLogin_container {
    position: relative;
    width: 65vh;
    min-width: 400px;
    max-width: 750px;
    height: 65vh;
    min-height: 400px;
    max-height: 799px;
    box-shadow: 3px 3px 6.1px rgb(2, 14, 31);
    border: 3px solid rgb(50, 96, 165);
    background-color: rgb(8, 38, 84);
    border-radius: 30px;
}
.home_battleLogin_container * {
    color: rgb(128, 166, 223);
}
.home_battleLogin_invite_ul {
    list-style: none;
    padding: 30px;
}
.home_battleLogin_invite_ul> li {
    font-size: 2em;
}
.home_battleLogin_invite_input {
    width: 100%;
    border: 0;
    border-bottom: 3px solid rgb(50, 96, 165);
    background-color: rgba(0, 0, 0, 0);
    font-size: 1.5em;
    text-align: left;
    letter-spacing: 0.2em;
    margin: 1em 0;
    outline: none;
    transition: all 0.5s;
}
.home_battleLogin_invite_input:focus {
    border-bottom: 3px solid rgb(128, 166, 223);
    transition: all 0.5s;
}
.home_battleLogin_invite_ul .home_battleLogin_createCode {
    font-size: 16px;
}
.home_battleLogin_invite_ul .home_battleLogin_createCode a {
    font-size: 16px;
    transition: all 0.5s;
}
.home_battleLogin_invite_ul .home_battleLogin_createCode a:hover {
    color: rgb(50, 96, 165);
    transition: all 0.5s;
}
.home_battleLogin_match, .home_battleLogin_match_not {
    position: absolute;
    bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.home_battleLogin_match> button, .home_battleLogin_match_not> button {
    background-color: rgb(12, 65, 145);
    border: 0;
    color: rgb(143, 171, 212);
    font-size: 2em;
    padding: 0.5em 3em;
    border-radius: 10px;
    box-shadow: 3px 3px 6.1px rgb(2, 14, 31);
    cursor: pointer;
    outline: none;
}
.home_battleLogin_match_not> button {
    color: rgb(50, 96, 165);
    background-color: rgb(8, 38, 84);
    cursor: no-drop;
}
</style>
