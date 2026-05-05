function Datos (){
    let informacion = [{
        nombre:"Luis",
        edad:18,
        curp:"GAML070814HTCRNSA3"        
    },
    {
        nombre:"Isai",
        edad:18,
        curp:"CAHI071109HTCRDVSA1"
},
{
        nombre:"Maria",
        edad:18,
        curp:"CAOG070510MTCMRDA9"
}]
informacion.map((Datos1)=>{
    console.log(`mi nombre es ${Datos1.nombre} y tengo ${Datos1.edad} anos`)
})
}
Datos();