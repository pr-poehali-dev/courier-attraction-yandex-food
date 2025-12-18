import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [hoursPerDay, setHoursPerDay] = useState([6]);

  const calculateIncome = () => {
    const avgOrdersPerHour = 2.5;
    const avgPayPerOrder = 450;
    const hours = hoursPerDay[0];
    const daysPerMonth = 22;
    return Math.round(avgOrdersPerHour * avgPayPerOrder * hours * daysPerMonth);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=97ea05f4a54f41f59d3b2aafca5efea2&utm_content=blank', '_blank');
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Icon name="Bike" className="text-foreground" size={28} />
              </div>
              <h1 className="text-3xl font-black">Яндекс Еда</h1>
            </div>
            <Button variant="outline" size="lg" className="hidden md:flex items-center gap-2">
              <Icon name="Phone" size={18} />
              8 800 600-01-11
            </Button>
          </div>
        </header>

        <section className="mb-20 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  🚀 Стань курьером
                </Badge>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Зарабатывай <span className="text-primary">до 180 000₽</span> в месяц
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Доставляй заказы на самокате, велосипеде или автомобиле. Выбирай удобный график и получай стабильный доход каждую неделю.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=97ea05f4a54f41f59d3b2aafca5efea2&utm_content=blank" target="_blank" rel="noopener noreferrer">
                    Оставить заявку
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('benefits')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-[3rem] p-8 animate-float">
                <div className="w-full h-full bg-card rounded-[2rem] shadow-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/f3df6ee4-1773-4cef-a63b-33d9dd96fa7c.jpg" 
                    alt="Курьер на самокате" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-3xl shadow-xl flex items-center justify-center animate-scale-in">
                <span className="text-4xl font-black text-secondary-foreground">2.5К</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary rounded-3xl shadow-xl flex flex-col items-center justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-5xl font-black text-primary-foreground">180К₽</span>
                <span className="text-sm text-primary-foreground/80">в месяц</span>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/1b65d71d-94ed-4d87-a16b-fbaae24c83b9.jpg" 
                alt="Счастливый курьер" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/35664f62-058c-4327-a458-46135950c5db/files/14654de9-7d3e-4f80-b340-0ed7f67afb5e.jpg" 
                alt="Команда курьеров" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Тысячи курьеров уже зарабатывают с Яндекс Едой</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Clock', title: 'Гибкий график', desc: 'Работай когда удобно — выбирай смены сам', color: 'bg-blue-500/10 text-blue-600' },
              { icon: 'Wallet', title: 'Высокий доход', desc: 'До 180 000₽ в месяц + бонусы и чаевые', color: 'bg-green-500/10 text-green-600' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи — решим любую проблему', color: 'bg-purple-500/10 text-purple-600' },
              { icon: 'TrendingUp', title: 'Быстрый рост', desc: 'Повышай рейтинг и зарабатывай больше', color: 'bg-orange-500/10 text-orange-600' },
              { icon: 'Smartphone', title: 'Простое приложение', desc: 'Интуитивный интерфейс — разберется каждый', color: 'bg-pink-500/10 text-pink-600' },
              { icon: 'Award', title: 'Бонусы и премии', desc: 'Получай награды за отличную работу', color: 'bg-yellow-500/10 text-yellow-600' }
            ].map((benefit, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 duration-300 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon name={benefit.icon as any} size={32} />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Card className="border-4 border-primary/20 shadow-2xl overflow-hidden animate-scale-in">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-4xl font-black mb-4">💰 Калькулятор дохода</CardTitle>
                <CardDescription className="text-lg">Узнай, сколько сможешь зарабатывать</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Сколько часов в день готов работать?</span>
                    <Badge variant="secondary" className="text-xl px-4 py-2">{hoursPerDay[0]} часов</Badge>
                  </div>
                  <Slider
                    value={hoursPerDay}
                    onValueChange={setHoursPerDay}
                    min={2}
                    max={12}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>2 часа</span>
                    <span>12 часов</span>
                  </div>
                </div>
                <div className="bg-card rounded-3xl p-8 shadow-lg border-4 border-primary">
                  <div className="text-center space-y-2">
                    <p className="text-muted-foreground text-lg">Твой доход в месяц:</p>
                    <p className="text-6xl font-black text-primary animate-pulse">{calculateIncome().toLocaleString('ru-RU')} ₽</p>
                    <p className="text-sm text-muted-foreground">≈ {Math.round(calculateIncome() / 22).toLocaleString('ru-RU')} ₽ в день</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-card rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">Заказов в час</p>
                    <p className="text-3xl font-bold">~2.5</p>
                  </div>
                  <div className="bg-card rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">За заказ</p>
                    <p className="text-3xl font-bold">~450₽</p>
                  </div>
                  <div className="bg-card rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-1">Рабочих дней</p>
                    <p className="text-3xl font-bold">22</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Отзывы курьеров</h2>
            <p className="text-xl text-muted-foreground">Реальные истории успеха</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Алексей', age: '24 года', income: '165 000₽', review: 'Работаю 5 месяцев. Отличный заработок при свободном графике. Успеваю учиться и зарабатывать!', rating: 5 },
              { name: 'Мария', age: '28 лет', income: '142 000₽', review: 'Совмещаю с основной работой по вечерам. За 3-4 часа делаю дополнительные 50к в месяц. Супер!', rating: 5 },
              { name: 'Дмитрий', age: '31 год', income: '178 000₽', review: 'Перешёл с офиса на курьера — лучшее решение. Больше зарабатываю и свободного времени стало больше.', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow animate-slide-in-right" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                        {review.name[0]}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{review.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{review.age}</p>
                      </div>
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground">{review.income}</Badge>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-primary text-primary" size={18} />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">{review.review}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Card className="max-w-2xl mx-auto border-4 border-primary shadow-2xl animate-scale-in">
            <CardHeader className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
              <CardTitle className="text-4xl font-black mb-2">🚀 Подать заявку</CardTitle>
              <CardDescription className="text-lg">Нажми кнопку и начни зарабатывать уже завтра</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-xl py-7 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, ты соглашаешься с условиями обработки данных
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Какие требования к курьеру?', a: 'Возраст от 18 лет, наличие смартфона и желание зарабатывать. Транспорт можем предоставить (самокат или велосипед в аренду).' },
              { q: 'Как быстро можно начать работать?', a: 'После одобрения заявки (обычно 1-2 дня) проходишь быстрое обучение онлайн и можешь сразу выходить на заказы.' },
              { q: 'Когда и как выплачивается зарплата?', a: 'Выплаты 2 раза в неделю на банковскую карту. Деньги приходят автоматически после закрытия отчетного периода.' },
              { q: 'Нужен ли свой транспорт?', a: 'Не обязательно. Можем предоставить самокат или велосипед в аренду по выгодной цене. Также можешь работать пешком или на своём транспорте.' },
              { q: 'Можно ли совмещать с учёбой/работой?', a: 'Да! Многие наши курьеры работают по гибкому графику — выбираешь удобные смены сам через приложение.' }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-2xl px-6 bg-card hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="text-center py-12 border-t">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Bike" className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-black">Яндекс Еда</h3>
            </div>
            <div className="flex justify-center gap-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О компании</a>
              <a href="#" className="hover:text-primary transition-colors">Вакансии</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex justify-center gap-4">
              {['Instagram', 'Youtube', 'Send'].map((social) => (
                <button key={social} className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                  <Icon name={social as any} size={20} />
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Яндекс Еда. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}