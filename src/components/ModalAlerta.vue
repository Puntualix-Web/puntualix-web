<!-- SRC/components/ModalAlerta.vue-->
<script setup>
//DenfieProps: Delcara que datos le puede pasar cada vista que use este modal.
// Esto no es 'logigca de validacion', es solo la conexion de datos
//el mensaje real lo decide quien use el componente, no este archivo 
defineProps({
    mensaje: {
        type: String,
        required: true
    }
})
</script>

<template>
<!-- Fondo oscurecido que cubre toda la pantalla detrás del modal -->
    <div class="modal-overlay">
    <!-- Tarjeta del modal -->
        <div class="modal-alerta" role="alertdialog" aria-live="assertive">
            <!-- Ícono de advertencia -->
            <div class="modal-icono" aria-hidden="true">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>

    <!-- Mensaje: viene desde la vista que use este componente -->
    <p class="modal-mensaje">{{ mensaje }}</p>
        </div>
    </div>
</template>

<style scoped>
/* vacío por ahora — estilos pendientes para la fase de CSS */
</style>