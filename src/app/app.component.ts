import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormBuilder, Validators } from '@angular/forms';


@Component({
  
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            FrontEnd: ['',],
            languages: this._fb.array([
                this.initlanguage(),
            ])
        });
    }

    initlanguage() {
        return this._fb.group({
            Angular2: [''],
            React: ['']
        });
    }

    addLanguage() {
        const control = <FormArray>this.myForm.controls['languages'];
        control.push(this.initlanguage());
    }

    removeLanguage(i: number) {
        const control = <FormArray>this.myForm.controls['languages'];
        control.removeAt(i);
    }

    save(model: India) {
        console.log(model);
    }
}