module.exports = {
  deepsense: {
    input: '../openapi.json',
    output: {
      mode: 'single',
      target: 'src/lib/api-client/api.ts',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: 'src/lib/api/mutator.ts',
          name: 'customInstance',
        },
      },
    },
  },
};
