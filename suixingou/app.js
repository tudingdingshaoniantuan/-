//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options){
    wx.cloud.init({
      traceUser: true,
    })
   
  },
  onShow: function(options){

  },

// js文件里编写

onAdd: function () {
  const db = wx.cloud.database();
  /**
   * 向集合counters中添加数据
   */
  db.collection('counters').add({
      data:{
          description:'测试',
          due:new Date('2019-03-13'),
          tags:[
              '云开发',
              '数据库'
          ],
          location:new db.Geo.Point(110,23),
          done:false
      }
  })
  .then(res=>{
      console.log(res)
  })


},


  onHide: function(){

  },
  onError: function(msg){

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options){

  },
  globalData: {
    
  }
});