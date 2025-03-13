import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DataRectangleComponent } from './data-rectangle/data-rectangle.component';
import { OptionsSectionComponent } from './options-section/options-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { MapComponent } from "./map/map.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBarComponent, FooterComponent, DataRectangleComponent, OptionsSectionComponent, SearchSectionComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Report-Card';
}
