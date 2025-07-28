import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import { Filter } from "@/types/furniture";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, X } from "lucide-react";

const Catalog = () => {
  const [filters, setFilters] = useState<Filter>({});
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 120000]);

  const maxPrice = Math.max(...products.map(p => p.price));

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      
      if (filters.inStock !== undefined && product.inStock !== filters.inStock) {
        return false;
      }
      
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      
      return true;
    });
  }, [filters, priceRange]);

  const handleCategoryFilter = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === categoryId ? undefined : categoryId
    }));
  };

  const clearFilters = () => {
    setFilters({});
    setPriceRange([0, maxPrice]);
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== undefined).length + 
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Каталог мебели</h1>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-muted-foreground">
            Найдено {filteredProducts.length} товаров
          </p>
          
          <div className="flex items-center gap-4">
            {activeFiltersCount > 0 && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Очистить ({activeFiltersCount})
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="sm:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:block ${isFiltersOpen ? 'block' : 'hidden'}`}>
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-4">Категории</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <Button
                        variant={filters.category === category.id ? "default" : "ghost"}
                        size="sm"
                        className="justify-start w-full"
                        onClick={() => handleCategoryFilter(category.id)}
                      >
                        {category.name}
                        <Badge variant="secondary" className="ml-auto">
                          {products.filter(p => p.category === category.id).length}
                        </Badge>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-4">Цена</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={maxPrice}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>

              {/* In Stock */}
              <div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="in-stock"
                    checked={filters.inStock || false}
                    onCheckedChange={(checked) => 
                      setFilters(prev => ({ 
                        ...prev, 
                        inStock: checked ? true : undefined 
                      }))
                    }
                  />
                  <Label htmlFor="in-stock">Только в наличии</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить параметры поиска
              </p>
              <Button onClick={clearFilters}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;