// 3 ways for data changes: computed, methods & watch
// code wird ausgeführt, wenn
// computed: abhängige Daten sich ändern
// methods: sich sichtbare daten ändern, d.h. wen ndas template neu gerendert wird
// watch: wenn sich die beobachteten daten ändern
// einsatz:
// computed: Daten welche von anderen abhängen
// method:Eventlistener ( click) oder für permanentes ändern von Daten
// watcher: für code welcher sich nicht direkt aufs Template auswirkt z.B. http request, localStorage nutzen etv.
