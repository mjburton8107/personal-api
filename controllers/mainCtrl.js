var user = require('../user.js');


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
  },
  getRestaurants: function(req, res, next){
    console.log(req.params)
    if(req.params){
      var filteredRestaurant = user.restaurants.filter(function(place){
        return place.name === req.params.name;
      })
      res.status(200).json({restaurants : filteredRestaurant})
    } else
    res.status(200).json({restuarants : user.restaurants})
  },

  putName: function(req, res, next){
    console.log(req.body.name);
    user.name = req.body.name;
    res.send('user name is now ' + user.name);
  },
  putLocation: function(req, res, next){
    console.log(req.body.location);
    user.location = req.body.location;
    res.send('user location is now ' + user.location);
  },
  addHobbies: function(req, res, next){
    console.log(req.body.name)
    user.hobbies.push(
      {name : req.body.name,
      type: req.body.type}
    )
    console.log(user.hobbies)
    res.send(user.hobbies);
  }


}
