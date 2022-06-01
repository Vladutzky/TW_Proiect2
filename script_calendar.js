let currentID;
function rndminmax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //nr random intre min si max
}
function fetchTracks(){ 
  console.log("bau");
  let main = document.getElementById("poze");
  fetch(    
       'http://localhost:4600/Circuite',

   {    
       method: 'get'
   }

  ).then(function(response){
    response.json().then((data)=>{
        for(let i=0; i<data.length; i++) {
            let trackHolder = document.createElement('div');
            
            trackHolder.setAttribute('class', 'track-holder'+(rndminmax(1,10000)%5+1));
        
        
            let nume = document.createElement('div');
            nume.setAttribute('class', 'nume-circuit'); 
            // sa nu uiti sa pui numele de css exact asa cum scrie aici
            nume.innerText="Denumire: "+data[i].nume;

            let poza = document.createElement('img');
            poza.setAttribute('class', 'poza-circuit');
            poza.setAttribute('src', data[i].url);

            let lungime = document.createElement('div');
            lungime.setAttribute('class', 'lungime-circuit');
            lungime.innerText="Lungime: "+data[i].lungime;

            let saptamana = document.createElement('div');
            saptamana.setAttribute('class', 'saptamana-circuit');
            
            saptamana.innerText="Saptamana: "+data[i].saptamana;

            let edit = document.createElement('button');
            edit.setAttribute('class', 'created');
            edit.innerText = 'Modifica datele circuitului';
            edit.onclick = function() {
                document.getElementById('url').value = data[i].url;
                document.getElementById('nume-adaugat').value = data[i].nume;
                document.getElementById('lungime-adaugat').value = data[i].lungime;
                document.getElementById('saptamana-adaugat').value = data[i].saptamana;
                currentID = data[i].id;
            }
            
            trackHolder.appendChild(nume);
            trackHolder.appendChild(poza);
            trackHolder.appendChild(lungime);
            trackHolder.appendChild(saptamana);
            trackHolder.appendChild(edit);
           
            main.appendChild(trackHolder);
        }
    })
}) 
  
  
}


function add() {
    let url = document.getElementById('url').value;
    let numeAdaugat = document.getElementById('nume-adaugat').value;
    let lungimeAdaugat = document.getElementById('lungime-adaugat').value;
    let saptamanaAdaugat = document.getElementById('saptamana-adaugat').value;
    let newTrack = {
        url: url,
        nume: numeAdaugat,
        lungime: lungimeAdaugat,
        saptamana : saptamanaAdaugat
    }

    fetch('http://localhost:4600/Circuite', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTrack)
        }).then(function(response) {
            window.location.reload();
        })
}

function update() {
    if (currentID!==-1){
        let url = document.getElementById('url').value;
        let numeAdaugat = document.getElementById('nume-adaugat').value;
        let lungimeAdaugat = document.getElementById('lungime-adaugat').value;
        let saptamanaAdaugat = document.getElementById('saptamana-adaugat').value;
        let newTrack = {
            url: url,
            nume: numeAdaugat,
            lungime: lungimeAdaugat,
            saptamana: saptamanaAdaugat
        }
        // aici am mixed feelings despre asta cu +currentID
        //cred ca prin asta practic fetchuiesc elementul respectiv(deci nr curselor va fi 1 2 3 samd)
        fetch('http://localhost:4600/Circuite/' + currentID , 
            {
                method:'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newTrack)
            }).then(function(response) {
                window.location.reload();   
            })

            currentID = -1;

        }   
    

}

function deleteTrack() {
   
   if(currentID!==-1)
           
    fetch('http://localhost:4600/Circuite/' + currentID , 
    {
        method:'delete'
        
    }).then(function(response) {
        window.location.reload();   
    })

    currentID = -1;
}

fetchTracks();