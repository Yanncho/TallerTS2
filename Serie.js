export var ej;
(function (ej) {
    ej["bach"] = "bach";
    ej["uni"] = "uni";
    ej["asd"] = " asd";
})(ej || (ej = {}));
var Serie = /** @class */ (function () {
    function Serie(id, nombre, productora, temporadas, reseña, url, imagen, ej) {
        this.id = id;
        this.nombre = nombre;
        this.productora = productora;
        this.temporadas = temporadas;
        this.reseña = reseña;
        this.url = url;
        this.imagen = imagen;
        this.ej = ej;
    }
    return Serie;
}());
export { Serie };
