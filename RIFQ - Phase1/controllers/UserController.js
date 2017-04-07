/**
 * Created by user on 07-Apr-17.
 */
let userRepository = require('../models/UserRepository');
class userController{
    constructor (){
        //Phase 2
    };
    async getComment(req,res){
        try {
            //Phase 2
        }catch (err){
            req.status(500).send(err);
        }
    }
    async getAllComments(req,res){
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
module.exports = new userController();