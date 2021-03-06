import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputForm: FormGroup

  ngOnInit(): void {
  this.inputForm = this.form.group({

    firstName: ['', [Validators.required,Validators.minLength(4),forbiddenNameValidar('大野/i')]],
    lastName: ['', Validators.required,Validators.minLength(4),forbiddenNameValidar('衛/i')]]

  });
  }
  constructor(private form: FormBuilder) {

  }
}
