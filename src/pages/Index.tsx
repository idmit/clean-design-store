import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-beige to-soft-cream py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-earth-brown/10 text-earth-brown border-earth-brown/20">
                Премиум качество
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Создайте дом{" "}
                <span className="text-earth-brown">мечты</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Откройте для себя нашу коллекцию элегантной мебели, где современный дизайн встречается с традиционным мастерством
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/catalog">
                    Каталог
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">О нас</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-warm-beige/20 to-soft-cream/20 p-8">
                  <div className="w-full h-full bg-accent rounded-2xl flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-24 h-24 mx-auto mb-4 bg-earth-brown/10 rounded-full flex items-center justify-center">
                        <Star className="w-12 h-12 text-earth-brown" />
                      </div>
                      <p>Премиум мебель</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-earth-brown/10 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-earth-brown" />
                </div>
                <h3 className="font-semibold mb-2">Бесплатная доставка</h3>
                <p className="text-sm text-muted-foreground">
                  При заказе от 50,000 ₽
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-earth-brown/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-earth-brown" />
                </div>
                <h3 className="font-semibold mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">
                  5 лет гарантии на всю мебель
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-earth-brown/10 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-earth-brown" />
                </div>
                <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Всегда готовы помочь
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-soft-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Популярные товары
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя нашу тщательно отобранную коллекцию самых популярных предметов мебели
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/catalog">Смотреть все товары</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
