const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 500
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
