module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native'],
  rules: {
    // Add or modify rules as needed for your project
    'react-native/no-inline-styles': 'off', // Allowing inline styles for flexibility
    'react-native/no-color-literals': 'error', // Enforcing color literals
    'react-native/no-raw-text': 'error', // Disallowing raw text
    'react-native/no-single-element-style-arrays': 'error', // Enforcing style arrays for multiple styles
    'react-native/split-platform-components': 'error', // Enforcing split platform components
    'react-native/no-raw-text': 'off', // Allowing raw text
    'react-native/no-unused-styles': 'error', // Enforcing usage of styles
    'react-native/sort-styles': 'off', // Sorting styles, can be turned on if desired
    'react-native/no-color-literals': 'off', // Disallowing color literals, can be turned on if desired
    'react-native/no-raw-text': 'off', // Disallowing raw text, can be turned on if desired
    'react-native/no-single-element-style-arrays': 'off', // Disallowing single element style arrays, can be turned on if desired
    'react-native/split-platform-components': 'off', // Splitting platform components, can be turned on if desired
  },
};
