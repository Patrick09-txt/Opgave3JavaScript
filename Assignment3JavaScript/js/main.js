const app = Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
            message: null,
            message1: null,
            message2: null
        }
    },
    methods: {
        show(word) {
            this.words.push(word)

            if (this.words == null || this.words.length == 0) {
                this.message = "empty"
            }
            else {
                this.message = this.words.toString()
                this.message1 = this.words.toString().toLowerCase()
                this.message2 = this.words.toString().toUpperCase()
            }
        }
    }
}).mount("#app")