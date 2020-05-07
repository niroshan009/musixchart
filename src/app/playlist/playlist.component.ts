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
  config: any;

  constructor(private dataService: DataService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 1,
    };
  }

  ngOnInit(): void {
    console.log('getting data');
    this.dataService.getTracks(3, this.country).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
    this.config.totalItems = this.config.totalItems = this.dataService.getTrackCount();
  }

  onchange(): void {
    console.log(this.country);
    console.log('getting data');

    this.dataService.getTracks(1, this.country).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
    this.config.currentPage = 1;
  }
  pageChanged(event) {
    this.config.currentPage = event;
    this.dataService.getTracks(event, this.country).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
  }
}
