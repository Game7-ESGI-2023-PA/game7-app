import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { MessageInterface } from "../../interfaces/Message";
import {UserInterface} from "../../interfaces/UserInterface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit, OnChanges {

  @Input()
  currentUser : UserInterface | undefined ;

  @Input()
  messages: MessageInterface[] | undefined;

  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;
  @ViewChild('scrolling') scrollingComponent: ElementRef | undefined;

  constructor( private userService : UserService) {}

  @Output() sendMethod = new EventEmitter<string>();

  sendMessage(message: string) {
    this.sendMethod.emit(message);
    this.inputElement.nativeElement.value = '';
    this.scrollChatToBottom(); // TODO: not working on first message after load
  }

  ngAfterViewInit(): void {
    this.scrollChatToBottom();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.scrollChatToBottom()
  }

  private scrollChatToBottom() {
    if (this.scrollingComponent && this.scrollingComponent.nativeElement) {
      const container = this.scrollingComponent.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }
}
