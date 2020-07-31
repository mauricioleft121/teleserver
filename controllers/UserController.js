import connection from '../src/database/connection';
import { v4 as uuidv4 } from 'uuid';

module.exports = {

  async index(req,res) {
    const {user} = req.body;

    if(user == ''){
      const users = await connection('usuarios').select('*')
      res.json(users);
    }
    if(user != ''){
  const users = await connection('usuarios').where('usuario', user).select('*')

    res.json(users);
    }

    

  },


  async create(req, res) {
    const {email, usuario, senha} = req.body;
  const id = uuidv4();

  await connection('usuarios').insert({
    id,
    email,
    usuario,
    senha,
  })

  return res.json('Conta Criada com sucesso!');
  },

  async delete(req,res) {
    
    const {usuario} = req.body;
    
    
    await connection('usuarios').where('usuario', usuario).delete();

    return res.status(204).send();
  }
}