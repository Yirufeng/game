/**
 * Created by Ace.C on 2016/4/28.
 */
module config {

    export class ConstConfig {

        //品质颜色
        public static getQualityColor(quality:Quality):Color {
            var color:config.Color;
            switch (quality) {
                case config.Quality.white:
                    color = config.Color.white;
                    break;
                case config.Quality.green:
                    color = config.Color.white;
                    break;
                case config.Quality.blue:
                    color = config.Color.white;
                    break;
                case config.Quality.purple:
                    color = config.Color.white;
                    break;
                case config.Quality.golden:
                    color = config.Color.white;
                    break;
            }
            return color;
        }
    }

    //连接类型
    export enum LinkType{
        http, socket
    }

    //方向类型
    export enum Direction{
        up, rightUp, right, rightDown, down, leftDown, left, leftUp
    }

    //性别类型
    export enum Gender{
        unknow = -1, female, male
    }

    //品质类型
    export enum Quality{
        white, green, blue, purple, golden
    }

    //颜色
    export enum Color{
        white = 0xFFFFFF,
        green = 0x00e500,
        blue = 0x1a94d7,
        purple = 0xe938f2,
        golden = 0xFFD700,
        yellow = 0xffff00,
        pink = 0xFF3030,
        red = 0xf11300,
        black = 0x2e2d2d,
    }
}