class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("COVID-19 SURVEY");
    title.position(110, 0);
    

    var input = createInput("Answer");
    var input2 = createInput("Email");
    var input3 = createInput("Name");
    var button = createButton('Done');

    var question = createElement('h4')
    question.html(" Q1-Do you think COVID-19 can transmit through<br> newspapers? Answer in yes or no. ");
    question.position(20,70);
    
    input.position(130, 160);
    input2.position(130,200);
    input3.position(130,240);
    button.position(250, 300);

    button.mousePressed(function(){
      input.hide();
      input2.hide();
      input3.hide();
      button.hide();
      question.hide();

      //var input3 = createInput("Answer");
      //input3.position(130,240);

      var voterName = input.value();
      var voterEmail = input.value();
      var voterAnswer = input.value();

      
      voterCount+=1;
      voter.update(voterName);
      voter.update(voterEmail);
      voter.update(voterAnswer);
      voter.updateCount(voterCount);
      var greeting = createElement('h3');
      greeting.html("Thanks a lot ");
      greeting.position(160, 160)

      var greeting = createElement('h3');
      greeting.html("By Harman ");
      greeting.position(160, 200);
    });

  }
}
