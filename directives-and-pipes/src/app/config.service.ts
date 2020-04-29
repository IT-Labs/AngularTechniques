import { IConfig } from './only-for-screen/screen-config.model';
import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private _config$: BehaviorSubject<IConfig>;
  public config$ : Observable<IConfig>;

  constructor() {
    this._config$ = new BehaviorSubject<IConfig>(this.config);
    this.config$ = this._config$.asObservable(); 
   }
 
 

  setConfig(config: IConfig) {
    this._config$.next(config);
  }

  
  config : IConfig= {
    mobile: 600 , 
    tablet: 900
  };
  
}
