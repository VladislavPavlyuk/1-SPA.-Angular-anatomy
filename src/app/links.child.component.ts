// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'links-child-comp',
    template: 	`				
				<a href = "https://en.wikipedia.org/wiki/Bill_Gates">https://en.wikipedia.org/wiki/Bill_Gates</a><br>
				<a href = "https://www.gatesfoundation.org/">https://www.gatesfoundation.org/</a><br>
				<a href = "https://www.gatesnotes.com/">https://www.gatesnotes.com/</a><br>
				<a href = "https://twitter.com/billgates">https://twitter.com/billgates</a><br>
				`
				
})
export class LinksChildComponent { 

	@Input() links = [];

}