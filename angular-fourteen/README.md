# Angular 14

## Standalone Components

- Change bootstrapping in main.ts:

```typescript
bootstrapApplication(AppComponent);
```

- Add some fields to the component decorator:
  - Standalone flag
  - Imports array

```typescript
@Component({
  standalone: true,
  imports: [
    AppRoutingModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

- Remove app.module.ts

## Strongly-Typed Reactive Forms

```typescript
// TODO: Create example
```

---

Date of creation: 6-6-2022