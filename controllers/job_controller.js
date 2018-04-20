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

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { job } = req.body
        console.log('req.body', req.body)
        
        dbInstance.delete_job([ job ])
        .then( jobs => res.status(200).send( jobs ) )
        .catch( () => res.status(500).send() );
    },

    get_all: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        console.log('getting all')
        
        dbInstance.get_all_jobs()
        .then( jobs => res.send(jobs) )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    }


} 
