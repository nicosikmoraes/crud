import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import Cliente from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule,
            MatCardModule,
            FormsModule, 
            MatFormFieldModule,
            MatInputModule, 
            MatButtonModule,
        ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
         //Chamo a função que vai construir um novo cliente.
    cliete: Cliente = Cliente.newCliente();
    atualizando: boolean = false;
    
      constructor(private service: ClienteService,
                    //Para capturar os dados da rota acessada, assim que vamos buscar os parâmetros que passamos.
                  private route: ActivatedRoute,
                  private router: Router,
      ){

      } //Estamos injetando o ClienteServer.

      //Sempre que entramos na tela vamos verificar se estamos criando um novo cliente ou editando
      ngOnInit(): void {
          //Esse map tem uma chave e um valor
        this.route.queryParamMap.subscribe( (query: any) => {
          const params = query['params'];
          const id = params['id']

          if(id){
            let clienteEncontrado = this.service.buscarClientePorId(id);
            if(clienteEncontrado){
              this.atualizando = true;
              this.cliete = clienteEncontrado; 
            }

          }
        })
            //Com o subscribe vamos sobrescrever esse queryparamMap, ele passa uma fuctionque recebe a query como parametro
            //A query é as informações que tem depois da url
      }
    
    public salvar(){
        if(!this.atualizando){
          this.service.salvar(this.cliete);
          // Limpa o formulário e cria um novo Id
          this.cliete = Cliente.newCliente();
        }else{
          this.service.atualizar(this.cliete)
          this.router.navigate(['/consulta'])
        }


    }
}
