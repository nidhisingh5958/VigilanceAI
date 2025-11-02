export function WellnessMonitor() {
  return (
    <div className="px-12 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[32px] text-white">Wellness Monitor</h1>
        <div className="text-[11px] text-gray-400">Real-time Analysis</div>
      </div>
      
      {/* Primary Metrics Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Eye Activity Card */}
        <div className="bg-gray-800 border-l-4 border-l-cyan-500 rounded-xl p-8">
          <div className="text-[11px] font-medium text-gray-400 tracking-widest uppercase mb-4">
            EYE ACTIVITY (PERCLOS)
          </div>
          <div className="text-[48px] leading-none text-cyan-500 mb-3">
            4.2%
          </div>
          <div className="text-[12px] text-emerald-500">Within safe range</div>
        </div>
        
        {/* Heart Rate Card */}
        <div className="bg-gray-800 border-l-4 border-l-blue-500 rounded-xl p-8">
          <div className="text-[11px] font-medium text-gray-400 tracking-widest uppercase mb-4">
            HEART RATE
          </div>
          <div className="text-[48px] leading-none text-blue-500 mb-3">
            72 BPM
          </div>
          <div className="text-[12px] text-emerald-500">Normal rhythm</div>
        </div>
      </div>
      
      {/* Emotion Recognition Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-6">
        <div className="text-[11px] font-medium text-gray-400 tracking-widest uppercase mb-5">
          FACIAL EMOTION RECOGNITION
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-[14px] font-medium text-white">Calm & Focused</span>
            </div>
            
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="text-[32px] text-emerald-500">85%</div>
        </div>
      </div>
      
      {/* Driving Pattern Analysis Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
        <div className="text-[11px] font-medium text-gray-400 tracking-widest uppercase mb-5">
          DRIVING PATTERN ANALYSIS
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-[12px] text-gray-400 mb-2">Lane Keeping</div>
            <div className="text-[20px] text-emerald-500">Stable</div>
          </div>
          
          <div className="text-center">
            <div className="text-[12px] text-gray-400 mb-2">Steering Input</div>
            <div className="text-[20px] text-cyan-500">Smooth</div>
          </div>
          
          <div className="text-center">
            <div className="text-[12px] text-gray-400 mb-2">Speed Control</div>
            <div className="text-[20px] text-emerald-500">Steady</div>
          </div>
        </div>
      </div>
    </div>
  );
}
