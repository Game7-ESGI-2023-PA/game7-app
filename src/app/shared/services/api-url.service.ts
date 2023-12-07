import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  private apiUrls: ApiUrlsInterface | undefined;

  constructor (private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get<ApiUrlsInterface>(environment.apiUrlConfig).subscribe(
      data => this.apiUrls = data);
  }

  getApiUrl(): string {
    if(this.apiUrls?.apiUrl !== undefined) {
      return this.apiUrls.apiUrl;
    }
    return "http://localhost/api";
  }

  getMercureUrl(): string {
    if(this.apiUrls?.mercureUrl !== undefined) {
      return this.apiUrls.mercureUrl;
    }
    return "http://localhost/api/.well-known/mercure";
  }
}

interface ApiUrlsInterface {
  apiUrl: string,
  mercureUrl: string
}
