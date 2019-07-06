function MyFunction(estado){
    alert(estado);
    if(estado === 1){
        celarDivMap();
        var newMapDiv = document.getElementById("newMapDiv");
        newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=clinica%20merida&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
    }
    else if(estado === 2){
        celarDivMap();
        var newMapDiv = document.getElementById("newMapDiv");
        newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20campus%20observatorio&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
        }
    else if(estado === 3){
        celarDivMap();
        var newMapDiv = document.getElementById("newMapDiv");
        newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=hospital%20espa%C3%B1ol&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
    }
    else if(estado === 4){
        celarDivMap();
        var newMapDiv = document.getElementById("newMapDiv");
        newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=torre%20medica%20dalinde&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
        }
    else if(estado === 5){
        celarDivMap();
        var newMapDiv = document.getElementById("newMapDiv");
        newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=transplantes%20la%20raza&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
    }
    else if(estado === 6){
        celarDivMap();
        var newMapDiv = document.getElementById("newMapDiv");
        newMapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="974" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=oncologico%20sigo%20xxi&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://ultimatewp.net">ultimate wp</a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:974px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:974px;}</style></div>'
    }
}

function celarDivMap(){
    var divHomeMap = document.getElementById("newMapDiv");
    divHomeMap.innerHTML = "";
}

function findDoctor(city){
    // var search = document.getElementById('search-doctor').value;
    alert(city)
    if(city === 'cdmx'){
        clearDoctorsList()
        var newDoctorsList = document.getElementById("idContainer");
        newDoctorsList.innerHTML = "";
    }
    else if(city === 'chiapas'){
        clearDoctorsList()

    }
    else if(city === 'chihuahua'){
        clearDoctorsList()

    }
    else if(city === 'bajacalifornia'){
        clearDoctorsList()

    }
    else if(city === 'jalisco'){
        clearDoctorsList()

    }
    else if(city === 'michoacan'){
        clearDoctorsList()

    }
    else if(city === 'nuevoleon'){
        clearDoctorsList()

    }
    else if(city === 'puebla'){
        clearDoctorsList()

    }
    else if(city === 'queretaro'){
        clearDoctorsList()

    }
    else if(city === 'sanluis'){
        clearDoctorsList()

    }
    else if(city  === 'sinaloa'){
        clearDoctorsList()

    }
    else if(city === 'sonora'){
        clearDoctorsList()

    }
    else if(city === 'yucatan'){
        clearDoctorsList()

    }
    else{

    }
}

function clearDoctorsList(){
    var docotrsList = document.getElementById("idContainer")
    docotrsList.innerHTML = "";
}