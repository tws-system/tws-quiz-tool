#! /usr/bin/env node


let userArgs = process.argv.slice(2);
let quizName = userArgs[0];

let exec = require('child_process').exec;
cloneTemplate(quizName, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
    updateGitRemote(quizName, function(err, stdout, stderr) {
      if (err) throw err;
      console.log(stdout);
      updatePackageJSON(quizName);
    })
})

function cloneTemplate(quizName, callback) {
  exec('git clone git@github.com:tws-stack/js-online-quiz-template.git ' + quizName, callback);
}

function updateGitRemote(quizName, callback) {
  exec('cd ' + quizName + ' && git remote set-url origin git@github.com:tws-online-quiz/' + quizName +".git", callback);
}

function updatePackageJSON(quizName) {
  let cmd = 'cd ' + quizName + ' && sed -i \'\' -e \'s/js-online-quiz-template/' + quizName + '/g\' -e \'s/tws-stack/tw-online-quiz/g\' package.json';
  exec(cmd, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
  });
}
