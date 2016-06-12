/**
 * Created by Ace.C on 2016/4/15.
 */
module manager {
    /**
     * 面板管理器
     */
    export class PanelManager extends BaseManager {

        private classGather:any = {};
        private panelGather:any = {};

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
            var basePanel:component.BasePanel = this.panelGather[id];
            if (basePanel && basePanel.visible) {
                this.close(id);
            }
            else {
                this.open(id);
            }
        }

        /**
         * 打开面板
         * @param id
         */
        public open(id:any):void {
            var basePanel:component.BasePanel = this.panelGather[id];
            if (!basePanel) {
                basePanel = new this.classGather[id];
                this.panelGather[id] = basePanel;
            }
            basePanel.open();
        }

        /**
         * 关闭面板
         * @param id
         */
        public close(id:any):void {
            var basePanel:component.BasePanel = this.panelGather[id];
            if (basePanel)basePanel.close();
        }

        /**
         * 关闭全部
         */
        public closeAll():void {
            var basePanel:component.BasePanel;
            for (var id in this.panelGather) {
                basePanel = this.panelGather[id];
                basePanel.close();
            }
        }
    }
}