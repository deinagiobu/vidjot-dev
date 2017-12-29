if(process.env.NODE_ENV === 'production'){
      module.exports = {mongoURI: 'mongodb://agiobudein:vbgH@#87NGdf@ds133077.mlab.com:33077/vidjot-prod'}
}else{
      module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}