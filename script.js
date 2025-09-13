  // Portfolio Data
        const portfolioData = {
            skills: [
                {
                    category: "Frontend",
                    items: [

                        { name: "JavaScript", level: 85 },
                        { name: "HTML/CSS", level: 95 },
                    ]
                },
                {
                    category: "Backend",
                    items: [
                        { name: "Node.js", level: 80 },
                        { name: "Python", level: 85 },
                        { name: "MongoDB", level: 70 },
                    ]
                },
                {
                    category: "Tools & Others",
                    items: [
                        { name: "Git/GitHub", level: 90 },
                        { name: "Excel", level: 65 },
                        { name: "AWS", level: 60 },
                        { name: "PowerBI", level: 80 }
                    ]
                }
            ],
            projects: [
                {
                    title: "E-Learning Platform",
                    description: "A comprehensive online learning platform built with React and Node.js, featuring course management, video streaming, and progress tracking.",
                    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
                    link: "#",
                    icon: "🎓"
                },
                {
                    title: "Task Management App",
                    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
                    tags: ["Vue.js", "Firebase", "PWA", "Chart.js"],
                    link: "#",
                    icon: "📋"
                },
                {
                    title: "Portfolio CMS",
                    description: "A content management system for portfolios with drag-and-drop interface, custom themes, and SEO optimization features.",
                    tags: ["React", "Express", "MySQL", "CMS"],
                    link: "#",
                    icon: "🎨"
                }
            ]
        };

        // Create particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Load skills
        function loadSkills() {
            const container = document.getElementById('skillsContainer');
            container.innerHTML = '';

            portfolioData.skills.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'skill-category';

                let skillsHTML = `<h3>${category.category}</h3>`;
                category.items.forEach(skill => {
                    skillsHTML += `
                        <div class="skill-item">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-level">
                                <div class="skill-progress" data-width="${skill.level}%"></div>
                            </div>
                        </div>
                    `;
                });

                categoryDiv.innerHTML = skillsHTML;
                container.appendChild(categoryDiv);
            });

            // Animate skill bars
            setTimeout(() => {
                document.querySelectorAll('.skill-progress').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }, 500);
        }

        // Load projects
        function loadProjects() {
            const container = document.getElementById('projectsContainer');
            container.innerHTML = '';

            portfolioData.projects.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.style.animationDelay = `${index * 0.2}s`;

                projectCard.innerHTML = `
                    <div class="project-image">${project.icon}</div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <a href="${project.link}" class="project-link">View Project →</a>
                    </div>
                `;

                container.appendChild(projectCard);
            });
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(item.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });

                // Update active nav item
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Update active navigation on scroll
                window.addEventListener('scroll', () => {
                    const sections = document.querySelectorAll('.section');
                    const navItems = document.querySelectorAll('.nav-item');
        
                    let current = '';
                    const scrollY = window.pageYOffset;
        
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - 100;
                        const sectionHeight = section.offsetHeight;
                        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                            current = section.getAttribute('id');
                        }
                    });
        
                    navItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${current}`) {
                            item.classList.add('active');
                        }
                    });
                });
        
                // Initialize
                createParticles();
                loadSkills();
                loadProjects();