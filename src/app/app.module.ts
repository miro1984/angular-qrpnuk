import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PanelComponent } from "./components/panel/panel.component";
import { ColorBlockComponent } from "./components/color-block/color-block.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [
    AppComponent,
    PanelComponent,
    ButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
