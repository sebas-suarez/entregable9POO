"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.electrodomestico = void 0;
var electrodomestico = /** @class */ (function () {
    function electrodomestico(pMarca, pModelo, pEstaEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }
    electrodomestico.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    electrodomestico.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    electrodomestico.prototype.getModelo = function () {
        return this.modelo;
    };
    electrodomestico.prototype.setEstaEncendido = function (pEstaEncendido) {
        this.estaEncendido = pEstaEncendido;
    };
    electrodomestico.prototype.getEstaEncendido = function () {
        return this.estaEncendido;
    };
    electrodomestico.prototype.encender = function () {
        if (this.estaEncendido == false) {
            console.log('encendiendo....');
            this.estaEncendido = true;
        }
    };
    electrodomestico.prototype.apagar = function () {
        if (this.estaEncendido == true) {
            console.log('apagando....');
            this.estaEncendido = false;
        }
    };
    electrodomestico.prototype.mostrarInfo = function () {
        console.log("Electrodomestico: \n                        Marca: ".concat(this.marca, "\n                        Modelo: ").concat(this.modelo, "\n                        estaEncendido: ").concat(this.estaEncendido));
    };
    return electrodomestico;
}());
exports.electrodomestico = electrodomestico;
