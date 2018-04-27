module.exports = {

    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { admin, email, name, company, phone, password  } = req.body
        console.log('req.body', req.body)
        
        dbInstance.create_user([ admin, email, name, company, phone, password ])
        .then( () => res.status(201).send() )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log('deleting user')
        
        dbInstance.delete_user([ params.id ])
        .then( user => res.send(user) )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    }

} 
