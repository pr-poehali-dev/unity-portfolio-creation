import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  screenshots: string[];
  longDescription: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: 'tohiro',
      role: 'Lead Developer • Programmer • Team Lead',
      avatar: '👨‍💻'
    },
    {
      name: 'Kisell',
      role: 'Game Designer',
      avatar: '🎨'
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'Увлекательная 3D игра с динамичным геймплеем',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
      screenshots: [
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop'
      ],
      longDescription: 'Полное описание проекта Alpha с деталями механик, особенностей разработки и технологий.'
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Казуальная мобильная игра для широкой аудитории',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
      screenshots: [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=600&fit=crop'
      ],
      longDescription: 'Детальное описание проекта Beta, включая целевую аудиторию и уникальные фичи.'
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Многопользовательский экшен с системой прогрессии',
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=300&fit=crop',
      screenshots: [
        'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop'
      ],
      longDescription: 'Подробная информация о проекте Gamma и технических решениях при разработке многопользовательской системы.'
    }
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: 'Оптимизация Unity проектов: Best Practices',
      description: 'Подробный гайд по оптимизации производительности игр на Unity',
      date: '15 окт 2024',
      tags: ['Unity', 'Performance', 'Optimization']
    },
    {
      id: 2,
      title: 'Архитектура игровых проектов на C#',
      description: 'Как правильно структурировать код в Unity играх',
      date: '10 окт 2024',
      tags: ['C#', 'Architecture', 'Unity']
    },
    {
      id: 3,
      title: 'Реализация системы сохранений',
      description: 'Различные подходы к сохранению прогресса игрока',
      date: '5 окт 2024',
      tags: ['Unity', 'Save System', 'Tutorial']
    },
    {
      id: 4,
      title: 'Procedural Generation в Unity',
      description: 'Создание процедурно генерируемых уровней и контента',
      date: '1 окт 2024',
      tags: ['Unity', 'PCG', 'Advanced']
    }
  ];

  const socialLinks = [
    { name: 'Discord', icon: 'MessageCircle', url: '#' },
    { name: 'Telegram', icon: 'Send', url: '#' },
    { name: 'TG Канал', icon: 'Radio', url: '#' },
    { name: 'GitHub', icon: 'Github', url: '#' }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(234, 88, 12, 0.03) 2px, transparent 2px),
              linear-gradient(90deg, rgba(234, 88, 12, 0.03) 2px, transparent 2px),
              linear-gradient(rgba(234, 88, 12, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(234, 88, 12, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
          }} />
        </div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(234, 88, 12, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(234, 88, 12, 0.06) 0%, transparent 50%)`
        }} />
      </div>
      
      {particles.map((particle, i) => (
        <div
          key={i}
          className="fixed rounded-full bg-primary/20 animate-float pointer-events-none z-0"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/364942ea-0dcb-4eb5-af1d-22579e7769db.jpg" 
                alt="JJS GAMES"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-xl font-bold text-primary glitch-text" data-text="JJS GAMES">JJS GAMES</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="story-link font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#team" className="story-link font-medium hover:text-primary transition-colors">Команда</a>
              <a href="#projects" className="story-link font-medium hover:text-primary transition-colors">Проекты</a>
              <a href="#docs" className="story-link font-medium hover:text-primary transition-colors">Документация</a>
              <a href="#contacts" className="story-link font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow -z-10" style={{animationDelay: '1.5s'}} />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge className="mb-4 text-sm px-4 py-1 animate-pulse-glow">Unity Developer</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glitch-text" data-text="Создаю игры, которые запоминаются">
            Создаю игры, которые запоминаются
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Привет! Я Unity разработчик с опытом создания увлекательных игровых проектов. 
            Специализируюсь на разработке механик, оптимизации производительности и создании 
            уникального игрового опыта для различных платформ.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Badge variant="secondary" className="px-4 py-2">C#</Badge>
            <Badge variant="secondary" className="px-4 py-2">Unity 3D</Badge>
            <Badge variant="secondary" className="px-4 py-2">Mobile</Badge>
            <Badge variant="secondary" className="px-4 py-2">PC</Badge>
            <Badge variant="secondary" className="px-4 py-2">Game Design</Badge>
          </div>
          <Button size="lg" className="group" asChild>
            <a href="#projects">
              Посмотреть проекты
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
        </div>
      </section>

      <section id="team" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-transparent -z-10" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glitch-text" data-text="JJS GAMES">JJS GAMES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Команда создана для объединения талантливых разработчиков и воплощения в жизнь 
              амбициозных игровых проектов. Мы фокусируемся на качестве, инновациях и создании 
              незабываемого игрового опыта.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 hover:-translate-y-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-7xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>{member.avatar}</div>
                  <h3 className="font-semibold text-2xl mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Почему JJS GAMES?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Наша команда объединяет профессионалов с разным опытом и навыками. 
                    Мы верим, что синергия талантов позволяет создавать уникальные проекты, 
                    которые выделяются на рынке и приносят радость игрокам.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow -z-10" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Мои проекты</h2>
            <p className="text-lg text-muted-foreground">Портфолио реализованных игровых проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:rotate-1 border-primary/10"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 story-link inline-block">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/20 to-transparent -z-10" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow -z-10" style={{animationDelay: '2s'}} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Документация</h2>
            <p className="text-lg text-muted-foreground">Статьи и гайды для разработчиков</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card 
                key={article.id}
                className="group cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-primary/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name="FileText" className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 story-link inline-block">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                          {article.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background -z-10" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground mb-8">Свяжитесь со мной удобным способом</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                asChild
              >
                <a href={link.url} className="flex items-center gap-2">
                  <Icon name={link.icon as any} size={20} />
                  {link.name}
                  <Icon name="ExternalLink" size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/10 relative">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 JJS GAMES. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {selectedProject?.screenshots.map((screenshot, index) => (
                <img 
                  key={index}
                  src={screenshot} 
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg w-full aspect-video object-cover"
                />
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Описание проекта</h3>
              <p className="text-muted-foreground leading-relaxed">{selectedProject?.longDescription}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;