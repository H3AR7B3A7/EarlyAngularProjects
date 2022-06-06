import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input()
  appPermission!: string[];

  // <div *appPermission="['admin','agent']"></div> NOT VISIBLE when !== amin or agent
  private currentRole = 'agent';

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }

  ngOnInit(): void {
    if (this.appPermission.indexOf(this.currentRole) === -1){
      this.vc.clear;
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }
}
