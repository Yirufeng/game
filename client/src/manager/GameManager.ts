/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    export class GameManager extends event.CustomEvent {

        private static _instance:manager.GameManager;

        public static getInstance():manager.GameManager {
            if (!this._instance) {
                this._instance = new manager.GameManager();
            }
            return this._instance;
        }

        //��ʾ����
        public alertManager:manager.AlertManager;
        //������
        public panelManager:manager.PanelManager;
        //��������
        public sceneManager:manager.SceneManager;

        public constructor() {
            super();
        }

        public initManager():void {

            this.alertManager = new manager.AlertManager();
            this.panelManager = new manager.PanelManager();
            this.sceneManager = new manager.SceneManager();
        }
    }
}