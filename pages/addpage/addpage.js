// pages/addpage/addpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  add: function (e) {
  console.log(e)
  wx.getUserInfo({
    withCredentials: true,
    lang: '',
    success: function(res) {
      console.log("成功")
      wx.navigateTo({
         url: '/pages/add/add'
       })
    },
    fail: function(res) {
      wx.showToast({
        title: '请先登录',
      })
    },
    complete: function(res) {
      console.log("完成")
      console.log(res)
    },
  })


    // if (this.data.user._openid != "") {
    //   wx.navigateTo({
    //     url: '/pages/add/add'
    //   })
    // }
    // else {
    //   wx.showToast({
    //     title: '请先登录',
    //   })
    // }

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})