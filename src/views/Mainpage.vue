<template>
    <div class="mainpage" @resize='onresize' :class="{'on-first':firstPage, 'on-macro':$route.params.macroarg}">
        <macroarg title="cos’è" :style="macrostyle"  >
            <microarg title="L'Elemento" src="https://www.hitechlife.it/wp-content/uploads/2019/03/idrogeno.jpg" >
                <template #punti>
                    <div>
                        L’idrogeno è l’elemento più comune dell’universo osservabile, nonostante questo sulla terra l’elemento è presente in forma gassosa solo l’1% , infatti il restante lo si può trovare negli oceani composto nell’acqua.
                        <br>Si può produrre tramite il vapore o in modi alternativi.<br><br>
                        Possiede 3 isotopi:<br>
                        Prozio, il più comune.<br>
                        Deuterio, più viscoso e denso.<br>
                        Trizio, radioattivo.<br><br>
                        L’idrogeno, grazie alle sue proprietà fisiche e chimiche, può essere un ottimo generatore e vettore energetico alternativo, infatti è già un elemento essenziale per l’energia nucleare, ma può essere sfruttato anche singolarmente come combustibile.

                    </div>
                </template> 
            </microarg>
            <microarg title="Proprietà fisiche" src="https://www.reccom.org/wp-content/uploads/2019/12/what-element-did-henry-cavendish-discover-in-1766.jpg" >
                <template #punti>
                    <div>È l’elemento più leggero.<br>
                        Gli atomi di idrogeno formano molecole di H2, particolarmente più piccole delle altre molecole, è incolore, inodore e insapore. <br>Questo elemento è uno dei principali costituenti dell'acqua e di tutte le materie organiche ed è ampiamente distribuito non solo sulla terra ma anche in tutto l'Universo .
                    </div>
                </template> 
            </microarg> 
            <microarg title="Proprietà chimiche" src="https://www.e-alyss.com/blog/wp-content/uploads/2015/10/Scientist.jpg" >
                <template #punti>
                    <div>È il primo elemento della tavola periodica.<br>      
                        Il suo atomo è chimicamente molto reattivo, per questo in natura si trova raramente, al contrario della sua molecola che è poco reattiva. 
                        <br>L'idrogeno reagisce violentemente con ossidanti come protossido di azoto, alogeni e idrocarburi insaturi con intenso calore esotermico.</div>
                </template> 
            </microarg> 
            <microarg title="Proprietà combustibili" src="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" >
                <template #punti>
                    <div>È altamente infiammabile.<br>
                        La sua alta infiammabilità e detonabilità lo rendono un ottimo combustibile per il futuro, ma ci sono diversi problemi da sistemare, come la sicurezza nella produzione lo stoccaggio e il trasporto.
                    </div>
                </template> 
            </microarg> 
        </macroarg>
        <macroarg title="Produzione" :style="macrostyle" >
            <microarg title="In crescita" src="https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1975&q=80">
                <template #punti >
                    <div>Un'economia basata sull'idrogeno è un tipo di sistema economico ipotizzato per il futuro, anche se già parzialmente utilizzato.<br>L'idrogeno puro non è disponibile nel nostro pianeta. La maggior parte dell'idrogeno "conveniente" può essere estratto da altre sostanze con procedure chimiche ed elettrolitiche oppure può essere prodotto da altri combustibili utilizzando sostanze ad elevato contenuto energetico.<br>La produzione dell'idrogeno avviene per il 48% da gas naturale, per il 30% dal petrolio (sottoprodotto della distillazione e reforming del gasolio), per il 18% dal carbone. L'elettrolisi dell'acqua viene impiegata per produrre soltanto il 4%.</div>
                </template>
            </microarg>
            <microarg title="In Italia" src="https://images.unsplash.com/photo-1576091160651-e028ca26a943?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Mantova<br>Il Gruppo Sapio è il maggiore produttore di "idrogeno merchant" (destinato alla vendita ad altre industrie, enti o privati) in Italia.</div>
                </template>
            </microarg>
            <microarg title="Stoccaggio dell'idrogeno " src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Lo stoccaggio dell’idrogeno è ancora una materia in fase di studio, difatti tutte le soluzioni pensate fino a questo punto presentano numerosi difetti e comportano un enorme dispendio energetico ed economico.</div>
                </template>
            </microarg>
            <microarg title="STOCCAGGIO IN FORMA LIQUIDA- CRIOGENICA " src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Per stoccare l’idrogeno in forma liquida lo si deve prima di tutto portare ad una temperatura di -252,882°C e poi isolare termicamente all’interno dei serbatoi. <br>Il materiale isolante ha tutt’ora un prezzo non indifferente e la densità dell’idrogeno liquido è irrilevante, questo vuol dire che per produrre energia ne servirebbe moltissimo.</div>
                </template>
            </microarg>
            <microarg title="STOCCAGGIO IN AMMONIACA" src="https://images.unsplash.com/photo-1562411053-c9ac630a5934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80">
                <template #punti>
                    <div>Stoccare l’idrogeno in ammoniaca potrebbe essere una soluzione abbastanza risolutiva. La temperatura a cui si dovrebbe portare il composto è di -35°C, quindi molto più accettabile e inoltre l’ammoniaca è molto conosciuta e studiata in tutto il mondo.<br> I difetti maggiori di questa soluzione sono l’alta pressione a cui l’ammoniaca deve essere portata per bruciare e i gas tossici che la combustione produce.</div>
                </template>
            </microarg>
            <microarg title="STOCCAGGIO CON IDRURI METALLICI" src="https://images.unsplash.com/photo-1515707384144-8c119444db05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80">
                <template #punti>
                    <div>Recenti studi hanno dimostrato che gli idruri di litio, sodio e magnesio possono essere utilizzati come contenitori per l’idrogeno. Essi sono abbastanza facili da manipolare e sono anch’essi molto conosciuti, ma i difetti che questa soluzione presenta sono molteplici. <br>La combustione degli idruri è improvvisa e incontrollata, in più i gas che essa produce sono tossici per la pelle. Un serbatoio a idruri è molto più pesante di uno a idrocarburi e i costi per riciclare questi materiali sono notevoli.</div>
                </template>
            </microarg>
            <microarg title="STOCCAGGIO CON L’HYTHANE" src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Nel 2007 è stata presentata al mondo un composto formato da idrogeno e metano, entrambi gassosi, portati a temperatura ambiente ma ad alte pressioni. <br>Questa miscela brucia nei motori a combustione interna con bassa compressione ed è una soluzione molto ecologica.</div>
                </template>
            </microarg>
            <microarg title="STOCCAGGIO CHIMICO" src="https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>L’idrogeno può anche essere immagazzinato grazie a sostanze chimiche, come per esempio il biossido di titanio. Esso, una volta scaldato, libera idrogeno sotto forma gassosa.</div>
                </template>
            </microarg>
            <microarg title="NUOVI STUDI" src="https://images.unsplash.com/photo-1458040937381-49c067dfd49a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Con l’avanzare delle nanotecnologie nuovi metodi stanno pian piano nascendo, come quella dei nanotubi di silicio che hanno la capacità di trasportare l’idrogeno. <br>Nuove tecnologie nasceranno e pian piano l’idrogeno diventerà parte della nostra quotidianità</div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Trasporto" :style="macrostyle" > 
            <microarg title="Auto" src="https://t1-cms-1.images.toyota-europe.com/toyotaone/itit/toyota-mirai-2018-exterior-tme-001-a-full_tcm-20-1142850.jpg">
                <template #punti>
                    <div>Il progetto per la costruzione di un’auto ad idrogeno si è rapidamente diffuso e sono già state ipotizzate diverse forme di motore che sfrutti l’energia dell’H2.<br>L’idrogeno può bruciare in un motore a combustione interno, in questo caso si parla di auto a idrogeno HICEV (Hydrogen Internal Combustion Engine Vehicle).<br> Si può anche provocare una reazione con l’ossigeno in una pila a combustibile, producendo elettricità. In questo caso di parla di auto a idrogeno FCEV (Fuel Cell Electric Vehicle).<br>La Toyota Mirai è la prima macchina a idrogeno regolarmente in vendita presso i concessionari del marchio giapponese anche se non in tutti i Paesi, il suo nome significa infatti “Futuro”.</div>
                </template>
            </microarg>
            <microarg title="Treni a idrogeno" src="https://cms.qz.com/wp-content/uploads/2018/09/alstom-ilint-cordia-hydrogen-train.jpg?quality=75&strip=all&w=1600&h=900&crop=1">
                <template #punti>
                    <div>Il convoglio si chiama Alstom Coradia iLint e può ospitare fino a 300 passeggeri e circola sui binari della Bassa Sassonia, nel Nord della Germania.iLint ha un’autonomia dell’ordine di 1000 chilometri, emette soltanto vapore e acqua di condensa, un risultato a “emissioni zero” che ne annulla l’impatto ambientale.</div>
                </template>
            </microarg>
             <microarg title="Nel futuro" src="https://images.unsplash.com/photo-1540234142602-e9abed6768c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                <template #punti>
                    <div>Sembra che il trasporto dell’idrogeno non sia conveniente per lunghe distanze. I progressi nella tecnologia dell'elettrolisi e delle pile a combustibile non hanno ancora risolto i vari problemi di trasferimento. Ci sono vari metodi per trasportare idrogeno, non sempre del tutto convenienti.<br>Condotte gas naturale, linee elettriche, condotte a idrogeno ad alta pressione, condotte miste.
                    </div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Ambiente" :style="macrostyle"> 
            <!--<microarg title="Pro e Contro" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div class="cnt_pro-contro">
                        <div class="pro">
                        <p style="font-weight:bold">Pro:</p>
                        Soluzione al problema energetico mondiale 
                        <br>
                        <br>
                        Trasporto e la conservazione di energia nel tempo
                        <br>
                        <br>
                        Non emette sostanze inquinanti.
                        <br>
                        <br>
                        <br>
                        </div>
                        <div class="contro">
                        <p style="font-weight:bold;" >Contro:</p>
                        Non conveniente quando prodotta da energia elettrica o combustibili fossili 
                        <br>
                        <br>
                        Energia solare e relativi accumulatori a batteria sono visti come le alternative all'idrogeno più praticabili
                        <br>
                        <br>
                        Richiederà molte trasformazioni all'industria
                        <br>
                        <br>
                        Soluzioni alternative come i biocarburanti (etanolo, biodiesel, biometano) richiedono costi minori

                        </div>
                       
                    </div>
                </template>
            </microarg>-->


            <microarg title="Benefici" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>La sostituzione delle fonti energetiche non rinnovabili, come i combustibili fossili, darebbe una soluzione al problema energetico mondiale. L’unico sistema di produzione dell’idrogeno economicamente sostenibile è il reforming.</div>
                </template>
            </microarg>
            <microarg title="Ostacoli" src="https://images.unsplash.com/photo-1564608938148-e3c5325907ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80">
                <template #punti>
                    <div>•	Convenienza termodinamica<br>
                         •	Convenienza economica<br>
                         •	Emergere di soluzioni alternative<br>
                         •	Impegno diretto dell’energia solare<br>
                    </div>
                </template></microarg>
            <microarg title="Problemi ambientali" src="https://images.unsplash.com/photo-1516660198581-439b5ac48822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Al giorno d’oggi, circa il 48% dell’idrogeno gassoso viene creato grazie al reforming del gas naturale, attraverso il metodo della reazione di spiazzamento dell’acqua. Questo processo crea come sotto prodotto l’anidride carbonica (CO2), un gas serra.<br>L’idrogeno molecolare tende a fuoriuscire lentamente da ogni tipo di suo mezzo di contenimento.</div>
                </template>
            </microarg>
            <microarg title="Problemi attualmente irrisolvibili" src="https://images.unsplash.com/photo-1523537444585-432d2bacc10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Attualmente l’energia necessaria per comprimere l’idrogeno è uno dei problemi maggiori, perché è richiesta in grandi quantità e i costi sono elevati.<br>Inoltre è stato prospettato che automobili alimentate  da batterie al litio-ione siano dei trasportatori energetici più efficienti rispetto alle automobili ad indrogeno.</div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Il Futuro" :style="macrostyle">
            <microarg title="Toyota sempre presente" src="https://images.unsplash.com/photo-1522384731535-d1ccd4345321?ixlib=rb-1.2.1&auto=format&fit=crop&w=1244&q=80">
                <template #punti>
                    <div>
                        L’azienda anche oggi non si smentisce e riesce a sbalordire portando sul mercato soluzioni sempre più nuove e rivoluzionarie, usando una nuova forma di energia: l’idrogeno.
                        <br>Anche se non è stata la prima a usarla, Hyundai detentrice del record, l’azienda nipponica per eccellenza è stata la prima a portare sul mercato prodotti affidabili e di qualità eccellente.
                    </div>
                </template>
            </microarg>
            <microarg title="La colpa del TQM" src="https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1999&q=80">
                <template #punti>
                    <div>Se da un lato c’è l’esigenza dell’azienda che vuole fatturare, dall’altro la filosofia del TQM, che se pure recondita, è ancora presente nella mente di tutti i Giapponesi; infatti, il secondo motivo è strettamente legato all’economia dello stato. 
                        <br>Il Giappone è il più grande importatore di gas naturale allo stato liquido, che rappresenta il 30% dell’energia usata nel paese, dopo il disastro di Fukushima, che ha portato lo stato a mettere fuori uso la maggior parte dei reattori. 
                        <br>Questo motivo ha spinto l’azienda a puntare maggiormente su questa nuova fonte di energia.</div>
                </template></microarg>
            <microarg title="A cosa si punta" src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
                <template #punti>
                    <div>La futura visione aziendale punta a diminuire del 90% le emissioni di C02 nell’atmosfera rispetto all’emissioni del 2010. 
                       <br> Per mantenere la promessa di diminuire il 90% delle emissioni, l’azienda ha bisogno di un utilizzo massiccio di celle per la conservazione di idrogeno, ciò vuol dire che le altre aziende dovranno essere pronte a compiere questo passo. 
                    </div>
                </template>
            </microarg>
             <microarg title="La concorrenza" src="https://images.wired.it/wp-content/uploads/2018/05/04011945/1525382380_Elon-Musk.jpg">
                <template #punti>
                    <div>
                        Elon Musk, co-fondatore e CEO di Tesla, ha affermato più volte che l’idea che vedrebbe l’idrogeno usato nelle macchine, non lo entusiasma, anzi secondo lui l’idea è completamente inutile e priva di fondamenta. 
                        <br>Il dibattito continua ad essere dirompente ed estenuante, tuttavia non sembrano esserci segni di passi indietro da parte di Toyota. 
                    </div>
                </template>
            </microarg>
            <microarg title="Hydrogen council" src="https://global.toyota/pages/news/images/2018/06/14/1700/20180614_02_ogp.jpg">
                <template #punti>
                    <div>
                        Hydrogen Council, dal sito web, è un’iniziativa globale per guidare l’energia, il trasporto e le industrie in una visione unita e con ambizioni a lungo termine per quanto riguarda l’uso e gli investimenti nel campo dell’idrogeno per l’energia.
                        <br>Con questa iniziativa si vuole definire ed implementare un definito piano d’azione con gli appropriati strumenti di supporto che aiuteranno ad accelerare gli investimenti sulla commercializzazione su larga scala di soluzioni basate sulla tecnologia dell’idrogeno per industrie di tutto il mondo.
                    </div>
                </template>
            </microarg>
            <microarg title="Parola ai dati" src="https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80">
                <template #punti>
                    <div>
                        Il 20 Gennaio 2020, Hydrogen Council, ha pubblicato un nuovo report, dove afferma che il costo dell’idrogeno sta scendendo notevolmente. Ha dichiarato anche che entro il 2030, il prezzo dell’idrogeno scenderà quasi al 50% del valore attuale.
                        <br>È anche bene precisare che Hydrogen Council  per questa ricerca ha effettuato diverse ipotesi, talvolta estremamente positive, per esempio un futuro aumento di  distributori a idrogeno, previsione non coerente con l’andamento reale. </div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Merccato" :style="macrostyle"> 
            <microarg title="panoramica mercato" src="https://d279m997dpfwgl.cloudfront.net/wp/2018/02/0209_markets-1000x666.jpg">
                <template #punti>
                    <div>
                        <ul>
                            <li> Mercato in crescita  </li>
                            <li> Compressione del gas domina </li>
                            <li> Soluzione green  </li>
                            <li> Nord america e europa   </li>
                            <li> Vari usi  </li>
                        </ul>
                    </div>
                </template>
            </microarg>
            <microarg title="dinamiche di mercato" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div class="cnt_pro-contro">
                        <div class="pro">

                            <ul>
                            <li>Aumento di richiesta</li>
                                <ul>
                                    <li>richiesta industria chimica</li>
                                    <li>veicoli elettrici</li>
                                    <li>infrastrutture in aumento</li>
                                </ul>
                            </ul>

                            <ul>
                            <li>Vincoli: costo</li>
                                <ul>
                                    <li>in diminuzione</li>
                                    <li>avanzamento tecnologico</li>
                                </ul>
                            </ul>
                        </div>

                        <div class="contro">
                            <ul>
                            <li>Opportunità</li>
                                <ul>
                                    <li>power-to-gas</li>
                                    <li>green</li>
                                    <li>veicoli elettrici</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </template></microarg>
            <microarg title="aziende" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div class="cnt_pro-contro">
                        <div class="pro">
                            <ul>
                            <li>Offerta di servizio</li>
                                <ul>
                                    <li>Hydrogenics</li>
                                    <li>ITM Power</li>
                                    <li>Ballard Power</li>
                                </ul>
                            </ul>

                            <ul>
                            <li>Investimenti</li>
                                <ul>
                                    <li>3m</li>
                                    <li>AirBus</li>
                                    <li>AirLiquide</li>
                                </ul>
                            </ul>
                        </div>
                        <div class="contro">

                        <ul>
                        <li>Hydrogenics</li>
                            <ul>
                                <li>power-to-gas</li>
                                <li>green</li>
                                <li>veicoli elettrici</li>
                            </ul>
                        </ul>

                        <ul>
                        <li>H2Planet</li>
                            <ul>
                                <li>power-to-gas</li>
                                <li>green</li>
                                <li>veicoli elettrici</li>
                            </ul>
                        </ul>
                        </div>

                    </div>
                </template>
            </microarg>
            <microarg title="Hydrogen council" src="https://global.toyota/pages/news/images/2018/06/14/1700/20180614_02_ogp.jpg">
                <template #punti>
                    <div>

                        <ul>
                            <li> Iniziativa globale   </li>
                            <li> Coalizione ceo </li>
                            <li> Leading aziende hydrogen  </li>
                        </ul>



                    </div>
                </template>
            </microarg>
            <microarg title="Grazie! " src="https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80">
                <template #punti>
                    <div>Ringraziamo per l'attenzione</div>
                </template>
            </microarg>
        </macroarg>
        <div class="first-page" :class="{'on-first':firstPage}">
            <div class="first"> 
                <b>ATTENZIONE: </b> design in aggiornamento<br><br>
                Progetto sulla tecnologia Idrogeno di
                Contento Alessia, El Aamraoui Youssef, Foglio Giulia, Mazzucchi Marcello, Silva Marceu, Popolizio Domenico della classe 5bin dell'ITT G. Fauser di Novara a.s. 2019/2020
            </div>
            <div  class="second"> 
                <div @click="main" class="go-main btn" > <i class="material-icons">visibility</i>  sito  </div>
                <div @click="download" class="go-main btn" > <i class="material-icons">description</i>  testo integrale </div>
            </div>
        </div>
        <div class="logo" :class="{'on-first':firstPage, 'on-macro':$route.params.macroarg}" @click="first"><span class="h">H</span><span>Project</span></div>
    </div>
</template>

<script>
import Macroarg from '../components/Macroarg';
import Microarg from '../components/Microarg';

export default {
    name: 'mainpage',
    components: {
        Macroarg, Microarg
    }, 
    data() {
        return {
            macrostyle: {},
            firstPage: true
        }
    }, 
    mounted() {
        console.log(this.$children); 
        this.onresize();
        window.addEventListener('resize', this.onresize); 
        if(this.$route.params.macroarg) {
            this.firstPage=false;
        }
    },
    methods: {
        onresize() {  
            if(window.innerWidth >= 1500) { 
                this.macrostyle = {
                    width: `${1/this.$children.length*100}%`
                }
            }
            else { 
                this.macrostyle = {
                    height: `${1/this.$children.length*100}%`
                }
            } 
        },
        first() {
            this.firstPage = true;
        },
        main() {
            this.firstPage = false;
        },
        download() {
            window.open('hydrogen.docx','blank');
        }
    }
}
</script>

<style scoped>

.mainpage { 
    height: 100vh;
}
@media (min-width: 1500px) {   
    .mainpage {  
        display: flex; 
    }
} 
.macroarg {   
    width: auto;
    transition-duration: .7s; 
    background-position: center;
}
.macroarg.active { 
    z-index: 3;
}
.macroarg.disabled {
    z-index: 0;
}
.macroarg:not(.active) {
    cursor: pointer;
}

.cnt_pro-contro{
    display:inline-flex;
    width:70vw;
    overflow-y:auto;
    height:40%;

}

.contro{
    margin-left:10vw;
}

.icon {
    margin-right: 20px;
}

.logo {
    position: absolute;
    top: 20px;
    left: 10px;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    transition-duration: 0.7s;
}

.h {
    font-size: 3.5em;
    margin-right: 5px;
}
.first-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* background-color: rgba(255,255,255,0.5);  */
    background-image: url("https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    transition-duration: 0.7s;
}
.mainpage.on-first .macroarg {
    filter: blur(10px);
}
.first-page > div { 
    position: absolute;
    overflow: auto; 
    padding: 20px;
    width: calc(100% - 40px); 
}
.first-page > div.first {
    bottom: 110px;
    top: 10em;
    max-width: 700px;
}
.first-page > div.second {
    display: flex;
    justify-content: center;
    bottom: 0;
    
}

.first-page:not(.on-first) {
    top: -100vh;
}


.btn {
    width: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.7em;
    text-transform: uppercase;
    font-weight: bold;
    transition-duration: .7s;
    margin: 10px;
}
.first-page .btn:hover{  
    color: var(--secondary-color);
    cursor: pointer;
}
.first-page .btn { 
    color:  var(--primary-color); 
}

.logo.on-first {
    font-size: 2em;
    top: 40px;
    left: 40px;
}
.logo:not(.on-first):not(.on-macro):hover {
    cursor: pointer; 
    color: var(--secondary-color);
}
.logo.on-macro {
    opacity: 0;
    pointer-events: none;
}

@media (min-width: 1500px) {  
    .macroarg { 
        height: 100vh; 
        display: block;
        /* float: left; */
        /* transition-duration: .3s; */
    }
    .macroarg.disabled {
        /* transition-duration: .5s; */
        width: 0 !important; 
    }
    .macroarg.active {
        /* transition-duration: 1s; */
        width: 100vw !important; 
    }
}
@media (max-width: 1499px) {  
    .macroarg {
        width: 100vw; 
        display: block;
    } 
    .macroarg.disabled { 
        height: 0 !important;
    }
    .macroarg.active { 
        height: 100vh !important; 
    }
    .cnt_pro-contro{
        display:block;
        width:70vw;
        overflow-y:auto;
        height:50%;
    }
    .contro{
        margin-left:10vw;
        overflow:auto;
        height:50%;
        float:right;
    }
    .pro{
        margin-left:10vw;
        overflow:auto;
        height:50%;
        float:right;
    }
}

</style>