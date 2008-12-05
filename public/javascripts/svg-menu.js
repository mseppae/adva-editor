var no_of_pools = 0;

function drawIntro(){

    var svg = jQuery('#svgintro').svg('get');
    svg.describe("Example script01 - invoke an ECMAScript function from an onclick event");
    svg.circle(0, 0, 0);
    svg.path
    
}


function sEvent(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("Start Event");
    var g = svg.group("event", {
        transform: 'translate(190, 105)'
    });
    svg.path(g, "M29,5c13.255,0,24,10.745,24,24S42.255,53,29,53S5,42.255,5,29S15.745,5,29,5z", {
        fill: "#999999"
    });
    svg.path(g, "M29,50.999C16.869,50.999,7,41.13,7,29C7,16.869,16.869,7,29,7c12.129,0,21.999,9.869,21.999,22C50.999,41.13,41.13,50.999,29,50.999L29,50.999z", {
        fill: "#FFFFFF"
    });
    svg.text(g, 15, 35, "Start", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    enableDrag(g);
    
}

function eEvent(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("End Event");
    var g = svg.group("event", {
        transform: 'translate(800, 105)'
    });
    svg.path(g, "M29,5c13.255,0,24,10.745,24,24S42.255,53,29,53S5,42.255,5,29S15.745,5,29,5z", {
        fill: "#123456"
    });
    svg.path(g, "M29,50.999C16.869,50.999,7,41.13,7,29C7,16.869,16.869,7,29,7c12.129,0,21.999,9.869,21.999,22C50.999,41.13,41.13,50.999,29,50.999L29,50.999z", {
        fill: "#FFFFFF"
    });
    svg.text(g, 20, 35, "End", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    enableDrag(g);
    
}


function iEvent(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("Interim Event");
    var g = svg.group("ievent");
    svg.path(g, "M28.999,56.004c-14.887,0-27.001-12.113-27.001-27.005c0-14.887,12.114-27.001,27.001-27.001c14.892,0,27.005,12.114,27.005,27.001C56.004,43.891,43.891,56.004,28.999,56.004L28.999,56.004z", {
        opacity: "0.06"
    });
    svg.path(g, "M29,55.003C14.663,55.003,2.999,43.338,2.999,29C2.999,14.663,14.663,2.999,29,2.999c14.338,0,26.003,11.665,26.003,26.001C55.003,43.338,43.338,55.003,29,55.003L29,55.003z", {
        opacity: "0.06"
    });
    svg.path(g, "M29,54.002C15.216,54.002,4,42.786,4,29C4,15.216,15.216,4,29,4c13.786,0,25.002,11.216,25.002,25C54.002,42.786,42.786,54.002,29,54.002L29,54.002z", {
        opacity: "0.06"
    });
    svg.path(g, "M29,5c13.255,0,24,10.745,24,24S42.255,53,29,53S5,42.255,5,29S15.745,5,29,5z", {
        fill: "#999999"
    });
    
    svg.path(g, "M29,50.999C16.869,50.999,7,41.13,7,29C7,16.869,16.869,7,29,7c12.129,0,21.999,9.869,21.999,22C50.999,41.13,41.13,50.999,29,50.999L29,50.999z", {
        fill: "#FFFFFF"
    });
    svg.path(g, "M28.999,49.499c-11.304,0-20.5-9.196-20.5-20.5c0-11.304,9.196-20.5,20.5-20.5c11.304,0,20.5,9.196,20.5,20.5C49.499,40.303,40.303,49.499,28.999,49.499L28.999,49.499z", {
        fill: "#999999"
    });
    svg.path(g, "M28.999,47.499c-10.201,0-18.5-8.3-18.5-18.5c0-10.201,8.298-18.5,18.5-18.5c10.201,0,18.5,8.298,18.5,18.5C47.499,39.199,39.199,47.499,28.999,47.499L28.999,47.499z", {
        fill: "#FFFFFF"
    });
    enableDrag(g);
    
}


function lane(){
    var svg = jQuery('#svgintro').svg('get');
    
    svg.describe("lane");
    var id = "lanes" + no_of_pools;
    
    if (no_of_pools == 1) 
        var g = svg.group(id, {
            transform: 'translate(134, 50)',
            onclick: "morePool();"
        });
    else 
        if (no_of_pools == 2) 
            var g = svg.group(id, {
                transform: 'translate(134, 250)',
                onclick: "morePool();"
            });
        else 
            var g = svg.group(id, {
                transform: 'translate(134, 450)',
                onclick: "morePool();"
            });
    svg.polygon(g, [[39.998, 167.996], [38.998, 167.996], [37.999, 167.996], [37, 167.996], [5, 167.996], [4, 167.996], [3.001, 167.996], [2.002, 167.996], [2.002, 166.997], [2.002, 165.998], [2.002, 164.999], [2.002, 5.001], [2.002, 4.002], [2.002, 3.002], [2.002, 2.003], [3.001, 2.003], [4, 2.003], [5, 2.003], [37, 2.003], [37.999, 2.003], [38.998, 2.003], [39.998, 2.003], [39.998, 3.002], [39.998, 4.002], [39.998, 5.001], [39.998, 164.999], [39.998, 165.998], [39.998, 166.997], [39.998, 167.996]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[38.998, 166.998], [37.999, 166.998], [37, 166.998], [5, 166.998], [4, 166.998], [3.001, 166.998], [3.001, 165.998], [3.001, 164.999], [3.001, 5], [3.001, 4.001], [3.001, 3.002], [4, 3.002], [5, 3.002], [37, 3.002], [37.999, 3.002], [38.998, 3.002], [38.998, 4.001], [38.998, 5], [38.998, 164.999], [38.998, 165.998], [38.998, 166.998]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.polygon(g, [[37.999, 165.999], [37, 165.999], [5, 165.999], [4, 165.999], [4, 165], [4, 5], [4, 4.001], [5, 4.001], [37, 4.001], [37.999, 4.001], [37.999, 5], [37.999, 165], [37.999, 165.999]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.path(g, "M5,5h32v160H5V5z", {
        fill: "#FFFFFF",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[36.001, 164.001], [5.999, 164.001], [5.999, 5.999], [36.001, 5.999], [36.001, 164.001]], {
        opacity: "0.06",
        fill_rule: "evenodd",
        fill: "#EBEBEB",
        'clip-rule': "evenodd"
    });
    
    svg.rect(g, 15, 150, 10, 10, {
        fill: "#ccc",
        onclick: "pool1();",
        cursor: "pointer"
    });
    svg.polygon(g, [[8, 4], [6, 4], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [4, 6], [4, 8], [6, 8], [6, 6], [8, 6]], {
        fill: "#000000",
        transform: 'translate(15, 150)'
    });
    svg.text(g, 10, 100, "lane", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    
    
    
    
    
}

function lane_without_add_1(){


    var svg = jQuery('#svgintro').svg('get');
    
    svg.describe("lane_without_add_1");
    var id = "lane_without_add_1" + no_of_pools;
    
    if (no_of_pools == 1) 
        var g = svg.group(id, {
            transform: 'translate(134, 0)',
            onclick: "morePool();"
        });
    else 
        if (no_of_pools == 2) 
            var g = svg.group(id, {
                transform: 'translate(134, 50)',
                onclick: "morePool();"
            });
        else 
            var g = svg.group(id, {
                transform: 'translate(134, 250)',
                onclick: "morePool();"
            });
    svg.polygon(g, [[39.998, 167.996], [38.998, 167.996], [37.999, 167.996], [37, 167.996], [5, 167.996], [4, 167.996], [3.001, 167.996], [2.002, 167.996], [2.002, 166.997], [2.002, 165.998], [2.002, 164.999], [2.002, 5.001], [2.002, 4.002], [2.002, 3.002], [2.002, 2.003], [3.001, 2.003], [4, 2.003], [5, 2.003], [37, 2.003], [37.999, 2.003], [38.998, 2.003], [39.998, 2.003], [39.998, 3.002], [39.998, 4.002], [39.998, 5.001], [39.998, 164.999], [39.998, 165.998], [39.998, 166.997], [39.998, 167.996]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[38.998, 166.998], [37.999, 166.998], [37, 166.998], [5, 166.998], [4, 166.998], [3.001, 166.998], [3.001, 165.998], [3.001, 164.999], [3.001, 5], [3.001, 4.001], [3.001, 3.002], [4, 3.002], [5, 3.002], [37, 3.002], [37.999, 3.002], [38.998, 3.002], [38.998, 4.001], [38.998, 5], [38.998, 164.999], [38.998, 165.998], [38.998, 166.998]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.polygon(g, [[37.999, 165.999], [37, 165.999], [5, 165.999], [4, 165.999], [4, 165], [4, 5], [4, 4.001], [5, 4.001], [37, 4.001], [37.999, 4.001], [37.999, 5], [37.999, 165], [37.999, 165.999]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.path(g, "M5,5h32v160H5V5z", {
        fill: "#FFFFFF",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[36.001, 164.001], [5.999, 164.001], [5.999, 5.999], [36.001, 5.999], [36.001, 164.001]], {
        opacity: "0.06",
        fill_rule: "evenodd",
        fill: "#EBEBEB",
        'clip-rule': "evenodd"
    });
    
    
    svg.text(g, 10, 100, "lane", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    
    
    
    
    
}

function lane1(){

    if (no_of_pools == 2) 
        jQuery('#lanes1').remove();
    else 
        jQuery('#lanes2').remove();
    lane_without_add_1();
    var svg = jQuery('#svgintro').svg('get');
    
    svg.describe("lane1");
    var id = "lane1" + no_of_pools;
    
    if (no_of_pools == 1) 
        var g = svg.group(id, {
            transform: 'translate(134, 0)',
            onclick: "morePool();"
        });
    else 
        if (no_of_pools == 2) 
            var g = svg.group(id, {
                transform: 'translate(134, 200)',
                onclick: "morePool();"
            });
        else 
            var g = svg.group(id, {
                transform: 'translate(134, 400)',
                onclick: "morePool();"
            });
    svg.polygon(g, [[39.998, 167.996], [38.998, 167.996], [37.999, 167.996], [37, 167.996], [5, 167.996], [4, 167.996], [3.001, 167.996], [2.002, 167.996], [2.002, 166.997], [2.002, 165.998], [2.002, 164.999], [2.002, 5.001], [2.002, 4.002], [2.002, 3.002], [2.002, 2.003], [3.001, 2.003], [4, 2.003], [5, 2.003], [37, 2.003], [37.999, 2.003], [38.998, 2.003], [39.998, 2.003], [39.998, 3.002], [39.998, 4.002], [39.998, 5.001], [39.998, 164.999], [39.998, 165.998], [39.998, 166.997], [39.998, 167.996]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[38.998, 166.998], [37.999, 166.998], [37, 166.998], [5, 166.998], [4, 166.998], [3.001, 166.998], [3.001, 165.998], [3.001, 164.999], [3.001, 5], [3.001, 4.001], [3.001, 3.002], [4, 3.002], [5, 3.002], [37, 3.002], [37.999, 3.002], [38.998, 3.002], [38.998, 4.001], [38.998, 5], [38.998, 164.999], [38.998, 165.998], [38.998, 166.998]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.polygon(g, [[37.999, 165.999], [37, 165.999], [5, 165.999], [4, 165.999], [4, 165], [4, 5], [4, 4.001], [5, 4.001], [37, 4.001], [37.999, 4.001], [37.999, 5], [37.999, 165], [37.999, 165.999]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.path(g, "M5,5h32v160H5V5z", {
        fill: "#FFFFFF",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[36.001, 164.001], [5.999, 164.001], [5.999, 5.999], [36.001, 5.999], [36.001, 164.001]], {
        opacity: "0.06",
        fill_rule: "evenodd",
        fill: "#EBEBEB",
        'clip-rule': "evenodd"
    });
    
    svg.rect(g, 15, 150, 10, 10, {
        fill: "#ccc",
        onclick: "pool1();",
        cursor: "pointer"
    });
    svg.polygon(g, [[8, 4], [6, 4], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [4, 6], [4, 8], [6, 8], [6, 6], [8, 6]], {
        fill: "#000000",
        transform: 'translate(15, 150)'
    });
    svg.text(g, 10, 100, "lane", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    
    
    
    
    
}

function pool_big(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("pool1");
    svg.polygon(g, [[40.001, 327], [39, 327], [38, 327], [37, 327], [5, 327], [4, 327], [3, 327], [1.999, 327], [1.999, 326], [1.999, 325], [1.999, 323.999], [1.999, 1.999, 4], [1.999, 2.999], [1.999, 1.999], [3, 1.999], [4, 1.999], [5, 1.999], [37, 1.999], [38, 1.999], [39, 1.999], [40.001, 1.999], [40.001, 2.999], [40.001, 4], [40.001, 5], [40.001, 323.999], [40.001, 325], [40.001, 326], [40.001, 327]], {
        opacity: "0.06",
    });
    svg.polygon(g, [[39, 326], [38, 326], [37, 326], [5, 326], [4, 326], [3, 326], [3, 324.999], [3, 323.999], [3, 5], [3, 4], [3, 3], [4, 3], [5, 3], [37, 3], [38, 3], [39, 3], [39, 4], [39, 5], [39, 323.999], [39, 324.999], [39, 326]], {
        opacity: "0.06",
    });
    svg.polygon(g, [[38, 324.999], [37, 324.999], [5, 324.999], [4, 324.999], [4, 323.999], [4, 5], [4, 4], [5, 4], [37, 4], [38, 4], [38, 5], [38, 323.999], [38, 324.999]], {
        opacity: "0.06",
    });
    svg.path(g, "M5,5h32v319H5V5z", {
        fill: "#CCCCCC"
    });
    svg.polygon(g, [[36, 323], [6, 323], [6, 6], [36, 6]], {
        fill: "#EBEBEB",
    });
}

function pool1(){
    if (no_of_pools == 1) 
        jQuery('#pool0').remove();
    else 
        jQuery('#pool1').remove();
    jQuery('#pool1').remove();
    var svg = jQuery('#svgintro').svg('get');
    
    svg.describe("pool1");
    var id = "pool1" + no_of_pools;
    
    if (no_of_pools == 0) 
        var g = svg.group(id, {
            transform: 'translate(100, 0)',
            onclick: "morePool();"
        });
    else 
        if (no_of_pools == 1) 
        
            var g = svg.group(id, {
                transform: 'translate(100, 45)',
                onclick: "morePool();"
            });
        else 
            var g = svg.group(id, {
                transform: 'translate(100, 245)',
                onclick: "morePool();"
            });
    svg.polygon(g, [[40.001, 327], [39, 327], [38, 327], [37, 327], [5, 327], [4, 327], [3, 327], [1.999, 327], [1.999, 326], [1.999, 325], [1.999, 323.999], [1.999, 1.999, 4], [1.999, 2.999], [1.999, 1.999], [3, 1.999], [4, 1.999], [5, 1.999], [37, 1.999], [38, 1.999], [39, 1.999], [40.001, 1.999], [40.001, 2.999], [40.001, 4], [40.001, 5], [40.001, 323.999], [40.001, 325], [40.001, 326], [40.001, 327]], {
        opacity: "0.06",
    });
    svg.polygon(g, [[39, 326], [38, 326], [37, 326], [5, 326], [4, 326], [3, 326], [3, 324.999], [3, 323.999], [3, 5], [3, 4], [3, 3], [4, 3], [5, 3], [37, 3], [38, 3], [39, 3], [39, 4], [39, 5], [39, 323.999], [39, 324.999], [39, 326]], {
        opacity: "0.06",
    });
    svg.polygon(g, [[38, 324.999], [37, 324.999], [5, 324.999], [4, 324.999], [4, 323.999], [4, 5], [4, 4], [5, 4], [37, 4], [38, 4], [38, 5], [38, 323.999], [38, 324.999]], {
        opacity: "0.06",
    });
    svg.path(g, "M5,5h32v319H5V5z", {
        fill: "#ccc"
    });
    svg.polygon(g, [[36, 323], [6, 323], [6, 6], [36, 6]], {
        fill: "#fff",
    });
    svg.rect(g, 15, 305, 10, 10, {
        fill: "#ccc",
        onclick: "pool1();",
        cursor: "pointer"
    });
    svg.polygon(g, [[8, 4], [6, 4], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [4, 6], [4, 8], [6, 8], [6, 6], [8, 6]], {
        fill: "#000000",
        transform: 'translate(15, 305)'
    });
    svg.text(g, 10, 165, "Pool", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    no_of_pools = no_of_pools + 1;
    header1();
    lane1();
}


function pool(){
    var svg = jQuery('#svgintro').svg('get');
    
    svg.describe("Pool");
    var id = "pool" + no_of_pools;
    
    if (no_of_pools == 0) 
        var g = svg.group(id, {
            transform: 'translate(100, 50)',
            onclick: "morePool();"
        });
    else 
        if (no_of_pools == 1) 
            var g = svg.group(id, {
                transform: 'translate(100, 250)',
                onclick: "morePool();"
            });
        else 
            var g = svg.group(id, {
                transform: 'translate(100, 450)',
                onclick: "morePool();"
            });
    svg.polygon(g, [[39.998, 167.996], [38.998, 167.996], [37.999, 167.996], [37, 167.996], [5, 167.996], [4, 167.996], [3.001, 167.996], [2.002, 167.996], [2.002, 166.997], [2.002, 165.998], [2.002, 164.999], [2.002, 5.001], [2.002, 4.002], [2.002, 3.002], [2.002, 2.003], [3.001, 2.003], [4, 2.003], [5, 2.003], [37, 2.003], [37.999, 2.003], [38.998, 2.003], [39.998, 2.003], [39.998, 3.002], [39.998, 4.002], [39.998, 5.001], [39.998, 164.999], [39.998, 165.998], [39.998, 166.997], [39.998, 167.996]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[38.998, 166.998], [37.999, 166.998], [37, 166.998], [5, 166.998], [4, 166.998], [3.001, 166.998], [3.001, 165.998], [3.001, 164.999], [3.001, 5], [3.001, 4.001], [3.001, 3.002], [4, 3.002], [5, 3.002], [37, 3.002], [37.999, 3.002], [38.998, 3.002], [38.998, 4.001], [38.998, 5], [38.998, 164.999], [38.998, 165.998], [38.998, 166.998]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.polygon(g, [[37.999, 165.999], [37, 165.999], [5, 165.999], [4, 165.999], [4, 165], [4, 5], [4, 4.001], [5, 4.001], [37, 4.001], [37.999, 4.001], [37.999, 5], [37.999, 165], [37.999, 165.999]], {
        opacity: "0.06",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    
    svg.path(g, "M5,5h32v160H5V5z", {
        fill: "#FFFFFF",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    });
    svg.polygon(g, [[36.001, 164.001], [5.999, 164.001], [5.999, 5.999], [36.001, 5.999], [36.001, 164.001]], {
        opacity: "0.06",
        fill_rule: "evenodd",
        fill: "#EBEBEB",
        'clip-rule': "evenodd"
    });
    
    svg.rect(g, 15, 150, 10, 10, {
        fill: "#ccc",
        onclick: "pool();",
        cursor: "pointer"
    });
    svg.polygon(g, [[8, 4], [6, 4], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [4, 6], [4, 8], [6, 8], [6, 6], [8, 6]], {
        fill: "#000000",
        transform: 'translate(15, 150)'
    });
    svg.text(g, 10, 100, "Pool", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    no_of_pools = no_of_pools + 1;
    header();
    lane();
    conn_h();
    add_point_active();
    var mask = svg.mask(g, 'Pool', 200, 100, 800, 300);
}

function conn_h_left(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("conn_h_left");
    var g = svg.group("conn_h_left", {
        onclick: "add_point_active();",
        cursor: "pointer",
    
    });
    svg.line(g, 240, 135, 400, 135, {
        fill: "none",
        stroke: "#000000",
        'stroke-width': "2.0828"
    });
    svg.path(g, "M0,0l8,4L0,8V0z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        transform: 'translate(400, 131)'
    });
}

function conn_h_right(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("conn_h_right");
    var g = svg.group("conn_h_right", {
        onclick: "add_point_active();",
        cursor: "pointer",
    
    });
    svg.line(g, 492, 135, 800, 135, {
        fill: "none",
        stroke: "#000000",
        'stroke-width': "2.0828"
    });
    svg.path(g, "M0,0l8,4L0,8V0z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        transform: 'translate(800, 131)'
    });
}

function morePool(){

    var a = jQuery('#pool0').click(function(){
        jQuery('#lane').toggle();
    });
    var a = jQuery('#lane').click(function(){
        jQuery('#pool2').toggle();
    });
    
}

function header(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("header");
    
    if (no_of_pools == 1) 
        var g = svg.group("header", {
            transform: 'translate(138, 50)'
        });
    else 
        if (no_of_pools == 2) 
            var g = svg.group("header", {
                transform: 'translate(138, 250)'
            });
        else 
            var g = svg.group("header", {
                transform: 'translate(138, 450)'
            });
    svg.rect(g, 0, 5, 807, 160, {
        fill: "#CCCCCC"
    });
    svg.polygon(g, [[806, 164], [0, 164], [0, 6], [806, 6], [806, 164]], {
        fill: "#FFFFFF"
    });
    svg.line(g, 1, 85, 807, 85, {
        fill: "none",
        stroke: "#E5E5E5",
        'stroke-width': "1.9988",
        'stroke-linecap': "square",
        'stroke-dasharray': "0,3.9975"
    });
    
    
}

function header1(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("header1");
    
    if (no_of_pools == 1) 
        var g = svg.group("header1", {
            transform: 'translate(138, 0)'
        });
    else 
        if (no_of_pools == 2) 
            var g = svg.group("header1", {
                transform: 'translate(138, 200)'
            });
        else 
            var g = svg.group("header1", {
                transform: 'translate(138, 400)'
            });
    svg.rect(g, 0, 5, 807, 160, {
        fill: "#CCCCCC"
    });
    svg.polygon(g, [[806, 164], [0, 164], [0, 6], [806, 6], [806, 164]], {
        fill: "#FFFFFF"
    });
    svg.line(g, 1, 85, 807, 85, {
        fill: "none",
        stroke: "#E5E5E5",
        'stroke-width': "1.9988",
        'stroke-linecap': "square",
        'stroke-dasharray': "0,3.9975"
    });
    
    
}

function conn_h(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("conn_h");
    var g = svg.group("conn_h");
    svg.line(g, 240, 135, 800, 135, {
        fill: "none",
        stroke: "#000000",
        'stroke-width': "2.0828"
    });
    svg.path(g, "M0,0l8,4L0,8V0z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        transform: 'translate(800, 131)'
    });
}

//context menu:-
//-------------------------------
function cm_l1(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("cm_l1");
    
    edit();
    plus();
    change();
    details();
}



//---------------------------------------------------------------
//context menu level-1:-
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
function edit(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("edit");
    var g = svg.group("edit", {
        transform: 'translate(420, 100)'
    });
    
    svg.rect(g, 0, 0, 12, 12, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.path(g, "M7.759,6.02L7.68,6.099L8.132,6.55l-0.22,0.22l1.09,1.916L8.686,9.002L6.77,7.912l-0.22,0.22L6.099,7.68L6.02,7.759L3.37,5.11l0.079-0.079L2.998,4.58l1.581-1.582l0.452,0.451L5.11,3.3L7.759,6.02z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#ffffff"
    });
}

function plus(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("plus");
    var g = svg.group("plus", {
        transform: 'translate(480, 100)',
        onclick: "cm_l2();",
        cursor: "pointer"
    });
    svg.rect(g, 0, 0, 12, 12, {
    
        fill: "#ccc",
    
    });
    svg.polygon(g, [[8, 4], [6, 4], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [4, 6], [4, 8], [6, 8], [6, 6], [8, 6]], {
        fill: "#ffffff"
    });
    
}

function change(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("change");
    var g = svg.group("change", {
        transform: 'translate(480, 160)'
    });
    svg.rect(g, 0, 0, 12, 12, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.path(g, "M2.25,3h3V1h-4v8h4V7h-3V3z M5.25,3v4h3V3H5.25z", {
        fill: "#ffffff"
    });
    
}

function details(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("details");
    var g = svg.group("details", {
        transform: 'translate(420, 160)'
    });
    svg.rect(g, 0, 0, 12, 12, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.path(g, "M2.25,2v2h6V2H2.25z M2.25,6h6V5h-6V6z M2.25,8h6V7h-6V8z", {
        fill: "#ffffff"
    });
    
}

//context menu2:-
function cm_l2(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("cm_l1");
    favourities();
    events();
    connections();
    activities();
    artifacts();
    gateways();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------


//context menu level-2:-
//----------------------------------------------------------------------------------------------------------------------------------------------------------------



function add_point_active(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("add_point_active");
    var g = svg.group("add_point_active", {
        onclick: "cm_l1();",
        cursor: "pointer",
        transform: 'translate(450, 128)',
        zoomAndPan: "magnify"
    });
    
    svg.path(g, "M6,0c3.313,0,6,2.687,6,6s-2.687,6-6,6S0,9.313,0,6S2.687,0,6,0z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#999999"
    });
    svg.path(g, "M6,10.001C3.794,10.001,2,8.205,2,6S3.794,2,6,2S10.001,3.794,10.001,6S8.205,10.001,6,10.001L6,10.001z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
}

function favourities(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("favourities");
    var g = svg.group("favourities", {
    
        transform: 'translate(496, 100)'
    });
    svg.rect(g, 0, 0, 18, 18, {
    
    
        fill: "#ccc",
    
    });
    
    svg.path(g, "M9,3l1.664,4.217l4.645,0.366l-3.615,2.798L12.898,15L9,12.337L5.101,15l1.208-4.619L2.692,7.583l4.646-0.366L9,3", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
}


function events(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("events");
    var g = svg.group("events", {
    
        transform: 'translate(496, 120)'
    });
    svg.rect(g, 0, 0, 18, 18, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.circle(g, 9, 9, 5, {
        opacity: "0.2"
    });
    svg.path(g, "M9,2.996C5.685,2.996,2.996,5.684,2.996,9c0,3.316,2.688,6.004,6.004,6.004c3.316,0,6.004-2.688,6.004-6.004C15.004,5.684,12.314,2.996,9,2.996z M9,13.005c-2.208,0-4.003-1.798-4.003-4.005S6.792,4.996,9,4.996S13.005,6.792,13.005,9S11.207,13.005,9,13.005z", {
        fill: "#FFFFFF"
    });
}

function connections(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("connections");
    var g = svg.group("connections", {
    
        transform: 'translate(496, 140)'
    });
    svg.rect(g, 0, 0, 18, 18, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.rect(g, 3.292, 5.833, 8.917, 4.75, {
        opacity: "0.2"
    });
    svg.path(g, "M14.699,8.277l-6.398-6.81v3.331h-6v6.987h6v3.748L14.699,8.277z M4.3,9.786V6.799h6.002v-0.28l1.693,1.802l-1.693,1.922V9.786H4.3z", {
        fill: "#FFFFFF"
    });
}

function activities(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("activities");
    var g = svg.group("activities", {
        onclick: "activity();",
        cursor: "pointer",
        transform: 'translate(496, 160)'
    });
    svg.rect(g, 0, 0, 18, 18, {
    
        fill: "#ccc",
    
    });
    svg.rect(g, 3.999, 4, 8.001, 8, {
        opacity: "0.2"
    });
    svg.path(g, "M11,2H5C3.343,2,2,3.343,2,5v6c0,1.656,1.343,3,3,3h6c1.657,0,3-1.344,3-3V5C14,3.343,12.657,2,11,2z M12,10.999C12,11.551,11.551,12,10.999,12H5c-0.552,0-1.001-0.449-1.001-1.001V5C4,4.449,4.449,4,5,4h5.999C11.551,4,12,4.449,12,5V10.999z", {
        fill: "#FFFFFF"
    });
}

function artifacts(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("artifacts");
    var g = svg.group("artifacts", {
    
        transform: 'translate(496, 180)'
    });
    svg.rect(g, 0, 0, 18, 18, {
    
    
        fill: "#ccc",
    
    });
    svg.rect(g, 4.175, 3.138, 7.432, 9.506, {
        opacity: "0.2"
    });
    svg.path(g, "M10.311,1.973H3.012v12.054h9.977V4.651L10.311,1.973z M10.99,12.027H5.01V3.972h4.47l1.51,1.509V12.027z", {
        fill: "#FFFFFF"
    });
    svg.path(g, "M12.35,6L9,2.651V6H12.35z", {
        fill: "#FFFFFF"
    });
}

function gateways(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("gateways");
    var g = svg.group("gateways", {
    
        transform: 'translate(496, 200)'
    });
    svg.rect(g, 0, 0, 18, 18, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.path(g, "M8.5,1.5l-7,7l7,7l7-7L8.5,1.5z M8.5,12.67L4.329,8.5l4.17-4.17l4.17,4.17L8.5,12.67z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
    
}

function draw_activity(){

    jQuery('#edit').remove();
    jQuery('#plus').remove();
    jQuery('#change').remove();
    jQuery('#details').remove();
    
    jQuery('#favourities').remove();
    jQuery('#events').remove();
    jQuery('#connections').remove();
    jQuery('#activities').remove();
    jQuery('#artifacts').remove();
    jQuery('#gateways').remove();
    
    jQuery('#activity_task').remove();
    jQuery('#activity_coll_sp').remove();
    jQuery('#activity_exp_sp').remove();
    jQuery('#conn_h').remove();
    draw_replace_activity();
    conn_h_left();
    conn_h_right();
    
    
}

//draw activity:-
function draw_replace_activity(){

    var svg = jQuery('#svgintro').svg('get');
    svg.describe("draw_activity");
    var g = svg.group("draw_activity", {
        onclick: "cm_l1();",
        transform: 'translate(400, 103)'
    });
    
    svg.path(g, "M88.001,57.002h-76C7.037,57.002,3,52.964,3,48V12c0-4.964,4.037-9.001,9.001-9.001h76c4.964,0,9.002,4.038,9.002,9.001v36C97.003,52.964,92.965,57.002,88.001,57.002L88.001,57.002z", {
        opacity: "0.06"
    });
    svg.path(g, "M88.001,56.002H12c-4.412,0-8.001-3.59-8.001-8.002V12c0-4.413,3.59-8.003,8.001-8.003h76.001c4.411,0,8.002,3.59,8.002,8.003v36C96.003,52.412,92.412,56.002,88.001,56.002L88.001,56.002z", {
        opacity: "0.06"
    });
    svg.path(g, "M88.001,55H12c-3.861,0-7.002-3.141-7.002-7V12.001C4.999,8.14,8.14,4.999,12,4.999h76c3.858,0,7,3.141,7,7.002V48C95.001,51.859,91.859,55,88.001,55L88.001,55z", {
        opacity: "0.06"
    });
    svg.path(g, "M12,6h76c3.312,0,6,2.687,6,6v36c0,3.312-2.688,6-6,6H12c-3.313,0-6-2.688-6-6V12C6,8.687,8.687,6,12,6z", {
        fill: "#999999"
    });
    svg.path(g, "M88.001,52h-76C9.793,52,8,50.206,8,47.999V12c0-2.205,1.794-3.999,4.001-3.999h76C90.206,8.001,92,9.795,92,12v35.999C92,50.206,90.206,52,88.001,52L88.001,52z", {
        fill: "#FFFFFF"
    });
    svg.text(g, 33, 35, "Activity", {
        'writing-mode': "tb",
        'font-weight': "bold"
    });
    
}


//activity
function activity(){
    activity_task();
    activity_coll_sp();
    activity_exp_sp();
    ///draw_activity();
}

//---------------------------------------------------
function activity_task(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("activity_task");
    var g = svg.group("activity_task", {
        onclick: "draw_activity();",
        cursor: "pointer",
        transform: 'translate(516, 160)'
    });
    svg.rect(g, 0, 0, 24, 24, {
    
        fill: "#ccc",
    
    });
    svg.rect(g, 5.001, 5.001, 13.998, 13.998, {
        opacity: "0.2"
    
    });
    svg.path(g, "M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h10c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3zM18.999,17.001c0,1.103-0.896,1.998-1.998,1.998H6.999c-1.102,0-1.998-0.896-1.998-1.998V6.999c0-1.102,0.896-1.998,1.998-1.998h10.002c1.103,0,1.998,0.896,1.998,1.998V17.001z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
    
}

function activity_coll_sp(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("activity_coll_sp");
    var g = svg.group("activity_coll_sp", {
    
        transform: 'translate(516, 186)'
    });
    svg.rect(g, 0, 0, 24, 24, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.rect(g, 8, 8, 8, 8, {
        opacity: "0.2",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    
    });
    svg.path(g, "M20,6v2h2V6H20z M17,4h2V2h-2V4z M6,4h2V2H6V4z M16,22h2v-2h-2V22z M6,22h2v-2H6V22z M20,18h2v-2h-2V18z M2,18h2v-2H2V18z M2,8h2V6H2V8z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
    svg.path(g, "M6,6v12h12V6H6z M16.001,16.001H8V8h8V16.001z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
    svg.polygon(g, [[15, 11], [13, 11], [13, 9], [11, 9], [11, 11], [9, 11], [9, 13], [11, 13], [11, 15], [13, 15], [13, 13], [15, 13]], {
    
        'fill-rule': "evenodd",
        fill: "#FFFFFF",
        'clip-rule': "evenodd"
    });
    
    
}

function activity_exp_sp(){
    var svg = jQuery('#svgintro').svg('get');
    svg.describe("activity_exp_sp");
    var g = svg.group("activity_exp_sp", {
    
        transform: 'translate(516, 212)'
    });
    svg.rect(g, 0, 0, 24, 24, {
    
        cursor: "pointer",
        fill: "#ccc",
    
    });
    svg.rect(g, 8, 8, 8, 8, {
        opacity: "0.2",
        'fill-rule': "evenodd",
        'clip-rule': "evenodd"
    
    });
    svg.path(g, "M20,6v2h2V6H20z M17,4h2V2h-2V4z M6,4h2V2H6V4z M16,22h2v-2h-2V22z M6,22h2v-2H6V22z M20,18h2v-2h-2V18z M2,18h2v-2H2V18z M2,8h2V6H2V8z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
    svg.path(g, "M6,6v12h12V6H6z M16.001,16.001H8V8h8V16.001z", {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        fill: "#FFFFFF"
    });
    
    
}

//---------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

function c_menu(){

    jQuery('#svgintro').contextMenu({
        menu: 'myMenu'
    }, function(action, el, pos){
        alert('Action: ' + action + '\n\n' +
        'Element ID: ' +
        jQuery(el).attr('id') +
        '\n\n' +
        'X: ' +
        pos.x +
        '  Y: ' +
        pos.y +
        ' (relative to element)\n\n' +
        'X: ' +
        pos.docX +
        '  Y: ' +
        pos.docY +
        ' (relative to document)');
    });
    
}

function test(){

    jQuery('#add_point_active').remove();
    
}
