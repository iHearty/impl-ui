import React from 'react';

import BaseCmpt from '../base/BaseCmpt';
import { Size, Color } from '../base/enums';

require('./Button.scss');

class Button extends BaseCmpt {
   baseClass() {
      return this.props.baseClass || 'impl-button-base';
   }

   implRender() {
      let className = ['impl-button'];
      className.push(this.props.type);
      className.push(`size-${this.props.size || Size.NORMAL}`);
      className.push(`color-${this.props.color || Color.PRIMARY}`);

      return (
         <div className={className.join(' ')}>
            <button>{this.props.children}</button>
            <span></span>
         </div>
      );
   }
}

export default Button;
