const timelines = document.querySelectorAll('.block-timeline');

class BlockTimeline {
    constructor (block) {
        this.block = block;
        this.content = this.block.querySelector('.timeline');
        this.list = this.block.querySelector('.events');
        this.items = this.list.querySelectorAll('.event');
        this.listen();
        this.resize();
        this.moveTo(0);
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));
        this.items.forEach((item, i) => {
            item.addEventListener('click', this.moveTo.bind(this, i));
        });
    }

    moveTo (index) {
        this.list.style.marginLeft = `${-index * this.itemWidth}px`;
    }

    resize () {
        const width = window.innerWidth,
            offset = this.getAbsoluteOffset(this.block.parentNode);
        let contentWidth = 0;

        this.block.style = '';
        contentWidth = this.content.offsetWidth;

        this.itemWidth = this.items[0].offsetWidth;

        this.content.style.width = `${contentWidth}px`;
        this.content.style.maxWidth = `${contentWidth}px`;
        this.content.style.marginLeft = `${offset.left}px`;

        this.block.style.width = `${width}px`;
        this.block.style.maxWidth = `${width}px`;
        this.block.style.marginLeft = `${-offset.left}px`;
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

timelines.forEach((timeline) => {
    new BlockTimeline(timeline);
});
