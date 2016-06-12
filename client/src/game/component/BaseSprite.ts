/**
 * Created by Ace.C on 2016/4/15.
 */
module component {
    export class BaseSprite extends eui.Component {
        //��Ϸ������
        public gameManager:manager.GameManager;

        //ID
        public id:any;
        //�Ƿ�ȫ���������
        public isChildrenCreated:boolean = false;

        public constructor() {
            super();
            this.gameManager = manager.GameManager.getInstance();
        }

        public childrenCreated() {
            super.childrenCreated();

            this.isChildrenCreated = true;
        }

        public open():void {
            this.show();
        }

        public close():void {
            this.hide();
        }

        public show():void {
            this.visible = true;
        }

        public hide():void {
            this.visible = false;
        }

        /**
         * ����Ƥ��״̬
         * @param value
         */
        public setSkinState(value:string):void {
            this.currentState = value;
            this.invalidateState();
        }
    }
}