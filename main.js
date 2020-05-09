import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;


Vue.mixin({
	methods: {
		setData: function(obj, callback) {
            let that = this;
            let keys = [];
            let val, data;
            let reg = /\[\d+\]/;
            Object.keys(obj).forEach(function(key) {
                keys = key.split('.');
                val = obj[key];
                data = that.$data;
                keys.forEach(function(key2, index) {
                    if (index + 1 == keys.length) {
                        if (reg.test(key2)) {
                            let re = /(.*?)\[(\d+)\]/.exec(key2);
                            let name = re[1];
                            let kk = re[2];
                            data = data[name];
                            data[kk] && that.$set(data, kk, val);
                        } else {
                            data[key2] && that.$set(data, key2, val);
                        }
                    } else {
                        if (reg.test(key2)) {
                            let re = /(.*?)\[(\d+)\]/.exec(key2);
                            let name = re[1];
                            let kk = re[2];
                            data = data[name][kk];
                        } else if (data[key2]) {
                            that.$set(data, key2, {});
                            data = data[key2];
                        }
                    }
                });
            });
            callback && callback();
        }
	}
});

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
