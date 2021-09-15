const resolve = dir => require("path").join(__dirname, dir);
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete("prefetch").delete("preload");
    config.resolve.symlinks(true);
    // svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.include
      .add(resolve("src/assets/svg-icons/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "tao-[name]"
      })
      .end();
    // image exclude
    const imagesRule = config.module.rule("images");
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve("src/assets/svg-icons/icons"))
      .end();
    // 重新设置 alias
    config.resolve.alias.set("~", resolve("public")).end();
  }
};
