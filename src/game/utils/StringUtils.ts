/**
 * Created by Ace.C on 2016/3/29.
 */
module utils {
    /**
     * 字符串处理工具
     */
    export class StringUtils {

        /**
         * 获取时间字符串
         * @param sec 秒数
         * @returns {string} 00d00h00m00s
         */
        public static getTimeString(sec:number):string {
            sec = sec < 0 ? 0 : sec;
            var d:number = Math.floor(sec / 86400);
            var h:number = Math.floor(sec % 86400 / 3600);
            var m:number = Math.floor(sec % 3600 / 60);
            var s:number = Math.floor(sec % 60);
            var str:string = "";
            if (d > 0) str += (d < 10 ? "0" + d : d) + "d";
            if (h > 0) str += (h < 10 ? "0" + h : h) + "h";
            if (m > 0) str += (m < 10 ? "0" + m : m) + "m";
            if (s > 0) str += (s < 10 ? "0" + s : s) + "s";
            return str;
        }

        /**
         * 获取时间字符串2
         * @param sec 秒数
         * @returns {string} 00:00:00
         */
        public static getTimeString2(sec:number):string {
            sec = sec < 0 ? 0 : sec;
            var h:number = Math.floor(sec / 3600);
            var m:number = Math.floor(sec % 3600 / 60);
            var s:number = Math.floor(sec % 60);
            return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        }

        /**
         * 获得值字符串
         * @param value
         * @returns {string} 1,000,000
         */
        public static getValueString(value:number):string {
            var arr:string[] = value.toString().split("");
            var str:string = "";
            var len:number = arr.length;
            for (var i:number = 1; i <= len; i++) {
                str = arr.pop() + str;
                if (i % 3 == 0 && i != len) {
                    str = "," + str;
                }
            }
            return str;
        }

        /**
         * 获得值字符串2
         * @param value
         * @returns {string} 999.9K(K,M,B,T)
         */
        public static getValueString2(value:number):string {
            var str:string = "";
            switch (Math.floor(String(value).length / 3)) {
                case 0:
                    str += (value / 100) + "K";
                    break;
                case 1:
                    str += (value / 100000) + "M";
                    break;
                case 2:
                    str += (value / 100000000) + "B";
                    break;
                case 3:
                    str += (value / 100000000000) + "T";
                    break;
            }
            return str;
        }

        /**
         * 替换非法字符
         * @param str
         * @returns {string}
         */
        public static replaceIllegalChars(str:string):string {
            var index:number = 0;
            var repStr:string;
            while (index < config.illegalChars.illegalChars.length) {
                if (str.indexOf(config.illegalChars.illegalChars[index]) != -1) {
                    repStr = "";
                    for (var i:number = 0; i < config.illegalChars.illegalChars[index].length; i++) {
                        repStr += "*";
                    }
                    str = str.replace(config.illegalChars.illegalChars[index], repStr);
                    continue;
                }
                index++;
            }
            return str;
        }

        /**
         * 检索非法字符
         * @param str
         * @returns {boolean}
         */
        public static searchIllegalChars(str:string):boolean {
            var index:number = 0;
            while (index < config.illegalChars.illegalChars.length) {
                if (str.indexOf(config.illegalChars.illegalChars[index]) != -1) {
                    return true;
                }
                index++;
            }
            return false
        }
    }
}
