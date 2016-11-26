import React, {Component} from 'react';

export default class BaseCmpt extends Component {
   baseClass() {
      return '';
   }

   beautify() {
      return this.props.beautify;
   }

   render() {
      return (
         <div className={this.baseClass()} style={{position: 'relative', display: 'inline-block'}}>
            <style type="text/css">
               {this.beautify()}
            </style>
            {this.implRender()}
         </div>
      );
   }
}
