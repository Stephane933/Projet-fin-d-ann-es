var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000
var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()),

mongoose.connect('mongodb://rezzo:2cc5159e3f@ds155150.mlab.com:55150/blogfinal');
let ArticleSchema = mongoose.Schema({
  author : String,
  Article : String,
  Year : Number
});

let article = mongoose.model('Article', ArticleSchema);

var router = express.Router();
router.route('/')
.get(function(req, res){
  Article.find(function(err, Article){
    if(err){
      res.send(err);
    }
    res.send(Article);
  })
})
  .post(function(req, res){
    let Article = new Article();
    Article.author = req.body.author;
    Article.Article = req.body.Article;
    Article.Year = req.body.Year;
    Article.save(function(err){
      if (err) {
        res.send(err);
      }
      res.send({message : "Article crée"});
    });

  });
router.route('/:Article_id')
  .get(function(req, res){
    Article.findOne({_id: req.params.Article_id}, function(err, Article){
      if (err) {
        res.send(err);
      }
      res.send(Article);
    });
  })
  .put(function(req, res){
    Article.findOne({_id: req.params.Article_id}, function(err, Article){
      Article.author = req.body.author;
      Article.Article = req.body.Article;
      Article.Year = req.body.Year;
      Article.save(function(err){
        if (err) {
          res.send(err);
        }
        res.send({message: 'Article mis a jour'})

      });
  });
})
  .delete(function(req, res){
    Article.remove({_id:req.params.Article_id},function(err){
      if (err) {
        res.send(err)
      }
      res.send({message: 'Article Supprimer'})
    });
  });
app.use('/api', router);
app.listen(port, function(){
  console.log('listening on port' + port);
});
