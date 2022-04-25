import './vendors/bootstrap';
import './vendors/lightbox';
import './vendors/carousel';
import './theme/body';
// import './theme/cookie-banner';
import './theme/timeline';
import FullWidthBlock from './theme/FullWidthBlock';

if (!document.body.classList.contains('page__home')) {
    const fullWidthBlockElements = document.querySelectorAll('.js-block-full-width');
    fullWidthBlockElements.forEach((element) => {
        new FullWidthBlock(element);
    });
}
