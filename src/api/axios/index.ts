import axios from 'axios';
import { Toast } from 'vant';
import { isArray as _isArray, isObject as _isObject, isNil as _isNil, filter as _filter, each as _each, isFunction as _isFunction } from 'lodash';
import qs from 'qs';
function filterNull(obj: any) {
    if (_isArray(obj)) {
        obj = _filter(obj, function (value: any) {
            if (_isNil(value)) {
                return false;
            } else {
                filterNull(value);
                return true;
            }
        });
    } else if (_isObject(obj)) {
        _each(obj, function (value: any, key: string | number) {
            if (_isNil(value)) {
                delete obj[key];
            }
            obj[key] = filterNull(value);
        });
    }
    obj = _isNil(obj) ? '' : obj;
    return obj;
}
function apiAxios(options: any) {
    let data = null;
    let header = {};
    let params = null;
    if (options.data) {
        params = filterNull(options.data);
    }
    if (options.headers) {
        header = {
            'Content-type': 'application/x-www-form-urlencoded',
        };
        data = qs.stringify(params);
    } else {
        header = {
            'Content-type': 'application/json'
        };
        data = params;
    }
    axios.defaults.baseURL = import.meta.env.VITE_APP_TITLE === 'development' ? '/api' : import.meta.env.VITE_APP_BASE_API + "";
    header = Object.assign(header, options.header || {});
    let method = options.method;
    let onload = options.onload || function () { };
    let onerror = options.onerror || null;
    let url = options.url;
    axios({
        method: options.method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? data : null,
        params: method === 'GET' || method === 'DELETE' ? data : null,
        headers: header,
        withCredentials: false
    }).then(
        (res: any) => {
            const codeId = res.data.code;
            if (codeId === 0) {
                onload && onload(res.data);
            } else {
                if (onerror && _isFunction(onerror)) {
                    onerror(res.data || res.res || res);
                } else {
                    Toast(res.data.message || res.data.msg || res.data.mes || '请求错误!')
                }
            }
        }
    ).catch(function (err) {
        let res = err && err.response;
        Toast(err.message || res.msg || err.mes || '请求错误!');
        console.log(err.message || res.msg || err.mes || '请求错误!', err);
    });
}
let ajaxApi = {
    post: function (options: {}) {
        options = options || {};
        apiAxios(
            Object.assign({ hasToken: true, tokenPos: false }, options, {
                method: 'POST'
            })
        );
    },
    get: function (options: {}) {
        options = options || {};
        apiAxios(
            Object.assign({ hasToken: true, tokenPos: false }, options, {
                method: 'GET'
            })
        );
    },
    delete: function (options: {}) {
        options = options || {};
        apiAxios(
            Object.assign({ hasToken: true, tokenPos: false }, options, {
                method: 'delete'
            })
        );
    }
};
export default ajaxApi