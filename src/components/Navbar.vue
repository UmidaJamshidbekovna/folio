<script setup>
    import navLogo from '@/assets/navLogo.jpg'

    import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <section class="py-4">
        <div class="mx-auto max-w-7xl flex items-center justify-between">
            <div class="nav-img w-40 cursor-pointer" >
                <img :src="navLogo" alt="">
            </div>
            <div>
               <nav class="hidden md:flex space-x-6">
                  <RouterLink to="/" class="cursor-pointer">About</RouterLink>
                  <RouterLink to="/work" class="cursor-pointer">Work</RouterLink>
                  <RouterLink to="/services" class="cursor-pointer">Services</RouterLink>
                  <RouterLink to="/jobs" class="cursor-pointer">Jobs</RouterLink>
               </nav>
            </div>
            <div>
                <button class=" text-white bg-[#232340] px-9 py-2 rounded cursor-pointer">
                    Contact Us
                </button>
            </div>
        </div>
    </section>
    <RouterView/>
</template>