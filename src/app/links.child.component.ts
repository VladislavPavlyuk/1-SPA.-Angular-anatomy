// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'links-child-comp',
    template: 	`
				<h1>Usefull links:</h1>
				<a href = {{link}}>{{link}} </a>
				`
})
export class LinksChildComponent { 

	@Input() link: string = "";

}