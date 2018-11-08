// API介绍: https://developers.weixin.qq.com/miniprogram/dev/api/

// pages/wxml/index.js
//页面构造器
Page({
  //页面的初始数据
  //定义变量，在wxml中显示
  data: {
    msg: 'Hello',
    time: (new Date()).toString(),
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }, {
      message: 'bar2'
    }],
    a: 0
  },

  //生命周期函数--监听页面加载，options
  onLoad: function(options) {
    //列表页使用navigateTo跳转到详情页
    //wx.navigateTo({ url: 'pages/detail/detail?id=1&other=abc' })
    //console.log(option.id)
    //console.log(option.other)

    //再赋值
    this.setData({
      msg: 'Hello World',
      a: 10
    })
    //异步赋值完成监听
    this.setData({
      msg: 'Hello World2'
    }, function() {

    })

  },

  //生命周期函数--监听页面显示
  onShow: function() {},

  //生命周期函数--监听页面初次渲染完成，在页面没被销毁之前只会触发1次
  onReady: function() {},

  //生命周期函数--监听页面隐藏
  onHide: function() {},

  //生命周期函数--监听页面卸载
  onUnload: function() {},

  //---用户行为回调------------------------------------------------

  //下拉刷新
  onPullDownRefresh: function() {
    //需要在app.json的window选项中或页面配置page.json中设置enablePullDownRefresh为true。
    //当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
  },

  //上拉触底
  onReachBottom: function() {
    //可以在app.json的window选项中或页面配置page.json中设置触发距离onReachBottomDistance。
    //在触发距离内滑动期间，本事件只会被触发一次。
  },

  //页面滚动
  onPageScroll: function() {
    //参数为 Object，包含 scrollTop 字段，表示页面在垂直方向已滚动的距离（单位px）。
  },

  //用户点击右上角分享
  onShareAppMessage: function () {
    //只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮，在用户点击转发按钮的时候会调用，
    //此事件需要return一个Object，包含title和path两个字段，用于自定义转发内容
    return {
      title: '标题',
      path: '/page/user?id=123'
    }
  }
})