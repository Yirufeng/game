/**
 * Created by Ace.C on 2016/4/15.
 */
module data {
    /**
     * 基础数据
     */
    export class BaseData {
        //游戏管理器
        public gameManager:manager.GameManager;

        //ID
        public id:any;
        //名字
        public name:string = "";
        //描述
        public description:string = "";
        //图标
        public icon:string;
        //类型
        public type:number;
        //等级
        public level:number = 1;
        //品质
        public quality:config.Quality = config.Quality.white;
        //售价
        public price:number;

        public constructor() {
            this.gameManager = manager.GameManager.getInstance();
        }

        /**
         * 更新
         * @param data
         */
        public update(data:any):void {
            for (var key in data) {
                this[key] = data[key];
            }
        }
    }
}