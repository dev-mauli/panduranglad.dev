(function () {
    function sortProjects(projects) {
        return [...projects].sort((a, b) => {
            if (a.inProgress !== b.inProgress) return a.inProgress ? -1 : 1;
            return b.sortDate.localeCompare(a.sortDate);
        });
    }

    function filterProjects(projects, filter) {
        if (filter === 'active') return projects.filter((p) => p.inProgress);
        if (filter === 'shipped') return projects.filter((p) => !p.inProgress);
        return projects;
    }

    function renderLink(link) {
        if (link.variant === 'play') {
            return `<a href="${link.href}" target="_blank" rel="noopener noreferrer"
                class="w-12 h-12 border-2 border-neo-black bg-neo-black text-white flex items-center justify-center hover:bg-neo-blue hover:border-neo-blue transition-all cursor-hover shadow-hard-sm"
                aria-label="${link.aria}">
                <i class="${link.icon} text-2xl"></i>
            </a>`;
        }
        return `<a href="${link.href}" target="_blank" rel="noopener noreferrer"
            class="w-12 h-12 border-2 border-neo-black bg-neo-green flex items-center justify-center hover:bg-neo-black hover:text-white transition-all cursor-hover shadow-hard-sm"
            aria-label="${link.aria}">
            <i class="${link.icon} text-2xl"></i>
        </a>`;
    }

    const HOVER_CLASS = {
        'neo-blue': 'group-hover:text-neo-blue',
        'neo-orange': 'group-hover:text-neo-orange',
        'neo-purple': 'group-hover:text-neo-purple',
        'neo-pink': 'group-hover:text-neo-pink',
        'neo-green': 'group-hover:text-neo-green',
        'neo-red': 'group-hover:text-neo-red',
    };

    function renderProjectCard(project, index) {
        const stagger = index % 2 === 1 ? ' mt-0 md:mt-20' : '';
        const hoverClass = HOVER_CLASS[project.hover] || 'group-hover:text-neo-black';
        const badges = project.inProgress
            ? `<span class="font-mono text-xs font-bold bg-neo-green text-black px-2 py-1 border-2 border-neo-black">In Progress</span>
               <span class="font-mono text-xs font-bold bg-neo-black text-white px-2 py-1">${project.date}</span>`
            : `<span class="font-mono text-xs font-bold bg-neo-black text-white px-2 py-1">${project.date}</span>`;

        const tags = project.tags.map((t) => `<span class="bg-neo-black text-white px-2 py-1">${t}</span>`).join('');
        const links = project.links.map(renderLink).join('');
        const linksWrap = project.links.length > 1
            ? `<div class="flex gap-2 shrink-0">${links}</div>`
            : links;

        return `<article class="reveal group bg-white border-4 border-neo-black p-4 shadow-hard${stagger}" data-in-progress="${project.inProgress}">
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="block border-2 border-neo-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all bg-neo-black">
                <iframe src="${project.preview}" loading="lazy" scrolling="no" class="absolute top-0 left-0 w-[200%] h-[200%] border-0 pointer-events-none origin-top-left" style="transform:scale(0.5)" title="${project.title} preview"></iframe>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </a>
            <div class="flex justify-between items-start gap-4">
                <div class="min-w-0">
                    <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-2 ${hoverClass} transition-colors glitch-hover">${project.title}</h3>
                    <div class="flex gap-2 items-center mb-3 flex-wrap">${badges}</div>
                    <p class="font-mono text-sm mb-4 max-w-xs">${project.description}</p>
                    <div class="flex gap-2 font-mono text-xs font-bold flex-wrap">${tags}</div>
                </div>
                ${linksWrap}
            </div>
        </article>`;
    }

    function observeReveal(container) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        container.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    }

    function renderClientWork(container, options = {}) {
        const el = typeof container === 'string' ? document.querySelector(container) : container;
        if (!el || typeof CLIENT_PROJECTS === 'undefined') return [];

        const filter = options.filter || 'all';
        let list = sortProjects(filterProjects(CLIENT_PROJECTS, filter));

        if (options.inProgressOnly) list = list.filter((p) => p.inProgress);
        if (options.limit) list = list.slice(0, options.limit);

        el.innerHTML = list.map((p, i) => renderProjectCard(p, i)).join('');
        observeReveal(el);
        return list;
    }

    function getClientWorkStats() {
        const total = CLIENT_PROJECTS.length;
        const active = CLIENT_PROJECTS.filter((p) => p.inProgress).length;
        const shipped = total - active;
        return { total, active, shipped };
    }

    window.ClientWork = { render: renderClientWork, sortProjects, filterProjects, getStats: getClientWorkStats };
})();
