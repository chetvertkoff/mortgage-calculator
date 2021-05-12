module.exports = {
  plugins: [
    require("postcss-import"),
    require('autoprefixer'),
    require('sort-css-media-queries'),
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
