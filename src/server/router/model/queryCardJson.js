// 查卡牌列表

// 生成邀请码
const queryString = require('querystring')

// redis
const { Redis_client } = require('../../db/db')

class QueryCardJson {
    constructor (req, res) {
        this.req = req
        this.res = res
    }
    post () { const req=this.req, res=this.res
        return new Promise ((reject, resolve) => {
            // 返回数据
            res.json({
                'role': [
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    }
                ],
                'magic': [
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                     {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    },
                    {
                        "card_name": '1.jpg',
                        "card_url": 'http://127.0.0.1:1234/file/img/1.jpg',
                        "card_info": {
                            "first": "fsfafa",
                            "second": "wrwrw",
                            "proto": "sfsfs"
                        }
                    }
                ]
            })
        })
    }
}

module.exports = {
    QueryCardJson
}