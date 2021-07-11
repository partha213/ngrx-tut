import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";
import * as TutorialActions from './../actions/tutorial.action';


const initialState: Tutorial[] = [{
    name: 'Javascript Tutorial',
    url: 'https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg'
},{
  name: 'Typescript Tutorial',
  url: 'https://cdn.pixabay.com/photo/2017/09/28/07/40/typewriter-2794560_960_720.jpg'
},{
  name: 'Angular Tutorial',
  url: 'https://cdn.pixabay.com/photo/2015/09/17/16/40/book-944462_960_720.jpg'
},{
  name: 'Bootstrap Titorial',
  url: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg'
},
]

export function reducer(state: Tutorial[] = initialState, action: TutorialActions.Actions){
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            let tmp = [...state]
            tmp.splice(action.payload,1);
            return tmp
        default:
            return state;
    }
}
