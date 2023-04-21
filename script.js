
var monthsList = [
    {},

    {
        name: 'Jan',
        color: "#B2EBF2",
        grayscale: "#e5e5e5", 
    },

    {
        name: 'Feb',
        color: "#80CBC4",
        grayscale: "#d4d4d4", 
    },
    
    {
        name: 'Mar',
        color: "#A5D6A7",
        grayscale: "#f5f5f5", 
    },

    {
        name: 'Apr',
        color: "#C5E1A5",
        grayscale: "#e5e5e5", 
    },
    
    {
        name: 'May',
        color: "#E6EE9C",
        grayscale: "#d4d4d4", 
    },

    {
        name: 'June',
        color: "#FFE082",
        grayscale: "#f5f5f5", 
    },

    {
        name: 'July',
        color: "#FFAB91",
        grayscale: "#e5e5e5", 
    },

    {
        name: 'Aug',
        color: "#EF9A9A",
        grayscale: "#d4d4d4", 
    },

    {
        name: 'Sep',
        color: "#B39DDB",
        grayscale: "#f5f5f5", 
    },

    {
        name: 'Oct',
        color: "#9FA8DA",
        grayscale: "#e5e5e5", 
    },

    {
        name: 'Nov',
        color: "#64B5F6",
        grayscale: "#d4d4d4", 
    },

    {
        name: 'Dec',
        color: "#81D4FA",
        grayscale: "#f5f5f5", 
    }
]

window.onload = function() {
    var container = document.querySelector("#container")

    var start = getParameterByName('start') || new Date().toISOString().slice(0,10)
    var n = getParameterByName('n') || 20
    var days = datesFrom(start, n)
    var calEl = elementFrom(generateCalendar(days))
    console.log(days)


    container.appendChild(calEl)
}



function generateCalendar(days) {
    
    var global = `<div id='cal'>`
    var months = `<div class='months'>`
    var color = getParameterByName('c') || 'color'
    for (let i = 1; i < monthsList.length; i++){
        months += `<span class='month' style='background-color:${monthsList[i][color]}'>${monthsList[i].name}</span>`
    }
    months += `</div>`


    var quints = Math.ceil(days.length / 70)
    var labels = `<span class='label'>Mon</span><span class='label'>Tue</span><span class='label'>Wed</span><span class='label'>Thu</span><span class='label'>Fri</span><span class='label' >Sat</span><span class='label' style='font-weight:bold'>Sun</span>`
    labels += labels
    for (let i = 0; i < quints; i++){
        

        global += `<div class='quint'>`
        global += `<div class='labels'>${labels}</div>`

        
        for (let j = 0; j < 5; j++){
            global += `<div class='week'>`
            
            qdays = days.slice(i*70 + j*14, (i*70) + (j+1)*14)
            for (let j = 0; j < qdays.length; j++){
                global += `<div class='day' style='background-color:${monthsList[qdays[j].m][color]}'><span>${qdays[j].d}</span></div>`
            }

            global += `</div>`
        }
        if (i %2 == 1) {
            global += months
        }
        global += `</div>`
    }

    return global
}


function elementFrom(text) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = text;
    return wrapper.firstElementChild;
}

function datesFrom(start, n) {
    var start = new Date(start)
    var days = n*7*2 // doubleweek days
    var list = []

    // find monday
    while (start.getDay() != 1){
        start.setDate(start.getDate() - 1)
    }

    for (let i = 0; i < days; i++){ 
        var strDate = start.toISOString().slice(0,10)
        list.push({
            d : parseInt(strDate.split('-')[2]),
            m : parseInt(strDate.split('-')[1]),
            y : parseInt(strDate.split('-')[0]),
        })
        start.setDate(start.getDate()+1)
    }

    return list
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
