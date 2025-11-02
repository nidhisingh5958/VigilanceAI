import { Shield } from 'lucide-react';

export function TopBar() {
  return (
    <div className="flex justify-between items-center px-12 pt-12 pb-6">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <div className="text-[11px] text-gray-400 tracking-wider uppercase">
            VIGILANCE AI
          </div>
          <div className="text-[14px] text-white font-medium">
            Active Monitoring
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="text-[14px] text-gray-400">12:45 PM</div>
        <div className="text-[14px] text-gray-400">23°C</div>
      </div>
    </div>
  );
}
