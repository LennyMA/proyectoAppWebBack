const Book = require("../models/Book");

exports.addBook = async (req, res) => {
  try {
    let book;
    book = new Book(req.body);
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar la cita médica");
  }
};

exports.loadBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el listado");
  }
};

exports.loadBook = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ msg: "No existe el turno" });
    }
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar el registro");
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { fecha, hora, motivo, medico, especialidad } = req.body;
    let book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ msg: "No existe el turno" });
    }
    book.fecha = fecha;
    book.hora = hora;
    book.motivo = motivo;
    book.medico = medico;
    book.especialidad = especialidad;

    book = await Book.findOneAndUpdate({ _id: req.params.id }, book, {
      new: true,
    });
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el registro");
  }
};

exports.deleteBook = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ msg: "No existe el turno" });
    }
    await Book.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Cita médica eliminada con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el registro");
  }
};
