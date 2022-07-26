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

/* Determinación del Activo Circulante o Activo a Corto Plazo */
actCirc = function activoCirc(efectivo, ctasXCob, inventario) {return efectivo + ctasXCob + inventario;}
    console.log(actCirc(efectivo, ctasXCob, inventario));

/* Determinación del Activo Fijo */
actFijo = function activoFijo(plantEq, edificios, inversiones) {return plantEq + edificios + inversiones;}
    console.log(actFijo(plantEq, edificios, inversiones));

/* Determinación del Activo Intangible */
actInt = function activoInt(marcas, patentes, credMerc){return marcas + patentes + credMerc;}
    console.log(actInt(marcas, patentes, credMerc));

/* Determinación del Total Activo */
totAct = function totActivo(actCirc, actFijo, actInt) {return actCirc + actFijo + actInt;}
    console.log(totAct(actCirc, actFijo, actInt));

/* Determinación del Pasivo a Corto Plazo */
pasCtoPlaz = function pasivoCP(proveedores, aceedores, deuBanc) {return proveedores + aceedores + deuBanc;}
 console.log(pasCtoPlaz(proveedores, aceedores, deuBanc));

/*  Determinación del Pasivo de Largo Plazo */
pasLP = function pasivoLP (deuBanLP, deuBur) {return deuBanLP + deuBur;}
    console.log(pasLP(deuBanLP, deuBur));

/* Determinación del Total Pasivo */
totPas = function totPasivo(pasCtoPlaz, pasLP) {return pasCtoPlaz + pasLP;}
    console.log(totPas(pasCtoPlaz, pasLP));

/* Determinación del Total Capital */
totCap = function totCapital(capContri, utilTRet) {return capContri + utilTRet;}
    console.log(totCap(capContri, utilTRet));

/* Validación de totales*/
let mensajeBG = function validaTotBG(totAct, totPas, totCap) {return totAct = (totPas + totCap) ? "Las cuentas cuadran" : "Las cuentas no cuadran";}
    console.log(mensaje(totAct, totPas, totCap));

/*Estados Financieros - Estado de Resultados */

/* Utilidad Bruta */
utilBrut = function utilidadBruta(ingresos, costos){return ingresos - costos;}
    console.log(utilBrut(ingresos, costos));

/* Utilidad Operativa*/
utilOper = function utilidadOper(utilBrut, gastos) {return utilBrut - gastos;}
    console.log(utilOper(utilBrut, gastos))

/* Utilidad Antes de Impuestos */
utilAntImp = function utilidadAI(utilOper, interFinan) {return utilOper - interFinan;}
    console.log(utilAntImp(utilOper, interFinan));

/* Utilidad Neta */
utilNeta = function utilidadNeta(utilAntImp, impuestos) {return utilAntImp - impuestos;}
    console.log(utilNeta(utilAntImp, impuestos));

/*Estados Financieros - Flujo de Efectivo */

/* Flujo de Operación */
fluOper = function flowOper(utilOper, depreAmor, intPag, impEFePag, cambCapTrab) {return utilOper + depreAmor - intPag - impEFePag - cambCapTrab;}
    console.log(fluOper(utilOper, depreAmor, intPag, impEFePag, cambCapTrab));

/* Determinación del Flujo de Inversión */
fluInv = function flowInv(fluOper, gtosInv, ingVtaAct) {return fluOper - gtosInv + ingVtaAct;}
    console.log(fluInv(fluOper, gtosInv, ingVtaAct));

/* Determinación del Flujo de Financiamiento */
fluFin = function flowFin(fluInv, prestamos, ingColAcc, pagPres, pagDiv) {return fluInv + prestamos + ingColAcc - pagPres - pagDiv;}
console.log(fluFin(fluInv, prestamos, ingColAcc, pagPres, pagDiv));

/*Estados Financieros - Razones Financieras */
/* Rentabilidad */

/* Margen de Costos */
mgnCostos = function margCostos(costos, ingresos) {return costos / ingresos;}
    console.log(mgnCostos(costos, ingresos));

/* Margen Bruto */
mgnBruto = function margBruto(utilBrut, ingresos) {return utilBrut / ingresos;}
    console.log(mgnBruto(utilBrut, ingresos))

/* Margen de Gastos */
mgnGastos = function margGastos(gastos, ingresos) {return gastos / ingresos;}
    console.log(mgnGastos(gastos, ingresos));

/* Margen Operativo */
mgnOper = function margOper(utilOper, ingresos) {return utilOper / ingresos;}
    console.log(mgnOper(utilOper, ingresos));

/* Margen Financiero */
mgnFin = function margFin(interFinan, ingresos) {return interFinan / ingresos;}
    console.log(mgnFin(interFinan, ingresos));
/* */
mgnUAI = function margUAI(utilAntImp, ingresos) {return utilAntImp / ingresos;}
    console.log(mgnUAI(utilAntImp, ingresos));
/* */
let mgnImp = function margImp(impuestos, ingresos) {return impuestos / ingresos;}
    console.log(mgnImp(impuestos, ingresos));

/* Margen Neto */
mgnNeto = function margNeto(utilNeta, ingresos) {return utilNeta / ingresos;}
    console.log(mgnNeto(utilNeta, ingresos));

/* Validación del Margen Neto */
let mensajeVMN = function validaTotales(utilNeta) {return utilNeta < 0 ? "Rentabilidad Negativa" : "Rentabilidad Positiva";}
    console.log(mensajeVMN(utilNeta));

/* Manejo de activos */

/* Rotación de Cuentas por Cobrar */
ARTO = function razonCxC(ingresos, ctasXCob) {return ingresos / ctasXCob;}
    console.log(ARTO(ingresos, ctasXCob));

/* Días de Cuentas por Cobrar */
diasCxC = function díasCxC(ARTO) {return 365 / ARTO;}
    console.log(diasCxC(ARTO));

/* Rotación de Inventario */
ITO = function razonInven(costos, inventario) {return costos / inventario;}
    console.log(ITO(costos, inventario));

/* Días de Inventario */
diasInven = function razonInven(ITO) {return 365 / ITO;}
    console.log(diasInven(ITO));

/* Rotación de Proveedores */
APTO = function razonProvee(costos, proveedores) {return costos / proveedores;}
    console.log(APTO(costos, proveedores));

/* Días de Proveedores */
diasProveed = function razonProvee(APTO) {return 365 /APTO;}
    console.log(diasProveed(APTO));

/* Deuda y Liquidez */

/* Current Ratio */
currRatio = function currentRatio(actCirc, pasCtoPlaz) {return actCirc / pasCtoPlaz;}
    console.log(currRatio(actCirc, pasCtoPlaz));

/* Prueba del Ácido */
prueAcido = function pruebaAcido(actCirc, inventario, pasCtoPlaz) {return (actCirc - inventario) / pasCtoPlaz;}
    console.log(prueAcido(actCirc, inventario, pasCtoPlaz));

/* Cobertura de Intereses */
cobInt = function coberInter(utilOper, intereses) {return utilOper / intereses;}
    console.log(cobInt(utilOper, intereses));

/* Apalancamiento */
apalancamiento = function apalanc(activo, capital) {return activo / capital;}
    console.log(apalancamiento(activo, capital));

/* Margen Neto */
let mgNeto = function MargNet(utilNeta, ingresos) {return utilNeta / ingresos;}
    console.log(mgNeto(utilNeta, ingresos)) 

/* Eficiencia de Activos */
let eficAct = function efictActivos(ingresos, activo) {return ingresos / activo;}
    console.log(eficAct(ingresos, activo));

/* Estructura de capital */
let structCap = function structCapital(activo, capital) {return activo / capital;}
    console.log(structCap(activo, capital));

/* Retorno sobre inversión */
let returnCap = function retunCapital(mgNeto, eficAct, structCap) {return mgNeto * eficAct * structCap;}
    console.log(returnCap(mgNeto, eficAct, structCap, returnCap));

/* Comparando empresas */
/* mgnFinanEF = intCob / intPag; */
/* Desarrollar comparación entre empresas */

/* Análisis multi empresarial - Múltiplos */
/* Desarrollar comparación entre empresas */

/* Valor de Capitalización */
valorCap = function valorCapit(numAcciones, precioAccion) {return numAcciones * precioAccion;}
    console.log(valorCap(numAcciones, precioAccion));

/* Precio Utilidad */
precioUtil = function precioUtilidad(valorCap, utilDoceM) {return valorCap / utilDoceM;}
    console.log(precioUtil(valorCap, utilDoceM));

/* Enterprise Value */
entVal = function enterValue(valorCap, deudaNeta) {return valorCap + deudaNeta;}
    console.log(entVal(valorCap, deudaNeta));

/* EV/EBITDA */
evEbitda = function evaEbitda(entVal, ebitda) {
    return entVal / ebitda;
}
console.log(evEbitda(entVal, ebitda));

/* P/VL */
pVl = function prVl(activo, pasivo, precioAccion) {return precioAccion / (activo - pasivo);}
    console.log(pvl(activo, pasivo, precioAccion));

/* Análisis multi empresarial - Valuación */

/* Flujos
Investigar mas acerca de determinación de flujos de efectivo futuro */

/* Riesgo */
let parDeu = function parDeuda(perDeu, kDeu, perTax) {return (perDeu * kDeu * ( 1-perTax));}
    console.log(parDeu(perDeu, kDeu, perTax));

let parEq = function parEqu(perEq, kEq) {return perEq * kEq;}
    console.log(parEq(perEq, kEq));

wacc = function taxWacc(parDeu, parEq) {return parDeu + parEq;}
    console.log(wacc(parDeu, parEq));

/*  Investigar bien la siguiente formula:
    retFin = rf + beta (retEsper - rf)
    retFin = rf + beta (market risk premium)*/

/* Valuación multiempresarial - Valuación relativa o Múltiplos*/

/* Valuando con Precio a Ventas */
/* valorCap = function valorCapit(numAcciones, precioAccion) */
priceSales = function vPriceSales(precioAccion, numAcciones, venDoceM) {return ((precioAccion*numAcciones) / venDoceM);}
    console.log(priceSales(precioAccion, numAcciones, venDoceM));
/* Desarrollar despues los promedios aritmeticos y ponderados */

/* Valuando con Precio a Utilidad */
priceUtil =function vpriceUtil(precioAccion, numAcciones, utilDoceM) {return (precioAccion*numAcciones) / utilDoceM;}
    console.log(priceUtil(precioAccion, numAcciones, utilDoceM));
/* Desarrollar despues los promedios aritmeticos y ponderados */

/* Valuación multiempresarial - Tasa de descuento*/
/* Se aplica la fórmula del WACC, desarrollada ya en este archivo */
/*  Desarrollar despues la formula de Beta:
    Beta = COV (%Acción, %Índice) / Var(%Índice); */

/* Valuación multiempresarial - Flujos descontados*/
/* Desarrollar después la formula del Valor Presente */

/* Flujo libre de efectivo a la firma (FCFF) */
FCFF = function flowfree(ebitda, impuestos, cambCapTrab, CAPEX) {return ebitda - impuestos - cambCapTrab - CAPEX;}
    console.log(FCFF(ebitda, impuestos, cambCapTrab, CAPEX));
/* Desarrollar después la tabla */

/* Valor Perpetuidad */
valPerp = function valorPerp (fluOper, wacc, valG) {return fluOper / (wacc - valG);}
    console.log(valPerp(fluOper, wacc, valG));

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
    {id:3, renta : 0, manejoAct: 0, apalan: 0, retInv:0},
    {id:4, renta : 0, manejoAct: 0, apalan: 0, retInv:0}
];
/*
Donde:
0 - Rentabilidad
1 - Manejo de activos
2 - Apalancamiento
3 - Retorno sobre inversión
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo
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
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo
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
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo
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
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo
*/