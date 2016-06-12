/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    /**
     * ��ʾ������
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

        public openOrClose(id:any):void {
            var baseAlert:component.BaseAlert = this.alertGather[id];
            if (baseAlert && baseAlert.visible) {
                this.close(id);
            }
            else {
                this.open(id);
            }
        }

        public open(id:any):void {
            var baseAlert:component.BaseAlert = this.alertGather[id];
            if (!baseAlert) {
                baseAlert = new this.classGather[id];
                this.alertGather[id] = baseAlert;
            }
            baseAlert.open();
        }

        public close(id:any):void {
            var baseAlert:component.BaseAlert = this.alertGather[id];
            if (baseAlert)baseAlert.close();
        }

        public closeAll():void {
            var baseAlert:component.BaseAlert;
            for (var id in this.alertGather) {
                baseAlert = this.alertGather[id];
                baseAlert.close();
            }
        }
    }
}