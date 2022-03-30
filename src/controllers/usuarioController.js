const { isNull } = require('url/util');
const { Usuarios } = require('../../app/models');
const passwordHasher = require('aspnet-identity-pw');
const jwt = require('jsonwebtoken');

exports.obter = async (req, res, next) => {
    try {

        var usuario = await Usuarios.findAll();
        //
        if (!isNull(usuario))
            res.status(200).send(usuario);
        else
            res.status(400).send('Não foi encontrado nenhum valor!');
    } catch (ex) {
        res.send(400).send("ocorreu um erro durante a transação!");
    }
}

exports.logar = async (req, res, next) => {
    try {
        let login = req.body;
        var _usuario = await Usuarios.findOne({ where: { email: login.email } });

        /*Exemplo utilizando promise*/
        /* Usuarios.findOne({where:{email: 'jeysson.paiva@gmail.com'}})
        .then(ev=>{
             if(!isNull(ev))
              res.status(200).send(ev);
              else res.status(400).send('Não foi encontrado nenhum valor!')
             })
         .catch(()=>{
             res.send(400).send("ocorreu um erro durante a transação!");
         });*/
        if (!isNull(_usuario)) {
            _usuario.anonimo = false;

            if (isNull(_usuario.email) || _usuario.email === "")
                _usuario.email = login.email;

            if (_usuario.tokenFCM != login.tokenFCM) {
                _usuario.tokenFCM = login.tokenFCM;
            }

            var dd = passwordHasher.hashPassword(login.senha);
            if(passwordHasher.validatePassword(passwordHasher.hashPassword(login.senha), _usuario.senha)){
                _usuario.token = jwt.sign({ id: _usuario.id }, process.env.SECRET, {
                    expiresIn: process.env.expiresIn// expires in 5min
                  });

                  res.status(200).send(_usuario);
            }else{
                res.status(400).send('Login ou senha inválido!');
            }

            
        }
        else
            res.status(400).send('Não foi encontrado nenhum valor!');
    } catch (ex) {
        res.status(400).send("ocorreu um erro durante a transação!\n"+ex);
    }
} 