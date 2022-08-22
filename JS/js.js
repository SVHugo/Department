
const piso1_dormitorio_left = [
    "p1_dormitorio_left_1.jpg",
    "p1_dormitorio_left_2.jpg",
    "p1_dormitorio_left_3.jpg",
    "p1_dormitorio_left_4.jpg",
    "p1_dormitorio_left_5.jpg",
    "p1_dormitorio_left_6.jpg"
];
const piso1_dormitorio_right = [
    "p1_dormitorio_right_7.jpg",
    "p1_dormitorio_right_8.jpg",
    "p1_dormitorio_right_9.jpg",
    "p1_dormitorio_right_10.jpg",
    "p1_dormitorio_right_11.jpg",
    "p1_dormitorio_right_12.jpg"
];
const piso2_dormitorio_left = [
    "p2_dormitorio_left_1.jpg",
    "p2_dormitorio_left_2.jpg",
    "p2_dormitorio_left_3.jpg",
    "p2_dormitorio_left_4.jpg",
    "p2_dormitorio_left_5.jpg",
    "p2_dormitorio_left_6.jpg"
];


const caja_array1 = document.getElementById("caja_array1");
const caja_array2 = document.getElementById("caja_array2");

piso1_dormitorio_left.forEach(item => {
    const images = document.createElement("img");
    images.id = "p1_left";
    images.className = "p1_left_class";
    images.src = "/Img/" + item;
    images.alt = "images";
    images.style.width="170px";
    images.style.height = "190px";
    images.style.display = "none";
    images.style.border ="5px solid green";
    caja_array1.appendChild(images);
});

piso1_dormitorio_right.forEach(item => {
    const images = document.createElement("img");
    images.id = "p1_right";
    images.className = "p1_right_class";
    images.src = "/Img/" + item;
    images.alt = "images";
    images.id = "p1_right";
    images.style.width="170px";
    images.style.height = "190px";
    images.style.display = "none";
    images.style.border ="5px solid green";
    caja_array1.appendChild(images);
});

piso2_dormitorio_left.forEach(item => {
    const images = document.createElement("img");
    images.id = "p2_left";
    images.className = "p2_left_class";
    images.src = "/Img/" + item;
    images.alt = "images";
    images.style.width="170px";
    images.style.height = "190px";
    images.style.display = "none";
    images.style.border ="5px solid green";
    caja_array1.appendChild(images);
});

const p1_left_capturar=[...document.querySelectorAll(".p1_left_class")];
const p1_right_capturar =[...document.querySelectorAll(".p1_right_class")];
const p2_left_capturar = [...document.querySelectorAll(".p2_left_class")];


function p1_left() {
    p1_left_capturar.forEach(function(item,index,array){
        item.style.display="block";
        if(index == 3){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        if(index == 4){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        if(index == 5){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        
    });
    p1_right_capturar.forEach(item =>{
        item.style.display="none";
    });
    p2_left_capturar.forEach(item =>{
        item.style.display="none";
    });
}
function p1_right() {
    p1_left_capturar.forEach(item =>{
        item.style.display="none";
    });
    p1_right_capturar.forEach(function(item,index,array){
        item.style.display="block";
        if(index == 3){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        if(index == 4){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        if(index == 5){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        
    });
    p2_left_capturar.forEach(item =>{
        item.style.display="none";
    });
}
function p2_left() {
    p1_left_capturar.forEach(item =>{
        item.style.display="none";
    });
    p1_right_capturar.forEach(item =>{
        item.style.display="none";
    });
    p2_left_capturar.forEach(function(item,index,array){
        item.style.display="block";
        if(index == 3){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        if(index == 4){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        if(index == 5){
            item.style.marginRight="1em";
            caja_array2.appendChild(item);
        }
        
    });
}





