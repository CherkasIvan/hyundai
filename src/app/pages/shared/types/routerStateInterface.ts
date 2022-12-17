import {Data, Params} from '@angular/router';

export interface RouterStateInterface {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}
