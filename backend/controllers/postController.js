const post = require('../models/postModel');


const getPost = async (req, res) => {
    try{
        Post.find({}).then(data => {
            res.json(data)
        }).catch(error => {
            res.status(404).json({msg : error.msg})
        });
    }catch(error){
        res.status(404).json({msg : error.msg})
    }
}


const uploadPost = async (req, res) => {
    const {description, myFile} = req.body;

    try{
        const newImage = await Post.create(description, myFile)
        newImage.save()
        res.status(200).json({msg : "New post uploaded"})
    }catch(error){
        res.status(404).json({msg : error.msg})
    }
}

module.exports = {
    getPost,
    uploadPost
}