var user = require('../user.js');

module.exports = {

  getName: function (req, res, next){
    res.status(200).json({name : user.name});
  },
  getLocation: function(req, res, next){
    res.status(200).json({location : user.location})
  },
  getOccupations: function(req, res, next){
    res.status(200).json({occupations: user.occupations})
  },
  getLatestOccupation: function(req, res, next){
    var latestOccupation = user.occupations[user.occupations.length - 1];
    console.log(latestOccupation)
    res.status(200).json({latestOccupation : latestOccupation})
  },
  getHobbies: function(req, res, next){
    console.log(req.params)
    if(req.params){
      var filteredHobbies = user.hobbies.filter(function(hobby){
        console.log(req.params.type)
        return hobby.type === req.params.type
      })
        res.status(200).json({hobbies : filteredHobbies})
      } else res.status(200).json({hobbies : user.hobbies})
    },
  getFamily: function(req, res, next){
    if(req.params){
      var filteredFamily = user.family.filter(function(member){
        return member.gender === req.params.gender
      })
      res.status(200).json({family: filteredFamily})
    }
    else res.status(200).json({family : user.family})
  }


}
