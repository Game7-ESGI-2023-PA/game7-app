import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from "@angular/core";
import {
  GameDisplay,
  GameError,
  GameErrorType,
  GameInfo,
  GameInstruction,
  GameState,
  LobbyGamingData
} from "../../../shared/interfaces/LobbyInterface";
import { DomSanitizer } from "@angular/platform-browser";
import { LobbyService } from "../../../shared/services/lobby.service";

// All this for click only first
// TODO: list my requested actions
// TODO: print my requested actions properly on the page
// TODO: execute my requested action (send to api)

@Component({
  selector: 'app-lobby-play-game',
  templateUrl: './lobby-play-game.component.html',
  styleUrls: ['./lobby-play-game.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LobbyPlayGameComponent implements OnChanges {

  @Input() gamingData : LobbyGamingData | undefined = undefined;
  @Input() currentPlayerNumber: number | undefined;
  @Output() sendInstruction = new EventEmitter<any>();

  info: GameInfo[] | undefined = [];
  errors: GameError[] | undefined = [];
  mySvgDisplay = "<p>Loading</p>";
  isGameOver = false;

  constructor(private sanitizer: DomSanitizer, private lobbyService: LobbyService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['gamingData'] && changes['gamingData'].currentValue) {
      this.setCurrentGameInfo();
      this.mySvgDisplay = this.getSVGString();
    }
  }

  setCurrentGameInfo() {
    this.info = this.gamingData?.gameState
      ?.filter((info) => 'displays' in info ) as GameInfo[]

    this.errors = this.gamingData?.gameState
      ?.filter((error) => 'errors' in error) as GameError[]
    this.isGameOver = this.info[this.info.length - 1].game_state.game_over;
  }

  getMyCurrentDisplay(): GameDisplay | undefined {
    if(this.info) {
      const lastInfo = this.info[this.info.length - 1];
      return lastInfo?.displays?.find((d) => d.player === this.currentPlayerNumber)
    }
    return undefined;
  }

  getMyCurrentAction(): GameInstruction | undefined {
    if(this.info) {
      const lastInfo = this.info[this.info.length - 1];
      return lastInfo?.requested_actions?.find((i) => i.player === this.currentPlayerNumber);
    }
    return undefined;
  }

  generateSvgString(gameData: GameDisplay): string {
    let svgString = `<svg width="${gameData.width}" height="${gameData.height}" xmlns="http://www.w3.org/2000/svg">`;

    let styleContent = '';
    // Adding content to the SVG
    for (const item of gameData.content) {
      if (item.tag === "style") {
        styleContent = item.content;
        svgString += `<style>${styleContent}</style>`;
      } else {
        svgString += this.createElementString(item);
      }
    }
    svgString += "</svg>";
    return svgString;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createElementString(item: any): string {
    if (!item.tag) {
      return ''; // Skip invalid items without a tag
    }

    let elementString = `<${item.tag}`;

    // Add attributes to the element
    for (const key in item) {
      if (key !== "tag" && key in item) {
        elementString += ` ${key}="${item[key]}"`;
      }
    }

    elementString += " />";
    return elementString;
  }

  getSVGString(): string {
    this.setCurrentGameInfo();
    const display = this.getMyCurrentDisplay();
    if(display) {
      return <string>this.sanitizer.bypassSecurityTrustHtml(this.generateSvgString(display));
    }
    return "";
  }

  onDivClick(event: MouseEvent) {
    if(this.isGameOver) {
      return;
    }
    const action = this.getMyCurrentAction();
    if(action?.type === "CLICK") {
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      console.log('Clicked at X:', offsetX, 'Y:', offsetY);
      this.sendInstruction.emit( {
        actions: [
          {
            player: this.currentPlayerNumber,
            x: offsetX,
            y: offsetY
          }
        ]
      });
    }
  }

  getLastScore() {
    if(this.info) {
      const lastInfo = this.info[this.info.length - 1];
      console.log(lastInfo.game_state.scores);
      return lastInfo.game_state.scores;
    }
    return [];
  }

  getIsOver() {
    if(this.info) {
      const lastInfo = this.info[this.info.length - 1];
      return lastInfo.game_state.game_over;
    }
    return false;
  }

  gameLogs(data: GameInfo | GameError) {
    let finalString = "";
    if ("requested_actions" in data) {
      // It's of type GameInfo
      const gameInfoData: GameInfo = data;
      const requestedActionString = this.getActionString(gameInfoData.requested_actions);

      finalString += `Action demandée: ${requestedActionString}\n`;
    } else if ("errors" in data) {
      // It's of type GameError
      const gameErrorData: GameError = data;
      console.log(gameErrorData);
      const errorDetailString = gameErrorData.errors
        .map((error) => {
          if('requested_action' in error) {
            const actionError = error as GameErrorType
            return `Type: ${actionError.type}, Joueur: ${actionError.player}, Action demandée: ${this.getActionString([error.requested_action])}`;
          }
          else {
            return "Erreur inconnue";
          }
        })
        .join("\n");

      finalString += `Erreur: ${errorDetailString}\n`;
    }
    return finalString;
  }

  getActionString(gameInst: GameInstruction[]) {
    return gameInst
    .map((action) => {
      return `Type: ${action.type}, Joueur: ${action.player}`;
    })
    .join("\n");
  }
}
