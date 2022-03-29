import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
var firebaseConfig = {
    apiKey: "AIyaSyAnbiYMGExQslJ9styiklG-WPIp6vFBIbE",
    authDomain: "sictc-career-fair.firebaseapp.com",
    projectId: "sictc-career-fair",
    storageBucket: "sictc-career-fair.appspot.com",
    messagingSenderId: "513234127322",
    appId: "1:513434627352:web:bc29fecd5ceeea674b3943",
    measurementId: "G-1GKEYRNJXY",
    databaseURL: "https://sictc-career-fair-default-rtdb.firebaseio.com/"
    };
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}
function getRef(){
    database.ref("Items").on('value', (snapshot) => {
        document.getElementById("body-output").innerHTML = "";
        const data = snapshot.val();
        var items = Object.values(data);
        for (let l in items){
            addCard(items[l]);
        }
    });
}