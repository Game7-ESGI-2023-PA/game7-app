import { AfterViewInit, Component, Input } from "@angular/core";
import { LobbyGamingData, SvgElement } from "../../../shared/interfaces/LobbyInterface";

@Component({
  selector: 'app-lobby-play-game',
  templateUrl: './lobby-play-game.component.html',
  styleUrls: ['./lobby-play-game.component.css']
})
export class LobbyPlayGameComponent implements AfterViewInit{

  @Input() gamingData : LobbyGamingData | undefined = undefined;
  @Input() currentPlayerNumber: number | undefined = 1;

  private states: any[] | undefined = [];
  private errors: any[] | undefined = [];
  svg: SvgElement | undefined = undefined;

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.gamingData)
      this.setCurrentDisplay();
      console.log(this.states);
      console.log(this.errors);
      this.getSVGString();
    }, 1000)
  }

  setCurrentDisplay() {
    this.states = this.gamingData?.gameState
      ?.filter((st) => st['displays'] !== undefined);
    this.errors = this.gamingData?.gameState?.filter((st) => st['errors'] !== undefined);
  }

  getSVGString(): string {
    if(this.states) {
      const current = this.states.pop();
      const toDisplay  = current['displays'].find((disp: any) => disp['player'] === this.currentPlayerNumber)
      console.log(toDisplay);
      return`<svg width="${toDisplay['width']}" height="${toDisplay['height']}">`;

      // content.forEach((item) => {
      //   if (item.tag === 'rect') {
      //     svgString += `<rect x="${item.x}" y="${item.y}" width="${item.width}" height="${item.height}" fill="${item.fill}" />`;
      //   } else if (item.tag === 'text') {
      //     svgString += `<text x="${item.x}" y="${item.y}" fill="${item.fill}">${item.content}</text>`;
      //   }
      // });
      //
      // svgString += '</svg>';
      // return svgString;
    }
    return "";
  }


}
