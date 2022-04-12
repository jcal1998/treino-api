const path = require("path");
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');
//trazer os metodos
exports.post = (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../../../frontend/congrats.html"));
};

exports.postAjax = (req, res, next) => {
  const fileName = uuidv4();
  const fileType= req.body.photo.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
  const fileExtension = fileType.substring(fileType.indexOf('/') + 1);
  console.log("Ajax", req.body);
  const base64Data = req.body.photo.replace(/^data:([A-Za-z-+/]+);base64,/, '');

  fs.writeFile(`./src/uploaded/${fileName}.${fileExtension}`, base64Data, 'base64', (err) => {
      if(err){
        res.status(500).send(err.message);
      }else{
        res.status(201).send(req.body);
      }
  });
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send("Requisicao recebida com sucesso");
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send("Requisicao recebida com sucesso");
};
