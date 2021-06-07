canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

car_width = 120;
car_height = 70;
car_image = "car.png";
car_x = 10;
car_y = 100;

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 100;

background_image = "background.jpg";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = background_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar()
{
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed == "38")
    {
        carup();
        console.log("carup");
    }

    if(keyPressed == "40");
    {
        cardown();
        console.log("cardown");
    }

    if(keyPressed == "37");
    {
        carleft();
        console.log("carleft");
    }

    if(keyPressed == "39");
    {
       carright();
        console.log("carright");
    }

    if(keyPressed == "w");
    {
       car1up();
        console.log("car1up");
    }

    if(keyPressed == "a");
    {
       car1left();
        console.log("car1left");
    }

    if(keyPressed == "d");
    {
       car1right();
        console.log("car1right");
    }

    if(keyPressed == "s");
    {
       car1down();
        console.log("car1down");
    }
}