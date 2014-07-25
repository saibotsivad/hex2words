#!/bin/bash

browserify js/main.js | uglifyjs -c -o js/build.js