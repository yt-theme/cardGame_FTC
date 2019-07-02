const { CardProperty_model } = require('../db/mongodb/mongodb')

// 魔法牌json => arr
const { JSON_card_magic } = require('./JSON_card_magic/JSON_card_magic')
// 角色牌json => arr
const { JSON_card_role } = require('./JSON_card_role/JSON_card_role')

// 卡属性 存入数据库
CardProperty_model().insertMany(

    // ######################## 卡牌 ######################
    // 两个函数返回的数组合并
    JSON_card_magic().concat(JSON_card_role())

)