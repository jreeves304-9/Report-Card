import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize the map
    this.map = L.map('map', {
      center: [39.234783129085365, -76.82587564232945], // Example: Coordinates for Columbia, MD
      zoom: 12,
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Add a marker at a specific coordinate
    const marker = L.marker([39.234783129085365, -76.82587564232945]); // Example: Same coordinates as the map center
    marker.addTo(this.map);

    // Optional: Add a popup to the marker
    marker.bindPopup('Serigor University').openPopup();
  }
}
