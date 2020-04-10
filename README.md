# @react-go/preset-antd

React Go preset for Ant Design

## Usage

### Install:

```
# npm
npm install @react-go/preset-antd
# yarn
yarn add @react-go/preset-antd
```

Config:

```javascript
// react-go.config.js
module.exports = {
  presets: [
    require('@react-go/preset-antd')(options),
  ],
};
```

Options:

* theme {object} [optional]

  Customize antd theme, example:

  ```javascript
  {
    '@primary-color': '#1DA57A',
  }
  ```
