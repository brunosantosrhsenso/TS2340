import { Component } from '@angular/core';

export class MyLibraryComponentBase  {
  public get name(): string {
    return 'My';
  }
}

@Component({
  selector: 'lib-MyLibrary',
  template: '',
  styles: []
})
export class MyLibraryComponent extends MyLibraryComponentBase {

  public get name(): string {
    return super.name + 'Application';
  }

}
