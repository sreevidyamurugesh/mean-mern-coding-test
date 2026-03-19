import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  weather: any;

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.service.getWeather().subscribe({
      next: (res: any) => {
        this.weather = res;
      },
      error: (err: any) => {
        console.error('Failed to fetch weather data:', err);
        this.weather = null;
      }
    });
  }
}