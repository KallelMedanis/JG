const Thing = require('./models/Thing');
exports.postThingDomicile=(req, res, next) => {
    delete req.body._id;
    console.log((req.body))
    const thing=new Thing({
      ...req.body
    })
    thing.save().then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  }
  exports.postThingChezNous=(req, res, next) => {
    delete req.body._id;
      console.log(req.body)
    const thing=new Thing({
      ...req.body
    })
    thing.save().then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getBase=(req, res, next)=>{
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error })); 
}