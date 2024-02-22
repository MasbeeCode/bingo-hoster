import { Component } from '@angular/core';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
})
export class DefaultLayoutComponent {
  title: string = 'bingo-hoster-app';

  constructor() {}
}
