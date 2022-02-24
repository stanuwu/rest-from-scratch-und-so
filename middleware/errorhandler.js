const notFound = (req, res) => {
  res.status(404).send(`404: Route not Found: ${req.url}`);
};

module.exports = { notFound };
