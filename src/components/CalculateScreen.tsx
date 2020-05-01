import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import {useStore} from 'vuex-simple';
import {MyStore} from '@/store/store';
import {calcKey} from '@/types'

import '@/assets/css/CalculateScreen.css'

interface Props{
  buffer: Array<calcKey>;

}

@Component
export default class App extends VueComponent<Props> {
  @Prop()
  private buffer!: Array<calcKey>;

  public store: MyStore = useStore(this.$store);
  get Buffer(): string{
    let result: string = '';
    if (this.buffer.length){
        this.buffer.forEach(buf => {
        result += buf.type === 'action' ? ` ${buf.value} ` : buf.value;
      });
    }else{
      return '';
    }
    return result;
  }
  render() {
    return (
      <div class="calculate-screen">
        <div class="calculate-screen__content">
          <div class="screen-content">
            <span class="calculate-screen__buffer" html>
              {this.Buffer}
            </span>
          </div>
          <div class="screen-content">
            <span class="calculate-screen__result">
              {typeof this.store.calculator.Result === 'number'?`= ${this.store.calculator.Result}`:''}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
