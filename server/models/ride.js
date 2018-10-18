const mongoose=require ('mongoose');

const PassengerSchema=mongoose.Schema({
    name: { type: String, required: [true, "No ghosts allowed"], minlength: [3, 'Name must be 3 or more characters'] },
});

const RideSchema=mongoose.Schema({
    driver: {type: String, required: [true, "Yo, we need a wheelman"], minlength: [3, 'Name must be 3 or more characters']},
    capacity: {type: Number, required: [true, "Yo, how many henchman can we fit?"], min: [1,"We need at least one seat"], max: [8, "Now you are just lying about your car"]},
    destination: {type: String, required: [true, "Yo, where's the job?"], minlength: [2, "Destination must be 2 or more characters"]}, 
    riders: [PassengerSchema]

    //check for max length of arrayvalidation
});

mongoose.model('Passenger', PassengerSchema)
mongoose.model('Ride', RideSchema)