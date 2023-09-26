const Event=require('../models/event')

function events(req,res){
    // const  events=[{id:1,title:"Html" ,price: 1000 ,description:"hudhhdsujik"},
    // {id:2, title:"Html" ,price: 1000 ,description:"hudhhdsujik"},
    // {id:3,  title:"Html" ,price: 1000 ,description:"hudhhdsujik"}]
    //render page with data

    Event.find()
    .then(events=> res.render('events.ejs',{events}))
    .catch(err=>console.log(err.message))

}



function show(req,res){
    const id=req.params.id;
    Event.findById(id)
  .then(event => res.render('single.ejs',{event}))
  .catch(err=>console.log(err.message))


}
function create(req,res){
   res.render('create.ejs')
}

function store(req,res){
    const event=new Event({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    });
    event.save()
    .then(()=>res.redirect('/events'))
    }

function edit(req,res){
  
    const id=req.params.id;
    Event.findById(id)
    .then(()=>res.redirect('/edit'))
    .catch((err)=>console.log(err.message))

}


function update(req , res) { 
    const id = req.params.id;
    Event.findByIdAndUpdate(id , {
        title : req.body.title, 
        price : req.body.price,
        description : req.body.description
    })
    .then(()=> res.redirect('/events'))
    .catch(err => console.log(err.message));
}


function deleteEvent(req,res){

    const id=req.params.id;
    Event.findByIdAndDelete(id)
    .then(()=>res.redirect('/events'))
    .catch((err)=>console.log(err.message));

}



module.exports={
    events,
    show,
    create,
    store,
    edit,
    update,
    deleteEvent
}