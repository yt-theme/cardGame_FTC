// 魔法牌

const { CARD_STATIC_PATH_MAGIC } = require("../../../../config")

const JSON_card_magic = () => {
    return [
        {
            id: 'BOND002/201907',
            type: 3, // 1角色牌 2魔法牌 3魔法牌羁绊卡
            img_name: 'b2.jpg',
            img_url: CARD_STATIC_PATH_MAGIC + '/b2.jpg',
    
            skill_first: [{
                skill_first_text: '野外生存',
                skill_first_consume_type: 7,
                skill_first_consume: 1,
                skill_first_damage: 0,
            }],
    
            skill_second: [{
           
            }],
    
            name: '坠入奈落之底',
            health: 0,
            role_property: 0,
            recall_assault_consume: 0,
            weakness: 0,
            rsistance: 0
        },
    ]
}

module.exports = {
    JSON_card_magic
}