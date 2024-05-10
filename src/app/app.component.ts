// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    template: `<bio-child-comp><h2>This article is about {{name}} the {{title}}.</h2></bio-child-comp>
                
                <div><h2>Famouse quotes:</h2> 
                <input type="text" [(ngModel)]="quotetext" />
                <button (click)="addquote()">Add quote</button>  

                    <p *ngFor="let quote of quotes">
                        <li>{{quote}}</li>
                    </p>
                </div>
                <quotes-child-comp [quotes]="quotes"></quotes-child-comp>                 

                <div><h1>Usefull links:</h1>
                <input type="text" [(ngModel)]="linktext" />
                <button (click)="addlink()">Add link</button>                
                    <p *ngFor="let link of links">
                        <a href = {{link}}>{{link}}</a>
                    </p>
                </div>
                <links-child-comp  [links]="links"></links-child-comp>
                        `,

    styles: [`  h2, p {color:#333;}
                bio-child-comp{font-size:14px; font-family:Verdana;}
                quotes-child-comp {font-size:16px; font-family:Verdana; font-style:Italic; margin-right : 200px;}
                links-child-comp{font-size:12px; font-family:Verdana;}
                `]
})
export class AppComponent { 

    name = 'William Henry Gates III';
    title = 'co-founder of Microsoft';

    quotes = []; 
    quotetext:string = '"Patience is a key element of success"';

    addquote() :void {
        this.quotes.push(this.quotetext);
    }

    links = [];
    linktext:string = "https://en.wikipedia.org/wiki/Bill_Gate";

    addlink() :void {
        this.links.push(this.linktext);
    }
}