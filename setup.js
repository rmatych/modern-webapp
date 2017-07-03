const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout,
});

let name;
let email;
let projectName;
let projectDescription;
let gitRepoURL;

const removeTravisYAML = function removeTravisYAML(resolve, reject) {
  fs.unlink(path.resolve(__dirname, '.travis.yml'), (err) => {
    if (err) {
      reject();
    } else {
      resolve();
    }
  });
};

const removeLicense = function removeLicense(resolve, reject) {
  fs.unlink(path.resolve(__dirname, 'LICENSE'), (err) => {
    if (err) {
      reject();
    } else {
      resolve();
    }
  });
};

const removeSetup = function removeSetup(resolve, reject) {
  fs.unlink(path.resolve(__dirname, 'setup.js'), (err) => {
    if (err) {
      reject();
    } else {
      resolve();
    }
  });
};

const onCompletion = function onCompletion() {
  console.info('Project setup successful!');
};

const removeFiles = function removeFiles() {
  Promise.all([
    new Promise(removeTravisYAML),
    new Promise(removeLicense),
    new Promise(removeSetup),
  ])
    .then(onCompletion)
    .catch((reason) => {
      console.info(reason);
    });
};

const editREADME = function editREADME() {
  const content = `# ${projectName}\n${projectDescription}`;

  fs.writeFile(
    path.resolve(__dirname, 'README.md'),
    content,
    removeFiles);
};

const editPackageJSON = function editPackageJSON() {
  fs.readFile(path.resolve(__dirname, 'package.json'), (err, data) => {
    if (err) {
      throw err;
    }
    const packageJSON = JSON.parse(data);

    packageJSON.author.name = name;
    packageJSON.author.email = email;
    packageJSON.name = projectName;
    packageJSON.description = projectDescription;
    packageJSON.repository.url = gitRepoURL;
    delete packageJSON.license;

    const indentSize = 2;

    fs.writeFile(
      path.resolve(__dirname, 'package.json'),
      JSON.stringify(packageJSON, null, indentSize),
      editREADME);
  });
};

const getGitRepoURL = function getGitRepoURL(answer) {
  gitRepoURL = answer;
  rl.close();
  editPackageJSON();
};

const getProjectDescription = function getProjectDescription(answer) {
  projectDescription = answer;
  rl.question('What\'s the URL for your project\'s Git repository?\n   > ', getGitRepoURL);
};

const getProjectName = function getProjectName(answer) {
  projectName = answer;
  rl.question('Describe your project:\n   > ', getProjectDescription);
};

const getEmail = function getEmail(answer) {
  email = answer;
  rl.question('What\'s the name of your project?\n   > ', getProjectName);
};

const getName = function getName(answer) {
  name = answer;
  rl.question('What\'s your email address?\n   > ', getEmail);
};

console.info('Let\'s fill out some info about your project:');
rl.question('What\'s your name?\n   > ', getName);
