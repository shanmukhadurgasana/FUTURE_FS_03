const categories = [
  {
    id: 'home-decor',
    name: 'Home Decors',
    image: 'https://assets.architecturaldigest.in/photos/62026064b5d9eefa7e4e2ddf/16:9/w_1920,c_limit/How%20to%20furnish%20your%20home%20on%20a%20budget.jpg',
  },
  {
    id: 'woolen-crafts',
    name: 'Wooden Crafts',
    image: 'https://m.media-amazon.com/images/I/71Y138hNknL._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 'resin-art',
    name: 'Resin Art',
    image: 'https://pacificresinart.in/cdn/shop/files/rn-image_picker_lib_temp_53cac97d-c009-408e-bbb9-6eb68fa4903a.webp',
  },
  {
    id: 'paper-craft',
    name: 'Paper Crafts',
    image: 'https://thecrazycraftlady.com/wp-content/uploads/2017/02/Paper-Wreath-By-Blooming-Homestead2.jpg',
  },
  {
    id: 'jewelry',
    name: 'Jewelry Collection',
    image: 'https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/handmade-jewellery-1lvho32-250.jpg',
  },
  {
    id: 'clay-art',
    name: 'Clay Art Store',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGacwxQM_e7_-39y5VG-5KzVRKckZaMY5XQ&s',
  },
  {
    id: 'festival-decorations',
    name: 'Festival Decorations',
    image: 'https://www.kidsgen.com/events/diwali/crafts/images/jute-fabric-toran-diwali-craft.jpg',
  },
];

const products = [
  { id: '1', name: '', price: 399, image: 'https://www.thespruce.com/thmb/AMW66YJbYcJWt6-25jZN0xNuIlQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/designimprovised-8dbb56a7763e405383f0518462bd0989.jpg', category: 'home-decor' },
  { id: '2', name: '', price: 499, image: 'https://pbs.twimg.com/media/EiuFqeaXYAAmZoI.jpg', category: 'woolen-crafts' },
  { id: '3', name: '', price: 659, image: 'https://resinartology.in/cdn/shop/files/IMG_6120.jpg?v=1724397492', category: 'resin-art' },
  { id: '4', name: '', price: 399, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fyaI7bYNzGRPZcqifOepnw7gPRcBNqHPTQ&s', category: 'paper-craft' },
  { id: '5', name: '', price: 499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7fY9q6znWbOQZwGdHCZmoJt2hdDvWeR0Qg&s', category: 'jewelry' },
  { id: '6', name: '', price: 249, image: 'https://www.cotsandcuddles.com/cdn/shop/products/WhatsAppImage2022-01-25at4.30.53PM_5.jpg?v=1643114565', category: 'clay-art' },
  { id: '7', name: '', price: 599, image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/03/01153133/Home-decoration-ideas-with-paper-9-ideas-for-your-mundane-walls-01-e1646194295697.jpg', category: 'home-decor' },
  { id: '8', name: '', price: 799, image: 'https://cdn.cdnparenting.com/articles/2018/09/Creative-New-Year%E2%80%99s-Art-and-Craft-Ideas-for-Kids-2-768x525.webp', category: 'festival-decorations' },
  { id: '9', name: '', price: 899, image: 'https://i.etsystatic.com/53569488/r/il/27f88b/6121105568/il_570xN.6121105568_mw91.jpg', category: 'resin-art' },
  { id: '10', name: '', price: 349, image: 'https://in.skygoodies.co/cdn/shop/files/Sky-Goodies-DIY-Paper-Christmas-Tree-19.jpg?v=1730636723', category: 'paper-craft' },
  { id: '11', name: '', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nQMlCYEp1RXju39DyJhv_YTx6mJNvneqPw&s', category: 'woolen-crafts' },
  { id: '12', name: '', price: 799, image: 'https://images1.novica.net/novica/assets/images/categoryplate/jewelry/bracelets-2023OCT06.jpg', category: 'jewelry' },
  { id: '13', name: '', price: 499, image: 'https://i.pinimg.com/736x/09/cb/f6/09cbf6619d0cf11fa4fffba2a6179f4a.jpg', category: 'resin-art' },
  { id: '14', name: '', price: 299, image: 'https://5.imimg.com/data5/ANDROID/Default/2021/7/OH/LK/BB/133083157/screenshot-20210705-201448-google-jpg.jpg', category: 'paper-craft' },
  { id: '15', name: '', price: 399, image: 'https://www.telanaari.com/cdn/shop/files/Telanaari_Red_Handmade_Fabric_Choker_Necklace_Set_with_Earrings_3_1800x1800.jpg?v=1772012671', category: 'jewelry' },
  { id: '16', name: '', price: 549, image: 'https://i.pinimg.com/236x/4c/5d/0e/4c5d0e21f0f1340b6707dc01ebed022a.jpg', category: 'clay-art' },
  { id: '17', name: '', price: 599, image: 'https://nestasia.in/cdn/shop/collections/DSCF5653_1.jpg?v=1690545281', category: 'home-decor' },
  { id: '18', name: '', price: 799, image: 'https://st1.latestly.com/wp-content/uploads/2023/08/Independence-Day-Decoration-Ideas.jpg', category: 'festival-decorations' },
  { id: '19', name: '', price: 899, image: 'https://i0.wp.com/hirosarts.com/wp-content/uploads/2023/11/What-is-resin-art.jpg?resize=700%2C500&ssl=1', category: 'resin-art' },
  { id: '20', name: '', price: 349, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9dCU_2SukcJGoo4zv_ISxejGJ80P98M4Ww&s', category: 'paper-craft' },
  { id: '21', name: '', price: 599, image: 'https://www.jaipurcraftonline.com/cdn/shop/articles/top-reasons-why-you-should-use-wall-hangings-in-your-home-wall-hanging-craft-ideas-for-home-decoration-663775.webp?v=1717178650', category: 'home-decor' },
  { id: '22', name: '', price: 599, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18ZQ2QuTlOShD1nsrqNaAbTpt2WpCA9RrjQ&s', category: 'home-decor' },

];

const state = {
  cart: {},
  wishlist: new Set(),
  mobileOpen: false,
};

const HOME_HERO_IMAGE = './home-bg.png';

const app = document.getElementById('app');
let cardRevealObserver = null;

const APP_BASE = (() => {
  const knownPaths = ['/', '/products', '/wishlist', '/cart', '/about', '/contact'];
  const current = window.location.pathname;

  if (current === '/' || current === '/index.html') return '';
  if (current.endsWith('/index.html')) {
    return current.slice(0, -'/index.html'.length);
  }
  if (knownPaths.includes(current) || current.startsWith('/category/')) return '';

  const segments = current.split('/').filter(Boolean);
  if (segments.length === 1) return `/${segments[0]}`;
  return '';
})();

function toAppPath(pathname) {
  let path = pathname || '/';

  if (APP_BASE && path.startsWith(APP_BASE)) {
    path = path.slice(APP_BASE.length) || '/';
  }

  if (path.endsWith('/index.html')) {
    path = path.slice(0, -'/index.html'.length) || '/';
  }

  if (!path.startsWith('/')) path = `/${path}`;
  return path || '/';
}

function toBrowserPath(appPath) {
  const clean = appPath.startsWith('/') ? appPath : `/${appPath}`;
  return `${APP_BASE}${clean}` || '/';
}

function navigate(path) {
  const target = toBrowserPath(path);
  if (window.location.pathname !== target) {
    window.history.pushState({}, '', target);
  }
  render();
}

function rupees(value) {
  return new Intl.NumberFormat('en-IN').format(value);
}

function cartItems() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      if (!product) return null;
      return { ...product, quantity };
    })
    .filter(Boolean);
}

function cartCount() {
  return Object.values(state.cart).reduce((acc, qty) => acc + qty, 0);
}

function cartTotal() {
  return cartItems().reduce((total, item) => total + item.price * item.quantity, 0);
}

function pageHome() {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1>Discover Beautiful Handmade Creations</h1>
        <p>Explore unique handmade crafts created with creativity, passion, and traditional artistry.</p>
        <div class="hero-actions">
          <button class="btn btn-light" data-nav="/products">Shop Now</button>
          <button class="btn btn-peach" data-nav="/products">Explore Categories</button>
        </div>
      </div>
    </section>
  `;
}

function pageProducts() {
  return `
    <section class="section-wrap">
      <header class="page-header">
        <h1>Browse Our Collections</h1>
        <p>Explore our handpicked categories of beautiful handmade crafts.</p>
      </header>
      <div class="grid categories-grid">
        ${categories
          .map(
            (category) => `
          <article class="card category-card" data-nav="/category/${category.id}">
            <div class="media-wrap"><img src="${category.image}" alt="${category.name}" /></div>
            <div class="card-body"><h3>${category.name}</h3></div>
          </article>
        `
          )
          .join('')}
      </div>
    </section>
  `;
}

function productCard(product) {
  const inWishlist = state.wishlist.has(product.id);
  return `
    <article class="card product-card">
      <div class="media-wrap">
        <img src="${product.image}" alt="${product.name}" />
        <button class="icon-btn ${inWishlist ? 'active' : ''}" data-action="toggle-wishlist" data-id="${product.id}">
          ${inWishlist ? '♥' : '♡'}
        </button>
      </div>
      <div class="card-body">
        <h3>${product.name}</h3>
        <p class="price">Rs ${rupees(product.price)}</p>
        <button class="btn btn-gradient" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    </article>
  `;
}

function pageCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) {
    return '<section class="section-wrap"><p class="empty">Category not found.</p></section>';
  }

  const filtered = products.filter((item) => item.category === category.id);
  return `
    <section class="section-wrap">
      <button class="link-btn" data-nav="/products">← Back to Categories</button>
      <header class="page-header">
        <h1>${category.name}</h1>
        <p>Discover our curated collection of ${category.name.toLowerCase()}.</p>
      </header>
      <div class="grid product-grid">
        ${filtered.map(productCard).join('')}
      </div>
    </section>
  `;
}

function pageWishlist() {
  const items = products.filter((product) => state.wishlist.has(product.id));
  return `
    <section class="section-wrap">
      <header class="page-header">
        <h1>My Wishlist</h1>
        <p>${items.length} ${items.length === 1 ? 'item' : 'items'} saved for later.</p>
      </header>
      ${
        items.length === 0
          ? '<p class="empty">Your wishlist is empty.</p>'
          : `<div class="grid product-grid">${items
              .map(
                (item) => `
              <article class="card product-card">
                <div class="media-wrap"><img src="${item.image}" alt="${item.name}" /></div>
                <div class="card-body">
                  <h3>${item.name}</h3>
                  <p class="price">Rs ${rupees(item.price)}</p>
                  <div class="inline-actions">
                    <button class="btn btn-gradient" data-action="add-cart" data-id="${item.id}">Add to Cart</button>
                    <button class="btn btn-danger" data-action="toggle-wishlist" data-id="${item.id}">Remove</button>
                  </div>
                </div>
              </article>
            `
              )
              .join('')}</div>`
      }
    </section>
  `;
}

function pageCart() {
  const items = cartItems();
  const total = cartTotal();
  return `
    <section class="section-wrap">
      <header class="page-header">
        <h1>Shopping Cart</h1>
        <p>${items.length} ${items.length === 1 ? 'item' : 'items'} in your cart.</p>
      </header>
      ${
        items.length === 0
          ? '<p class="empty">Your cart is empty.</p>'
          : `
        <div class="cart-layout">
          <div class="cart-items">
            ${items
              .map(
                (item) => `
              <article class="card cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <div class="cart-info">
                  <h3>${item.name}</h3>
                  <p class="price">Rs ${rupees(item.price)}</p>
                  <div class="qty-control">
                    <button data-action="dec-cart" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button data-action="inc-cart" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-action="remove-cart" data-id="${item.id}">Remove</button>
                  </div>
                </div>
                <p class="subtotal">Rs ${rupees(item.price * item.quantity)}</p>
              </article>
            `
              )
              .join('')}
          </div>
          <aside class="card summary">
            <h2>Order Summary</h2>
            <p><span>Subtotal</span><strong>Rs ${rupees(total)}</strong></p>
            <p><span>Shipping</span><strong>Free</strong></p>
            <p class="total"><span>Total</span><strong>Rs ${rupees(total)}</strong></p>
            <button class="btn btn-gradient" data-action="checkout">Proceed to Checkout</button>
          </aside>
        </div>
      `
      }
    </section>
  `;
}

function pageAbout() {
  return `
    <section class="section-wrap">
      <header class="page-header">
        <h1>About Our Handmade Craft Store</h1>
        <p>We celebrate creativity and tradition through products crafted with passion by skilled artisans.</p>
      </header>
      <div class="grid about-grid">
        <article class="card info-card">
          <span class="about-chip"></span>
          <h3>Made with Love</h3>
          <p>Every piece is handcrafted with care and passion by talented artisans.</p>
        </article>
        <article class="card info-card">
          <span class="about-chip"></span>
          <h3>Quality Craftsmanship</h3>
          <p>We ensure high quality standards in every handmade product.</p>
        </article>
        <article class="card info-card">
          <span class="about-chip"></span>
          <h3>Supporting Artisans</h3>
          <p>We empower local artisans and preserve traditional crafting techniques.</p>
        </article>
        <article class="card info-card">
          <span class="about-chip"></span>
          <h3>Unique Story in Every Product</h3>
          <p>Each handmade item carries a personal story, making every purchase truly special.</p>
        </article>
      </div>
      
    </section>
  `;
}

function pageContact() {
  return `
    <section class="section-wrap">
      <header class="page-header">
        <h1>Get in Touch</h1>
        <p>We would love to hear from you. Send us a message and we will respond soon.</p>
      </header>
      <div class="contact-cards">
        <article class="card contact-info-card contact-info-address">
          <h3>Address</h3>
          <p>Crafty Heaven Studio,<br />Mahalakshmi Nagar,<br />Tadepalligudem</p>
        </article>
        <article class="card contact-info-card contact-info-phone">
          <h3>Phone</h3>
          <p>+91 98765 43210<br />+91 91203 87465</p>
        </article>
        <article class="card contact-info-card contact-info-timing">
          <h3>Timings</h3>
          <p>Mon-Sat: 10:00 AM - 7:30 PM<br />Sunday: 11:00 AM - 4:00 PM</p>
        </article>
      </div>
      <form class="card contact-form" id="contact-form">
        <label>Name<input type="text" name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" rows="6" required></textarea></label>
        <button class="btn btn-gradient" type="submit">Send Message</button>
      </form>
    </section>
  `;
}

function isKnownRoute(pathname) {
  return (
    pathname === '/' ||
    pathname === '/products' ||
    pathname === '/wishlist' ||
    pathname === '/cart' ||
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname.startsWith('/category/')
  );
}

function routeContent(pathname) {
  if (pathname === '/') return pageHome();
  if (pathname === '/products') return pageProducts();
  if (pathname.startsWith('/category/')) {
    const id = pathname.replace('/category/', '');
    return pageCategory(id);
  }
  if (pathname === '/wishlist') return pageWishlist();
  if (pathname === '/cart') return pageCart();
  if (pathname === '/about') return pageAbout();
  if (pathname === '/contact') return pageContact();
  return pageHome();
}

function navLink(path, label) {
  const active = toAppPath(window.location.pathname) === path ? 'active' : '';
  return `<a href="${path}" class="nav-link ${active}" data-nav="${path}">${label}</a>`;
}

function animateGridCards() {
  const cards = Array.from(
    document.querySelectorAll('.grid > .card, .contact-cards > .card, .cart-items > .card')
  );

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach((card) => {
      card.classList.remove('anim-card');
      card.classList.add('in-view');
      card.style.removeProperty('--card-order');
    });
    return;
  }

  if (cardRevealObserver) {
    cardRevealObserver.disconnect();
  }

  cardRevealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  cards.forEach((card, index) => {
    card.classList.add('anim-card');
    card.classList.remove('in-view');
    card.style.setProperty('--card-order', String(index % 10));
    cardRevealObserver.observe(card);
  });
}

function render() {
  const wishlistCount = state.wishlist.size;
  const cartBadge = cartCount();

  app.innerHTML = `
    <div class="site-shell">
      <header class="topbar">
        <div class="container topbar-inner">
          <a href="/" data-nav="/" class="brand">Crafty Heaven</a>
          <button class="menu-toggle" data-action="toggle-menu">☰</button>
          <nav class="nav ${state.mobileOpen ? 'open' : ''}">
            ${navLink('/', 'Home')}
            ${navLink('/products', 'Products')}
            ${navLink('/wishlist', `Wishlist (${wishlistCount})`)}
            ${navLink('/cart', `Cart (${cartBadge})`)}
            ${navLink('/about', 'About')}
            ${navLink('/contact', 'Contact')}
          </nav>
        </div>
      </header>

      <main class="main">${routeContent(toAppPath(window.location.pathname))}</main>

     
    </div>
  `;

  animateGridCards();
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const navPath = target.closest('[data-nav]')?.getAttribute('data-nav');
  if (navPath) {
    event.preventDefault();
    state.mobileOpen = false;
    navigate(navPath);
    return;
  }

  const actionEl = target.closest('[data-action]');
  if (!actionEl) return;

  const action = actionEl.getAttribute('data-action');
  const id = actionEl.getAttribute('data-id');

  if (action === 'toggle-menu') {
    state.mobileOpen = !state.mobileOpen;
    render();
    return;
  }

  if (!id && action !== 'checkout') return;

  if (action === 'toggle-wishlist' && id) {
    if (state.wishlist.has(id)) state.wishlist.delete(id);
    else state.wishlist.add(id);
  }

  if (action === 'add-cart' && id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
  }

  if (action === 'inc-cart' && id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
  }

  if (action === 'dec-cart' && id) {
    const nextQty = (state.cart[id] || 0) - 1;
    if (nextQty <= 0) delete state.cart[id];
    else state.cart[id] = nextQty;
  }

  if (action === 'remove-cart' && id) {
    delete state.cart[id];
  }

  if (action === 'checkout') {
    window.alert('Checkout functionality will be implemented soon.');
  }

  render();
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  if (form.id !== 'contact-form') return;

  event.preventDefault();
  window.alert('Thank you for your message. We will get back to you soon.');
  form.reset();
});

window.addEventListener('popstate', render);

const initialPath = toAppPath(window.location.pathname);
const safeInitialPath = isKnownRoute(initialPath) ? initialPath : '/';
const safeBrowserPath = toBrowserPath(safeInitialPath);

if (window.location.pathname !== safeBrowserPath) {
  window.history.replaceState({}, '', safeBrowserPath);
}

render();
