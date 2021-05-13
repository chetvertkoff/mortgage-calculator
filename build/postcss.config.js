module.exports = {
  plugins: [
    require("postcss-import"),
    require('autoprefixer'),
    require('postcss-sort-media-queries'),
    require('cssnano')({
      preset:[
        'default',{
          discardComments:{
            removeAll:true,
          }
        }
      ]
    })
  ]
}
