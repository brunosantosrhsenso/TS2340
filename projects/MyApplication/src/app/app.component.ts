import { Component } from '@angular/core';

export class AppComponentBase {
  public get name(): string {
    return 'My';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppComponentBase {
  title = 'MyApplication';

  public get name(): string {
    return super.name + 'Application';
  }
}
