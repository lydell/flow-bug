# flow bug

1. `yarn`
2. `yarn flow`

Actual: `No errors!`

Expected: ``DoesNotExist: Property not found in 'exports of `react`'``

Note that [eslint-plugin-flowtype-errors](https://github.com/amilajack/eslint-plugin-flowtype-errors) somehow runs `flow` in some way that _does_ show an error:

```
$ yarn eslint
/home/lydell/bugs/flow/flow-typed/foobar.js
  6:45  error  DoesNotExist: Property not found in 'exports of `react`'. See line 3  flowtype-errors/show-errors

✖ 1 problem (1 error, 0 warnings)
```
