import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro',
  standalone: false,

  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      cpf: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  adicionarUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    console.log(this.usuario);
  }

}
