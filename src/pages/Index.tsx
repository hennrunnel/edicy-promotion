
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-gray-600">Check out our promotional page!</p>
      </div>
      <Link 
        to="/promo" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View Promo Page
      </Link>
    </div>
  );
};

export default Index;
