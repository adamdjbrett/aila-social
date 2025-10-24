CMS.registerPreviewStyle("/admin/bs.css");
CMS.registerPreviewStyle("/admin/main.css");
// CMS.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
 
const SettingsPreview = createClass({
  render() {
    const entry = this.props.entry;
    const navbar_title = entry.getIn(['data', 'navbar_title']);
    const image = entry.getIn(['data', 'image']);
    const navbar = entry.getIn(['data', 'navbar']);
    const footer = entry.getIn(['data', 'footer']);
    const copyrights = entry.getIn(['data', 'copyrights']);

    return h('div', { className: 'container-fluid' },
      // Navigation
      h('nav', { className: 'navbar navbar-expand-lg fixed-top mt-1 p-1 shadow-sm' },
        h('div', { className: 'container-fluid' },
          h('a', { className: 'navbar-brand', href: '/' }, navbar_title),
          h('div', { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
            h('ul', { className: 'navbar-nav me-auto mb-2 mb-lg-0 navis' },
              navbar && navbar.toJS().map((item, index) => 
                h('li', { key: index, className: 'nav-item' },
                  h('a', { className: 'nav-link', href: item.link }, item.nav)
                )
              )
            )
          )
        )
      ),

      // Header
      h('header', { className: 'row header' },
        h('section', { className: 'col-md-8 mt-5 mx-auto p-0' },
          h('img', { 
            src: image || '', 
            alt: navbar_title, 
            className: 'img-fluid mb-3 img-profile-header',
            width: '770',
            height: '192'
          }),
          h('p', { className: 'text-desc text-center lead' }, 
            `${navbar_title}: An NGO in consultative status with the United Nations Economic & Social Council (ECOSOC)`
          )
        )
      ),

      // Main content
      h('main', { className: 'row text-center mt-1' },
        h('div', { className: 'p-1 col-md-10 mx-auto mb-1 mt-1' },
          h('a', { 
            href: '#', 
            className: 'btn btn-glass col-md-9 mx-auto col-12 p-3 text-white'
          }, 'Sample Button')
        )
      ),

      // Footer
      h('footer', { className: 'col-md-8 mt-1 mx-auto p-3 text-center' },
        footer && footer.toJS().map((item, index) => 
          h('a', { 
            key: index,
            href: item.link, 
            title: item.title,
            className: 'text-secondary ms-3 me-3 icon-link'
          },
            h('i', { className: `${item.icon} fa-2x` })
          )
        )
      ),

      // Copyright
      h('section', { className: 'col-md-10 text-end p-1' },
        h('p', {},
          h('small', {},
            'Copyrights by ',
            h('a', { href: copyrights.get('text2_link'), className: 'text-white icon-link' }, copyrights.get('text2')),
            ` ${copyrights.get('text3')} `,
            h('a', { href: copyrights.get('text4_link'), className: 'text-white icon-link' }, copyrights.get('text4'))
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate('general', SettingsPreview);

const HomePreview = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const description = entry.getIn(['data', 'description']);
    const image = entry.getIn(['data', 'image']);
    const text = entry.getIn(['data', 'text']);
    const linkList = entry.getIn(['data', 'link_list']);

    return h('div', { className: 'container-fluid' },
      // Navigation
      h('nav', { className: 'navbar navbar-expand-lg fixed-top mt-1 p-1 shadow-sm' },
        h('div', { className: 'container-fluid' },
          h('a', { className: 'navbar-brand', href: '/' }, title),
          h('button', { 
            className: 'navbar-toggler', 
            type: 'button', 
            'data-bs-toggle': 'collapse', 
            'data-bs-target': '#navbarSupportedContent' 
          },
            h('i', { className: 'fa-solid fa-bars text-white' })
          ),
          h('div', { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
            h('ul', { className: 'navbar-nav me-auto mb-2 mb-lg-0 navis' },
              h('li', { className: 'nav-item' },
                h('a', { className: 'nav-link', href: '/about' }, 'About')
              )
            )
          )
        )
      ),

      // Header
      h('header', { className: 'row header' },
        h('section', { className: 'col-md-8 mt-5 mx-auto p-0' },
          h('img', { 
            src: image || '', 
            alt: title, 
            className: 'img-fluid mb-3 img-profile-header',
            width: '770',
            height: '192'
          }),
          h('p', { className: 'text-desc text-center lead' }, text)
        )
      ),

      // Main content
      h('main', { className: 'row text-center mt-1' },
        linkList && linkList.toJS().map((item, index) => 
          h('div', { key: index, className: 'p-1 col-md-10 mx-auto mb-1 mt-1' },
            h('a', { 
              href: item.url, 
              title: item.name,
              className: 'btn btn-glass col-md-9 mx-auto col-12 p-3 text-white'
            }, item.name)
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate('home', HomePreview);
const RedirectPreview = createClass({
  render() {
    const entry = this.props.entry;
    const redirectItems = entry.getIn(['data', 'item']);

    return h('div', { className: 'container mt-4' },
      h('h2', { className: 'mb-4' }, 'Redirect Settings Preview'),
      h('div', { className: 'table-responsive' },
        h('table', { className: 'table table-striped table-hover' },
          h('thead', { className: 'table-dark' },
            h('tr', {},
              h('th', { scope: 'col' }, 'From'),
              h('th', { scope: 'col' }, 'To')
            )
          ),
          h('tbody', {},
            redirectItems && redirectItems.map((item, index) =>
              h('tr', { key: index },
                h('td', {}, item.get('from')),
                h('td', {}, item.get('to'))
              )
            )
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate('redirect', RedirectPreview);

