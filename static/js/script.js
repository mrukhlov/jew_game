/**
 * Created by s4d_panda on 12-Dec-16.
 */
$(document).ready(function () {

    // localStorage.clear();

    var current = localStorage.getItem("current");
    if (current && current.length > 0) {current = parseInt(localStorage.current)} else {current = 0}

    var stolen = localStorage.getItem("stolen");
    if (stolen && stolen.length > 0) {stolen = parseInt(localStorage.stolen)} else {stolen = 0}

    var income_rate = localStorage.getItem("income_rate");
    if (income_rate && income_rate.length > 0) {income_rate = parseInt(localStorage.income_rate)} else {income_rate = 0}

    var per_click = localStorage.getItem("per_click");
    if (per_click && per_click.length > 0) {per_click = parseInt(localStorage.per_click)} else {per_click = 1}

    var first_q = localStorage.getItem("first_q");
    if (first_q && first_q.length > 0) {first_q = parseInt(localStorage.first_q)} else {first_q = 0}

    var second_q = localStorage.getItem("second_q");
    if (second_q && second_q.length > 0) {second_q = parseInt(localStorage.second_q)} else {second_q = 0}

    var third_q = localStorage.getItem("third_q");
    if (third_q && third_q.length > 0) {third_q = parseInt(localStorage.third_q)} else {third_q = 0}

    var forth_q = localStorage.getItem("forth_q");
    if (forth_q && forth_q.length > 0) {forth_q = parseInt(localStorage.forth_q)} else {forth_q = 0}

    // var income_rate = 0;
    // var per_click = 1;
    // var stolen = 0;

    $('.first_q').text(first_q);
    $('.second_q').text(second_q);
    $('.third_q').text(third_q);
    $('.forth_q').text(forth_q);

    var increment = function () {
        current += income_rate;
        stolen += income_rate;
        localStorage.setItem("current", parseInt(current));
        localStorage.setItem("stolen", parseInt(stolen));
    };

    var interval = setInterval(increment, 1000);
    interval;

    var init_interval = setInterval(function () {
        // console.log('run init interval');
        $('.display_total').text(current);
        $('.display_second').text(income_rate);
        $('.display_click').text(per_click);
        $('.display_stolen').text(stolen);
        if (current >= 50) {
            if ($('.first').attr('disabled') == 'disabled') {
                $('.first').prop("disabled", false)
            }
        } else {
                $('.first').prop("disabled", true);
            }
        if (current >= 500) {
            if ($('.second').attr('disabled') == 'disabled') {
                $('.second').prop("disabled", false)
            }
        } else {
                $('.second').prop("disabled", true);
            }
        if (current >= 5000) {
            if ($('.third').attr('disabled') == 'disabled') {
                $('.third').prop("disabled", false)
            }
        } else {
                $('.third').prop("disabled", true);
            }
        if (current >= 50000) {
            if ($('.forth').attr('disabled') == 'disabled') {
                $('.forth').prop("disabled", false)
            }
        } else {
                $('.forth').prop("disabled", true);
        }
        // }else {
        //     $('.first').prop("disabled", true);
        //     $('.second').prop("disabled", true);
        //     $('.third').prop("disabled", true);
        //     $('.forth').prop("disabled", true);
        // }
    }, 100);

    init_interval;

    $('.zero').click(function () {
        current += per_click;
        stolen += per_click;
        localStorage.setItem("current", parseInt(current));
        localStorage.setItem("stolen", parseInt(current));
    });

    $('.first').click(function () {
        current -= 50;
        income_rate += 1;
        first_q += 1;
        localStorage.setItem("income_rate", parseInt(income_rate));
        localStorage.setItem("first_q", parseInt(first_q));
        $('.first_q').text(first_q);
    });

    $('.second').click(function () {
        current -= 500;
        income_rate += 3;
        per_click += 2;
        second_q += 1;
        localStorage.setItem("income_rate", parseInt(income_rate));
        localStorage.setItem("per_click", parseInt(per_click));
        localStorage.setItem("second_q", parseInt(second_q));
        $('.second_q').text(second_q);
    });

    $('.third').click(function () {
        current -= 5000;
        per_click += 10;
        third_q += third_q;
        localStorage.setItem("per_click", parseInt(per_click));
        localStorage.setItem("third_q", parseInt(third_q));
        $('.third_q').text(third_q);
    });

    $('.forth').click(function () {
        current -= 50000;
        income_rate += 10;
        forth_q += 1;
        localStorage.setItem("income_rate", parseInt(income_rate));
        localStorage.setItem("forth_q", parseInt(forth_q));
        $('.forth_q').text(forth_q);
    });

    // $('.stop_button').click(function () {
    //     clearInterval(init_interval);
    //     current = 0;
    // });

});