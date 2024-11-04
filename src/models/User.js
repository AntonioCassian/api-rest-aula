import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome:{
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          //notEmpty
          len: {
            args: [ 3, 20],
            msg: 'Campo nome deve ter entre 3 e 20 caracteres'
          }
        }
      },
      email:{
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido!',
          }
        }
      },
      password_hash:{
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password:{
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [ 6, 8 ],
            msg: 'A senha precisa ter entre 6 e 8 caracteres'
          }
        }
      },
    }, { sequelize });
    //antes de salvar
    this.addHook('beforeSave', async (user) => {
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 7)
      }
    })

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash)
  }
}
