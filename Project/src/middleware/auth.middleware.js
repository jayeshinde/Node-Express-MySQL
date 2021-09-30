'use strict';

module.exports = async (req, res, next) => {
    const headers = JSON.parse(JSON.stringify(req.headers));
    try {
        //const headers = '';
        if (!headers.session_id) {
            // validate the session id here
            // const session_id = headers.session_id

            // Validate the claims 
            // Validate the Issuer
            // Validate the signature
            const response = {'status':'fail','reason':'Invalid session', 'message':'Unauthorized Access'}; 
            return res.status(401).send(response);
        }
        return next();
    } catch (e) {
        return e;
    }
};