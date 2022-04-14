import dayjs from 'dayjs';
let util: any = {};
util.formatDateTime = function (date: string | number | Date | dayjs.Dayjs | null | undefined) {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
util.formatDateTime2 = function (date: string | number | Date | dayjs.Dayjs | null | undefined) {
    return dayjs(date).format('YYYY-MM-DD 00:00:00');
};
util.formatDate = function (date: string | number | Date | dayjs.Dayjs | null | undefined) {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
util.formatDate2 = function (date: string | number | Date | dayjs.Dayjs | null | undefined) {
    return dayjs(date).format('YYYY-MM-DD');
};
util.seconds = function () {
    return dayjs().unix()
}
// 邮箱格式校验
util.validatemail = function (value: string, callback: Function) {
    if (!value) {
        return callback(new Error('邮箱不可为空'));
    } else if (!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value))) {
        return callback(new Error('邮箱输入错误'));
    } else {
        callback();
    }
};
util.singleValidIP = function (str: string) {
    //  IP地址合法校验: 排除 0.0.0.0; 排除 255.255.255.255; 支持区间录入
    let reg = /^((25[0-5]|2[0-4]\d|[1]{1}\d{1}\d{1}|[1-9]{1}\d{1}|\d{1})($|(?!\.$)\.)){4}$/;
    let regS = /^((25[0-5]|2[0-4]\d|[1]{1}\d{1}\d{1}|[1-9]{1}\d{1}|\d{1})($|(?!\.$)\.))$/;
    let regZ = /(^0{1,3}(\.0{1,3}){3}$)/;
    let regM = /(^255(\.255){3}$)/;
    if (/([-])/.test(str)) {
        // 支持区间录入
        let arr = str.split('-');
        if (arr.length === 2) {
            return reg.test(arr[0]) && regS.test(arr[1]);
        } else {
            return false;
        }
    } else {
        return reg.test(str) && !regZ.test(str) && !regM.test(str);
    }
};
util.getSessionStorage = function (key: string) {
    if (sessionStorage.getItem(key)) {
        let data = sessionStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return data;
        }
    }
    return '';
}
util.setSessionStorage = function (key: string, data: any) {
    let Obj = JSON.stringify(data);
    sessionStorage.setItem(key, Obj);
}
util.removeStorageData = function (key: string) {
    sessionStorage.removeItem(key);
}
// //获取url中参数
util.getUrlParam = function (name: string) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
export default util;