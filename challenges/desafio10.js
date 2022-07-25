db.produtos.find(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "proteínas",
        percentual: {
          $gte: 30,
          $lte: 50,
        },
      },
    },
  },
  {
    nome: true,
    _id: false,
  },
);
