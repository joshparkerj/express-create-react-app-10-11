module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.jsx$': ['@swc/jest', { jsc: { parser: { jsx: true } } }],
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  coverageReporters: [
    'cobertura',
  ]
};
