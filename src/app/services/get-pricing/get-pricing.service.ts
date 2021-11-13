import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetPricingService {

  pricingURL: string = 'https://api.decisionrules.io/rule/solve/eaff57a6-a58f-fe3f-de58-fc227d8b0d0c/';
  params: any = [
    {
      "id": "P1",
      "period": "month"
    },
    {
      "id": "P1",
      "period": "year"
    },
    {
      "id": "P2",
      "period": "month"
    },
    {
      "id": "P2",
      "period": "year"
    },
    {
      "id": "P3",
      "period": "month"
    },
    {
      "id": "P3",
      "period": "year"
    },
    {
      "id": "P4",
      "period": "month"
    },
    {
      "id": "P4",
      "period": "year"
    }
  ];

  constructor(
    private http: HttpClient
  ) {
  }

  getPricing(): Observable<any> {
    return this.http.post<any>(this.pricingURL, {data: this.params})
      .pipe(
        map(val =>
          [
            [
              "P1",
              val[0][0],
              val[1][0]
            ],
            [
              "P2",
              val[2][0],
              val[3][0]
            ],
            [
              "P3",
              val[4][0],
              val[5][0]
            ],
            [
              "P4",
              val[6][0],
              val[7][0]
            ]
          ]
        )
      );
  }
}
