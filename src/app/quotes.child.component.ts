// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input} from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'quotes-child-comp',
    template: 	`
      <div><h2>Famouse quotes:</h2> 
        <input type="text" [(ngModel)]="quotetext" />
        <button (click)="addquote()">Add quote</button>        
        
        <li>"If you think your teacher is tough, wait till you get a boss"</li>
        <li>"Life is not fair — get used to it! "</li>
        <li>"Success is a lousy teacher. It seduces smart people into thinking they can’t lose"</li>
        <li>"Be nice to nerds. Chances are you’ll end up working for one"</li>   


          <a *ngFor="let quote of quotes">
              <li>{{quote}}</li>
          </a>

      </div>
    `    
							
})
export class QuotesChildComponent { 

	@Input() quotes = [];

  quotetext:string = '"Patience is a key element of success"';

  addquote() :void {
      this.quotes.push(this.quotetext);
  }
}