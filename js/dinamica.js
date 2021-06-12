function MostrarOcultar(capa) 
 { 
    switch(capa) {
    
        case (capa='descripcion_iz'):
            if(document.getElementById('servi-cu-iz').style.display != "block")   
                {    
                document.getElementById('detalle').style.display="block";
                document.getElementById('detalle').style.left="8.5%";
                document.getElementById('servi-cu-iz').style.display = "block";
                document.getElementById('fondo').style.height="618px";
                document.getElementById('servi-cu-me').style.display = "none";
                document.getElementById('servi-cu-de').style.display = "none"; 
                }
                else{
                    document.getElementById('detalle').style.display="none";  
                    document.getElementById('fondo').style.height="100%"; 
                    document.getElementById('servi-cu-iz').style.display= "none"
                }
                break;
    case (capa='descripcion_me'):
        if(document.getElementById('servi-cu-me').style.display != "block")   
                {
                    document.getElementById('detalle').style.display="block";
                    document.getElementById('detalle').style.left="37%";
                    document.getElementById('servi-cu-me').style.display = "block";  
                    document.getElementById('fondo').style.height="618px"; 
                    document.getElementById('servi-cu-iz').style.display = "none";
                    document.getElementById('servi-cu-de').style.display = "none";
                }
        else{
            document.getElementById('detalle').style.display="none";  
            document.getElementById('fondo').style.height="100%"; 
            document.getElementById('servi-cu-me').style.display= "none"
        }
        break; 
    
    case (capa='descripcion_de'):
        if(document.getElementById('servi-cu-de').style.display != "block")   
                {
        document.getElementById('detalle').style.display="block";
        document.getElementById('detalle').style.left="66%";
        document.getElementById('servi-cu-de').style.display = "block";  
        document.getElementById('fondo').style.height="618px"; 
        document.getElementById('servi-cu-iz').style.display = "none";
        document.getElementById('servi-cu-me').style.display = "none";
                }
        else{
            document.getElementById('detalle').style.display="none";  
            document.getElementById('fondo').style.height="100%"; 
            document.getElementById('servi-cu-de').style.display= "none"
        }
        break;

}       
}


