const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//Get posts
router.get("/", async (req,res) => {
    const posts = await loadPostsCollection()
    res.send(await posts.find({}).toArray());
});

//Add posts


//Delete post


// vhzfvsww
// 861d02b9-988c-49a8-9eca-4aded2241836

async function loadPostsCollection() {
    const uri = "mongodb+srv://test:test@cluster0.l3kuw.mongodb.net/vue_express?retryWrites=true&w=majority";
    const client = await mongodb.MongoClient.connect
    (uri, {
        useNewUrlParser: true
    })
    return client.db("vue_express").collection("posts");
}


module.exports = router;