var states = {
    AndhraPradesh: ["Nellore" , "Chittor" , "Guntur"],
    Telegana: ["Hyderabad" , "Warangal" , "Khammam"],
    Tamilnadu: ["Vellore" , "Thiruvallur" , "Kancheepuram" ]
}

var main =document.getElementById('main_menu');
var sub =document.getElementById('sub_menu');

main.addEventListener('change', function(){
    var selected_option = states[this.value];
    this.webkitMatchesSelector
    while(sub.options.length > 0){
        sub.options.remove(0);
    }

    Array.from(selected_option).forEach(function(n1){
        let option = new Option(n1,n1);
        sub.appendChild(option);
    });
    
});