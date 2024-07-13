import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent {

  constructor(private service:StudentServiceService){}
  Student = new FormGroup(
    {
      fname:new FormControl(),
      lname:new FormControl(),
      email:new FormControl(),
      address:new FormControl(),
      gender:new FormControl(),
      course:new FormControl()
    }
  )

  onSubmit(data:any){
    console.log(this.Student.value);
    this.service.addStudent(this.Student.value).subscribe((res)=>{
      console.log(res);
      
    })
  }
}
