import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MessageInterface } from "../../interfaces/Message";
import {UserInterface} from "../../interfaces/UserInterface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @Input()
  currentUser : UserInterface | undefined ;

  @Input()
  messages: MessageInterface[] | undefined;

  constructor( private userService : UserService) {}

  @Output() sendMethod = new EventEmitter<string>();

  sendMessage(message: string) {
    this.sendMethod.emit(message);
  }

}
