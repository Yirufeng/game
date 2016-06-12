/**
 * Created by Ace.C on 2016/4/19.
 */
module data {
    /**
     * 玩家数据
     */
    export class BasePlayerData extends BaseCharData {
        //经验值
        public exp:number;
        //VIP级别
        public vip:number;
        //VIP经验
        public vipExp:number;
        //体力
        public tili:number;
        //钻石
        public diamond:number;
        //游戏币
        public coin:number;
        //排名
        public ranking:number;
    }
}