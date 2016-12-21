#!/bin/bash
cd `dirname $0`
cd .. # in repo root

# Composer installs
if [[ -a "`which composer`" ]]; then
echo "# Installing/Updating Composer Components #" 
composer install
else
  echo "# ERROR: You need to have composer installed. Get it here and try again: https://getcomposer.org/doc/00-intro.md"
  exit 1
fi

# Node installs
if [[ -a "`which npm`" ]]; then
  echo ""
  echo "# Installing Grunt CLI for easy task execution"
  npm install grunt-cli
  echo "# Installing Grunt Dependencies via node.js"
  npm install
else
  echo "# ERROR: You need to have node.js and the \"npm\" command installed. Get it here and try again: http://nodejs.org/download/"
  exit 1
fi

echo ""
echo "Building Site"
grunt init
echo ""
echo "Pattern lab is built."
echo ""
echo "# All done! Go ahead and type \"grunt\" to kick off a full dev experience:"
echo "Sass/Compass Watch, Pattern Lab Watch, and Browser Auto Reload."
echo "Read the readme for more info"
echo "Enjoy!"
