export class electrodomestico{
    marca:string;
    modelo:string;
    estaEncendido:boolean;

    constructor(pMarca:string,pModelo:string,pEstaEncendido:boolean){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }

    setMarca(pMarca:string):void{
        this.marca=pMarca;
    }

    getMarca():string{
        return this.marca;
    }

    setModelo(pModelo:string):void{
        this.modelo=pModelo;
    }

    getModelo():string{
        return this.modelo;
    }

    setEstaEncendido(pEstaEncendido:boolean):void{
        this.estaEncendido =pEstaEncendido;
    }

    getEstaEncendido():boolean{
        return this.estaEncendido;
    }

    encender():void{
        if(this.estaEncendido == false){
            console.log('encendiendo....');
            this.estaEncendido = true;
        }
    }

    apagar():void{
        if(this.estaEncendido == true){
            console.log('apagando....');
            this.estaEncendido = false;
        }
    }

    mostrarInfo():void{
        console.log(`Electrodomestico: 
                        Marca: ${this.marca}
                        Modelo: ${this.modelo}
                        estaEncendido: ${this.estaEncendido}`);
    }
}