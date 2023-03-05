let days = [];
let timeOptions = [];

$(document).ready(function () {
    $.each(days, function (i, day) {
        $('#day-select').append($('<option>', { 
            value: day,
            text : day 
        }));
    });

});

$('.add-row').submit(function(e){
    e.preventDefault();
    console.log(e)
    let row=`
        <tr id=${e.target[0].value}><td>${e.target[0].value}</td></tr>
    `
    $('#data').append(row);
    let cols = $('#timetable').children("thead")[0].children[0].children;
    let length = $('#timetable').children("thead")[0].children[0].children.length;
    console.log('length : ',length)
    console.log(cols)
    for(let i=1; i < length ; i++){
        let td=`<td id=${e.target[0].value + cols[i].id}></td`
        $(`#${e.target[0].value}`).append(td)
    }
    days.push(e.target[0].value)
    $('#day-select').append($('<option>', { 
        value: e.target[0].value,
        text : e.target[0].value 
    }));
    console.log();
})

$('.add-col').submit(function(e){
    e.preventDefault();
    console.log(e.target[0].value)
    let col=`
        <th id=${e.target[0].value}>${e.target[0].value}</th>
    `
    let length = $('#timetable').children("thead")[0].children[0].children.length-1;
    $('#header').append(col);
    let rows = $('#timetable').children("tbody")[0].children;
    console.log(rows);

    for(let i=0 ; i<rows.length ; i++){
        let td = `<td id=${rows[i].id+e.target[0].value}></td>`;
        $(`#${rows[i].id}`).append(td);
        console.log(rows[i].id);
    }

    $('#time-select').append($('<option>', { 
        value: e.target[0].value,
        text : e.target[0].value 
    }));
    // for(let i=length ; i<length+1)
    
})

$('.add-value').submit(function(e){
    e.preventDefault();
    let val=`
        <td>${e.target[2].value}</td>
    `

    console.log($(`#${e.target[0].value}`).find('td:eq(1)'))
    $(`#${e.target[0].value+e.target[1].value}`).append(e.target[2].value);
    // $(`#${e.target[0].value}`).append(val)
})

function showRowForm(){
    $('.add-row').toggle();
}

function showColForm(){
    $('.add-col').toggle();
}

function showValForm(){
    $('.add-value').toggle();
}