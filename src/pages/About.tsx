import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Award, 
  Leaf, 
  Clock, 
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Качество превыше всего",
      description: "Мы используем только лучшие материалы и проверенные технологии производства для создания мебели, которая прослужит десятилетия."
    },
    {
      icon: Leaf,
      title: "Экологичность",
      description: "Заботимся об окружающей среде, используя экологически чистые материалы и ответственные методы производства."
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Каждый клиент уникален, и мы готовы создать мебель, которая идеально впишется в ваш интерьер и образ жизни."
    },
    {
      icon: Award,
      title: "Мастерство",
      description: "Наши мастера имеют многолетний опыт и постоянно совершенствуют свои навыки для создания безупречных изделий."
    }
  ];

  const team = [
    {
      name: "Анна Петрова",
      role: "Основатель и дизайнер",
      description: "15 лет опыта в дизайне интерьеров и создании мебели",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b2b1d8?w=300&h=300&fit=crop"
    },
    {
      name: "Михаил Соколов",
      role: "Главный мастер",
      description: "20 лет работы с деревом, эксперт по столярному делу",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Елена Васильева",
      role: "Дизайнер интерьеров",
      description: "Специалист по созданию гармоничных пространств",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4">О компании</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Создаем мебель с
              <span className="text-primary block">душой и страстью</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Уже более 5 лет мы создаем уникальную мебель, которая делает дома уютнее, 
              а жизнь комфортнее. Наша философия — качество, красота и забота о каждой детали.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша история</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Все началось в 2019 году с небольшой мастерской и большой мечты — 
                создавать мебель, которая будет радовать людей каждый день. 
                Основатель компании, Анна Петрова, работала дизайнером интерьеров 
                и часто сталкивалась с проблемой: красивая и качественная мебель 
                была либо слишком дорогой, либо недоступной.
              </p>
              <p>
                Мы решили изменить это. Начав с изготовления мебели на заказ для друзей 
                и знакомых, постепенно выросли в команду профессионалов, которая создает 
                уникальные предметы интерьера для тысяч довольных клиентов.
              </p>
              <p>
                Сегодня наша мастерская оснащена современным оборудованием, 
                но мы по-прежнему сохраняем традиции ручной работы и внимание 
                к каждой детали, которые заложили в основу нашей компании.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop"
              alt="Наша мастерская"
              className="w-full rounded-2xl shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши ценности</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Принципы, которые определяют каждое наше решение и каждый созданный предмет
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-card animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Талантливые люди, которые воплощают ваши мечты в реальность
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-0 bg-gradient-card overflow-hidden animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '100ms'}}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2500+</div>
              <div className="text-muted-foreground">Изготовлено предметов</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '200ms'}}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '300ms'}}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Мастеров в команде</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Готовы обсудить ваш проект? Мы всегда рады помочь с выбором мебели 
              или создать что-то уникальное специально для вас.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Адрес</div>
                  <div className="text-muted-foreground">г. Москва, ул. Дизайнерская, 15</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Телефон</div>
                  <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">info@furniture-studio.ru</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Режим работы</div>
                  <div className="text-muted-foreground">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="animate-slide-up border-0 bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Остались вопросы?</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="ваш@email.ru"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Отправить сообщение
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Готовы создать мебель вашей мечты?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Просмотрите наш каталог или свяжитесь с нами для создания 
            индивидуального решения для вашего интерьера
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg">
                Смотреть каталог
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;