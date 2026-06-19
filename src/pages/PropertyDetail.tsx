import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MemoryStick, HardDrive, MonitorPlay, Cpu, Phone, Mail, Heart, Share2, Home, ChevronRight } from "lucide-react"

export default function PropertyDetailPage() {
  const { id } = useParams()

  const property = {
    id: id,
    title: "Игровой ПК Cyber Storm RTX 4070",
    type: "Игровой ПК",
    address: "Intel Core i7-13700F / 32 ГБ DDR5",
    price: 159900,
    bedrooms: 32,
    bathrooms: 1000,
    squareFeet: 4070,
    yearBuilt: 2024,
    status: "В наличии",
    description:
      "Мощный игровой компьютер для современных игр в высоком разрешении и стримов. Процессор Intel Core i7-13700F и видеокарта NVIDIA GeForce RTX 4070 обеспечивают высокий FPS в любых проектах. 32 ГБ быстрой памяти DDR5 и NVMe SSD на 1 ТБ для мгновенной загрузки. Эффективное жидкостное охлаждение и стильный корпус с RGB-подсветкой. Собран и протестирован нашими инженерами, готов к работе сразу из коробки.",
    features: [
      "Intel Core i7-13700F",
      "NVIDIA GeForce RTX 4070",
      "32 ГБ DDR5",
      "SSD NVMe 1 ТБ",
      "Жидкостное охлаждение",
      "Блок питания 750W",
      "Wi-Fi 6 + Bluetooth",
      "RGB-подсветка",
      "Windows 11",
      "Корпус с закалённым стеклом",
      "Гарантия 24 месяца",
      "Бесплатная доставка",
    ],
    images: [
      "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/17353727-5e97-4264-81fe-f11365cc4e31.jpg",
      "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/f180bfd3-1d65-44a8-a91c-ffc559198469.jpg",
      "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/1ba33728-8da8-4e18-b2f6-96c5d3202f33.jpg",
      "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/17353727-5e97-4264-81fe-f11365cc4e31.jpg",
      "https://cdn.poehali.dev/projects/5920c6f3-8b49-4ec3-a481-a2dbc04bdc6b/files/f180bfd3-1d65-44a8-a91c-ffc559198469.jpg",
    ],
    agent: {
      name: "Алексей Смирнов",
      phone: "+7 (495) 123-45-67",
      email: "sales@cybermarket.ru",
      image: "/placeholder.svg?height=200&width=200",
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="flex items-center gap-1 hover:text-foreground">
          <Home className="h-4 w-4" />
          Главная
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/properties" className="hover:text-foreground">
          Каталог
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{property.title}</span>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-2 text-3xl font-bold">{property.title}</h1>
          <div className="mb-4 flex items-center gap-2">
            <Cpu className="h-4 w-4 text-muted-foreground" />
            <span>{property.address}</span>
            <Badge
              className={
                property.status === "В наличии"
                  ? "bg-green-100 text-green-800"
                  : property.status === "Под заказ"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }
              variant="outline"
            >
              {property.status}
            </Badge>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MemoryStick className="h-5 w-5" />
              <span>{property.bedrooms} ГБ ОЗУ</span>
            </div>
            <div className="flex items-center gap-1">
              <HardDrive className="h-5 w-5" />
              <span>SSD {property.bathrooms} ГБ</span>
            </div>
            <div className="flex items-center gap-1">
              <MonitorPlay className="h-5 w-5" />
              <span>RTX {property.squareFeet}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="text-3xl font-bold">{formatPrice(property.price)}</div>
          <div className="mt-4 flex gap-2">
            <Button size="lg">Купить в один клик</Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              В избранное
            </Button>
            <Button size="icon" variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="col-span-4 aspect-video overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2">
          <img
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        </div>
        {property.images.slice(1, 5).map((image, index) => (
          <div key={index} className="col-span-2 aspect-video overflow-hidden rounded-lg sm:col-span-1">
            <img
              src={image || "/placeholder.svg"}
              alt={`${property.title} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="description">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="features">Характеристики</TabsTrigger>
              <TabsTrigger value="location">Доставка</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h2 className="text-2xl font-semibold">Описание товара</h2>
              <p className="leading-relaxed">{property.description}</p>
            </TabsContent>
            <TabsContent value="features">
              <h2 className="mb-4 text-2xl font-semibold">Характеристики и комплектация</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="location">
              <h2 className="mb-4 text-2xl font-semibold">Доставка и оплата</h2>
              <div className="space-y-3 leading-relaxed">
                <p>Бесплатная доставка по всей России от 3 рабочих дней. Курьером по городу — в день заказа.</p>
                <p>Оплата онлайн картой, при получении или в рассрочку. Гарантия 24 месяца на всю технику.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <img
                src={property.agent.image || "/placeholder.svg"}
                alt={property.agent.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{property.agent.name}</h3>
              <p className="text-sm text-muted-foreground">Менеджер по продажам</p>
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{property.agent.email}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Ваш Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Ваш телефон
              </label>
              <input
                id="phone"
                type="tel"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={`Здравствуйте! Меня интересует "${property.title}". Прошу связаться со мной для оформления заказа.`}
              ></textarea>
            </div>
            <Button className="w-full">Отправить заявку</Button>
          </div>
        </div>
      </div>
    </div>
  )
}