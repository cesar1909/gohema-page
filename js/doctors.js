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
        newDoctorsList.innerHTML = ""
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
    docotrsList.innerHTML = `<div class="row">
    <div class="col-md-4 element-animate">
      <div class="media d-block media-custom text-center">
        <!-- <img src="img/doctor_1.jpg" alt="Image Placeholder" class="img-fluid"> -->
        <div class="media-body">
          <h3 class="mt-0 text-black">Dr. Adrián Alejandro Ceballos López</h3>
          <p><i class="material-icons">location_on</i>  Yucatán<a id="myLink1" href="#" onclick="MyFunction(1);return false;"> ver</a></p>
          <p><i class="material-icons">phone</i>  99 9925 0444</p>
          <p><i class="material-icons">email</i>  ceballosadrian@gmail.com</p>
          <!-- <p>
            <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
            <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
            <a href="#" class="p-2"><span class="fa fa-linkedin"></span></a>
          </p> -->
        </div>
      </div>
    </div>
    <div class="col-md-4 element-animate">
      <div class="media d-block media-custom text-center">
        <!-- <img src="img/doctor_2.jpg" alt="Image Placeholder" class="img-fluid"> -->
        <div class="media-body">
          <h3 class="mt-0 text-black">Dr. Alberto Villalobos Prieto</h3>
          <p><i class="material-icons">location_on</i>  Ciudad de México<a id="myLink1" href="#" onclick="MyFunction(2);return false;"> ver</a></p>
          <p><i class="material-icons">email</i>  avillalobosabc@yahoo.com.mx</p>
          <!-- <p>
            <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
            <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
            <a href="#" class="p-2"><span class="fa fa-linkedin"></span></a>
          </p> -->
        </div>
      </div>
    </div>
    <div class="col-md-4 element-animate">
      <div class="media d-block media-custom text-center">
        <!-- <img src="img/doctor_3.jpg" alt="Image Placeholder" class="img-fluid"> -->
        <div class="media-body">
          <h3 class="mt-0 text-black">Dra. Alejandra Zarate Osorno</h3>
          <p><i class="material-icons">location_on</i>  Ciudad de México<a id="myLink1" href="#" onclick="MyFunction(3);return false;"> ver</a></p>
          <p><i class="material-icons">phone</i>  55 5255 9600</p>
          <p><i class="material-icons">email</i>  zaratedr@hotmail.com</p>                
          <!-- <p>
            <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
            <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
            <a href="#" class="p-2"><span class="fa fa-linkedin"></span></a>
          </p> -->
        </div>
      </div>
    </div>
    <!-- <div class="col-md-3 element-animate">
      <div class="media d-block media-custom text-center">
        <img src="img/doctor_4.jpg" alt="Image Placeholder" class="img-fluid">
        <div class="media-body">
          <h3 class="mt-0 text-black">Dr. Jessica Doe</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
            <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
            <a href="#" class="p-2"><span class="fa fa-linkedin"></span></a>
          </p>
        </div>
      </div>
    </div> -->
  </div>`
}