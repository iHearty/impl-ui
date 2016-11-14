import { PropTypes } from 'react';

import BaseCmpt from './base/BaseCmpt';

class Button extends BaseCmpt {
   static propTypes = {
      children: PropTypes.node,
      /**
       * If true, the button will be disabled.
       */
      disabled: PropTypes.bool,

      text: PropTypes.string
   }

   render() {
      return (
         <div>
            <button>{this.props.children}</button>
         </div>
      );
   }
}

export default Button;