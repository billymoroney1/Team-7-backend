const db = require('../models/index')
//Access to our db thorugh User and Role variable
const User = db.user
const Post = db.post

//make a post
exports.makePost = (req, res) => {

    const user = User.findById(req.body.creator, (err, docs) => {
        if (err) {
            console.log(err)
        } else {
            console.log(docs)
        }
    })

    // const post = new Post({
    //     creator: user, 
    //     body: req.body.body,
    //     favorites: 0,
    //     favoritedBy: [],
    //     reposts: 0,
    //     repostedBy: [],
    //     replies: [],
    //     hashtags: req.body.hashtags,
    //     isRepost: false,
    //     isReply: false,
    //     parentPost: null
    // })

    // post.save((err) => {
    //     if (err) {
    //         res.status(500).send({message: err})
    //     } 
    //     res.send("Post created successfully.")
    // })

    // Find the user and add user as creator to the post
    //     User.find({
    //         username: { $in: req.body.creator }
    //     }, (err, users) => {
    //         if (err) {
    //             res.status(500).send({ message: err })
    //             return
    //         }
    //         //set the reference to the user as the creator of post
    //         post.creator = users.map(user => user._id)
    //         //save post to database
    //         post.save((err) => {
    //             if (err) {
    //                 res.status(500).send({message: err})
    //             } 
    //             res.send("Post created successfully.")
    //         })
    //         // console.log(req.body.user)
    //         // console.log(req.body.hashtags)
    //         console.log(post)
    //         //when testing is done we need to 
    //         // res.send(post)
    //     })
    
}

//edit post - to test add the _id of the post and update the post body
exports.editPost= (req, res) => {
    const id = req.body._id
    Post.updateOne({_id: id}, {
        body: req.body.body
    }).then((data)=> {
        if (!data)
        return res.status(400).send({message: "Unable to update post"})
        else res.send(data)
    })
}


