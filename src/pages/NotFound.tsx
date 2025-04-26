import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageContent from './PageContent';

const NotFound = () => {
  return (
    <PageContent>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-9xl font-bold mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-gray-400 mb-8">
            Запрашиваемая страница не существует или была перемещена.
            Вернитесь на главную страницу или воспользуйтесь навигацией.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </div>
    </PageContent>
  );
};

export default NotFound;