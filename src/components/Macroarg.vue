<template>
    <div class="macroarg" :class="{'active':isActive, 'disabled':isDisabled}" 
        :style="{'background-image':`url(${src})`}" >
        <div class="macro-content" >
            <slot>
            </slot>
        </div>
        <div class="macro-title" @click="home" >{{title}}</div>
        <div class="dots">
            <div class="dot" 
                v-for="child in $children" 
                v-bind:key="child.title" 
                @click="micro(child)" 
                :class="{'active':child.isActive}"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'macroarg',
    props: {
        title: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            src: null,
        }
    },
    computed: {
        isActive() {
            return this.$route.params.macroarg === this.title;
        },
        isDisabled() {
            return this.$route.params.macroarg;
        },
    }, 
    mounted() {
        if(this.isActive && !this.$route.params.microarg) {
            this.micro(this.$children[0]);
        }
        this.src = this.$children[0].src;
    },
    methods: {
        activate() {  
            if(!this.isActive && !this.$route.params.macroarg) { 
                if(!this.$route.params.microarg) {  
                    this.micro(this.$children[0]);
                } 
            }
        },
        micro(child) {
            if(this.$route.params.microarg !== child.title) {
                this.$router.push({path: `/arg/${this.title}/${child.title}`}); 
            }
        },
        home() {  
            if(!this.$route.params.macroarg) {
                this.activate();
            }
            else {
                this.$router.push({path: `/`});
            }
        }
    }
}
</script>

<style scoped>
.macroarg {
    --dots-size: 25px;
    position: relative;
    background-repeat: no-repeat; 
    background-position: center;
    transition-duration: .5s;
    transition-timing-function: linear;
    overflow: hidden;
} 
.macroarg.active .macro-title {
    color: var(--secondary-color);
}
.macroarg .microarg {
    transition-duration: .7s;
}

.macroarg:not(.active) * {
    display: none;
}

.macroarg:not(.active):not(.disabled) .macro-content {
    display: block;
}

.macroarg:not(.active) .macro-title {
    display: block;
    top:50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    white-space: nowrap;
}
.macroarg.disabled:not(.active) .macro-title {
    display: none; 
}
.macroarg:not(.active) .microarg {
    display: block;
    height: 0; 
}

.macroarg:not(.active) .microarg:first-child {
    height: 100%; 
}
.microarg.disabled {
    height: 0; 
}




.macro-content { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.dots {
    height: auto;
    width: calc( var(--dots-size) + 4px );
    position: absolute;
    right: calc( var(--dots-size) / 2 );;
    top: 50%;
    transform: translateY(-50%);
}

.dot {
    width: var(--dots-size);
    height: var(--dots-size);
    margin-bottom: calc( var(--dots-size) * 1.2 );
    border: 2px solid white;
    border-radius: var(--dots-size);
}

.dot:last-child {
    margin-bottom: 0;
}

.dot:hover {
    background-color: var(--primary-color);
    cursor: pointer;
    transition-duration: .2s;
}
.dot.active {
    background-color: var(--primary-color);
}

/* .microarg:not(.active) {
    display:none;
} */

.macro-title {
    position: absolute;  
    text-transform: uppercase;
    transition-duration: 1s;
    font-weight: bold;
}

.macro-title:hover { 
    color: var(--secondary-color);
    cursor: pointer;
}

.macroarg:not(.active) .microarg:first-child { 
    transition-duration: 0.7s; 
    background-size: cover; 
}
.macroarg:not(.active):hover .microarg:first-child  { 
    transform: scale(1.2);
} 
@media (min-width: 1500px) {  
    .macroarg:not(.active) .macro-title {
        font-size: 2.3em;
    }
    .macroarg.active .macro-title  { 
        font-size: 3em;
        top: calc(15vh - 1em);
        left: 7vh;  
    } 
}
@media (max-width: 1499px) {  
    .macroarg:not(.active) .macro-title {
        font-size: 2em;
    }
    .macroarg.active .macro-title { 
        font-size: 2.7em;
        top: calc(15vh - 1.2em);
        left: 7vh;  
    }
    
}
</style>