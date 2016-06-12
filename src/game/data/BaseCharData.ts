/**
 * Created by Ace.C on 2016/4/19.
 */
module data {
    /**
     * 基础角色数据
     */
    export class BaseCharData extends BaseData {
        //模型
        public avatar:string;
        //性别
        public gender:config.GenderType = config.GenderType.unknow;
        //战斗力
        public power:number;
    }
}