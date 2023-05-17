const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

// GET /api/comments from jsonplaceholder
app.get('/api/comments', async(req,res) => {
    try{
        //set limit by default to 10
        const limit = req.query.limit || 10;

        // request to fetch comments
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
        const comments = response.data;
        res.json(comments);
    }catch(error){
        res.status(500).json({ error: 'Internal server error' })
    }
});

// GET /api/posts from jsonplaceholder
app.get('/api/posts', async(req,res) => {
    try{
        //set limit by default to 10
        const limit = req.query.limit || 10;

        // request to fetch comments
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const posts = response.data;
        res.json(posts);
    }catch(error){
        res.status(500).json({ error: 'Internal server error' })
    }
});
app.listen(port, () => console.log(`App is listening on port ${port}!`))