import React from 'react';
import WhiteBlock from '../molecules/WhiteBlock';

const SvgBlackBlock = (props)=>{
    const {style, ...reset} = props; 
    return (
    <WhiteBlock {...reset}
        style={{
            ...Styles.container,
            ...style
        }}
    />
   );
};

export default SvgBlackBlock;

const Styles = {
    container: {
        color: '#fff',
        maxWidth: '100%',
        minHeight: '100px',
        backgroundRepeat: 'repeat',
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='690' height='350' viewBox='0 0 690 350'><path fill='#202020' d='M-5-6h726v366h-726z'/><path opacity='.6' fill='#795562' enable-background='new' d='M154.593 303.672l4.016 2.677-13.878 20.818-4.016-2.677z'/><path opacity='.6' fill='#5B4562' enable-background='new' d='M350.574 205.368l1.026-4.808 24.924 5.321-1.026 4.808z'/><path opacity='.6' fill='#6B4E62' enable-background='new' d='M116.776 62.381l1.905-4.532 23.496 9.876-1.905 4.532z'/><path opacity='.6' fill='#795562' enable-background='new' d='M22.283 152.99l4.738-1.311 6.794 24.561-4.738 1.311z'/><path opacity='.6' fill='#5B4562' enable-background='new' d='M534.597 103.052l-5.419-3.612 18.729-28.1 5.419 3.612z'/><path opacity='.6' fill='#795562' enable-background='new' d='M300.95 155.111l-3.385 3.565-18.482-17.546 3.385-3.565z'/><path opacity='.6' fill='#6B4E62' enable-background='new' d='M519.378 330.522l-1.906 4.533-23.49-9.877 1.906-4.533z'/><path opacity='.6' fill='#795562' enable-background='new' d='M675.575 176.453l-4.738 1.311-6.794-24.561 4.738-1.311z'/><path opacity='.7' enable-background='new' d='M176.257 111.692c-2.252 0-4.016 1.791-4.016 4.075 0 2.357 1.701 4.135 3.958 4.135 2.365 0 4.016-1.7 4.016-4.135 0-2.361-1.665-4.075-3.958-4.075zm-11.21 121.067c-2.252 0-4.016 1.789-4.016 4.075 0 2.354 1.701 4.134 3.957 4.134 2.365 0 4.017-1.7 4.017-4.134 0-2.362-1.664-4.075-3.958-4.075zm-124.6-213.268c-2.252 0-4.016 1.789-4.016 4.074 0 2.357 1.702 4.135 3.958 4.135 2.364 0 4.016-1.7 4.016-4.135-.001-2.36-1.665-4.074-3.958-4.074zm455.506 175.338c2.252 0 4.017-1.79 4.017-4.077 0-2.354-1.702-4.133-3.957-4.133-2.364 0-4.018 1.7-4.018 4.133 0 2.362 1.665 4.077 3.958 4.077zm-24.94-164.445c2.252 0 4.018-1.789 4.018-4.075 0-2.354-1.702-4.134-3.957-4.134-2.365 0-4.018 1.7-4.018 4.134 0 2.361 1.664 4.075 3.957 4.075zm196.005 262.734c2.252 0 4.017-1.789 4.017-4.074 0-2.356-1.701-4.134-3.957-4.134-2.364 0-4.017 1.697-4.017 4.134 0 2.36 1.664 4.074 3.957 4.074z' stroke='#7A7A7A' stroke-width='2' stroke-miterlimit='10' fill='none'/></svg>\")" 
    }
};
