// handle: Vuex 4 removes its global typings for this.$store
// When used with TypeScript, you must declare your own module augmentation.
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
