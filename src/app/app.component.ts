import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counterApp';
  count: number = 0;

  handleCounter(parameter: string) {
    switch (parameter) {
      case 'plus':
        this.count += 1;
        break;
      case 'minus':
        if (this.count > 0) {
          this.count -= 1;
        }
        break;
      case 'reset':
      default:
        this.count = 0;
        break;
    }
  }
}
