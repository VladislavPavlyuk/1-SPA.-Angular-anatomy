// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    template: `<bio-child-comp><h2>This article is about {{name}} the {{title}}.</h2></bio-child-comp>

                <quotes-child-comp [quote]="quote"></quotes-child-comp>  
                <input type="text" [(ngModel)]="quotetext" />
                <button (click)="addquote()">Add quote</button>

                <links-child-comp  [link]="link"></links-child-comp>
                <input type="text" [(ngModel)]="linktext" />
                <button (click)="addlink()">Add link</button>
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

    quote:string = `
    "Patience is a key element of success"
    `; 
    quotetext:string = "";
    addquote() :void {
        this.quote += this.quotetext;
    }

    link:string = `
    "https://en.wikipedia.org/wiki/Bill_Gate"

    `;
    linktext:string ="";
    addlink() :void {
        this.link += this.linktext;
    }
}