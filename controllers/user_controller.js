module.exports = {

    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { admin, email, name, company, phone  } = req.body
        console.log('req.body', req.body)
        
        dbInstance.create_user([ admin, email, name, company, phone ])
        .then( () => res.status(201).send() )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send() ;
        })
    }

} 
