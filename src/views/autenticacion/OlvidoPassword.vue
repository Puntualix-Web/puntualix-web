<script setup>
import TarjetaFlotante from '@/components/TarjetaFlotante.vue'
import ModalAlerta from '@/components/ModalAlerta.vue'
</script>

<template>
    <main class="pantalla-olvido-password">

        <!-- Estado1: Solicitar correo -->
        <TarjetaFlotante>
            <header>
                <div class="icono-marca" aria-hidden="true">
                    <img src="" alt=""/>
                </div>
                <h2 id="titulo-olvido-password">¿Has olvidado tu contraseña?</h2>
                <p>
                    Ingresa tu correo electronico y te enviaremos un elace que te permitira establecer un nueva contraseña
                </p>
            </header>


            <form>
                <div class="formulario-agrupado">
                    <label for="correo-recuperacion">Correo institucional</label>
                    <input
                        id="correo-recuperacion"
                        name="correo-recuperacion"
                        type="email"
                        placeholder="Ingresa tu correo institucional"
                        required
                    />

                    <p class="mensaje-error">
                        El correo ingresado no se encuentra registrado en el sistema
                    </p>
                </div>

                <
            </form>
        </TarjetaFlotante>
    </main>
</template>