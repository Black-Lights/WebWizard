<!-- Chatbot.vue -->

<template>
  <div>
    <v-btn @click="openChat" icon large class="chatbot-btn">
      <v-icon>mdi-chat</v-icon>
    </v-btn>

    <v-dialog v-model="isChatOpen" persistent max-width="500px" scrollable>
      <v-card class="chatbot">
        <v-card-title>
          Light
          <v-spacer></v-spacer>
          <v-btn icon @click="closeChat">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-list class="chatbox" ref="chatbox">
            <v-list-item v-for="(message, index) in messages" :key="index" :class="message.type === 'outgoing' ? 'chat-outgoing' : 'chat-incoming'">
              <v-list-item-content>
                <v-list-item-title v-html="message.content"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-text-field v-model="userMessage" label="Type a message..." outlined></v-text-field>
          <v-btn @click="sendMessage" color="primary">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
      messages: JSON.parse(localStorage.getItem('chatMessages')) || [],
      isChatOpen: false
    };
  },
  methods: {
    openChat() {
      this.isChatOpen = true;
      this.scrollToBottom();
    },
    closeChat() {
      this.isChatOpen = false;
      this.saveMessages();
    },
    sendMessage() {
      if (this.userMessage.trim() === '') return;
      this.messages.push({ type: 'outgoing', content: this.userMessage });
      this.scrollToBottom();
      this.generateResponse();
      this.userMessage = ''; // Clear input after sending message
    },
    generateResponse() {
      const API_URL = 'https://api.openai.com/v1/chat/completions';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: "You are a helpful assistant and your name is Light.  Answer the user in an engaging conversation style. Answer the question within the domain of the document, delimited by #### and produce the answer in engaging conversation style and ask the relevant question to the user. Respond with \"It is out of my domain!\" if the question is not within the domain of the information in the document. Be very precise and specific. Refrain up to 50 token while answering.  \n" +
                "\n" +
                "####\n" +
                "You need to answer the questions to provide emotional support for the organization which offer support to women in difficulty and involved in situations of violence and  family maltreatment.  \n" +
                "\n" +
                "Example: How Can you help me ? \n" +
                "Example: I am being abused. what can I do? \n" +
                "Example: What Services are you providing?\n" +
                "\n" +
                "####"
            },
            {
              role: 'user',
              content: this.userMessage
            }
          ]
        })
      };

      fetch(API_URL, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const responseMessage = data.choices[0].message.content;
          this.messages.push({ type: 'incoming', content: responseMessage });
          this.scrollToBottom();
        })
        .catch(error => {
          console.error('Error fetching OpenAI response:', error.message);
          this.messages.push({ type: 'incoming', content: 'Oops! Something went wrong. Please try again!' });
          this.scrollToBottom();
        });
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatbox = this.$refs.chatbox;
        chatbox.scrollTop = chatbox.scrollHeight;
      });
    },
    saveMessages() {
      localStorage.setItem('chatMessages', JSON.stringify(this.messages));
    }
  },
  watch: {
    messages: {
      handler: 'saveMessages',
      deep: true
    }
  }
};
</script>

<style scoped>
.chatbot-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.chatbot {
  width: 100%;
}

.chat-outgoing {
  text-align: right;
  margin-bottom: 10px;
}

.chat-incoming {
  text-align: left;
  margin-bottom: 10px;
}
</style>



<!--&lt;!&ndash; Chatbot.vue &ndash;&gt;-->

<!--<template>-->
<!--  <v-card class="chatbot">-->
<!--    <v-card-title>Chatbot</v-card-title>-->
<!--    <v-card-text>-->
<!--      <v-list class="chatbox" ref="chatbox">-->
<!--        <v-list-item v-for="(message, index) in messages" :key="index" :class="message.type === 'outgoing' ? 'chat-outgoing' : 'chat-incoming'">-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title v-html="message.content"></v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-card-text>-->
<!--    <v-card-actions>-->
<!--      <v-text-field v-model="userMessage" label="Type a message..." outlined></v-text-field>-->
<!--      <v-btn @click="sendMessage" color="primary">Send</v-btn>-->
<!--    </v-card-actions>-->
<!--  </v-card>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      userMessage: '',-->
<!--      messages: []-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    sendMessage() {-->
<!--      this.messages.push({ type: 'outgoing', content: this.userMessage });-->
<!--      this.scrollToBottom();-->
<!--      this.generateResponse();-->
<!--      this.userMessage = ''; // Clear input after sending message-->
<!--    },-->
<!--    generateResponse() {-->
<!--      const API_URL = 'https://api.openai.com/v1/chat/completions';-->
<!--      const requestOptions = {-->
<!--        method: 'POST',-->
<!--        headers: {-->
<!--          'Content-Type': 'application/json',-->
<!--          'Authorization': `Bearer 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`-->
<!--        },-->
<!--        body: JSON.stringify({-->
<!--          model: 'gpt-3.5-turbo',-->
<!--          messages: [-->
<!--            {-->
<!--              role: 'system',-->
<!--              content: "You are a helpful assistant and your name is Light.  Answer the user in an engaging conversation style. Answer the question within the domain of the document, delimited by #### and produce the answer in engaging conversation style and ask the relevant question to the user. Respond with \"It is out of my domain!\" if the question is not within the domain of the information in the document. Be very precise and specific. Refrain up to 50 token while answering.  \n" +-->
<!--                "\n" +-->
<!--                "####\n" +-->
<!--                "You need to answer the questions to provide emotional support for the organization which offer support to women in difficulty and involved in situations of violence and  family maltreatment.  \n" +-->
<!--                "\n" +-->
<!--                "Example: How Can you help me ? \n" +-->
<!--                "Example: I am being abused. what can I do? \n" +-->
<!--                "Example: What Services are you providing?\n" +-->
<!--                "\n" +-->
<!--                "####"-->
<!--            },-->
<!--            {-->
<!--              role: 'user',-->
<!--              content: this.userMessage-->
<!--            }-->
<!--          ]-->
<!--        })-->
<!--      };-->

<!--      fetch(API_URL, requestOptions)-->
<!--        .then(response => {-->
<!--          if (!response.ok) {-->
<!--            throw new Error('Network response was not ok');-->
<!--          }-->
<!--          return response.json();-->
<!--        })-->
<!--        .then(data => {-->
<!--          const responseMessage = data.choices[0].message.content;-->
<!--          this.messages.push({ type: 'incoming', content: responseMessage });-->
<!--          this.scrollToBottom();-->
<!--        })-->
<!--        .catch(error => {-->
<!--          console.error('Error fetching OpenAI response:', error.message);-->
<!--          this.messages.push({ type: 'incoming', content: 'Oops! Something went wrong. Please try again!' });-->
<!--          this.scrollToBottom();-->
<!--        });-->
<!--    },-->
<!--    scrollToBottom() {-->
<!--      const chatbox = this.$refs.chatbox;-->
<!--      chatbox.scrollTop = chatbox.scrollHeight;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.chat-outgoing {-->
<!--  text-align: right;-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--.chat-incoming {-->
<!--  text-align: left;-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--</style>-->
