# Storybook

## Run Storybook

> yarn storybook

## Create Component

> ng g c task

> ng g class task/task.stories --skip-tests

> ng g interface task/task

## Accessibility

> yarn add @storybook/addon-a11y

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

## Deploy Storybook

To output a static Storybook in the storybook-static directory:

> yarn build-storybook

## Chromatic

Chromatic is a free publishing service made by the Storybook maintainers. It allows us to deploy and host our Storybook safely and securely in the cloud.

> yarn add -D chromatic

We can log into Chromatic using our GitHub account [here](https://www.chromatic.com/start).

- Create a new project
- Choose a GitHub repo
- Copy the unique project-token
- Build and deploy storybook

> npx chromatic --project-token=<project-token>

## GitHub Actions

GitHub Actions is a free CI service that's built into GitHub.

Create a file at `.github/workflows/chromatic.yml`:

```yaml
# Workflow name
name: "Chromatic Deployment"

# Event for the workflow
on: push

# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - run: yarn
        #👇 Adds Chromatic as a step in the workflow
      - uses: chromaui/action@v1
        # Options required for Chromatic's GitHub Action
        with:
          #👇 Chromatic projectToken, see https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/ to obtain it
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          token: ${{ secrets.GITHUB_TOKEN }}
```

## GitHub Secrets

Secrets are secure environment variables provided by GitHub so that you don't need to hard code the project-token.
