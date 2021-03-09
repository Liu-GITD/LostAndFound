// pages/detail/detail.js
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const detail = db.collection('detail')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thingname:"",
    thingdetail:"",
    photo: "",
    phone: "",
    name: "",
    time: "",
    photolist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    // console.log(query)
    
    var that=this;
    
    detail.doc(query.id).get({
      success(res) {
        console.log(res)
        // res.data 包含该记录的数据
        that.setData({
          thingname: res.data.thingname,
          thingdetail: res.data.thingdetail,
          photo: res.data.fileID,
          phone: res.data.phone,
          name: res.data.name,
          time: res.data.time,
          photolist: res.data.fileID,
        })
      }
    })
  },
  previewImage: function () {
    var that=this;
    var list=[that.data.photolist]
    console.log("list:");
    
    console.log(list)
    wx.previewImage({
      current: that.data.photo, // 当前显示图片的http链接  
      urls: list // 需要预览的图片http链接列表  
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