import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { Search, Cpu, Plus, Filter } from "lucide-react"

export default function HomePage() {
  const featuredProperties = [
    {
      id: "1",
      title: "Игровой ПК Cyber Storm RTX 4070",
      type: "Игровой ПК",
      address: "Intel Core i7-13700F / 32 ГБ DDR5",
      price: 159900,
      bedrooms: 32,
      bathrooms: 1000,
      squareFeet: 4070,
      yearBuilt: 2024,
      status: "В наличии",
      imageUrl: "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/17353727-5e97-4264-81fe-f11365cc4e31.jpg",
    },
    {
      id: "2",
      title: "Офисный ПК Office Pro 5400",
      type: "Офисный ПК",
      address: "AMD Ryzen 5 5600G / 16 ГБ DDR4",
      price: 49900,
      bedrooms: 16,
      bathrooms: 512,
      squareFeet: 0,
      yearBuilt: 2024,
      status: "В наличии",
      imageUrl: "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/f180bfd3-1d65-44a8-a91c-ffc559198469.jpg",
    },
    {
      id: "3",
      title: "Ноутбук Titan Gaming 16",
      type: "Ноутбук",
      address: "Intel Core i9 / RTX 4080 / 32 ГБ",
      price: 219900,
      bedrooms: 32,
      bathrooms: 1000,
      squareFeet: 4080,
      yearBuilt: 2024,
      status: "Под заказ",
      imageUrl: "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/1ba33728-8da8-4e18-b2f6-96c5d3202f33.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Компьютеры для работы и игр
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Игровые сборки, офисные ПК и ноутбуки с гарантией. Доставим заказ по всей России.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/properties">
                  <Button size="lg" className="gap-1.5">
                    <Cpu className="h-4 w-4" />
                    Перейти в каталог
                  </Button>
                </Link>
                <Link to="/properties/new">
                  <Button size="lg" variant="outline" className="gap-1.5">
                    <Plus className="h-4 w-4" />
                    Добавить товар
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex items-center gap-2 pb-4">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">Быстрый поиск</h2>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Цена от
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любая</option>
                        <option value="30000">30 000 ₽</option>
                        <option value="50000">50 000 ₽</option>
                        <option value="100000">100 000 ₽</option>
                        <option value="150000">150 000 ₽</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Цена до
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любая</option>
                        <option value="80000">80 000 ₽</option>
                        <option value="150000">150 000 ₽</option>
                        <option value="250000">250 000 ₽</option>
                        <option value="500000">500 000+ ₽</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Оперативная память
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любая</option>
                        <option value="8">8 ГБ+</option>
                        <option value="16">16 ГБ+</option>
                        <option value="32">32 ГБ+</option>
                        <option value="64">64 ГБ+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Процессор
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Любой</option>
                        <option value="i3">Intel Core i3 / Ryzen 3</option>
                        <option value="i5">Intel Core i5 / Ryzen 5</option>
                        <option value="i7">Intel Core i7 / Ryzen 7</option>
                        <option value="i9">Intel Core i9 / Ryzen 9</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Тип устройства
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Любой</option>
                      <option value="gaming">Игровой ПК</option>
                      <option value="office">Офисный ПК</option>
                      <option value="laptop">Ноутбук</option>
                      <option value="workstation">Рабочая станция</option>
                      <option value="monoblock">Моноблок</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Модель или бренд"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Link to="/properties">
                    <Button className="w-full">Найти товары</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 pb-8 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Хиты продаж</h2>
              <p className="text-muted-foreground">Популярные модели, которые выбирают наши покупатели</p>
            </div>
            <Link to="/properties">
              <Button variant="outline">Весь каталог</Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}