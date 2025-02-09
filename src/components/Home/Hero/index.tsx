import { Button } from '../../common/Button';

export const Hero = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl p-8 mb-8">
      <h1 className="text-5xl font-bold text-white mb-4">
        India's <span className="text-pink-500">#1</span> Gaming &
        Analytics Platform
      </h1>
      
      <div className="mb-8">
        <h2 className="text-2xl text-pink-500 mb-2">
          "Get Gaming Data 15 days for free"
        </h2>
        <p className="text-gray-400">
          Then upgrade to unlock the ultimate gaming adventure!
        </p>
      </div>

      <Button variant="primary" size="lg">
        Sign Up
      </Button>
    </div>
  );
};