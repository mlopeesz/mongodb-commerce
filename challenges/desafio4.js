db.produtos
  .find(
    { $and: [{ vendidos: { $gt: 50 } }, { vendidos: { $lt: 100 } }] },
    { nome: true, vendidos: true, _id: false },
  )
  .sort({ vendidos: 1 });
