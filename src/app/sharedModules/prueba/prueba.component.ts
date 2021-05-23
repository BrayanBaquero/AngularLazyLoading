import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaComponent implements OnInit {
   items:any;
  constructor() { }

  ngOnInit(): void {
      this.items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }

}
