import Combustivel from "../model/combustivel.js";
import Posto from "../model/posto.js";

class MainController {

    constructor(formId) {
      this.form = document.getElementById(formId);
      this.bindEvents();
    }

    bindEvents() {
      this.form.addEventListener("submit", (event) => {
        event.preventDefault();

      let name = document.getElementById("nomePosto").value;
      let precoEtanol = document.getElementById("etanolPosto").value;
      let precoGasolina = document.getElementById("gasolinaPosto").value;

      const posto = new Posto(name);
      const combustivel = new Combustivel(precoEtanol, precoGasolina)
      this.contaCombustivel(combustivel.precoEtanol, combustivel.precoGasolina, posto.nome,)
      });
    }


    contaCombustivel(precoEtanol, precoGasolina, posto){
        const span = document.getElementById("resultadoDisplay")
        let conta = (precoEtanol / precoGasolina)
        if((conta) <= 0.7){
                span.textContent = `No posto ${posto} compensa mais o etanol`
                console.log(precoEtanol);
                console.log(precoGasolina);
                console.log(conta)
        }else{
            span.textContent = `No posto ${posto} compensa mais a gasolina`
        }
    }
    
}

export default MainController