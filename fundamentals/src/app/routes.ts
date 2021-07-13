import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventListResolver } from './events/events-list-resolver.service'
import { EventResolver } from './events/event-resolver.service'

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent,  resolve: {event: EventResolver} },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { 
    path: 'user', 
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
]