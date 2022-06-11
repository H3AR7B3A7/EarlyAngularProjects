# Spin Anything

Spin text, images or anything else easily.

## Import

```typescript
import { SpinAnythingModule } from '@h3ar7b3a7/spin-anything/src/public-api';

@NgModule({
  imports: [BrowserModule, SpinAnythingModule ],
  /* ... */
})
```

## Inputs

- img
- text
- size: default = '100'
- relativeSize
- speed: default = '3'
- color: default = '#000'
- weight: default = '300'
- fontSize: default = '20'
- relativeFontSize
- fontStyle: default = 'normal'

## Examples

```html
<spinner>Example</spinner>
```

```html
<spinner
  text="Example"
  img="/assets/img/some_image.png"
  relativeSize="15"
  speed="5"
  color="blue"
  weight="bold"
  relativeFontSize="2"
></spinner>
```

There are some more examples in [this Stackblitz](https://stackblitz.com/edit/angular-ivy-mxj7mi?file=src/app/app.component.html)
