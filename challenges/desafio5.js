db.produtos.find(
  { $or: [{ curtidas: { $eq: 36 } }, { vendidos: { $eq: 85 } }] },
  { nome: true, curtidas: true, vendidos: true, _id: false },
);
