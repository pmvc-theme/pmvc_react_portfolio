import React, {Component} from 'react'; 

import { reshow, ReshowComponent } from 'reshow'; 
import get from 'get-object-value';

class Footer extends ReshowComponent
{
    render()
    {
        const I18N = get(this, ['state', 'I18N'], {});
        return (
        <div style={Styles.container}>
            {I18N.footerText}
        </div>
        );
    }
}
export default reshow(Footer);

const Styles = {
    container: {
        minHeight: 150,
        background: '#000',
        lineHeight: '150px',
        fontSize: '.75rem',
        color: '#afafaf',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.069rem'
    }
};
