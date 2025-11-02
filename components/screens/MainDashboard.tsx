import { Heart, Brain, Activity, Navigation } from 'lucide-react';

export function MainDashboard() {
  return (
    <div className="px-12 mt-8">
      <div className="flex gap-6">
        {/* Left Panel - Wellness Score Card */}
        <div className="w-[1200px] h-[480px] bg-gray-800 border border-gray-700 rounded-xl p-8">
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[11px] font-medium text-gray-400 tracking-widest uppercase mb-2">
                DRIVER WELLNESS
              </div>
              <div className="text-[60px] leading-none text-cyan-500 mb-2">
                94
              </div>
              <div className="text-[14px] font-medium text-emerald-500">
                Optimal Condition
              </div>
            </div>
            
            <div className="w-24 h-24 rounded-full border-4 border-cyan-500 flex items-center justify-center">
              <Heart className="w-10 h-10 text-cyan-500" />
            </div>
          </div>
          
          {/* Bottom Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-[12px] text-gray-400 mb-1">Alertness</div>
              <div className="text-[24px] text-emerald-500">98%</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-[12px] text-gray-400 mb-1">Stress</div>
              <div className="text-[24px] text-cyan-500">Low</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-[12px] text-gray-400 mb-1">Fatigue</div>
              <div className="text-[24px] text-emerald-500">12%</div>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Quick Actions Stack */}
        <div className="flex-1 flex flex-col gap-4">
          {/* AI Co-Pilot Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-[140px]">
            <Brain className="w-6 h-6 text-cyan-500 mb-3" />
            <div className="text-[11px] font-medium text-gray-400 tracking-wider uppercase mb-1">
              AI CO-PILOT
            </div>
            <div className="text-[14px] text-white">Ready to assist</div>
          </div>
          
          {/* Trip Time Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-[140px]">
            <Activity className="w-6 h-6 text-emerald-500 mb-3" />
            <div className="text-[11px] font-medium text-gray-400 tracking-wider uppercase mb-1">
              TRIP TIME
            </div>
            <div className="text-[16px] font-medium text-white">1h 23m</div>
          </div>
          
          {/* Destination Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-[140px]">
            <Navigation className="w-6 h-6 text-blue-500 mb-3" />
            <div className="text-[11px] font-medium text-gray-400 tracking-wider uppercase mb-1">
              DESTINATION
            </div>
            <div className="text-[14px] text-white">45 min away</div>
          </div>
        </div>
      </div>
    </div>
  );
}
