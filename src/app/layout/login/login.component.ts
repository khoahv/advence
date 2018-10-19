import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '../../../../node_modules/@angular/router';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  constructor(private UserSV : UserService,
     private router: Router,
      private localStorage: LocalStorageService,
    private toastSV: ToastrService) { }

  ngOnInit() {
    const user = this.localStorage.get("user");
   if(user){
     this.router.navigate(['./doashboard'])
   }
    
  }
  Login(){
    this.UserSV.checkLogin(this.email,this.password).subscribe(data=>{
    if(data){
      this.localStorage.add('user', data);
      this.router.navigate(['doashboard']);
      this.toastSV.success("Đăng nhập thành công")
    }
    else{
    this.toastSV.error("Đăng nhập không thành công")
    }
    })
  }
}
