#! /usr/bin/env node


let userArgs = process.argv.slice(2);
let quizName = userArgs[0];

let exec = require('child_process').exec;
var child = exec('git clone git@github.com:tws-stack/js-online-quiz-template.git ' + quizName, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
    exec('cd '+quizName+' && git remote set-url origin git@github.com:tws-online-quiz/' + quizName +".git", function(err, stdout, stderr) {
        if (err) throw err;
        console.log(stdout);
    });
});