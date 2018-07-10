import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: '/logo', pathMatch: 'full' },
  { path: 'logo', component: LogoComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'buttons-links', component: ButtonsAndLinksComponent },
  { path: 'inputs-dropdowns', component: InputsAndDropdownComponent },
  { path: 'checkbox-radio', component: CheckboxAndRadioComponent },
  { path: 'menus', component: MenuComponent },
  { path: 'header-footer', component: HeaderFooterComponent },
  { path: 'others', component: OthersComponent },
  { path: 'data-tables', component: DataTablesComponent },
  { path: 'wizards', component: WizardsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'progress-bar', component: ProgressBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
