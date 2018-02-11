import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {REST_URL, RestDataSourceService} from './services/data-source.service';
import {HttpClientModule} from '@angular/common/http';
import {TableComponent} from './components/table/table.component';
import {DescriptionCellComponent} from './components/description-cell/description-cell.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {DrawWindowDirective} from './directives/get-size.directive';
import {RegexpCleanerPipe} from './pipes/regexp.pipe';
import {ArrowComponent} from './components/arrow/arrow.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  declarations: [AppComponent, TableComponent,
    DescriptionCellComponent, SafeHtmlPipe, DrawWindowDirective, RegexpCleanerPipe, ArrowComponent],
  providers: [RestDataSourceService,
    {provide: REST_URL, useValue: 'http://localhost:3500/'},
    {provide: 'Window', useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
