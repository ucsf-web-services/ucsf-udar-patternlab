module.exports = {
  livereload:{
    options:{
      notify: true,
      reloadOnRestart: true,
      open: false,
      files:[
        '<%=source%>/_patterns/**/*.twig',
        '<%=source%>/_patterns/**/*.json',
        '<%=source%>/**/*.json',
        '<%=source%>/css/**/*.css',
        '<%=source%>/css/*.css',
        '<%=source%>/script/**/*.js',
      ],
      server: {
        baseDir: ["<%=public%>"],
      }
    }
  }
};
