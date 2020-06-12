
exports.seed = function(knex) {

  return knex('recipes').insert([
        {
          name: "cheese tacos"
        }
  ]);
};