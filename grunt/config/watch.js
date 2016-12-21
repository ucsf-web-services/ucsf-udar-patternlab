module.exports = {
    pattern:{
        files: ['<%=source%>/_patterns/**/*.twig'],
        tasks: ['shell:pattern_lab_watch']
    },
    scss: {
        files: ['<%=source%>/scss/**/*.scss'],
        tasks: ['compass:compile', 'shell:pattern_lab_build']
    },
    scripts:{
        files: ['<%=source%>/js/**/*.js'],
        tasks: ['copy:scripts']
    },
    bower_copy: {
        files: ['<%=bower_directory%>/**'],
        tasks: ['<%=public%>/bower_components']
    },
}