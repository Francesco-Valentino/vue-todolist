const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList: [
                {
                    text: "Seguire la lezione mattutina",
                    done: true
                },

                {
                    text: "Preparare il pranzo",
                    done: true
                },


                {
                    text: "Pranzare",
                    done: true
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
                    done: true
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
            ],

            todoElement: "",
        }
    },

    methods: {
        removeTodoElement(elementIndex){
            this.todoList.splice(elementIndex, 1);
        },

        addTodoElement(){
            if (this.todoElement !== ""){
                this.todoList.push({"text": this.todoElement, "done": false});
                this.todoElement = "";
            }
        },

        invertTask(){
            if(this.todoElement.done === false){
                this.todoElement.done = true;
            } else{
                this.todoElement.done = false;
            }
        }
    }
}).mount("#app");