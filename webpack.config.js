const path=require("path");
const miniCssExtractPlugin=require("mini-css-extract-plugin");
const join=(...args)=>path.join(__dirname,...args);

module.exports={
  entry:join('lib/main.scss'),
  mode:"production",
  output:{
    path:join("dist"),
    filename:'[name].js'
  },
  module:{
    rules:[
      { test:/\.scss/,
        use:[
          {
            loader: miniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          {loader: "sass-loader",options:{
            implementation: require("sass")
            }},
        ]
      },
      {
        test:/\.css/,
        use:[
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins:[
    new miniCssExtractPlugin()
  ]
};
