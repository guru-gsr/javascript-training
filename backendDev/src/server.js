import express from 'express';

const app=express();

const port = process.env.PORT || 5000 ;

app.get('/', (req, res) => {
  res.send('server is ready')
})

//get a list of 5 jokes

app.get('/jokes',(req,res)=>{
     const jokes=[
      {
        id: 1,
        title: 'A joke',
        content: 'This is A joke'
      },

      {
        id: 2,
        title: 'b joke',
        content: 'This is bj oke'
      },
      {
        id: 3,
        title: 'c joke',
        content: 'This is c joke'
      }
     ];
     res.send(jokes);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) 