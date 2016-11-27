import React, {Component} from 'react';

import { Size, Color } from './base/enums';
import Button from './button';

export default class App extends Component {
   render() {
      return (
         <div>
            <Button type='' size={Size.NORMAL} color={Color.PRIMARY} radius="3px" disabled>PRIMARY</Button>
            <Button type='light' size={Size.NORMAL} color={Color.SECONDARY}>SECONDARY</Button>
            <Button type='light' size={Size.NORMAL} color={Color.SUCCESS} text="LOADING..." radius="3px">SUCCESS</Button>
            <Button type='' size={Size.NORMAL} color={Color.DANGER}>DANGER</Button>
            <Button type='' size={Size.NORMAL} color={Color.WARNING}>WARNING</Button>
         </div>
      );
   }
}
