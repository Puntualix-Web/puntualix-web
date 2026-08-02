<script setup>
// Sin lógica — solo estructura reutilizable con slot.
// El fondo institucional y la tarjeta flotante son el "molde" que
// comparten todas las pantallas del módulo de autenticación.
</script>

<template>
    <div class="pantalla-auth">
        <!-- Fondo institucional decorativo (foto SENA) — aria-hidden porque no aporta información para lectores de pantalla -->
        <div class="fondo-institucional" aria-hidden="true"></div>

    <!-- Tarjeta flotante blanca: el contenido varía según qué vista use este componente -->
    <article class="tarjeta-flotante">
        <slot></slot>
        <!-- ↑ aquí Vue inyecta el contenido específico de cada pantalla que use <TarjetaFlotante> -->
        </article>
    </div>
</template>

<style scoped>
/* vacío por ahora — estilos pendientes para la fase de CSS */
</style>