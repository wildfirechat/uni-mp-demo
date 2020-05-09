<template>
<view class="page-body">
  <view class="page-section">
    <view class="weui-cells__title">请输入手机号</view>
    <view class="weui-cells weui-cells_after-title">
      <view class="weui-cell weui-cell_input">
        <input class="weui-input" @input="bindPhoneInput" type="number" placeholder="手机号"></input>
      </view>
    </view>
  </view>

    <view class="page-section">
    <view class="weui-cells__title">请输入验证码</view>
    <view class="weui-cells weui-cells_after-title">
      <view class="weui-cell weui-cell_input">
        <input class="weui-input" @input="bindCodeInput" type="number" placeholder="验证码"></input>
      </view>
    </view>
  </view>

<button @tap="bindLoginTap">登录</button>
<button @tap="bindAuthCodeTap">获取验证码</button>
  
</view>
</template>

<script>
import wfc from "../../wfc/client/wfc";
import Config from '../../config';

export default {
  data() {
    return {
      focus: false,
      phone: '',
      code: ''
    };
  },

  components: {},
  props: {},
  methods: {
    bindPhoneInput: function (e) {
      // this.setData({
      //   phone: e.detail.value
      // });
	  this.phone = e.detail.value;
    },
    bindCodeInput: function (e) {
      // this.setData({
      //   code: e.detail.value
      // });
	  this.code  = e.detail.value;
    },
    bindLoginTap: function (e) {
      console.log(this.phone); // console.log(this.data.code)

      this.login(this.phone, this.code);
    },

    login(phone, code) {
      let appServer = Config.APP_SERVER + '/login';
      let clientId = wfc.getClientId();
      wx.request({
        url: appServer,
        data: {
          mobile: phone,
          code: code,
          clientId: clientId
        },
        header: {
          'content-type': 'application/json' // 默认值

        },
        method: 'POST',

        success(res) {
          console.log(res.data);

          if (res.statusCode === 200) {
            let loginResult = res.data;

            if (loginResult.code === 0) {
              let userId = loginResult.result.userId;
              let token = loginResult.result.token;
              wfc.connect(userId, token);
              wx.switchTab({
                url: '../chat-list/chat-list',
                fail: e => {
                  console.log(e);
                }
              });
            } else {
              console.log('login failed', loginResult);
            }
          }
        }

      });
    },

    bindAuthCodeTap: function (e) {
      console.log(this.phone);
      this.authCode(this.phone);
    },

    authCode(phone) {
      let appServer = Config.APP_SERVER + '/send_code';
      wx.request({
        url: appServer,
        data: {
          mobile: phone
        },
        header: {
          'content-type': 'application/json' // 默认值

        },
        method: 'POST',

        success(res) {
          console.log(res.data);

          if (res.statusCode === 200) {
            console.log('发送验证码成功');
          }
        }

      });
    }

  }
};
</script>
<style>
@import "./login.css";
</style>