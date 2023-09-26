// module to Route

const express=require("express"),
         router=express.Router(),
         main_controller=require('../conrollerss/controllers/main.contoller')
         const events_controller=require('../conrollerss/controllers/events.contoller')


//export router         
module.exports=router;  

router.get('/',main_controller.home)
router.get('/contact',main_controller.contact)

//events router
router.get('/events',events_controller.events)

router.get('/events/:id',events_controller.show)

router.get('/create',events_controller.create)
router.post('/store',events_controller.store)

router.get('/edit/:_id',events_controller.edit)
router.post('/events/:_id', events_controller.update)

router.delete('/events/:id',events_controller.deleteEvent)









