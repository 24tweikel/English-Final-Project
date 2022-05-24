function Continue_home_click() {

    try {

        window.location.href = 'pageone.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pageone_click() {

    try {

        window.location.href = 'pagetwo.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pageone_click() {

    try {

        window.location.href = 'home.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagetwo_click() {

    try {

        window.location.href = 'pageone.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pagetwo_click() {

    try {

        window.location.href = 'pagethree.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pagethree_click() {

    try {

        window.location.href = 'pagefour.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagethree_click() {

    try {

        window.location.href = 'pagetwo.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagefour_click() {

    try {

        window.location.href = 'pagethree.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pagefour_click() {

    try {

        window.location.href = 'pagefive.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagefive_click() {

    try {

        window.location.href = 'pagefour.html';
        
    } catch (error) {

        window.location.href = 'error.html';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}