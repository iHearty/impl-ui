import React, {Component} from 'react';

import { Size, Color } from './base/enums';
import Button from './button';

export default class App extends Component {
   render() {
      return (
         <div>
            <Button type='light' size={Size.NORMAL} color={Color.PRIMARY}>PRIMARY</Button>
            <Button type='light' size={Size.NORMAL} color={Color.SECONDARY}>SECONDARY</Button>
            <Button type='light' size={Size.NORMAL} color={Color.SUCCESS}>SUCCESS</Button>
            <Button type='light' size={Size.NORMAL} color={Color.DANGER}>DANGER</Button>
            <Button type='light' size={Size.NORMAL} color={Color.WARNING}>WARNING</Button>
         </div>
      );
   }
}
