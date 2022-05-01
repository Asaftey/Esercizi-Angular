import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() single_person:any;

  constructor() { }

  ngOnInit(): void {
  }

}
