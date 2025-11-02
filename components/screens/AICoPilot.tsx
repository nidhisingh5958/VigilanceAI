import { Brain, Coffee, Music, Navigation } from 'lucide-react';

export function AICoPilot() {
  return (
    <div className="px-12 mt-8">
      {/* Co-Pilot Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-[32px] text-white">AI Co-Pilot</h1>
          <div className="text-[12px] text-gray-400">Conversational Assistant</div>
        </div>
      </div>
      
      {/* Current Suggestion Card */}
      <div 
        className="rounded-2xl p-8 mb-6"
        style={{
          background: 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)'
        }}
      >
        <div className="flex gap-4 mb-6">
          <Coffee className="w-6 h-6 text-white flex-shrink-0 mt-1" />
          <div>
            <div className="text-[18px] text-white mb-2">Time for a break?</div>
            <div className="text-[14px] text-white/90 leading-relaxed">
              You've been driving for 2 hours. There's a rest stop 5km ahead with good reviews.
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-6 h-12 bg-white text-cyan-800 text-[14px] rounded-lg shadow-md hover:shadow-lg transition-shadow">
            Navigate
          </button>
          <button className="px-6 h-12 bg-cyan-500/30 text-white text-[14px] font-medium rounded-lg hover:bg-cyan-500/40 transition-colors">
            Remind in 30min
          </button>
        </div>
      </div>
      
      {/* Context-Aware Actions Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors cursor-pointer h-[180px]">
          <Music className="w-5 h-5 text-blue-500 mb-4" />
          <div className="text-[14px] font-medium text-white mb-1.5">
            Play Calming Music
          </div>
          <div className="text-[12px] text-gray-400">Reduce stress levels</div>
        </div>
        
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors cursor-pointer h-[180px]">
          <Navigation className="w-5 h-5 text-emerald-500 mb-4" />
          <div className="text-[14px] font-medium text-white mb-1.5">
            Alternate Route
          </div>
          <div className="text-[12px] text-gray-400">Avoid heavy traffic</div>
        </div>
      </div>
      
      {/* Conversation History Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="text-[11px] font-medium text-gray-400 tracking-widest uppercase mb-5">
          RECENT INTERACTIONS
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3 text-[14px]">
            <span className="text-gray-500 min-w-[48px]">10:30</span>
            <span className="text-gray-300">Suggested caffeine break - Accepted</span>
          </div>
          
          <div className="flex gap-3 text-[14px]">
            <span className="text-gray-500 min-w-[48px]">09:15</span>
            <span className="text-gray-300">Played focus playlist - Stress reduced by 15%</span>
          </div>
          
          <div className="flex gap-3 text-[14px]">
            <span className="text-gray-500 min-w-[48px]">08:45</span>
            <span className="text-gray-300">Morning greeting - Trip started</span>
          </div>
        </div>
      </div>
    </div>
  );
}
