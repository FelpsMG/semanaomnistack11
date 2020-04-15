
exports.up = function(knex) {

    return knex.schema.createTable('incidents',function(table){
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs'); //pega o valor do id como referencia

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('incidents');
  
};
