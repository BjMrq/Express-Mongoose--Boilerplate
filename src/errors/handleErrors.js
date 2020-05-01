const handleHTTPErrors = (error, res) => {

  console.log(error);

  if (error.name === 'ValidationError') {

    res.status(422).send(error.message);

  }

  if (error.name === 'NotFoundError') {

    res.status(400).send(error.message);

  }

  res.status(500).send();

};

module.exports = { handleHTTPErrors };