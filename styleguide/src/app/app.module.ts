import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EscapeHtmlService } from './shared/escape-html.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { ColorsComponent } from './components/colors/colors.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonsAndLinksComponent } from './components/buttons-and-links/buttons-and-links.component';
import { InputsAndDropdownComponent } from './components/inputs-and-dropdown/inputs-and-dropdown.component';
import { CheckboxAndRadioComponent } from './components/checkbox-and-radio/checkbox-and-radio.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { OthersComponent } from './components/others/others.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { WizardsComponent } from './components/wizards/wizards.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    ColorsComponent,
    TypographyComponent,
    IconsComponent,
    ButtonsAndLinksComponent,
    InputsAndDropdownComponent,
    CheckboxAndRadioComponent,
    MenuComponent,
    HeaderFooterComponent,
    OthersComponent,
    DataTablesComponent,
    WizardsComponent,
    CardsComponent,
    ModalsComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EscapeHtmlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
