// eslint-disable-next-line no-undef
module.exports = {
    "extends": [
        "@salesforce/eslint-config-lwc/recommended",
    ],
    "settings": {
        "jest": {
            "version": 26
        }
    },
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],
        // disable rules from base configurations
        "for-direction": "off",
    }
};
