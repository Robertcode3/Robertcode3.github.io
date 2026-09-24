$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

createPlatform(0, 500, 300, 20, "blue", 0, 1000, 0, 0, 1000, 0);
createPlatform(600, 325, 120, 20, "orange", 0, 1000, 0, 350, 425, 2);
createPlatform(200, 200, 150, 20, "blue", 0, 200, 3, 0, 1000, 0);
createPlatform(300, 650, 200, 20, "blue", 0, 1000, 0, 0, 1000, 0);
createPlatform(1000, 200, 400, 20, "blue", 0, 1000, 0, 0, 1000, 0);
createBadPlatform(1000, 420, 10, 225, "red", 0, 1000, 0, 0, 1000, 0);
createBadPlatform(1000, 200, 10, 50, "red", 0, 1000, 0, 0, 1000, 0);
createPlatform(1000, 600, 400, 10, "blue", 0, 10000, 0, 0, 1000, 0)
createPlatform(1000, 600, 10, 100, "red", 0, 1000, 0, 550, 640)
createPlatform(1100, 200, 10, 400, "blue", 0, 2000, 0, 0, 1000, 0)
createPlatform(280, 490, 2, 10, "blue", 0, 1000, 0, 0, 1000, 0)
  // TODO 3 - Create Collectables
createCollectable("diamond", 200, 100, 0, 0, 0, 1000, 0)
createCollectable("diamond", 1350, 100, 0, 0, 0, 1500, 0)
createCollectable("diamond", 1000, 335, 0, 0, 0, 1500, 0)
createCollectable("diamond", 1350, 700, 0, 0, 0, 1500, 0)
  // TODO 4 - Create Cannons
createCannon("top", 1300, 600, 10, 10, 0, 1000, 0)
createCannon("left", 200, 1300, 10, 10, 0, 1000, 0)
createCannon("right", 570, 1300, 10, 10, 0, 1000, 0)




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
