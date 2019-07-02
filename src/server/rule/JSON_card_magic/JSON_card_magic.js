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
                skill_first_text: `技能[狡诈]和[深渊之火]的伤害效果不再延时判定,伤害直接生效；技能[暗雾]和[冥界再生]造成的混乱效果在对方回合不再投币判定,对方释放技能则直接按混乱生效结算.`,
                skill_first_text_2: `羁绊卡规则:
                将此羁绊卡装载在龙冥或星悸的角色牌上,当二者同时在场上即获得不可驱散的固定效果.若二者 任一一位下场(无论被击败或被替换),羁绊卡效果无法生效.若装载有羁绊卡的角色被击败,则对方奖励3张牌
                `,
                skill_first_consume_type: 0,
                skill_first_consume: 0,
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