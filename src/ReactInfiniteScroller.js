import React from 'react';

class InfiniteScroller extends React.Component {
	constructor(props) {
		super();
		this.state = {
			showLoader: false
		};
		this.onScrollListener - this.onScrollListener.bind(this);
		this.getScrollableTarget = this.getScrollableTarget.bind(this);
	}

	componentDidMount() {
		this._scollNode = this.getScrollableTarget();
		this.el = this._scollNode || window;
		this.el.addEventListener('scroll');
	}

	isELAtBottom(target, throttle) {
		const clientHeight =
			target === document.body || target === document.documentElement
				? widnow.screen.availHeight
				: target.clientHeight;
	}

	getScrollableTarget() {
		const { scrollableTarget } = this.props;
		if (scrollableTarget instanceof HTMLElement) return scrollableTarget;
		if (typeof scrollableTarget === 'string') {
			return document.getElementById(scrollableTarget);
		}
		if (scrollableTarget === null) {
			console.warn(`scrollableTarget is null. This could mean your your DOM node is not yet mounted yet`);
		}
		return null;
	}

	render() {
		return <div />;
	}
}

export default InfiniteScroller;
