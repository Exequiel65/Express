let admins = ["Ada", "Greta", "Vim", "Tim"]

function adminCheck (req, res, next) {
    if (admins.includes(req.query.user)){
        next()
    } else {
        res.send('No tienes permiso de administrador')
    }
}

module.exports = adminCheck