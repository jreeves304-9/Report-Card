import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WelcomeComponent } from '../home/welcome/welcome.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { SearchComponent } from '../home/search/search.component';
import { ChatbotComponent } from '../home/chatbot/chatbot.component';
import { MapComponent } from '../home/map/map.component';
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
