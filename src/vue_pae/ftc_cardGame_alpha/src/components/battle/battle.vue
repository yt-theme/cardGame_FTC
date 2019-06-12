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

    },
    destory () {
        this.leave_room()
    }
}
</script>

<style scoped>
</style>
