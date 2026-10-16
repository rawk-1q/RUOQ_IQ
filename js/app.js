
/* ---------- DATA ---------- */
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="none"/></svg>`);

function cupSVG(fill){
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="140" viewBox="0 0 120 140">
    <path d="M28 40 L92 40 L84 128 Q84 134 78 134 L42 134 Q36 134 36 128 Z" fill="#fff" stroke="#e6dcc8" stroke-width="1"/>
    <path d="M31 90 L89 90 L84 128 Q84 134 78 134 L42 134 Q36 134 36 128 Z" fill="${fill}"/>
    <ellipse cx="60" cy="40" rx="32" ry="7" fill="#fff" stroke="#e6dcc8"/>
    <image href="${LOGO_CREAM}" x="42" y="92" width="36" height="24"/>
  </svg>`);
}
const cupHot = cupSVG('#873D27');
const cupTeal = cupSVG('#873D27');
const bagSVG = (label,color)=> 'data:image/svg+xml;utf8,'+encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="140" viewBox="0 0 120 140">
    <rect x="20" y="30" width="80" height="95" rx="6" fill="#e9dfc8" stroke="#d8ccae"/>
    <rect x="20" y="30" width="80" height="18" fill="#f3ead7"/>
    <circle cx="60" cy="80" r="20" fill="${color}"/>
    <image href="${LOGO_BROWN}" x="47" y="30.5" width="26" height="17.6"/>
    <text x="60" y="112" font-family="Arial" font-weight="700" font-size="11" fill="#873D27" text-anchor="middle">${label}</text>
  </svg>`);
const bottleSVG = (color)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="140" viewBox="0 0 90 140">
    <rect x="35" y="10" width="20" height="18" fill="#ccc"/>
    <path d="M28 28 L62 28 L68 130 Q68 136 60 136 L30 136 Q22 136 22 130 Z" fill="#eef7f4" opacity="0.5" stroke="#bcd" stroke-width="1"/>
    <rect x="28" y="60" width="34" height="40" fill="${color}" opacity="0.85"/>
  </svg>`);
const iceSVG = (color)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="110" height="130" viewBox="0 0 110 130">
    <path d="M30 45 L80 45 L72 118 Q72 124 66 124 L44 124 Q38 124 38 118 Z" fill="#873D27"/>
    <path d="M55 20 Q40 30 45 45 Q55 40 55 30 Q65 40 58 48 Q72 40 65 22 Q60 15 55 20Z" fill="${color}"/>
  </svg>`);

const TURKISH_IMG = 'images/turkish.webp';
const CHOCO_COFFEE_IMG = 'images/choco-coffee.webp';
const FRENCH_COFFEE_IMG = 'images/french-coffee.webp';
const LATTE_CUP_IMG = 'images/latte-cup.webp';
const ESPRESSO_IMG = 'images/espresso.webp';
const MACCHIATO_IMG = 'images/macchiato.webp';
const AFFOGATO_IMG = 'images/affogato.webp';
const PISTACHIO_LATTE_IMG = 'images/pistachio-latte.webp';
const VANILLA_LATTE_IMG = 'images/vanilla-latte.webp';
const KARAK_IMG = 'images/karak.webp';
const TEA_IMG = 'images/tea.webp';
const LEMON_TEA_IMG = 'images/lemon-tea.webp';
const NUTELLA_COFFEE_IMG = 'images/nutella-coffee.webp';
const MOCHA_DARK_IMG = 'images/mocha-dark.webp';
const MOCHA_WHITE_IMG = 'images/mocha-white.webp';
const AMERICANO_IMG = 'images/americano.webp';
const HOT_CHOC_IMG = 'images/hot-choc.webp';
const FREDDO_IMG = 'images/freddo.webp';
const MIX_ROUQ_IMG = 'images/mix-rouq.webp';
const CITRUS_MIX_IMG = 'images/citrus-mix.webp';
const MOJITO_ENERGY_IMG = 'images/mojito-energy.webp';
const MOJITO_STRAW_IMG = 'images/mojito-straw.webp';
const MOJITO_POMEG_IMG = 'images/mojito-pomeg.webp';
const hot = [
  {n:'اسبريسو', p:2500, cal:5, photo:true, img:ESPRESSO_IMG},
  {n:'أمريكانو', p:3500, cal:10, photo:true, img:AMERICANO_IMG},
  {n:'فريدو', p:3500, cal:90, photo:true, img:FREDDO_IMG},
  {n:'أفوكاتو', p:4000, cal:200, photo:true, img:AFFOGATO_IMG},
  {n:'ماكياتو', p:3500, cal:80, photo:true, img:MACCHIATO_IMG},
  {n:'فلات وايت', p:3500, cal:140, photo:true, img:LATTE_CUP_IMG},
  {n:'كابتشينو', p:4000, cal:120, photo:true, img:LATTE_CUP_IMG},
  {n:'سبانش لاتيه', p:4000, cal:250, photo:true, img:LATTE_CUP_IMG},
  {n:'سكنجر لاتيه', p:5000, cal:280, photo:true, img:VANILLA_LATTE_IMG},
  {n:'لاتيه بندق', p:4000, cal:240, photo:true, img:VANILLA_LATTE_IMG},
  {n:'لاتيه فانيلا', p:4000, cal:220, photo:true, img:VANILLA_LATTE_IMG},
  {n:'لاتيه كراميل', p:4000, cal:250, photo:true, img:VANILLA_LATTE_IMG},
  {n:'لاتيه بستاشيو', p:4000, cal:250, photo:true, img:PISTACHIO_LATTE_IMG},
  {n:'نسكافيه', p:3500, cal:90, photo:true, img:LATTE_CUP_IMG},
  {n:'موكا دارك', p:4000, cal:270, photo:true, img:MOCHA_DARK_IMG},
  {n:'موكا وايت', p:4000, cal:310, photo:true, img:MOCHA_WHITE_IMG},
  {n:'قهوة فرنسية', p:3000, cal:100, photo:true, img:FRENCH_COFFEE_IMG, optLabel:'اختر السكر', hidePrices:true, sizes:[{l:'سادة', p:3000},{l:'وسط', p:3000},{l:'حلو', p:3000}]},
  {n:'قهوة تركية', p:2000, cal:30, photo:true, img:TURKISH_IMG, optLabel:'اختر السكر', hidePrices:true, sizes:[{l:'سادة', p:2000},{l:'وسط', p:2000},{l:'حلوى', p:2000}]},
  {n:'قهوة جكليتية', p:2000, cal:180, photo:true, img:CHOCO_COFFEE_IMG, optLabel:'اختر السكر', hidePrices:true, sizes:[{l:'سادة', p:2000},{l:'وسط', p:2000},{l:'حلو', p:2000}]},
  {n:'هوت شوكليت', p:3500, cal:300, photo:true, img:HOT_CHOC_IMG},
  {n:'قهوة بالبندق', p:2500, cal:160, photo:true, img:TURKISH_IMG, optLabel:'اختر السكر', hidePrices:true, sizes:[{l:'سادة', p:2500},{l:'وسط', p:2500},{l:'حلو', p:2500}]},
  {n:'قهوة نوتيلا', p:2500, cal:220, photo:true, img:NUTELLA_COFFEE_IMG},
  {n:'شاي', p:1000, cal:30, photo:true, img:TEA_IMG},
  {n:'شاي كرك', p:2000, cal:140, photo:true, img:KARAK_IMG},
  {n:'شاي ليمون', p:2000, cal:60, photo:true, img:LEMON_TEA_IMG},
];
const cold = [
  {n:'أمريكانو بارد', p:3500, cal:10, photo:true, full:true, img:'images/img-025.webp'},
  {n:'مارتيني', p:4000, cal:150, photo:true, full:true, img:'images/img-026.webp'},
  {n:'لاتيه بارد بستاشيو', p:4500, cal:250, photo:true, full:true, img:'images/img-027.webp'},
  {n:'لاتيه بارد لافندر', p:4000, cal:210, photo:true, full:true, img:'images/img-028.webp'},
  {n:'لاتيه بارد كراميل', p:4000, cal:250, photo:true, full:true, img:'images/img-029.webp'},
  {n:'لاتيه بارد فانيلا', p:4000, cal:220, photo:true, full:true, img:'images/img-030.webp'},
  {n:'سبانش لاتيه بارد', p:4500, cal:250, photo:true, img:'images/img-031.webp'},
  {n:'سكنجر لاتيه بارد', p:5000, cal:280, photo:true, full:true, img:'images/img-032.webp'},
  {n:'موكا بارد وايت', p:4000, cal:310, photo:true, full:true, img:'images/img-033.webp'},
  {n:'موكا بارد دارك', p:4000, cal:270, photo:true, full:true, img:'images/img-034.webp'},
  {n:'ايس تي ليمون', p:4000, cal:90, photo:true, full:true, img:'images/img-035.webp'},
  {n:'ايس تي خوخ', p:4000, cal:100, photo:true, full:true, img:'images/img-036.webp'},
  {n:'ايس تي فراولة', p:4000, cal:100, photo:true, full:true, img:'images/img-037.webp'},
  {n:'ايس تي كركديه', p:4000, cal:80, photo:true, full:true, img:'images/img-038.webp'},
  {n:'فرابيه فانيلا', p:4000, cal:350, photo:true, full:true, img:'images/img-039.webp'},
  {n:'فرابيه كراميل', p:4000, cal:380, photo:true, full:true, img:'images/img-040.webp'},
  {n:'فرابيه بستاشيو', p:4000, cal:380, photo:true, full:true, img:'images/img-041.webp'},
  {n:'فرابيه موكا', p:4000, cal:370, photo:true, full:true, img:'images/img-042.webp'},
  {n:'مكس حمضيات', p:4000, cal:120, photo:true, full:true, img:CITRUS_MIX_IMG},
  {n:'مكس استوائي', p:5000, cal:160, photo:true, full:true, img:'images/img-043.webp'},
  {n:'سموذي منكا', p:4000, cal:180, photo:true, full:true, img:'images/img-044.webp'},
  {n:'سموذي رمان', p:4000, cal:170, photo:true, full:true, img:'images/img-045.webp'},
  {n:'سموذي اناناس', p:4000, cal:160, photo:true, full:true, img:'images/img-046.webp'},
  {n:'سموذي باشن فروت', p:4000, cal:150, photo:true, full:true, img:'images/img-047.webp'},
  {n:'مكس روق (فوتشيني كريب مع مشروب)', p:7000, cal:600, photo:true, full:true, img:MIX_ROUQ_IMG},
  {n:'برتقال طبيعي', p:3000, cal:110, photo:true, full:true, img:'images/img-048.webp'},
  {n:'اناناس طبيعي', p:4000, cal:130, photo:true, full:true, img:'images/img-049.webp'},
  {n:'موز وحليب', p:4000, cal:250, photo:true, full:true, img:'images/img-050.webp'},
  {n:'ليمون ونعناع', p:4000, cal:110, photo:true, full:true, img:'images/img-051.webp'},
  {n:'فراولة', p:4000, cal:120, photo:true, full:true, img:'images/img-052.webp'},
  {n:'ميلك شيك فراولة', p:4000, cal:420, photo:true, full:true, img:'images/img-053.webp'},
  {n:'ميلك شيك بلوبيري', p:4000, cal:420, photo:true, full:true, img:'images/img-054.webp'},
  {n:'ميلك شيك فانيلا', p:4000, cal:400, photo:true, full:true, img:'images/img-055.webp'},
  {n:'ميلك شيك منكا', p:4000, cal:430, photo:true, full:true, img:'images/img-056.webp'},
  {n:'ميلك شيك نوتيلا', p:4000, cal:520, photo:true, full:true, img:'images/img-057.webp'},
  {n:'ميلك شيك بستاشيو', p:4000, cal:450, photo:true, full:true, img:'images/img-058.webp'},
  {n:'موهيتو ليمون ونعناع', p:4000, cal:120, photo:true, full:true, img:'images/img-059.webp'},
  {n:'موهيتو مكس بيري', p:4000, cal:130, photo:true, full:true, img:'images/img-060.webp'},
  {n:'موهيتو بلو', p:4000, cal:140, photo:true, full:true, img:'images/img-061.webp'},
  {n:'موهيتو فراولة', p:4000, cal:130, photo:true, full:true, img:MOJITO_STRAW_IMG},
  {n:'موهيتو رمان', p:4000, cal:130, photo:true, full:true, img:MOJITO_POMEG_IMG},
  {n:'موهيتو طاقة', p:5000, cal:180, photo:true, full:true, img:MOJITO_ENERGY_IMG},
];
const CREPE_IMG = 'images/crepe.webp';
const desserts = [
  {n:'كريب نوتيلا', p:4000, cal:450, photo:true, img:CREPE_IMG, sizes:[{l:'صغير', p:4000},{l:'كبير', p:5000}]},
  {n:'كريب لوتس', p:5000, cal:500, photo:true, img:'images/img-063.webp', sizes:[{l:'صغير', p:5000},{l:'كبير', p:6000}]},
  {n:'كريب أوريو', p:5000, cal:450, photo:true, img:'images/img-064.webp', sizes:[{l:'صغير', p:5000},{l:'كبير', p:6000}]},
  {n:'كريب فواكه', p:5000, cal:350, photo:true, img:'images/img-065.webp', sizes:[{l:'صغير', p:5000},{l:'كبير', p:6000}]},
  {n:'كريب فستق', p:6000, cal:500, photo:true, img:'images/img-066.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:7000}]},
  {n:'كريب مكسرات', p:6000, cal:450, photo:true, img:'images/img-067.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:7000}]},
  {n:'كريب ماجك رول', p:6000, cal:450, photo:true, img:'images/img-068.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:7000}]},
  {n:'كريب سوشي', p:6000, cal:450, photo:true, img:'images/img-069.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:7000}]},
  {n:'كريب فوتوشيني', p:6000, cal:450, photo:true, img:'images/img-070.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:7000}]},
];
const matcha = [
  {n:'ماتشا بيور', p:4000, cal:60, photo:true, full:true, img:'images/img-071.webp'},
  {n:'ماتشا لاتيه', p:4000, cal:150, photo:true, full:true, img:'images/img-072.webp'},
  {n:'ماتشا فراولة', p:4500, cal:190, photo:true, full:true, img:'images/img-073.webp'},
  {n:'ماتشا فانيلا', p:4500, cal:190, photo:true, full:true, img:'images/img-074.webp'},
  {n:'ماتشا لافندر', p:4500, cal:170, photo:true, full:true, img:'images/img-075.webp'},
  {n:'روق سكنجر ماتشا', p:5000, cal:230, photo:true, full:true, img:'images/img-076.webp'},
];
const cakes = [
  {n:'تيراميسو', p:4000, cal:450, photo:true, img:'images/img-077.webp'},
  {n:'كيكة بالشوكولاتة', p:3000, cal:400, photo:true, img:'images/img-078.webp'},
  {n:'كرواسون', p:3000, cal:270, photo:true, img:'images/img-079.webp'},
  {n:'كيكة يابانية', p:3500, cal:250, photo:true, img:'images/img-080.webp'},
  {n:'براونيز بالأيسكريم', p:4000, cal:500, photo:true, img:'images/img-081.webp'},
  {n:'تشيز كيك', p:4000, cal:400, photo:true, img:'images/img-082.webp'},
  {n:'كوكيز', p:2000, cal:200, optLabel:'اختر النوع', sizes:[{l:'كلاسك', p:2000},{l:'محشي نوتيلا', p:2000}], photo:true, img:'images/img-083.webp'},
  {n:'سان سبستيان كيك', p:5000, cal:430, photo:true, img:'images/img-084.webp'},
];
const CROPS = [
  {n:'إثيوبي مزيج', notes:'شوكولاتة · كراميل · حلاوة هادئة'},
  {n:'إثيوبي', notes:'حمضية هادئة · مرارة كلاسيك'},
  {n:'كولمبي', notes:'كراميل · لوز · توت · حمضية هادئة'},
  {n:'كولمبي لاهوائي', notes:'حمضيات · فواكه استوائية · إكليل الجبل'},
  {n:'ديكاف كولمبي', tag:'منزوع الكافيين', notes:'برتقال · عسل · شوكولاتة'},
  {n:'برازيلي', notes:'فانيلا · كراميل · بندق'},
  {n:'كوستاريكا', notes:'باشن فروت · شوكولاتة بيضاء'}
];
const specialty = [
  {n:'V60 بارد', p:6000, cal:5, photo:true, full:true, img:'images/img-085.webp', crops:CROPS},
  {n:'V60 حار', p:5000, cal:5, photo:true, full:true, img:'images/img-086.webp', crops:CROPS},
  {n:'V60 محصول فاخر (Premium Crop)', p:7000, cal:5, photo:true, full:true, img:'images/img-087.webp'},
  {n:'كيمكس', p:5000, cal:5, photo:true, full:true, img:'images/img-088.webp'},
  {n:'كولد برو', p:6000, cal:5, photo:true, full:true, img:'images/img-089.webp'},
];
const WAFFLE_PISTACHIO_PH = 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="430" viewBox="0 0 700 430"><rect width="700" height="430" fill="#873D27"/><image href="${LOGO_CREAM}" x="250" y="125" width="200" height="135"/></svg>`);
const WAFFLE_IMG = 'images/waffle.webp';
const PANCAKE_NUTELLA_IMG = 'images/pancake-nutella.webp';
const PANCAKE_FRUIT_IMG = 'images/pancake-fruit.webp';
const MINI_PANCAKE_IMG = 'images/mini-pancake.webp';
const waffles = [
  {n:'وافل نوتيلا', p:4000, cal:300, photo:true, img:'images/img-094.webp', sizes:[{l:'صغير', p:4000},{l:'كبير', p:5000}]},
  {n:'وافل أوريو', p:5000, cal:400, photo:true, img:'images/img-095.webp', sizes:[{l:'صغير', p:5000},{l:'كبير', p:6000}]},
  {n:'وافل أيسكريم', p:6000, cal:400, photo:true, img:'images/img-096.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:6500}]},
  {n:'وافل فواكه', p:6000, cal:400, photo:true, img:'images/img-097.webp', sizes:[{l:'صغير', p:6000},{l:'كبير', p:6500}]},
  {n:'وافل فستق', p:6000, cal:400, photo:true, img:WAFFLE_IMG},
  {n:'وافل مكسرات', p:6000, cal:450, photo:true, img:WAFFLE_IMG},
  {n:'بان كيك نوتيلا', p:5000, cal:500, photo:true, img:PANCAKE_NUTELLA_IMG},
  {n:'بان كيك فواكه', p:6000, cal:420, photo:true, img:PANCAKE_FRUIT_IMG},
  {n:'ميني بان كيك', p:6000, cal:380, photo:true, img:MINI_PANCAKE_IMG},
];
const water = [
  {n:'مياه عادي', p:500, img:bottleSVG('#9ed3e8')},
  {n:'مياه غازية', p:1000, img:bottleSVG('#6fc0d8')},
];
const CATEGORIES = [
  {key:'hot', label:'المشروبات الساخنة', items:hot},
  {key:'cold', label:'المشروبات الباردة', items:cold},
  {key:'specialty', label:'القهوة المختصة', items:specialty},
  {key:'matcha', label:'الماتشا', items:matcha},
  {key:'dessert', label:'الكريب', items:desserts},
  {key:'waffle', label:'الوافل', items:waffles},
  {key:'cake', label:'الحلى', items:cakes},
  {key:'water', label:'الماء', items:water},
];
let activeCat = 'hot';

const FAQS = [
  {q:'عن روقة', a:'كان نصف مليون ريال سعودي هو المبلغ الأساسي الذي أدى إلى إنشاء مقهى هاف مليون. بدأت القصة بقرار صديقين بالانطلاق في رحلة لتأسيس مشروعهما الخاص في مدينة الرياض، مسقط رأسهما. مليئين بالطموح والإصرار، دخلوا عالم الأعمال برأس مال قدره 500,000 ريال سعودي فقط. ومع ذلك، وبدعم وتشجيع مجتمع الأعمال المحلي، أصبح الحلم حقيقة. الدافع والشغف والتصميم حيث افتتحوا فرعهم الأول في الرياض. وكان هذا النجاح نتيجة الإيمان والجهد المستمرين، وبتوفيق من الله ودعم مجتمعنا، رحلة النجاح مستمرة.'},
  {q:'هل التطبيق يدعم التوصيل؟', a:'التطبيق يدعم التوصيل، وسعر التوصيل 2,000 دينار عراقي لكل طلب.'},
  {q:'حجوزات الضيافة والمناسبات', a:'لحجوزات الضيافة والمناسبات، بإمكانك الضغط على "المزيد"، ثم اختر "الحجوزات" وبعد ذلك الضغط على "إضافة حجز جديد". ستظهر لك فئتين: "حجوزات الشاحنات" و"حجوزات مميز" الخاصة بالمناسبات والشركات.'},
  {q:'كيف أضيف رصيد بالمحفظة؟', a:'يمكنك إضافة رصيد للمحفظة من خلال قسم المكافآت، ثم اختيار "المحفظة" والضغط على "إضافة رصيد"، بعدها اختر طريقة الدفع المناسبة وأكمل العملية.'},
];
let openFaq = 0;

/* ---------- ICON SVGs (brand line-icon set, no generic emoji) ---------- */
const pinSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#873D27" stroke-width="1.8"><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>`;

const searchIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#873D27" stroke-width="1.8" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.5-4.5"/></svg>`;

const chevIcon = (dir='right')=>`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#873D27" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform:scaleX(${dir==='left'?-1:1})"><path d="M9 6l6 6-6 6"/></svg>`;

/* a takeaway-cup mark used across empty states, in the brand house style */
function brandCupIcon(size=46){
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
    <path d="M13 14h22l-2.6 25a4 4 0 01-4 3.6H19.6a4 4 0 01-4-3.6L13 14z" fill="#F1E7D8" stroke="#873D27" stroke-width="1.6"/>
    <ellipse cx="24" cy="14" rx="11" ry="3" fill="#F1E7D8" stroke="#873D27" stroke-width="1.6"/>
    <path d="M35 18c3 .6 5 2.6 5 5.4 0 3.4-3 5.6-6.6 5.6" stroke="#873D27" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}
/* cart mark for the empty state */
function brandCartIcon(size=46){
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" stroke="#873D27" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 8h4l4.4 22h21.2L40 14H12.4" fill="#F1E7D8"/>
    <circle cx="18" cy="39" r="2.6"/><circle cx="34" cy="39" r="2.6"/>
  </svg>`;
}
/* a coffee-bean badge mark for the rewards empty state */
function brandRewardsIcon(size=46){
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="20" r="14" fill="#F1E7D8" stroke="#873D27" stroke-width="1.6"/>
    <path d="M24 10c-5 0-8 4.2-8 10s3 10 8 10 8-4.2 8-10-3-10-8-10z" stroke="#873D27" stroke-width="1.6"/>
    <path d="M24 10c-5 3-5 17 0 20" stroke="#873D27" stroke-width="1.6"/>
    <path d="M17 36l7 8 7-8" fill="#873D27" stroke="#873D27" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`;
}

/* ---------- RENDER ---------- */
const screenEl = document.getElementById('screen');

const DELIVERY_FEE = 2000;
let orderType = 'delivery';   // 'dine' = inside the cafe (Tharthar branch), 'pickup' = from the cafe, 'delivery'
let tableNo = 0;              // 1..20 for dine-in
const TABLES = 20;
function deliveryFee(){ return orderType==='delivery' ? DELIVERY_FEE : 0; }
// QR on the table can open the site with ?table=5
(function(){ try{ const m = /[?&#]table=(\d{1,2})/.exec(location.search + location.hash); const n = m ? +m[1] : 0; if(n>=1 && n<=TABLES){ orderType='dine'; tableNo=n; } }catch(e){} })();
function money(n){ return Math.round(n).toLocaleString('en-US') + ' د.ع'; }

const BANNERS = [
  {img:'images/img-098.webp', n:'بودنق چوكلت', p:4500},
  {img:'images/img-099.webp', n:'تراميسو لاتيه', p:4500},
  {img:'images/img-100.webp', n:'هوت شوكليت بالمارشميلو', p:4500},
  {img:'images/img-101.webp', n:'مولتن سوفت شوكلت', p:4000}
];
function bannerCta(b,i){ return `<div class="banner-cta"><div class="banner-cta-txt"><div class="banner-cta-name">${b.n}</div><div class="banner-cta-price">${b.p.toLocaleString('en-US')} د.ع</div></div><button type="button" class="banner-cta-btn" onclick="orderBanner(${i})">اطلب الآن</button></div>`; }
function orderBanner(i){
  if(!isOrderingOpen()){ toast(CLOSED_MSG); return; }
  const b = BANNERS[i];
  const ex = cart.find(c=>c.n===b.n && c.p===b.p);
  if(ex) ex.qty += 1; else cart.push({n:b.n, p:b.p, img:b.img, photo:true, qty:1});
  saveCart(); updateBadge(); goTo('cart');
}
let bannerTimer=null;
function initBanner(){
  clearInterval(bannerTimer);
  const tr=document.getElementById('bnrTrack'); if(!tr) return;
  const dots=[...document.querySelectorAll('#bnrDots i')];
  const n=dots.length; let idx=0, paused=false, resumeT=null;
  const w=()=>tr.clientWidth;
  const cur=()=>Math.min(n-1,Math.max(0,Math.round(Math.abs(tr.scrollLeft)/w())));
  const slides=[...tr.children]; const mark=i=>{ dots.forEach((d,k)=>d.classList.toggle('on',k===i)); slides.forEach((x,k)=>x.classList.toggle('on',k===i)); };
  const go=i=>{ idx=(i+n)%n; const dir=getComputedStyle(tr).direction==='rtl'?-1:1; try{ tr.scrollTo({left:dir*idx*w(),behavior:'smooth'}); }catch(_){ tr.scrollLeft=dir*idx*w(); } mark(idx); };
  tr.addEventListener('scroll',()=>{ const c=cur(); if(c!==idx){ idx=c; mark(idx);} },{passive:true});
  const hold=()=>{ paused=true; clearTimeout(resumeT); };
  const release=()=>{ clearTimeout(resumeT); resumeT=setTimeout(()=>{ paused=false; },3500); };
  tr.addEventListener('touchstart',hold,{passive:true});
  tr.addEventListener('touchend',release,{passive:true});
  tr.addEventListener('touchcancel',release,{passive:true});
  tr.addEventListener('pointerdown',hold);
  tr.addEventListener('pointerup',release);
  mark(0);
  bannerTimer=setInterval(()=>{ if(!document.getElementById('bnrTrack')){ clearInterval(bannerTimer); return; } if(!paused) go(idx+1); },4000);
}

const CUP_RED_IMG = 'images/cup-red.webp';
const CUP_BLUE_IMG = 'images/cup-blue.webp';
const CUP_ITEM = {
  n:'كوب روق', p:17000, photo:true, full:true,
  img:'images/img-104.webp',
  optLabel:'اللون', hidePrices:true,
  sizes:[{l:'أحمر', p:17000, c:'#C8202B', g:1, img:CUP_RED_IMG}, {l:'أزرق', p:17000, c:'#1F3A66', g:2, img:CUP_BLUE_IMG}]
};
CUP_ITEM.gallery = [CUP_ITEM.img, CUP_RED_IMG, CUP_BLUE_IMG];

const SHOP_BAGS_IMG = 'images/shop-bags.webp';

const BEANS_ITEM = {
  n:'بُن الاسبرسو', p:0, noPrice:true, hidePrices:true, photo:true, full:true,
  img:SHOP_BAGS_IMG,
  optLabel:'الوزن',
  sizes:[{l:'كيلو', p:0}, {l:'نصف كيلو', p:0}, {l:'ربع كيلو', p:0}]
};

function renderEstore(){
  screenEl.innerHTML = '<div class="screen-inner">' + `
    <div class="header">
      <div class="header-top">
        <div class="brandlogo" style="height:52px;color:#873D27"></div>
      </div>
      <div class="greeting">رَوّق | مساحتك للهدوء والقهوة 🤎</div>
    </div>
    <div class="banner-wrap">
      <div class="banner-car">
        <div class="banner-track" id="bnrTrack">${BANNERS.map((b,i)=>`<div class="banner-slide"><img src="${b.img}" draggable="false">${bannerCta(b,i)}</div>`).join('')}</div>
        ${BANNERS.length>1?`<div class="banner-dots" id="bnrDots">${BANNERS.map(()=>'<i></i>').join('')}</div>`:''}
      </div>
    </div>
    ${closedNotice()}
    <div class="section-title">منتجات المتجر الإلكتروني</div>
    <div class="shop">
      <div class="shop-card wide tap" id="cupCard">
        <img class="bg" src="${CUP_ITEM.img}" alt="" draggable="false">
        <div class="shop-info"><div><div class="shop-title">الأكواب</div><div class="shop-sub">${money(CUP_ITEM.p)} · أحمر وأزرق</div></div><span class="shop-go">${chevIcon()}</span></div>
      </div>
      <div class="shop-card wide tap" id="beansCard">
        <img class="bg" src="${SHOP_BAGS_IMG}" alt="" draggable="false">
        <div class="shop-info"><div><div class="shop-title">بُن الاسبرسو</div><div class="shop-sub">كيلو · نصف كيلو · ربع كيلو</div></div><span class="shop-go">${chevIcon()}</span></div>
      </div>
    </div>
  ` + '</div>';
  document.getElementById('cupCard').addEventListener('click', ()=>openSheet(CUP_ITEM));
  document.getElementById('beansCard').addEventListener('click', ()=>openSheet(BEANS_ITEM));
  initBanner();
}

let searchOpen = false, searchQ = '';
const normAr = t=>String(t||'').toLowerCase().replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').trim();
function menuCardHTML(it,idx){
  return `
        <div class="card ${it.off?'disabled':''}" data-idx="${idx}">
          <div class="card-imgbox ${it.photo?'photo':''}">
            <img src="${it.img}">
            ${it.off?`<div class="unavailable-badge"><span>غير متوفر حاليًا</span></div>`:''}
          </div>
          <div class="card-body">
            <div class="card-name">${it.n}</div>
            <div class="card-price">${it.sizes?'من '+money(it.p):money(it.p)}</div>
            ${it.cal?`<div class="card-cal">${it.cal} سعرة حرارية</div>`:''}
          </div>
        </div>`;
}
function fillMenuGrid(){
  const cat = CATEGORIES.find(c=>c.key===activeCat);
  const grid = document.getElementById('menuGrid');
  const q = normAr(searchQ);
  const list = q ? CATEGORIES.flatMap(c=>c.items).filter(it=>normAr(it.n).includes(q)) : cat.items;
  const emptyMsg = q ? 'ما لقينا نتائج لبحثك' : 'لا توجد منتجات في هذا القسم حالياً';
  grid.innerHTML = (list.length ? '' : `<div class="placeholder" style="grid-column:1/-1; padding:70px 20px;">${emptyMsg}</div>`) + list.map(menuCardHTML).join('');
  grid.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>{
      const it = list[parseInt(c.dataset.idx)];
      if(it.off) return;
      openSheet(it);
    });
  });
}
function renderMenu(){
  const cat = CATEGORIES.find(c=>c.key===activeCat);
  screenEl.innerHTML = '<div class="screen-inner">' + `
    <div class="menu-topbar">
      <span class="chev-btn">${chevIcon()}</span>
      <div class="title">${cat.label}</div>
      <span class="chev-btn" id="searchBtn" role="button" aria-label="بحث" style="cursor:pointer">${searchIcon}</span>
    </div>
    ${closedNotice()}
    ${searchOpen?`<div class="menu-search"><input id="menuSearch" type="search" inputmode="search" enterkeyhint="search" placeholder="ابحث في المنيو..." autocomplete="off"><button type="button" id="searchClose" aria-label="إغلاق البحث">×</button></div>`:''}
    <div class="tabs" id="tabs">
      ${CATEGORIES.map(c=>`<div class="tab ${c.key===activeCat?'active':''}" data-cat="${c.key}">${c.label}</div>`).join('')}
    </div>
    <div class="grid" id="menuGrid" style="margin-top:8px;"></div>
  ` + '</div>';
  fillMenuGrid();
  document.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click', ()=>{ activeCat = t.dataset.cat; searchOpen=false; searchQ=''; renderMenu(); });
  });
  document.getElementById('searchBtn').addEventListener('click', ()=>{
    if(searchOpen){ searchOpen=false; searchQ=''; } else { searchOpen=true; }
    renderMenu();
  });
  if(searchOpen){
    const inp = document.getElementById('menuSearch');
    inp.value = searchQ;
    inp.addEventListener('input', ()=>{ searchQ = inp.value; fillMenuGrid(); });
    inp.addEventListener('keydown', e=>{ if(e.key==='Enter') inp.blur(); });
    document.getElementById('searchClose').addEventListener('click', ()=>{ searchOpen=false; searchQ=''; renderMenu(); });
    if(!searchQ) inp.focus();
  }
}

const IG_ICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>';
const CAFE_IG = { handle:'rawk.cafe', url:'https://instagram.com/rawk.cafe' };
const CAFE_TT = { handle:'rawk.cafe', url:'https://www.tiktok.com/@rawk.cafe' };
const TT_ICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>';
const DEV = {
  name:'مصطفى محمد',
  role:'مطوّر مواقع وتطبيقات',
  instagram:'root404error',
  igUrl:'https://www.instagram.com/root404error/'
};

function backTopbar(title, backFn, id){
  return `<div class="menu-topbar" style="justify-content:center; position:relative;">
      <span class="chev-btn" id="${id}" style="position:absolute; left:20px;">${chevIcon()}</span>
      <div class="title" style="font-size:22px;">${title}</div>
    </div>`;
}

function renderMore(){
  screenEl.innerHTML = '<div class="screen-inner"><div class="more-wrap">' + `
    <div class="menu-topbar" style="justify-content:center;">
      <div class="title" style="font-size:24px;">المزيد</div>
    </div>
    <div class="list">
      <div class="list-row" id="mGames"><span class="chev">${chevIcon()}</span><span class="label">قسم الألعاب<i class="gm-new">جديد</i></span></div>
      <div class="list-row" id="mBook"><span class="chev">${chevIcon()}</span><span class="label">حجز طاولة</span></div>
      <div class="list-row" id="mHours"><span class="chev">${chevIcon()}</span><span class="label">ساعات العمل</span></div>
      <div class="list-row" id="mAbout"><span class="chev">${chevIcon()}</span><span class="label">من نحن</span></div>
      <div class="list-row" id="mDev"><span class="chev">${chevIcon()}</span><span class="label">عن المطور</span></div>
    </div>
    <div class="more-foot">
      <div class="foot-rule"><i></i></div>
      <div class="foot-socials">
        <a class="foot-ig" href="${CAFE_IG.url}" target="_blank" rel="noopener noreferrer" aria-label="إنستغرام @${CAFE_IG.handle}">${IG_ICON}</a>
        <a class="foot-ig" href="${CAFE_TT.url}" target="_blank" rel="noopener noreferrer" aria-label="تيك توك @${CAFE_TT.handle}">${TT_ICON}</a>
      </div>
      <div class="foot-handle">@${CAFE_IG.handle}</div>
      <div class="foot-copy">© ${new Date().getFullYear()} روق</div>
    </div>
  ` + '</div></div>';
  document.getElementById('mGames').addEventListener('click', renderGames);
  document.getElementById('mBook').addEventListener('click', renderBooking);
  document.getElementById('mHours').addEventListener('click', renderHours);
  document.getElementById('mAbout').addEventListener('click', renderAbout);
  document.getElementById('mDev').addEventListener('click', renderDev);
}

/* ---------- TABLE BOOKING ---------- */
let bookGuests = 2;
function toEnDigits(v){
  return String(v).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
}
function todayStr(){
  const d=new Date(); const p=n=>String(n).padStart(2,'0');
  return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());
}
function renderBooking(){
  bookGuests = 2;
  screenEl.innerHTML = '<div class="screen-inner">' +
    backTopbar('حجز طاولة','', 'bkBack') + `
    <div class="page-pad">
      <div class="field" id="b-name"><label>الاسم</label><input id="bk-name" type="text" autocomplete="name"></div>
      <div class="field" id="b-phone"><label>رقم الهاتف</label><input id="bk-phone" type="tel" dir="ltr" style="text-align:right;" placeholder="07XXXXXXXXX" autocomplete="tel"></div>
      <div class="field" id="b-branch"><label>الفرع</label>
        <select id="bk-branch">${BRANCHES.map((b,i)=>`<option value="${i}">${b.n}</option>`).join('')}</select>
      </div>
      <div class="field" id="b-date"><label>التاريخ</label><input id="bk-date" type="date" min="${todayStr()}"></div>
      <div class="field" id="b-time"><label>الوقت</label><input id="bk-time" type="time"></div>
      <div class="guests-row">
        <span class="lbl">عدد الأشخاص</span>
        <div class="stepper"><button type="button" id="gMinus" aria-label="إنقاص">−</button><span id="gNum">${bookGuests}</span><button type="button" id="gPlus" aria-label="زيادة">+</button></div>
      </div>
      <div class="field"><label>ملاحظات (اختياري)</label><textarea id="bk-note" rows="2"></textarea></div>
      <button class="add-btn" id="bkConfirm" style="margin-top:6px;">إرسال الحجز عبر واتساب</button>
      <div class="sheet-note" style="text-align:center">سيُفتح واتساب برسالة جاهزة تضغط عليها إرسال لتأكيد الحجز</div>
    </div>
  ` + '</div>';
  const num = document.getElementById('gNum');
  document.getElementById('gMinus').onclick = ()=>{ bookGuests=Math.max(1,bookGuests-1); num.textContent=bookGuests; };
  document.getElementById('gPlus').onclick  = ()=>{ bookGuests=Math.min(20,bookGuests+1); num.textContent=bookGuests; };
  document.getElementById('bkBack').addEventListener('click', renderMore);
  document.getElementById('bkConfirm').onclick = ()=>{
    const name = document.getElementById('bk-name').value.trim();
    const phone = toEnDigits(document.getElementById('bk-phone').value.trim());
    const date = document.getElementById('bk-date').value;
    const time = document.getElementById('bk-time').value;
    const okPhone = /^[0-9+\s-]{8,15}$/.test(phone);
    const okDate = !!date && date >= todayStr();
    document.getElementById('b-name').classList.toggle('err', !name);
    document.getElementById('b-phone').classList.toggle('err', !okPhone);
    document.getElementById('b-date').classList.toggle('err', !okDate);
    document.getElementById('b-time').classList.toggle('err', !time);
    if(!name || !okPhone || !okDate || !time) return;
    const br = BRANCHES[+document.getElementById('bk-branch').value];
    const code = 'BK-' + Math.floor(1000 + Math.random()*9000);
    const note = document.getElementById('bk-note').value.trim();
    const msg = [`*طلب حجز طاولة - ${code}*`,'',`الاسم: ${name}`,`رقم الهاتف: ${phone}`,`الفرع: ${br.n}`,`التاريخ: ${date}`,`الوقت: ${time}`,`عدد الأشخاص: ${bookGuests}`,...(note?['',`*ملاحظات:* ${note}`]:[])].join('\n');
    const waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    renderBookingDone(code, br.n, date, time, bookGuests, waUrl);
    const w = window.open(waUrl, '_blank');
    if(!w){ try{ window.location.href = waUrl; }catch(e){} }
  };
}
function renderBookingDone(code, branch, date, time, guests, waUrl){
  screenEl.innerHTML = '<div class="screen-inner"><div class="success">' + `
    <div class="big"><svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#873D27" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="19"/><path d="M15 25l6 6 12-13"/></svg></div>
    <h2>تم تجهيز حجزك</h2>
    <p>رقم الحجز: <b>${code}</b><br>${branch}<br>${date} - ${time}<br>عدد الأشخاص: <b>${guests}</b></p>
    <p style="font-size:13.5px;color:var(--muted)">لا يكتمل الحجز إلا بعد إرسال الرسالة عبر واتساب.</p>
    ${waUrl?`<a class="add-btn" href="${waUrl}" target="_blank" rel="noopener noreferrer" style="display:block; text-decoration:none; margin:22px auto 0; max-width:240px;">إرسال الحجز عبر واتساب</a>`:''}
    <button class="add-btn" id="bkDone" style="margin-top:12px; max-width:240px; background:transparent; color:#873D27; border:1.8px solid #873D27;">رجوع</button>
  ` + '</div></div>';
  document.getElementById('bkDone').addEventListener('click', renderMore);
}

/* ---------- WORKING HOURS ----------
   Thartar branch: Sat-Thu 7:00 AM to 2:00 AM  |  Fri 2:00 PM to 2:00 AM
   Mall branch: every day 2:00 PM to 2:00 AM */
function openingHour(day){ return day===5 ? 14 : 7; }   // Thartar; day: 0=Sun ... 5=Fri, 6=Sat
function isOpenNow(){
  const d = new Date(), h = d.getHours();
  if(h < 2) return true;                 // late-night tail of the previous day's session
  return h >= openingHour(d.getDay());
}
function isMallOpenNow(){
  const h = new Date().getHours();
  return h < 2 || h >= 14;
}
function renderHours(){
  const open = isOpenNow(), mallOpen = isMallOpenNow();
  const isFri = new Date().getDay()===5;
  const brTitle = t=>`<div style="font-size:17px;font-weight:800;margin:6px 2px 10px;">${t}</div>`;
  screenEl.innerHTML = '<div class="screen-inner">' +
    backTopbar('ساعات العمل','', 'hrBack') + `
    <div class="page-pad">
      ${brTitle('فرع الثرثار')}
      <div class="hrs-row ${!isFri?'today':''}">
        <div class="hrs-day">من السبت إلى الخميس</div>
        <div class="hrs-val">من 7:00 صباحاً إلى 2:00 بعد منتصف الليل</div>
      </div>
      <div class="hrs-row ${isFri?'today':''}">
        <div class="hrs-day">الجمعة</div>
        <div class="hrs-val">من 2:00 مساءً إلى 2:00 بعد منتصف الليل</div>
      </div>
      <div class="hrs-status-wrap" style="margin-top:6px;"><span class="hours-status ${open?'open':'closed'}">${open?'مفتوح الآن':'مغلق الآن'}</span></div>
      <div style="height:22px"></div>
      ${brTitle('فرع المول')}
      <div class="hrs-row today">
        <div class="hrs-day">كل الأيام</div>
        <div class="hrs-val">من 2:00 مساءً إلى 2:00 بعد منتصف الليل</div>
      </div>
      <div class="hrs-status-wrap" style="margin-top:6px;"><span class="hours-status ${mallOpen?'open':'closed'}">${mallOpen?'مفتوح الآن':'مغلق الآن'}</span></div>
    </div>
  ` + '</div>';
  document.getElementById('hrBack').addEventListener('click', renderMore);
}

/* ---------- ABOUT US ---------- */
function renderAbout(){
  screenEl.innerHTML = '<div class="screen-inner">' +
    backTopbar('من نحن','', 'abBack') + `
    <div class="page-pad">
      <div style="padding:6px 0 18px;"><div class="brandlogo" style="height:90px;margin:0 auto;"></div></div>
      <div class="info-card">
        <h3>من نحن | رَوّق ROUQ</h3>
        <p style="margin-top:10px">بدأت حكاية رَوّق من مدينة الفلوجة عام 2024، بشغف القهوة المختصة وإيماننا بأن القهوة أكثر من مجرد مشروب؛ إنها تجربة، ومزاج، وتفاصيل تصنع لحظات لا تُنسى.</p>
        <p style="margin-top:10px">انطلقنا برؤية تهدف إلى تغيير نظرة الناس للقهوة، والارتقاء بثقافتها من خلال تقديم القهوة المختصة بمعايير عالية، وجودة مميزة، وتجربة مختلفة تجمع بين المذاق، والأجواء، والهوية.</p>
        <p style="margin-top:10px">في رَوّق، لا نقدّم القهوة فحسب، بل نصنع مساحة للراحة، واللقاء، والاستمتاع بالتفاصيل الصغيرة. ومن الفلوجة بدأنا رحلتنا، حاملين طموحًا بأن تصبح رَوّق علامة ترتبط بالجودة، والابتكار، والتجربة التي تستحق أن تُعاش.</p>
        <p style="margin-top:14px;font-weight:800">رَوّق… مو بس قهوة، رَوّق مزاجك.</p>
      </div>
      <div class="info-card">
        <h3>فروعنا</h3>
        ${BRANCHES.map(b=>`<div><b>${b.n}</b> - ${b.a}</div>`).join('')}
      </div>
    </div>
  ` + '</div>';
  document.getElementById('abBack').addEventListener('click', renderMore);
}

/* ---------- ABOUT THE DEVELOPER ---------- */
function renderDev(){
  screenEl.innerHTML = '<div class="screen-inner">' +
    backTopbar('عن المطور','', 'dvBack') + `
    <div class="page-pad">
      <div class="dev-card v2">
        <div class="dev-name">${DEV.name}</div>
        <span class="dev-badge">${DEV.role}</span>
        <div class="dev-line"></div>
        <div class="dev-desc">تم تصميم وتطوير هذا الموقع لمقهى روق ليكون تجربة سهلة وسريعة لطلب القهوة والمشروبات وحجز الطاولات من أي جهاز.</div>
        <a class="ig-circle" href="${DEV.igUrl}" target="_blank" rel="noopener noreferrer" aria-label="إنستغرام @${DEV.instagram}">${IG_ICON}</a>
        <a class="dev-handle" style="margin-top:0; text-decoration:none;" href="${DEV.igUrl}" target="_blank" rel="noopener noreferrer">@${DEV.instagram}</a>
      </div>
    </div>
  ` + '</div>';
  document.getElementById('dvBack').addEventListener('click', renderMore);
}

/* ---------- CART ---------- */
let cart = [];
try{ cart = JSON.parse(localStorage.getItem('rawk_cart')||'[]'); }catch(e){ cart = []; }
function saveCart(){ try{ localStorage.setItem('rawk_cart', JSON.stringify(cart)); }catch(e){} }
function cartCount(){ return cart.reduce((a,c)=>a+c.qty,0); }
function cartSubtotal(){ return cart.reduce((a,c)=>a+c.p*c.qty,0); }
function updateBadge(){
  const box = document.querySelector('.navitem[data-view="cart"] .nav-iconbox');
  let b = box.querySelector('.nav-badge');
  const n = cartCount();
  if(!n){ if(b) b.remove(); return; }
  if(!b){ b = document.createElement('span'); b.className='nav-badge'; box.appendChild(b); }
  b.textContent = n;
}
function toast(msg, action){
  document.querySelectorAll('.toast').forEach(x=>x.remove());
  const t = document.createElement('div'); t.className='toast';
  const span = document.createElement('span'); span.textContent = msg; t.appendChild(span);
  if(action){
    const b = document.createElement('button'); b.className='toast-btn'; b.textContent = action.label;
    b.onclick = ()=>{ t.remove(); action.fn(); };
    t.appendChild(b);
  }
  document.body.appendChild(t); setTimeout(()=>t.remove(), action?3500:1700);
}
const infoIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F1E7D8" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8v.2"/></svg>`;
function addSheetBack(bg){
  const sh = bg.querySelector('.sheet'); if(!sh) return;
  const b = document.createElement('button');
  b.type='button'; b.className='sheet-back'; b.setAttribute('aria-label','رجوع');
  b.innerHTML = chevIcon();
  b.addEventListener('click', ()=>bg.remove());
  sh.appendChild(b);
}
const deliveryNotice = `<div class="notice">${infoIcon}<span>تنبيه: سعر التوصيل ${DELIVERY_FEE.toLocaleString('en-US')} دينار عراقي</span></div>`;

/* ordering window: closed from 2:00 AM until 7:00 AM */
function isOrderingOpen(){ const h = new Date().getHours(); return h < 2 || h >= 7; }
const CLOSED_MSG = 'الطلب متوقف حالياً، نستقبل الطلبات من الساعة 7:00 صباحاً';
function closedNotice(){ return isOrderingOpen() ? '' : `<div style="padding:12px 20px 0;"><div class="notice">${infoIcon}<span>${CLOSED_MSG}</span></div></div>`; }

function openSheet(it){
  let qty = 1;
  let size = it.sizes ? it.sizes[0] : null;
  let crop = null;
  const price = ()=> size ? size.p : it.p;
  const bg = document.createElement('div'); bg.className='sheet-bg';
  bg.innerHTML = `
    <div class="sheet${it.crops?' tall':''}">
      <div class="sheet-grip"></div>
      ${it.gallery
        ? `<div class="gal"><div class="gal-track" id="galTrack">${it.gallery.map(g=>`<img src="${g}" draggable="false" alt="">`).join('')}</div><div class="gal-dots" id="galDots">${it.gallery.map((_,i)=>`<i class="${i===0?'on':''}"></i>`).join('')}</div></div>`
        : `<img src="${it.img}" class="${it.photo?'photo':''} ${it.full?'full':''}">`}
      <div class="sheet-name">${it.n}</div>
      <div class="sheet-price" id="sPrice" ${it.noPrice?'style="display:none"':''}>${money(it.p)}</div>
      ${it.cal?`<div class="sheet-cal">السعرات الحرارية: ${it.cal} سعرة</div>`:''}
      ${it.sizes&&it.optLabel?`<div class="opt-title">${it.optLabel}</div>`:''}
      ${it.sizes?`<div class="sizes">${it.sizes.map((z,i)=>`<button class="size-btn ${i===0?'on':''}" data-i="${i}"><span class="lbl">${z.c?`<i class="dot" style="background:${z.c}"></i>`:''}${z.l}</span>${it.hidePrices?'':`<small>${money(z.p)}</small>`}</button>`).join('')}</div>`:''}
      ${it.crops?`<div class="opt-title">اختر المحصول<span class="req">*</span></div><div class="crops" id="cropList">${it.crops.map((c,i)=>`<button type="button" class="crop" data-i="${i}"><span class="radio"></span><span class="crop-txt"><b>${c.n}</b><small>${c.notes}</small></span>${c.tag?`<em>${c.tag}</em>`:''}</button>`).join('')}</div>`:''}
      <div class="sheet-foot">
        <div class="qty"><button id="qPlus">+</button><span id="qVal">1</span><button id="qMinus">−</button></div>
        <button class="add-btn" id="addBtn"></button>
        <div class="sheet-note">سعر التوصيل ${money(DELIVERY_FEE)}</div>
      </div>
    </div>`;
  document.body.appendChild(bg); addSheetBack(bg);
  const refresh = ()=>{
    bg.querySelector('#qVal').textContent = qty;
    bg.querySelector('#sPrice').textContent = money(price());
    const need = it.crops && !crop;
    const ab = bg.querySelector('#addBtn');
    ab.classList.toggle('disabled', !!need);
    ab.textContent = need ? 'اختر المحصول أولاً' : (it.noPrice ? 'إضافة إلى السلة' : `إضافة إلى السلة · ${money(price()*qty)}`);
    if(!isOrderingOpen()){ ab.classList.add('disabled'); ab.textContent = 'الطلب متاح من الساعة 7:00 صباحاً'; }
  };
  refresh();
  const gt = bg.querySelector('#galTrack');
  const gotoImg = i=>{
    if(!gt) return;
    const dir = getComputedStyle(gt).direction==='rtl' ? -1 : 1;
    try{ gt.scrollTo({left:dir*i*gt.clientWidth, behavior:'smooth'}); }catch(_){ gt.scrollLeft = dir*i*gt.clientWidth; }
  };
  if(gt){
    const dots=[...bg.querySelectorAll('#galDots i')];
    gt.addEventListener('scroll', ()=>{
      const i = Math.round(Math.abs(gt.scrollLeft)/Math.max(1,gt.clientWidth));
      dots.forEach((d,k)=>d.classList.toggle('on',k===i));
    }, {passive:true});
  }
  bg.querySelectorAll('.size-btn').forEach(btn=>{
    btn.onclick = ()=>{
      size = it.sizes[parseInt(btn.dataset.i)];
      if(size && size.g!=null) gotoImg(size.g);
      bg.querySelectorAll('.size-btn').forEach(x=>x.classList.toggle('on', x===btn));
      refresh();
    };
  });
  bg.querySelectorAll('.crop').forEach(btn=>{
    btn.onclick = ()=>{
      crop = it.crops[parseInt(btn.dataset.i)];
      bg.querySelectorAll('.crop').forEach(x=>x.classList.toggle('on', x===btn));
      bg.querySelector('#cropList').classList.remove('err');
      refresh();
    };
  });
  bg.addEventListener('click', e=>{ if(e.target===bg) bg.remove(); });
  bg.querySelector('#qPlus').onclick = ()=>{ qty++; refresh(); };
  bg.querySelector('#qMinus').onclick = ()=>{ if(qty>1){ qty--; refresh(); } };
  bg.querySelector('#addBtn').onclick = ()=>{
    if(!isOrderingOpen()){ toast(CLOSED_MSG); return; }
    if(it.crops && !crop){
      const cl = bg.querySelector('#cropList'); cl.classList.add('err');
      cl.scrollIntoView({block:'center', behavior:'smooth'});
      toast('اختر المحصول أولاً');
      return;
    }
    const nm = (crop ? `${it.n} - ${crop.n}` : it.n) + (size ? ` (${size.l})` : '');
    const ex = cart.find(c=>c.n===nm && c.p===price());
    if(ex) ex.qty += qty; else cart.push({n:nm, p:price(), img:(size&&size.img)||it.img, photo:!!it.photo, qty});
    saveCart(); bg.remove(); updateBadge(); toast('تمت الإضافة إلى السلة', {label:'عرض السلة', fn:()=>goTo('cart')});
    if((function(){var n=document.querySelector('.navitem.active');return n&&n.dataset.view;})()==='cart') renderCart();
  };
}

function renderCart(){
  if(!cart.length){
    screenEl.innerHTML = '<div class="screen-inner">' + `
      <div class="menu-topbar" style="justify-content:center;"><div class="title">السلة</div></div>
      <div style="padding-top:18px;">${deliveryNotice}</div>
      <div class="placeholder" style="padding-top:50px;">
        <div class="big">${brandCartIcon(56)}</div>
        <div style="font-size:19px; color:var(--ink); margin-top:16px;">السلة فارغة</div>
        <div style="margin-top:8px;">أضف منتجات من المنيو لتبدأ طلبك</div>
        <button class="add-btn" id="toMenu" style="margin-top:26px; max-width:240px;">تصفح المنيو</button>
      </div>
    ` + '</div>';
    document.getElementById('toMenu').addEventListener('click', ()=>goTo('menu'));
    return;
  }
  const sub = cartSubtotal(), total = sub + deliveryFee();
  screenEl.innerHTML = '<div class="screen-inner">' + `
    <div class="menu-topbar" style="justify-content:center; position:relative;">
      <div class="title">السلة</div>
      <button class="link-btn" id="clearCart" style="position:absolute; left:20px;">مسح السلة</button>
    </div>
    ${closedNotice()}
    <div style="padding-top:18px;">${orderType==='delivery'?deliveryNotice:''}</div>
    <div class="recv">
      <div class="recv-title">طريقة الاستلام</div>
      <div class="recv-seg">
        <button class="recv-opt ${orderType==='dine'?'on':''}" data-t="dine">داخل الكافيه</button>
        <button class="recv-opt ${orderType==='pickup'?'on':''}" data-t="pickup">الاستلام من الكافيه</button>
        <button class="recv-opt ${orderType==='delivery'?'on':''}" data-t="delivery">توصيل</button>
      </div>
    </div>
    ${orderType==='dine'?`<div class="tbl-wrap" id="tblWrap">
      <div class="recv-title">اختر رقم طاولتك<small>${BRANCHES[0].n}</small></div>
      <div class="tbl-grid">${Array.from({length:TABLES},(_,i)=>`<button class="tbl ${tableNo===i+1?'on':''}" data-n="${i+1}">${i+1}</button>`).join('')}</div>
    </div>`:''}
    ${cart.map((c,i)=>`
      <div class="cart-row">
        <img src="${c.img}" class="${c.photo?'photo':''}">
        <div class="cart-info">
          <div class="n">${c.n}</div>
          <div class="q">${c.p>0?money(c.p):'السعر يُحدد عند التأكيد'}</div>
          <div class="stepper" data-i="${i}"><button data-act="plus">+</button><span>${c.qty}</span><button data-act="minus">−</button></div>
        </div>
        <div class="cart-price">${c.p>0?money(c.p*c.qty):'—'}</div>
        <button class="cart-del" data-i="${i}" aria-label="حذف">✕</button>
      </div>`).join('')}
    <div class="summary">
      <div class="row"><span>المجموع الفرعي</span><span>${money(sub)}</span></div>
      <div class="row"><span>التوصيل</span><span>${orderType!=='delivery'?'بدون':money(DELIVERY_FEE)}</span></div>
      <div class="row total"><span>الإجمالي</span><span>${money(total)}</span></div>
    </div>
    <div class="cart-actions"><button class="add-btn" id="checkoutBtn">إتمام الطلب</button></div>
  ` + '</div>';
  document.querySelectorAll('.stepper button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const i = parseInt(btn.parentElement.dataset.i);
      if(btn.dataset.act==='plus') cart[i].qty++;
      else if(cart[i].qty>1) cart[i].qty--;
      else cart.splice(i,1);
      saveCart(); updateBadge(); renderCart();
    });
  });
  document.querySelectorAll('.cart-del').forEach(b=>{
    b.addEventListener('click', ()=>{ cart.splice(parseInt(b.dataset.i),1); saveCart(); updateBadge(); renderCart(); });
  });
  document.querySelectorAll('.recv-opt').forEach(b=>b.addEventListener('click',()=>{ orderType=b.dataset.t; renderCart(); }));
  document.querySelectorAll('.tbl').forEach(b=>b.addEventListener('click',()=>{ tableNo=+b.dataset.n; renderCart(); }));
  document.getElementById('clearCart').addEventListener('click', ()=>{ cart=[]; saveCart(); updateBadge(); renderCart(); });
  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
}

const WA_NUMBER = '9647766505040';   // 07766505040
function buildOrderWhatsApp(num, name, phone, addr, items, subtotal, notes, branchName){
  const pickup = orderType==='pickup', dine = orderType==='dine';
  const lines = [
    `*طلب جديد - ${num}*`,
    '',
    ...(name ? [`الاسم: ${name}`] : []),
    ...(phone ? [`رقم الهاتف: ${phone}`] : []),
    dine ? `طريقة الاستلام: داخل الكافيه (${BRANCHES[0].n})` : pickup ? `طريقة الاستلام: الاستلام من الكافيه (${branchName})` : `طريقة الاستلام: توصيل`,
    ...(dine ? [`*رقم الطاولة: ${tableNo}*`] : []),
    ...(!dine && !pickup ? [`العنوان: ${addr}`] : []),
    '',
    '*الطلبات:*',
    ...items.map(c=>c.p>0 ? `- ${c.n} × ${c.qty} = ${money(c.p*c.qty)}` : `- ${c.n} × ${c.qty} (السعر يُحدد عند التأكيد)`),
    '',
    `المجموع الفرعي: ${money(subtotal)}`,
    dine ? 'سعر التوصيل: لا يوجد (طلب داخل الكافيه)' : pickup ? 'سعر التوصيل: لا يوجد (استلام من الكافيه)' : `سعر التوصيل: ${money(DELIVERY_FEE)}`,
    `*الإجمالي: ${money(subtotal + deliveryFee())}*`,
    ...(notes ? ['', `*ملاحظات:* ${notes}`] : [])
  ];
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
}

function openCheckout(){
  if(!isOrderingOpen()){ toast(CLOSED_MSG); return; }
  if(orderType==='dine' && !tableNo){
    const w = document.getElementById('tblWrap'); if(w){ w.classList.add('err'); w.scrollIntoView({block:'center',behavior:'smooth'}); }
    toast('اختر رقم طاولتك أولاً');
    return;
  }
  const pickup = orderType==='pickup', dine = orderType==='dine';
  const total = cartSubtotal() + deliveryFee();
  const bg = document.createElement('div'); bg.className='sheet-bg';
  bg.innerHTML = `
    <div class="sheet tall">
      <div class="sheet-grip"></div>
      <div class="sheet-name" style="margin:0 0 14px;">${dine?'بيانات الطلب':pickup?'بيانات الاستلام':'بيانات التوصيل'}</div>
      ${dine?`<div class="notice" style="margin:0 0 14px;"><span>الطاولة رقم ${tableNo} - ${BRANCHES[0].n}</span></div>`:''}
      <div class="field" id="f-name"><label>الاسم (اختياري)</label><input id="in-name" type="text" autocomplete="name"></div>
      <div class="field" id="f-phone"><label>رقم الهاتف${dine?' (اختياري)':''}</label><input id="in-phone" type="tel" dir="ltr" style="text-align:right;" placeholder="07XXXXXXXXX" autocomplete="tel"></div>
      ${dine ? '' : pickup
        ? `<div class="field" id="f-branch"><label>فرع الاستلام</label><select id="in-branch">${BRANCHES.map((b,i)=>`<option value="${i}">${b.n} - ${b.a}</option>`).join('')}</select></div>`
        : `<div class="field" id="f-addr"><label>العنوان</label><textarea id="in-addr" rows="2"></textarea></div>`}
      <div class="field" id="f-notes"><label>ملاحظات (اختياري)</label><textarea id="in-notes" rows="2" placeholder="مثال: بدون سكر، أو أي تفاصيل للتوصيل"></textarea></div>
      <div class="summary" style="margin:4px 0 14px;">
        <div class="row"><span>المجموع الفرعي</span><span>${money(cartSubtotal())}</span></div>
        <div class="row"><span>التوصيل</span><span>${(pickup||dine)?'بدون':money(DELIVERY_FEE)}</span></div>
        <div class="row total"><span>الإجمالي</span><span>${money(total)}</span></div>
      </div>
      <button class="add-btn" id="confirmBtn">تأكيد الطلب</button>
    </div>`;
  document.body.appendChild(bg); addSheetBack(bg);
  bg.addEventListener('click', e=>{ if(e.target===bg) bg.remove(); });
  bg.querySelector('#confirmBtn').onclick = ()=>{
    const name = bg.querySelector('#in-name').value.trim();
    const phone = bg.querySelector('#in-phone').value.trim().replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const addr = (pickup||dine) ? '' : bg.querySelector('#in-addr').value.trim();
    const branchName = pickup ? BRANCHES[+bg.querySelector('#in-branch').value].n : '';
    const notes = bg.querySelector('#in-notes').value.trim();
    const okPhone = (dine && !phone) || /^[0-9+\s-]{8,15}$/.test(phone);
    bg.querySelector('#f-phone').classList.toggle('err', !okPhone);
    const needAddr = !pickup && !dine;
    if(needAddr) bg.querySelector('#f-addr').classList.toggle('err', !addr);
    if(!okPhone || (needAddr && !addr)) return;
    const num = 'RWK-' + Math.floor(1000 + Math.random()*9000);
    const sum = money(total);
    const waUrl = buildOrderWhatsApp(num, name, phone, addr, cart.map(c=>({n:c.n,p:c.p,qty:c.qty})), cartSubtotal(), notes, branchName);
    cart = []; saveCart(); updateBadge(); bg.remove();
    renderSuccess(num, sum, waUrl, pickup||dine, dine?tableNo:0);
    const w = window.open(waUrl, '_blank');
    if(!w){ try{ window.location.href = waUrl; }catch(e){} }
  };
}

function renderSuccess(num, sum, waUrl, pickup, table){
  screenEl.innerHTML = '<div class="screen-inner"><div class="success">' + `
    <div class="big"><svg width="64" height="64" viewBox="0 0 48 48" fill="none" stroke="#873D27" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="19"/><path d="M15 25l6 6 12-13"/></svg></div>
    <h2>تم استلام طلبك</h2>
    <p>رقم الطلب: <b>${num}</b><br>${table?`رقم الطاولة: <b>${table}</b><br>`:''}${pickup?'الإجمالي':'الإجمالي مع التوصيل'}: <b>${sum}</b></p>
    ${waUrl?`<a class="add-btn" href="${waUrl}" target="_blank" rel="noopener noreferrer" style="display:block; text-decoration:none; margin:22px auto 0; max-width:240px;">إرسال الطلب عبر واتساب</a>`:''}
    <button class="add-btn" id="backMenu" style="margin-top:12px; max-width:240px; background:transparent; color:#873D27; border:1.8px solid #873D27;">العودة للمنيو</button>
  ` + '</div></div>';
  document.getElementById('backMenu').addEventListener('click', ()=>goTo('menu'));
}

function renderPlaceholder(title, iconSvg){
  screenEl.innerHTML = '<div class="screen-inner">' + `
    <div class="placeholder">
      <div class="big">${iconSvg}</div>
      <div style="font-size:19px; color:var(--ink); margin-top:16px;">${title}</div>
      <div style="margin-top:8px;">لا يوجد محتوى لعرضه هنا حاليًا</div>
    </div>
  ` + '</div>';
}

const BRANCHES = [
  {n:'فرع الثرثار', a:'الفلوجة - شارع الثرثار | مجمع الساعة', url:'https://maps.app.goo.gl/xN1Tgx1T2W4X3Qm69?g_st=ic', embed:'https://maps.google.com/maps?q=33.3688688,43.7822533&z=17&hl=ar&output=embed'},
  {n:'فرع المول', a:'مول الفلوجة | الطابق الأول'},
];
function renderLocations(){
  const pin='<svg viewBox="0 0 24 24" fill="none" stroke="#F1E7D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>';
  screenEl.innerHTML = '<div class="screen-inner"><div class="loc-page"><div class="loc-title">موقعنا</div>' +
    BRANCHES.map(b=>`<div class="loc-card"><div class="loc-ico">${pin}</div><div style="flex:1"><div class="loc-name">${b.n}</div><div class="loc-addr">${b.a}</div>${b.url?`<a class="loc-map" href="${b.url}" target="_blank" rel="noopener">افتح في الخريطة</a>`:''}</div></div>${b.embed?`<div class="loc-live"><a class="loc-live-fb" href="${b.url}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="#873D27" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="34" height="34"><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg><span>اضغط لفتح الخريطة</span></a><iframe src="${b.embed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="${b.n}"></iframe></div>`:''}`).join('') +
    '</div></div>';
}

/* ---------- GAMES SECTION (قسم الألعاب) ---------- */
const GSC={xo:{a:0,b:0,d:0},c4:{a:0,b:0,d:0},ch:{a:0,b:0,d:0}};
const GS={xo:{mode:'ai',lv:2},c4:{mode:'ai',lv:2},ch:{mode:'ai',lv:2}};
let gTok=0;
function gStop(){ gTok++; }
const GAMES=[
  {k:'xo', n:'إكس أو', d:'اصطف ثلاث علامات قبل خصمك', r:()=>renderXO(),
   ic:'<svg viewBox="0 0 48 48" fill="none" stroke="#F1E7D8" stroke-linecap="round"><path d="M17 5v38M31 5v38M5 17h38M5 31h38" stroke-width="2" opacity=".4"/><path d="M8 8l6 6M14 8l-6 6" stroke-width="3"/><circle cx="24" cy="24" r="4.2" stroke-width="3"/><path d="M34 34l6 6M40 34l-6 6" stroke-width="3"/></svg>'},
  {k:'c4', n:'أربعة في صف', d:'اجمع أربع قطع متتالية', r:()=>renderC4(),
   ic:'<svg viewBox="0 0 48 48"><g fill="none" stroke="#F1E7D8" stroke-width="2" opacity=".5"><circle cx="11" cy="11" r="5.5"/><circle cx="24" cy="11" r="5.5"/><circle cx="37" cy="11" r="5.5"/><circle cx="11" cy="24" r="5.5"/></g><circle cx="24" cy="24" r="5.5" fill="#F1E7D8"/><circle cx="37" cy="24" r="5.5" fill="#E3A857"/><circle cx="11" cy="37" r="5.5" fill="#F1E7D8"/><circle cx="24" cy="37" r="5.5" fill="#E3A857"/><circle cx="37" cy="37" r="5.5" fill="#F1E7D8"/></svg>'},
  {k:'ch', n:'الشطرنج', d:'اللعبة الملكية بقواعدها الكاملة', r:()=>renderChess(),
   ic:'<span style="font-size:44px;line-height:1;color:#F1E7D8">♞\uFE0E</span>'}
];
function renderGames(){
  gStop();
  screenEl.innerHTML='<div class="screen-inner">'+backTopbar('قسم الألعاب','','gmBack')+`
    <div class="gm-hero"><div class="gm-deco">♞\uFE0E</div><h2>وقت اللعب</h2><p>ألعاب تنافسية ضد الجهاز أو ضد صديق، وأنت تنتظر قهوتك.</p></div>
    <div class="gm-list">${GAMES.map(g=>`<div class="gm-card" data-k="${g.k}"><div class="gm-ic">${g.ic}</div><div class="gm-tx"><b>${g.n}</b><small>${g.d}</small><div class="gm-tags"><span>ضد الجهاز</span><span>ضد صديق</span></div></div><span class="chev">${chevIcon()}</span></div>`).join('')}</div>
  </div>`;
  document.getElementById('gmBack').addEventListener('click',renderMore);
  document.querySelectorAll('.gm-card').forEach(c=>c.addEventListener('click',()=>GAMES.find(g=>g.k===c.dataset.k).r()));
}
function gShell(k){
  gStop();
  const g=GAMES.find(x=>x.k===k), st=GS[k], sc=GSC[k], ai=st.mode==='ai';
  screenEl.innerHTML='<div class="screen-inner">'+backTopbar(g.n,'','gmBack')+`
    <div class="recv" style="padding-top:10px"><div class="recv-seg" id="gMode"><button class="recv-opt ${ai?'on':''}" data-v="ai">ضد الجهاز</button><button class="recv-opt ${ai?'':'on'}" data-v="pl">ضد صديق</button></div></div>
    ${ai?`<div class="recv" style="padding-top:8px"><div class="recv-seg" id="gLv">${['سهل','متوسط','صعب'].map((t,i)=>`<button class="recv-opt ${st.lv===i+1?'on':''}" data-v="${i+1}">${t}</button>`).join('')}</div></div>`:''}
    <div class="gm-score"><div class="gm-sc"><b id="gs-a">${sc.a}</b><small>${ai?'أنت':'اللاعب 1'}</small></div><div class="gm-sc"><b id="gs-d">${sc.d}</b><small>تعادل</small></div><div class="gm-sc"><b id="gs-b">${sc.b}</b><small>${ai?'الجهاز':'اللاعب 2'}</small></div></div>
    <div class="gm-status" id="gStat"></div>
    <div id="gBoard"></div>
    ${k==='ch'?'<div class="gm-note">الترقية تتم تلقائيًا إلى وزير</div>':''}
    <div class="cart-actions"><button class="add-btn" id="gReset">لعبة جديدة</button></div>
  </div>`;
  document.getElementById('gmBack').addEventListener('click',renderGames);
  document.getElementById('gReset').addEventListener('click',g.r);
  document.getElementById('gMode').onclick=e=>{ const b=e.target.closest('.recv-opt'); if(b){ st.mode=b.dataset.v; g.r(); } };
  const lv=document.getElementById('gLv'); if(lv) lv.onclick=e=>{ const b=e.target.closest('.recv-opt'); if(b){ st.lv=+b.dataset.v; g.r(); } };
}
function gSay(t,end){ const s=document.getElementById('gStat'); if(s){ s.textContent=t; s.classList.toggle('end',!!end); } }
function gScore(k){ const s=GSC[k]; ['a','d','b'].forEach(x=>{ const e=document.getElementById('gs-'+x); if(e) e.textContent=s[x]; }); }

/* ===== XO ===== */
const XO_L=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function xoWin(b){ for(const l of XO_L) if(b[l[0]]&&b[l[0]]===b[l[1]]&&b[l[0]]===b[l[2]]) return l; return null; }
function xoMM(b,t,me,d){
  const w=xoWin(b); if(w) return b[w[0]]===me?10-d:d-10;
  if(b.every(Boolean)) return 0;
  let best=t===me?-99:99;
  for(let i=0;i<9;i++) if(!b[i]){ b[i]=t; const s=xoMM(b,t==='X'?'O':'X',me,d+1); b[i]=''; best=t===me?Math.max(best,s):Math.min(best,s); }
  return best;
}
function xoAI(b,lv){
  const free=[...b.keys()].filter(i=>!b[i]);
  if(Math.random()>[.15,.65,1][lv-1]) return free[Math.random()*free.length|0];
  let bs=-99,c=[];
  for(const i of free){ b[i]='O'; const s=xoMM(b,'X','O',1); b[i]=''; if(s>bs){bs=s;c=[i];} else if(s===bs) c.push(i); }
  return c[Math.random()*c.length|0];
}
function renderXO(){ gShell('xo'); xoInit(); }
function xoInit(){
  const ai=GS.xo.mode==='ai', el=document.getElementById('gBoard');
  let b=Array(9).fill(''), t='X', over=false, last=-1;
  const mark=v=>v==='X'?'<svg viewBox="0 0 40 40"><path class="dr" d="M9 9L31 31M31 9L9 31"/></svg>':v==='O'?'<svg viewBox="0 0 40 40"><circle class="dr" cx="20" cy="20" r="12"/></svg>':'';
  const draw=w=>{
    el.innerHTML='<div class="xo">'+b.map((v,i)=>`<button class="xo-c ${v?'f':''} ${i===last?'new':''} ${w&&w.includes(i)?'w':''}" data-i="${i}" ${v||over?'disabled':''} aria-label="خانة ${i+1}">${mark(v)}</button>`).join('')+'</div>';
    el.querySelectorAll('.xo-c').forEach(c=>c.onclick=()=>play(+c.dataset.i));
  };
  const say=()=>gSay(ai?(t==='X'?'دورك (X)':'الجهاز يفكر…'):'دور اللاعب '+(t==='X'?'1 (X)':'2 (O)'));
  const end=s=>{
    const sc=GSC.xo;
    if(s==='X'){ sc.a++; gSay(ai?'فزت! أحسنت':'فاز اللاعب 1',1); }
    else if(s==='O'){ sc.b++; gSay(ai?'فاز الجهاز':'فاز اللاعب 2',1); }
    else{ sc.d++; gSay('تعادل',1); }
    gScore('xo');
  };
  const after=()=>{
    const w=xoWin(b);
    if(w){ over=true; draw(w); end(b[w[0]]); return; }
    if(b.every(Boolean)){ over=true; draw(); end(null); return; }
    t=t==='X'?'O':'X'; draw(); say();
    if(ai&&t==='O'){ const tk=gTok; setTimeout(()=>{ if(tk!==gTok||over||!el.isConnected) return; const m=xoAI(b,GS.xo.lv); b[m]='O'; last=m; after(); },450); }
  };
  const play=i=>{ if(over||b[i]||(ai&&t==='O')) return; b[i]=t; last=i; after(); };
  draw(); say();
}

/* ===== أربعة في صف ===== */
const C4W=[];
(function(){ for(let r=0;r<6;r++)for(let c=0;c<7;c++)[[0,1],[1,0],[1,1],[1,-1]].forEach(([dr,dc])=>{ const er=r+3*dr,ec=c+3*dc; if(er<6&&ec>=0&&ec<7) C4W.push([0,1,2,3].map(k=>(r+k*dr)*7+c+k*dc)); }); })();
function c4Win(b){ for(const w of C4W){ const v=b[w[0]]; if(v&&v===b[w[1]]&&v===b[w[2]]&&v===b[w[3]]) return w; } return null; }
function c4Row(b,c){ for(let r=5;r>=0;r--) if(!b[r*7+c]) return r; return -1; }
function c4Eval(b,me){
  let s=0; const op=3-me;
  for(const w of C4W){ let m=0,o=0; for(const i of w){ if(b[i]===me)m++; else if(b[i]===op)o++; }
    if(!o) s+=m===3?5:m===2?2:0; if(!m) s-=o===3?6:o===2?2:0; }
  for(let r=0;r<6;r++) if(b[r*7+3]===me) s+=3;
  return s;
}
function c4MM(b,d,al,be,turn,me){
  const w=c4Win(b); if(w) return b[w[0]]===me?1000+d:-1000-d;
  if(b.every(Boolean)) return 0; if(d===0) return c4Eval(b,me);
  let best=turn===me?-1e5:1e5;
  for(const c of [3,2,4,1,5,0,6]){
    const r=c4Row(b,c); if(r<0) continue;
    b[r*7+c]=turn; const s=c4MM(b,d-1,al,be,3-turn,me); b[r*7+c]=0;
    if(turn===me){ best=Math.max(best,s); al=Math.max(al,s); } else { best=Math.min(best,s); be=Math.min(be,s); }
    if(be<=al) break;
  }
  return best;
}
function c4AI(b,lv){
  const cols=[0,1,2,3,4,5,6].filter(c=>c4Row(b,c)>=0);
  if(lv===1&&Math.random()<.35) return cols[Math.random()*cols.length|0];
  const d=[2,4,5][lv-1]; let bs=-1e9,ch=[];
  for(const c of cols){ const r=c4Row(b,c); b[r*7+c]=2; const s=c4MM(b,d-1,-1e9,1e9,1,2); b[r*7+c]=0; if(s>bs){bs=s;ch=[c];} else if(s===bs) ch.push(c); }
  return ch[Math.random()*ch.length|0];
}
function renderC4(){ gShell('c4'); c4Init(); }
function c4Init(){
  const ai=GS.c4.mode==='ai', el=document.getElementById('gBoard');
  let b=Array(42).fill(0), t=1, over=false, last=-1, win=null;
  const draw=()=>{
    el.innerHTML='<div class="c4">'+b.map((v,i)=>`<div class="c4-c" data-c="${i%7}">${v?`<i class="p${v}${i===last?' new':''}${win&&win.includes(i)?' w':''}" style="--d:${(i/7|0)+1}"></i>`:''}</div>`).join('')+'</div>';
    el.querySelectorAll('.c4-c').forEach(c=>c.onclick=()=>drop(+c.dataset.c));
  };
  const say=()=>gSay(ai?(t===1?'دورك (الفاتح)':'الجهاز يفكر…'):'دور اللاعب '+t+(t===1?' (الفاتح)':' (الذهبي)'));
  const fin=()=>{
    const w=c4Win(b), sc=GSC.c4;
    if(w){ over=true; win=w; if(b[w[0]]===1){ sc.a++; gSay(ai?'فزت! أحسنت':'فاز اللاعب 1',1); } else { sc.b++; gSay(ai?'فاز الجهاز':'فاز اللاعب 2',1); } draw(); gScore('c4'); return true; }
    if(b.every(Boolean)){ over=true; sc.d++; gSay('تعادل',1); draw(); gScore('c4'); return true; }
    return false;
  };
  const think=()=>{ const tk=gTok; setTimeout(()=>{ if(tk!==gTok||!el.isConnected||over) return; const c=c4AI(b,GS.c4.lv), r=c4Row(b,c); b[r*7+c]=2; last=r*7+c; draw(); if(fin()) return; t=1; say(); },420); };
  const drop=c=>{ if(over||(ai&&t===2)) return; const r=c4Row(b,c); if(r<0) return; b[r*7+c]=t; last=r*7+c; draw(); if(fin()) return; t=3-t; say(); if(ai) think(); };
  draw(); say();
}

/* ===== الشطرنج ===== */
const CHG={k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'}, CHV={p:100,n:320,b:330,r:500,q:900,k:0};
const CH_ORT=[[1,0],[-1,0],[0,1],[0,-1]], CH_DIA=[[1,1],[1,-1],[-1,1],[-1,-1]];
const CH_N=[[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]];
function chNew(){ const b=Array(64).fill(''), bk='rnbqkbnr'; for(let i=0;i<8;i++){ b[i]=bk[i]; b[8+i]='p'; b[48+i]='P'; b[56+i]=bk[i].toUpperCase(); } return {b,t:'w',c:{K:1,Q:1,k:1,q:1},ep:-1}; }
function chAtt(b,sq,by){
  const r=sq>>3,c=sq&7,own=by==='w', ok=(x,y)=>x>=0&&x<8&&y>=0&&y<8, P=(w,x)=>own?x.toUpperCase():x;
  const pr=own?r+1:r-1;
  for(const dc of [-1,1]) if(ok(pr,c+dc)&&b[pr*8+c+dc]===(own?'P':'p')) return true;
  for(const [dr,dc] of CH_N) if(ok(r+dr,c+dc)&&b[(r+dr)*8+c+dc]===(own?'N':'n')) return true;
  for(const [dr,dc] of CH_ORT.concat(CH_DIA)) if(ok(r+dr,c+dc)&&b[(r+dr)*8+c+dc]===(own?'K':'k')) return true;
  const sl=(ds,a,q)=>{ for(const [dr,dc] of ds){ let x=r+dr,y=c+dc; while(ok(x,y)){ const p=b[x*8+y]; if(p){ if(p===a||p===q) return true; break; } x+=dr; y+=dc; } } return false; };
  return sl(CH_ORT,own?'R':'r',own?'Q':'q')||sl(CH_DIA,own?'B':'b',own?'Q':'q');
}
function chPseudo(s,i){
  const b=s.b,p=b[i]; if(!p) return [];
  const w=p<'a',t=p.toLowerCase(),r=i>>3,c=i&7,out=[], opp=w?'b':'w';
  const ok=(x,y)=>x>=0&&x<8&&y>=0&&y<8, foe=q=>q&&((q<'a')!==w);
  const add=(to,x)=>out.push(Object.assign({f:i,t:to},x));
  if(t==='p'){
    const d=w?-1:1,st=w?6:1,pr=w?0:7;
    const mk=(to,x)=>(to>>3)===pr?add(to,Object.assign({pr:w?'Q':'q'},x)):add(to,x);
    if(ok(r+d,c)&&!b[(r+d)*8+c]){ mk((r+d)*8+c,{}); if(r===st&&!b[(r+2*d)*8+c]) add((r+2*d)*8+c,{dp:1}); }
    for(const dc of [-1,1]){ if(!ok(r+d,c+dc)) continue; const to=(r+d)*8+c+dc; if(foe(b[to])) mk(to,{}); else if(to===s.ep) add(to,{ep:1}); }
  } else if(t==='n'||t==='k'){
    for(const [dr,dc] of t==='n'?CH_N:CH_ORT.concat(CH_DIA)){ if(!ok(r+dr,c+dc)) continue; const to=(r+dr)*8+c+dc,q=b[to]; if(!q||foe(q)) add(to,{}); }
    if(t==='k'&&i===(w?60:4)&&!chAtt(b,i,opp)){
      const R=w?'R':'r', k=w?s.c.K:s.c.k, q=w?s.c.Q:s.c.q;
      if(k&&!b[i+1]&&!b[i+2]&&b[i+3]===R&&!chAtt(b,i+1,opp)&&!chAtt(b,i+2,opp)) add(i+2,{cs:1});
      if(q&&!b[i-1]&&!b[i-2]&&!b[i-3]&&b[i-4]===R&&!chAtt(b,i-1,opp)&&!chAtt(b,i-2,opp)) add(i-2,{cs:1});
    }
  } else {
    for(const [dr,dc] of t==='r'?CH_ORT:t==='b'?CH_DIA:CH_ORT.concat(CH_DIA)){
      let x=r+dr,y=c+dc;
      while(ok(x,y)){ const to=x*8+y,q=b[to]; if(!q) add(to,{}); else { if(foe(q)) add(to,{}); break; } x+=dr; y+=dc; }
    }
  }
  return out;
}
function chApply(s,m){
  const b=s.b.slice(),p=b[m.f],w=p<'a', c=Object.assign({},s.c);
  b[m.t]=m.pr||p; b[m.f]='';
  if(m.ep) b[m.t+(w?8:-8)]='';
  if(m.cs){ const k=m.t>m.f, rf=k?m.f+3:m.f-4, rt=k?m.f+1:m.f-1; b[rt]=b[rf]; b[rf]=''; }
  if(p==='K'){ c.K=0; c.Q=0; } if(p==='k'){ c.k=0; c.q=0; }
  for(const q of [m.f,m.t]){ if(q===63)c.K=0; if(q===56)c.Q=0; if(q===7)c.k=0; if(q===0)c.q=0; }
  return {b,t:w?'b':'w',c,ep:m.dp?(m.f+m.t)/2:-1};
}
function chCheck(s){ const k=s.b.indexOf(s.t==='w'?'K':'k'); return k>=0&&chAtt(s.b,k,s.t==='w'?'b':'w'); }
function chLegal(s){
  const out=[], w=s.t==='w';
  for(let i=0;i<64;i++){ const p=s.b[i]; if(!p||(p<'a')!==w) continue;
    for(const m of chPseudo(s,i)){ const n=chApply(s,m), k=n.b.indexOf(w?'K':'k'); if(!chAtt(n.b,k,w?'b':'w')) out.push(m); } }
  return out;
}
function chEval(s){
  let v=0;
  for(let i=0;i<64;i++){ const p=s.b[i]; if(!p) continue; const w=p<'a',t=p.toLowerCase(),r=i>>3,c=i&7;
    let x=CHV[t]; const cen=6-Math.abs(r-3.5)-Math.abs(c-3.5);
    if(t==='n'||t==='b') x+=cen*5; else if(t==='p') x+=(w?6-r:r-1)*6+(c>1&&c<6?cen:0); else if(t==='q') x+=cen;
    v+=w?x:-x; }
  return v;
}
function chOrd(s,m){ const p=s.b[m.f].toLowerCase(),q=s.b[m.t]; return (q?CHV[q.toLowerCase()]*10-CHV[p]:0)+(m.pr?800:0); }
function chSearch(s,d,al,be){
  const mv=chLegal(s);
  if(!mv.length) return chCheck(s)?-99999-d:0;
  if(d===0) return (s.t==='w'?1:-1)*chEval(s);
  mv.sort((x,y)=>chOrd(s,y)-chOrd(s,x));
  let best=-1e9;
  for(const m of mv){ const sc=-chSearch(chApply(s,m),d-1,-be,-al); if(sc>best) best=sc; if(best>al) al=best; if(al>=be) break; }
  return best;
}
function chAI(s,lv){
  const mv=chLegal(s), d=lv; mv.sort((x,y)=>chOrd(s,y)-chOrd(s,x));
  let best=null,bs=-1e9;
  for(const m of mv){
    const sc=-chSearch(chApply(s,m),d-1,-1e9,lv===1?1e9:-bs+1)+(lv===1?Math.random()*140:0);
    if(sc>bs){ bs=sc; best=m; }
  }
  return best;
}
function renderChess(){ gShell('ch'); chInit(); }
function chInit(){
  const ai=GS.ch.mode==='ai', el=document.getElementById('gBoard');
  let s=chNew(), sel=-1, last=null, over=false, moves=chLegal(s);
  const draw=()=>{
    const chk=chCheck(s)?s.b.indexOf(s.t==='w'?'K':'k'):-1, tg=sel>=0?moves.filter(m=>m.f===sel):[];
    let h='';
    for(let i=0;i<64;i++){
      const p=s.b[i], t=tg.find(m=>m.t===i);
      h+=`<div class="ch-s ${((i>>3)+(i&7))%2?'d':'l'}${last&&(last[0]===i||last[1]===i)?' last':''}${sel===i?' sel':''}${i===chk?' chk':''}${t?' mv'+(p||t.ep?' cap':''):''}" data-i="${i}">${p?`<span class="ch-p ${p<'a'?'w':'b'}">${CHG[p.toLowerCase()]}\uFE0E</span>`:''}</div>`;
    }
    el.innerHTML='<div class="ch">'+h+'</div>';
    el.querySelectorAll('.ch-s').forEach(q=>q.onclick=()=>click(+q.dataset.i));
  };
  const say=()=>{
    const w=s.t==='w', chk=chCheck(s);
    if(over) return;
    gSay(ai?(w?'دورك'+(chk?' — كش!':''):'الجهاز يفكر…'):'دور '+(w?'الأبيض (اللاعب 1)':'الأسود (اللاعب 2)')+(chk?' — كش!':''));
  };
  const finish=()=>{
    const sc=GSC.ch, chk=chCheck(s), left=s.b.filter(x=>x&&x.toLowerCase()!=='k').length;
    if(!moves.length||left===0){
      over=true;
      if(chk&&moves.length===0){ if(s.t==='b'){ sc.a++; gSay(ai?'كش مات — فزت!':'كش مات — فاز الأبيض',1); } else { sc.b++; gSay(ai?'كش مات — فاز الجهاز':'كش مات — فاز الأسود',1); } }
      else{ sc.d++; gSay(moves.length?'تعادل':'تعادل (لا حركات متاحة)',1); }
      gScore('ch'); return true;
    }
    return false;
  };
  const doMove=m=>{
    s=chApply(s,m); last=[m.f,m.t]; sel=-1; moves=chLegal(s);
    const f=finish(); draw(); if(f) return; say();
    if(ai&&s.t==='b'){ const tk=gTok; setTimeout(()=>{ if(tk!==gTok||!el.isConnected||over) return; const am=chAI(s,GS.ch.lv); if(am) doMove(am); },120); }
  };
  const click=i=>{
    if(over||(ai&&s.t==='b')) return;
    if(sel>=0){ const m=moves.find(x=>x.f===sel&&x.t===i); if(m){ doMove(m); return; } }
    const p=s.b[i];
    sel=p&&((p<'a')===(s.t==='w'))?(sel===i?-1:i):-1; draw();
  };
  draw(); say();
}

const VIEWS = {
  estore: renderEstore,
  menu: renderMenu,
  more: renderMore,
  cart: renderCart,
  rewards: renderLocations,
};

function setActiveNav(view){
  document.querySelectorAll('.navitem').forEach(n=>{
    n.classList.toggle('active', n.dataset.view===view);
  });
}

function goTo(view){
  VIEWS[view]();
  setActiveNav(view);
  window.scrollTo(0,0);
}

document.querySelectorAll('.navitem').forEach(item=>{
  item.addEventListener('click', ()=> goTo(item.dataset.view));
});

/* clock */
function updateClock(){
  const d = new Date();
  const h = d.getHours()%12 || 12;
  const m = d.getMinutes().toString().padStart(2,'0');
  document.getElementById('clock').textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 30000);

/* init */
try{ updateBadge(); }catch(e){}
goTo('estore');
