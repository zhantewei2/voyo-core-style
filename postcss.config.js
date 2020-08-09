const postcssPresetEnv =require("postcss-preset-env");
const path=require("path");

module.exports={
  plugins:{
    "postcss-preset-env":{
      importFrom:[
        path.join("lib/css-vars.css")
      ]
    },
  }
};
