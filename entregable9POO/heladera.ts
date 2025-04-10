import { electrodomestico } from "./electrodomestico";
import * as rs from 'readline-sync';

export class heladera extends electrodomestico{
    temperatura:number;

    constructor(pMarca:string,pModelo:string,pEstaEncendido:boolean,pTemperatura:number){
        super(pMarca,pModelo,pEstaEncendido);
        this.temperatura = pTemperatura;
    }

    setTemperatura(pTemperatura):void{
        this.temperatura = pTemperatura;
    }

    getTemperatura():number{
        return this.temperatura;
    }

    cambiarTemperatura(){
        let nuevaTemperatura = rs.questionInt('Cual sera la nueva Temperatura? ');
        this.temperatura = nuevaTemperatura;
    }
}