import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';

  constructor( public http: HttpClient) {
  }
  token: string = 'BQArr3VK47Q7baG07M7SYVgsTGCNhVducbDdsR9pWnVfgHDVXTpr5TtWfDT5p3Am-IXRbaa9TS-BzQS_V_g';

  private getHeader(): HttpHeaders {
    let headers = new HttpHeaders ({
      'Authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getArtistas( termino: string) {
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;
    let headers = this.getHeader();

    return  this.http.get(url, { headers }).pipe(map( (resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
    }));
  }
  getArtista( id: string) {
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeader();

    return  this.http.get(url, { headers });

  }

}
