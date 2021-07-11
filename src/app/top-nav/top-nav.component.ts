import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  selectedId$ = this.store.pipe(select((state: any) => state.featureName.selectedId));
  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log(this.selectedId$);
  }

}
