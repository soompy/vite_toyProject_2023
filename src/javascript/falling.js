// visual 고구마 떨어지는 효과
const falling = () => {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var fallTimer;

    fallTimer = setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(0, 0, canvas.width, canvas.height, "white");
        context.fillStyle = 'white';
        context.fill();
        context.stroke();
        if (newCircle % objects.time == 0) {
            var xloc = Math.floor(Math.random(0, 1) * 400);
            objects.centers.push([xloc, 0]);
            objects.sizes.push(Math.floor(Math.random(0, 1) * 10 + 3));
            var myColor = "#";
            var q = 0;
            for (q = 0; q < 6; q++) {
                myColor = myColor + colorCombos[Math.floor(Math.random(0, 1) * 16)];
            }
            objects.colors.push(myColor);
            objects.stepSize.push(Math.random(0, 1) * 5);
            objects.number++;
        }
        newCircle++;
        objects.moveDown();
    }, 10);

    var colorCombos = "0123456789ABCDEF";

    var newCircle = 0;
    var objects = {
        number: 0,
        centers: [], //array of locations
        sizes: [], //how big each circle is
        colors: [],
        time: 10,
        stepSize: [],
        moveDown: function () {
            var i = 0;
            var removals = [];
            for (i = 0; i < objects.number; i++) {
                objects.centers[i][1] = objects.centers[i][1] + objects.stepSize[i];
                if (objects.centers[i][0] > 600) {
                    removals.push(i);
                }
            }
            var j = 0;
            for (j = 0; j < removals.length; j++) {
                objects.centers.splice(removals[j], 1);
                objects.sizes.splice(removals[j], 1);
                objects.color.splice(removals[j], 1);
                objects.stepSize.splice(removals[j], 1);
                objects.number = objects.number - 1;
            }
            objects.drawCircles();
        },
        drawCircles: function () {
            var i = 0;
            for (i = 0; i < objects.number; i++) {
                context.beginPath();
                context.arc(objects.centers[i][0], objects.centers[i][1],
                    objects.sizes[i], 0, 2 * Math.PI, false);
                context.fillStyle = objects.colors[i];
                context.fill();
            }
        },
    };

}



export default falling