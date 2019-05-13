import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCreateMultiple]'
})
export class AppCreateMultipleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input()
  set appCreateMultiple(times: number) {
    this.viewContainer.clear();
    for (let i = 0 ; i < times ; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
