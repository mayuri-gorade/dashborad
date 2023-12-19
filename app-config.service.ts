import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;
  constructor(
    private http: HttpClient
  ) {}
  public loadConfig(): Promise<any> {
    return Promise.resolve()
      .then(() => {
        return this.http

        .get('./assets/config/config.json')
          .toPromise()
          .then((config: any) => {
            console.log('inn');
            this.config = config;
          })
          .catch((err: any) => {
            console.error(err);
          });
      })
      // .then(() => {
      //   if (
      //     !this.config.underMaintenance ||
      //     !this.config.underMaintenance.enable
      //   ) {
      //     return initializer(this._keyCloakService, this.config);
      //   }
      // }
     // );
  }

  getConfig() {
    return this.config;
  }
}
