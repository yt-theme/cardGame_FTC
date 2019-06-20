const { CardProperty_model } = require('../db/mongodb')

// 卡属性 存入数据库
CardProperty_model().insertMany([
    {
        id: 'FURRY001/2019.07',
        type: 1,
        img_name: '1.jpg',
        img_url: 'http://127.0.0.1:1234/file/img/1.jpg',

        skill_first_text: '野外生存',
        skill_first_consume_type: 7,
        skill_first_consume: 1,
        skill_first_damage: 0,

        skill_second_text: '星辰之跃',
        skill_second_consume_type: 3,
        skill_second_consume: 3,
        skill_second_damage: 20,

        name: '小狼利牙',
        health: 80,
        role_property: 3,
        recall_assault_consume: 2,
        weakness: 5,
        rsistance: 4
    },
    {
        id: 'FURRY001/2019.07',
        type: 1,
        img_name: '2.jpg',
        img_url: 'http://127.0.0.1:1234/file/img/2.jpg',

        skill_first_text: '野外生存',
        skill_first_consume_type: 7,
        skill_first_consume: 1,
        skill_first_damage: 0,

        skill_second_text: '星辰之跃',
        skill_second_consume_type: 3,
        skill_second_consume: 3,
        skill_second_damage: 20,

        name: '小狼利牙',
        health: 80,
        role_property: 3,
        recall_assault_consume: 2,
        weakness: 5,
        rsistance: 4
    },
    {
        id: 'FURRY001/2019.07',
        type: 1,
        img_name: '3.jpg',
        img_url: 'http://127.0.0.1:1234/file/img/3.jpg',

        skill_first_text: '野外生存',
        skill_first_consume_type: 7,
        skill_first_consume: 1,
        skill_first_damage: 0,

        skill_second_text: '星辰之跃',
        skill_second_consume_type: 3,
        skill_second_consume: 3,
        skill_second_damage: 20,

        name: '小狼利牙',
        health: 80,
        role_property: 3,
        recall_assault_consume: 2,
        weakness: 5,
        rsistance: 4
    }
])