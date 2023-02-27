import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateStyleComponent } from './inline-template-style/inline-template-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { EventsFunctionComponent } from './events-function/events-function.component';
import { EventsInputComponent } from './events-input/events-input.component';
import { EventsCounterComponent } from './events-counter/events-counter.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ElseIfComponent } from './else-if/else-if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { LoopComponent } from './loop/loop.component';
import { NestedloopComponent } from './nestedloop/nestedloop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { FormBasicComponent } from './form-basic/form-basic.component';

import { FormsModule } from '@angular/forms';
import { HtmlToggleComponent } from './html-toggle/html-toggle.component';
import { TodoListComponent } from './todo-list/todo-list.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    InlineTemplateStyleComponent,
    EventsFunctionComponent,
    EventsInputComponent,
    EventsCounterComponent,
    PropertyBindingComponent,
    IfElseComponent,
    ElseIfComponent,
    SwitchCaseComponent,
    LoopComponent,
    NestedloopComponent,
    StyleBindingComponent,
    HeaderComponent,
    FormBasicComponent,
    HtmlToggleComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
