// create web server
const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// import comments
const comments = require('./comments');

// get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// get a comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// create a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// update a comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const commentIndex = comments.findIndex(comment => comment.id === id);
    if (commentIndex !== -1) {
        const comment = { ...comments[commentIndex], ...req.body };
        comments[commentIndex] = comment;
        res.json(comment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// delete a comment
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const commentIndex = comments.findIndex(comment => comment.id === id);
    if (commentIndex !== -1) {
        comments.splice(commentIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});