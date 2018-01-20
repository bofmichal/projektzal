function zaladuj(){
    
            var zdjecie = "<img src=\"IMG_1047.jpg\" width=\"200px\" style=\"padding-left: 25px;\"/>";
            document.getElementById("michal").innerHTML=zdjecie;
                        
            var urodzenie = "19.06.1987r";
            document.getElementById("data_ur").innerHTML = urodzenie;
            
            var adres = "ul. Wesoła 27 m 7, 15-307 Białystok";
            document.getElementById("adres").innerHTML = adres;

            var email = "<a href=\"mailto:bofmichal@gmail.com\">bofmichal@gmail.com</a>";
            document.getElementById("email").innerHTML = email;
            
            var tel = "+48 510 329 364";
            document.getElementById("tel").innerHTML = tel;
            
            var edu1 = "Kierunek: Elektrotechnika; Specjalizacja: Elektroenergetyka i Technika Świetlna</br><b>Tytuł: magister</b>";
            document.getElementById("edukacja1").innerHTML = edu1;
            
            var edu2 = "Kierunek: Elektrotechnika; Specjalizacja: Elektroenergetyka i Technika Świetlna</br><b>Tytuł: inżynier</b>";
            document.getElementById("edukacja2").innerHTML = edu2;
            
            var edu3 = "Kierunek: Elektronika</br><b>Tytuł: technik elektronik</b>";
            document.getElementById("edukacja3").innerHTML = edu3;
            
            var umiejetnosci = [];
            umiejetnosci[0] = "Dobra obsługa komputera";
            umiejetnosci[1] = "Dobra znajomość pakietu Microsoft Office";
            umiejetnosci[2] = "Dobra znajomość programu AutoCad";
            umiejetnosci[3] = "Umiejętność szybkiego uczenia się";
            umiejetnosci[4] = "Umiejętność analitycznego myślenia";
            umiejetnosci[5] = "Język angielski - poziom zaawansowany";
            var lista = "<ul>";
            for(var i = 0; i < umiejetnosci.length; ++i) {
            lista += "<li>" + umiejetnosci[i] + "</li>";
            }
            lista += "</ul>"
            document.getElementById("lista_um").innerHTML = lista;
            
            var jobce = [];
            jobce[0] = "Język angielski - zaawansowany";
            jobce[1] = "Język rosyjski - podstawowy";            
            var jezyki = "<ul>";
            for(var i = 0; i < jobce.length; ++i) {
            jezyki += "<li>" + jobce[i] + "</li>";
            }
            jezyki += "</ul>"
            document.getElementById("jezyki").innerHTML = jezyki;
            
            function createTable(ar){
                var table = document.createElement('table');
                //table.id="myTable";
                table.setAttribute("id", "myTable");
                var header = table.createTHead();
                var row = header.insertRow();
                var cell = row.insertCell();
                cell.innerHTML = "<b>Data:</b>";
                var cell1 = row.insertCell();
                cell1.innerHTML = "<b>Okres zatrudnienia:</b>";
                var cell2 = row.insertCell();
                cell2.innerHTML = "<b>Nazwa firmy:</b>";
                var cell3 = row.insertCell();
                cell3.innerHTML = "<b>Stanowisko:</b>";
                document.getElementById("doswiadczenie").appendChild(table);

                var row, cell;
                for(var i = 0; i < ar.length; ++i){
                  row = table.insertRow();
                  cell = row.insertCell();
                  cell.textContent = ar[i].data;
                  cell = row.insertCell();
                  cell.textContent = ar[i].okres;
                  cell = row.insertCell();
                  cell.textContent = ar[i].nazwa_firmy;
                  cell = row.insertCell();
                  cell.textContent = ar[i].stanowisko;
                  
                }
              }

              var dane = [
                //{data: '<th>'+"Data"+'</th>', okres: '<th>Okres [mies]</th>', nazwa_firmy: '<th>Nazwa firmy</th>', stanowisko: '<th>Stanowisko</th>'},  
                {data: "2016.11-2018.01", okres: 15, nazwa_firmy: "Tare Sp. z o.o", stanowisko: "asystent projektanta sieci elektroenergetycznych"},
                {data: "2013.05-2016.01", okres: 30, nazwa_firmy: "Tjan Electric", stanowisko: "asystent projektanta sieci elektroenergetycznych"},
                {data: "2012.10-2013.04", okres: 7, nazwa_firmy: "Elteb", stanowisko: "elektromonter"},
                {data: "2012.07-2012.09", okres: 3, nazwa_firmy: "Oifp", stanowisko: "montażysta"}
              ];

              createTable(dane);           
                       
                   
              var rosnaco=true;
              document.getElementById("sortData").onclick = function(){                
                // 1 Sortujemy 
                if(rosnaco){
                dane.sort(function (a, b){                    
                if(a.data < b.data)
                    return -1;
                  else if(a.data > b.data)
                    return 1;
                  return 0;
                })
            }
                else{
                    dane.sort(function (a, b){                    
                if(a.data > b.data)
                    return -1;
                  else if(a.data < b.data)
                    return 1;
                  return 0;
                })
                }
                rosnaco = !rosnaco;
                 //2 wyrzucamy stara tab
                document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));
                // 3 wrzucamy nowa tab
                createTable(dane);
              }
              
              //var rosnaco=true;
              document.getElementById("sortOkres").onclick = function(){                
                // 1 Sortujemy 
                if(rosnaco){
                dane.sort(function (a, b){                    
                if(a.okres < b.okres)
                    return -1;
                  else if(a.okres > b.okres)
                    return 1;
                  return 0;
                })
            }
                else{
                    dane.sort(function (a, b){                    
                if(a.okres > b.okres)
                    return -1;
                  else if(a.okres < b.okres)
                    return 1;
                  return 0;
                })
                }
                rosnaco = !rosnaco;
                 //2 wyrzucamy stara tab
                document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));
                // 3 wrzucamy nowa tab
                createTable(dane);
              }
              
              //var rosnaco=true;
              document.getElementById("sortNazwa").onclick = function(){                
                // 1 Sortujemy 
                if(rosnaco){
                dane.sort(function (a, b){                    
                if(a.nazwa_firmy < b.nazwa_firmy)
                    return -1;
                  else if(a.nazwa_firmy > b.nazwa_firmy)
                    return 1;
                  return 0;
                })
            }
                else{
                    dane.sort(function (a, b){                    
                if(a.nazwa_firmy > b.nazwa_firmy)
                    return -1;
                  else if(a.nazwa_firmy < b.nazwa_firmy)
                    return 1;
                  return 0;
                })
                }
                rosnaco = !rosnaco;
                 //2 wyrzucamy stara tab
                document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));
                // 3 wrzucamy nowa tab
                createTable(dane);
              }
              
              //document.getElementById("sortNazwa").onclick = function(){                
               // dane.sort(function (a, b){
               //   if(a.nazwa_firmy < b.nazwa_firmy)
               //     return -1;
               //   if(a.nazwa_firmy > b.nazwa_firmy)
               //     return 1;
               //   return 0;
              //  })                
               // document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));                
               // createTable(dane);
              //}


             // document.getElementById("sortData").onclick = function(){                
              //  dane.sort(function (a, b){
              //    if(a.data < b.data)
              //      return -1;
              //    if(a.data > b.data)
              //      return 1;
              //    return 0;
              //  })                
              //  document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));                
              //  createTable(dane);
             //}
              
              
              document.getElementById("chowaj").style.display="none";
}
                
                /*
                function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;  
  dir = "asc";   
  while (switching) {    
    switching = false;
    rows = table.getElementsByTagName("TR");    
    for (i = 1; i < (rows.length - 1); i++) {     
      shouldSwitch = false;      
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];     
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {          
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {          
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;     
      switchcount ++;      
    } else {      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
          */   
             
                
                
                function chowaj(a) {            
                    
                    if(a==1)
                    document.getElementById("chowaj").style.display="none";
                    else
                    document.getElementById("chowaj").style.display="block";
                }
                
                     
                function sprawdz() {
                    document.getElementById("walidacja").innerHTML = '<b>Sprawdzenie poprawności danych: </b>';
                    var x, text1;
                    var y, text2;
                    var z, text3;
                    var emailID = document.getElementById("email2").value;
                    atpos = emailID.indexOf("@");
                    dotpos = emailID.lastIndexOf(".");
                    //var w = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    var text4
                    x = document.getElementById("imie").value;
                    y = document.getElementById("nazwisko").value;
                    z = document.getElementById("nr_tel").value;
                    w = document.getElementById("email2").value;
                    if (isNaN(x)) {
                        text1 = "Twoje imię: "+ document.getElementById("imie").value;                        
                    } 
                    else if (x.length==0){
                        text1 = "Nie podano imienia";
                    }
                    else {
                        text1 = "Nieprawidłowe imię";                        
                    }
                    document.getElementById("walidacja_1").innerHTML = text1; 
                    
                    
                    if (isNaN(y)) {                        
                        text2 = "Twoje nazwisko: "+ document.getElementById("nazwisko").value;                        
                    }
                    else if (y.length==0){
                        text2 = "Nie podano nazwiska";
                    }
                    else {                        
                        text2 = "Nieprawidłowe nazwisko" ;                        
                    }
                    document.getElementById("walidacja_2").innerHTML = text2;
                    
                    
                    if (isNaN(z) || z<0 || z.length>=1 && z.length<7) {                        
                        text3 = "Nieprawidłowy nr telefonu";                        
                    } 
                    else if (z.length==0){
                        text3 = "Nie podano nr telefonu";
                    }
                    else {                        
                        text3 = "Twój nr telefonu: "+ document.getElementById("nr_tel").value ;                        
                    }
                    document.getElementById("walidacja_3").innerHTML = text3;                  
                                       
                      
                    if (atpos < 1 || ( dotpos - atpos < 2 )) 
                    {
                       alert("Wpisz prawidłowy adres e-mail")
                       document.getElementById("email2").focus() ;
                       return false;
                    }
                    else{
                        //return( true );
                        text4 = "Twój adres e-mail: "+ document.getElementById("email2").value ;
                    }
                    
                    document.getElementById("walidacja_4").innerHTML = text4;
                }
                
                function resetuj() {
                    document.getElementById("walidacja").innerHTML ="";
                    document.getElementById("walidacja_1").innerHTML ="";
                    document.getElementById("walidacja_2").innerHTML ="";
                    document.getElementById("walidacja_3").innerHTML ="";
                    document.getElementById("walidacja_4").innerHTML ="";
                }
    
