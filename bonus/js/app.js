const { createApp } = Vue;
const { DateTime } = luxon

createApp({
  data() {
    return {
      active: 0,
      user_msg: "",
      filter: "", // when user writes in input, search method check if name's contact includes the text wrote
      answers: [
         {
           type: "text",
           theme: "Come vuoi"
         },
         {
           type: "text",
           theme: "Non so di cosa stai parlando"
         },
         {
           type: "text",
           theme: "Ahahahahahhahah 😂"
         },
        //{
        //   type: "text",
        //   theme: "Scusa ma chi sei?"
        // },
        // {
        //   type: "text",
        //   theme: "Ti scrivo dopo, ora non posso"
        // },
        // {
        //   type: "text",
        //   theme: "Sto cercando di fixare il codice, ci sentiamo dopo"
        // },
        // {
        //   type: "text",
        //   theme: "Mmh mi sa che hai sbagliato numero"
        // },
        {
          type: "text",
          theme: "È tutta colpa delle scie chimiche"
        },
        {
          type: "gif",
          src: "https://i.pinimg.com/originals/0c/64/9a/0c649a17ec1e5f5ca340248b4ef4e4be.gif"
        },
        {
          type: "gif",
          src: "https://i.pinimg.com/originals/9d/97/d3/9d97d38e98836d33d1802cbc777ef7e0.gif"
        },
        {
          type: "text",
          src: "Ma in che senso?"
        },
        
      ],
      // answers: [
      //   "Come vuoi",
      //   "Non so di cosa stai parlando",
      //   "Ahahahahahhahah 😂",
      //   "Ok...",
      //   "Ti scrivo dopo, ora non posso",
      //   "Guarda, preferirei chiamarti se posso",
      //   "Scusa ma chi sei?",
      //   "Ti avevo chiesto di non scrivermi",
      //   "Si stava meglio quando si stava peggio",
      //   "Sto cercando di fixare questo codice, ci sentiamo dopo",
      //   "Ma in che senso?",
      //   "È tutta colpa delle scie chimiche",
      //   "Ancora tu? Devo fare pulizia kontatti mi sa",
      //   "Mmh mi sa che hai sbagliato numero"
      // ],
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              type: "text",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              type: "text",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              type: "text",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              type: "text",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              type: "text",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              type: "text",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              type: "text",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              type: "text",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              type: "text",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              type: "text",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              type: "text",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              type: "text",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              type: "text",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              type: "text",
              status: "received",
            },
          ],
        },
        {
          name: "Simone",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 19:30:55",
              message: "Mi ricordi quando compi gli anni?",
              type: "text",
              status: "received",
            },
            {
              date: "10/01/2020 19:50:00",
              message: "Seriamente non ti ricordi...?",
              type: "text",
              status: "sent",
            },
            {
              date: "10/01/2020 19:51:00",
              message: "Ops",
              type: "text",
              status: "received",
            },
          ],
        }        
      ],
      // empty array for timeouts of send() function
      timeoutArray: [],
      emoticonArray: [
        "😀",
        "😁",
        "😂",
        "😃",
        "😄",
        "😅",
        "🤢",
        "😆",
        "😇",
        "😈",
        "😉",
        "😊",
        "😍",
        "😎",
        "😐",
        "😓",
        "😡",
        "😤",
        "😭",
        "😱",
        "😵",
        "🥰",
        "🤯",
        "🙈",
        "🙉",
        "🙊",
        "💀",
        "🙏",        
        "👾",
        "🤡"
      ]
    };
  },
  methods: {
    dateWithoutSec(dateToFormat) {
      // select second element of the array resulting from the split
      return dateToFormat.split(" ")[1].slice(0, 5);
    },
    hours() {
      return DateTime.now().toFormat("HH:mm")
    },
    randomAnswers() {
      const random = Math.floor(Math.random() * this.answers.length)
      let pcAnswer = this.answers[random]
      // return object with random type + if text, print text; if gif, print path
      return {
        type: pcAnswer.type,
        message: pcAnswer.type === "text" ? pcAnswer.theme : pcAnswer.src
      }
    },
    openChat(i) {
      //clear all timeouts
      this.stopTimeOut()
      this.active = i;
    },
    send() {
      const todayDate = DateTime.now().toFormat("dd/mm/yyyy HH:mm")
      let today = this.hours()
      let user_message = {
        message: this.user_msg,
        status: "sent",
        date: todayDate,
        type: "text"
      }
      // let pc_message = {
      //   message: this.randomAnswers(),
      //   status: "received",
      //   date: todayDate
      // }
      // random object
      let pc_message = this.randomAnswers()
      if (!this.user_msg == "") {
        this.contacts[this.active].messages.push(user_message)
        // active contact shifted on top
        this.activeContactTop(this.active)
        // status
        this.addresseeStatus("Online")
        // scroll
        this.scrollToBottom()
        // push into timeout array
        this.timeoutArray.push(setTimeout(() => {
          this.scrollToBottom()
        }, 100))
        this.timeoutArray.push(setTimeout(() => {
          this.addresseeStatus("Sta scrivendo...")
        }, 2000))        
        this.timeoutArray.push(setTimeout(() => {
          this.addresseeStatus("Online")
          //object pushed
          this.contacts[this.active].messages.push({
            message: pc_message.message,
            status: "received",
            date: todayDate,
            // random type
            type: pc_message.type
          })       
        }, 3000))
        this.timeoutArray.push(setTimeout(() => {
          this.scrollToBottom()          
        }, 3100))        
        this.timeoutArray.push(setTimeout(() => {          
          this.addresseeStatus("Ultimo accesso oggi alle " + today);
        }, 4000))
      }
      this.user_msg = "";
    },
    search(contact) {
      // code below is TRUE ? return it and show filtered li : hide filtered li
      return contact.name.toLowerCase().includes(this.filter.toLowerCase())
      // filter = "" => in absence of filters, all contacts'll be shown, because condition is always true
    },
    // clearTimeOut
    stopTimeOut() {
      this.timeoutArray.forEach(timeout => clearTimeout(timeout))
      this.timeoutArray = []
    },
    // when user writes in a specific chat, remove that active contact from list and put it on 0 position with unshift array method
    activeContactTop(i) {
      const activeContact = this.contacts.splice(i, 1)[0]
      this.contacts.unshift(activeContact)
      this.active = 0
    },
    // Delete message function
    deleteMessage(i) {
      if(confirm("Sicuro di voler cancellare il messaggio?")) {
        this.contacts[this.active].messages[i].message = "Questo messaggio è stato eliminato."
      }
    },
    // Optimization function: addressee status tracking
    addresseeStatus(status) {
      document.getElementById("waiting").innerHTML = status;
    },
    // Scrollbar function
    scrollToBottom() {
        this.$refs.bottomEl?.scrollIntoView({ behavior: 'smooth' })
    },
    emojiSelection(em) {
      this.user_msg += em
      let input = document.getElementById("inputMessage")
      input.focus()
    } 
  },
}).mount("#app");