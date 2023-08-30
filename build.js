/*const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = path.join(__dirname, 'src');
const targetDir = path.join(__dirname, 'dist');

function copyFiles(sourceDir, targetDir) {
  fs.readdirSync(sourceDir).forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied file: ${sourcePath} -> ${targetPath}`);
  });
}

function transpileCode() {
  execSync('babel src -d dist');
  console.log('Transpiled code using Babel');
}

function bundleCode() {
  execSync('webpack');
  console.log('Bundled code using webpack');
}

function build() {
  copyFiles(sourceDir, targetDir);
  transpileCode();
  bundleCode();
}

build();*/
