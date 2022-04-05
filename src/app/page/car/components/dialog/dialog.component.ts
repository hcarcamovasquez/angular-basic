import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDialogCardUpset} from "../../models/interfaces/IDialogCardUpset";
import {ICars} from "../../../../core/models/interfeces/ICars";
import {v4 as uuidv4} from 'uuid'
@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  formUpdate: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogCardUpset,
    private dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder) {
    this.formUpdate = this.fillForm();
  }

  fillForm() {
    return this.fb.group({
      brand: this.fb.control('', Validators.required),
      color: this.fb.control('', Validators.required),
      model: this.fb.control('', Validators.required),
      year: this.fb.control('', Validators.required),
    })
  }

  ngOnInit(): void {
    if (this.data?.item) {
      this.formUpdate.patchValue(this.data.item)
    }
  }

  close() {
    this.dialogRef.close(false)
  }

  update() {

    if (this.formUpdate.invalid) {
      return;
    }
   /* const car = Object.assign(this.formUpdate.value, {id: this.data?.item?.id})*/
       const car = {
         id: this.data?.item?.id || uuidv4(),
         ...this.formUpdate.value
       }
    console.log(car)
    this.dialogRef.close(car as ICars)
  }
}
