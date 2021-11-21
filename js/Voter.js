class Voter {
  constructor(){}

  getCount(){
    var voterCountRef = database.ref('voterCount');
    voterCountRef.on("value",function(data){
      voterCount = data.val();
    })
  }

  updateCount(voterCount){
    database.ref('/').update({
      voterCount: voterCount
    });
  }

  update(voterName){
    var voterIndex = "voter" + voterCount;
    database.ref(voterIndex).set({
      voterName: voterName
    });
  }

    update(voterEmail){
      var voterIndex = "voter" + voterCount;
    database.ref(voterIndex).set({
      voterEmail: voterEmail
      });
    }

    update(voterAnswer){
      var voterIndex = "voter" + voterCount;
    database.ref(voterIndex).set({
      voterAnswer: voterAnswer
      });
    }
  }

