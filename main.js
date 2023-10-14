import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);

    /**$(".torol").on("click", (event) => 
    {
        console.log(event.detail);
    });*/
    $(window).on("kesz", (event)=>{
        let objPeldany= event.detail
         /*console.log(objPeldany);
         console.log("Kész esemeny")*/
         objPeldany.setHatterszin();
         
         TODOLIST2[objPeldany.index].kesz=true;
         console.log(TODOLIST2);
     })
     $(window).on("torol", (event)=>{
         let objPeldany= event.detail
         TODOLIST2.splice(objPeldany.index, 1) //törlés a listából
         console.log(TODOLIST2);
         szuloELEM.empty(); // szülőelem tartalmát törli, nem magát az egész szülőelemet
         new Megjelenit(TODOLIST2, szuloELEM)
     
         /*console.log(objPeldany);
         console.log("Törlés esemeny")*/
     })

});
