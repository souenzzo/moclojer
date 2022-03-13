import * as core from '@actions/core'
import * as github from '@actions/github'
import * as cp from 'node:child_process'

let app = cp.spawn("ls", ["-lah"])

app.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});

app.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
});

app.on('close', code => {
    console.log(`child process exited with code ${code}`);
});


let nameToGreet = core.getInput('who-to-greet');
console.log(`Hello ${nameToGreet}!`);
const time = (new Date()).toTimeString();
core.setOutput("time", time);
// Get the JSON webhook payload for the event that triggered the workflow
const payload = JSON.stringify(github.context.payload, undefined, 2)
console.log(`The event payload: ${payload}`);
