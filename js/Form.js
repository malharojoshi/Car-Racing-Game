class Form {
  constructor() {}
  display() {
    var title = createElement("h2");
    title.html("Car Racing Game");
    title.position(500, 100);
    var input = createInput("Name");
    var button = createButton("play");
    var greeting = createElement("h3");
    input.position(500, 200);
    button.position(600, 250);
    button.mousePressed(function () {
      input.hide();
      button.hide();
      var name = input.value();
      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);
      greeting.html("hello " + name);
      greeting.position(500, 200);
    });
  }
}
