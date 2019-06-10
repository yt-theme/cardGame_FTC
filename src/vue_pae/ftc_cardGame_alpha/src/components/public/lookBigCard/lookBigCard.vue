<template>
    <!-- 查看卡牌大图     -->
    <div class="lookBigCard_container">
        <!-- 图片区域 -->
        <div class="lookBigCard_imageArea">
            <img :src="src"/>
        </div>
        <!-- 文字区域 -->
        <div class="lookBigCard_textArea">
            <ul>
                <!-- 属性 介绍区域 -->
                <!-- <li>{{text.property}}</li> -->
                <!-- 技能1 介绍区域 -->
                <!-- <li>{{text.skill_first}}</li> -->
                <!-- 技能2 介绍区域 -->
                <!-- <li>{{text.skill_second}}</li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['src', 'text']
}
</script>

<style>
.lookBigCard_container {
    width: 100%;
    height: 100%;
    border: 1px solid #4525de;
    background-color: rgba(0, 0, 0, 0.6);
    color: rgb(128, 166, 223);
}
.lookBigCard_imageArea {

}
.lookBigCard_imageArea> img {
    width: 100%;
    height: auto;
}
.lookBigCard_textArea {

}
.lookBigCard_textArea> ul {
    list-style: none;
}
</style>
