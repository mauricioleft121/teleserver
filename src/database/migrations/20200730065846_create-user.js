exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table){
    table.string('id').primary();
    table.string('email').notNullable();
    table.string('usuario').notNullable();
    table.string('senha',16).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
