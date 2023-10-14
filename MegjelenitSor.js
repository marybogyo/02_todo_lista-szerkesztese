class MegjelenitSor {
    #adat = {};
 
    constructor(adat, szuloElem, index) {
        
        this.index=index;

        this.#adat = adat;
   
        this.tablaElem = szuloElem;

        this.#sor();
        /** eseménykezelők a kész és a törlés gombokhoz */
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.megseElem = this.sorElem.children("td").children(".megse");
        this.torolElem = this.sorElem.children("td").children(".torol");
        for (const key in this.#adat) {
            if(this.#adat.kesz){
                this.setHatterszin();
            }
        /*console.log(this.keszElem);
        console.log(this.torolElem);
        console.log(this.sorElem.children());*/

      
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
            //console.log(this)
            this.#esemenyTrigger("kesz")
        });
        this.torolElem.on("click", () => {
            //console.log(this)
            this.#esemenyTrigger("torol")
        });
        /**callback függvény */
        //this.torolElem.on("click", (event) => {
        //    console.log(event.detail);
        //});
       
    }}

    setHatterszin(){
        this.sorElem.css("background-color", "green");
    }

    #sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            if(key!="kesz"){
                txt += `<td>${this.#adat[key]}</td>`;
            }
            //console.log(key);
            //console.log(this.#adat[key]);
            
          }
        
        txt += `<td><span class="kesz">✔️</span> <span class="kesz">"mégse"</span><span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
    }

    #esemenyTrigger(eseményNev){
        const e =new CustomEvent(eseményNev, {detail:this})
        window.dispatchEvent(e)
    }
   
}

export default MegjelenitSor;
