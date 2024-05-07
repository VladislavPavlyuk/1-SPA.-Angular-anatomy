// Данный модуль является входной точкой в приложение.
// С помощью директив import импортируется ряд необходимых модулей.

import { NgModule } from '@angular/core'; // функциональность декоратора NgModule для создания текущего модуля
import { BrowserModule } from '@angular/platform-browser'; // модуль, необходимый для работы с браузером
import { FormsModule } from '@angular/forms'; // модуль, необходимый для работы с формами html
import { AppComponent } from './app.component'; // функциональность корневого компонента приложения
import { BioChildComponent }   from './bio.child.component';
import { QuotesChildComponent }   from './quotes.child.component';
import { LinksChildComponent }   from './links.child.component';

// Функция-декоратор @NgModule ассоциирует метаданные с классом модуля AppModule.
@NgModule({
    imports: [BrowserModule, FormsModule], // другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
    declarations: [AppComponent, LinksChildComponent, BioChildComponent, QuotesChildComponent], //  классы представлений (view classes), которые принадлежат модулю
    bootstrap: [AppComponent] // корневой компонент, который вызывается по умолчанию при загрузке приложения
})
export class AppModule { }