<template>
  <div class="home overflow-hidden">
    <menuBar></menuBar>
    <div class="hero-home py-5 py-md-0 d-flex flex-wrap justify-content-center align-items-center">
      <div class="d-flex flex-wrap">
        <div class="text-center col-12">
          <h1 class="ff-silver-pen fs-114 mb-3">
            ¿Qué vamos a celebrar?
          </h1>
          <h2 class="ff-gravity mt-2 fs-16 mt-4 mb-5">
            <!--Somos <strong>event planners</strong> y tenemos <strong>todo para tu evento</strong>-->
            <strong>Organizamos, planeamos y creamos</strong> todo para que tu evento
            sea un <strong>éxito</strong>
          </h2>
        </div>
        <div class="text-center col-12 px-4 mt-4">
          <form @submit.prevent="celebrationHandler('form1')" action="#" method="post"
                class="d-flex flex-wrap justify-content-center"
                data-vv-scope="form1">
            <h2 v-show="messageEventForm" class="col-12 text-white ff-gravity fs-16 success-send-event py-3">
              Gracias por confiar en nosotros, espere a que nos pongamos en contacto
            </h2>
            <h2 v-show="messageEventFormFail" class="col-12 text-danger ff-gravity fs-16 success-send-event py-3">Lo
              sentimos pero
              ha ocurrido un
              error al enviar su mensaje</h2>

            <div class="col-12 my-1 my-md-0 col-md-2 px-0 px-md-1">
              <input v-validate="'required'" v-model="namePerson" class="input-sociall" name="nombre"
                     id="nombre" placeholder="Tu nombre">
              <span class="text-danger bg-light">{{ errors.first('form1.nombre') }}</span>
            </div>
            <div class="col-md-2 col-12 my-1 my-md-0 px-0 px-md-1">
              <input name="email" v-model="email" v-validate="'required|'" class="input-sociall"
                     type="email" placeholder="Correo electrónico">
              <span class="text-danger bg-light">{{ errors.first('form1.email') }}</span>
            </div>
            <div class="col-md-2 col-12 my-1 my-md-0 px-0 px-md-1">
              <input name="telefono" v-model="phone" v-validate="'required|phonenumber'" class="input-sociall"
                     type="text" placeholder="Teléfono de contacto">
              <span class="text-danger bg-light">{{ errors.first('form1.telefono') }}</span>
            </div>
            <div class="col-md-2 col-12 my-1 my-md-0 px-0 px-md-1">
              <input v-validate="'required|'" name="fecha" v-model="fecha" class="input-sociall" type="date"
                     placeholder="Fecha">
              <span class="text-danger bg-light">{{ errors.first('form1.fecha') }}</span>
            </div>
            <div class="col-md-2 col-12 my-1 my-md-0 px-0 px-md-1">
              <select v-model="eventType" name="evento" id="type_event" class="input-sociall" v-validate="'required|'">
                <option selected value="">Tipo de evento</option>
                <option value="Bodas">Bodas</option>
                <option value="XV años">XV años</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Bautizo">Bautizo</option>
                <option value="Primera comunión">Primera comunión</option>
                <option value="Evento privado">Evento privado</option>
                <option value="Evento corporativo">Evento corporativo</option>
              </select>
              <span class="text-danger bg-light">{{ errors.first('form1.evento') }}</span>
            </div>
            <div class="col-12 my-1 my-md-0 col-md-1 px-0 px-md-1 ">
              <button
                class="btn-social btn-send-evnt py-3 py-md-0 btn-purple hvr-ripple-out before-morado-border"
                :class="fsButton"
                type="submit" v-html="textButtonEvnt">
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <section class="pb-5 section-cards">
      <div class="container-fluid flex-wrap d-flex justify-content-start justify-content-lg-center">
        <card class="col-6 col-lg-2 floating-card" image="antifaz.svg" titleCard="Expertos Event Planners"></card>
        <card class="col-6 col-lg-2" image="flowers.svg" titleCard="Rápidos y estratégicos"></card>
        <card class="col-6 col-lg-2" image="lights.svg" titleCard="Conocimiento integral"></card>
        <card class="col-6 col-lg-2" image="table.svg" titleCard="Contamos con todo lo que ocupas"></card>
        <card class="col-6 col-lg-2" image="drinks.svg" titleCard="Cuenta con nuestra Asesoria 24/7"></card>
      </div>
    </section>
    <section class="perfect-event py-5">
      <div class="titles-perfect-event d-flex flex-wrap justify-content-center">

        <h2
          class="text-center ff-gravity fw-700 track-600 text-uppercase fs-25 col-12 col-md-8 col-lg-12 py-4 light-behind line-h-40">
          <lightLyellow class="light-yellow-home1"></lightLyellow>
          <lightPurple class="light-purple-home1"></lightPurple>
          Que tu evento sea perfecto
        </h2>
        <p class="pb-0 mt-3 ff-gravity fs-14 text-center col-10 col-md-8 col-lg-6">
          Sociall Events se especializa en crear, organizar y coordinar todo tipo de eventos sociales y corporativos de
          forma
          personalizada para así garantizarte una experiencia única e inigualable.
          <strong class="fw-700">¡Puedes confiar en nosotros!</strong>
        </p>
        <div class="col-12 text-center py-5">
          <img class="vengalas-sm" src="../assets/img/icos/vengalas.svg" alt="Social Events">
        </div>
      </div>
      <div class="cards-perfect-events py-5 d-flex flex-wrap">

        <div class="d-flex col-12 flex-wrap px-0">
          <cardtext
            class="col-12 col-sm-6"
            titleCard="Bodas"
            bodyCard="<p>
            Si estás pensando en cómo <strong>organizar tu boda</strong> y necesitas ayuda para organizar todo lo que
            necesitas para casarte, nosotros en <strong>Sociall Events</strong> tenemos la solución. No importa si se trata de tus bodas
            de plata, boda civil, boda religiosa, haremos todo lo posible para que tengas la boda que te mereces y que
            <strong>siempre soñaste</strong>.
            </p>
            <p>Somos los mejores <strong>planeadores de bodas en Morelia</strong>, así que te ayudaremos durante todo el proceso de
            organización, desde la elección para la decoración, los arreglos florales, arreglos de mesa, en fin,
            todo lo que necesitas para planear tu boda <strong>lo tienes con nosotros</strong>.</p>
"
          >
          </cardtext>
          <CardImageB backgroundImageUrl="1-boda.jpg" class="col-12 col-sm-6 px-0"></CardImageB>
        </div>
        <div class="d-flex col-12 px-0 flex-md-wrap flex-wrap-reverse">
          <CardImageB backgroundImageUrl="2-xv.jpg" class="col-12 col-sm-6 px-0"></CardImageB>
          <cardtext
            titleCard="XV Años"
            bodyCard="
            <p>Sabemos que esta es una ocasión muy especial y que jamás se volverá a repetir, pasar de ser una
            niña para convertirte en una señorita merece una fiesta a lo grande.</p>
            <p>Es por eso que nosotros en
            Social Events podemos ayudarte a <strong>planear la fiesta de xv años que tu mereces</strong>, somos especialistas en
            planear eventos de la más alta calidad.</p>
"
            class="col-sm-6 col-12"></cardtext>
        </div>
        <div class="d-flex col-12 px-0 flex-wrap">
          <cardtext
            titleCard="Cumpleaños"
            bodyCard="
            <p>Entendemos que <strong>las fechas importantes deben celebrarse a lo grande</strong>, tarde o temprano llega el
            momento de celebrar un año más para esa persona especial; en Sociall Events también nos preocupamos por
            darle a esa persona la celebración que se merece.</p>
            <p>Sabemos que no es sencillo organizar una fiesta de cumpleaños, que a veces las ideas son difíciles de
            tener, pero no tienes de que preocuparte, nosotros nos especializamos en la organización, ya sea de fiestas
            de cumpleaños para adultos, jóvenes, niños o niñas. <strong>Puedes confiar en nosotros.</strong></p>
"
            bodyStrong=""
            class="col-12 col-sm-6"></cardtext>
          <CardImageB backgroundImageUrl="3-birthday.jpg" class="col-12 col-sm-6"></CardImageB>
        </div>
        <div class="d-flex col-12 px-0 flex-md-wrap flex-wrap-reverse">
          <CardImageB backgroundImageUrl="4-baptism.jpg" class="col-12 col-sm-6"></CardImageB>
          <cardtext
            titleCard="Bautizos"
            bodyCard="Sabemos que la fiesta de bautizo es un gran momento para tu hijo y para toda tu familia, es por
            eso que comprendemos lo importante que es el éxito de la fiesta. Este evento merece un gran esfuerzo,
            el cual nosotros podemos llevar por ti organizando este evento para que tu no tengas que preocuparte
            por nada, <strong>más que por disfrutarlo</strong>. "
            class="col-12 col-sm-6"></cardtext>
        </div>
        <div class="d-flex col-12 px-0 flex-wrap">
          <cardtext
            titleCard="Primera comunión"
            bodyCard="Si eres una persona religiosa comprendes la importancia de este acto para la vida de una persona,
            nosotros también lo comprendemos, puedes confiar en nuestra experiencia como organizadores de eventos para
            ayudarte a planear esa fiesta de primera comunión que deseas realizar <strong>y que todo salga perfecto</strong>."
            class="col-12 col-sm-6"></cardtext>
          <CardImageB backgroundImageUrl="5-comunion.jpg" class="col-12 col-sm-6"></CardImageB>
        </div>
        <div class="d-flex col-12 px-0 flex-md-wrap flex-wrap-reverse">
          <CardImageB backgroundImageUrl="6-private.jpg" class="col-12 col-sm-6"></CardImageB>
          <cardtext
            titleCard="Eventos privados"
            bodyCard="Si estás pensando en organizar algún otro tipo de evento privado, ponemos a tu disposición toda
            nuestra experiencia y todo nuestro <strong>talento en la organización de eventos</strong>, deja que nos preocupemos por la
            organización, para que así de lo único que tú te debas preocupar sea por divertirte."
            class="col-12 col-sm-6"></cardtext>
        </div>
        <div class="d-flex col-12 px-0 flex-wrap">
          <cardtext
            titleCard="Eventos corporativos"
            bodyCard="
            <p>Sabemos lo importante que es realizar eventos corporativos para tu empresa, ya que con ellos
            se ayuda a mejorar la visibilidad y a mejorar en gran medida la reputación que tiene una marca o empresa.
            Con la organización de eventos corporativos una marca puede darse a conocer y ayudar a relacionarse con lo
            más importante, <strong>el público objetivo</strong>.</p>
          <p>La organización de este tipo de eventos, sabemos que puede llegar a ser muy complicada, es por eso que
          Sociall Events está ahí como <strong>empresa experta</strong> en la organización y planeación de eventos corporativos para
          ayudarte en asegurar que tu evento salga tal y como lo esperas.</p>
"
            class="col-12 col-sm-6"></cardtext>
          <CardImageB backgroundImageUrl="7-corp.jpg" class="col-12 col-sm-6"></CardImageB>
        </div>
      </div>
    </section>
    <section class="py-5 text-center container px-md-5">

      <div class="text-center px-lg-5 position-relative">
        <lightLyellow class="light-yellow-left-home2"></lightLyellow>
        <lightPurple class="light-purple-left-home2"></lightPurple>

        <lightLyellow class="light-yellow-right-home2"></lightLyellow>
        <lightPurple class="light-purple-right-home2"></lightPurple>
        <h2 class="ff-silver-pen fs-88 text-coffee position-relative">
          Más que una perfecta organización de eventos, momentos inolvidables. Somos sociall events
        </h2>
        <div class="ff-gravity fw-300 fs-14">
          <p class="  py-4 m-0">
            Deja que te ayudemos en la<strong> organización para tus eventos</strong>, somos los mejores organizadores
            de eventos en la
            ciudad de Morelia. Tenemos una amplia experiencia para manejar cualquier tipo de evento, no importa si son
            bodas, cumpleaños, primeras comuniones, bautizos o cualquier otro tipo de evento privado e incluso eventos
            corporativos empresariales; <strong>podemos ayudarte</strong> en todo lo que necesitas,
            <strong>acércate</strong> y solicita más
            información para saber cómo organizar tu evento social con nosotros.
          </p>
        </div>

        <div class="d-flex justify-content-around py-5">
          <img width="30px" src="../assets/img/icos/antifaz.svg" alt="Expertos Event Planners">
          <img width="30px" src="../assets/img/icos/flowers.svg" alt="Expertos Event Planners">
          <img width="30px" src="../assets/img/icos/lights.svg" alt="Expertos Event Planners">
          <img width="30px" src="../assets/img/icos/table.svg" alt="Expertos Event Planners">
          <img width="30px" src="../assets/img/icos/drinks.svg" alt="Expertos Event Planners">
        </div>
      </div>
      <div class="serivcios d-flex flex-wrap my-4 px-lg-5">
        <div class="col-lg-3 col-6">
          <h3 class="text-left ff-gravity fs-18 title-list-h5 color-yellow">Bodas</h3>
          <list :content="content.bodas" colorBullet="color-list-yellow"></list>
        </div>
        <div class="col-lg-3 col-6">
          <h3 class="text-left ff-gravity fs-18 title-list-h5 color-purple">Cumpleaños</h3>
          <list :content="content.cumple" colorBullet="color-list-purple"></list>
        </div>
        <div class="col-lg-3 col-6">
          <h3 class="text-left ff-gravity fs-18 title-list-h5 color-yellow">Eventos privados</h3>
          <list :content="content.privados" colorBullet="color-list-yellow"></list>
        </div>
        <div class="col-lg-3 col-6">
          <h3 class="text-left ff-gravity fs-18 title-list-h5 color-purple">Eventos corporativos</h3>
          <list :content="content.corporativos" colorBullet="color-list-purple"></list>
        </div>
      </div>
      <div class="col-10 col-sm-7 col-lg-4 my-5 mx-auto">
        <button class="btn-social btn-purple fs-9 py-4 btn-move-inside" type="submit">
          COTIZAR EVENTO SOCI
          <div class="color-yellow">ALL IN ONE</div>
        </button>
      </div>
    </section>
    <section
      class="height-25 contact-simple-sociall background-parallax d-flex justify-content-center align-items-center flex-wrap">
      <div class="d-flex justify-content-center align-items-center flex-wrap col-12">
        <span
          class="col-12 text-white ff-gravity mb-3 text-uppercase fs-16 text-center">Ponte en contácto y te ayudaremos a planear tu evento</span>
        <a href="https://wa.me/5214434921253"
           class="col-10 col-sm-6 col-md-5 col-lg-3 px-0 d-flex justify-content-center align-items-center whats-button py-2"
           target="_blank">
          <img width="25" src="../assets/img/icos/phone-wtsp.svg" alt="Whatsapp Sociall Events">
          <span class="text-white ff-gravity fs-14 ml-2">+52 1 443 492 1253</span>
        </a>
      </div>
    </section>
    <footerSocail></footerSocail>
  </div>
</template>

<script>
  import menuBar from '~/components/Menu.vue';
  import footerSocail from '~/components/FooterSocial'
  import card from '~/components/CardServices.vue';
  import lightLyellow from '~/components/LightYellow.vue';
  import lightPurple from '~/components/LightPurple.vue';
  import cardtext from '~/components/CardText.vue';
  import CardImageB from '~/components/CardImageB.vue';
  import list from '~/components/ListRender.vue';
  import spanish from 'vee-validate/dist/locale/es'

  export default {
    components: {
      menuBar,
      card,
      lightPurple,
      lightLyellow,
      cardtext,
      CardImageB,
      list,
      footerSocail
    },
    data() {
      return {
        content: {
          'bodas': [
            'Expertos organizadores en como planear tu boda',
            'Planeación para bodas',
            'Planeación para bodas en Morelia',
            'Organización para bodas en Michoacán',
            'Planeación de bodas de oro',
            'Planeación de bodas de plata',
            'Planeación de bodas al civil',
            'Decoración para bodas',
            'Arreglos florales para bodas',
            'Generación de ideas para bodas',
            'Comida para bodas'
          ],
          'cumple': [
            'Organización de fiestas de cumpleaños',
            'Planeación de fiestas de cumpleaños para niños',
            'Organización de fiestas de cumpleaños para jóvenes',
            'Organización de fiestas de cumpleaños para adultos',
            'Ideas para organizar fiesta de cumpleaños',
            'Organización de fiestas de cumpleaños sorpresa',
            'Organización de fiestas de cumpleaños temáticas',
            'Decoración para fiestas de cumpleaños',
            'Comida para fiestas de cumpleaños'
          ],
          'privados': [
            'Planeación de aniversarios',
            'Planeación de bautizos',
            'Planeación para fiesta de primera comunión',
            'Organización de fiesta de graduación',
            'Organización para fiesta de xv años',
            'Organización de eventos privados en Michoacán',
            'Planeación de eventos privados en diferentes locaciones',
            'Planeación de eventos privados en Morelia',
            'Decoración para fiesta de xv años',
            'Comida para eventos privados'
          ],
          'corporativos': [
            'Planeación de eventos corporativos',
            'Planeación de eventos corporativos para fin de año',
            'Shows para eventos corporativos',
            'Dirección organización y producción de eventos corporativos e institucionales',
            'Planeación de eventos corporativos importantes',
            'Comida para eventos corporativos'
          ]
        },
        emailStatus: false,
        emailStatusFail: false,
        messageEventForm: false,
        messageEventFormFail: false,
        tel_mail: '',
        textButton: 'PEDIR UNA ASESORÍA GRATUITA',
        textButtonEvnt: '&#8594;',
        namePerson: '',
        phone: '',
        email: '',
        fecha: '',
        eventType: '',
        socialImg: require('../assets/img/logos/sociall-logo.svg'),
        fsButton: 'fs-20',
        text: '',
        number: '5214434921253',
        urlWhats: 'https://wa.me/'
      }
    },
    methods: {

      mailHandler(scope) {
        this.$validator.validateAll(scope).then((result) => {
          if (result) {
            // eslint-disable-next-line
            this.sendMail();
            return;
          }
        });
      },
      celebrationHandler(scope) {
        console.log(this.errors.first('contacto'));
        this.$validator.validateAll(scope).then((result) => {
          if (result) {
            // eslint-disable-next-line
            this.celebration();
            return;
          }
        });
      },

      async sendMail() {
        /*        this.$axios.defaults.xsrfCookieName = 'csrftoken';
                this.$axios.defaults.xsrfHeaderName = "X-CSRFToken";
                let formdata = new FormData();
                formdata.append('tel_mail', this.tel_mail);
                this.textButton = 'ENVIANDO...';
                let response = '';

                try {
                  response = await this.$axios.$post('/test/', formdata);
                } catch (e) {
                  console.log(e);
                  this.emailStatusFail = true;
                  this.emailStatus = false;
                  this.textButton = 'PEDIR UNA ASESORÍA GRATUITA'
                }

                if (response === 200) {
                  this.emailStatus = true;
                  this.emailStatusFail = false;
                  this.textButton = 'PEDIR UNA ASESORÍA GRATUITA'
                  this.cleanMailForm();
                }*/

        alert()
      },
      async celebration() {
        let formdata = new FormData();
        formdata.append('eventType', this.eventType);
        formdata.append('fecha', this.fecha);
        formdata.append('name', this.namePerson);
        formdata.append('email', this.email);
        formdata.append('phone', this.phone);
        this.fsButton = 'fs-12';
        this.textButtonEvnt = 'ENVIANDO';

        let response = '';
        try {
          response = await this.$axios.$post('/celebrate/', formdata);
        } catch (e) {
          this.messageEventFormFail = true;
          this.messageEventForm = false;
          this.fsButton = 'fs-20';
          this.textButtonEvnt = '&#8594;'
        }
        console.log(response);
        if (response === 200) {
          this.messageEventForm = true;
          this.messageEventFormFail = false;
          this.fsButton = 'fs-20';
          this.textButtonEvnt = '&#8594;';
          this.sendWatsMessage();
          this.cleanEventForm();
        }


      },

      sendWatsMessage() {
        let content_message = `Hola mi nombre es: ${this.namePerson} y me gustaría pedir más información.
Mi correo electrónico es: ${this.email}, telefono: ${this.phone}, evento: ${this.eventType} y posible fecha del evento: ${this.fecha}`;
        let final_url = this.urlWhats + this.number + '?text=' + encodeURI(content_message);
        window.open(final_url, '_blank')
      },
      cleanEventForm() {
        this.eventTipe = this.fecha = this.invitados = this.lugar = '';
        this.errors.clear('form1');
        this.$validator.reset();
      },
      cleanMailForm() {
        this.tel_mail = '';
        this.errors.clear('form2');
        this.$validator.reset();
      }
    },
    created() {
      this.$validator.localize('es', {
        messages: spanish.messages
      });

      this.$validator.extend('phonenumber', {
        getMessage: (campo, argumentos) => {

          return "El campo " + campo + " no contiene un teléfono válido ";
        },
        validate: (valor, argumentos) => {
          const MOBILEREG = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
          let resp = MOBILEREG.test(valor);
          return resp;
          //return argumentos.every(argumento => !valor.includes(argumento))
        },
      });
    },
    head() {
      return {
        title: 'Inicio',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Sociall Events estará cerca de ti para ayudarte con todo lo necesario para tus eventos sociales ¡Puedes confiar en nosotros!'
          },
          {
            'property': 'og:description',
            'content': 'Sociall Events estará cerca de ti para ayudarte con todo lo necesario para tus eventos sociales ¡Puedes confiar en nosotros!',
            'vmid': 'og:description'
          },
          {
            'property': 'og:url',
            'content': 'http://sociallevents.com/',
            'vmid': 'og:url'
          },
          {
            'property': 'og:image',
            //'content': 'http://ensambleestrategico.com/_nuxt/img/05e34b3.svg',
            'content': this.socialImg,
            'vmid': 'og:url'
          },
          {
            'property': 'og:title',
            'content': 'Sociall Events | Inicio',
            'vmid': 'og:title'
          },
        ],
      }
    }
  }
</script>

<style>
</style>
