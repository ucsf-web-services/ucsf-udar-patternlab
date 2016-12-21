module.exports = {
    pattern_lab_build:{
        command: 'php core/console --generate'
    },
    pattern_lab_watch:{
        command: 'php core/console --watch --timeout=0'
    },
    pattern_lab_serve:{
        command: 'php core/console --server'
    },
    pattern_lab_help:{
        command: 'php core/console --help'
    },
    pattern_lab_require_patternengine:{
        command: 'composer require pattern-lab/patternengine-twig'
    },
    pattern_lab_require_styleguidekit_default:{
        command: 'composer require pattern-lab/styleguidekit-twig-default'
    },
    pattern_lab_require_styleguidekit_assets:{
        command: 'composer require pattern-lab/styleguidekit-assets-default'
    },
    install_compass:{
        command: 'gem install compass'
    },
    update_bundler: {
        command: 'bundle install'
    },
    update_bower:{
        command: 'bower install'
    },
    update_node:{
        command: 'npm install'
    },
    trigger_reload:{
        command: 'touch change-to-reload.txt'
    }
}