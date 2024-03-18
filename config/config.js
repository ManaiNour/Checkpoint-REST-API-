const mongoose = require("mongoose");


const conndb = async () => {
    try {
        await mongoose.connect("////////");
        console.log("Database successfully connected !");
    } catch (error) {
        console.log(error);

    }
};

module.exports = conndb