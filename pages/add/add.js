// pages/add/add.js
const db=wx.cloud.database()
const detail = db.collection('detail')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    date: '2021-01-01',
    select: "寻物",
    photoID:[]
  },
  onLoad: function (options) {
    
  },
  bindDateChange:function(e){
    var that=this ;
    that.setData({date:e.detail.value})
    
    console.log(e)
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == "lost") {
      this.setData({ select: "寻物" })
    }
    else { this.setData({ select: "招领" }) }
  },

  chooseImage:function(e){
    var that=this;
    if(that.data.files.length<1)
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          
          that.setData({
            files: that.data.files.concat(res.tempFilePaths)
          });
        }
      })
    else{
      wx.showToast({
        title: '最多上传1张图片',
      })
    }
    
  },
  deleteimg:function(e){
    
    var files = this.data.files;
    var index = e.currentTarget.dataset.index;
    files.splice(index, 1);
    this.setData({
      files: files
    });
  },
  comfirm:function(e){
    var that=this;
    console.log(e)
    if (e.detail.value.thingname == "" || e.detail.value.thingdetail == "" || e.detail.value.phone == "" || e.detail.value.name == "" || that.data.files.length==0){
      console.log(that.data.files)
      wx.showToast({
        title: '以上内容为必填',
        icon:'none'
      })
    }else{

      console.log()
      const tempFilePaths = this.data.files
      console.log(tempFilePaths.length)

      for (var i = 0; i < tempFilePaths.length; i++) {
        let randString = Math.floor(Math.random() * 1000000).toString() + '.png'
        wx.cloud.uploadFile({
          cloudPath: randString, // 上传至云端的路径
          filePath: tempFilePaths[0],// 小程序临时文件路径
          success: res => {
            detail.add({
              data: {
                fileID: res.fileID,
                thingname: e.detail.value.thingname,
                thingdetail: e.detail.value.thingdetail,
                phone: e.detail.value.phone,
                name: e.detail.value.name,
                time: this.data.date,
                select:this.data.select
              }
            })
          }
        })
      }
      wx.showToast({
        title: '已上传'
      })
      wx.navigateBack({
        delta: 1
      })
    }
    
  }
  

})