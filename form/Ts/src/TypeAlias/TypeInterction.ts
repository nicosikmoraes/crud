

        type Info = {
            id: number;
            nome?: string;
            status: boolean;
        }

        const produoInfo: Info = {
            id: 156838513,
            nome: "Yakult",
            status: true,
        }

        type Categoria = {
            slug: string ;
            quantidadeProduto: number;
        }

        const Categoria1: Categoria = {
            slug: "Danoniho",
            quantidadeProduto: 100,
        }

        console.log(Categoria1)

        type produtoInfo = Info & Categoria; //ProdutoInfo è ainterseção entre indo e categoria.//

        const novoProduto: produtoInfo = {
            id: 1215313,
            nome: "Maionese",
            status: false,
            slug: "Ketchup",
            quantidadeProduto: 45,
        }

        console.log(novoProduto);

        ///////////////////////////////////

                //INTERFACE OK//
        interface MinhaBiblioteca {
            prop1: string,
        }

        interface MinhaBiblioteca {
            prop2: string,
        }

                //TYPE ALIAS ERRO//
        type MinhaBiblioteca2 = {
            props1: string,
        }

        //type MinhaBiblioteca2 = {
           // props2: string,
        //}




