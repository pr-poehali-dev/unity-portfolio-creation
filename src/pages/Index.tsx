import { useState } from 'react';
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

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Разработчик 1',
      role: 'Lead Developer',
      avatar: '🎮'
    },
    {
      name: 'Разработчик 2',
      role: 'Game Designer',
      avatar: '🎨'
    },
    {
      name: 'Разработчик 3',
      role: '3D Artist',
      avatar: '🎭'
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

  const socialLinks = [
    { name: 'Discord', icon: 'MessageCircle', url: '#' },
    { name: 'Telegram', icon: 'Send', url: '#' },
    { name: 'TG Канал', icon: 'Radio', url: '#' },
    { name: 'GitHub', icon: 'Github', url: '#' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/364942ea-0dcb-4eb5-af1d-22579e7769db.jpg" 
                alt="JJS GAMES"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-xl font-bold text-primary">JJS GAMES</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="story-link font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#team" className="story-link font-medium hover:text-primary transition-colors">Команда</a>
              <a href="#projects" className="story-link font-medium hover:text-primary transition-colors">Проекты</a>
              <a href="#contacts" className="story-link font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 text-sm px-4 py-1">Unity Developer</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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

      <section id="team" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">JJS GAMES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Команда создана для объединения талантливых разработчиков и воплощения в жизнь 
              амбициозных игровых проектов. Мы фокусируемся на качестве, инновациях и создании 
              незабываемого игрового опыта.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
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

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Мои проекты</h2>
            <p className="text-lg text-muted-foreground">Портфолио реализованных игровых проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground mb-8">Свяжитесь со мной удобным способом</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="lg"
                className="group"
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

      <footer className="py-8 px-4 border-t">
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
