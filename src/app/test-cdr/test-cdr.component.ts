import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-cdr',
  templateUrl: './test-cdr.component.html',
  styleUrls: ['./test-cdr.component.scss'],
})
export class TestCDRComponent implements OnInit {
  selectForm!: FormGroup;
  selectVal: any;
  categories = [
    {
      id: '1',
      name: 'Cricket',
    },
    {
      id: '2',
      name: 'Football',
    },
  ];
  categoryToSelect: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectVal = {
      id: '1',
      name: 'Cricket',
    };
    this.buildForm();
    this.subscribeToObservable();
  }

  buildForm() {
    this.selectForm = this.fb.group({
      category: [null],
    });
  }

  subscribeToObservable() {
    this.selectForm.valueChanges.subscribe((val) => {
      console.log(val);
      this.categoryToSelect = val;
    });
  }

  onChange(val: any) {
    //this.subscribeToObservable();
  }
}
