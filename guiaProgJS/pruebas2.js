/* Valores de prueba */

let actCirc;        /* Activo Circulante */
let efectivo = 200;
let ctasXCob = 150;       /* Cuentas por cobrar */
let inventario = 80;
let actFijo;        /* Activo Fijo */
let plantEq = 600;        /* Planta y equipo */
let edificios = 800;
let inversiones = 250;
let actInt;         /* Activos intangibles */
let marcas = 300;
let patentes = 80;
let credMerc = 0;       /* Crédito Mercantil */
let totAct;         /* Total Activo */
let activo;
let pasCtoPlaz;     /* Pasivo a Corto Plazo */
let proveedores = 300;
let aceedores = 175;
let deuBanc = 100;        /* Deuda Bancaria */
let pasLP;          /* Pasivo de Largo Plazo */
let deuBanLP = 200;       /* Deuda Bancaria a Largo Plazo */
let deuBur = 125;         /* Deuda Bursátil */
let totPas;         /* Total Pasivo */
let pasivo;
let totCap;         /* Total Capital */
let capContri = 1200;      /* Capital Contribuido */
let utilTRet = 360;       /* Utilidades Retenidas */
let capital;
let capCont;        /* Capital Contable */

//------------------------------------------------------------------------------------
// Estado de Resultados

let ingresos = 1000;
let costos = 300;
let utilBrut;       /* Utilidad Bruta */
let gastos = 140;
let utilOper;       /* Utilidad OOerativa */
let interFinan = 150;     /* Intereses y Financieros */
let utilAntImp;     /* Utilidad antes de Impuestos */
let impuestos = 250;
let utilNeta;       /* Utilidad Neta */

//------------------------------------------------------------------------------------
// Flujo de efectivo

//------------------------------------------------------------------------------------
// Razones Financieras

//------------------------------------------------------------------------------------
// Analisis Multi Empresarial - Comparando empresas

const arrEmpresaCE = [
    {id:1, renta : 4, manejoAct: 6, apalan: 0.3, retInv:4},
    {id:2, renta : 7, manejoAct: 2, apalan: 0.4, retInv:1},
    {id:3, renta : 2, manejoAct: 3, apalan: 0.5, retInv:5}
];

/*
0 - Rentabilidad - mayor
1 - Manejo de activos - mayor
2 - Apalancamiento - menor: activo/capita
3 - Retorno sobre inversión - mayor UN/Cao */

//------------------------------------------------------------------------------------
/* Analisis Multi Empresarial - Múltiplos */

const arrEmpresaMul = [
    {id:1, preUti:0.3, evEB:0.7, PVL:0.3},
    {id:2, preUti:0.1, evEB:0.8, PVL:0.7},
    {id:3, preUti:0.4, evEB:0.6, PVL:0.4},
];
/* Donde:
0 - Precio Utilidad - menor
1 - EV/EBITDA - menor
2 - P/VL - menor */

//------------------------------------------------------------------------------------
/* Valuación empresarial - Valuando con Precio a Ventas */
const arrEmpresaVPV = [
    {id:1, precio:0, numAct:0, marCap:700, venDM:0, priSal:30},
    {id:2, precio:0, numAct:0, marCap:250, venDM:0, priSal:25},
    {id:3, precio:0, numAct:0, marCap:480, venDM:0, priSal:22},
];

/*Donde:
0 - ID
1 - Precio
2 - # Acciones (millones)
3 - Market Cap (Millones) - mayor
4 - Ventas 12M (millones)
5 - P/S - menor
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo*/

const arrMarCapPV = arrEmpresaVPV.map (product => {return product.marCap;});
//console.log(arrMarCapPV);

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
let marCapMayPV = mayMarCap(arrMarCapPV);
let mayorMarCapPV = marCapMayPV;              //console.log(marCapMay);

const empMayCapPV = arrEmpresaVPV.filter (product => {
    return product.marcCap = marCapMay;
})
console.log(empMayCapPV)









/* ---------------------------------------------------------------------------------------------
Valuación empresarial - Valuando con Precio a Utilidad */                       /* En desarrollo */
/* Desarrollar arrays */
let arrEmpresaVPU = [
    {id:1, precio:0, numAct:0, marCap:880, utiDM:0, pu:10},
    {id:2, precio:0, numAct:0, marCap:900, utiDM:0, pu:18},
    {id:3, precio:0, numAct:0, marCap:730, utiDM:0, pu:9},
];

/* Donde:
0 - ID
1 - Precio
2 - # Acciones (millones) - mayor
3 - Market Cap (Millones)
4 - Utilidades 12M (millones)
5 - P/E - menor
Buscar el elemento que tenga el elemento en cuestion mas recomendable y al final aplicar el ejemplo filter para almacenar el elemento en un nuevo arreglo */

/* ---------------------------------------------------------------------------------------------
*/

