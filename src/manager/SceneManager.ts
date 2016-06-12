/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    /**
     * 场景管理器
     */
    export class SceneManager extends BaseManager {

        private classGather:any = {};
        private sceneGather:any = {};


        //当前场景
        public scene:component.BaseScene;

        public constructor() {
            super();
        }

        public initManager():void {
            super.initManager();

        }

        /**
         * 切换场景
         * @param id
         */
        public change(id:any):void {

            if (this.scene && this.scene.visible) {
                this.scene.close();
            }

            this.scene = this.sceneGather[id];
            if (!this.scene) {
                this.scene = new this.classGather[id];
                this.sceneGather[id] = this.scene;
            }

            this.scene.open();
        }
    }
}