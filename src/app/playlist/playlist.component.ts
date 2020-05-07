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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('getting data');
    this.dataService.getTracks(1).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
  }
}
