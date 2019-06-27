// 测试
const Test_schema = (mongoose) => {
    return mongoose.Schema({
        name: String,
        text: String,
    })
}

// 卡牌属性表
const CardProperty_schema = (mongoose) => {
    return mongoose.Schema({
        // 卡牌编号
        id: {
            type: String,
            index: true // id 为索引
        },
        // 卡牌类型 => 1角色牌 2魔法牌
        type: Number,
        
        /**
         * 文件属性
         */
        // 图片名
        img_name: String,
        // 图片地址
        img_url: String,

        /**
         * 技能
         */
        // first 技能
        skill_first: [{
            // 第一技能介绍
            skill_first_text: String,
            // 第一技能消耗的能量类型 => 1光 2暗 3水 4火 5风 6通用 7特殊
            skill_first_consume_type: Number,
            // 第一技能消耗的能量
            skill_first_consume: Number,
            // 第一技能伤害参考
            skill_first_damage: Number,
        }],
        // second 技能        
        skill_second: [{
            // 第二技能介绍
            skill_second_text: String,
            // 第二技能消耗的能量类型 => 1光 2暗 3水 4火 5风 6通用 7特殊
            skill_second_consume_type: Number,
            // 第二技能消耗
            skill_second_consume: Number,
            // 第二技能伤害参考
            skill_second_damage: Number,
        }],
        
        /**
         * 基本性质
         */
        // 名称
        name: String,
        // 生命值
        health: Number,
        // 角色属性 => 1光 2暗 3水 4火 5风 6通用 7特殊
        role_property: Number,
        // 召回/冲锋消耗
        recall_assault_consume: Number,
        // 弱点 => 角色属性 => 1光 2暗 3水 4火 5风 6通用 7特殊
        weakness: Number,
        // 抵抗
        rsistance: Number
    })
}

module.exports = {
    // 测试
    Test_schema,
    // 卡牌属性表
    CardProperty_schema
}