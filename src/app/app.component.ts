import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Estudos Angular 2';
  foto: string = 'favicon.ico';

  msgAlerta(): void {
    alert('Livro Angular 2');
  }

}

