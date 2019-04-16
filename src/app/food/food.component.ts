import { Output, Input, EventEmitter, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food = new FormControl('');
  @Input() Feeling: string;
  @Input() Food: string;
  constructor() { }
  onSubmit(){
    console.log("You submitted: " + this.Feeling +" and " + this.Food);
    //this._myService.addStudents(this.Feeling ,this.Food);
  }
  ngOnInit() {
  }
}

export class FormFoodComponent
{
    FoodForm = new FormGroup(
  {
    Feeling: new FormControl(''),
    Food: new FormControl(''),
  }
  );
}