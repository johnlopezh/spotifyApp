import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  artistas: any[] = [];
  albums: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';

  constructor( public http: HttpClient) {
  }
  token: string = 'BQBR0xgf5QEHDCyLc0mfyL6yanV9AqB6h2ZyIa2bhebyeNRKaY_qKIB8-ExV_qycjyYH9I2ITtuKeHXA_JQ';

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
  getTopArtist(id: string) {
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=ES`;
    let headers = this.getHeader();
    return  this.http.get(url, { headers });

  }

}
