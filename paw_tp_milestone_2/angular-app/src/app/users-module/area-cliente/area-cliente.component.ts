import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {
  user:String="";
  role:String="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('id')!;
    this.role=localStorage.getItem('role')!;
  }
}
