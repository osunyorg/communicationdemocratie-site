class FullWidthBlock {
    constructor (block) {
        this.block = block;
        this.listen();
        this.resize();
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize () {
        const width = window.innerWidth,
            offset = this.getAbsoluteOffset(this.block.parentNode);
        this.block.style = '';
        this.setStyle(this.block, width, -offset.left);
    }

    setStyle (element, width, marginLeft) {
        element.style.width = `${width}px`;
        element.style.maxWidth = `${width}px`;
        element.style.marginLeft = `${marginLeft}px`;
    }

    getAbsoluteOffset (_element) {
        let top = 0,
            left = 0,
            element = _element;

        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return { top: top, left: left };
    }
}

export default FullWidthBlock;
