module.exports = (req, res) => {
    res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
      index: "hello"
    });
  };
  