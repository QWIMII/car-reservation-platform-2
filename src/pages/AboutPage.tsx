import PageContent, { PageHeader, Section } from './PageContent';

const AboutPage = () => {
  return (
    <PageContent>
      <PageHeader
        title="О нас"
        description="Узнайте историю развития и философию MEOWEST — лидера в сфере премиального автомобильного проката"
        backgroundImage="/images/about-bg.jpg"
      />

      <Section title="Наша история" bgColor="bg-white" textColor="text-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Компания MEOWEST была основана в 2008 году группой энтузиастов, объединенных страстью к роскошным автомобилям и стремлением создать сервис высочайшего класса для ценителей автомобильной элегантности.
          </p>
          <p className="text-lg mb-6">
            Начав с небольшой коллекции из 5 премиальных автомобилей, сегодня мы гордимся парком из более чем 30 эксклюзивных моделей от самых престижных мировых брендов: Porsche, Bentley, Rolls-Royce, Lamborghini, Ferrari и многих других.
          </p>
          <p className="text-lg mb-6">
            За 15 лет работы мы заслужили репутацию надежного партнера для бизнесменов, знаменитостей и всех, кто ценит комфорт, качество и конфиденциальность. Наши клиенты возвращаются к нам снова и снова, зная, что мы предоставляем не просто автомобили, а незабываемые впечатления.
          </p>
        </div>
      </Section>

      <Section title="Наша философия" bgColor="bg-gray-900" textColor="text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-black p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Индивидуальный подход</h3>
            <p className="text-gray-300">
              Мы знаем, что каждый клиент уникален. Наши сотрудники внимательно изучают предпочтения и требования каждого гостя, чтобы предложить идеальный автомобиль и условия аренды.
            </p>
          </div>
          
          <div className="bg-black p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Безупречный сервис</h3>
            <p className="text-gray-300">
              Комфорт и удобство клиентов — наш главный приоритет. Мы предлагаем доставку автомобиля в любую точку города, гибкие условия аренды и круглосуточную поддержку.
            </p>
          </div>
          
          <div className="bg-black p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Безопасность и качество</h3>
            <p className="text-gray-300">
              Все наши автомобили регулярно проходят техническое обслуживание у официальных дилеров и всегда находятся в идеальном состоянии. Ваша безопасность и комфорт гарантированы.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Команда профессионалов" bgColor="bg-white" textColor="text-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            В MEOWEST работают настоящие профессионалы своего дела. Наши менеджеры помогут подобрать идеальный автомобиль для бизнес-встречи, свадьбы, фотосессии или просто для наслаждения роскошным вождением.
          </p>
          <p className="text-lg mb-6">
            Мы гордимся тем, что в нашей команде работают эксперты, которые не только знают все технические характеристики автомобилей нашего парка, но и по-настоящему увлечены автомобильной культурой. Многие из наших сотрудников являются участниками автомобильных клубов и посещают международные выставки и фестивали.
          </p>
          <p className="text-lg mb-6">
            Наша команда технических специалистов следит за безупречным состоянием каждого автомобиля, гарантируя клиентам не только эстетическое удовольствие, но и полную безопасность.
          </p>
        </div>
      </Section>

      <Section title="Преимущества MEOWEST" bgColor="bg-black" textColor="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">✓ Эксклюзивный автопарк</h3>
            <p className="text-gray-300">
              В нашей коллекции представлены редкие и лимитированные модели, которые вы не найдете в обычных прокатных компаниях.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">✓ Гибкие условия</h3>
            <p className="text-gray-300">
              Возможность аренды на любой срок — от нескольких часов до нескольких месяцев.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">✓ Полная конфиденциальность</h3>
            <p className="text-gray-300">
              Мы уважаем приватность наших клиентов и гарантируем полную конфиденциальность всех сделок.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">✓ VIP-сервис</h3>
            <p className="text-gray-300">
              Персональный менеджер, доставка автомобиля, техническая поддержка 24/7, помощь на дороге.
            </p>
          </div>
        </div>
      </Section>
    </PageContent>
  );
};

export default AboutPage;