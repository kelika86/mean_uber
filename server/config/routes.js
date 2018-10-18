const rideController=require ('./../controllers/rides'); //can call rideController or any name
//from current location (routes.js)-->server-->into controllers and then the rides file; you write const rideController so you do not have to rewrite the entire address to get to rides file
const path=require('path'); //at angular
//module.exports means to deliver the values inside of it and require means to run

module.exports=(app)=>{
    app.get('/api/rides', rideController.allRides); //no index on Express
    app.post('/api/rides', rideController.addRide);
    app.put('/api/rides/:id', rideController.editRide);
    app.get('/api/rides/:id', rideController.singleRide);
    app.delete('/api/rides/:id', rideController.removeRide);
    
    app.post('/api/rides/:id/passenger', rideController.addPassenger);
    app.delete('/api/rides/:r_id/passenger/:p_id', rideController.removePassenger);

    app.all('*', (req, res)=> res.sendFile(path.resolve('./public/dist/public/index.html')))
}