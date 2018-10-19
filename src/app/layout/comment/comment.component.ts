import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormCanDeactivate } from '../../shared/form-can-deactivate/form-can-deactivate';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent  extends FormCanDeactivate {

  comment: String;
  @ViewChild('form')
  form: NgForm
  submit(){
    console.log(this.form.submitted);
  }
}
