import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { AppConfigService } from '../shared/interceptors/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class BarchartService {
  urlConfig: any;apiUrl: any;api_balicuat1: any;api_balic_uat: any
  isDisabled: any = new BehaviorSubject<any>(true);
  constructor(private httpClient: HttpClient,private config: AppConfigService) {
    this.apiUrl = environment.apiUrl;
   }
  getbardetail(){
    return this.httpClient.get<any>(`${this.apiUrl}`);

  }

}
