const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

class HewanController {
  static getAllHewan(req, res) {
    try {
      res.status(200).json({
        massage: "OK",
        hewan: hewan,
      });
    } catch (error) {
      res.status(500).send({
        massage: error,
      });
    }
  }

  static getHewanById(req, res) {
    try {
      const hewanId = req.params.id;
      const find = hewan.find((u) => u.id === Number(hewanId));

      if (find) {
        res.status(200).json({
          massage: "OK",
          hewan: find,
        });
      }
    } catch (error) {
      res.status(500).send({
        massage: error,
      });
    }
  }

  static createNewHewan(req, res) {
    const body = req.body;
    const id = hewan[hewan.length - 1].id + 1;

    const addHewan = {
      id: id,
      nama: body.nama,
      spesies: body.spesies,
    };

    try {
      hewan.push(addHewan);
      res.status(200).send({
        massage: "OK",
        hewan: hewan,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  }

  static updateHewan(req, res) {
    try {
      const hewanId = req.params.id;
      const body = req.body;
      const find = hewan.findIndex((u) => u.id === Number(hewanId));

      if (find !== -1) {
        hewan[find].nama = body.nama;
        hewan[find].spesies = body.spesies || hewan[find].spesies;
        res.status(200).json({
          massage: "OK",
        });
      }
    } catch (error) {
      res.status(500).send({
        massage: error,
      });
    }
  }

  static deleteHewan(req, res) {
    try {
      const hewanId = req.params.id;
      const find = hewan.findIndex((u) => u.id === Number(hewanId));

      if (find !== -1) {
        hewan.splice(find, 1);
        res.status(200).json({
          massage: "OK",
        });
      }
    } catch (error) {
      res.status(500).send({
        massage: error,
      });
    }
  }
}

module.exports = HewanController;
