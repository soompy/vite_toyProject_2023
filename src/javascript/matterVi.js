

// const {Bodies, Composite, Engine, Render, Runner, Svg} = Matter;

import Matter, {
    World,
    Engine,
    Bodies,
    Mouse,
    MouseConstraint,
    Runner,
    Render,
    Body,
    Events,
    Common,
    Composite,
    Composites,
    Constraint
  } from "matter-js";

  // Canvas setup
  var canvas = document.getElementById("matterEffectArea");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  function percentX(percent) {
    return Math.round((percent / 100) * canvas.width);
  }
  function percentY(percent) {
    return Math.round((percent / 100) * canvas.height);
  }
  // End Canvas

  // Setup Engine, World, Runner and Render
  var engine = Engine.create();
  var world = engine.world;
  var runner = Runner.create();
  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      wireframes: false,
      showBounds: true,
      // hasBounds: true,
      width: percentX(100),
      height: percentY(100),
      background: "transparent"
    }
  });
  Runner.run(runner, engine);
  Render.run(render);
  // End Setup

  // Add walls
  World.add(world, [
    //Walls
    Bodies.rectangle(0, 0, percentX(canvas.width), 50, { isStatic: true }),
    Bodies.rectangle(0, 0, 50, percentX(canvas.height), { isStatic: true }),
    Bodies.rectangle(0, percentY(100), percentX(canvas.width), 50, {
      isStatic: true
    }),
    Bodies.rectangle(percentX(100), percentY(100), 50, percentX(canvas.height), {
      isStatic: true
    })
  ]);
  // End Walls

  // Mouse event
  // onmousemove = function (e) {
  //   let windowHeight = window.innerHeight;
  //   let windowWidth = window.innerWidth;
  //   let xValue = e.x;
  //   let yValue = e.y;

  //   let mousePosX = -1 + (xValue / windowWidth) * 2;
  //   let mousePosY = -1 + (yValue / windowHeight) * 2;

  //   // Gravity
  //   engine.world.gravity.x = mousePosX;
  //   engine.world.gravity.y = mousePosY;
  // };

  // Bodies
  var mouseBody = Bodies.circle(0, 0, 100);
  // World.add(world, [mouseBody]);

  var assetSize = percentY(10);

  var design = [
    "",
    "./src/assets/images/Img_Choonsik_face1.png",
    "./src/assets/images/Img_Choonsik_face2.png",
    "./src/assets/images/Img_Choonsik_face3.png",
    "./src/assets/images/Img_Choonsik_face4.png",
    "./src/assets/images/Img_Choonsik_face5.png"      
  ];

  var dIndex = 0;

  var designWord = Composites.stack(
    percentX(25) - assetSize / 2,
    percentY(25),
    1,
    6,
    5,
    5,
    function (x, y) {
      dIndex++;
      return Bodies.rectangle(percentX(40), percentY(40), assetSize, assetSize, {
        // collisionFilter: { group: group },
        frictionAir: 0,
        friction: 1,
        restitution: 1,
        render: {
          sprite: {
            texture: design[dIndex],
            xScale: (assetSize / 100) * 0.46,
            yScale: (assetSize / 100) * 0.46
          }
        }
      });
    }
  );
  Composites.chain(designWord, 0.6, 0, -0.6, 0, {
    // stiffness: 1,
    length: design.length,
    render: { type: "line", visible: false }
  });
  World.add(world, [designWord]);
  Composite.add(
    designWord,
    Constraint.create({
      bodyB: designWord.bodies[2],
      pointB: { x: 0, y: 0 },
      pointA: {
        x: designWord.bodies[0].position.x,
        y: designWord.bodies[0].position.y
      },
      stiffness: 0.005,
      render: {
        visible: true
      }
    })
  );

  var bodyOptions = {
    frictionAir: 0,
    friction: 1,
    restitution: 1,
    render: {
      sprite: {
        texture: "../assets/sticker-a.png",
        xScale: (assetSize / 100) * 0.21,
        yScale: (assetSize / 100) * 0.21
      }
    }
  };

  var stickerBSize = percentY(17);

  World.add(
    world,
    Bodies.circle(percentX(50), percentY(50), assetSize, bodyOptions)
  );

  World.add(
    world,
    Bodies.circle(percentX(50), percentY(50), assetSize, {
      frictionAir: 0,
      friction: 1,
      restitution: 1,
      render: {
        sprite: {
          texture: "../assets/sticker-st.png",
          xScale: (assetSize / 100) * 0.21,
          yScale: (assetSize / 100) * 0.21
        }
      }
    })
  );

  World.add(
    world,
    Bodies.circle(percentX(50), percentY(50), assetSize, {
      frictionAir: 0,
      friction: 1,
      restitution: 1,
      render: {
        sprite: {
          texture: "../assets/sticker-peace.png",
          xScale: (assetSize / 100) * 0.21,
          yScale: (assetSize / 100) * 0.21
        }
      }
    })
  );

  World.add(
    world,
    Bodies.rectangle(300, 200, stickerBSize, stickerBSize * 1.5, {
      chamfer: { radius: [75, 75, 75, 75] },
      frictionAir: 0,
      friction: 1,
      restitution: 0.8,
      render: {
        sprite: {
          texture: "../assets/sticker-g.png",
          xScale: (assetSize / 100) * 0.21,
          yScale: (assetSize / 100) * 0.21
        }
      }
    })
  );

  // Timescale
  var explosion = function (engine) {
    var bodies = Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
      var body = bodies[i];

      if (!body.isStatic && body.position.y >= 500) {
        var forceMagnitude = 0.07 * body.mass;

        Body.applyForce(body, body.position, {
          x:
            (forceMagnitude + Common.random() * forceMagnitude) *
            Common.choose([1, -1]),
          y: -forceMagnitude + Common.random() * -forceMagnitude
        });
      }
    }
  };

  var timeScaleTarget = 1,
    counter = 0;

  Events.on(engine, "afterUpdate", function (event) {
    // tween the timescale for bullet time slow-mo
    engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;

    counter += 1;

    // every 1.5 sec
    if (counter >= 60 * 1.5) {
      // flip the timescale
      if (timeScaleTarget < 1) {
        timeScaleTarget = 1;
      } else {
        timeScaleTarget = 0.01;
      }

      // create some random forces
      explosion(engine);

      // reset counter
      counter = 0;
    }
  });
  // Timescale end

  // Setup mouse constraints
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: {
          visible: false
        }
      }
    });
  Matter.World.add(world, mouseConstraint);

  // Constraints to mouse
  var con = Matter.Constraint.create({
    pointA: mouse.position,
    bodyB: (mouseConstraint.body = mouseBody),
    render: {
      visible: false
    }
  });
  Matter.World.add(world, con);
  render.mouse = mouse;