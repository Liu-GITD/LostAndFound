// pages/mydetail/mydetail.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const detail = db.collection('detail')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentList:[],
    openid:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    var that=this
    // console.log(query.openid)
    detail.where({
      _openid:query.openid,
    })
      .get({
        success(res) {
          var tmp = res.data
          // console.log(res)
          // console.log(tmp)
          that.setData({
           openid: query.openid,
            currentList: res.data,
          })
        }
      })

    // detail.doc(query.openid).get({
    //   success(res) {
    //     console.log(res)
    //     // res.data 包含该记录的数据
    //     that.setData({
    //       thingname: res.data.thingname,
    //       thingdetail: res.data.thingdetail,
    //       photo: res.data.fileID,
    //       phone: res.data.phone,
    //       name: res.data.name,
    //       time: res.data.time,
    //     })
    //   }
    // })
  },
  toDetail: function (e) {

    // console.log(e.target.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.target.id
    })
  },
  delete:function(e){
    var that=this;
    // console.log(e)
    detail.doc(e.target.id).remove({
      success(res) {
        that.onPullDownRefresh()
      }
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
    detail.where({
      _openid: that.data.openid,
    })
      .get({
        success(res) {
          that.setData({
            currentList: res.data,
          })
        }
      })
  },
  
  toDetail: function (e) {

    // console.log(e.target.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.target.id
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