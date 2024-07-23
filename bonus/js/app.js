const { createApp } = Vue;
const { DateTime } = luxon

createApp({
  data() {
    return {
      active: 0,
      user_msg: "",
      filter: "", // when user writes in input, search method check if name's contact includes the text wrote
      answers: [
        "Come vuoi",
        "Non so di cosa stai parlando",
        "😂",
        "Ok...",
        "Ti scrivo dopo, ora non posso",
        "Guarda, preferirei chiamarti se posso",
        "Scusa ma chi sei?",
        "Ti avevo chiesto di non scrivermi più",
        "Si stava meglio quando si stava peggio",
        "Sto cercando di fixare questo codice, ci sentiamo dopo",
        "Ma in che senso?",
        "L'erba del vicino è sempre più buona",
        "È tutta colpa delle scie chimiche",
        "Non cie lo dikono!1!!.1!",
        "Ancora tu? Devo fare pulizia kontatti"
      ],
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
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
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
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
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
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
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
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
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
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
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
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
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
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
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
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
              status: "received",
            },
            {
              date: "10/01/2020 19:50:00",
              message: "Seriamente non ti ricordi...?",
              status: "sent",
            },
            {
              date: "10/01/2020 19:51:00",
              message: "Ops",
              status: "received",
            },
          ],
        }        
      ],
      // empty array for timeouts of send() function
      timeoutArray: []
    };
  },
  methods: {
    dateWithoutSec(el) { // date format function used in html
      return el.split(" ")[1].slice(0, 5);
    },
    hours() {
      return DateTime.now().toFormat("HH:mm")
    },
    randomAnswers() {
      const random = Math.floor(Math.random() * this.answers.length)
      return this.answers[random]
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
        date: todayDate
      }
      let pc_message = {
        message: this.randomAnswers(),
        status: "received",
        date: todayDate
      }
      if (!this.user_msg == "") {
        this.contacts[this.active].messages.push(user_message)
        // active contact shifted on top
        this.activeContactTop(this.active)
        // status
        this.addresseeStatus("Online")
        // push into timeout array
        this.timeoutArray.push(setTimeout(() => {
          this.addresseeStatus("Sta scrivendo...")
        }, 2000))
        
        this.timeoutArray.push(setTimeout(() => {
          this.addresseeStatus("Online")
          this.contacts[this.active].messages.push(pc_message)
        }, 3000))
        
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
  },
}).mount("#app");