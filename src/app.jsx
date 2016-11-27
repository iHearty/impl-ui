import React, {Component} from 'react';

import { Size, Color } from './base/enums';
import Button from './button';
import TextInput from './textinput';

export default class App extends Component {
   onClick() {
      let textinput = this.refs.textinput1;
      console.log(textinput);
   }

   render() {
      return (
         <div onClick={this.onClick.bind(this)}>
            <Button type='' size={Size.LARGE} color={Color.PRIMARY} radius="3px" >PRIMARY</Button>
            <Button type='' size={Size.NORMAL} color={Color.DEFAULT} textable>SECONDARY</Button>
            <Button type='decorous' size={Size.SMALL} color={Color.SUCCESS} text="LOADING..." radius="3px">SUCCESS</Button>
            <Button type='decorous' size={Size.TINY} color={Color.DANGER}>DANGER</Button>
            <Button type='decorous' size={Size.NORMAL} color={Color.WARNING}>WARNING</Button>
            <div>
               <div>
                  <TextInput ref="textinput1" size={Size.LARGE} color={Color.DEFAULT} value="DEFAULT" />
                  <TextInput size={Size.NORMAL} color={Color.PRIMARY} value="PRIMARY" />
                  <TextInput size={Size.SMALL} color={Color.SUCCESS} value="SUCCESS" />
                  <TextInput size={Size.TINY} color={Color.WARNING} value="WARNING" />
                  <TextInput color={Color.DANGER} />
               </div>
            </div>
         </div>
      );
   }
}
