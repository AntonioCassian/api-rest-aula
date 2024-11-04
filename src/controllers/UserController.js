/* eslint-disable no-unused-vars */
import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;
      return res.json({id, nome, email});
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email']});
      return res.json(users)
    } catch (err) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({id, nome, email})
    } catch (err) {
      return res.json(null)
    }
  }

  async update(req, res) {
    try {
      //Se for editar outro usuario
      /**if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }
      const user = await User.findByPk(req.params.id) */

      const user  = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      const newDados = await user.update(req.body);
      const {id, nome, email} = newDados
      return res.json({id, nome, email})
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      /*if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }
      const user = await User.findByPk(req.params.id)*/

      const user  = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      await user.destroy();
      return res.json(null);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => err.message),
      });
    }
  }

}

export default new UserController();
