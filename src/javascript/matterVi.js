const matterVi = () => {
    const targetElem = document.querySelector("#recruit-main-banner");
    const parentElem = document.querySelector("div.visual.vi-service");
    const headerElem = document.querySelector("header");

    // module aliases
    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite;

    // create an engine
    let engine = Engine.create();

    // create a renderer
    const mobileWidthForRecruit = 760;
    const isMobileForRecruit = window.innerWidth < mobileWidthForRecruit;
    const w = targetElem.offsetWidth;
    const h = isMobileForRecruit ? parentElem.offsetHeight - 20 : parentElem.offsetHeight + headerElem.offsetHeight

    let render = Render.create({
        element: targetElem,
        engine: engine,
        options: {
            width: w,
            height: h,
            showAngleIndicator: false,
            wireframes: false,
            // wireframes: true,
            background: 'transparent',
        },
    });

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let defaultRectImageInfo = {
        type: "rectangle",
        path: "src/assets/images/sweetPotato0.png",
        w: 1657,
        h: 604,
        xScale: 0.3,
        yScale: 0.3,
        charmferRadius: 10,
    };

    let defaultCircleImageInfo = {
        type: "circle",
        path: "src/assets/images/sweetPotato0.png",
        w: 578,
        h: 578,
        xScale: 0.3,
        yScale: 0.3,
    };

    let defaultMobileRectImageInfo = {
        ...defaultRectImageInfo,
        xScale: 1,
        yScale: 1,
    };

    let defaultMobileCircleImageInfo = {
        ...defaultCircleImageInfo,
        xScale: 1,
        yScale: 1,
    };

    const minDesktopWidth = 1200;
    const minMobileWidth = 500;
    let decreaseRate = 1;
    if (window.innerWidth < minDesktopWidth) {
        decreaseRate = window.innerWidth / minDesktopWidth;
    }
    defaultRectImageInfo["xScale"] = defaultRectImageInfo["xScale"] * decreaseRate;
    defaultRectImageInfo["yScale"] = defaultRectImageInfo["yScale"] * decreaseRate;
    defaultCircleImageInfo["xScale"] = defaultCircleImageInfo["xScale"] * decreaseRate;
    defaultCircleImageInfo["yScale"] = defaultCircleImageInfo["yScale"] * decreaseRate;

    // if Mobile, not use resizing the scale of objects
    /*
    if (isMobileForRecruit) {
        if (window.innerWidth < minMobileWidth) {
            decreaseRate = minMobileWidth / mobileWidthForRecruit;
        } else if (window.innerWidth < mobileWidthForRecruit) {
            decreaseRate = window.innerWidth / mobileWidthForRecruit;
        }
        defaultMobileRectImageInfo["xScale"] = defaultMobileRectImageInfo["xScale"] * decreaseRate;
        defaultMobileRectImageInfo["yScale"] = defaultMobileRectImageInfo["yScale"] * decreaseRate;
        defaultMobileCircleImageInfo["xScale"] = defaultMobileCircleImageInfo["xScale"] * decreaseRate;
        defaultMobileCircleImageInfo["yScale"] = defaultMobileCircleImageInfo["yScale"] * decreaseRate;
    } 
    */

    let imageInfos = [
        {
            ...defaultRectImageInfo,
            path: "src/assets/images/sweetPotato0.png",
            w: 1684,
            h: 604,
        },
        {
            ...defaultRectImageInfo,
            path: "src/assets/images/sweetPotato0.png",
            w: 1833,
            h: 604,
        },
        {
            ...defaultRectImageInfo,
            path: "src/assets/images/sweetPotato0.png",
            w: 1533,
            h: 604,
        },
        {
            ...defaultRectImageInfo,
            path: "src/assets/images/sweetPotato0.png",
            w: 1722,
            h: 604,
        },
        {
            ...defaultRectImageInfo,
            path: "src/assets/images/sweetPotato0.png",
            w: 1657,
            h: 604,
        },
        {
            ...defaultCircleImageInfo,
            path: "src/assets/images/sweetPotato0.png",
            w: 1824,
            h: 1823,
        },
        // {
        //     ...defaultCircleImageInfo,
        //     path: "/images/recruit/obj_duck.png",
        //     w: 578,
        //     h: 578,
        // },
        // {
        //     ...defaultCircleImageInfo,
        //     path: "/images/recruit/obj_gift.png",
        //     w: 716,
        //     h: 705,
        // },
        // {
        //     ...defaultCircleImageInfo,
        //     path: "/images/recruit/obj_cake.png",
        //     w: 615,
        //     h: 605,
        // },
    ];
    if (isMobileForRecruit) {
        imageInfos = [
            {
                ...defaultMobileRectImageInfo,
                path: "src/assets/images/sweetPotato0.png",
                w: 284,
                h: 102,
            },
            {
                ...defaultMobileRectImageInfo,
                path: "src/assets/images/sweetPotato0.png",
                w: 310,
                h: 102,
            },
            {
                ...defaultMobileRectImageInfo,
                path: "src/assets/images/sweetPotato0.png",
                w: 259,
                h: 102,
            },
            {
                ...defaultMobileRectImageInfo,
                path: "src/assets/images/sweetPotato0.png",
                w: 291,
                h: 102,
            },
            {
                ...defaultMobileRectImageInfo,
                path: "src/assets/images/sweetPotato0.png",
                w: 280,
                h: 102,
            },
            {
                ...defaultMobileCircleImageInfo,
                path: "src/assets/images/sweetPotato0.png",
                w: 200,
                h: 200,
            },
            // {
            //     ...defaultMobileCircleImageInfo,
            //     path: "/images/recruit/m_obj_duck.png",
            //     w: 100,
            //     h: 100,
            // },
            // {
            //     ...defaultMobileCircleImageInfo,
            //     path: "/images/recruit/m_obj_gift.png",
            //     w: 102,
            //     h: 100,
            // },
            // {
            //     ...defaultMobileCircleImageInfo,
            //     path: "/images/recruit/m_obj_cake.png",
            //     w: 102,
            //     h: 100,
            // },
        ];
    }

    // Set the Left, Right, Bottom borders
    Composite.add(engine.world, [
        // Bot
        Bodies.rectangle(Math.ceil(w / 2), h + 20, w * 2, 20, {
            isStatic: true,
        }),
        // Left
        Bodies.rectangle(-20, Math.ceil(h / 2), 20, h * 2, {
            isStatic: true,
        }),
        // Right
        Bodies.rectangle(w + 20, Math.ceil(h / 2), 20, h * 2, {
            isStatic: true,
        }),
    ]);

    let objs = [];
    let rectOverlapRate = 0.02;
    let circleOverlapRate = 0.1;
    let frictionAir = 0.01;
    let yDiff = 500;
    if (isMobileForRecruit) {
        rectOverlapRate = 0.1;
        circleOverlapRate = 0.4;
        frictionAir = 0.021;
        yDiff = 240;
    }
    const isBigDesktopForRecruit = window.innerWidth > 1920;
    if (isBigDesktopForRecruit) {
        imageInfos = [...imageInfos, ...imageInfos];
    }
    const numObj = imageInfos.length;

    // Sort imageInfos randomly
    imageInfos.sort(() => Math.random() - 0.5);

    for (let i = 0; i < numObj; i++) {
        const centerX = Math.ceil(w / 4 * 3);
        const startPointX = getRandomInt(centerX, centerX + 50);
        const adjustedCenterY = Math.ceil(h - i * yDiff);
        const startPointY = getRandomInt(
            adjustedCenterY,
            adjustedCenterY + 50
        );
        const imageInfo = imageInfos[i];

        let bodyObj;
        if (imageInfo["type"] === "circle") {
            // Prototype of circle : Bodies.circle(x, y, radius, options={...somteOptions});
            const fixedScale = (imageInfo["xScale"] - circleOverlapRate) > 0 ? (imageInfo["xScale"] - circleOverlapRate) : 0.04;
            const radius = (imageInfo["w"] < imageInfo["h"] ? imageInfo["w"] : imageInfo["h"]) / 2;
            bodyObj = Bodies.circle(
                startPointX,
                startPointY,
                radius * fixedScale,
                {
                    friction: 1,
                    frictionAir: frictionAir,
                    render: {
                        sprite: {
                            texture: imageInfo["path"],
                            xScale: imageInfo["xScale"],
                            yScale: imageInfo["yScale"],
                        },
                    },
                }
            );
        } else {
            // Prototype of rectangle : Bodies.rectangle(x, y, w, h, options={...somteOptions});
            const fixedXScale = (imageInfo["xScale"] - rectOverlapRate) > 0 ? (imageInfo["xScale"] - rectOverlapRate) : 0.04;
            const fixedYScale = (imageInfo["yScale"] - rectOverlapRate) > 0 ? (imageInfo["yScale"] - rectOverlapRate) : 0.04;
            bodyObj = Bodies.rectangle(
                startPointX,
                startPointY,
                imageInfo["w"] * fixedXScale,
                imageInfo["h"] * fixedYScale,
                {
                    friction: 1,
                    frictionAir: frictionAir,
                    chamfer: { radius: imageInfo["charmferRadius"] },
                    angle: getRandomInt(0, 180),
                    render: {
                        sprite: {
                            texture: imageInfo["path"],
                            xScale: imageInfo["xScale"],
                            yScale: imageInfo["yScale"],
                        },
                    },
                }
            );
        }

        objs.push(bodyObj);
    }

    // add all of the bodies to the world
    Composite.add(engine.world, objs);

    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
}

export default matterVi
