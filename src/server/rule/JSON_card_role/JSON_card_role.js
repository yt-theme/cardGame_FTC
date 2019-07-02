// 角色牌

const { CARD_STATIC_PATH_ROLE } = require("../../../../config")

const JSON_card_role = () => {
    return [

        // ------------------------------------------------------------
        {
            id: 'FURRY001/2019.07',
            type: 1, // 1角色牌 2魔法牌 3魔法牌羁绊卡
            img_name: '1.jpg',
            img_url: CARD_STATIC_PATH_ROLE + '/1.jpg',
    
            skill_first: [{
                skill_first_title: '野外生存',
                skill_first_text: '利牙适应严酷的环境习得的生存技能.以自身20生命换取本回合能量增加1(可在替补席激活状态下释放)',
                skill_first_text_2: '',
                skill_first_consume_type: 7,
                skill_first_consume: 1,
                skill_first_damage: 0,
            }],
    
            skill_second: [{
                skill_second_title: '星辰之跃',
                skill_second_text: '向着彼岸的星光狂奔!对对方单体50水伤害,并投1枚硬币,正面朝上则技能伤害增加20.',
                skill_second_text_2: '',
                skill_second_consume_type: 3,
                skill_second_consume: 3,
                skill_second_damage: 20,
            }],
    
            name: '小狼利牙',
            health: 130,
            role_property: 3,
            recall_assault_consume: 1,
            weakness: 5,
            rsistance: 4,
            story: '生活在冰原中的小狼利牙被逐出了家园,胸口留下了暗红色伤痕.他独自眺望远方,追逐着地平线彼岸的星光'
        },

        // ------------------------------------------------------------
        
        {
            id: 'FURRY002/2019.07',
            type: 1, // 1角色牌 2魔法牌 3魔法牌羁绊卡
            img_name: '2.jpg',
            img_url: CARD_STATIC_PATH_ROLE + '/2.jpg',
    
            skill_first: [{
                skill_first_title: '动如脱兔',
                skill_first_text: '兔龙莫卿轻盈地避开攻击,源源不断地从牌库取来手牌.抽一张牌(该技能可在替补席激活状态下释放).',
                skill_first_text_2: '',
                skill_first_consume_type: 4,
                skill_first_consume: 1,
                skill_first_damage: 0,
            }],
    
            skill_second: [{
                skill_second_title: '星爆',
                skill_second_text: '燃尽己方本回合全部剩余能量,造成单体20x星爆消耗能量的火伤害,对自己造成10x星爆消耗能量的火伤害.',
                skill_second_text_2: '',
                skill_second_consume_type: 7,
                skill_second_consume: 1,
                skill_second_damage: 20,
            }],
    
            name: '莫卿',
            health: 110,
            role_property: 4,
            recall_assault_consume: 0,
            weakness: 3,
            rsistance: 5,
            story: '从火花中迸射出的一颗火星,化成了一只活蹦乱跳的兔子,天赐给他这生命,他将珍惜这次机会去探索这奇妙的世界'
        },

        // ------------------------------------------------------------
    ]
}

module.exports = {
    JSON_card_role
}