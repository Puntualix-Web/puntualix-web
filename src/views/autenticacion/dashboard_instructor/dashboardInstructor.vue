<script setup>
// vacío por ahora — lógica pendiente para la fase de JS
</script>

<template>
  <div class="pantalla-dashboard-instructor">

    <!-- ==========================================================
         Barra de navegación superior
         ========================================================== -->
    <header class="barra-navegacion">
      <div class="marca-navegacion">
        <img src="" alt="Logo PuntualiX" class="logo-puntualix-nav" />
      </div>

      <nav class="menu-navegacion">
        <a href="" class="enlace-nav enlace-nav-activo">
          <i class="fa-solid fa-house"></i> Dashboard
        </a>
        <a href="" class="enlace-nav">
          <i class="fa-solid fa-file-lines"></i> Fichas
        </a>
        <a href="" class="enlace-nav">
          <i class="fa-solid fa-calendar-check"></i> Asistencias
        </a>
        <a href="" class="enlace-nav">
          <i class="fa-solid fa-chart-bar"></i> Reportes
        </a>
        <a href="" class="enlace-nav">
          <i class="fa-solid fa-bell"></i> Alertas
        </a>
        <a href="" class="enlace-nav">
          <i class="fa-solid fa-download"></i> Descargar
        </a>
      </nav>

      <div class="area-usuario">
        <button type="button" class="boton-notificaciones" aria-label="Notificaciones">
          <i class="fa-solid fa-bell"></i>
        </button>

        <div class="tarjeta-usuario">
          <div class="avatar-usuario" aria-hidden="true"></div>
          <div class="datos-usuario">
            <span class="nombre-usuario">Alexander Patiño</span>
            <span class="rol-usuario">Instructor</span>
          </div>
          <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    </header>

    <!-- ==========================================================
         Contenido principal del dashboard
         ========================================================== -->
    <main class="contenido-dashboard">

      <!-- Fila 1: Saludo + tarjetas de indicadores -->
      <section class="resumen-bienvenida">
        <article class="tarjeta-saludo">
          <h1>¡Hola Alex!</h1>
          <p>Este es el resumen general de la actividad académica.</p>

          <button type="button" class="selector-mes">
            <i class="fa-solid fa-calendar"></i>
            Junio 2026
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </article>

        <div class="contenedor-indicadores">
          <!-- Indicador: Fichas activas -->
          <article class="tarjeta-indicador">
            <div class="icono-indicador icono-indicador-fichas" aria-hidden="true">
              <i class="fa-solid fa-users"></i>
            </div>
            <p class="titulo-indicador">Fichas activas</p>
            <p class="valor-indicador">24</p>
            <p class="variacion-indicador">+12% respecto al mes anterior</p>
            <!-- Mini gráfico de tendencia, pendiente para fase de JS/gráficos -->
            <div class="mini-grafico" aria-hidden="true"></div>
          </article>

          <!-- Indicador: Aprendices -->
          <article class="tarjeta-indicador">
            <div class="icono-indicador icono-indicador-aprendices" aria-hidden="true">
              <i class="fa-solid fa-user"></i>
            </div>
            <p class="titulo-indicador">Aprendices</p>
            <p class="valor-indicador">532</p>
            <p class="variacion-indicador">+8% respecto al mes anterior</p>
            <div class="mini-grafico" aria-hidden="true"></div>
          </article>

          <!-- Indicador: Asistencia promedio -->
          <article class="tarjeta-indicador">
            <div class="icono-indicador icono-indicador-asistencia" aria-hidden="true">
              <i class="fa-solid fa-chart-pie"></i>
            </div>
            <p class="titulo-indicador">Asistencia promedio</p>
            <p class="valor-indicador">87%</p>
            <p class="variacion-indicador">Promedio general</p>
            <div class="mini-grafico" aria-hidden="true"></div>
          </article>

          <!-- Indicador: Riesgo moderado -->
          <article class="tarjeta-indicador tarjeta-indicador-alerta">
            <div class="icono-indicador icono-indicador-riesgo-moderado" aria-hidden="true">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <p class="titulo-indicador">Riesgo moderado</p>
            <p class="valor-indicador">46</p>
            <p class="variacion-indicador">8.6% del total</p>
            <div class="mini-grafico" aria-hidden="true"></div>
          </article>

          <!-- Indicador: Riesgo crítico -->
          <article class="tarjeta-indicador tarjeta-indicador-critica">
            <div class="icono-indicador icono-indicador-riesgo-critico" aria-hidden="true">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <p class="titulo-indicador">Riesgo crítico</p>
            <p class="valor-indicador">18</p>
            <p class="variacion-indicador">3.4% del total</p>
            <div class="mini-grafico" aria-hidden="true"></div>
          </article>
        </div>
      </section>

      <!-- Fila 2: Asistencia general / Alertas recientes / Riesgo de deserción -->
      <section class="fila-paneles-superior">

        <!-- Panel: Asistencia general (gráfico de dona) -->
        <article class="panel-asistencia-general">
          <h2>Asistencia general</h2>

          <!-- Gráfico de dona, pendiente para fase de JS/gráficos -->
          <div class="grafico-dona" aria-hidden="true">
            <p class="valor-central-dona">87%</p>
            <p class="etiqueta-central-dona">Promedio general</p>
          </div>

          <ul class="leyenda-asistencia">
            <li class="item-leyenda">
              <span class="punto-leyenda punto-justificado"></span>
              Justificado 8%
            </li>
            <li class="item-leyenda">
              <span class="punto-leyenda punto-inasistencia"></span>
              Inasistencia 10%
            </li>
            <li class="item-leyenda">
              <span class="punto-leyenda punto-asistencia"></span>
              Asistencia 87%
            </li>
          </ul>

          <p class="total-registros">
            Total registros: <strong>8956</strong>
          </p>
        </article>

        <!-- Panel: Alertas recientes -->
        <article class="panel-alertas-recientes">
          <h2>Alertas recientes</h2>

          <ul class="lista-alertas">
            <li class="item-alerta item-alerta-critica">
              <div class="icono-alerta" aria-hidden="true">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div class="detalle-alerta">
                <p class="titulo-alerta">Riesgo crítico alcanzado</p>
                <p class="descripcion-alerta">
                  El aprendiz Jorge Perez ha alcanzado el 20% de inasistencia
                </p>
              </div>
              <span class="tiempo-alerta">Hace 15 minutos</span>
            </li>

            <li class="item-alerta item-alerta-advertencia">
              <div class="icono-alerta" aria-hidden="true">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div class="detalle-alerta">
                <p class="titulo-alerta">Justificación pendiente</p>
                <p class="descripcion-alerta">
                  Maria Gonzales tiene una justificación pendiente por revisar
                </p>
              </div>
              <span class="tiempo-alerta">Hace 40 minutos</span>
            </li>

            <li class="item-alerta item-alerta-informativa">
              <div class="icono-alerta" aria-hidden="true">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div class="detalle-alerta">
                <p class="titulo-alerta">Nueva justificación enviada</p>
                <p class="descripcion-alerta">
                  Pedro Ramirez envió una justificación
                </p>
              </div>
              <span class="tiempo-alerta">Hace 1 hora</span>
            </li>
          </ul>

          <a href="" class="enlace-ver-mas">Ver todas las alertas</a>
        </article>

        <!-- Panel: Riesgo de deserción por ficha (gráfico de barras) -->
        <article class="panel-riesgo-desercion">
          <h2>Riesgo de deserción por ficha</h2>

          <!-- Gráfico de barras, pendiente para fase de JS/gráficos -->
          <div class="grafico-barras" aria-hidden="true">
            <div class="grupo-barra">
              <div class="barra barra-riesgo-alto" style="height: 75%"></div>
              <span class="etiqueta-barra">Ficha 301002</span>
            </div>
            <div class="grupo-barra">
              <div class="barra barra-riesgo-alto" style="height: 55%"></div>
              <div class="barra barra-riesgo-moderado" style="height: 30%"></div>
              <span class="etiqueta-barra">Ficha 301003</span>
            </div>
            <div class="grupo-barra">
              <div class="barra barra-riesgo-alto" style="height: 85%"></div>
              <div class="barra barra-riesgo-moderado" style="height: 10%"></div>
              <span class="etiqueta-barra">Ficha 301004</span>
            </div>
            <div class="grupo-barra">
              <div class="barra barra-riesgo-alto" style="height: 85%"></div>
              <span class="etiqueta-barra">Ficha 301005</span>
            </div>
          </div>

          <ul class="leyenda-riesgo">
            <li class="item-leyenda">
              <span class="punto-leyenda punto-riesgo-moderado"></span>
              Riesgo moderado
            </li>
            <li class="item-leyenda">
              <span class="punto-leyenda punto-riesgo-alto"></span>
              Riesgo alto
            </li>
          </ul>
        </article>
      </section>

      <!-- Fila 3: Fichas asignadas activas / Actividad reciente -->
      <section class="fila-paneles-inferior">

        <!-- Panel: Fichas asignadas activas -->
        <article class="panel-fichas-activas">
          <h2>Fichas asignadas activas</h2>

          <table class="tabla-fichas">
            <thead>
              <tr>
                <th>Ficha</th>
                <th>Programa</th>
                <th>Aprendices</th>
                <th>Asistencia promedio</th>
                <th>Tipo de riesgo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>301002</td>
                <td>Desarrollo de software</td>
                <td>24</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-bajo" style="width: 90%"></div>
                  </div>
                  90%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-bajo">Bajo</span></td>
              </tr>
              <tr>
                <td>301003</td>
                <td>Gestión administrativa</td>
                <td>12</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-moderado" style="width: 85%"></div>
                  </div>
                  85%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-moderado">Moderado</span></td>
              </tr>
              <tr>
                <td>301004</td>
                <td>Desarrollo de software</td>
                <td>16</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-moderado" style="width: 78%"></div>
                  </div>
                  78%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-moderado">Moderado</span></td>
              </tr>
              <tr>
                <td>301005</td>
                <td>Redes y telecomunicaciones</td>
                <td>17</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-alto" style="width: 65%"></div>
                  </div>
                  65%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-alto">Alto</span></td>
              </tr>
              <tr>
                <td>301006</td>
                <td>Redes y telecomunicaciones</td>
                <td>21</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-alto" style="width: 65%"></div>
                  </div>
                  65%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-alto">Alto</span></td>
              </tr>
              <tr>
                <td>301007</td>
                <td>Mercadeo técnica</td>
                <td>10</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-critico" style="width: 52%"></div>
                  </div>
                  52%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-critico">Crítico</span></td>
              </tr>
              <tr>
                <td>301008</td>
                <td>Mercadeo técnica</td>
                <td>13</td>
                <td>
                  <div class="barra-progreso">
                    <div class="relleno-progreso relleno-critico" style="width: 52%"></div>
                  </div>
                  52%
                </td>
                <td><span class="etiqueta-riesgo etiqueta-riesgo-critico">Crítico</span></td>
              </tr>
            </tbody>
          </table>

          <a href="" class="enlace-ver-mas">Ver todas las fichas</a>
        </article>

        <!-- Panel: Actividad reciente -->
        <article class="panel-actividad-reciente">
          <h2>Actividad reciente</h2>

          <ul class="lista-actividad">
            <li class="item-actividad">
              <div class="icono-actividad icono-actividad-registro" aria-hidden="true">
                <i class="fa-solid fa-user-check"></i>
              </div>
              <div class="detalle-actividad">
                <p class="titulo-actividad">Registro de asistencia</p>
                <p class="descripcion-actividad">Carlos Martinez - Ficha 301002</p>
              </div>
              <span class="tiempo-actividad">Hace 5 minutos</span>
            </li>

            <li class="item-actividad">
              <div class="icono-actividad icono-actividad-justificacion" aria-hidden="true">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="detalle-actividad">
                <p class="titulo-actividad">Justificación aprobada</p>
                <p class="descripcion-actividad">Ana López - Ficha 301003</p>
              </div>
              <span class="tiempo-actividad">Hace 40 minutos</span>
            </li>

            <li class="item-actividad">
              <div class="icono-actividad icono-actividad-reporte" aria-hidden="true">
                <i class="fa-solid fa-file-lines"></i>
              </div>
              <div class="detalle-actividad">
                <p class="titulo-actividad">Reporte generado</p>
                <p class="descripcion-actividad">Reporte mensual - Ficha 301003</p>
              </div>
              <span class="tiempo-actividad">Hace 1 hora</span>
            </li>
          </ul>

          <a href="" class="enlace-ver-mas">Ver historial completo</a>
        </article>
      </section>

      <!-- Fila 4: Estadísticas generales -->
      <section class="panel-estadisticas-generales">
        <div class="encabezado-estadisticas">
          <h2>Estadísticas generales</h2>
          <button type="button" class="selector-mes">
            Junio 2026
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div class="cuerpo-estadisticas">
          <ul class="lista-estadisticas">
            <li class="item-estadistica">
              <i class="fa-solid fa-calendar-check icono-estadistica"></i>
              <span class="etiqueta-estadistica">Sesiones programadas</span>
              <span class="valor-estadistica">156</span>
            </li>
            <li class="item-estadistica">
              <i class="fa-solid fa-check icono-estadistica icono-estadistica-exito"></i>
              <span class="etiqueta-estadistica">Asistencias</span>
              <span class="valor-estadistica">7815</span>
            </li>
            <li class="item-estadistica">
              <i class="fa-solid fa-xmark icono-estadistica icono-estadistica-error"></i>
              <span class="etiqueta-estadistica">Inasistencias</span>
              <span class="valor-estadistica">8956</span>
            </li>
            <li class="item-estadistica">
              <i class="fa-solid fa-check icono-estadistica icono-estadistica-justificado"></i>
              <span class="etiqueta-estadistica">Justificadas</span>
              <span class="valor-estadistica">287</span>
            </li>
            <li class="item-estadistica">
              <i class="fa-solid fa-xmark icono-estadistica icono-estadistica-critico"></i>
              <span class="etiqueta-estadistica">Sin justificar</span>
              <span class="valor-estadistica">667</span>
            </li>
          </ul>

          <div class="grafico-tendencia">
            <h3>Tendencia de asistencia</h3>
            <!-- Gráfico de área, pendiente para fase de JS/gráficos -->
            <div class="area-grafico-tendencia" aria-hidden="true"></div>
          </div>
        </div>

        <a href="" class="enlace-ver-mas">Ver historial completo</a>
      </section>

    </main>

    <!-- ==========================================================
         Pie de página del dashboard
         ========================================================== -->
    <footer class="pie-dashboard">
      <div class="marca-pie">
        <img src="" alt="Logo PuntualiX" class="logo-puntualix-pie" />
        <p>Desarrollado en el marco del proyecto de formación SENA · 2026</p>
      </div>

      <p class="copyright-pie">© 2026 Puntualix. Todos los derechos reservados.</p>

      <div class="info-programa-pie">
        <img src="" alt="SENA" class="logo-sena-pie" />
        <p>
          Programa: Análisis y desarrollo de Software<br />
          Ficha: 3267541
        </p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* vacío por ahora — estilos pendientes para la fase de CSS */
</style>