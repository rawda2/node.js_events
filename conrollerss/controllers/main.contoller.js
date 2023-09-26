function home(req,res){
    res.render('home.ejs')


}
function contact(req,res) {
    
   res.render('contact.ejs')
    
}


module.exports={
    home,
    contact

}
