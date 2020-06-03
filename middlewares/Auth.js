import token from '../services/token';

export default {
    verifyUser: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No toke provided'
            })
        }

        const response = await token.decode(req.headers.token);

        if (response.rol == 'Admin' || response.rol == 'Employee' || response.rol == 'User') {
            next();
        } else {
            return res.status(403).send({
                message: 'Unathorized user'
            })
        }
    },
    verifyAdmin: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No toke provided'
            })
        }

        const response = await token.decode(req.headers.token);

        if (response.rol == 'Admin') {
            next();
        } else {
            return res.status(403).send({
                message: 'Unathorized user'
            })
        }
    },
    verifyEmployee: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No toke provided'
            })
        }

        const response = await token.decode(req.headers.token);

        if (response.rol == 'Employee') {
            next();
        } else {
            return res.status(403).send({
                message: 'Unathorized user'
            })
        }
    },
}