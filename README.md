# portfolio-v2

## Installation steps
create - npx create-next-app@latest
install - npm install

## Run steps
 * cd portfolio
 * npm run dev
 * Navigate to http://localhost:3000

## Build steps
 * added output: 'export' to next.config.ts to get a static web build
 * cd portfolio
 * npm run build
 * cd out
 * Run commands:
 * `New-Item -ItemType Directory -Force -Path contact; New-Item -ItemType Directory -Force -Path projects; New-Item -ItemType Directory -Force -Path work`
 * `Copy-Item contact.html -Destination "contact\index.html";Copy-Item projects.html -Destination "projects\index.html";Copy-Item work.html -Destination "work\index.html";`

## Switch node version using nvm
 * install: https://github.com/coreybutler/nvm-windows/releases
 * Open powershell as admin
 * "nvm list" - list current node installations
 * "nvm install latest x" - Install latest
 * "nvm use 23.9.0" - Switch to version 23.9
 * "nvm use 16.16.0"- Switch to version 16.16