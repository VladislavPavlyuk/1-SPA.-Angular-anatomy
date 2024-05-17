// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'links-child-comp',
    template: 	`				
		<div><h2>Usefull links:</h2>

		<input type="text" [(ngModel)]="linktext" />

		<button (click)="addlink()">Add link</button><br>
		
				<a href = "https://www.gatesfoundation.org/">https://www.gatesfoundation.org/</a><br>
				<a href = "https://www.gatesnotes.com/">https://www.gatesnotes.com/</a><br>
				<a href = "https://twitter.com/billgates">https://twitter.com/billgates</a><br>

				<a *ngFor="let link of links">
						<a href = {{link}}>{{link}}</a><br>
				</a>
		</div>

				`				
})
export class LinksChildComponent { 

	@Input() links = [];

	linktext:string = "https://en.wikipedia.org/wiki/Bill_Gates";

	addlink() :void {
			this.links.push(this.linktext);
	}
}