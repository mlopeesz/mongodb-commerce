db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.find().count(),
});

db.resumoProdutos.find(
  {},
  {
    franquia: true,
    totalProdutos: true,
    _id: false,
  },
);
