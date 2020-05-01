import { Component, Vue } from 'vue-property-decorator';
import KeyBoard from './KeyBoard';
import CalculateScreen from './CalculateScreen';
import {useStore} from 'vuex-simple';
import {MyStore} from '@/store/store';
import {calcKey} from '@/types'

import '@/assets/css/App.css'

@Component
export default class App extends Vue {


  public store: MyStore = useStore(this.$store);
  
  get Buffer(): Array<calcKey>{
    return this.store.calculator.buffer;
  }
  public updateScreen(val: calcKey): void{
    if (val.value === 'C'){
      this.store.calculator.clearBufferAsync();
    }else if (val.value === '='){
      this.store.calculator.getResultAsync();
    }else{
      this.store.calculator.addItem(val);
    }
  }
  render() {
    return (
      <div id="appContainer">
        <CalculateScreen buffer={this.Buffer}></CalculateScreen>
        <KeyBoard onsendValue={(val: calcKey)=>this.updateScreen(val)}></KeyBoard>
      </div>
    )
  }
}
