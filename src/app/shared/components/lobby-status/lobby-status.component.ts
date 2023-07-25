import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lobby-status',
  templateUrl: './lobby-status.component.html',
  styleUrls: ['./lobby-status.component.css']
})
export class LobbyStatusComponent {

  @Input() status: string | undefined;

}
