/* eslint-disable line-comment-position */
module.exports = {
  root: true,
  extends: ['webpack','eslint:recommended'],
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    "brace-style": 0, // enforce one true brace style (off by default)
    "camelcase": 0, // require camel case names
    "comma-spacing": 0, // enforce spacing before and after comma
    "comma-style": 0, // enforce one true comma style (off by default)
    "consistent-this": 0, // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 0, // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0, // require function expressions to have a name (off by default)
    "func-style": 0, // enforces use of function declarations or expressions (off by default)
    "key-spacing": 0, // enforces spacing between keys and values in object literal properties
    "max-nested-callbacks": 0, // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": 0, // require a capital letter for constructors
    "new-parens": 0, // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-array-constructor": 0, // disallow use of the Array constructor
    "no-inline-comments": 0, // disallow comments inline after code (off by default)
    "no-lonely-if": 0, // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": 0, // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": 0, // disallow multiple empty lines (off by default)
    "no-nested-ternary": 0, // disallow nested ternary expressions (off by default)
    "no-new-object": 0, // disallow use of the Object constructor
    "no-space-before-semi": 0, // disallow space before semicolon
    "no-spaced-func": 0, // disallow space between function identifier and application
    "no-ternary": 0, // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 0, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
    "no-wrap-func": 0, // disallow wrapping of non-IIFE statements in parens
    "one-var": 0, // allow just one var statement per function (off by default)
    "operator-assignment": 0, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "padded-blocks": 0, // enforce padding within blocks (off by default)
    "quote-props": 0, // require quotes around object literal property names (off by default)
    "quotes": 0, // specify whether double or single quotes should be used
    "semi": 0, // require or disallow use of semicolons instead of ASI
    "sort-vars": 0, // sort variables within the same declaration block (off by default)
    "space-after-function-name": 0, // require a space after function names (off by default)
    "space-after-keywords": 0, // require a space after certain keywords (off by default)
    "space-before-blocks": 0, // require or disallow space before blocks (off by default)
    "space-in-brackets": 0, // require or disallow spaces inside brackets (off by default)
    "space-in-parens": 0, // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 0, // require spaces around operators
    "space-return-throw-case": 0, // require a space after return, throw, and case
    "space-unary-ops": 0, // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-line-comment": 0, // require or disallow a space immediately following the // in a line comment (off by default)
    "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)
  },
};
