"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.heladeraSmart = void 0;
var heladera_1 = require("./heladera");
var heladeraSmart = /** @class */ (function (_super) {
    __extends(heladeraSmart, _super);
    function heladeraSmart(pMarca, pModelo, pEstaEncendido, pTemperatura, pModuloWifi) {
        var _this = _super.call(this, pMarca, pModelo, pEstaEncendido, pTemperatura) || this;
        _this.moduloWifi = pModuloWifi;
        return _this;
    }
    heladeraSmart.prototype.setModuloWifi = function (pModuloWifi) {
        this.moduloWifi = pModuloWifi;
    };
    heladeraSmart.prototype.getModuloWifi = function () {
        return this.moduloWifi;
    };
    heladeraSmart.prototype.conectarseWifi = function () {
        console.log("conectando a internet espera(velocidad:".concat(this.moduloWifi.velocidadMbps, "mbps frecuencia:").concat(this.moduloWifi.frecuenciaGhz, "hrz)"));
    };
    return heladeraSmart;
}(heladera_1.heladera));
exports.heladeraSmart = heladeraSmart;
