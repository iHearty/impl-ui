import React from 'react';
import BaseCmpt from '../base/BaseCmpt';

require('./Button.scss');

class Button extends BaseCmpt {
   render() {
      return (
         <div>
            <button>{this.props.children}</button>
         </div>
      );
   }
}

export default Button;
