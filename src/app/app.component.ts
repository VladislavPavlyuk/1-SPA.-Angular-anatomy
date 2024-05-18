// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    template: 
    `     

    <div><h2>This article is about {{name}} the {{title}}.</h2></div>

    <button (click)="getBio()">Bio</button>
    <button (click)="getLinks()">Links</button>
    <button (click)="getQuotes()">Quotes</button><hr>

    <div [ngSwitch]="condition">
        <ng-template ngSwitchCase="Bio"><bio-child-comp></bio-child-comp></ng-template>

        <ng-template ngSwitchCase="Links"><links-child-comp> Links </links-child-comp></ng-template>

        <ng-template ngSwitchCase="Quotes"><quotes-child-comp> Quotes </quotes-child-comp></ng-template>

        <ng-template ngSwitchDefault><a>Please choose the tag...</a><br></ng-template>

    </div>
    `,
        
    styles: [`  h2, p {color:#333;}
                bio-child-comp{font-size:14px; font-family:Verdana;}
                li, quotes-child-comp {font-size:16px; font-family:Verdana; font-style:Italic; margin-right : 200px;}
                a, links-child-comp{font-size:12px; font-family:Verdana;}
                `]
})
export class AppComponent { 

    name = 'William Henry Gates III';
    title = 'co-founder of Microsoft';

    condition: string="";

    getBio(){
        this.condition = "Bio";
    }
    getLinks(){
        this.condition = "Links";
    }
    getQuotes(){
        this.condition = "Quotes";
    }
}