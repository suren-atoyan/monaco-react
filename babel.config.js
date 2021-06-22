module.exports = {
        "presets": [
         [ "@babel/preset-env", { targets: '> 2%, not dead' }],
          "@babel/preset-react"
        ], 
        "plugins": [
            ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }]
          ]
}; 