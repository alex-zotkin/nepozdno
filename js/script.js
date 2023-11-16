gsap.registerPlugin(TextPlugin);

gsap.to("#load_text", {
    duration: 2,
    text: {
        value: "Загрузка студ. весны ГЕОВШБ <br> «НЕ ПОЗДНО»...",
        delimiter: ""
    },
    ease: "none"
});

setTimeout(function(){
    $(".load").hide();
}, 3500);






function open_window(name){
    this.close_windows();
    $("#window_loader").show();

    setTimeout(function(){
        $("#" + name + "_win").css("display", "flex");
        $("#window_loader").hide();
    }, 500);
    
}

function close_windows(){
    $("#otchet_win").hide();
    $("#internet_win").hide();
    $("#test_win").hide();
}




new Vue({
    el: ".notif_vue",
    data: {
        rand: 0,
        phrases: [
            "«Не поздно» - моя любимая студвесна",
            "Какой он был на вкус?",
            "Кто подставил кролика Роджера?",
            "Пора назад в будущее",
            "3 секунды ментальной стабильности",

            "Джон Доу. Характер скверный. Не женат.",
            "Бэби донт херт ми",
            "Сироп, сироп, сироп…",
            "Итог: неисправим",
            "Все по заветам деда"
        ],

        show_hint: 1,

        timer: 0
    }, 
    methods: {
        clippy_click: function(){
            this.show_hint = 0;
            clearTimeout(this.timer);
            /*let new_rand = Math.floor(Math.random() * (this.phrases.length));
            while(new_rand == this.rand){
                new_rand = Math.floor(Math.random() * (this.phrases.length));
            }*/

            this.rand = (this.rand + 1) % this.phrases.length;
            
            $("#notif").fadeIn();
            
            
            this.timer = setTimeout(function(){
                $("#notif").fadeOut();
            }, 3500);
        }
    }
});



