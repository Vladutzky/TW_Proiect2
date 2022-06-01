const uuid = require("uuid");
const Repository = require('../repository/Repository');

module.exports.getAllTracks = () => {
    const trackList = Repository.readJSONFile();
    return trackList;
}

module.exports.addTrack = (newTrack) => {
    
        
        const trck = Repository.readJSONFile();
        newTrack.id=uuid.v4.apply();
        trck.push(newTrack);
        Repository.writeJSONFile(trck); 
    
    
    
    
    
    return newTrack;
}

module.exports.updateTrack = (trackID, trackURL, trackName, trackLenght, trackWeek) => {
    const trackList = Repository.readJSONFile();
  
    let foundTrack = null;
    for (let i=0; i<trackList.length; i++) 
        if (trackList[i].id===trackID) {
            trackList[i].url=trackURL;
            trackList[i].nume=trackName;
            trackList[i].lungime=trackLenght;
            trackList[i].saptamana=trackWeek;
            foundTrack=trackList[i];
            break;
        }
    
    
    
    Repository.writeJSONFile(trackList); 

    return foundTrack;
}

module.exports.deleteTrack = (trackID) => {
    
    let trackList = Repository.readJSONFile();
    
    let foundTrack = null;
    for (let i=0; i<trackList.length; i++)
        if (trackList[i].id===trackID) {
            foundTrack = trackList[i];
            trackList.splice(i, 1);
            break;
        }
    
    Repository.writeJSONFile(trackList); 

    return foundTrack;
}