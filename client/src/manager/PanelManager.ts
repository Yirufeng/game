/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    export class PanelManager extends BaseManager {

        private classGather:any = {};
        private panelGather:any = {};

        public constructor() {
            super();
        }

        public initManager():void {
            super.initManager();

        }

        public openOrClose(id:any):void {
            var basePanel:component.BasePanel = this.panelGather[id];
            if (basePanel && basePanel.visible) {
                this.close(id);
            }
            else {
                this.open(id);
            }
        }

        public open(id:any):void {
            var basePanel:component.BasePanel = this.panelGather[id];
            if (!basePanel) {
                basePanel = new this.classGather[id];
                this.panelGather[id] = basePanel;
            }
            basePanel.open();
        }

        public close(id:any):void {
            var basePanel:component.BasePanel = this.panelGather[id];
            if (basePanel)basePanel.close();
        }

        public closeAll():void {
            var basePanel:component.BasePanel;
            for (var id in this.panelGather) {
                basePanel = this.panelGather[id];
                basePanel.close();
            }
        }
    }
}