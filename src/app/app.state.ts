import { Tutorial } from "./models/tutorial.model";
import { UserProfile } from "./models/userprofile.model"

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly userProfile: UserProfile;
  readonly location: string;
}
