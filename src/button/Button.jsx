import React from 'react';

import BaseCmpt from '../base/BaseCmpt';
import { Size, Color } from '../base/enums';

require('./Button.scss');

class Button extends BaseCmpt {
   constructor() {
      super();

      this.state = {};
   }

   baseClass() {
      return this.props.baseClass || 'impl-button-base';
   }

   mouseenter() {
      this.setState({'hover': true});
   }

   mouseleave() {
      this.setState({'hover': false});
   }

   implRender() {
      let className = ['impl-button'];
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
         <div className={className.join(' ')} style={style} onMouseEnter={this.mouseenter.bind(this)} onMouseLeave={this.mouseleave.bind(this)}>
            <button disabled={this.props.disabled}>
               {this.props.text || this.props.children}
            </button>
         </div>
      );
   }
}

export default Button;
