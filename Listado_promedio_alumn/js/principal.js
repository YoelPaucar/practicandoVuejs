var app = new Vue({
    el : '#app',
    data: {
        showedit : true,
        // mensaje: 'Hola Mundo',
        notaif :'Lista de Notas',
        notaelse: 'No existen Listas',
        lista: [
            {nombre : 'Andres', promedio: '7', estado: false},
            {nombre : 'Andre', promedio: '19', estado: true},
            {nombre : 'Jose', promedio: '15', estado: true},
        ],
        nombre : "",
        promedio:"",
    },
    methods:{
       agregarNota: function (show ){
            estadoA = false;
            if(this.promedio >= 12.5){
               estadoA = true;
            }
            if(this.nombre!= "" && this.promedio!=""){
             this.lista.push({
                nombre:this.nombre,
                promedio:this.promedio,
                estado:estadoA , 
              });
               
              this.nombre="";
              this.promedio="";
             
            }else{
               alert('Ingrese el nombre y promedio del estudiante :v');
            }
       },
       eliminarNota: function(index){
            this.lista.splice(index, 1);
            // console.log(index)
       },
       eliminarAll: function(){
           this.lista = this.lista.filter(function (lista){
               return lista.pending;
           })
       },
       editarNota: function (index){
            let a = index;
             b = this.showedit = false;
            this.lista.splice(a, b, 1);
        
        //    
        //    this.showedit = false;
           
       },
       
       
    }
});