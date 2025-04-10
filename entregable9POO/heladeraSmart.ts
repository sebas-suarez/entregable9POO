import { heladera } from "./heladera";
import { moduloWifi } from "./moduloWifi";

export class heladeraSmart extends heladera {
    moduloWifi:moduloWifi;

    constructor(pMarca:string,pModelo:string,pEstaEncendido:boolean,pTemperatura:number,pModuloWifi:moduloWifi){
        super(pMarca,pModelo,pEstaEncendido,pTemperatura);
        this.moduloWifi =pModuloWifi;
    }

    setModuloWifi(pModuloWifi:moduloWifi):void{
        this.moduloWifi = pModuloWifi;
    }

    getModuloWifi():moduloWifi{
        return this.moduloWifi;
    }

    conectarseWifi(){
        console.log(`conectando a internet espera(velocidad:${this.moduloWifi.velocidadMbps}mbps frecuencia:${this.moduloWifi.frecuenciaGhz}hrz)`);
    }



}