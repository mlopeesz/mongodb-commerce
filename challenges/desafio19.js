db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: { $in: ["cebola"] },
    },
  },
);

db.produtos.find(
  {},
  {
    nome: true,
    ingredientes: true,
    _id: false,
  },
);
