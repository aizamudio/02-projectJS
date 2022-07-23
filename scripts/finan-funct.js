/* Definición de variables */
let activo;
let actCirc;        /* Activo Circulante */
let pasivo;

let pasCtoPlaz;     /*  Pasivo Corto Plazo */
let capital;
let capCont;        /* Capital Contable */
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
let ctasXCob;       /* Cuentas por cobrar */
let diasCxC;        /* Días de Cuentas por Cobrar */
let ITO;            /* Rotación de Inventarios */
let inventario;
let diasInven;      /* Días de inventario */
let APTO            /* Rotación de Proveedores */
let proveedores;
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

/*Estados Financieros - Balance general */
activo = pasivo + capital;

/*Estados Financieros - Estado de Resultados */
utilBrut = ingresos - costos;
utilOper = utilBrut - gastos;
utilAntImp = utilOper -interFinan;
utilNeta = utilAntImp - impuestos;

/*Estados Financieros - Flujo de Efectivo */
fluOper = utilOper + depreAmor - intPag - impEFePag - cambCapTrab;
fluInv = fluOper - gtosInv + ingVtaAct;
fluFin = fluInv + prestamos + ingColAcc - pagPres -pagDiv;

/*Estados Financieros - Razones Financieras */
/* Rentabilidad */
mgnCostos = costos / ingresos;
mgnBruto = utilBrut / ingresos;
mgnGastos = gastos / ingresos;
mgnOper = utilOper / ingresos;
mgnFin = interFinan / ingresos;
mgnUAI = utilAntImp / ingresos;
mgnNeto = utilNeta / ingresos;

/* Manejo de activos */
ARTO = ingresos / ctasXCob;
diasCxC = 365 / ARTO;
ITO = costos / inventario;
diasInven = 365 / ITO;
APTO = costos / proveedores;
diasProveed = 365 /APTO;

/* Deuda y Liquidez */
currRatio = actCirc / pasCtoPlaz;
prueAcido = (actCirc - inventario) / pasCtoPlaz;
cobInt = utilOper / intereses;
apalancamiento = activo / capital;

/* Retorno sobre inversión */
rotActivos = ingresos / activo;
RetorCap = utilNeta / capital;

/* Comparando empresas */
mgnFinanEF = intCob / intPag;

/* Análisis multi empresarial - Múltiplos */

valorCap = numAcciones * precioAccion;
precioUtil = valorCap / utilDoceM;
entVal = valorCap + deudaNeta;
evEbitda = entVal / ebitda;
vl = activo - pasivo;
pVl = precioAccion / vl;

/* Análisis multi empresarial - Valuación */

/* Flujos
Investigar mas acerca de determinación de flujos de efectivo futuro */

/* Riesgo */
wacc = (perDeu * kDeu * ( 1-perTax)) + (perEq * kEq); /* Revisar formula */

/*  Investigar bien la siguiente formula:
    retFin = rf + beta (retEsper - rf)
    retFin = rf + beta (market risk premium)*/

/* Valuación multiempresarial - Métodos de valuación */

/* Valuación multiempresarial - Valuación relativa o Múltiplos*/
priceSales = valorCap / venDoceM;
    /* Desarrollar despues los promedios aritmeticos y ponderados */
priceUtil = valorCap / utilDoceM;
    /* Desarrollar despues los promedios aritmeticos y ponderados */

/* Valuación multiempresarial - Tasa de descuento*/
    /* Se aplica la fórmula del WACC, revisar formula */
    /*  Desarrollar despues la formula de Beta:
        Beta = COV (%Acción, %Índice) / Var(%Índice); */

/* Valuación multiempresarial - Flujos descontados*/

    /* Desarrollar después la formula del Valor Presente */
FCFF = ebitda - impuestos - cambCapTrab - CAPEX;
    /* Desarrollar después la tabla */
valPerp = fluOper / (wacc - valG);
    /* Desarrollar después cuadro del EV PV */
    /* Desarrollar cuadro del precio teórico */
