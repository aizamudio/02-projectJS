/* Funciones predefinidas que podrían ser utiles
- parsefloat();
- toFixed();
- toString();
*/

/* ---------------------------------------------------------------------------------------------
Cuentas de Balance General - En desarrollo*/
let efectivo;
let ctasXCob;       /* Cuentas por cobrar */
let inventario;
let actCirc;        /* Activo Circulante */
let plantEq;        /* Planta y equipo */
let edificios;
let inversiones;
let actFijo;        /* Activo Fijo */
let marcas;
let patentes;
let credMerc;       /* Crédito Mercantil */
let actInt;         /* Activos intangibles */
let totAct;         /* Total Activo */
let activo;
let proveedores;
let aceedores;
let deuBanc;        /* Deuda Bancaria */
let pasCtoPlaz;     /* Pasivo a Corto Plazo */
let deuBanLP;       /* Deuda Bancaria a Largo Plazo */
let deuBur;         /* Deuda Bursátil */
let pasLP;          /* Pasivo de Largo Plazo */
let totPas;         /* Total Pasivo */
let pasivo;
let capContri;      /* Capital Contribuido */
let utilTRet;       /* Utilidades Retenidas */
let totCap;         /* Total Capital */
let capital;
let capCont;        /* Capital Contable */

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
let ingresos;
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

/* ---------------------------------------------------------------------------------------------
Flujo de efectivo - Pendiente */
let fluOper;        /* Flujo de Operación */
let depreAmor;      /* Depreciación y Amortización */
let intPag;         /* Intereses Pagados */
let impEFePag;      /* Impuestos fectivamente pagados */
let cambCapTrab;    /* Cambio en capital de trabajo */
let fluInv;         /* Flujo de inversión */
let gtosInv;        /* Gastos de inversión */
let ingVtaAct;      /* Ingresos por ventas de activos */
let fluFin;         /* Flujo de Financiamiento */
let prestamos;
let ingColAcc;      /* Ingresos por colocación de acciones */
let pagPres;        /* Pago de prestamos*/
let pagDiv;         /* Pago de dividendos */
    /* Definición de array */
/*Incluirlo después */

    /* Definición de funciones */

/* Flujo de Operación */
//fluOper = function flowOper(utilOper, depreAmor, intPag, impEFePag, cambCapTrab) {return utilOper + depreAmor - intPag - impEFePag - cambCapTrab;}
//    console.log(fluOper(utilOper, depreAmor, intPag, impEFePag, cambCapTrab));

/* Determinación del Flujo de Inversión */
//fluInv = function flowInv(fluOper, gtosInv, ingVtaAct) {return fluOper - gtosInv + ingVtaAct;}
//    console.log(fluInv(fluOper, gtosInv, ingVtaAct));

/* Determinación del Flujo de Financiamiento */
//fluFin = function flowFin(fluInv, prestamos, ingColAcc, pagPres, pagDiv) {return fluInv + prestamos + ingColAcc - pagPres - pagDiv;}
//console.log(fluFin(fluInv, prestamos, ingColAcc, pagPres, pagDiv));

/* ---------------------------------------------------------------------------------------------
Razones financieras - Pendiente */
    /* Definición de variables */

//let mgnCostos;      /* Margen de Costos */
//let mgnBruto;       /* Margen Bruto */
//let mgnGastos;      /* Margen de Gastos */
//let mgnOper;        /* Margen Operativo */
//let mgnFin;         /* Margen Financiero */
//let mgnFinanEF;     /* Margen Financiero en empresas financieras*/
//let mgnUAI;         /* Margen de Utilidad Antes de Impuestos */
//let mgnNeto;        /* Margen de Utilidad Neta */
//let ARTO;           /* Rotación de Cuentas por Cobrar */

//let diasCxC;        /* Días de Cuentas por Cobrar */
//let ITO;            /* Rotación de Inventarios */

//let diasInven;      /* Días de inventario */
//let APTO            /* Rotación de Proveedores */

//let diasProveed;    /* Días de Proveedores */
//let currRatio;      /* Current Ratio */
//let prueAcido;      /* Prueba del Ácido */
//let cobInt;         /* Cobertura de Intereses */
//let intereses;
//let apalancamiento;
//let rotActivos;     /* Rotación Activos */
//let RetorCap;       /* Retorno sobre Capital */


    /*Definición de funciones */
        /* Rentabilidad */
            /* Margen de Costos */
//mgnCostos = function margCostos(costos, ingresos) {return costos / ingresos;}
//    console.log(mgnCostos(costos, ingresos));
            /* Margen Bruto */
//mgnBruto = function margBruto(utilBrut, ingresos) {return utilBrut / ingresos;}
//    console.log(mgnBruto(utilBrut, ingresos))
            /* Margen de Gastos */
//mgnGastos = function margGastos(gastos, ingresos) {return gastos / ingresos;}
//    console.log(mgnGastos(gastos, ingresos));
            /* Margen Operativo */
//mgnOper = function margOper(utilOper, ingresos) {return utilOper / ingresos;}
//    console.log(mgnOper(utilOper, ingresos));
            /* Margen Financiero */
//mgnFin = function margFin(interFinan, ingresos) {return interFinan / ingresos;}
//    console.log(mgnFin(interFinan, ingresos));
            /* */
//mgnUAI = function margUAI(utilAntImp, ingresos) {return utilAntImp / ingresos;}
//    console.log(mgnUAI(utilAntImp, ingresos));
            /* */
//let mgnImp = function margImp(impuestos, ingresos) {return impuestos / ingresos;}
//    console.log(mgnImp(impuestos, ingresos));
            /* Margen Neto */
//mgnNeto = function margNeto(utilNeta, ingresos) {return utilNeta / ingresos;}
//    console.log(mgnNeto(utilNeta, ingresos));
            /* Validación del Margen Neto */
//let mensajeVMN = function validaTotales(utilNeta) {return utilNeta < 0 ? "Rentabilidad Negativa" : "Rentabilidad Positiva";}
//    console.log(mensajeVMN(utilNeta));
        /* Manejo de activos */
            /* Rotación de Cuentas por Cobrar */
//ARTO = function razonCxC(ingresos, ctasXCob) {return ingresos / ctasXCob;}
//    console.log(ARTO(ingresos, ctasXCob));
            /* Días de Cuentas por Cobrar */
//diasCxC = function díasCxC(ARTO) {return 365 / ARTO;}
//    console.log(diasCxC(ARTO));
            /* Rotación de Inventario */
//ITO = function razonInven(costos, inventario) {return costos / inventario;}
//    console.log(ITO(costos, inventario));
            /* Días de Inventario */
//diasInven = function razonInven(ITO) {return 365 / ITO;}
//    console.log(diasInven(ITO));
            /* Rotación de Proveedores */
//APTO = function razonProvee(costos, proveedores) {return costos / proveedores;}
//    console.log(APTO(costos, proveedores));
            /* Días de Proveedores */
//diasProveed = function razonProvee(APTO) {return 365 /APTO;}
//    console.log(diasProveed(APTO));
        /* Deuda y Liquidez */
            /* Current Ratio */
//currRatio = function currentRatio(actCirc, pasCtoPlaz) {return actCirc / pasCtoPlaz;}
//    console.log(currRatio(actCirc, pasCtoPlaz));
            /* Prueba del Ácido */
//prueAcido = function pruebaAcido(actCirc, inventario, pasCtoPlaz) {return (actCirc - inventario) / pasCtoPlaz;}
//    console.log(prueAcido(actCirc, inventario, pasCtoPlaz));
            /* Cobertura de Intereses */
//cobInt = function coberInter(utilOper, intereses) {return utilOper / intereses;}
//    console.log(cobInt(utilOper, intereses));
            /* Apalancamiento */
//apalancamiento = function apalanc(activo, capital) {return activo / capital;}
//   console.log(apalancamiento(activo, capital));
            /* Margen Neto */
//let mgNeto = function MargNet(utilNeta, ingresos) {return utilNeta / ingresos;}
//    console.log(mgNeto(utilNeta, ingresos)) 
            /* Eficiencia de Activos */
//let eficAct = function efictActivos(ingresos, activo) {return ingresos / activo;}
//    console.log(eficAct(ingresos, activo));
            /* Estructura de capital */
//let structCap = function structCapital(activo, capital) {return activo / capital;}
//    console.log(structCap(activo, capital));
            /* Retorno sobre inversión */
//let returnCap = function retunCapital(mgNeto, eficAct, structCap) {return mgNeto * eficAct * structCap;}
//    console.log(returnCap(mgNeto, eficAct, structCap, returnCap));

/* ---------------------------------------------------------------------------------------------
Análisis multi empresarial */
/* Análisis multi empresarial -Comparación entre empresas */        /* En desarrollo */
/* mgnFinanEF = intCob / intPag; */

/* Definición de arrays */

const arrEmpresaCE = [
    {id:1, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:2, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:3, renta : 0, manejoAct: 0, apalan: 0, retInv:0}
];

/* Donde:
0 - Rentabilidad
1 - Manejo de activos
2 - Apalancamiento
3 - Retorno sobre inversión
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo */

const arrRentab = arrEmpresaCE.map (product => {return product.renta;});
//console.log(arrRentab);

function mayRenta(arrRentab){
    var al = arrRentab.length;
    maximum = arrRentab[al-1];
    while (al--){
        if(arrRentab[al] > maximum){
            maximum = arrRentab[al]
        }
    }
            return maximum;
};
let rentaMayor = mayRenta(arrRentab);
let mayorRenta = rentaMayor;          //console.log(rentaMayor)

const arrManAct = arrEmpresaCE.map (product => {return product.manejoAct;});
//console.log(arrManAct);

function mayManAct(arrManAct){
    var al = arrManAct.length;
    maximum = arrManAct[al-1];
    while (al--){
        if(arrManAct[al] > maximum){
            maximum = arrManAct[al]
        }
    }
            return maximum;
};
let manActMay = mayManAct(arrManAct);
let mayorActMay = manActMay;            //console.log(manActMay)

const arrApal = arrEmpresaCE.map (product => {return product.apalan;});
//console.log(arrApal);

function minApal(arrApal){
    var al = arrApal.length;
    minimum = arrApal[al-1];
    while (al--){
        if(arrApal[al] < minimum){
            minimum = arrApal[al]
        }
    }
    return minimum;
};
let apalMen = minApal(arrApal);
let menApal = apalMen;                  //console.log(apalMen)

const arrRetInv = arrEmpresaCE.map (product => {return product.retInv;});
//console.log(arrRetInv);

function mayRetInv(arrRetInv){
    var al = arrRetInv.length;
    maximum = arrRetInv[al-1];
    while (al--){
        if(arrRetInv[al] > maximum){
            maximum = arrRetInv[al]
        }
    }
            return maximum;
};
let retInvMay = mayRetInv(arrRetInv);
let mayorRetInv = retInvMay;            
console.log(retInvMay);




/* ---------------------------------------------------------------------------------------------
/* Analisis Multi Empresarial - Múltiplos */

/* Valor de Capitalización */
valorCap = function valorCapit(numAcciones, precioAccion) {return numAcciones * precioAccion;}
tValCap = valorCap(numAcciones, precioAccion);
console.log(tValCap);
/* Precio Utilidad */
//precioUtil = function precioUtilidad(valorCap, utilDoceM) {return valorCap / utilDoceM;}
//    console.log(precioUtil(valorCap, utilDoceM));
/* Enterprise Value */
//entVal = function enterValue(valorCap, deudaNeta) {return valorCap + deudaNeta;}
//    console.log(entVal(valorCap, deudaNeta));
/* EV/EBITDA */
//evEbitda = function evaEbitda(entVal, ebitda) {return entVal / ebitda;}
//    console.log(evEbitda(entVal, ebitda));
    /* P/VL */
//pVl = function prVl(activo, pasivo, precioAccion) {return precioAccion / (activo - pasivo);}
//    console.log(pvl(activo, pasivo, precioAccion));

let precioUtil;     /* Precio Utilidad */
let evEbitda;       /* EV / EBITDA */
let pVl;            /* P/VL */


const arrEmpresaMul = [
    {id:1, preUti:0, evEB:0, PVL:0},
    {id:2, preUti:0, evEB:0, PVL:0},
    {id:3, preUti:0, evEB:0, PVL:0},
];
/* Donde:
0 - Precio Utilidad
1 - EV/EBITDA
2 - P/VL
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo */

const arrPreUti = arrEmpresaMul.map (product => {return product.preUti;});
//console.log(arrPreUti);

function minPreUti(arrPreUti){
    var al = arrPreUti.length;
    minimum = arrPreUti[al-1];
    while (al--){
        if(arrPreUti[al] < minimum){
            minimum = arrPreUti[al]
        }
    }
    return minimum;
};
let preUtiMen = minPreUti(arrPreUti);
let menorPreUtil = preUtiMen;
//console.log(preUtiMen)

const arrEvEB = arrEmpresaMul.map (product => {return product.evEB;});
//console.log(arrEvEB);

function minEvEB(arrEvEB){
    var al = arrEvEB.length;
    minimum = arrEvEB[al-1];
    while (al--){
        if(arrEvEB[al] < minimum){
            minimum = arrEvEB[al]
        }
    }
    return minimum;
};
let evEBMen = minEvEB(arrEvEB);
let menorEvEB = evEBMen;
//console.log(evEBMen)

const arrPVL = arrEmpresaMul.map (product => {return product.PVL;});
//console.log(arrPVL);

function minPVL(arrPVL){
    var al = arrPVL.length;
    minimum = arrPVL[al-1];
    while (al--){
        if(arrPVL[al] < minimum){
            minimum = arrPVL[al]
        }
    }
    return minimum;
};
let PVLMen = minPVL(arrPVL);
let menorPVL = PVLMen;
//console.log(PVLMen)



/* ---------------------------------------------------------------------------------------------
Análisis multi empresarial - Múltiplos */                       /* En desarrollo */
/* Desarrollar mas*/


/* ---------------------------------------------------------------------------------------------
Valuación empresarial */
let numAcciones;    /* Número de acciones */
let precioAccion;   /* Preccio de la acción */
let intCob;         /* Intereses cobrados */
let valorCap;        /* Valor de Capitalización */
let venDoceM;       /* Ventas de 12 meses */
let utilDoceM;      /* Utilidades generadas en un período de 12 meses */
let entVal;         /* Enterprise Value o EV */
let deudaNeta;
let ebitda;
let vl;             /* Valor en libros o VL, conocido también como capital */
let wacc;           /* WACC o Weighted Average Cost of Capital - CPPC o Costo promedio ponderado de capital */
let perEq;          /* Ponderación de Capital Contable */
let perDeu;         /* Ponderación de deuda */
let deuda;
let kDeu;           /* Costo de la deuca */
let kEq;            /* Costo del capital */
let perTax;         /* Tasa fiscal efectiva de los últimos ejercicios */
let priceSales;     /* Múltiplo precio a ventas, o Price to sales (P/S). */
let priceUtil;      /* Múltiplo Precio Utilidad */
let cambioCapTrab;  /* Cambio Capital de Trabajo */
let CAPEX;          /* Investigar que es CAPEX */

/* Desarrollar arrays */

/* ---------------------------------------------------------------------------------------------
Valuación empresarial - Valuando con Precio a Ventas */
const arrEmpresaVPV = [
    {id:1, precio:0, numAct:0, marCap:0, venDM:0, priSal:0},
    {id:2, precio:0, numAct:0, marCap:0, venDM:0, priSal:0},
    {id:3, precio:0, numAct:0, marCap:0, venDM:0, priSal:0},
];


/*Donde:
0 - ID
1 - Precio
2 - # Acciones (millones)
3 - Market Cap (Millones) - mayor
4 - Ventas 12M (millones)
5 - P/S - menor
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo*/

/* Desarrollar funciones */

//const arrPrecioPV = arrEmpresaVPV.map (product => {return product.precio;});
//console.log(arrPrecioPV);

//const arrNumActPV = arrEmpresaVPV.map (product => {return product.numAct;});
//console.log(arrNumActPV);

const arrMarCapPV = arrEmpresaVPV.map (product => {return product.marCap;});
//console.log(arrMarCapPV);

/* Mayor capitalización */
function mayMarCap(arrMarCapPV){
    var al = arrMarCapPV.length;
    maximum = arrMarCapPV[al-1];
    while (al--){
        if(arrMarCapPV[al] > maximum){
            maximum = arrMarCapPV[al]
        }
    }
            return maximum;
};
let marCapMay = mayMarCap(arrMarCapPV);
let mayorMarCapPV = marCapMay;              //console.log(marCapMay);

const empMayCapPV = products.filtered (product => {
    return product.marcCap = mayorMarCapPV;
})
console.log(empMayCapPV)

//const arrVenDMPV = arrEmpresaVPV.map (product => {return product.venDM;});
//console.log(arrVenDMPV);

const arrPriSalPV = arrEmpresaVPV.map (product => {return product.priSal;});
//console.log(arrPriSalPV);

function minPriSal(arrPriSalPV){
    var al = arrPriSalPV.length;
    minimum = arrPriSalPV[al-1];
    while (al--){
        if(arrPriSalPV[al] < minimum){
            minimum = arrPVL[al]
        }
    }
    return minimum;
};
let priSalMen = minPriSal(arrPriSalPV);
let menorPriSal = PVLMen;                   //console.log(priSalMen)

/* Valor de Capitalización */
//valorCap = function valorCapit(numAcciones, precioAccion) {return numAcciones * precioAccion;}
//tValCap = valorCap(numAcciones, precioAccion);
//console.log(tValCap);

priceSales = function vPriceSales(precioAccion, numAcciones, venDoceM) {return ((precioAccion*numAcciones) / venDoceM);}
let tPriceS = priceSales(precioAccion, numAcciones, venDoceM);
//console.log(tPriceS);

    /* Promedios artimeticos y ponderados */
//Pendientes promedios aritmeticos y ponderados.
//Aoplicar el reduce

/* ---------------------------------------------------------------------------------------------
Valuación empresarial - Valuando con Precio a Utilidad */                       /* En desarrollo */
/* Desarrollar arrays */
const arrEmpresaVPU = [
    {id:1, precio:0, numAct0, marCap:0, utiDM:0, pu:0},
    {id:2, precio:0, numAct0, marCap:0, utiDM:0, pu:0},
    {id:3, precio:0, numAct0, marCap:0, utiDM:0, pu:0},
];

/* Donde:
0 - ID
1 - Precio
2 - # Acciones (millones)
3 - Market Cap (Millones) - mayor
4 - Utilidades 12M (millones)
5 - P/E - menor
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo */

//const arrPrecioPU = arrEmpresaVPV.map (product => {return product.precio;});
//console.log(arrPrecioPU);

//const arrNumActPU = arrEmpresaVPV.map (product => {return product.numAct;});
//console.log(arrNumActPU);

const arrMarCapPU = arrEmpresaVPU.map (product => {return product.marCap;});
//console.log(arrMarCapPU);


function mayMarCapPU(arrMarCapPU){
    var al = arrMarCapPU.length;
    maximum = arrMarCapPU[al-1];
    while (al--){
        if(arrMarCapPU[al] > maximum){
            maximum = arrMarCapPU[al]
        }
    }
            return maximum;
};
let marCapMayPU = mayMarCapPU(arrMarCapPU);
let mayorMarCapPU = marCapMayPU;
console.log(marCapMayPU);


//const arrVenDMPU = arrEmpresaVPV.map (product => {return product.venDM;});
//console.log(arrVenDMPU);

const arrPriSalPU = arrEmpresaVPU.map (product => {return product.pu;});
//console.log(arrPriSalPU);

function minPU(arrPriSalPU){
    var al = arrPriSalPU.length;
    minimum = arrPriSalPU[al-1];
    while (al--){
        if(arrPriSalPU[al] < minimum){
            minimum = arrPriSalPU[al]
        }
    }
    return minimum;
};
let PUMen = minPU(arrPriSalPU);
let menorPU = PUMen;
//console.log(PUMen)

/* Valor de Capitalización */
//valorCap = function valorCapit(numAcciones, precioAccion) {return numAcciones * precioAccion;}
//tValCap = valorCap(numAcciones, precioAccion);
//console.log(tValCap);

priceUtil =function vpriceUtil(precioAccion, numAcciones, utilDoceM) {return (precioAccion*numAcciones) / utilDoceM;}
let tPriceUti = priceUtil(precioAccion, numAcciones, utilDoceM);

//console.log(tPriceUti);
        /* Promedios artimeticos y ponderados */
//Pendientes promedios aritmeticos y ponderados.

/* ---------------------------------------------------------------------------------------------
WACC */                                                                             /* Pendiente */
/* Definición de varialbles*/
//let FCFF;           /* Flujo libre de efectivo a la firma */
//let valPerp;        /* Valor perpetuidad */
//let valG;           /* Valor de g, valor que representa el crecimiento constante */
    /* Valuación multiempresarial - Tasa de descuento*/
/* Se aplica la fórmula del WACC, desarrollada ya en este archivo */
/*  Desarrollar despues la formula de Beta:
    Beta = COV (%Acción, %Índice) / Var(%Índice); */

/* Desarrollar arrays */

/* Desarrollar funciones */

/* ---------------------------------------------------------------------------------------------
Valuación multiempresarial - Flujos descontados*/                                       /* Pendiente */
/* Desarrollar después la formula del Valor Presente */

/* Desarrollar arrays */

/* Desarrollar funciones */

/* Flujo libre de efectivo a la firma (FCFF) */
//FCFF = function flowfree(ebitda, impuestos, cambCapTrab, CAPEX) {return ebitda - impuestos - cambCapTrab - CAPEX;}
//    console.log(FCFF(ebitda, impuestos, cambCapTrab, CAPEX));
/* Desarrollar después la tabla */

/* Valor Perpetuidad */
//valPerp = function valorPerp (fluOper, wacc, valG) {return fluOper / (wacc - valG);}
//    console.log(valPerp(fluOper, wacc, valG));

    /* Desarrollar después cuadro del EV PV */
    /* Desarrollar cuadro del precio teórico */

/* Flujos
Investigar mas acerca de determinación de flujos de efectivo futuro */
/* Riesgo */
//let parDeu = function parDeuda(perDeu, kDeu, perTax) {return (perDeu * kDeu * ( 1-perTax));}
//console.log(parDeu(perDeu, kDeu, perTax));

//let parEq = function parEqu(perEq, kEq) {return perEq * kEq;}
//console.log(parEq(perEq, kEq));

//wacc = function taxWacc(parDeu, parEq) {return parDeu + parEq;}
//console.log(wacc(parDeu, parEq));

/*  Investigar bien la siguiente formula:
    retFin = rf + beta (retEsper - rf)
    retFin = rf + beta (market risk premium)*/