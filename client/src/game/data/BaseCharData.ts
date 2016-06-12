/**
 * Created by Ace.C on 2016/4/19.
 */
module data {
    /**
     * ������ɫ����
     */
    export class BaseCharData extends BaseData {
        //ģ��
        public avatar:string;
        //�Ա�
        public gender:config.Gender = config.Gender.unknow;
        //ս����
        public power:number;
    }
}