const { Model_mongodb } = require('./model/model')
const { Test_schema, CardProperty_schema } = require('./schema/schema')
const { MONGODB_URL, MONGODB_PORT, MONGO_DBNAME} = require('../../../../config')

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
const test_schema = Test_schema(mongoose)

// 卡牌 schema
const cardProperty_schema = CardProperty_schema(mongoose)

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