<script setup>
import ModalAlerta from '@/components/ModalAlerta.vue'
import TarjetaFlotante from '@/components/TarjetaFlotante.vue'
</script>

<template>
    <main class="pantalla-inicio-sesion">
        <!--Sección de presentación de PuntualiX a la izquierda -->
        <section class="hero">
            <header class="marca">
                <!--Logo de PuntualiX, enlaza al inicio-->
                <a href="/">
                    <img src="" alt="Logo PuntualiX" class="logo-puntualix" />
                </a>

                <h1>Organización, seguimiento y control en un solo lugar</h1>
                <p>
                    Gestión de asistencia, seguimiento académico y visualización de métricas en tiempo real.
                </p>
            </header>
        </section>

        <!-- Tarjeta de autenticación: fondo institucional + contenedor
            ya los pone TarjetaFlotante, acá solo va el contenido del login -->
        <TarjetaFlotante>
            <header>
                <!--Ícono del candado, dentro de círculo verde -->
                <div class="icono-candado" aria-hidden="true">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <h2 id="titulo-inicio-sesion">Iniciar sesión</h2>
                <p>Accede a tu cuenta para iniciar</p>
            </header>

            <!-- Formulario de inicio de sesión-->
            <form>
                <!-- Campo: usuario -->
                <div class="formulario-agrupado">
                    <label for="nombre-usuario">Usuario</label>
                    <input
                        id="nombre-usuario"
                        name="nombre-usuario"
                        type="text"
                        placeholder="Usuario o correo institucional"
                        required
                    />
                    <!--Mensaje de error del campo de usuario 
                        cubre dos flujos alternativos del CU01.1:
                        -FA01.1.2: El usuario ingresado no existe en el sistema
                        -FA01.1.3: El campo quedó vacío-->
                    <p class="mensaje-error">
                        El usuario ingresado no existe en el sistema
                    </p>
                </div>

                <!-- Campo: Contraseña-->
                <div class="formulario-agrupado">
                    <label for="password">Contraseña</label>
                    <div class="campo-password">
                        <input
                            id="password" 
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            required
                        />

                        <!-- Botón para mostrar/ocultar la contraseña -->
                        <button type="button" aria-label="Mostrar Contraseña">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>

                    <!-- Mensaje de error del campo contraseña
                        Cubre dos flujos alternativos del CU01.1
                        - FA01.1.1: La contraseña ingresada es incorrecta
                        - FA01.1.3: El campo quedó vacío-->
                    <p class="mensaje-error">
                        Contraseña incorrecta, intente nuevamente
                    </p>
                </div>

                <!--Enlace para recuperar contraseña.
                    Ruta ya existe (OlvidoPassword.vue) -> router-link -->
                <p class="olvido-password">
                    <router-link to="/olvido-password">¿Olvidaste tu contraseña?</router-link>
                </p>

                <!--Botón inicio sesión-->
                <button type="submit" class="boton-iniciar-sesion">
                    Iniciar sesión
                </button>
            </form>

            <!--Enlace de ayuda.
                Vista aún no existe -> se queda como href pendiente -->
            <aside class="ayuda-cuenta">
                <router-link to="/dashboardInstructor"><p>¿Tienes problemas con tu cuenta?</p></router-link>
            </aside>
        </TarjetaFlotante>

        <!--Ocultar en fase de JS-->
        <ModalAlerta mensaje="Su cuenta se encuentra desactivada, contacte al administrador"/>

        <!--Pie de página-->
        <footer>
            <!-- Aviso de protección de datos, con ícono de escudo -->
            <section class="info-seguridad">
                <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
                <small>
                    Tu información está protegida con los más altos estándares de seguridad.
                </small>
            </section>

            <!--Derechos reservados-->
            <section class="copyright">
                <small>© 2026 PuntualiX. Todos los derechos reservados.</small>
            </section>

            <!-- Logo institucional del SENA-->
            <section class="logo-sena">
                <img src="" alt="SENA">
            </section>
        </footer>
    </main>
</template>

<style scoped>
/* Vacío por ahora — estilos pendientes en fase de CSS */
</style>