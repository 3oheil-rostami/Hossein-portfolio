
import './App.css';


function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Home />
        <Skills />
        <Services />
      </div>
      <hr />
      <Contact />
    </div>
  );
}



function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">خانه</a></li>
        <li><a href="#skills">مهارت‌ها</a></li>
        <li><a href="#services">خدمات</a></li>
        <li><a href="#contact">ارتباط</a></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-bg" />
      <div className="home-content">
        <h1 className="animated-name">
          {['Hosein', 'Torkashvand'].map((word, i) => (
            <span key={i} className="name-word">{word} </span>
          ))}
        </h1>
        <div className="glass-box">
          <p className="home-desc">
            تصویرساز، تصویر‌بردار و تدوین‌گر ویدیو با بیش از ۱۰ سال تجربه حرفه‌ای. خلق تصاویر و ویدیوهای خلاقانه با سبک منحصر به فرد.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: 'Premiere', percent: 90, logo: '🎬' },
    { name: 'After Effects', percent: 85, logo: '✨' },
    { name: 'Photoshop', percent: 80, logo: '🖼️' },
    { name: 'Videography', percent: 95, logo: '📷' },
  ];
  return (
    <section className="skills-section" id="skills">
      <h1>مهارت‌ها</h1>
      <div className="skills-list">
        {skills.map(skill => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-logo">{skill.logo}</div>
            <div style={{ color: 'white' }} className="skill-name">{skill.name}</div>
            <div className="skill-circle">
              <svg width="80" height="80">
                <circle cx="40" cy="40" r="35" stroke="#eee" strokeWidth="8" fill="none" />
                <circle cx="40" cy="40" r="35" stroke="#2196f3" strokeWidth="8" fill="none"
                  strokeDasharray={2 * Math.PI * 35}
                  strokeDashoffset={2 * Math.PI * 35 * (1 - skill.percent / 100)}
                  style={{ transition: 'stroke-dashoffset 1s' }}
                />
                <text x="40" y="45" textAnchor="middle" fontSize="18" fill="#333">{skill.percent}%</text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: 'تصویرسازی تبلیغاتی و هنری',
      desc: 'خلق تصاویر منحصر به فرد برای کمپین‌های تبلیغاتی، جلد کتاب، پوستر و پروژه‌های هنری با سبک خاص و خلاقانه.'
    },
    {
      title: 'تصویربرداری و تدوین ویدیو',
      desc: 'فیلم‌برداری حرفه‌ای با تجهیزات روز و تدوین ویدیو با جلوه‌های بصری مدرن برای انواع پروژه‌های تبلیغاتی، مستند و هنری.'
    },
    {
      title: 'ساخت تیزر و کلیپ خلاقانه',
      desc: 'تولید تیزرهای تبلیغاتی، کلیپ‌های کوتاه و ویدیوهای شبکه‌های اجتماعی با ایده‌پردازی و اجرای حرفه‌ای.'
    },
    {
      title: 'مشاوره و اجرای پروژه‌های رسانه‌ای',
      desc: 'ارائه مشاوره تخصصی و مدیریت پروژه‌های رسانه‌ای از ایده تا اجرا با تضمین کیفیت و خلاقیت.'
    },
    {
      title: 'مشاوره و اجرای پروژه‌های رسانه‌ای',
      desc: 'ارائه مشاوره تخصصی و مدیریت پروژه‌های رسانه‌ای از ایده تا اجرا با تضمین کیفیت و خلاقیت.'
    },
    {
      title: 'مشاوره و اجرای پروژه‌های رسانه‌ای',
      desc: 'ارائه مشاوره تخصصی و مدیریت پروژه‌های رسانه‌ای از ایده تا اجرا با تضمین کیفیت و خلاقیت.'
    }
  ];
  return (
    <section style={{ textAlign: 'center' }} className="services-section" id="services">
      <h1 className="services-title" style={{ color: 'black' }}>خدمات من</h1>
      <div className="services-cards">
        {services.map((service, idx) => (
          <div className="service-card glass-border" key={idx}>
            <h3 style={{ color: 'black' }} className="service-card-title">{service.title}</h3>
            <p style={{ color: 'white' }} className="service-card-desc">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="services-desc-box">
        <h3 style={{ color: 'white' }} className="services-desc">
          با دیزاین مدرن و خلاقانه، پروژه شما را با بهترین کیفیت و توجه به جزئیات اجرا می‌کنم. هدف من خلق تجربه بصری متفاوت و تاثیرگذار برای هر پروژه است
        </h3>
      </div>
    </section>
  );
}

function Contact() {
  const socials = [
    { name: 'Instagram', url: '#', logo: '📸' , phone:'0994' },
    { name: 'Telegram', url: '#', logo: '✈️' },
    { name: 'LinkedIn', url: '#', logo: '💼' },
    { name: 'WhatsApp', url: '#', logo: '📱' },
  ];
  return (
    <section className="contact-section" id="contact">
      <h2 style={{ color: 'white' }}>ارتباط با من</h2>
      <div className="socials-list">
        {socials.map(social => (
          <a key={social.name} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
           
            <span className="social-logo">{social.logo}</span>
            <span style={{ color: 'white' }} className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
        <div><a href="">link</a></div>
        <div><p>title</p></div>
      </div>
    </section>
  );
}

export default App;