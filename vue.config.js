module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack:{
    devServer:{
      before(app){
        app.get('/api/login',function(req,res){
          const {username,password} = req.query;
          if(username === 'lina' && password ==='123'){
              res.json({
                code:0,
                token:"jilei",
                message:'登录成功'
              })
          }else{
            res.json({
              code:1,
              message:'用户名或密码错误'
            });
          }
        })
      }
    }
  }
}
