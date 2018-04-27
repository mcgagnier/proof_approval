module.exports = {

    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { job_name, substrate, qty, size, finishing, status, changes, user_id  } = req.body
        // console.log('req.body', req.body)
        
        dbInstance.create_job([ job_name, substrate, qty, size, finishing, status, changes, user_id ])
        .then( () => res.status(201).send() )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    },

    get_all: ( req, res, next ) => {
        // console.log('this is req.app', req.app)
        const dbInstance = req.app.get('db');
        console.log('getting all')
        
        dbInstance.get_all_jobs()
        .then( jobs => res.send(jobs) )
        .catch( (err) =>{
            // console.log(err);
            res.status(500).send();
        })
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log('deleting one')
        
        dbInstance.delete_job([ params.job ])
        .then( jobs => res.send( jobs ) )
        .catch( () => res.status(500).send() );
    },

    get_one: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log('getting one')
        
        dbInstance.get_job([ params.job ])
        .then( jobs => res.send(jobs) )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    }
} 
