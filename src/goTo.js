import getOffset from 'getoffset';
import query from 'css-query-selector';
import smoothScrollTo from 'smooth-scroll-to';

const defaultUpdateUrl = (node) =>
{
    const toNode = query.el(node);
    let hash = toNode.id;
    if (!hash) {
        hash = toNode.name;
    }
    const url = document.URL;
    const anchorStart = url.indexOf('#');
    const newUrl = url.substring(0,anchorStart) + '#'+ hash;
    history.pushState('','',newUrl);
}

const handleWithUrl = () =>
{
    const url = document.URL;
    const anchorStart = url.indexOf('#');
    const anchor = url.substring(anchorStart);
    return _goTo(anchor);
}

const _goTo = (node) =>
{
    const body = document.body;
    const toNode = query.el(node);
    if (!toNode) {
        console.warn('Not found node', node);
        return false;
    }
    const dHeader = query.one("#header");
    const headerPos = getOffset(dHeader);
    
    let i = 3;
    const tune = (delay) => {
        if (!i) {
            return;
        }
        i--;
        let pos = getOffset(toNode);
        let to = pos.top - (headerPos.bottom-headerPos.top);
        smoothScrollTo(
            to,
            delay,
            null,
            ()=>setTimeout(()=>tune(200), 500)
        );
    };
    tune();
    return true;
}

const goTo = (node, updateUrl = defaultUpdateUrl) =>
{
    updateUrl(node);
    return _goTo(node);
}

export default goTo;
export {handleWithUrl};
