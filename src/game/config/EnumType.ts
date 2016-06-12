/**
 * Created by Ace.C on 2016/4/28.
 */
module config {

    //连接类型
    export enum LinkType{
        http, socket
    }

    //方向类型
    export enum DirectionType{
        up, rightUp, right, rightDown, down, leftDown, left, leftUp
    }

    //性别类型
    export enum GenderType{
        unknow = -1, female, male
    }

    //品质类型
    export enum QualityType{
        white, green, blue, purple, golden
    }
}