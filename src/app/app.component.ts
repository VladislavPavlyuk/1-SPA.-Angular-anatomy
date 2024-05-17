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
    <a>Please choose the tag...</a><br>

    <button (click)="getBio()">Bio</button>
    <button (click)="getLinks()">Links</button>
    <button (click)="getQuotes()">Quotes</button><hr>

    <div *ngIf="conditionBio"><bio-child-comp></bio-child-comp></div>
    <div *ngIf="!conditionBio"></div>

    <div *ngIf="conditionLinks"><links-child-comp></links-child-comp></div>
    <div *ngIf="!conditionLinks"></div>

    <div *ngIf="conditionQuotes"><quotes-child-comp></quotes-child-comp></div>
    <div *ngIf="!conditionQuotes"></div>
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

    conditionBio: boolean=false;
    conditionLinks: boolean=false;
    conditionQuotes: boolean=false;

    getBio(){
        this.conditionBio=!this.conditionBio;
    }
    getLinks(){
        this.conditionLinks=!this.conditionLinks;
    }
    getQuotes(){
        this.conditionQuotes=!this.conditionQuotes;
    }

}