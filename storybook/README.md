# Storybook

## Install Storybook

> npx storybook init

Add builder to angular.json:

```json
{
  "storybook": {
    "builder": "@storybook/angular:start-storybook",
    "options": {
      "browserTarget": "angular-cli:build",
      "port": 6006
    }
  },
  "build-storybook": {
    "builder": "@storybook/angular:build-storybook",
    "options": {
      "browserTarget": "angular-cli:build"
    }
  }
}
```

## Run Storybook

> yarn storybook

## Used commands

### Create Component

> ng g c task

> ng g class task/task.stories --skip-tests

> ng g interface task/task

### Accessibility

> yarn add @storybook/addon-a11y

_Update Storybook configuration in .storybook/main.js and restart the Storybook Server._

### Composite component

> ng g c task-list

> ng g class task-list/task-list.stories --skip-tests

### ngxs

> yarn add @ngxs/store @ngxs/logger-plugin @ngxs/devtools-plugin

### Deploy Storybook

To output a static Storybook in the storybook-static directory:

> yarn build-storybook

## Component-Driven Development

CDD allows us to gradually expand complexity as we move up the component hierarchy. Among the benefits are a more focused development process and increased coverage of all possible UI permutations. In short, CDD helps us build higher-quality and more complex user interfaces.

## Testing

- **Manual tests** rely on developers to manually look at a component to verify it for correctness. They help us sanity check a component’s appearance as we build.

- **Accessibility tests** with a11y addon verify that the component is accessible to everyone. They're great for allowing us to collect information about how people with certain types of disabilities use our components.

- **Interaction tests** with the play function verify that the component behaves as expected when interacting with it. They're great for testing the behavior of a component when it's in use.

- **Visual regression tests**, also called visual tests, are designed to catch changes in appearance. They work by capturing screenshots of every story and comparing them commit-to-commit to surface changes. It's perfect for verifying graphical elements like layout, color, size, and contrast.

### Test Runner

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

## Visual Regression Testing

When we make a PR there will be "🟡 UI Tests" section, where we get notified about changes in the UI.

By having to review these changes we can ensure they don't occur by accident. If a change is intentional, we'll need to update the baseline to compare future tests to the latest version of the story.
