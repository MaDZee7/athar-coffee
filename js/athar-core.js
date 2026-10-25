/**
 * ============================================================================
 * ATHAR SPECIALTY COFFEE - CORE STOREFRONT ENGINE (js/athar-core.js)
 * Clean, Modular Vanilla JS (Zero External Dependencies)
 * Features:
 * - Persistent LocalStorage Cart & Orders Sync with Admin Dashboard
 * - Global Slide-Over Cart Drawer & Toast Notifications
 * - Central Product Catalog Repository
 * ============================================================================
 */

const ATHAR_CATALOG = [
  {
    id: 'athar-01',
    title: 'خلطة البيت',
    origin: 'كولومبيا وبرازيل',
    altitude: '١٦٠٠ متر',
    process: 'مجففة ومغسولة',
    roast: 'متوسطة',
    category: 'specialty',
    price: 65,
    oldPrice: 65,
    priceLabel: '٦٥ ر.س',
    stock: 84,
    sku: 'ATH-BLD-01',
    img: 'assets/prod1.jpg',
    notes: 'شوكولاتة داكنة، بندق محمص، قوام ممتلئ',
    acidity: 45,
    body: 90,
    sweetness: 85,
    desc: 'خلطتنا الخاصة المصممة بعناية لتناسب مشروبات الإسبريسو والحليب، تمتاز بقوام غني ومخملي مع حلاوة البندق والشوكولاتة.'
  },
  {
    id: 'athar-02',
    title: 'كولومبيا أنتيوكيا',
    origin: 'كولومبيا',
    altitude: '١٨٥٠ متر',
    process: 'مغسولة',
    roast: 'متوسطة',
    category: 'specialty',
    price: 80,
    oldPrice: 85,
    priceLabel: '٨٠ ر.س',
    stock: 52,
    sku: 'ATH-COL-02',
    img: 'assets/prod2.jpg',
    notes: 'كراميل، تفاح أحمر، حمضية متوازنة',
    acidity: 65,
    body: 78,
    sweetness: 88,
    desc: 'محصول كلاسيكي متوازن من مرتفعات أنتيوكيا الكولومبية، يجمع بين حلاوة الكراميل وإشراقة التفاح الأحمر، رائع للتقطير والإسبريسو.'
  },
  {
    id: 'athar-03',
    title: 'رواندا غاتارا',
    origin: 'رواندا',
    altitude: '١٩٥٠ متر',
    process: 'مجففة',
    roast: 'فاتحة - متوسطة',
    category: 'specialty',
    price: 90,
    oldPrice: 90,
    priceLabel: '٩٠ ر.س',
    stock: 38,
    sku: 'ATH-RWA-03',
    img: 'assets/prod3.jpg',
    notes: 'توت بري، زهور الياسمين، حلاوة عالية',
    acidity: 80,
    body: 75,
    sweetness: 92,
    desc: 'محصول فاكهي عطري من محطة غاتارا في رواندا، يتألق في أدوات التقطير V60 وكيمكس بإيحاءات التوت والياسمين.'
  },
  {
    id: 'athar-04',
    title: 'إثيوبيا هيرلوم',
    origin: 'إثيوبيا - يرقاتشيف',
    altitude: '٢١٠٠ متر',
    process: 'مجففة',
    roast: 'فاتحة - متوسطة',
    category: 'specialty',
    price: 75,
    oldPrice: 75,
    priceLabel: '٧٥ ر.س',
    stock: 96,
    sku: 'ATH-ETH-04',
    img: 'assets/prod4.jpg',
    notes: 'خوخ، برغموت، عسل، قوام حريري',
    acidity: 82,
    body: 70,
    sweetness: 90,
    desc: 'سلالة هيرلوم الإثيوبية الأصيلة من منطقة يرقاتشيف، تمنحك كوباً عطرياً غنياً بنكهات الخوخ والبرغموت والعسل الطبيعي.'
  },
  {
    id: 'athar-05',
    title: 'اليمن حراز (إصدار نادر)',
    origin: 'اليمن - جبال حراز',
    altitude: '٢٢٥٠ متر',
    process: 'مجففة لاهوائية',
    roast: 'متوسطة',
    category: 'rare',
    price: 115,
    oldPrice: 130,
    priceLabel: '١١٥ ر.س',
    stock: 19,
    sku: 'ATH-YEM-05',
    img: 'assets/prod5.jpg',
    notes: 'زبيب أسود، هيل عطري، شوكولاتة فاخرة',
    acidity: 60,
    body: 95,
    sweetness: 94,
    desc: 'من أقدم وأعرق مدرجات البن في جبال حراز اليمنية، معالجة مجففة تبرز عمق الفواكه المجففة والتوابل الشرقية الفاخرة.'
  },
  {
    id: 'athar-06',
    title: 'البرازيل موجيانا كلاسيك',
    origin: 'البرازيل',
    altitude: '١١٥٠ متر',
    process: 'مجففة',
    roast: 'متوسطة - داكنة',
    category: 'espresso',
    price: 62,
    oldPrice: 70,
    priceLabel: '٦٢ ر.س',
    stock: 110,
    sku: 'ATH-BRA-06',
    img: 'assets/prod6.jpg',
    notes: 'بندق محمص، كراميل ناعم، شوكولاتة بالحليب',
    acidity: 35,
    body: 92,
    sweetness: 84,
    desc: 'الخيار الأول لعشاق الإسبريسو اليومي ومشروبات اللاتيه والفلات وايت بحمضية منخفضة وقوام كريمي ثقيل.'
  },
  {
    id: 'athar-07',
    title: 'غواتيمالا أنتيغوا',
    origin: 'غواتيمالا',
    altitude: '١٧٥٠ متر',
    process: 'مغسولة',
    roast: 'متوسطة',
    category: 'specialty',
    price: 84,
    oldPrice: 84,
    priceLabel: '٨٤ ر.س',
    stock: 44,
    sku: 'ATH-GUA-07',
    img: 'assets/prod7.jpg',
    notes: 'سكر بني، قشر برتقال، كاكاو خام',
    acidity: 68,
    body: 82,
    sweetness: 86,
    desc: 'محصول بركاني متزن من وادي أنتيغوا الشهير، يجمع بين حلاوة السكر البني ونفحات البرتقال مع نهاية كاكاو طويلة.'
  },
  {
    id: 'athar-08',
    title: 'كينيا كيرينياجا AA',
    origin: 'كينيا',
    altitude: '١٩٠٠ متر',
    process: 'مغسولة',
    roast: 'فاتحة - متوسطة',
    category: 'rare',
    price: 95,
    oldPrice: 105,
    priceLabel: '٩٥ ر.س',
    stock: 27,
    sku: 'ATH-KEN-08',
    img: 'assets/prod8.jpg',
    notes: 'كشمش أسود، كركديه، حلاوة قصب السكر',
    acidity: 88,
    body: 76,
    sweetness: 89,
    desc: 'تصنيف AA الأعلى جودة في كينيا، يتميز بحمضية فاكهية مشرقة تشبه التوت الأسود والكركديه البارد.'
  },
  {
    id: 'athar-09',
    title: 'إبريق التقطير الخزفي اليدوي',
    origin: 'خزف أثر اليدوي',
    altitude: 'سعة ٦٠٠ مل',
    process: 'طين حجري طبيعي',
    roast: 'أدوات تحضير',
    category: 'tools',
    price: 185,
    oldPrice: 210,
    priceLabel: '١٨٥ ر.س',
    stock: 22,
    sku: 'ATH-TOL-09',
    img: 'assets/tool1.jpg',
    notes: 'عزل حراري فائق، فوهة عنق الإوزة الدقيقة',
    acidity: 0,
    body: 100,
    sweetness: 0,
    desc: 'إبريق ترشيح مصنوع يدوياً من الخزف الحجري المصقول بعناية ليمنحك تحكماً كاملاً في سرعة وتدفق الماء أثناء التقطير.'
  },
  {
    id: 'athar-10',
    title: 'إبريق التقديم الريفي (سيرفر)',
    origin: 'خزف أثر اليدوي',
    altitude: 'سعة ٤٥٠ مل',
    process: 'فخار معالج حرارياً',
    roast: 'أدوات تحضير',
    category: 'tools',
    price: 130,
    oldPrice: 145,
    priceLabel: '١٣٠ ر.س',
    stock: 31,
    sku: 'ATH-TOL-10',
    img: 'assets/tool2.jpg',
    notes: 'يحفظ حرارة القهوة، مقبض مريح، مظهر تراثي',
    acidity: 0,
    body: 100,
    sweetness: 0,
    desc: 'سيرفر تقديم خزفي أنيق يحافظ على درجة حرارة القهوة المقطرة ويبرز جمال طاولة القهوة في منزلك.'
  },
  {
    id: 'athar-11',
    title: 'طقم التقطير المختص V60 المتكامل',
    origin: 'مجموعة الباريستا',
    altitude: '٤ قطع متكاملة',
    process: 'زجاج البوروسيليكات والخزف',
    roast: 'أدوات تحضير',
    category: 'tools',
    price: 210,
    oldPrice: 240,
    priceLabel: '٢١٠ ر.س',
    stock: 18,
    sku: 'ATH-TOL-11',
    img: 'assets/tool_v60.jpg',
    notes: 'قمع V60 + سيرفر + فلاتر + ملعقة معيارية',
    acidity: 0,
    body: 100,
    sweetness: 0,
    desc: 'الباقة المتكاملة لتحضير القهوة المقطرة في المنزل أو المكتب بأعلى معايير المقاهي المختصة.'
  },
  {
    id: 'athar-12',
    title: 'كوب أثر الفخاري المنحوت',
    origin: 'صناعة يدوية',
    altitude: 'سعة ٢٢٠ مل',
    process: 'فخار طبيعي',
    roast: 'أدوات تحضير',
    category: 'tools',
    price: 78,
    oldPrice: 85,
    priceLabel: '٧٨ ر.س',
    stock: 64,
    sku: 'ATH-TOL-12',
    img: 'assets/tool3.jpg',
    notes: 'ملمس طبيعي دافئ، حواف ناعمة للشرب',
    acidity: 0,
    body: 100,
    sweetness: 0,
    desc: 'كوب فخاري منحوت يدوياً بتدرجات اللون الرملي الدافئ، مصمم ليحتضن راحة اليد ويحفظ دفء قهوتك.'
  }
];

const AtharStore = {
  CART_KEY: 'athar_store_cart_v2',

  getCart() {
    try {
      const raw = localStorage.getItem(this.CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    this.updateCartUI();
  },

  addItem(title, price, img, grind = 'حبوب كاملة', qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(i => i.title === title && i.grind === grind);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ title, price: Number(price), img, grind, qty: Number(qty) });
    }
    this.saveCart(cart);
    this.showToast(`أُضيف "${title}" إلى سلة التسوق ☕`);
  },

  updateQty(index, delta) {
    const cart = this.getCart();
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    this.saveCart(cart);
  },

  clearCart() {
    localStorage.removeItem(this.CART_KEY);
    this.updateCartUI();
  },

  getTotals() {
    const cart = this.getCart();
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = subtotal === 0 ? 0 : (subtotal >= 199 ? 0 : 25);
    return { count, subtotal, shipping, total: subtotal + shipping };
  },

  showToast(msg) {
    let toastEl = document.getElementById('toastMsg');
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.id = 'toastMsg';
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
  },

  updateCartUI() {
    const { count, subtotal } = this.getTotals();
    const cart = this.getCart();

    document.querySelectorAll('#cartCount, .js-cart-count').forEach(el => {
      el.textContent = count;
    });

    const listEl = document.getElementById('cartItemsList');
    const totalEl = document.getElementById('cartTotalPrice');
    if (!listEl || !totalEl) return;

    if (cart.length === 0) {
      listEl.innerHTML = '<p style="text-align: center; color: var(--text-muted); margin-top: 40px;">سلة التسوق فارغة حالياً.<br/>أضف محصولك المفضل لتبدأ!</p>';
      totalEl.textContent = '٠ ر.س';
      return;
    }

    listEl.innerHTML = '';
    cart.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <img src="${item.img}" alt="${item.title}" />
        <div class="cart-item-info">
          <h5>${item.title}</h5>
          <span>${item.grind} • ${item.price} ر.س</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" data-idx="${index}" data-delta="-1">-</button>
          <strong style="font-size: 14px;">${item.qty}</strong>
          <button class="qty-btn" data-idx="${index}" data-delta="1">+</button>
        </div>
      `;
      listEl.appendChild(row);
    });

    totalEl.textContent = `${subtotal} ر.س`;

    listEl.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.updateQty(parseInt(btn.dataset.idx, 10), parseInt(btn.dataset.delta, 10));
      });
    });
  },

  initGlobalDrawer() {
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartBtn && cartDrawer && cartBackdrop) {
      const open = () => {
        cartDrawer.classList.add('open');
        cartBackdrop.classList.add('open');
      };
      const close = () => {
        cartDrawer.classList.remove('open');
        cartBackdrop.classList.remove('open');
      };
      cartBtn.addEventListener('click', open);
      if (closeCartBtn) closeCartBtn.addEventListener('click', close);
      cartBackdrop.addEventListener('click', close);
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.getCart().length === 0) {
          this.showToast('السلة فارغة — أضف محصولاً أولاً ☕');
          return;
        }
        window.location.href = 'checkout.html';
      });
    }

    this.initGlobalAuthModal();
    this.updateCartUI();
  },

  initGlobalAuthModal() {
    let authModal = document.getElementById('authModal');
    if (!authModal) {
      authModal = document.createElement('div');
      authModal.id = 'authModal';
      authModal.className = 'modal-backdrop';
      authModal.setAttribute('aria-hidden', 'true');
      authModal.innerHTML = `
        <div class="modal-box" role="dialog" aria-modal="true" style="max-width: 460px;">
          <div class="modal-header">
            <h3 style="font-family: 'Cairo', sans-serif; font-size: 22px; font-weight: 800; color: var(--espresso);">حسابك في محمصة أثر</h3>
            <button type="button" class="modal-close" id="closeAuthBtn" aria-label="إغلاق">×</button>
          </div>
          <div class="auth-tabs" style="display:grid; grid-template-columns:1fr 1fr; background:var(--bg-page); padding:5px; border-radius:14px; margin-bottom:20px;">
            <button type="button" class="auth-tab active" id="tabLoginBtn" style="border:none; padding:10px; border-radius:10px; font-family:inherit; font-size:15px; font-weight:800; cursor:pointer; background:var(--espresso); color:#f6eee3;">تسجيل الدخول</button>
            <button type="button" class="auth-tab" id="tabRegisterBtn" style="border:none; padding:10px; border-radius:10px; font-family:inherit; font-size:15px; font-weight:800; cursor:pointer; background:transparent; color:var(--text-muted);">إنشاء حساب جديد</button>
          </div>
          <form id="loginForm">
            <div class="form-group">
              <label>البريد الإلكتروني أو رقم الجوال</label>
              <input type="text" class="form-input" id="loginIdentifier" placeholder="example@domain.com أو 05XXXXXXXX" required />
            </div>
            <div class="form-group">
              <label>كلمة المرور</label>
              <input type="password" class="form-input" id="loginPassword" placeholder="••••••••" required />
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; font-size: 13.5px;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                <input type="checkbox" checked /> تذكرني
              </label>
              <a href="#" id="forgotPassLink" style="color: var(--espresso); font-weight: 700; text-decoration: underline;">نسيت كلمة المرور؟</a>
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">دخول إلى حسابي</button>
          </form>
          <form id="registerForm" style="display: none;">
            <div class="form-group">
              <label>الاسم الكامل</label>
              <input type="text" class="form-input" id="regName" placeholder="الاسم الثلاثي" required />
            </div>
            <div class="form-group">
              <label>رقم الجوال</label>
              <input type="tel" class="form-input" id="regPhone" placeholder="05XXXXXXXX" required />
            </div>
            <div class="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" class="form-input" id="regEmail" placeholder="name@example.com" required />
            </div>
            <div class="form-group">
              <label>كلمة المرور</label>
              <input type="password" class="form-input" id="regPassword" placeholder="٨ خانات على الأقل" required />
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">إنشاء الحساب والحصول على خصم ١٥٪</button>
          </form>
        </div>
      `;
      document.body.appendChild(authModal);
    }

    const closeAuthBtn = document.getElementById('closeAuthBtn');
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabRegisterBtn = document.getElementById('tabRegisterBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPassLink = document.getElementById('forgotPassLink');

    const savedUser = localStorage.getItem('athar_logged_user');
    if (savedUser) {
      document.querySelectorAll('#loginBtn, .js-login-trigger').forEach(btn => {
        btn.textContent = `أهلاً، ${savedUser}`;
      });
    }

    const openModal = (e) => {
      if (e) e.preventDefault();
      authModal.classList.add('open');
    };
    const closeModal = () => {
      authModal.classList.remove('open');
    };

    document.querySelectorAll('#loginBtn, #footerLoginLink, .js-login-trigger').forEach(el => {
      el.addEventListener('click', openModal);
    });

    if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeModal);
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeModal();
    });

    if (tabLoginBtn && tabRegisterBtn && loginForm && registerForm) {
      tabLoginBtn.addEventListener('click', () => {
        tabLoginBtn.classList.add('active');
        tabRegisterBtn.classList.remove('active');
        tabLoginBtn.style.background = 'var(--espresso)';
        tabLoginBtn.style.color = '#f6eee3';
        tabRegisterBtn.style.background = 'transparent';
        tabRegisterBtn.style.color = 'var(--text-muted)';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
      });

      tabRegisterBtn.addEventListener('click', () => {
        tabRegisterBtn.classList.add('active');
        tabLoginBtn.classList.remove('active');
        tabRegisterBtn.style.background = 'var(--espresso)';
        tabRegisterBtn.style.color = '#f6eee3';
        tabLoginBtn.style.background = 'transparent';
        tabLoginBtn.style.color = 'var(--text-muted)';
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
      });

      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawVal = document.getElementById('loginIdentifier').value.trim();
        const user = rawVal.includes('@') ? rawVal.split('@')[0] : rawVal;

        // التحقق من صلاحيات المدير
        if (rawVal.toLowerCase() === 'admin' || rawVal.toLowerCase() === 'admin@atharcoffee.sa') {
          localStorage.setItem('athar_logged_user', 'المدير (Admin)');
          localStorage.setItem('athar_user_role', 'admin');
          document.querySelectorAll('#loginBtn, .js-login-trigger').forEach(btn => {
            btn.textContent = `أهلاً، المدير`;
          });
          closeModal();
          this.showToast('مرحباً بك! جاري نقلك إلى لوحة التحكم الإدارية ⚙️');
          setTimeout(() => {
            window.location.href = 'admin.html';
          }, 1200);
          return;
        }

        localStorage.setItem('athar_logged_user', user);
        localStorage.setItem('athar_user_role', 'customer');
        document.querySelectorAll('#loginBtn, .js-login-trigger').forEach(btn => {
          btn.textContent = `أهلاً، ${user}`;
        });
        closeModal();
        this.showToast(`مرحباً بعودتك يا ${user} في محمصة أثر ☕`);
      });

      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        localStorage.setItem('athar_logged_user', name);
        document.querySelectorAll('#loginBtn, .js-login-trigger').forEach(btn => {
          btn.textContent = `أهلاً، ${name}`;
        });
        closeModal();
        this.showToast(`تم إنشاء حسابك بنجاح يا ${name}! كود خصمك: ATHAR15 🎉`);
      });
    }

    if (forgotPassLink) {
      forgotPassLink.addEventListener('click', (e) => {
        e.preventDefault();
        const idInput = document.getElementById('loginIdentifier');
        const val = idInput ? idInput.value.trim() : '';
        if (!val) {
          this.showToast('يرجى كتابة بريدك الإلكتروني أو رقم جوالك أولاً لإرسال رمز الاستعادة ✉️');
          if (idInput) idInput.focus();
          return;
        }
        this.showToast(`تم إرسال رمز استعادة كلمة المرور إلى ${val} بنجاح ✉️`);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AtharStore.initGlobalDrawer();
});
