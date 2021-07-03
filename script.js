const brillo_item=document.getElementById("brillo_item");
const contraste_item=document.getElementById("contraste_item");
const desenfoque_item=document.getElementById("desenfoque_item");
const opacidad_item=document.getElementById("opacidad_item");
const saturacion_item=document.getElementById("saturacion_item");
const grises_item=document.getElementById("grises_item");
const sepia_item=document.getElementById("sepia_item");
lista2=[1,1,0,1,1,0,0];

const url="http://localhost:3000/todas";
async function consultas(){
    const response=await fetch(url);
    const data=await response.json();
    let videos=data.peliculas;
    lista=[];
    videos.forEach(element=>{
        lista.push(element.video)
    })
    imprimir2(lista);
}

consultas();

const imprimir2=(lista)=>{
    const button_choise=document.getElementById("button_choise");
    valor=1;
    const nueva_imagen=()=>{
        switch (true) {
            case valor==1:
                document.getElementById("imagen").src=lista[0];
                valor+=1;
                break;
            
            case (valor==2):
                document.getElementById("imagen").src=lista[1];
                valor+=1;
                break;
            
            case (valor==3):
                document.getElementById("imagen").src=lista[2];
                valor+=1;
                break;

            case (valor==4):
                document.getElementById("imagen").src=lista[3];
                valor+=1;
                break;

            case (valor==5):
                document.getElementById("imagen").src=lista[4];
                valor=1;
                break;
        }
    }
    button_choise.addEventListener("click",nueva_imagen);
}


const imprimir=()=>{
    brillo=0;
    contraste=0;
    desenfoque=0;
    opacidad=0;
    saturacion=0;
    grises=0;
    sepia=0;
    for (i in lista){
        if (i==0){
            this.brillo=lista2[i];
        } if(i==1){
            this.contraste=lista2[i];
        } if (i==2){
            this.desenfoque=lista2[i];
        } if (i==3){
            this.opacidad=lista2[i];
        } if (i==4){
            this.saturacion=lista2[i];
        } if(i==5){
            this.grises=lista2[i];
        } if(i==6){
            this.sepia=lista2[i];
        }     
    }

    document.getElementById("imagen").style.filter=`brightness(${brillo}) contrast(${contraste}) blur(${desenfoque}px) opacity(${opacidad}) saturate(${saturacion}) grayscale(${grises}) sepia(${sepia})` ;
}


const brillo_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[0]=valor/100;
    imprimir();
}

const contraste_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[1]=valor/100;
    imprimir();
}

const desenfoque_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[2]=valor;
    imprimir();
}

const opacidad_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[3]=valor;
    imprimir();
}

const saturacion_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[4]=valor/100;
    imprimir();
}

const grises_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[5]=valor/100;
    imprimir();
}

const sepia_funcion=(e)=>{
    const valor=e.target.value;
    this.lista2[6]=valor/100;
    imprimir();
}

brillo_item.addEventListener("change",brillo_funcion);
contraste_item.addEventListener("change",contraste_funcion);
desenfoque_item.addEventListener("change",desenfoque_funcion);
opacidad_item.addEventListener("change",opacidad_funcion);
saturacion_item.addEventListener("change",saturacion_funcion);
grises_item.addEventListener("change",grises_funcion);
sepia_item.addEventListener("change",sepia_funcion);