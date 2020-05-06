import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {}
}
