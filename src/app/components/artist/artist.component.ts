import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artistia: any = {};
  constructor( private _activRouter: ActivatedRoute, public _spotifyService: SpotifyService) { }

  ngOnInit() {
    this._activRouter.params.pipe(map(params => params ['id'])).subscribe( parametros  => {
        this._spotifyService.getArtista( parametros ).subscribe( artista => {
          console.log(artista);
          this.artistia = artista;
        });
    });
  }


}
