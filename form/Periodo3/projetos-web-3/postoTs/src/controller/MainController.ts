import Combustivel from "../model/combustivel";
import Operations from "../model/operations";
import Posto from "../model/posto";
import MainScreen from "../view/MainScreen";

export default class MainController {
    public operations: Operations = new Operations(this);


    constructor(){
        new MainScreen(this);   
    }

    public getNewCombustivel(): Combustivel{
            
            return new Combustivel();   
    }

    public getNewPosto(): Posto{
            return new Posto();
    }
}