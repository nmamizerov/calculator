import {Module, State} from 'vuex-simple';
import {CalcModule} from './modules/calculator';

export class MyStore{

  @Module()
  public calculator = new CalcModule();
}




