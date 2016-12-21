module.exports = {
    bower: {
        files:[{
            expand: true,
            cwd: '<%=source%>/bower_components',
            src: '**',
            dest: '<%=public%>/bower_components'
        }]
    },
    scripts:{
        files:[{
            expand: true,
            cwd: '<%=source%>/js',
            src: '*.js',
            dest: '<%=public%>/js'
        }]
    }
}