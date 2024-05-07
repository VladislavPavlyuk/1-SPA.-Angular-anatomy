// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input} from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'quotes-child-comp',
    template: 	`
				<h2>Famouse quotes:</h2>
				<p>"{{quote}}"></p><br />
				`
})
export class QuotesChildComponent { 

	@Input() quote: string = "";

}