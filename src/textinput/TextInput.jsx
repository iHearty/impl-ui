import React from 'react';

import BaseCmpt from '../base/BaseCmpt';
import { Size, Color } from '../base/enums';

require('./TextInput.scss');

class TextInput extends BaseCmpt {
   constructor(props) {
      super(props);

      this.state = {};
   }

   baseClass() {
      return this.props.baseClass || 'impl-textinput-base';
   }

   implRender() {
      let className = ['impl-textinput'];
      className.push(this.props.type);
      className.push(`size-${this.props.size || Size.NORMAL}`);
      className.push(`color-${this.props.color || Color.PRIMARY}`);

      if(!this.props.disabled && this.state.hover) {
         className.push((this.props.type ? this.props.type + '-' : '') + 'hover');
      }

      let style = {};

      if(this.props.radius) {
         style['borderRadius'] = this.props.radius;
      }

      return (
         <div className={className.join(' ')} style={style}>
            <input type="text" defaultValue={this.props.value} />
         </div>
      );
   }
}

export default TextInput;