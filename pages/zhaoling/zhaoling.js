const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const detail = db.collection('detail')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentList: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (option) {
    var that = this
    detail.where({
        select:'招领',
      }).get({
      success(res) {
        that.setData({
          currentList: res.data.reverse(),
        })    
        }
    })
    console.log(option);
    
  },

  toDetail: function (e) {

    // console.log(e.target.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.target.id
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

    wx.stopPullDownRefresh();
    var that = this
    detail.get({
      success(res) {
        that.setData({
          currentList: res.data.reverse(),
        })

      }
    })
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