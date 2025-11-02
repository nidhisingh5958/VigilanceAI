import { Settings } from 'lucide-react';

export function BottomStatusBar() {
  return (
    <div className="flex justify-between items-center px-12 py-4 mt-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-[12px] font-medium text-emerald-500">System Active</span>
        </div>
        <div className="text-[12px] text-gray-400">Vehicle: Connected</div>
      </div>
      
      <Settings className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-400 transition-colors" />
    </div>
  );
}
