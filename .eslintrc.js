module.exports = {
   "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
   },
   "extends": "eslint:recommended",
   parser: 'babel-eslint',
   "parserOptions": {
      "sourceType": "module"
   },
   plugins: [
      'babel',
      'react',
   ],
   "rules": {
      "indent": [
         "error",
         3
      ],
      "linebreak-style": [
         "error",
         "windows"
      ],
      "quotes": [
         "error",
         "single"
      ],
      "semi": [
         "error",
         "always"
      ],
      "space-before-blocks": [
         "error",
         "always"
      ],
      "keyword-spacing": [
         "error",
         {
            "overrides": {
               "if": { "after": false },
               "for": { "after": false },
               "while": { "after": false },
               "do": { "after": false },
            }
         }
      ],
      "comma-spacing": [
         "error",
         { "before": false, "after": true }
      ],
      "comma-style": [
         "error",
         "last"
      ],
      "no-lonely-if": [
         "error"
      ],
      "quote-props": [
         "error",
         "always"
      ],
      "padded-blocks": [
         "error",
         "never"
      ],
      "no-console": "off",
      "no-empty-character-class": "error",
      "array-bracket-spacing": [
         "error",
         "never"
      ],
      "func-name-matching": "error"
   }
};