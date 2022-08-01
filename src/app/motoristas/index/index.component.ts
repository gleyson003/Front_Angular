import { Component, OnInit } from '@angular/core';

import { MotoristasService } from '../motoristas.service';
import { Motoristas } from '../motoristas';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  motoristas: Motoristas[] = [];

  // constructor() { }
  constructor(public motoristaService: MotoristasService) { }

  ngOnInit(): void {
    this.motoristaService.getAll().subscribe((data: Motoristas[])=>{
      this.motoristas = data;
      console.log(this.motoristas);
    })
  }

  deleteMotoristas(id: number){
    this.motoristaService.delete(id).subscribe(res => {
         this.motoristas = this.motoristas.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }

}
