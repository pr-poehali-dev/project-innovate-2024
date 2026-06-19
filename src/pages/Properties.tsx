import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid2X2, List, MapPin, Search, SlidersHorizontal } from "lucide-react"

export default function PropertiesPage() {
  const properties = [
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
    {
      id: "4",
      title: "Игровой ПК Phantom RTX 4070",
      type: "Игровой ПК",
      address: "AMD Ryzen 7 7700X / 32 ГБ DDR5",
      price: 174900,
      bedrooms: 32,
      bathrooms: 2000,
      squareFeet: 4070,
      yearBuilt: 2024,
      status: "В наличии",
      imageUrl: "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/17353727-5e97-4264-81fe-f11365cc4e31.jpg",
    },
    {
      id: "5",
      title: "Офисный ПК Office Lite 3300",
      type: "Офисный ПК",
      address: "Intel Core i3-12100 / 8 ГБ DDR4",
      price: 32900,
      bedrooms: 8,
      bathrooms: 256,
      squareFeet: 0,
      yearBuilt: 2024,
      status: "В наличии",
      imageUrl: "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/f180bfd3-1d65-44a8-a91c-ffc559198469.jpg",
    },
    {
      id: "6",
      title: "Ноутбук Ultra Slim 14",
      type: "Ноутбук",
      address: "AMD Ryzen 5 / 16 ГБ / SSD 512 ГБ",
      price: 67900,
      bedrooms: 16,
      bathrooms: 512,
      squareFeet: 0,
      yearBuilt: 2024,
      status: "В наличии",
      imageUrl: "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/1ba33728-8da8-4e18-b2f6-96c5d3202f33.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Каталог компьютеров</h1>
        <p className="text-muted-foreground">Игровые сборки, офисные ПК и ноутбуки с гарантией и доставкой</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Поиск по названию, модели или характеристикам..." className="w-full pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1 sm:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            Фильтры
          </Button>
          <Tabs defaultValue="grid" className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="grid">
                <Grid2X2 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="map">
                <MapPin className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" className="h-9">
            Сначала новые
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="hidden lg:block">
          <SearchFilters />
        </div>
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Загрузить ещё</Button>
          </div>
        </div>
      </div>
    </div>
  )
}