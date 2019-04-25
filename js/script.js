$(document).ready(function(){

    $.ajax({
        type: 'GET',
        dataType:'json',
        url:'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
        success: function(data){


                    var temp = 'Температура: <b>'+data.main.temp+' &#176;C</b><br>';
                    var pressure = 'Атмосферний тиск: <b>'+Math.round(data.main.pressure*0.00750063755419211*100)+'  мм.рт.ст</b><br>';
                    var description = 'Опис: <b>'+data.weather[0].description+'</b>';
                    var humidity = 'Вологість: <b>'+data.main.humidity+' %</b>';
                    var speed = 'Швидкість вітру: <b>'+data.wind.speed+' м/с</b>';
                    var deg = 'Напрям вітру: <b>'+data.wind.deg+' &#176;</b>';
                    var icon = '<p><img src= "http://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></p>';
            
                    // console.log( temp, pressure);
                    $('.icon').html(icon);
                    $('.temp').html(temp);
                    $('.pressure').html(pressure);
                    $('.description').html(description);
                    $('.humidity').html(humidity);
                    $('.speed').html(speed);
                    $('.deg').html(deg);
            


            
        }
    });


});






    



