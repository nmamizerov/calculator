import {Mutation, State} from 'vuex-simple';
import {calcKey} from '@/types'


export class CalcModule{

    @State()
    public buffer: Array<calcKey>;
    @State()
    public activeBoard: boolean;
    constructor(){
        this.activeBoard = true;
        this.buffer = [
            {value:'1', type:'value'},
            {value:'+', type:'action'},
            {value:'2', type:'value'},
        ];
    }

    @Mutation()
    public addItem(item: calcKey){
        if (this.buffer.length){
            if (!(this.buffer[this.buffer.length -1].type === 'action' && item.type === 'action')){
                this.buffer.push(item);
            }
        }else{
            this.buffer.push(item);
        }
        
        
    }
    @Mutation()
    public clearBuffer(){
        this.buffer = [];
    }
    @Mutation()
    public changeActiveState(){
        this.activeBoard = !this.activeBoard;
    }
    @Mutation()
    public getResult(){
        this.buffer = [
            {
                type:'value',
                value: this.Result
            }
        ]
    }
    get Result():string{
        let result: string = '';
        if (this.buffer.length){
        this.buffer.forEach((buf, index) => {
            result += buf.type === 'action' && index === this.buffer.length-1 ? `` : buf.value;
        });
        }else{
            return '';
        }
        return  eval(result);
    }
    public async clearBufferAsync(){
        this.changeActiveState();
        await new Promise(r => setTimeout(r, 200));
        this.clearBuffer();
        this.changeActiveState();
    }
    public async addItemAsync(item: calcKey){
        this.changeActiveState();
        await new Promise(r => setTimeout(r, 10));
        this.addItem(item);
        this.changeActiveState();
    }
    public async getResultAsync(){
        this.changeActiveState();
        await new Promise(r => setTimeout(r, 2000));
        this.getResult();
        this.changeActiveState();
    }
    
}