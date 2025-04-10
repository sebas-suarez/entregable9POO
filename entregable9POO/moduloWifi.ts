export class moduloWifi {
    velocidadMbps:number;
    frecuenciaGhz:number;

    constructor(pVelocidad:number,pFrecuencia:number){
        this.velocidadMbps = pVelocidad;
        this.frecuenciaGhz = pFrecuencia;
    }

    setVelovidadMbps(pVelocidad:number):void{
        this.velocidadMbps = pVelocidad;
    }

    getVelocidadMbps():number{
        return this.velocidadMbps;
    }

    setFrecuenciaGhz(pFrecuencia:number):void{
        this.frecuenciaGhz = pFrecuencia;
    }

    getFrecuenciaGhz():number{
        return this.frecuenciaGhz;
    }


}