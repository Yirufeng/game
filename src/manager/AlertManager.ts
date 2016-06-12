/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    /**
     * 提示管理器
     */
    export class AlertManager extends BaseManager {

        private classGather:any = {};
        private alertGather:any = {};

        public constructor() {
            super();
        }

        public initManager():void {
            super.initManager();

        }

        /**
         * 打开或者关闭面板
         * 1.如果面板未打开,则打开.
         * 2.如果面板已打开,则关闭.
         * @param id
         */
        public openOrClose(id:any):void {
            var baseAlert:component.BaseAlert = this.alertGather[id];
            if (baseAlert && baseAlert.visible) {
                this.close(id);
            }
            else {
                this.open(id);
            }
        }

        /**
         * 打开
         * @param id
         */
        public open(id:any):void {
            var baseAlert:component.BaseAlert = this.alertGather[id];
            if (!baseAlert) {
                baseAlert = new this.classGather[id];
                this.alertGather[id] = baseAlert;
            }
            baseAlert.open();
        }

        /**
         * 关闭
         * @param id
         */
        public close(id:any):void {
            var baseAlert:component.BaseAlert = this.alertGather[id];
            if (baseAlert)baseAlert.close();
        }

        /**
         * 关闭全部
         */
        public closeAll():void {
            var baseAlert:component.BaseAlert;
            for (var id in this.alertGather) {
                baseAlert = this.alertGather[id];
                baseAlert.close();
            }
        }
    }
}