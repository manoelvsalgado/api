const knex = require("../database/knex");

class LinksController {
  async index(request, response) {
    const note_id = request.note.id;

    const links = await knex("links")
    .where({ note_id })

    return response.json(link);
  }
}

module.exports = LinksController;