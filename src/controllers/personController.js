exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.get = (req, res, next) => {
   res.status(200).send('Com sucesso!');
}

exports.getId = (req, res, next) => {
    let id = req.params.id
    res.status(200).send(`Com sucesso o id ${id}!`);
 }

 exports.obtercomid = (req, res, next) => {
  //   res.status(200).send('ajustes');
    const postId = req.query.postId
    const userId = req.query.userId
    res.status(200).send(postId);
 }