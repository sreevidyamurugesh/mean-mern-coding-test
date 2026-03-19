import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '0bb8f4c1ec43dd53c4fb93757bf20678';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(
      `https://goweather.herokuapp.com/weather/Bangalore`
    );
  }
}