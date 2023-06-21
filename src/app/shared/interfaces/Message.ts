import {UserInterface} from "./UserInterface";

export interface Message {
  sender: UserInterface;
  date: string;
  content: string;
}
