import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  tutorials: Observable<Tutorial[]>
  addCourse = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  constructor( private store: Store<AppState>) {
      this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

  addTutorial(name: string, url: string){
    this.store.dispatch( new TutorialActions.AddTutorial({name: name, url:url}))
  }

  delTutorial(index: number) {
    this.store.dispatch( new TutorialActions.RemoveTutorial(index));

  }
}
