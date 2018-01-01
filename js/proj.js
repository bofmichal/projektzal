function zaladuj(){
    var zdjecie = "<img src=\"IMG_1047.jpg\" width=\"120px\"/>";
    document.getElementById("michal").innerHTML=zdjecie;
                
    var urodzenie = "19.06.1987";
    document.getElementById("data_ur").innerHTML = urodzenie;
    
    var adres = "ul. Wesoła 27 m 7, 15-307 Białystok";
    document.getElementById("adres").innerHTML = adres;

    var email = "<a href=\"mailto:bofmichal@gmail.com\">bofmichal@gmail.com</a>";
            document.getElementById("email").innerHTML = email;
            
            var tel = "+48 510 329 364";
            document.getElementById("tel").innerHTML = tel;
            
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
            
            
            function createTable(ar){
                var table = document.createElement('table');
                document.getElementById("doswiadczenie").appendChild(table);

                var row, cell;
                for(var i = 0; i < ar.length; ++i){
                  row = table.insertRow();
                  cell = row.insertCell();
                  cell.textContent = ar[i].data
                  cell = row.insertCell();
                  cell.textContent = ar[i].okres
                  cell = row.insertCell();
                  cell.textContent = ar[i].nazwa_firmy
                  cell = row.insertCell();
                  cell.textContent = ar[i].stanowisko
                  
                }
              }

              var dane = [
                {data: "Data", okres: "Okres [mies]", nazwa_firmy: "Nazwa firmy", stanowisko: "Stanowisko"},  
                {data: "11.2016-01.2018", okres: 15, nazwa_firmy: "TARE Sp. z o.o", stanowisko: "asystent projektanta sieci elektroenergetycznych"},
                {data: "05.2013-01.2016", okres: 30, nazwa_firmy: "Tjan Electric", stanowisko: "asystent projektanta sieci elektroenergetycznych"},
                {data: "10.2012-04.2013", okres: 7, nazwa_firmy: "Elteb", stanowisko: "elektromonter"},
                {data: "07.2012-09.2012", okres: 3, nazwa_firmy: "OiFP", stanowisko: "montażysta"}
              ];

              createTable(dane);
              
              document.getElementById("sortOkres").onclick = function(){
                //alert("Super Alert!!");
                // 1 Sortujemy
                dane.sort(function (a, b){
                  if(a.okres < b.okres)
                    return -1;
                  if(a.okres > b.okres)
                    return 1;
                  return 0;
                })
                // 2 wyrzucamy stara tab
                document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));
                // 3 wrzucamy nowa tab
                createTable(dane);
              }
              
              
              document.getElementById("sortNazwa").onclick = function(){
                
                dane.sort(function (a, b){
                  if(a.nazwa_firmy < b.nazwa_firmy)
                    return -1;
                  if(a.nazwa_firmy > b.nazwa_firmy)
                    return 1;
                  return 0;
                })
                
                document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));
                
                createTable(dane);
              }


              document.getElementById("sortData").onclick = function(){
                //alert("Super Alert!!");
                // 1 Sortujemy
                dane.sort(function (a, b){
                  if(a.data < b.data)
                    return -1;
                  if(a.data > b.data)
                    return 1;
                  return 0;
                })
                // 2 wyrzucamy stara tab
                document.getElementById("doswiadczenie").removeChild(document.querySelector("table"));
                // 3 wrzucamy nowa tab
                createTable(dane);
              }
              
              document.getElementById("chowaj").style.display="none";
}
                
                function chowaj(a)
                {
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
                    else {
                        text1 = "Nieprawidłowe imię";                        
                    }
                    document.getElementById("walidacja_1").innerHTML = text1; 
                    
                    
                    if (isNaN(y)) {                        
                        text2 = "Twoje nazwisko: "+ document.getElementById("nazwisko").value;                        
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
    
