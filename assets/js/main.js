import './vendors/bootstrap';
import './vendors/lightbox';
import './vendors/carousel';
import './theme/body';
// import './theme/cookie-banner';
import './theme/timeline';
import FullWidthBlock from './theme/FullWidthBlock';


// This is used to set block-page for pleas in full-width inside a smaller col
if (!document.body.classList.contains('page__home')) {
    const fullWidthBlockElements = document.querySelectorAll('.js-block-full-width');
    fullWidthBlockElements.forEach((element) => {
        new FullWidthBlock(element);
    });
}
