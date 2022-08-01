import { Component, OnInit } from '@angular/core';
import { MotoristasService } from '../motoristas.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public motoristaService: MotoristasService,
    private router: Router
  ) { }

  ngOnInit(): void {

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
    this.motoristaService.create(this.form.value).subscribe(res => {
         console.log('Motorista cadastrado com sucesso!');
         this.router.navigateByUrl('motoristas/index');
    })
  }

}

