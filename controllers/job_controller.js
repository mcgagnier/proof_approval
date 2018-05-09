module.exports = {

    create: ( req, res ) => {
        // If exists, you are authenticated.
        console.log(req.session)
        console.log(req.body)
        if (!req.user) {
            res.status(401).send();
            return;
        }
        const dbInstance = req.app.get('db');
        const { job_name, substrate, qty, size, finishing, status, changes, user_id, image_url  } = req.body
        // console.log('req.body', req.body)
        
        dbInstance.create_job([ job_name, substrate, qty, size, finishing, status, changes, user_id, image_url ])
        .then( () => res.status(201).send() )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    },

    get_all: ( req, res, next ) => {
        // console.log('this is req.app', req.app)
        const dbInstance = req.app.get('db');
        // console.log('getting all')
        
        dbInstance.get_all_jobs()
        .then( jobs => res.send(jobs) )
        .catch( (err) =>{
            // console.log(err);
            res.status(500).send();
        })
    },

    get_customer_list: ( req, res, next ) => {
        // console.log('this is req.app', req.app)
        const dbInstance = req.app.get('db');
        const { params } = req;
        // console.log('getting customer list', params)
        
        dbInstance.get_customer_jobs([ params.user_id ])
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
        // console.log('getting one', params)
        
        dbInstance.get_job([ params.job ])
        .then( jobs => res.send(jobs) )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    },
    update_status: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log('approval')
        
        dbInstance.update_status ([ params.job ])
        .then( jobs => res.send(jobs) )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send();
        })
    }
} 
 