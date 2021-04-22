const express = require('express')
const router = express.Router()
const AdelopdForm = require('../dbs/models/AdelopdForm')

//puts
router.put('/paso1',async (req, res) =>{
    try {
        const paso1 = await AdelopdForm.update({paso1: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso1})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
    

})
router.put('/paso2',async (req, res) =>{
    try {
        const paso2 = await AdelopdForm.update({paso2: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso2})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/paso3',async (req, res) =>{
    try {
        const paso3 = await AdelopdForm.update({paso3: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso3})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/paso4',async (req, res) =>{
    try {
        const paso4 = await AdelopdForm.update({paso4: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso4})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/paso5',async (req, res) =>{
    try {
        const paso5 = await AdelopdForm.update({paso5: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso5})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/paso6',async (req, res) =>{
    try {
        const paso6 = await AdelopdForm.update({paso6: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso6})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/paso7',async (req, res) =>{
    try {
        const paso7 = await AdelopdForm.update({paso7: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso7})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/paso8',async (req, res) =>{
    try {
        const paso8 = await AdelopdForm.update({paso8: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso8})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.put('/cambiarestado',async (req, res) =>{
    try {
        const estado = await AdelopdForm.update({estado: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:estado})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
//posts

router.post('/createForm',async (req, res) =>{
    
    try {
        console.log(req.body)
        const {token} = req.body
        
        const newForm = await AdelopdForm.create({token,estado:0})
        res.send({"success":true,"last_insert_id":newForm.id})
    } catch (error) {
        console.log(error)
    }



})

//gets

router.get('/paso1',async (req, res) =>{
    try {
        const paso1 = await AdelopdForm.update({paso1: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso1})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
    

})
router.get('/paso2',async (req, res) =>{
    try {
        const paso2 = await AdelopdForm.update({paso2: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso2})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/paso3',async (req, res) =>{
    try {
        const paso3 = await AdelopdForm.update({paso3: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso3})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/paso4',async (req, res) =>{
    try {
        const paso4 = await AdelopdForm.update({paso4: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso4})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/paso5',async (req, res) =>{
    try {
        const paso5 = await AdelopdForm.update({paso5: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso5})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/paso6',async (req, res) =>{
    try {
        const paso6 = await AdelopdForm.update({paso6: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso6})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/paso7',async (req, res) =>{
    try {
        const paso7 = await AdelopdForm.update({paso7: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso7})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/paso8',async (req, res) =>{
    try {
        const paso8 = await AdelopdForm.update({paso8: JSON.stringify(req.body.data)},{where: {token:req.body.token,id:req.body.id}})
        res.json({success:true,data:paso8})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})
router.get('/todos/:id/:token',async (req, res) =>{
    try {
        console.log(req.query)
        console.log(req.params)
        console.log(req.body)
        const todos = await AdelopdForm.findOne({where: {token:req.params.token,id:req.params.id}})
        return res.json({success:true,data:todos})
    } catch (error) {
        console.log(error)
        res.json({success:false,data:error})

    }
})

module.exports= router