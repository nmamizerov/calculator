import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import {useStore} from 'vuex-simple';
import {MyStore} from '@/store/store';
import {calcKey, calcEmitValue} from '@/types'
import '@/assets/css/CalcButton.css'

interface Props{
    keyClick: Function,
    keyObj: calcKey
}

@Component
export default class App extends VueComponent<Props> {

    @Prop()
    private keyClick!: Function;
    @Prop()
    private keyObj!: calcKey;

    get getValue():calcEmitValue{
        return {value: this.keyObj.value, type: this.keyObj.type}
    }
    public store: MyStore = useStore(this.$store);

    render() {
        return (
            <div onClick={()=>this.keyClick(this.getValue)} style={{gridColumn: `span ${this.keyObj.size}`}} class={['keyboard__buton', this.keyObj.type]}>
                {this.keyObj.value}
            </div>
        )
    }
}
