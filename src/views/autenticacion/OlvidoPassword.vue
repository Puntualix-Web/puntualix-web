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
                    
                    <!-- Error: usuario/correo no registrado en el sistema-->

                    <p class="mensaje-error">
                        El correo ingresado no se encuentra registrado en el sistema
                    </p>
                </div>

                <button type="submit" class="boton-enviar-recuperacion">
                    Enviar método de recuperación
                </button>
            </form>

            <aside class="ayuda-cuenta">
                <p><a href="">¿Tienes problemas con tu cuenta?</a></p>
                <p><router-link to="/">Volver al inicio</router-link> </p>
            </aside>
        </TarjetaFlotante>

        <!-- ====================================
            Estado2: email enviado (con cuenta regreseiva activa
            pasa al estado 4 (enlace espirado))-->

        <TarjetaFlotante>
            <header>
                <div class="icono-marca" aria-hidden="true">
                    <img src="" alt=""/>
                </div>

                <div class="icono-confirmacion" aria-hidden="true">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                </div>
                <h2>Email Enviado</h2>
                <p>
                    Te hemos enviado un correo electronico con un enlace 
                    que ter permite establecer una nueva contraseña
                </p>

                <!-- Cuenta regresiva: el numeor cambia en tiempo rea en fase de js-->
                <p class="tiempo-expiracion">
                    El enlace expira en  <span class="tiempo-restante">30:00</span>
                </p>
            </header>

            <aside class="ayuda-cuenta">
                <p><router-link to="/">Volver al inicio</router-link> </p>
                <p><a href="">¿Tienes problemas con tu cuenta</a> </p>
            </aside>
        </TarjetaFlotante>

        <!-- ========================================
            Estado 3: modla temporal de 'enclace expirado
            aparce enciam del Estado 2 cuanto el temporizador llega a 00:00-->
        <ModalAlerta mensaje="El enlace de recuperacion ha expirado, solicite uno nuevo"/> 

        <TarjetaFlotante>
            <header>
                <div class="icono-marca" aria-hidden="true">
                    <img src="" alt=""/>
                </div>
                <h2>Email Enviado</h2>
                <p>
                    Te hemos enviado un correo elextronico con un enlace 
                    que te permite establecer una nueva contraseña
                </p>
                <p class="mensaje-error">
                    El enlace de recuperacion ha expirado, solicite uno nuevo.
                </p>
            </header>

            <button type="button" class="boton-enviar-recuperacion">
                Enviar método de recuperacion
            </button>

            <aside class="ayuda-cuenta">
                <p><router-link to="/">Volver al inicio</router-link></p>
                <p><a href="">¿Tienes problemas con tu cuenta?</a></p>
            </aside>
        </TarjetaFlotante>

        <!-- ==========================================================
            ESTADO 5: Establecer nueva contraseña
            Cubre el estado normal y dos flujos alternativos:
        - Confirmación no coincide (solo campo "confirmar" en rojo)
        - Requisitos de seguridad no cumplidos (ambos campos en rojo) -->

        <TarjetaFlotante>
            <header>
                <div class="icono-marca" aria-hidden="true">
                    <img src="" alt="" />
                </div>

                <h2>Establecer nueva contraseña</h2>
            </header>

            <form> 
                <div class="formulario-agrupado">
                    <label for="nueva-password">Contraseña</label>
                    <div class="campo-password">
                        <input
                            id="nueva-password"
                            name="nueva-password"
                            type="password"
                            placeholder="Contraseña"
                            required
                        />

                        <button type="button" aria-label="Mostrar contraseña">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                </div>

                <div class="formulario-agrupado">
                    <label for="confirmar-password">Confirmar contraseña</label>
                    <div class="campo-password">
                        <input
                            id="confirmar-password"
                            name="confirmar-password"
                            type="password"
                            placeholder="Confirmar contraseña"
                            required
                        />

                        <button type="button" aria-label="Mostrar contraseña">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                    <!-- Error 1: La confirmacion no coincide con la contraseña nueva
                        en fase de JS: solo este campo lleva el borde rojo-->
                    <p class="mensaje-error">
                        La contraseña ingresada no coincide
                    </p>

                    <!-- Error 2: la contraseña no cumple los requisitos mínimos.
                        En fase de JS: ambos campos (contraseña y confirmar) llevan borde rojo -->
                    <p class="mensaje-error">
                        La nueva contraseña no cumple con los requisitos mínimos de seguridad
                    </p>
                </div>

                <button type="submit" class="boton-establecer-password">
                    establecer contraseña
                </button>
            </form>

            <aside class="ayuda-cuenta">
                <p><a href="">¿Tienes problema con tu cuenta?</a></p>
            </aside>
        </TarjetaFlotante>

        <!-- Pie de pagina: Igual que en IncioSesion.vue-->
        <footer>
            <section class="info-seguridad">
                <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
                <small>
                    Tu información está protegida con los más altos estándares de seguridad.
                </small>
            </section>

            <section class="copyright">
                <small>© 2026 PuntualiX. Todos los derechos reservados.</small>
            </section>

            <section class="logo-sena">
                <img src="" alt="SENA">
            </section>
        </footer>
    </main>
</template>

<style scoped>
/* Vacio por ahora - estilos pendientes para la fase de css */
</style>