module.exports = {
  watch: {
    tasks: [
      {
        grunt: true,
        stream: true,
        args: ['watch:bower_copy']
      },
      {
        grunt: true,
        stream: true,
        args: ['shell:pattern_lab_watch']
      },
      {
        grunt: true,
        stream: true,
        args: ['shell:pattern_lab_build']
      },
      {
        grunt: true,
        stream: true,
        args: ['watch:scss']
      },
      {
        grunt: true,
        stream: true,
        args: ['watch:scripts']
      },      
      {
        grunt: true,
        stream: false,
        args: ['browserSync:livereload']
      },

    ]
  }
}
