# Advanced Routing

Pluralsight course project by Deborah Kurata.

## Routing Parameters

### Required Parameters

In routing:

```
{ path: '/products/:id, component: ProductDetailComponent }
```

In ProductDetailComponent:

```
constructor(
  private route: ActivatedRoute,
  ...
) { }

ngOnInit() : void {
  const id = +this.route.snapshot.paramMap.get('id')
  ...
}
```

### Optional Parameters

In template:

```
[routerLink]="['/products', { name: productName, code: productCode, startDate: availabilityStart, endDate: availabilityEnd }]"
```

In component.ts:

```
constructor(
  private route: ActivatedRoute,
  ...
) { }

ngOnInit() : void {
  const name = +this.route.snapshot.paramMap.get('name')
  ...
}
```

### Query Parameters

Unlike optional params, query params can be retained across routing paths.

In template:

```
<a
  [routerLink]="['/products', product.id]"
  [queryParams]="{ filterBy: listFilter, showImage: showImage }"
>
```

To return query params from another template:

```
<button
  class="btn btn-outline-secondary mr-3"
  style="width: 80px"
  [routerLink]="['/products']"
  queryParamsHandling="preserve"
>
```

To read the retained params:

```
constructor(
  private route: ActivatedRoute,
  ...
) { }

ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || ''
    this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true'
    ...
  }
```

## Route Resolving

For pre-fetching data we can use a route resolver.

### Route's Data Property

We can provide static data to a route using the data property.

In the route:

```
{
  path: '/products',
  component: ProductListComponent,
  data: { pageTitle: 'Product List' }
}
```

To get the data:

```
constructor(
  private route: ActivatedRoute,
  ...
) { }

ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['pageTitle']
    ...
  }
```

### Route Resolver

For dynamic data we need to use a resolver.

- Create a service
- Implement the Resolve interface
- Add the resolver to your routing
- In the component, read the resolved data from the route

## Child Routes

Example:

```
{
  path: 'products/:id/edit',
  component: ProductEditComponent,
  resolve: { resolvedData: ProductResolver },
  children: [
    {
      path: '',
      redirectTo: 'info',
      pathMatch: 'full'
    },
    {
      path: 'info',
      component: ProductEditInfoComponent
    },
    {
      path: 'tags',
      component: ProductEditTagsComponent
    }
  ]
}
```

### Using Resolved Data of Parent Component

```
ngOnInit(): void {
  this.route.parent.data.subscribe(data => {
    this.product = data['resolvedData'].product
  })
}
```

## Component-less Routes

Component-less routes “consume” URL segments without instantiating components.

Since there is no component containing a router-outlet, all the children will be displayed in the higher level outlet.

Since there is no component associated with the route, the router will merge its params, data, and resolve into the children. As a result the sibling components can access the common parameters directly, without going through the parent route.
