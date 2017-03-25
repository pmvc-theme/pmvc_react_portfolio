import React from 'react'; 
import Home from './Home';
import {ClientRoute} from 'reshow'; 

const themes = {
    home: Home,
};
const Index = (props) => {
    return (
        <ClientRoute
            themes={themes}
            {...props}
            parseUrl={(url)=>{
                const params = url.split('/');
                const last = params.length-1;
                if (params[last]) {
                    return {
                        portfolioId: params[last]
                    };
                }
                return {portfolioId:''};
            }}
            ajax={true}
        />
    );  
};

export default Index;
