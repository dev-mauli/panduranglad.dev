/** Client work portfolio — add new projects here (single source of truth).
 *  Copy an existing entry, update fields, and set sortDate as YYYY-MM for ordering.
 *  Set inProgress: true for active builds. Pages update automatically.
 */
const CLIENT_PROJECTS = [
    {
        title: 'SNVVS — Website and Android App',
        url: 'https://snvsamaj.in/',
        preview: 'https://snvsamaj.in/',
        date: 'Jul 2026',
        sortDate: '2026-07',
        inProgress: true,
        hover: 'neo-blue',
        description: 'Community platform for Shree Navgam Visanagar Vanik Samaj—Angular website plus SNVVS React Native Android app. News, membership, matrimony, donations, and forms in English & Gujarati.',
        tags: ['Angular', '.NET Core API', 'SQL Server', 'React Native', 'Android', 'iOS'],
        links: [
            { href: 'https://play.google.com/store/apps/details?id=com.snv.samaj', icon: 'ri-google-play-fill', aria: 'View SNVVS on Google Play', variant: 'play' },
            { href: 'https://snvsamaj.in/', icon: 'ri-arrow-right-up-line', aria: 'Visit SNVVS website', variant: 'site' }
        ]
    },
    {
        title: 'GadiCircle',
        url: 'https://gadicircle.com/',
        preview: 'https://gadicircle.com/',
        date: 'May 2026',
        sortDate: '2026-05',
        inProgress: true,
        hover: 'neo-orange',
        description: 'Architectural engineering in motion—showcasing design expertise, projects, and engineering services with a modern web presence.',
        tags: ['React.js', '.NET Core', 'SQL Server'],
        links: [{ href: 'https://gadicircle.com/', icon: 'ri-arrow-right-up-line', aria: 'Visit GadiCircle', variant: 'site' }]
    },
    {
        title: 'Holidays Vibes',
        url: 'https://holidayvibeshv.in/',
        preview: 'https://holidayvibeshv.in/',
        date: 'Jun 2026',
        sortDate: '2026-06',
        inProgress: false,
        hover: 'neo-purple',
        description: 'Premium holiday experiences—curated travel packages, destinations, and booking for memorable getaways.',
        tags: ['React.js', 'Node.js', 'SQL Server'],
        links: [{ href: 'https://holidayvibeshv.in/', icon: 'ri-arrow-right-up-line', aria: 'Visit Holidays Vibes', variant: 'site' }]
    },
    {
        title: 'FoodRaksha',
        url: 'https://foodraksha.com/',
        preview: 'https://foodraksha.com/',
        date: 'Feb 2026',
        sortDate: '2026-02',
        inProgress: false,
        hover: 'neo-orange',
        description: 'FSSAI license application, modification, renewal. Product endorsements for organic and vegan certification. Expert compliance support.',
        tags: ['.NET MVC', 'SQL Server', 'FSSAI'],
        links: [{ href: 'https://foodraksha.com/', icon: 'ri-arrow-right-up-line', aria: 'Visit FoodRaksha', variant: 'site' }]
    },
    {
        title: 'Dodo Stitch',
        url: 'https://dodostitch.com/',
        preview: 'https://dodostitch.com/',
        date: 'Dec 2025',
        sortDate: '2025-12',
        inProgress: false,
        hover: 'neo-pink',
        description: 'E-commerce for artisan needlepoint kits—reviving the extinct, one stitch at a time. Product catalog, Razorpay checkout, and cloud-hosted operations on Azure.',
        tags: ['.NET Core API', 'Angular', 'Razorpay', 'SQL Server', 'Azure Cloud'],
        links: [{ href: 'https://dodostitch.com/', icon: 'ri-arrow-right-up-line', aria: 'Visit Dodo Stitch', variant: 'site' }]
    },
    {
        title: 'KokanSwad',
        url: 'https://kokanswad.com/',
        preview: 'https://kokanswad.com/',
        date: 'Aug 2025',
        sortDate: '2025-08',
        inProgress: false,
        hover: 'neo-green',
        description: 'E-commerce for fresh Konkan products—Awla, Kokam, Mangoes. Doorstep delivery, 24x7 support, authentic regional produce.',
        tags: ['Angular', '.NET Core API', 'SQL Server'],
        links: [{ href: 'https://kokanswad.com/', icon: 'ri-arrow-right-up-line', aria: 'Visit KokanSwad', variant: 'site' }]
    },
    {
        title: 'Vidya Weds Pandurang',
        url: 'https://vidya-weds-pandurang.netlify.app/#/',
        preview: 'https://vidya-weds-pandurang.netlify.app/#/',
        date: 'Dec 2024',
        sortDate: '2024-12',
        inProgress: false,
        hover: 'neo-red',
        description: 'Elegant wedding portfolio showcasing event details, gallery, and RSVP. Beautiful invitation experience on web.',
        tags: ['Angular', 'Netlify', 'TypeScript'],
        links: [{ href: 'https://vidya-weds-pandurang.netlify.app/#/', icon: 'ri-arrow-right-up-line', aria: 'Visit Vidya Weds Pandurang', variant: 'site' }]
    },
    {
        title: 'JJC Kalanagari',
        url: 'https://jjckalanagari.com/',
        preview: 'https://jjckalanagari.com/',
        date: 'Jun 2024',
        sortDate: '2024-06',
        inProgress: false,
        hover: 'neo-blue',
        description: 'Yuva Mela registration and event platform. PhonePe Payment Gateway integration, QR check-in, profile management. Jain community engagement.',
        tags: ['Angular', '.NET Core API', 'SQL Server', 'PhonePe'],
        links: [{ href: 'https://jjckalanagari.com/', icon: 'ri-arrow-right-up-line', aria: 'Visit JJC Kalanagari', variant: 'site' }]
    },
    {
        title: 'EOTO India Foundation',
        url: 'https://www.eotoindia.org/',
        preview: 'https://www.eotoindia.org/',
        date: 'Sep 2023',
        sortDate: '2023-09',
        inProgress: false,
        hover: 'neo-pink',
        description: 'Charitable foundation platform for donations and events. CC Avenue payment gateway integration. Serving 10,000+ children since 1983.',
        tags: ['.NET MVC', 'SQL Server', 'CC Avenue'],
        links: [{ href: 'https://www.eotoindia.org/', icon: 'ri-arrow-right-up-line', aria: 'Visit EOTO India Foundation', variant: 'site' }]
    }
];
