<template>
    <div class="microarg" 
        :class="{'active':isActive, 'disabled':isDisabled}" 
        :style="{
            'background':`linear-gradient( var(--background-color), var(--background-color) ), url(${src})`,
            'background-position':'center',
            'background-size':''
        }"> 
        <div class="sottotitolo">
            {{title}}
        </div>
        <div class="punti">
            <div class="punti-interno">
                <slot name="punti">
                </slot> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'microarg',
    props: {
        title: {
            required: true,
            type: String
        }, 
        src: {
            required: false,
            type: String
        }
    },
    computed: {
        isActive() {
            return this.$route.params.microarg === this.title;
        },
        isDisabled() {
            return this.$route.params.microarg !== this.title;
        },
        color() {
            switch(this.title[4]) {
                case '1':
                    return 'lightblue';
                case '2':
                    return 'blue';
                case '3':
                    return 'black';
            }
        }
    },
    methods: { 
    }
}
</script>

<style scoped>
.microarg {
    width:100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    text-transform: uppercase;

}

.microarg * { 
    transition-duration: 0.7s;
}
.microarg:not(.active) .sottotitolo {
    white-space: nowrap;
}
.microarg.disabled * {
    opacity: 0;
}
.sottotitolo { 
    font-weight: bold; 
    margin-top: 15vh;
    margin-left: 7vh;
}
.punti {
    margin-left: 7vh;
    width: 80%;
    margin-top: 5vh;
    font-size: 24px;
    text-transform: none;
    overflow-y:auto;
    max-height: calc(65vh);
    transform: scaleX(-1);
}
.punti-interno { 
    transform: scaleX(-1);
    line-height: 2.0;
    word-spacing: 9px;
}
.microarg:not(.active) * {
    display: block;
}
@media (min-width: 1500px) {   
    .sottotitolo {  
        font-size: 6em;  
    }
}
@media (max-width: 1499px) {   
    .sottotitolo {  
        font-size: 2.8em;  
    }
}
 
</style>