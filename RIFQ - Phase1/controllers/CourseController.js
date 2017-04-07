/**
 * Created by user on 07-Apr-17.
 */
let courseRepository = require('../models/CourseRepository');
class courseController{
    constructor (){};

    async getCourse(req,res){
        try {
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async getCourses(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async addComment(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async updateComment(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async deleteComment(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
}
module.exports = new courseController();