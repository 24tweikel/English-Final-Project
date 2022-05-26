function Continue_home_click() {

    try {

        window.location.href = 'pageone.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pageone_click() {

    try {

        window.location.href = 'pagetwo.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pageone_click() {

    try {

        window.location.href = 'index.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagetwo_click() {

    try {

        window.location.href = 'pageone.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pagetwo_click() {

    try {

        window.location.href = 'pagethree.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pagethree_click() {

    try {

        window.location.href = 'pagefour.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagethree_click() {

    try {

        window.location.href = 'pagetwo.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagefour_click() {

    try {

        window.location.href = 'pagethree.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Continue_pagefour_click() {

    try {

        window.location.href = 'pagefive.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Back_pagefive_click() {

    try {

        window.location.href = 'pagefour.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }

}

function Home_pagefive_click() {

  try {

        window.location.href = 'index.php';
        
    } catch (error) {

        window.location.href = 'error.php';
        document.getElementById("err").innerHTML = "Error: " + error;
        
    }
  
}