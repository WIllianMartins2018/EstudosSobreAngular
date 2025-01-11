import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: false,

  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {

  cadastroForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    senha: new FormControl(''),
    senhaConfirmacao: new FormControl('')
   });

  ngOnInit(): void {
  

  }

  adicionarUsuario()
  {
    let valores = this.cadastroForm.value;
  }

}
