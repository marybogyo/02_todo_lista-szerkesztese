import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
    #list = [];
    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append(
            '<table class="table table-bordered table-striped  ">'
        );
        this.tablaElem = szuloElem.children("table");

        this.tablazatbaIr();

       
    }
    tablazatbaIr() {
        this.#list.forEach((elem, index)=>{
        /*for (let index = 0; index < this.#list.length; index++) {
            const elem = this.#list[index];*/

            new MegjelenitSor(elem, this.tablaElem, index);})
        
    }
}
export default Megjelenit;

