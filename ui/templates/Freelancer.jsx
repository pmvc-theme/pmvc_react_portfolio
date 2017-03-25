import React, {Component} from 'react'; 
import {OneColumn} from 'pmvc_react_landing'; 
import { min, reactStyle } from 'react-atomic-molecule';
import { PopupElement } from "organism-react-popup"
import { scrollDispatch } from 'organism-react-scroll-nav';
import Header from '../organisms/Header'; 
import Footer from '../organisms/Footer'; 

export default class Freelancer extends Component
{
    constructor(props)
    {
        super(props);
        scrollDispatch({
            scrollMargin: 50
        });
    }

    render(){
        const {column, ...rest} = this.props;
        switch(column)
        {
            case 'one':
            default:
                return <OneColumn
                    {...rest}
                    header={<Header />}
                    footer={<Footer />}
                    last={<PopupElement />}
                />;
        }
    }
}

const Styles = {
    headerActive: reactStyle({
        maxHeight: '100% !important',
    }, '.page-header.active'),
    minLgHeader: reactStyle({
        background: 'transparent !important',
        padding: '1.07rem 3rem',
        maxHeight: '100% !important',
    }, [min.lg, '.page-header']),
    minLgHeaderScrolling: reactStyle({
        padding: '0 1.75rem !important',
        background: '#000 !important'
    }, [min.lg, '.page-header.scrolling']),
    minLgHeaderNavLi: reactStyle({
        display: 'inline-block' 
    }, [min.lg, '.page-header ul li']),
    minLgBrand: reactStyle({
        padding: '0 !important',
        position: 'static !important'
    }, [min.lg, '.page-header .brand']),
    minLgHamburger: reactStyle({
        display: 'none !important' 
    }, [min.lg, '.page-header .hamburger-icon']),
};
