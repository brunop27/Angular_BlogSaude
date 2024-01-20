import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MainSectionComponent } from "../../components/main-section/main-section.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuBarComponent, MainSectionComponent, BigCardComponent]
})
export class HomeComponent {

}
