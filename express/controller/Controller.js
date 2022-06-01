let express = require('express');
const { readJSONFile, writeJSONFile } = require('../repository/Repository');
let router = express.Router();

const Service = require('../service/Service');

// Create
router.post("/Circuite", (req, res) => {
    let newTrack = Service.addTrack(req.body);
    res.status(200).send(newTrack);
  });


// Read All
router.get("/Circuite", (req, res) => {   
  const trackList = Service.getAllTracks();
  if (trackList!==undefined && trackList.length!==0) {
      res.status(200).send(trackList);
  } else {
      res.status(204).send('No tracks found!');
  }
});



// Update
router.put("/Circuite/:id", (req, res) => {
   let foundTrack = Service.updateTrack(req.params.id, req.body.url, req.body.nume, req.body.lungime, req.body.saptamana);
   if(foundTrack!=null) res.status(200).send(foundTrack);
   else res.status(204).send("Nu s-a gasit acest circuit");
});


//  // Update
//  router.put("/dogs/:id", (req, res) => { //: in fata a ceva => il interpreteaza ca o variabila
//     const dogsList = readJSONFile();
    
//     const dogId = req.params.id; //am luat id-ul
//     let foundDog = null;
//     for(let i=0; i<dogsList.length; i++)
//       if(dogsList[i].id === dogId)
//           {
//               dogsList[i].name = req.body.name;
//               dogsList[i].img = req.body.img;
//               foundDog = dogsList[i];
//               break;
//           }
//     writeJSONFile(dogsList);
//     if(foundDog)
//       res.status(200).send(dogsList[i]);
//     else res.status(204).send("No dog found!");
  
//   });

// let foundTrack = Service.updateTrack(req.params.id, req.body.url, req.body.nume, req.body.lungime);
// // body.url ala se refera la type= din html
// if (foundTrack!==null) res.status(200).send(foundTrack);
// else res.status(204).send('No track found!');



// Delete
router.delete("/Circuite/:id", (req, res) => {
     Service.deleteTrack(req.params.id);
     res.status(200).send('Track deleted!');






  //  const trackList = readJSONFile();
   
  //  const trackId = req.params.id;
   
  //  for(let i=0; i<trackList.length; i++)
  //      if(trackList[i].id == trackId)
  //      {  
  //         trackList.splice(i,1);
  //         break;
  //      }
  //      writeJSONFile(trackList);
  //      res.status(200).send("Track deleted!");


});
  

module.exports = router;