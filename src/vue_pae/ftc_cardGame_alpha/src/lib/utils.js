// 操作 sessionStorage
class handleSessionStorge {
    constructor (obj) {
        this.key   = obj.key || ''
        this.value = obj.value || ''
    }
    // 存入 更新
    update () { sessionStorage.setItem(this.key, this.value) }
    // 取出
    query () { return sessionStorage.getItem(this.key) }
    // 清空
    clear () { sessionStorage.clear() }
    // 删除
    delete () { sessionStorage.removeItem(this.key) }
}

// 查询 sessionStorage
export const querySession = (key) => { return new handleSessionStorge({key: key}).query() }
// 增改 sessionStorage
export const updateSession = (key, value) => { return new handleSessionStorge({key: key, value: value}).update() }
// 清空 sessionStorage
export const clearSession = () => { return new handleSessionStorge().clear() }
// 删除 sessionStorage
export const deleteSession = (key) => { return new handleSessionStorge({key: key}).delete() }