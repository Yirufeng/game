/**
 * Created by Ace.C on 2016/4/15.
 */
class AlertManager extends BaseManager {

    public gather: any = {};
    public curAlert: BaseAlert;


    public constructor() {
        super();

        this.initManager();
    }

    public initManager(): void {
        super.initManager();

    }

    /**
     * 打开
     * @param id
     */
    public open(id: any, param?: any): void {
        var baseAlert: BaseAlert = this.gather[id];
        if (baseAlert) {
            this.curAlert = baseAlert;
            this.curAlert.open();

            this.curAlert.update(param);
        }
    }

    /**
     * 关闭
     * @param id
     */
    public close(id: any): void {
        var baseAlert: BaseAlert = this.gather[id];
        baseAlert.close();
    }

    /**
     * 关闭全部
     */
    public closeAll(): void {
        var baseAlert: BaseAlert;
        for (var id in this.gather) {
            baseAlert = this.gather[id];
            baseAlert.close();
        }
    }
}