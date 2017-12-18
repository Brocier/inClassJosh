const express = require('express')
const router = express.Router()

router.get('/:operator', (req, res) => {
  const operator = req.params.operator
  const num1 = parseInt(req.query.num1)
  const num2 = parseInt(req.query.num2)
  console.log(operator)
  console.log(num1)
  console.log(num2)
  if (operator === 'add') {
  res.render('math',{
    math:`${num1 + num2}`})  
   } else if (operator === 'subtract')  {
      res.render('math',{
      math:`${num1 - num2}`})
  } else if (operator === 'multiply')  {
      res.render('math',{
      math:`${num1 * num2}`})
  } else if (operator === 'divide')  {
      res.render('math',{
      math:`${num1 / num2}`})
  } else {
     res.render('math',{
     math:`not a valid operator`})
  }
})



module.exports = router