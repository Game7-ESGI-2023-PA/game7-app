import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormField } from "../../../shared/interfaces/InitGameInterface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LobbyService } from "../../../shared/services/lobby.service";

@Component({
  selector: 'app-lobby-init-form',
  templateUrl: './lobby-init-form.component.html',
  styleUrls: ['./lobby-init-form.component.css']
})
export class LobbyInitFormComponent implements OnInit {

  form: FormGroup | undefined;
  @Input() fields: FormField[] | undefined;

  constructor(private fb: FormBuilder, private lobbyService: LobbyService) {}

  @Output() sendInitGame = new EventEmitter<any>();

  ngOnInit(): void {
    const formControlsConfig: any = {};
    console.log(this.fields);

    if(this.fields) {
      for (const control of this.fields) {
        const validators = [];

        if (control.type === 'int' || control.type === 'float') {
          validators.push(Validators.required);
          if (control.min != null) {
            validators.push(Validators.min(control.min));
          }
          if (control.max != null) {
            validators.push(Validators.max(control.max));
          }
        } else if (control.type === 'boolean') {
          validators.push(Validators.required);
        } else if (control.type === 'string') {
          validators.push(Validators.required);
          if (control.min != null) {
            validators.push(Validators.minLength(control.min));
          }
          if (control.max != null) {
            validators.push(Validators.maxLength(control.max));
          }
        }

        formControlsConfig[control.name] = [null, validators];
      }

      this.form = this.fb.group(formControlsConfig);
    }
  }

  onSubmit() {
    if (this.form?.valid) {
      // Handle form submission here
      const initValues = { init: { ...this.form.value } }
      this.sendInitGame.emit(initValues);
      // console.log(initValues);
    } else {
      // TODO: Form is invalid, show validation errors
      if(this.form) {
        Object.keys(this.form?.controls).forEach(controlName => {
          this.form?.get(controlName)?.markAsTouched();
        });
      }
    }
  }

}
