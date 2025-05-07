import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import Cliente from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [
            MatInputModule,
            MatCardModule,
            FlexLayoutModule,
            MatIconModule,
            FormsModule,
            MatTableModule,
            MatButtonModule,
            CommonModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
      nomeBusca: string = "";         
      listaClientes: Cliente[] = [];
      colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "acoes"]

      constructor(private service: ClienteService,
                  private router: Router,
      ){

      }

      ngOnInit(){
        this.listaClientes = this.service.pesquisarCliente("")
      }

      public pesquisar(){
        this.listaClientes = this.service.pesquisarCliente(this.nomeBusca)
      }

      public preparaEditar(id: string){
        this.router.navigate(['/cadastro'], { queryParams: { "id": id } })
      }
}
