import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const features = [
    {
      icon: "Camera",
      title: "AI-распознавание одежды",
      description: "Просто сфотографируй вещи — AI распознаёт цвет, фасон и материал автоматически"
    },
    {
      icon: "Sparkles",
      title: "Умные рекомендации",
      description: "Генеративные советы по сочетанию цветов, тканей и фасонов для идеальных образов"
    },
    {
      icon: "Mic",
      title: "Голосовой ассистент",
      description: "Скажи 'Vestis, подбери образ для свидания' и получи готовые варианты за секунды"
    },
    {
      icon: "CloudSun",
      title: "Подбор по погоде",
      description: "Учитываем погоду и календарь событий для идеального образа на каждый день"
    },
    {
      icon: "ShoppingBag",
      title: "Умные покупки",
      description: "Подсказываем, что купить, чтобы дополнить стиль и не дублировать вещи"
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Снижай экологический след за счёт осознанного потребления и использования вещей"
    }
  ];

  const benefits = [
    { number: "80%", text: "Меньше времени на выбор образа" },
    { number: "20%", text: "Используется гардероб обычно" },
    { number: "100%", text: "Твой стиль станет уникальным" }
  ];

  const howItWorks = [
    { step: "1", text: "Сфотографируй вещи", icon: "Camera" },
    { step: "2", text: "Получи цифровой каталог", icon: "Package" },
    { step: "3", text: "AI подбирает образы", icon: "Sparkles" },
    { step: "4", text: "Используй голосового помощника", icon: "Mic" },
    { step: "5", text: "Получай советы по покупкам", icon: "ShoppingBag" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">VESTIS</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="gradient-primary">Скачать</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
              VESTIS
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Превращаем твой смартфон в персонального AI-стилиста и умный гардероб
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gradient-primary text-lg px-8 py-6">
                <Icon name="Download" className="mr-2" />
                Скачать приложение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" />
                Посмотреть видео
              </Button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl animate-pulse-slow"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/30 animate-float">
              <Icon name="Smartphone" size={120} className="mx-auto text-primary" />
              <p className="mt-4 text-lg text-muted-foreground">
                Твой гардероб всегда под рукой 📱✨
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">Возможности</h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            VESTIS использует передовые AI-технологии для создания идеального стиля
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Преимущества</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-7xl font-bold text-gradient mb-4">{benefit.number}</div>
                <p className="text-xl text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Как это работает?</h3>
            <div className="grid md:grid-cols-5 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                    {step.step}
                  </div>
                  <Icon name={step.icon as any} size={40} className="mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-8 text-gradient">О нас</h2>
          <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              <span className="text-2xl font-bold text-foreground">VESTIS</span> — это мобильное приложение, 
              которое превращает ваш смартфон в персонального стилиста и умный гардероб.
            </p>
            <p>
              <strong className="text-foreground">Главная проблема, которую мы решаем:</strong> Люди покупают много одежды, 
              но носят лишь 20% гардероба. Они теряют время и деньги на неосознанные покупки, 
              не могут легко комбинировать вещи и не видят полной картины своего стиля.
            </p>
            <p>
              <strong className="text-foreground">Наше решение:</strong> Мы создаем цифрового двойника вашего гардероба 
              с помощью AI. Вы просто фотографируете вещи, а приложение их распознает и создает 3D-модели.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI-алгоритмы помогают:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" />
                  <span>Составлять идеальные комплекты на основе погоды, календаря и предпочтений</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" />
                  <span>Избавляться от модной слепоты — видеть сочетания и оживлять забытые вещи</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" />
                  <span>Совершать умные покупки — подсказываем, какая вещь дополнит гардероб лучше всего</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" />
                  <span>Снижать экологический след за счет осознанного потребления</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-8 text-gradient">Контакты</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Свяжитесь с нами — мы всегда рады новым идеям и партнёрствам!
          </p>
          <Card className="p-8 border-2 border-primary/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите нам о вашей идее..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-2"
                />
              </div>
              <Button className="w-full gradient-primary text-lg py-6">
                <Icon name="Send" className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold text-gradient mb-4">VESTIS</div>
          <p className="text-muted-foreground mb-6">
            Твой персональный AI-стилист всегда под рукой
          </p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 VESTIS. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
