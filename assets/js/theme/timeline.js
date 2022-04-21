const timelines = document.querySelectorAll('.block-timeline');

class BlockTimeline {
    constructor (block) {
        this.block = block;
        this.content = this.block.querySelector('.timeline');
        this.list = this.block.querySelector('.events');
        this.items = this.list.querySelectorAll('.event');
        this.previous = this.block.querySelector('.previous');
        this.next = this.block.querySelector('.next');

        this.index = 0;

        this.listen();
        this.resize();
        this.goTo(0);
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));
        this.items.forEach((item, i) => {
            item.addEventListener('click', this.goTo.bind(this, i));
        });
        this.previous.addEventListener('click', () => {
            this.goTo(this.index-1);
        });
        this.next.addEventListener('click', () => {
            this.goTo(this.index+1);
        });
    }

    goTo (_index) {
        this.index = Math.min(Math.max(_index, 0), this.items.length-1);
        this.update();
    }

    update () {
        this.list.style.marginLeft = `${-this.index * this.itemWidth}px`;

        this.previous.disabled = this.index === 0;
        this.next.disabled = this.index === this.items.length - 1;
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
