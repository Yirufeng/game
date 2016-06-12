/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    /**
     * 游戏管理器
     */
    export class GameManager extends event.CustomEvent {

        private static _instance:manager.GameManager;

        public static getInstance():manager.GameManager {
            if (!this._instance) {
                this._instance = new manager.GameManager();
            }
            return this._instance;
        }

        //提示管理
        public alertManager:manager.AlertManager;
        //面板管理
        public panelManager:manager.PanelManager;
        //场景管理
        public sceneManager:manager.SceneManager;

        public constructor() {
            super();
        }

        /**
         * 初始化管理
         */
        public initManager():void {

            this.alertManager = new manager.AlertManager();
            this.panelManager = new manager.PanelManager();
            this.sceneManager = new manager.SceneManager();
        }
    }
}