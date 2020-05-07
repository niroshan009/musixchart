import { Component, OnInit } from '@angular/core';
import { ITrack } from 'src/model/track';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  playlist: ITrack[];
  country: string = 'uk';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('getting data');
    this.dataService.getTracks(3, this.country).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
  }

  onchange(): void {
    console.log(this.country);
    console.log('getting data');
    this.dataService.getTracks(3, this.country).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
  }
}
