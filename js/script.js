const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList: [
                {
                    text: "Seguire la lezione mattutina",
                    done: false
                },

                {
                    text: "Preparare il pranzo",
                    done: false
                },


                {
                    text: "Pranzare",
                    done: false
                },

                {
                    text: "Completare l'esercizio",
                    done: false
                },

                {
                    text: "Fare la spesa",
                    done: false
                },

                {
                    text: "Fare la lavatrice",
                    done: false
                },

                {
                    text: "Ponderare la sfera",
                    done: false
                },

                {
                    text: "Lavare il pavimento",
                    done: false
                },

                {
                    text: "Preparare la cena",
                    done: false
                },

                {
                    text: "Cenare",
                    done: false
                },

                {
                    text: "Venerare il dio-macchina",
                    done: false
                },

                {
                    text: "Prepararsi per andare a dormire",
                    done: false
                },

                {
                    text: "Leggere un libro",
                    done: false
                },

                {
                    text: "Addormentarsi",
                    done: false
                },

            ]
        }
    },

    methods: {

    }
}).mount("#app");