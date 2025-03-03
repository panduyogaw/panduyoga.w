<template>
    <section id="contact" class="mt-32">
      <SectionHeader title="Contact Me" />
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form @submit.prevent="submitForm" class="space-y-8">
          <div v-for="(item, index) in inputs" :key="index">
            <Input
              :id="item.id"
              :label="item.label"
              :type="item.type"
              v-model="formData[item.id]"
              :placeholder="item.placeholder"
              :rows="item.rows"
            />
          </div>
          <div class="flex justify-between">
            <Button label="Send" />
            <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
              <a href="https://www.linkedin.com/in/pandu-yoga-wibowo-8970a2243/" class="text-gray-600 hover:text-blue-500">
                <Icon icon="fa-brands:linkedin" style="font-size: 2rem;" />
              </a>
              <a href="https://www.instagram.com/panduyogaw_/" class="text-gray-600 hover:text-red-500">
                <Icon icon="fa-brands:instagram" style="font-size: 2rem;" />
              </a>
              <a href="https://github.com/panduyogaw" class="text-gray-600 hover:text-yellow-500">
                <Icon icon="fa-brands:github" style="font-size: 2rem;" />
              </a>
            </div>
          </div>
        </form>
  
        <!-- Pesan Sukses -->
        <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
        <!-- Pesan Error -->
        <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
      </div>
    </section>
  </template>
  
  <script setup>
  import SectionHeader from "../UI/SectionHeader.vue";
  import Button from "../UI/Button.vue";
  import Input from "../UI/Input.vue";
  import { ref } from "vue";
  
  // Data form yang akan dikirim
  const formData = ref({
    email: "",
    subject: "",
    message: "",
  });
  
  // Pesan untuk respon Formspree
  const successMessage = ref("");
  const errorMessage = ref("");
  
  // Fungsi untuk mengirim form ke Formspree
  const submitForm = async () => {
    console.log("Data yang dikirim:", formData.value);
  
    // Cek apakah ada input yang kosong sebelum dikirim
    if (!formData.value.email || !formData.value.subject || !formData.value.message) {
      errorMessage.value = "All fields are required.";
      successMessage.value = "";
      return;
    }
  
    try {
      const response = await fetch("https://formspree.io/f/xldgqoly", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      });
  
      const result = await response.json();
      console.log("Response:", result);
  
      if (response.ok) {
        successMessage.value = "Your message has been sent!";
        errorMessage.value = "";
        formData.value = { email: "", subject: "", message: "" }; // Reset form setelah berhasil
      } else {
        errorMessage.value = result.error || "Failed to send message.";
        successMessage.value = "";
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage.value = "An error occurred. Please try again.";
      successMessage.value = "";
    }
  };
  
  // Input data untuk form
  const inputs = ref([
    {
      id: "email",
      label: "Your Email",
      type: "email",
      placeholder: "example@gmail.com",
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Let us know how we can help you",
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Leave a message",
      rows: 4,
    },
  ]);
  </script>
  