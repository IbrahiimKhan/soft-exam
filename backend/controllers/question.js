const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Question = require('../models/question');
const { errorHandler } = require('../helpers/dbErrorHandler');
const question = require('../models/question');
// exports.create = (req, res) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true;
//     form.parse(req, ( fields) => {
       
//         // check for all fields
//         const { name} = fields;

//         if (!name) {
//             return res.status(400).json({
//                 error: 'All fields are required'
//             });
//         }

//         let question = new Question(fields);

      
//         question.save((err, result) => {
//             if (err) {
//                 console.log('question CREATE ERROR ', err);
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 });
//             }
//             res.json(result);
//         });
//     });
// };
exports.read = (req, res) => {
    Question.findById(req.params.questionId)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    success: false,
                    message: "question not found with id " + req.params.id
                });
            }
            res.send({
                success: true,
                message: 'question successfully retrieved',
                data: data
            });
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                success: false,
                message: "question not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            success: false,
            message: "Error retrieving question with id " + req.params.id
        });
    });
};



exports.create =  (req, res)=> {
    // validate request
    if(!req.body.name) {
        return res.status(400).send({
            success: false,
            message: "Please enter question name"
        });
    }
//create a question
    let question = new Question(
        {
            name: req.body.name,
        }
    );

    // save question in the database.
    question.save()
        .then(data => {
            res.send({
                success: true,
                message: 'question successfully created',
                data: data
            });
        }).catch(err => {
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while creating the question."
        });
    });
};
