const mongoose=require ('mongoose');
const Passenger=mongoose.model('Passenger')
const Ride=mongoose.model('Ride')

module.exports={
    allRides: (req, res)=>{
        //res.json('working here!'); this section will retrieve all rides res with err or rides
        Ride.find({}, (err, rides)=>{
            if(err){
                res.json(err);
            }else{
                res.json(rides);
            }
        })
    },

    singleRide:(req, res)=>{
        Ride.findOne({_id: req.params.id}, (err, ride)=>{ //findOne is an inbuilt method to find one id
            if(err){
                res.json(err);
            }else{
                res.json(ride);
            }
        })
    },

    addRide: (req, res)=>{
        Ride.create(req.body, (err, ride)=>{
            if(err){
                res.json(err);
            }else{
                res.json(ride);
            }
        })
    }, 

    editRide: (req, res)=>{
        Ride.update({_id: req.params.id}, req.body, (err, data)=>{//it's data bc when you use the PUT request in Postman it gets back a data not the whole ride details
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },

    removeRide: (req, res)=>{
        Ride.remove({_id: req.params.id}, (err, data)=>{
            if (err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },

    addPassenger: (req, res)=>{
        //create passenger, then push to array
        Passenger.create(req.body, (err, passenger)=>{
            if(err){
                console.log("Rider validations TRIGGERED");
                res.json(err);
            }else{
                Ride.update({_id: req.params.id}, {$push: {riders: passenger}}, (error, data)=>{
                    if(err){
                        console.log("Couldn't update ride");
                        res.json(err);
                    }else{
                        res.json(data);
                    } //riders come from schema and push bc it's an array
                })
        
            }
        })

    },

    removePassenger:(req, res)=>{
        Ride.update({_id: req.params.r_id}, {$pull: {riders: {_id: req.params.p_id}}}, (err, data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    } //does an update dump the array
}