import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main class="bg-blue-500">
      <router-outlet />
    </main>
  `,
  styleUrl: '../ui/css/styles.css'
})
export class AppComponent {
  title = 'snippets-angular';
}
