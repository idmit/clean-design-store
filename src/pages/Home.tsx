import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Создаем уютные
              <span className="text-primary block">пространства</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Минималистичный дизайн, качественные материалы и безупречное мастерство 
              для вашего идеального дома
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog">
                <Button size="lg" className="group">
                  Смотреть каталог
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=800&fit=crop"
            alt="Современная мебель"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group animate-fade-in">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <Truck className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Бесплатная доставка</h3>
            <p className="text-muted-foreground">
              Доставляем бесплатно по всей России при заказе от 50 000 ₽
            </p>
          </div>
          
          <div className="text-center group animate-fade-in">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <Shield className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-muted-foreground">
              3 года гарантии на всю мебель и пожизненная поддержка
            </p>
          </div>
          
          <div className="text-center group animate-fade-in">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <Heart className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Сделано с любовью</h3>
            <p className="text-muted-foreground">
              Каждый предмет создается вручную с особым вниманием к деталям
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные товары</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Откройте для себя наши самые любимые покупателями предметы мебели
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/catalog">
            <Button size="lg" variant="outline" className="group">
              Смотреть все товары
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
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
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Товаров в каталоге</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '200ms'}}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '300ms'}}>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-primary">4.9</span>
                <Star className="h-6 w-6 fill-terracotta text-terracotta" />
              </div>
              <div className="text-muted-foreground">Рейтинг клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Будьте в курсе новинок
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подпишитесь на нашу рассылку и первыми узнавайте о новых коллекциях, 
            скидках и специальных предложениях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;