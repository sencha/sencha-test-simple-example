# Simple Sencha Test CLI Project
This is a simple sencha test example with a [Saucelabs](https://saucelabs.com/) configuration.

![Example](./example.gif)

## Reference

* [Check out the NPM guide](https://docs.sencha.com/sencha_test/2.3.0/open_tools_npm/using_npm.html).
* [Check out Sencha Test guides](https://docs.sencha.com/sencha_test/2.3.0/).

## Requirements

* You'll have to have a trial or be an enterprise customer to try this out. 
* This config uses the SauceLabs browser farm. Be sure to change the user and accessKey in [./workspace.json](./workspace.json).

## Login
Start by logging into the npm repository with the stc-cli packages.

```
npm login --registry=https://npm.sencha.com --scope=@sencha
```

## Configure
Configure the [./workspace.json](./workspace.json) user and accessKey for [Saucelabs](https://saucelabs.com/).

## Install
Download the dependencies to node_modules by running `npm install`. 

```
npm install
```

## Running
Run using npm. 

```
npm test
```
