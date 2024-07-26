# Repro steps:
```
export DATADOG_API_KEY=<your_api_key>
nvm use
yarn
yarn test
```

There are just 2 deps, npm i should be fine if you don't have yarn installed.

# Expected result:
Something mentioning test service `my-javascript-service` in https://app.datadoghq.com/ci/test-runs.
Or something in the terminal.

# Actual result:
Nothing in the terminal, the same output as `yarn coverage`.