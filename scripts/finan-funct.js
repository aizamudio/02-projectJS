/* Definición de variables */
/* Cuentas de Balance General */
let efectivo;
let ctasXCob;       /* Cuentas por cobrar */
let inventario;
let actCirc;        /* Activo Circulante */
let plantEq;        /* Planta y equipo */
let eedificios;
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

/* Cuentas de Estado de Resultados */
let ingresos;
let costos;
let utilBrut;       /* Utilidad Bruta */
let gastos;
let utilOper;       /* Utilidad OOerativa */
let interFinan;     /* Intereses y Financieros */
let utilAntImp;     /* Utilidad antes de Impuestos */
let impuestos;
let utilNeta;       /* Utilidad Neta */
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
let mgnCostos;      /* Margen de Costos */
let mgnBruto;       /* Margen Bruto */
let mgnGastos;      /* Margen de Gastos */
let mgnOper;        /* Margen Operativo */
let mgnFin;         /* Margen Financiero */
let mgnFinanEF;     /* Margen Financiero en empresas financieras*/
let mgnUAI;         /* Margen de Utilidad Antes de Impuestos */
let mgnNeto;        /* Margen de Utilidad Neta */
let ARTO;           /* Rotación de Cuentas por Cobrar */

let diasCxC;        /* Días de Cuentas por Cobrar */
let ITO;            /* Rotación de Inventarios */

let diasInven;      /* Días de inventario */
let APTO            /* Rotación de Proveedores */

let diasProveed;    /* Días de Proveedores */
let currRatio;      /* Current Ratio */
let prueAcido;      /* Prueba del Ácido */
let cobInt;         /* Cobertura de Intereses */
let intereses;
let apalancamiento;
let rotActivos;     /* Rotación Activos */
let RetorCap;       /* Retorno sobre Capital */
let precioUtil;     /* Precio Utilidad */
let numAcciones;    /* Número de acciones */
let precioAccion;   /* Preccio de la acción */
let intCob;         /* Intereses cobrados */
let valorCap;        /* Valor de Capitalización */
let venDoceM;       /* Ventas de 12 meses */
let utilDoceM;      /* Utilidades generadas en un período de 12 meses */
let entVal;         /* Enterprise Value o EV */
let deudaNeta;
let ebitda;
let evEbitda;       /* EV / EBITDA */
let vl;             /* Valor en libros o VL, conocido también como capital */
let pVl;            /* P/VL */
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
let FCFF;           /* Flujo libre de efectivo a la firma */
let valPerp;        /* Valor perpetuidad */
let valG;           /* Valor de g, valor que representa el crecimiento constante */

/* Funciones predefinidas que podrían ser utiles
- parsefloat();
- toFixed();
- toString();
*/

/* Definición de funciones del sitio */

/*Estados Financieros - Balance general */

function activoCirc(efectivo, ctasXCob, inventario){    /* Determinación del Activo Circulante o Activo a Corto Plazo */
    actCirc = efectivo + ctasXCob + inventario;
    console.log(actCirc);
}

function activoFijo(plantEq, edificios, inversiones) {  /* Determinación del Activo Fijo */
    actFijo = plantEq + edificios + inversiones;
    console.log(actFijo);
}

function activoInt (marcas, patentes, credMerc){        /* Determinación del Activo Intangible */
    actInt = marcas + patentes + credMerc;
    console.log(actInt);
}

function totActivo (actCirc, actFijo, actInt) {         /* Determinación del Total Activo */
    totAct = actCirc + actFijo + actInt;
    console.log(totAct);
}

function pasivoCP(proveedores, aceedores, deuBanc) {    /* Determinación del Pasivo a Corto Plazo */
    pasCtoPlaz = proveedores + aceedores + deuBanc;
    console.log(pasCtoPlaz);
}

function pasivoLP (deuBanLP, deuBur) {                  /*  Determinación del Pasivo de Largo Plazo */
    pasLP = deuBanLP + deuBur;
    console.log(pasLP);
}

function totPasivo(pasCtoPlaz, pasLP) {                 /* Determinación del Total Pasivo */
    totPas = pasCtoPlaz + pasLP;
    console.log(totPas);
}

function totCapital(capContri, utilTRet) {              /* Determinación del Total Capital */
    totCap = capContri + utilTRet;
    console.log(totCap);
}

function validaTotales(totAct, totPas, totCap) {
    let mensaje = totAct = (totPas + totCap) ? "Las cuentas cuadran" : "Las cuentas no cuadran";
    console.log(mensaje);
}

/*Estados Financieros - Estado de Resultados */

function utilidadBruta (ingresos, costos){
    utilBrut = ingresos - costos;
    console.log(utilBrut);
}

function utilidadOper(utilBrut, gastos) {
    utilOper = utilBrut - gastos;
    console.log(utilOper)
}

function utilidadAI(utilOper, interFinan) {
    utilAntImp = utilOper - interFinan;
    console.log(utilAntImp);
}

function utilidadNeta(utilAntImp, impuestos) {
    utilNeta = utilAntImp - impuestos;
    console.log(utilNeta);
}

/*Estados Financieros - Flujo de Efectivo */

function flowOper(utilOper, depreAmor, intPag, impEFePag, cambCapTrab) {    /* Determinación del Flujo de Operación */
    fluOper = utilOper + depreAmor - intPag - impEFePag - cambCapTrab;
    console.log(fluOper);
}

function flowInv(fluOper, gtosInv, ingVtaAct) {                     /* Determinación del Flujo de Inversión */
    fluInv = fluOper - gtosInv + ingVtaAct;
    console.log(fluInv)
}

function flowFin(fluInv, prestamos, ingColAcc, pagPres, pagDiv) {   /* Determinación del Flujo de Financiamiento */
    fluFin = fluInv + prestamos + ingColAcc - pagPres - pagDiv;
    console.log(fluFin);
}

/*Estados Financieros - Razones Financieras */
/* Rentabilidad */

function margCostos(costos, ingresos) {          /* Determinación del Margen de Costos */
    mgnCostos = costos / ingresos;
    console.log(mgnCostos);
}

function margBruto(utilBrut, ingresos) {       /* Determinación del Margen Bruto */
    mgnBruto = utilBrut / ingresos;
    console.log(mgnBruto)
}

function margGastos(gastos, ingresos) {         /* Determinación del Margen de Gastos */
    mgnGastos = gastos / ingresos;
    console.log(mgnGastos);
}

function margOper(utilOper, ingresos) {         /* Determinación del Margen Operativo */
    mgnOper = utilOper / ingresos;
    console.log(mgnOper);
}

function margFin(interFinan, ingresos) {        /* Determinación del Margen Financiero */
    mgnFin = interFinan / ingresos;
    console.log(mgnFin);
}

function margUAI(utilAntImp, ingresos) {
    mgnUAI = utilAntImp / ingresos;
    console.log(mgnUAI);
}

function margImp(impuestos, ingresos) {
    let mgnImp = impuestos / ingresos;
    console.log(mgnImp);
}

function margNeto(utilNeta, ingresos) {         /* Determinación del Margen Neto */
    mgnNeto = utilNeta / ingresos;
    console.log(mgnNeto);
}


function validaTotales(totAct, totPas, totCap) {
    let mensaje = utilNeta < 0 ? "Rentabilidad Negativa" : "Rentabilidad Positiva";
    console.log(mensaje);
}

/* Manejo de activos */

function razonCxC(ingresos, ctasXCob) {            /* Rotación y Días de Cuentas por Cobrar */
    ARTO = ingresos / ctasXCob;
    diasCxC = 365 / ARTO;
    console.log(ARTO, diasCxC);
}

function razonInven(costos, inventario) {          /* Rotación y Días de Inventario */
    ITO = costos / inventario;
    diasInven = 365 / ITO;
    console.log(ITO, diasInven);
}

function razonProvee(costos, proveedores) {         /* Rotación y de Proveedores */
    APTO = costos / proveedores;
    diasProveed = 365 /APTO;
    console.log(APTO, diasProveed);
}

/* Deuda y Liquidez */

function currentRatio(actCirc, pasCtoPlaz) {            /* Current Ratio */
    currRatio = actCirc / pasCtoPlaz;
    console.log(currRatio);
}

function pruebaAcido(actCirc, inventario, pasCtoPlaz) { /* Prueba del Ácido */
    prueAcido = (actCirc - inventario) / pasCtoPlaz;
    console.log(prueAcido)
}

function coberInter(utilOper, intereses) {             /* Cobertura de Intereses */
    cobInt = utilOper / intereses;
    console.log(cobInt)
}

function apalanc(activo, capital) {                    /* Apalancamiento */
    apalancamiento = activo / capital;
    console.log(apalancamiento);
}

/* Retorno sobre inversión */
function retornoCap (utilNeta, ingresos, activo, capital) {     /*Retorno sobre inversión */
    let mgNeto = utilNeta / ingresos;
    let eficAct = ingresos / activo;
    let structCap = activo / capital;
    let returnCap = mgNeto * eficAct * structCap;
    console.log(mgNeto, eficAct, structCap, returnCap);
}

/* Comparando empresas */
/* mgnFinanEF = intCob / intPag; */
/* Desarrollar comparación entre empresas */

/* Análisis multi empresarial - Múltiplos */
/* Desarrollar comparación entre empresas */

function valorCapit(numAcciones, precioAccion) {        /* Valor de Capitalización */
    valorCap = numAcciones * precioAccion;
    console.log(valorCap);
}

function precioUtilidad(valorCap, utilDoceM) {          /* Precio Utilidad */
    precioUtil = valorCap / utilDoceM;
    console.log(precioUtil);
}

function enterValue(valorCap, deudaNeta) {              /* Enterprise Value */
entVal = valorCap + deudaNeta;
console.log(entVal);
}

function evaEbitda(entVal, ebitda) {                    /* EV/EBITDA */
    evEbitda = entVal / ebitda;
    console.log(evEbitda);
}

function prVl(activo, pasivo, precioAccion) {           /* P/VL */
    vl = activo - pasivo;
    pVl = precioAccion / vl;
    console.log(vl, pVl);
}


/* Análisis multi empresarial - Valuación */

/* Flujos
Investigar mas acerca de determinación de flujos de efectivo futuro */

/* Riesgo */
function taxWacc(perDeu, kDeu, perTax, perEq,  kEq) {
    /* wacc = (perDeu * kDeu * ( 1-perTax)) + (perEq * kEq); */
    let parDeu = (perDeu * kDeu * ( 1-perTax));
    let parEq = (perEq * kEq);
    wacc = parDeu + parEq;
    console.log(parDeu, parEq, wacc);
}

/*  Investigar bien la siguiente formula:
    retFin = rf + beta (retEsper - rf)
    retFin = rf + beta (market risk premium)*/

/* Valuación multiempresarial - Valuación relativa o Múltiplos*/
function vPriceSales(precioAccion, numAcciones, venDoceM) {         /* Valuando con Precio a Ventas */
    valorCap = (precioAccion*numAcciones)
    priceSales = valorCap / venDoceM;
    console.group(valorCap, priceSales);
}
/* Desarrollar despues los promedios aritmeticos y ponderados */

function vpriceUtil(precioAccion, numAcciones, utilDoceM) {         /* Valuando con Precio a Utilidad */
    valorCap = (precioAccion*numAcciones)
    priceUtil = valorCap / utilDoceM;
    console.log(valorCap, priceUtil);
}
/* Desarrollar despues los promedios aritmeticos y ponderados */

/* Valuación multiempresarial - Tasa de descuento*/
/* Se aplica la fórmula del WACC, desarrollada ya en este archivo */
/*  Desarrollar despues la formula de Beta:
    Beta = COV (%Acción, %Índice) / Var(%Índice); */

/* Valuación multiempresarial - Flujos descontados*/
/* Desarrollar después la formula del Valor Presente */

function flowfree(ebitda, impuestos, cambCapTrab, CAPEX) {          /* Flujo libre de efectivo a la firma (FCFF) */
    FCFF = ebitda - impuestos - cambCapTrab - CAPEX;
    console.log(FCFF);
}
/* Desarrollar después la tabla */

function valorPerp (fluOper, wacc, valG) {                          /* Valor Perpetuidad */
    valPerp = fluOper / (wacc - valG);
    console.log(valPerp);
}
    /* Desarrollar después cuadro del EV PV */
    /* Desarrollar cuadro del precio teórico */

/* Definición de arrays */

/* Básicos de Análisis Fundamental - Balance general*/
/*Incluirlo después */

/* Básicos de Análisis Fundamental - Estado de Resultados*/
/*Incluirlo después */

/* Analisis Multi Empresarial - Razones Financieras */
let arrEmpresaCE = [
    {id:1, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:2, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:3, renta : 0, manejoAct: 0, apalan: 0, retInv:0}
];
let arrResultadosCE = [
    {id:1, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:2, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:2, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:3, renta : 0, manejoAct: 0, apalan: 0, retInv:0}
];
/*
Donde:
0 - Rentabilidad
1 - Manejo de activos
2 - Apalancamiento
3 - Retorno sobre inversión
*/

/* Analisis Multi Empresarial - Múltiplos */
let arrEmpresaMul = [
    {id:1, preUti:0, evEB:0, PVL:0},
    {id:2, preUti:0, evEB:0, PVL:0},
    {id:3, preUti:0, evEB:0, PVL:0},
];
let ResultadosMul = [
    {id:1, preUti:0, evEB:0, PVL:0},
    {id:2, preUti:0, evEB:0, PVL:0},
    {id:3, preUti:0, evEB:0, PVL:0},
];
/* 
Donde:
0 - Precio Utilidad
1 - EV/EBITDA
2 - P/VL
*/

/* Valuación empresarial - Valuando con Precio a Ventas */
let arrEmpresaVPV = [
    {id:1, precio:0, numAct0, marCap:0, venDM:0, priSal:0},
    {id:2, precio:0, numAct0, marCap:0, venDM:0, priSal:0},
    {id:3, precio:0, numAct0, marCap:0, venDM:0, priSal:0},
];
let arrResultadosVPV = [
    {id:0, precio:0, numAct0, marCap:0, venDM:0, priSal:0},
];
/*
Donde:
0 - ID
1 - Precio
2 - # Acciones (millones)
3 - Market Cap (Millones)
4 - Ventas 12M (millones)
5 - P/S
*/

/* Valuación empresarial - Valuando con Precio a Utilidad */
let arrEmpresaVPU = [
    {id:1, precio:0, numAct0, marCap:0, utiDM:0, pe:0},
    {id:2, precio:0, numAct0, marCap:0, utiDM:0, ps:0},
    {id:3, precio:0, numAct0, marCap:0, utiDM:0, ps:0},
];
let arrResultadosVPU = [
    {id:0, precio:0, numAct0, marCap:0, utiDM:0, pe:0},
];
/*
Donde:
0 - ID
1 - Precio
2 - # Acciones (millones)
3 - Market Cap (Millones)
4 - Utilidades 12M (millones)
5 - P/E
*/