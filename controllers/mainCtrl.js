var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js')


var skillzId = 4;

module.exports = {

  getName: function (req, res, next){
    res.status(200).json({name : user.name});
  },
  getLocation: function(req, res, next){
    res.status(200).json({location : user.location})
  },
  getOccupations: function(req, res, next){
    console.log(req.query);
    if(req.query){
      if(req.query.order === 'desc'){
        var sortedJobs = user.occupations.sort();
        res.status(200).json({occupations: sortedJobs})
      } else if(req.query.order === 'asc'){
        var sortedJobs = user.occupations.reverse();
        res.status(200).json({occupations: sortedJobs})
      }
    }
     res.status(200).json({occupations: user.occupations})
  },
  getLatestOccupation: function(req, res, next){
    var latestOccupation = user.occupations[user.occupations.length - 1];
    console.log(latestOccupation)
    res.status(200).json({latestOccupation : latestOccupation})
  },
  getHobbies: function(req, res, next){
    if(req.params.type){
      var filteredHobbies = user.hobbies.filter(function(hobby){
        return hobby.type === req.params.type
      })
        res.status(200).json({hobbies : filteredHobbies})
      } else res.status(200).json({hobbies : user.hobbies})
    },
  getFamily: function(req, res, next){
    console.log('this is req.params', req.params)
    console.log(user.family)
     if (req.params.gender){
      var filteredFamily = user.family.filter(function(member){
          return member.gender === req.params.gender
        })
        res.status(200).json({family: filteredFamily})
    } else res.status(200).json({family : user.family})
  },
  getRestaurants: function(req, res, next){
    console.log(req.params)
    if(req.params.name){
      var filteredRestaurant = user.restaurants.filter(function(place){
        return place.name === req.params.name;
      })
      res.status(200).json({restaurants : filteredRestaurant})
    } else
    res.status(200).json({restuarants : user.restaurants})
  },

  putName: function(req, res, next){
    user.name = req.body.name;
    console.log('this is user.name', user.name)
    res.send('user name is now ' + user.name);
  },
  putLocation: function(req, res, next){
    console.log(req.body.location);
    user.location = req.body.location;
    res.send('user location is now ' + user.location);
  },
  addHobbies: function(req, res, next){
    user.hobbies.push(
      {name : req.body.name,
      type: req.body.type}
    )
    console.log(user.hobbies)
    res.send(user.hobbies);
  },
  addOccupations: function(req, res, next){
    user.occupations.push(req.body.occupation)
    res.status(200).json(user.occupations)
  },
  addFamily: function(req, res, next){
    console.log('this is req.body', req.body)
    user.family.push(req.body)
    res.status(200).json(user.family)
  },
  addRestaurants: function(req, res, next){
    console.log('this is req.body for addRestaurants', req.body)
    user.restaurants.push(req.body);
    console.log(user.restaurants)
    res.send(user.restuarants)
  },
  getSkillz: function(req, res, next){
    console.log('this is req.query', req.query.experience)
    if(req.query.experience){
      var filteredSkillz = skillz.filter(function(skill){
        return skill.experience === req.query.experience
      })
      console.log('this is filteredskillz', filteredSkillz)
      res.status(200).json(filteredSkillz)
    }
    else res.status(200).json(skillz)
  },
  addSkillz: function(req, res, next){
    var rawSkillz = req.body;
    rawSkillz.id = skillzId;
    skillzId++;
    skillz.push(rawSkillz);
    res.status(200).json(skillz)
  },
  getSecrets: function(req, res, next){
    res.status(200).json(secrets)
  }


}
