// 场景管理器

// 背景
import { Background } from './scene_component/background'
// 加载资源进度条
import { LoadingBar } from './scene_component/loadingBar'
// 选择卡牌
import { CardPreview } from './scene_component/cardPreview'

export class Scene_manager {
    constructor ({__this__}) {
        // 场景num => 1选择卡牌 2主游戏界面 3结束清算界面
        this.sceneNumber = 1

        // 背景
        this.background  = new Background({'__this__': __this__})
        // 加载进度条
        this.loadingBar  = new LoadingBar({'__this__': __this__})
        // 选择卡牌
        this.cardPreview = new CardPreview({'__this__': __this__})
    }
    init (sceneNumber) {
        this.sceneNumber = sceneNumber || 1
    }
    // 1. 单独放置加载进度条方法
    loading_sence () { let self = this
        return new Promise ((resolve, reject) => {
            self.loadingBar.init().then((v) => { resolve(v) }).catch((err) => { reject(err) })
        })
    }
    // 2. 更新方法
    update () { let self = this
        switch (self.sceneNumber) {
            // 选择卡牌
            case 1:
                break
        }
    }
    // 3. 渲染方法
    render () { let self = this
        switch (self.sceneNumber) {
            // 选择卡牌
            case 1:
                // 背景
                self.background.init()
                self.background.render()
                // 选择卡牌
                self.cardPreview.init()
                self.cardPreview.render()
                break
            // 主游戏界面
            case 2:

                break
        }
    }
}