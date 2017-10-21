class ThumbnailGalleryLoader {
  constructor(container) {
    this.container = container;
    this.endpoint = container.hasAttribute('data-endpoint')
      ? container.getAttribute('data-endpoint')
      : null;
    this.items = container.hasAttribute('data-images')
      ? JSON.parse(container.getAttribute('data-images'))
      : null;
    this.ids = container.hasAttribute('data-ids')
      ? JSON.parse(container.getAttribute('data-ids')).replace(/ /g, '')
      : null;
  }

  shouldRun() {
    return this.container && ((this.endpoint && this.ids) || this.items);
  }

  fetchFromWordPress() {
    return new Promise(async (resolve) => {
      const url = `${this.endpoint}?include=${this
        .ids}&orderby=include&per_page=99`;

      const response = await fetch(url);
      const items = await response.json();

      resolve(items);
    });
  }

  async run() {
    if (this.images === null) {
      this.items = await this.fetchFromWordPress();
    }

    ReactDOM.render(<ThumbnailGallery items={this.items} />, this.container);
  }
}

const loadDependencies = () =>
  new Promise(async (resolve) => {
    if (!('PropTypes' in window)) {
      window.PropTypes = await import('prop-types');
    }

    if (!('React' in window)) {
      window.React = await import('react');
    }

    if (!('ReactDOM' in window)) {
      window.ReactDOM = await import('react-dom');
    }

    if (!('ThumbnailGallery' in window)) {
      const module = await import('./ThumbnailGallery/ThumbnailGallery');
      window.ThumbnailGallery = module.default;
    }

    resolve();
  });

const init = async () => {
  const containers = document.querySelectorAll('[data-thumbnail-gallery ]');

  if (!containers) {
    return;
  }

  await loadDependencies();

  Array.prototype.forEach.call(containers, (container) => {
    const loader = new ThumbnailGalleryLoader(container);

    if (loader.shouldRun()) {
      loader.run();
    }
  });
};

window.addEventListener('load', init);
