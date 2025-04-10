"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduloWifi = void 0;
var moduloWifi = /** @class */ (function () {
    function moduloWifi(pVelocidad, pFrecuencia) {
        this.velocidadMbps = pVelocidad;
        this.frecuenciaGhz = pFrecuencia;
    }
    moduloWifi.prototype.setVelovidadMbps = function (pVelocidad) {
        this.velocidadMbps = pVelocidad;
    };
    moduloWifi.prototype.getVelocidadMbps = function () {
        return this.velocidadMbps;
    };
    moduloWifi.prototype.setFrecuenciaGhz = function (pFrecuencia) {
        this.frecuenciaGhz = pFrecuencia;
    };
    moduloWifi.prototype.getFrecuenciaGhz = function () {
        return this.frecuenciaGhz;
    };
    return moduloWifi;
}());
exports.moduloWifi = moduloWifi;
