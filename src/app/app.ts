import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

/**
 * Root Application Component
 * Main layout with header and router outlet
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  readonly title = 'StoreFront - Your Online Shopping Destination';
}
