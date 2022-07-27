/* Funciones predefinidas que podrían ser utiles
- parsefloat();
- toFixed();
- toString();
*/

/* ---------------------------------------------------------------------------------------------
Cuentas de Balance General - En desarrollo*/
let efectivo = document.getElementById("capEfectivo");
let ctasXCob = document.getElementById("capCxC");       /* Cuentas por cobrar */
let inventario = document.getElementById("capInven");
let actCirc;                                            /* Activo Circulante */
let plantEq = document.getElementById("capPlaEq");      /* Planta y equipo */
let edificios = document.getElementById("capEdificios");
let inversiones = document.getElementById("capInvers");
let actFijo;                                            /* Activo Fijo */
let marcas = document.getElementById("capMarcas");
let patentes = document.getElementById("capPatent");
let credMerc = document.getElementById("capCreMer");    /* Crédito Mercantil */
let actInt;                                             /* Activos intangibles */
let totAct;                                             /* Total Activo */
let activo;
let proveedores = document.getElementById("capProvee");
let aceedores = document.getElementById("capAcree");
let deuBanc = document.getElementById("capDBCP");       /* Deuda Bancaria */
let pasCtoPlaz;     /* Pasivo a Corto Plazo */
let deuBanLP = document.getElementById("capDBLP");      /* Deuda Bancaria a Largo Plazo */
let deuBur = document.getElementById("capDeuBur");      /* Deuda Bursátil */
let pasLP;                                              /* Pasivo de Largo Plazo */
let totPas;                                             /* Total Pasivo */
let pasivo;
let capContri = document.getElementById("capCapCon");   /* Capital Contribuido */
let utilTRet = document.getElementById("capUtiRet");    /* Utilidades Retenidas */
let totCap;                                             /* Total Capital */
let capital;
let capCont;                                            /* Capital Contable */

     /* Definición de array */ //Incluirlo después

    /* Funciones */

    /* Activo Circulante o Activo a Corto Plazo */
actCirc = function activoCirc(efectivo, ctasXCob, inventario) {return efectivo + ctasXCob + inventario;}
let tActCir = actCirc(efectivo, ctasXCob, inventario);      //console.log(tActCir);
    /*Activo Fijo */
actFijo = function activoFijo(plantEq, edificios, inversiones) {return plantEq + edificios + inversiones;}
let tActFijo = actFijo(plantEq, edificios, inversiones);    //console.log(tActFijo);
    /* Activo Intangible */
actInt = function activoInt(marcas, patentes, credMerc){return marcas + patentes + credMerc;}
let tActInt = actInt(marcas, patentes, credMerc);           //console.log(tActInt);
    /* Total Activo */
totAct = function totActivo(tActCir, tActFijo, tActInt) {return tActCir + tActFijo + tActInt;}
let tTotAct = totAct(tActCir, tActFijo, tActInt);           //console.log(tTotAct)
    /* Pasivo a Corto Plazo */
pasCtoPlaz = function pasivoCP(proveedores, aceedores, deuBanc) {return proveedores + aceedores + deuBanc;}
let tPasCP = pasCtoPlaz(proveedores, aceedores, deuBanc);   //console.log(tPasCP);
    /*  Determinación del Pasivo de Largo Plazo */
pasLP = function pasivoLP (deuBanLP, deuBur) {return deuBanLP + deuBur;}
let tPasLP = pasLP(deuBanLP, deuBur);                       //console.log(tPasLP);
    /* Determinación del Total Pasivo */
totPas = function totPasivo(tPasCP, tPasLP) {return tPasCP + tPasLP;}
let tTotPas = totPas(tPasCP, tPasLP)                        //console.log(tTotPas);
    /* Determinación del Total Capital */
totCap = function totCapital(capContri, utilTRet) {return capContri + utilTRet;}
let tTotCap = totCap(capContri, utilTRet)                   //console.log(tTotCap);

/* Validación de totales*/
let mensajeBG = function validaTotBG(tTotAct, tTotPas, tTotCap) {return tTotAct = (tTotPas + tTotCap) ? "Las cuentas cuadran" : "Las cuentas no cuadran";}
let validaBG = mensajeBG(tTotAct, tTotPas, tTotCap);        //console.log(validaBG);

/* ---------------------------------------------------------------------------------------------
Cuentas de Estado de Resultados - En desarrollo */
let ingresos = document.getElementById();
let costos;
let utilBrut;       /* Utilidad Bruta */
let gastos;
let utilOper;       /* Utilidad OOerativa */
let interFinan;     /* Intereses y Financieros */
let utilAntImp;     /* Utilidad antes de Impuestos */
let impuestos;
let utilNeta;       /* Utilidad Neta */

    /* definición de array */
/*Incluirlo después */

    /* Definición de funciones */

/* Utilidad Bruta */
utilBrut = function utilidadBruta(ingresos, costos){return ingresos - costos;}
let tUtiBru = utilBrut(ingresos, costos);       //console.log(tUtiBru);
/* Utilidad Operativa*/
utilOper = function utilidadOper(tUtiBru, gastos) {return tUtiBru - gastos;}
let tUtiOpe = utilOper(tUtiBru, gastos);        //console.log(tUtiOpe);
/* Utilidad Antes de Impuestos */
utilAntImp = function utilidadAI(tUtiOpe, interFinan) {return tUtiOpe - interFinan;}
let tUtiAI = utilAntImp(tUtiOpe, interFinan)     //console.log(tUtiAI);
/* Utilidad Neta */
utilNeta = function utilidadNeta(tUtiAI, impuestos) {return tUtiAI - impuestos;}
let tUtiNeta = utilNeta(tUtiAI, impuestos);     /*console.log(tUtiNeta); */