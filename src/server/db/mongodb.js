const { Model_mongodb } = require('./model_mongodb/model_mongodb')
const { MONGODB_URL, MONGODB_PORT, MONGO_DBNAME} = require('../../../config')

const mongoose = require('mongoose')
mongoose.connect(MONGODB_URL + ':' + MONGODB_PORT + '/' + MONGO_DBNAME,
    {
        useNewUrlParser: true
    },
    (err) => {
        if (err) {
            console.log('mongo 连接失败 =>', err)
            return false
        }
        console.log('mongo 连接成功')
    }
)

// ################# 定义 ################
// test 库 schema
const test_schema = mongoose.Schema({
    name: String,
    text: String,
})

// 卡牌属性表
const cardProperty_schema = mongoose.Schema({
    // 卡牌编号
    id: {
        type: String,
        index: true // id 为索引
    },
    
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
    // 第一技能介绍
    skill_first_text: String,
    // 第一技能消耗的能量类型 => 1光 2暗 3水 4火 5风 6通用 7特殊
    skill_first_consume_type: Number,
    // 第一技能消耗的能量
    skill_first_consume: Number,
    // 第一技能伤害参考
    skill_first_damage: Number,

    // 第二技能介绍
    skill_second_text: String,
    // 第二技能消耗的能量类型 => 1光 2暗 3水 4火 5风 6通用 7特殊
    skill_second_consume_type: Number,
    // 第二技能消耗
    skill_second_consume: Number,
    // 第二技能伤害参考
    skill_second_damage: Number,
    
    /**
     * 基本性质
     */
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

// ################# 模型 ################

module.exports = {
    // 测试 model
    Test_model:         () => { return new Model_mongodb({ 
                            "mongoose":        mongoose,
                            "schema":          test_schema,
                            "collection_name": 'Test',
                            "collection":      'test'
                        })},
    // 卡牌属性 model
    CardProperty_model: () => { return new Model_mongodb({ 
                            "mongoose":        mongoose,
                            "schema":          cardProperty_schema,
                            "collection_name": 'Card_property',
                            "collection":      'card_property'
                        })},
}