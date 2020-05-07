import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrack } from 'src/model/track';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTrackCount(): number {
    return 100;
  }

  getTracks(pageNumber: number, country: string): Observable<ITrack[]> {
    let api: string = `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=${pageNumber}&page_size=5&country=${country}&f_has_lyrics=1`;
    this.http
      .get<any>(api)
      .subscribe((data) => console.log(data.message.body.track_list[0]));
    let tracks: ITrack[];
    return this.http
      .get<any>(api)
      .pipe(map((data) => (tracks = data.message.body.track_list)));
  }
}
