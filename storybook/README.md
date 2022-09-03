# Storybook

## Run Storybook

> yarn storybook

## Create Component

> ng g c task

> ng g class task/task.stories --skip-tests

> ng g interface task/task

## Accessibility

> yarn add @storybook/addon-a11y --save-dev

_Update Storybook configuration in .storybook/main.js and restart the Storybook Server._

## Composite component

> ng g c task-list

> ng g class task-list/task-list.stories --skip-tests

## ngxs

> yarn add @ngxs/store @ngxs/logger-plugin @ngxs/devtools-plugin

## Test Runner

> yarn add @storybook/test-runner

Add a script to package.json:

```json
{
  "scripts": {
    "test-storybook": "test-storybook"
  }
}
```

_While storybook is running, run this command in another terminal:_

> yarn test-storybook -- --watch

In the [official documentation](https://storybook.js.org/docs/angular/writing-tests/interaction-testing)) or [the Testing Handbook](https://storybook.js.org/tutorials/ui-testing-handbook) we can find more about interaction tests.

## Component-Driven Development

CDD allows us to gradually expand complexity as we move up the component hierarchy. Among the benefits are a more focused development process and increased coverage of all possible UI permutations. In short, CDD helps us build higher-quality and more complex user interfaces.
