import { Component, OnInit } from '@angular/core';

import { MotoristasService } from '../motoristas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Motoristas } from '../motoristas';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  motoristas!: Motoristas;
  form!: FormGroup;

  constructor(
    public motoristaService: MotoristasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idMotoristas'];
    this.motoristaService.find(this.id).subscribe((data: Motoristas)=>{
      this.motoristas = data;
    });


    this.form = new FormGroup({
      nome:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      cpf: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      cnh: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.motoristaService.update(this.id, this.form.value).subscribe(res => {
         console.log('Motorista atualizado com sucesso!');
         this.router.navigateByUrl('motoristas/index');
    })
  }

}

