import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../interfaces/Message";
import {UserInterface} from "../../interfaces/UserInterface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit {

  currentUser : UserInterface | undefined ;

  @Input()
  messages: Message[] | undefined;

  constructor( private userService : UserService) {}


  ngOnInit() {

    this.currentUser = {
      id: "1",
      nickname: "UserInterface",
      email: "user@example.com",
      photoUrl: "https://example.com/user.jpg"
    };

    this.messages = [
      {
        sender: {
          id: "1",
          nickname: "UserInterface",
          email: "user@example.com",
          photoUrl: "https://example.com/user.jpg"
        },
        date: "2023-06-20T10:00:00",
        content: "Salut ! Comment ça va ?"
      },
      {
        sender: {
          id: "2",
          nickname: "Assistant",
          email: "assistant@example.com",
          photoUrl: "https://example.com/assistant.jpg"
        },
        date: "2023-06-20T10:01:00",
        content: "Bonjour ! Je vais bien, merci. Comment puis-je t'aider aujourd'hui ?"
      },
    ];
    console.log(this.messages);
   /* this.userService.me().subscribe(
      (user: UserInterface) => this.currentUser = user,
      (err: Error) => console.error('Observer got an error: ' + err)
    );*/
  }

}
