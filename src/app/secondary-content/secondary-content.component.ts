import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'secondary-content',
  templateUrl: './secondary-content.component.html'
})
export class SecondaryContentComponent {

  constructor(
    private router: Router) {
  }

  public close(): void {
    this.router.navigate([{ outlets: { secondary: null } }]);
  }
}
