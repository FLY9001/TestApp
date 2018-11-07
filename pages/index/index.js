//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数，会受到一个事件对象event
  //事件的冒泡和捕获，可用于多view事件冲突
  //点击
  bindViewTap: function(event) {
    console.log(event)
    //wx.navigateTo({ url: 'page' }) 跳转
    //wx.navigateBack()              回退
    //wx.redirectTo({ url: 'page' }) 替换
    //wx.switchTab({ url: 'pageF' }) 切换到TabBar页，需在app.json设置，其页面栈变化会有异常

    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.navigateTo({
      url: '../wxml/index?id=1'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})