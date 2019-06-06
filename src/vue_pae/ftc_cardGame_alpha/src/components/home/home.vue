<template>
    <div class="home_container">
        <!-- 角色牌 标签页 -->
        <div ref="tabs_container_role" class="tabs_container tabs_role">
            <div class="tabs_content">

            </div>
            <!-- 小标签部分 -->
            <div @click="click_roleTag" class="tabs_little_tag">
                角色牌
            </div>
        </div>
        <!-- 魔法牌 标签页 -->
        <div ref="tabs_container_magic" class="tabs_container tabs_magic">
            <div class="tabs_content">

            </div>
            <!-- 小标签部分 -->
            <div @click="click_magicTag" class="tabs_little_tag">
                魔法牌
            </div>
        </div>
        <!-- 对战登录框 -->
        <div class="battleLogin_container">
            <Homebattlelogin></Homebattlelogin>
        </div>
    </div>
</template>

<script>
import Homebattlelogin from './home_battleLogin/home_battleLogin'
export default {
    components: {
        Homebattlelogin
    },
    data () {
        return {
            roleTag_toggle: true,
            magicTag_toggle: true
        }
    },
    methods: {
        // 点击了 角色牌 tag
        click_roleTag () {
            if (this.roleTag_toggle) {
                this.$refs.tabs_container_role.setAttribute('class', 'tabs_container tabs_container_active tabs_role')
                this.roleTag_toggle = false
                if (this.magicTag_toggle === false) {
                    this.$refs.tabs_container_magic.setAttribute('class', 'tabs_container tabs_container_active_close tabs_magic')
                    this.magicTag_toggle = true
                }
            } else {
                this.$refs.tabs_container_role.setAttribute('class', 'tabs_container tabs_container_active_close tabs_role')
                this.roleTag_toggle = true
            }
        },
        // 点击了 魔法卡 tag
        click_magicTag () {
            if (this.magicTag_toggle) {
                this.$refs.tabs_container_magic.setAttribute('class', 'tabs_container tabs_container_active tabs_magic')
                this.magicTag_toggle = false
                if (this.roleTag_toggle === false) {
                    this.$refs.tabs_container_role.setAttribute('class', 'tabs_container tabs_container_active_close tabs_role')
                    this.roleTag_toggle = true
                }
            } else {
                this.$refs.tabs_container_magic.setAttribute('class', 'tabs_container tabs_container_active_close tabs_magic')
                this.magicTag_toggle = true
            }
        }
    }
}
</script>

<style scoped>
.home_container {
    background-color: #0b3469;
}
@keyframes tabs_container_dropDown {
    0% { top: calc(-80vh - 6px); }
    100% { top: 10vh; }
}
@keyframes tabs_container_dropDown_close {
    0% { top: 10vh; }
    100% { top: calc(-80vh - 6px); }
}
.tabs_container {
    position: absolute;
    left: 5vw;
    top: calc(-80vh - 6px);
    width: 90vw;
    height: 80vh;
    background-color: rgb(50, 96, 165);
    box-shadow: 3px 3px 6.1px rgb(2, 14, 31);
    border-radius: 30px;
}
.tabs_container_active {
    animation: tabs_container_dropDown 0.5s;
    animation-fill-mode: forwards;
}
.tabs_container_active_close {
    animation: tabs_container_dropDown_close 0.5s;
    animation-fill-mode: forwards;
}
.tabs_role {

}
.tabs_magic {
    /* left: 20%; */
}
.tabs_content {

}
.tabs_little_tag {
    position: absolute;
    left: 30px;
    bottom: -10%;
    width: 14%;
    min-width: 170px;
    max-width: 200px;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 6.1px rgb(2, 14, 31);
    background-color: rgb(50, 96, 165);
    border-radius: 0 0 15px 15px;
    font-size: 2.3em;
    color: rgb(128, 166, 223);
    cursor: pointer;
}
.tabs_container:nth-child(2) .tabs_little_tag {
    left: calc(5vw + 170px);
}
.battleLogin_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>
