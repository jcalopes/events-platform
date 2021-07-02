import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { RestUtilizadorService} from '../../services/Utilizadores/rest-utilizador.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  @Input() user:any={};
  role:String="Anonimo";
  username:String="";
  userId:String="";
  constructor(private restUsers:RestUtilizadorService,private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("currentUser")){
      this.user.username="";
      this.user.password="";
    }
    else{
      this.username=localStorage.getItem("username")!;
      this.role=localStorage.getItem("role")!;
      this.userId=localStorage.getItem("id")!;
    }
  }

  login(){
    this.restUsers.efetuarLogin(this.user).subscribe((user:any)=>{
      console.log(user);
        if(user && user.auth){
          localStorage.setItem('currentUser',JSON.stringify(user));
          localStorage.setItem('username',user.username);
          localStorage.setItem('id',user._id);
          localStorage.setItem('role',user.role);
          this.userId=user._id;
          this.role=user.role;
          this.username=user.username;
          if(this.role=='user')
            this.router.navigate(['/user/conta/compras/all']);
          else if (this.role=='promotor')
          this.router.navigate(['/user/conta/eventos/all']);
          else
          this.router.navigate(['/admin']);
        }
        else{
          alert("Erro na autenticação.Verifique username e/ou password");
        }
    },(error)=>{
        alert("Username e/ou password errados!");
        this.user.username="";
        this.user.password="";
    });
  }

  registarUtilizador(){
    this.router.navigate(['/user/criar']);
  }

  logout(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    this.role='Anonimo';
    this.router.navigate(['']);
  }

  homePage(){
    if(localStorage.getItem("role")==='admin'){
      this.router.navigate(['admin']);  
    }
    else{
      this.router.navigate(['']);  
    }
  }

  eventos(){
    this.router.navigate(['/eventos']);
  }

  locais(){
    this.router.navigate(['/locais']);
  }
}
