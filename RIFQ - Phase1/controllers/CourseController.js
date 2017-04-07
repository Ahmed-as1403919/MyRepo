/**
 * Created by user on 07-Apr-17.
 */
let courseRepository = require('../models/CourseRepository');
class courseController{
    constructor (){};

    async getAllTasks(req,res){
        try {
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async getCourseTasks(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async deleteTask(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async addTask(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async updateTask(req,res){
        try{
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
}
module.exports = new courseController();