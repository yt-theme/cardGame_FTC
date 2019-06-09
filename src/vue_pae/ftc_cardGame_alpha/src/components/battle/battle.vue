<template>
    <div class="home_battleLogin_container">
       battle
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
        // 退出房间
        leave_room () {
            this.$socket.emit('leave')
        }
    },
    mounted () {
        // this.inviteCode = querySession('inviteCode')
        // if (this.inviteCode) {
        //     // 连接 socket
        //     this.$socket.emit('join', {
        //         "inviteCode": this.inviteCode
        //     })
        //     // 接受信息
        //     this.$socket.on('system', (msg) => {
        //         console.log('system =>', msg)
        //     })
        // }
    },
    destory () {

    }
}
</script>

<style scoped>
</style>
