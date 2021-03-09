Page({
  data: {
    user: {
      avatar: "./images/user-unlogin.png",
      name: "点击登录",
      number: '',
      address: '',
      _id: 0
    }
  },
  onLoad() {
    
  },
  onGetUserInfo(e) {
    this.getUserInfo()
    let user = this.data.user
    user.avatar = e.detail.userInfo.avatarUrl
    user.name = e.detail.userInfo.nickName
    this.setData({ user })
    this.saveUserInfo()
  },
  saveUserInfo() {
    wx.cloud.callFunction({
      name: 'saveUser',
      data: this.data.user,
    })
  },
  getUserInfo() {
    wx.cloud.callFunction({
      name: 'getUser',
    }).then((res) => {
      if (res.result.data.length) {
        this.setData({
          user: res.result.data[0]
        })
      }
    })
  },
  numberConfirm(e) {
    this.setData({
      'user.number': e.detail.value
    });
    console.log(this.data.user)
    this.saveUserInfo()
  },
  addressConfirm(e) {
    this.setData({
      'user.address': e.detail.value
    });
    this.saveUserInfo()
  },

  tomydetail:function(e){
    console.log(this.data.user._openid)
    if (this.data.user._openid!=""){
         wx.navigateTo({
      url: '/pages/mydetail/mydetail?openid=' + this.data.user._openid
      })
    }
    else{
      wx.showToast({
        title: '请先登录',
      })
    }
    // wx.navigateTo({
    //   url: '/pages/mydetail/mydetail?openid=' + this.data.user._openid
    // })
  },
  about:function(){
    wx.navigateTo({
      url: '/pages/about/about'
    })
  }

})
