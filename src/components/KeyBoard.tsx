import { Component, Vue } from 'vue-property-decorator';
import {useStore} from 'vuex-simple';
import {MyStore} from '@/store/store';
import CalcButton from './keyboard/CalcButton';
import {calcKeys} from '@/libs/keyData';
import '@/assets/css/KeyBoard.css'

@Component
export default class App extends Vue {

  
  public store: MyStore = useStore(this.$store);

  
  
  public keyClickHandler(val: Object): void{
    this.$emit('sendValue', val);
  }
  public createKeyBoard(): Array<JSX>{
    
    return calcKeys.map(val=>{
      return <CalcButton keyObj={val} keyClick={this.keyClickHandler}/>;
    })
  }
  render() {
    return (
      <div class={{"keyboard":true, 'disabled': !this.store.calculator.activeBoard}}>
        {this.createKeyBoard()}
      </div>
    )
  }
}
