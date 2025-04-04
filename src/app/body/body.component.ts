import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SearchComponent } from '../search/search.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { MapComponent } from '../map/map.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-body',
  imports: [
    HeaderComponent,
    WelcomeComponent,
    DashboardComponent,
    SearchComponent,
    ChatbotComponent,
    MapComponent,
    FooterComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
