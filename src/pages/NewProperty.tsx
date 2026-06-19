import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ChevronRight, Upload, X } from "lucide-react"

export default function NewPropertyPage() {
  const [images, setImages] = useState<string[]>([])
  const [amenities, setAmenities] = useState({
    pool: false,
    garage: false,
    garden: false,
    balcony: false,
    elevator: false,
    airConditioning: false,
    furnished: false,
    petFriendly: false,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Товар успешно добавлен!")
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
        <span className="text-foreground">Новый товар</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Добавить товар</h1>
        <p className="text-muted-foreground">Заполните форму ниже, чтобы добавить компьютер в каталог</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Информация о товаре</CardTitle>
              <CardDescription>Основные характеристики компьютера</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Название товара</Label>
                <Input id="title" placeholder="например, Игровой ПК Cyber Storm RTX 4070" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Тип устройства</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gaming">Игровой ПК</SelectItem>
                      <SelectItem value="office">Офисный ПК</SelectItem>
                      <SelectItem value="laptop">Ноутбук</SelectItem>
                      <SelectItem value="workstation">Рабочая станция</SelectItem>
                      <SelectItem value="monoblock">Моноблок</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Наличие</Label>
                  <Select required>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">В наличии</SelectItem>
                      <SelectItem value="pending">Под заказ</SelectItem>
                      <SelectItem value="sold">Нет в наличии</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Цена (руб.)</Label>
                <Input id="price" type="number" min="0" step="1000" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpu">Процессор</Label>
                <Input id="cpu" placeholder="например, Intel Core i7-13700F" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Оперативная память (ГБ)</Label>
                  <Input id="bedrooms" type="number" min="0" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Накопитель SSD (ГБ)</Label>
                  <Input id="bathrooms" type="number" min="0" step="1" required />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="squareFeet">Видеокарта</Label>
                  <Input id="squareFeet" placeholder="например, RTX 4070" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearBuilt">Год выпуска</Label>
                  <Input id="yearBuilt" type="number" min="2015" max={new Date().getFullYear()} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание</Label>
                <Textarea id="description" placeholder="Опишите комплектацию и возможности компьютера..." className="min-h-[150px]" required />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Доставка и гарантия</CardTitle>
                <CardDescription>Условия продажи товара</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="warranty">Гарантия (месяцев)</Label>
                  <Input id="warranty" type="number" min="0" defaultValue="24" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="os">Операционная система</Label>
                  <Input id="os" placeholder="например, Windows 11" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="delivery">Срок доставки (дней)</Label>
                    <Input id="delivery" type="number" min="0" defaultValue="3" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Остаток (шт.)</Label>
                    <Input id="stock" type="number" min="0" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>Как с вами связаться?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Контактное лицо</Label>
                  <Input id="contactName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input id="contactEmail" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Телефон</Label>
                  <Input id="contactPhone" type="tel" required />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Фотографии</CardTitle>
              <CardDescription>Загрузите фото товара (до 10 штук)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label
                  htmlFor="images"
                  className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-input bg-muted/50 px-4 py-5 text-center"
                >
                  <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Нажмите для загрузки</span> или перетащите файлы
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG или WEBP (макс. 5 МБ на изображение)</p>
                  <input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                    onChange={handleImageUpload}
                    disabled={images.length >= 10}
                  />
                </Label>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Фото ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-1 top-1 rounded-full bg-background p-1 shadow-sm"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Дополнительно</CardTitle>
              <CardDescription>Отметьте всё, что есть в этой сборке</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-pool"
                    checked={amenities.pool}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, pool: !!checked })}
                  />
                  <label
                    htmlFor="amenity-pool"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    NVIDIA GeForce
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-garage"
                    checked={amenities.garage}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, garage: !!checked })}
                  />
                  <label
                    htmlFor="amenity-garage"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    SSD NVMe
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-garden"
                    checked={amenities.garden}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, garden: !!checked })}
                  />
                  <label
                    htmlFor="amenity-garden"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wi-Fi
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-balcony"
                    checked={amenities.balcony}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, balcony: !!checked })}
                  />
                  <label
                    htmlFor="amenity-balcony"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Bluetooth
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-elevator"
                    checked={amenities.elevator}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, elevator: !!checked })}
                  />
                  <label
                    htmlFor="amenity-elevator"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Жидкостное охлаждение
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-ac"
                    checked={amenities.airConditioning}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, airConditioning: !!checked })}
                  />
                  <label
                    htmlFor="amenity-ac"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    RGB-подсветка
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-furnished"
                    checked={amenities.furnished}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, furnished: !!checked })}
                  />
                  <label
                    htmlFor="amenity-furnished"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Windows 11
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="amenity-pet"
                    checked={amenities.petFriendly}
                    onCheckedChange={(checked) => setAmenities({ ...amenities, petFriendly: !!checked })}
                  />
                  <label
                    htmlFor="amenity-pet"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Гарантия 24 мес.
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Link to="/properties">
            <Button variant="outline">Отмена</Button>
          </Link>
          <Button type="submit">Добавить товар</Button>
        </div>
      </form>
    </div>
  )
}