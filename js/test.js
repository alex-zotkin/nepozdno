new Vue({
    el: "#test_win", 
    data: {
        characters: [0, 0, 0, 0, 0, 0, 0], //джон 0,
                                            //ева 1, 
                                            //прошлое 2, 
                                            //наст 3, 
                                            //буд 4, 
                                            //предвестник 5, 
                                            //боб 6


        about_characters: [
            { 
                info: "Ты <b>ДЖОН ДОУ</b> <br> - плейбой, миллионер, манипулятор и абьюзер. <br><br> Тебе стоит поберечь нервы и, наконец-то, пойти на психотерапию",
                image: "/actors/john.png"
            },
            { 
                info: "Ты <b>ЕВА</b> <br> - милая девушка, но очень запуганная. <br><br> Тебе стоит тщательнее выбирать круг общения, дорогая",
                image: "/actors/eva.png"
            },
            { 
                info: "Ты <b>ПРОШЛОЕ</b> <br> - странное, кринжовое, но очень светлое. <br><br> Ты даришь людям позитив!.. Ну, чаще всего...",
                image: "/actors/past.png"
            },
            { 
                info: "Ты <b>НАСТОЯЩЕЕ</b> <br>  Ты не особо понимаешь чего хочешь. <br><br> Не останавливайся! И всё обязательно получится",
                image: "/actors/present.png"
            },
            { 
                info: "Ты <b>БУДУЩЕЕ</b> <br> Ты нечто загадочное... <br><br> Люди, скорее всего, боятся тебя... Но ты даришь им надежду",
                image: "/actors/future.png"
            },
            { 
                info: "Ты <b>ПРЕДВЕСТНИК</b> <br> - трудоголик. <br><br> Хочешь сделать мир лучше. Работаешь на 2х работах, побереги себя...",
                image: "/actors/predvestnik.png"
            },
            { 
                info: "Ты <b>БОБ</b> <br> - королева драмы. <br><br> Тебе давным давно нужно бросить работу и пойти на терапию.",
                image: "/actors/bob.png"
            }
        ],                                 

        cur_question: 0,
        questions: [
            {
                qmain: "Тест кто ты из весны ГЕОВШБ «Не поздно»?",
                image: "/test/start.gif",
                qall: [
                    [
                        "Начать", 
                        []
                    ],
                ] 
                
            },

            {
                qmain: "Тебя просят помочь незнакомому человеку. Сможешь?",
                image: "/test/q1.gif",
                qall: [
                    [
                        "А что мне за это будет?", 
                        [0, 3]
                    ],

                    [
                        "Помощь нужна мне", 
                        [1]
                    ],

                    [
                        "Конечно помогу", 
                        [2, 4, 5]
                    ],

                    [
                        "Безудержный плач", 
                        [6]
                    ],
                ] 
                
            },


            {
                qmain: "Как ты ведешь себя в стрессовой ситуации?",
                image: "/test/q2.gif",
                qall: [
                    [
                        "Игнорирую проблему", 
                        [4, 3]
                    ],

                    [
                        "Смеюсь", 
                        [2, 5]
                    ],

                    [
                        "Агрессирую", 
                        [0]
                    ],

                    [
                        "Безудержный плач", 
                        [6, 1]
                    ],
                ] 
                
            },

            {
                qmain: "Какой из элементов одежды ты бы выбрал?",
                image: "/test/q3.png",
                qall: [
                    [
                        "Часы на цепочке", 
                        [2, 5]
                    ],

                    [
                        "Пиджак в клетку", 
                        [3]
                    ],

                    [
                        "Лакированные туфли", 
                        [4, 0]
                    ],

                    [
                        "Сиреневый платок", 
                        [1, 6]
                    ],
                ] 
                
            },

            {
                qmain: "Какую песню ты включишь в долгом пути?",
                image: "/test/q4.gif",
                qall: [
                    [
                        "Максим - Знаешь ли ты", 
                        [1, 2]
                    ],

                    [
                        "Анна Асти - По барам", 
                        [3, 4]
                    ],

                    [
                        "Игорь Житников - Последний снег", 
                        [5, 6]
                    ],

                    [
                        "Любое выступление НЕПОЮЩИХ", 
                        [0, 3]
                    ],
                ] 
                
            },

            {
                qmain: "С чего вы обычно начинаете своё утро?",
                image: "/test/start.gif",
                qall: [
                    [
                        "Конечно же с работы", 
                        [1, 2]
                    ],

                    [
                        "C желания кому-нибудь «насолитьь»", 
                        [3, 4]
                    ],

                    [
                        "С сожалений, что не ушёл в отпуск", 
                        [5, 6]
                    ],

                    [
                        "С уборки любимого офиса", 
                        [0, 3]
                    ],
                ] 
                
            },

            {
                qmain: "Ты ДЖОН ДОУ <br> Манипулятор",
                image: "/actors/john.png",
                qall: [
                    [
                        "Начать заново", 
                        -1
                    ],
                ] 
                
            },
        ],
    }, 
    methods: {
        inc: function(arr){
            if(arr == -1){
                this.cur_question = 1;
                this.characters = [0, 0, 0, 0, 0, 0, 0];
                return;
            }

            for(let i = 0; i < arr.length; i += 1){
                let index = arr[i];
                this.characters[index] += 1;
            }

            this.cur_question += 1;


            if(this.cur_question == this.questions.length - 1){
                /*let max_int = Math.max(...this.characters);
                let select = [];

                this.characters.forEach((el, index) => {
                    if(el == max_int){
                        select.push(index)
                    }
                });

                let final_index = select[Math.floor(Math.random() * select.length)];

                this.questions[this.questions.length - 1].qmain = this.about_characters[final_index].info;
                this.questions[this.questions.length - 1].image = this.about_characters[final_index].image;
            
                console.log(select, final_index);*/

                let final_index = Math.floor(Math.random() * this.characters.length);

                this.questions[this.questions.length - 1].qmain = this.about_characters[final_index].info;
                this.questions[this.questions.length - 1].image = this.about_characters[final_index].image;
            
            }
        }
    }
});