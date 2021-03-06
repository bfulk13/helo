module.exports = {
    getAllPosts: (req, res) => {
        const db = req.app.get('db');
        
        db.get_all_posts().then(resp => {
            res.status(200).send(resp)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    getPost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.get_post([id]).then(resp => {
            res.status(200).send(resp[0])
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    addPost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.session.user;
        const { post } = req.body;

        db.add_post([id, post]).then(resp => {
            res.status(200).send(resp);
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    deletePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_post([id]).then(resp => {
            res.status(200).send(resp)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    updatePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { post } = req.body;

        db.update_post([id, post]).then(resp => {
            res.status(200).send(resp);
        }).catch(err => {
            res.status(500).send(err);
        })
    }
}