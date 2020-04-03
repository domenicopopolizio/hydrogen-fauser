<template>
    <div class="mainpage" @resize='onresize' :class="{'on-first':firstPage, 'on-macro':$route.params.macroarg}">
        <macroarg title="cos’è" :style="macrostyle"  >
            <microarg title="L'Elemento" src="https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" >
                <template #punti>
                    <div>
                        L’Idrogeno è il primo elemento della tavola periodica, posto in alto a sinistra col simbolo “H”, è il più leggero con numero atomico di 1.
                    </div>
                </template> 
            </microarg>
            <microarg title="Proprietà fisiche" src="https://www.reccom.org/wp-content/uploads/2019/12/what-element-did-henry-cavendish-discover-in-1766.jpg" >
                <template #punti>
                    <div>L'idrogeno metallico solido ha una conduttività elettrica maggiore rispetto a qualsiasi altro elemento solido. </div>
                </template> 
            </microarg> 
            <microarg title="Proprietà chimiche" src="https://www.e-alyss.com/blog/wp-content/uploads/2015/10/Scientist.jpg" >
                <template #punti>
                    <div>Quando l'idrogeno reagisce con l'ossigeno in un processo di conversione elettrochimica o di combustione per generare energia, il prodotto di reazione risultante è vapore acqueo. </div>
                </template> 
            </microarg> 
            <microarg title="Proprietà combustibili" src="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" >
                <template #punti>
                    <div>L'idrogeno è altamente infiammabile in un'ampia gamma di temperature e concentrazioni.</div>
                </template> 
            </microarg> 
        </macroarg>
        <macroarg title="Produzione" :style="macrostyle" >
            <microarg title="In crescita" src="https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1975&q=80">
                <template #punti >
                    <div>Il tasso di crescita stimato per la produzione d'idrogeno è del 10% annuo. </div>
                </template>
            </microarg>
            <microarg title="In Italia" src="https://images.unsplash.com/photo-1576091160651-e028ca26a943?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Il Gruppo Sapio è il maggiore produttore di "idrogeno. La sua raffineria di Mantova produce 450.000 metri cubi di H2 giorno.</div>
                </template>
            </microarg>
            <microarg title="Infrastrutture" src="https://images.unsplash.com/photo-1563696992148-626c57c95457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>L’economia dell’idrogeno necessita di nuove infrastrutture di produzione, stoccaggio e trasporto di questo nuovo combustibile. </div>
                </template>
            </microarg>
            <microarg title="Micro-fibre" src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Questa tecnica è ancora in fase di sviluppo.</div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Trasporto" :style="macrostyle" > 
            
            <microarg title="Auto" src="https://t1-cms-1.images.toyota-europe.com/toyotaone/itit/toyota-mirai-2018-exterior-tme-001-a-full_tcm-20-1142850.jpg">
                <template #punti>
                    <div>Quando si parla di auto ad idrogeno si intende un veicolo che converte l’energia chimica in energia meccanica. </div>
                </template>
            </microarg>
            <microarg title="Treni a idrogeno" src="https://cms.qz.com/wp-content/uploads/2018/09/alstom-ilint-cordia-hydrogen-train.jpg?quality=75&strip=all&w=1600&h=900&crop=1">
                <template #punti>
                    <div>Il convoglio si chiama Alstom Coradia iLint, può ospitare fino a 300 passeggeri e circola nel Nord della Germania.</div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Ambiente" :style="macrostyle"> 
            <microarg title="Pro e Contro" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
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
            </microarg>
            <microarg title="IL muro" src="https://images.unsplash.com/photo-1564608938148-e3c5325907ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80">
                <template #punti>
                    <div>Il reforming del gas naturale, che permette la produzione d’idrogeno crea come sottoprodotto l'anidride carbonica (CO2), un gas serra.</div>
                </template></microarg>
            <microarg title="Altre tecniche" src="https://images.unsplash.com/photo-1515075015069-3ccced1acbb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Come alternativa alla generazione per via elettrolitica, l'idrogeno può essere ottenuto dal metano procedura con un'efficienza energetica di circa l'80%</div>
                </template>
            </microarg>
            <microarg title="Il blocco" src="https://images.unsplash.com/photo-1523537444585-432d2bacc10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                <template #punti>
                    <div>Gli esperti pensano che l'energia necessaria per comprimere il gas sia uno dei problemi irrisolvibili nell'idea di costituire un'economia basata sull'idrogeno</div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="Il Futuro" :style="macrostyle">
            <microarg title="obbiettivo" src="https://images.unsplash.com/photo-1522384731535-d1ccd4345321?ixlib=rb-1.2.1&auto=format&fit=crop&w=1244&q=80">
                <template #punti>
                    <div>Ora è alle prese con il suo nuovo obbiettivo, quello di convertire la luce solare e l’umidità presente nell’aria in idrogeno. </div>
                </template>
            </microarg>
            <microarg title="perchè" src="https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1999&q=80">
                <template #punti>
                    <div>Il Giappone è il più grande importatore di gas naturale allo stato liquido, che rappresenta il 30% dell’energia usata nel paese</div>
                </template></microarg>
            <microarg title="collettivo" src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
                <template #punti>
                    <div>L’azienda in visione futura, punta a diminuire del 90% le emissioni di C02 nell’atmosfera rispetto all’emissioni del 2010. </div>
                </template>
            </microarg>
             <microarg title="La concorrenza" src="https://images.wired.it/wp-content/uploads/2018/05/04011945/1525382380_Elon-Musk.jpg">
                <template #punti>
                    <div>
                        Elon Musk, ha affermato più volte che l’idea è completamente inutile e priva di fondamenta. 
                    </div>
                </template>
            </microarg>
            <microarg title="dati" src="https://images.unsplash.com/photo-1506555191898-a76bacf004ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80">
                <template #punti>
                    <div>Hydrogen Council ha dichiarato che entro il 2030, il prezzo dell’idrogeno scenderà quasi al 50% del valore attuale.</div>
                </template>
            </microarg>
        </macroarg>
        <macroarg title="titolo6" :style="macrostyle"> 
            <microarg title="sub1" src="https://d279m997dpfwgl.cloudfront.net/wp/2018/02/0209_markets-1000x666.jpg">
                <template #punti>
                    <div>1</div>
                </template>
            </microarg>
            <microarg title="sub2" src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1966&q=80">
                <template #punti>
                    <div>2</div>
                </template></microarg>
            <microarg title="sub3" src="https://global.toyota/pages/news/images/2018/06/14/1700/20180614_02_ogp.jpg">
                <template #punti>
                    <div>3</div>
                </template>
            </microarg>
            <microarg title="sub4" src="https://www.congrestolken.nl/wp-content/uploads/stock-market.jpg">
                <template #punti>
                    <div>3</div>
                </template>
            </microarg>
            <microarg title="sub5" src="https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80">
                <template #punti>
                    <div>3</div>
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
                <div @click="main" class="go-main btn" > <i class="material-icons">web</i> sito </div>
                <div @click="download" class="go-main btn" > <i class="material-icons">description</i> testo </div>
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
    background-color: var(--background-color);
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